import {
  AhrsEvents, APEvents, CompiledMapSystem, ComponentProps, DisplayComponent, EventBus, FlightPlanner, FSComponent, HEvent, MapSystemBuilder, NodeReference,
  Vec2Math, VNode
} from 'msfssdk';

import { GarminMapKeys, MapRangeController, NavIndicatorController, TrafficAdvisorySystem, TrafficUserSettings, UnitsUserSettings } from 'garminsdk';

import { MapBuilder } from '../../../Shared/Map/MapBuilder';
import { MapUserSettings } from '../../../Shared/Map/MapUserSettings';
import { MapWaypointIconImageCache } from '../../../Shared/Map/MapWaypointIconImageCache';
import { AHRSSystemEvents } from '../../../Shared/Systems/AHRSSystem';
import { AvionicsSystemState, AvionicsSystemStateEvent } from '../../../Shared/Systems/G1000AvionicsSystem';
import { CompassRose } from './CompassRose';
import { CourseNeedles } from './CourseNeedles';
import { HSIMapCourseDeviation } from './HSIMapCourseDeviation';
import { TurnRateIndicator } from './TurnRateIndicator';

import './HSIMap.css';

/**
 * Props for the HSIMap component.
 */
interface HSIMapProps extends ComponentProps {
  /** An instance of the event bus. */
  bus: EventBus;
  /** An instance of the flight planner. */
  flightPlanner: FlightPlanner;
  /** An instance of the HSI Controller. */
  controller: NavIndicatorController;
  /** The G1000 traffic advisory system. */
  tas: TrafficAdvisorySystem;
}

/**
 * An HSI component with a moving map.
 */
export class HSIMap extends DisplayComponent<HSIMapProps> {
  private static readonly UPDATE_FREQ = 30; // Hz
  private static readonly DATA_UPDATE_FREQ = 5; // Hz

  private readonly containerRef = new NodeReference<HTMLDivElement>();
  private readonly rotatingEl = new NodeReference<HTMLDivElement>();
  private readonly compassRoseComponent = FSComponent.createRef<CompassRose>();
  private headingElement = FSComponent.createRef<HTMLElement>();
  private turnRateIndicator = FSComponent.createRef<TurnRateIndicator>();
  private headingBugElement = FSComponent.createRef<SVGElement>();
  private courseNeedlesElement = FSComponent.createRef<CourseNeedles>();
  private bearingPointer1Element = FSComponent.createRef<HTMLElement>();
  private bearingPointer2Element = FSComponent.createRef<HTMLElement>();
  private deviationElement = FSComponent.createRef<HSIMapCourseDeviation>();

  private readonly mapSettingManager = MapUserSettings.getPfdManager(this.props.bus);

  private readonly compiledMap = MapSystemBuilder.create(this.props.bus)
    .with(MapBuilder.hsiMap, {
      bingId: 'pfd-map',
      dataUpdateFreq: HSIMap.DATA_UPDATE_FREQ,

      waypointIconImageCache: MapWaypointIconImageCache.getCache(),

      flightPlanner: this.props.flightPlanner,

      ...MapBuilder.ownAirplaneIconOptions(),

      trafficSystem: this.props.tas,
      trafficIconOptions: {
        iconSize: 30,
        font: 'Roboto-Bold',
        fontSize: 16
      },

      settingManager: this.mapSettingManager as any,
      unitsSettingManager: UnitsUserSettings.getManager(this.props.bus),
      trafficSettingManager: TrafficUserSettings.getManager(this.props.bus) as any
    })
    .withProjectedSize(Vec2Math.create(350, 350))
    .withClockUpdate(HSIMap.UPDATE_FREQ)
    .build('pfd-hsimap') as CompiledMapSystem<
      any,
      any,
      {
        /** The range controller. */
        [GarminMapKeys.Range]: MapRangeController;
      },
      any
    >;

  private readonly mapRangeController = this.compiledMap.context.getController(GarminMapKeys.Range);

  private isFailed = false;

  /**
   * A callback called when the component finishes rendering.
   */
  public onAfterRender(): void {
    this.setVisible(false);
    this.registerWithController();

    const ahrs = this.props.bus.getSubscriber<AhrsEvents>();
    const ap = this.props.bus.getSubscriber<APEvents>();
    const hEvents = this.props.bus.getSubscriber<HEvent>();

    ahrs.on('hdg_deg')
      .withPrecision(1)
      .handle(this.updateRotatingElements);
    ap.on('ap_heading_selected')
      .withPrecision(0)
      .handle(this.updateSelectedHeadingDisplay.bind(this));
    ahrs.on('delta_heading_rate')
      .withPrecision(1)
      .handle(rate => this.turnRateIndicator.instance.setTurnRate(rate));
    hEvents.on('hEvent').handle(this.onInteractionEvent.bind(this));

    if (this.bearingPointer1Element.instance !== null) {
      this.bearingPointer1Element.instance.style.display = 'none';
    }

    if (this.bearingPointer2Element.instance !== null) {
      this.bearingPointer2Element.instance.style.display = 'none';
    }

    if (this.compassRoseComponent.getOrDefault() !== null) {
      this.compassRoseComponent.instance.setCircleVisible(false);
    }

    this.props.bus.getSubscriber<AHRSSystemEvents>()
      .on('ahrs_state')
      .handle(this.onAhrsStateChanged.bind(this));
  }

  /**
   * A callaback called when the system screen state changes.
   * @param state The state change event to handle.
   */
  private onAhrsStateChanged(state: AvionicsSystemStateEvent): void {
    if (state.previous === undefined && state.current !== AvionicsSystemState.Off) {
      this.setFailed(false);
    } else {
      if (state.current === AvionicsSystemState.On) {
        this.setFailed(false);
      } else {
        this.setFailed(true);
      }
    }
  }

  /**
   * Sets if the display should be failed or not.
   * @param isFailed True if failed, false otherwise.
   */
  private setFailed(isFailed: boolean): void {
    if (isFailed) {
      this.isFailed = true;
      this.containerRef.instance.classList.add('failed-instr');
    } else {
      this.isFailed = false;
      this.containerRef.instance.classList.remove('failed-instr');
    }
  }

  /**
   * Updates the rotating elements container.
   * @param heading The heading to rotate to.
   */
  public updateRotatingElements = (heading: number): void => {
    if (this.isFailed) {
      heading = 0;
    }

    this.rotatingEl.instance.style.transform = `rotate3d(0, 0, 1, ${-heading}deg)`;
    if (this.headingElement.instance !== null) {
      const hdg = Math.round(heading) == 0 ? 360 : Math.round(heading);
      this.headingElement.instance.textContent = `${hdg}°`.padStart(4, '0');
    }
  };

  /**
   * A callback which is called when an interaction event occurs.
   * @param hEvent An interaction event.
   */
  private onInteractionEvent(hEvent: string): void {
    if (!this.compiledMap.ref.instance.isAwake) {
      return;
    }

    switch (hEvent) {
      case 'AS1000_PFD_RANGE_INC':
        this.changeMapRangeIndex(1);
        break;
      case 'AS1000_PFD_RANGE_DEC':
        this.changeMapRangeIndex(-1);
        break;
    }
  }

  /**
   * Changes the MFD map range index setting.
   * @param delta The change in index to apply.
   */
  private changeMapRangeIndex(delta: number): void {
    this.mapRangeController.changeRangeIndex(delta);
  }

  /**
   * Updates the heading indicator when the heading changes.
   * @param selHdg deg The new heading value.
   */
  private updateSelectedHeadingDisplay(selHdg: number): void {
    if (this.headingBugElement.instance !== null) {
      this.headingBugElement.instance.style.transform = `rotate3d(0, 0, 1, ${selHdg}deg)`;
    }
  }

  /**
   * Sets whether or not the HSI with map is visible.
   * @param isVisible Whether or not the component is visible.
   */
  public setVisible(isVisible: boolean): void {
    this.containerRef.instance.style.display = isVisible ? '' : 'none';
    isVisible ? this.compiledMap.ref.instance.wake() : this.compiledMap.ref.instance.sleep();
  }

  /**
   * Registers the course needles instance with the HSI Controller.
   */
  private registerWithController(): void {
    this.props.controller.courseNeedleRefs.hsiMap = this.courseNeedlesElement;
    this.props.controller.hsiMapDeviationRef = this.deviationElement;
  }

  /**
   * Renders the HSIMap component.
   * @returns The rendered component VNode.
   */
  public render(): VNode {
    return (
      <div class="hsi-map-container" ref={this.containerRef}>
        {this.compiledMap.map}
        <HSIMapCourseDeviation ref={this.deviationElement} controller={this.props.controller} />
        <div class="hsi-map-hdg-box">
          <div class="failed-box" />
          <span ref={this.headingElement}>360</span>
        </div>
        <div class='hsi-map-rotating-elements' ref={this.rotatingEl}>
          <CompassRose ref={this.compassRoseComponent} size={350} margin={0} gradient={true} />
          <div class='hsi-map-bearing-pointer' ref={this.bearingPointer1Element}>
            <svg viewBox="0 0 386 340">
              <path d="M 175 20 l 0 7 l -16 16 M 175 27 l 16 16 M 175 27 l 0 25 z M 175 290 l 0 40" fill="none" stroke="cyan" stroke-width="2px" />
            </svg>
          </div>
          <div class='hsi-map-bearing-pointer' ref={this.bearingPointer2Element}>
            <svg viewBox="0 0 386 340">
              <path d="M 175 20 l 0 7 l -16 16 M 175 27 l 16 16 M 170 32 l 0 20 M 180 32 l 0 20 M 170 290 l 0 32 l 10 0 l 0 -32 M 175 322 l 0 8" fill="none" stroke="cyan" stroke-width="2px" />
            </svg>
          </div>
          <div class="hsi-map-hdg-bug" ref={this.headingBugElement}>
            <svg>
              <path d="M 175 175 m 0 -160 l 4 -9 l 8 0 l 0 12 l -24 0 l 0 -12 l 8 0 l 4 9 z" fill="cyan" stroke="black" stroke-width="1px" />
            </svg>
          </div>
          <CourseNeedles hsiMap={true} ref={this.courseNeedlesElement} controller={this.props.controller} />
        </div>
        <TurnRateIndicator hsiMap={true} ref={this.turnRateIndicator} />
      </div>
    );
  }
}