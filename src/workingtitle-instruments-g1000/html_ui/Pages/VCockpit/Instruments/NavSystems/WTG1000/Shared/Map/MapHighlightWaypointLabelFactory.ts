import { MapCullableLocationTextLabel, MapCullableTextLabel, MapWaypointRendererLabelFactory } from 'msfssdk/components/map';
import { AirportWaypoint, FacilityType, FacilityWaypoint, ICAO, Waypoint } from 'msfssdk/navigation';

import { MapWaypointHighlightStyles } from './MapWaypointStyles';

/**
 * A waypoint label factory for highlighted waypoints.
 */
export class MapHighlightWaypointLabelFactory implements MapWaypointRendererLabelFactory<Waypoint> {
  private readonly cache = new Map<string, MapCullableTextLabel>();

  /**
   * Constructor.
   * @param styles Icon styling options used by this factory.
   */
  constructor(private readonly styles: MapWaypointHighlightStyles) {
  }

  /** @inheritdoc */
  public getLabel<T extends Waypoint>(role: number, waypoint: T): MapCullableTextLabel {
    let existing = this.cache.get(waypoint.uid);
    if (!existing) {
      existing = this.createLabel(waypoint);
      this.cache.set(waypoint.uid, existing);
    }

    return existing;
  }

  /**
   * Creates a new label for a waypoint.
   * @param waypoint The waypoint for which to create an label.
   * @returns A waypoint label.
   */
  private createLabel<T extends Waypoint>(waypoint: T): MapCullableTextLabel {
    let text = '';
    let priority = 0;
    let options;

    if (waypoint instanceof FacilityWaypoint) {
      text = ICAO.getIdent(waypoint.facility.icao);
      switch (ICAO.getFacilityType(waypoint.facility.icao)) {
        case FacilityType.Airport:
          priority = this.styles.airportLabelPriority[(waypoint as unknown as AirportWaypoint<any>).size];
          options = this.styles.airportLabelOptions[(waypoint as unknown as AirportWaypoint<any>).size];
          break;
        case FacilityType.VOR:
          priority = this.styles.vorLabelPriority;
          options = this.styles.vorLabelOptions;
          break;
        case FacilityType.NDB:
          priority = this.styles.ndbLabelPriority;
          options = this.styles.ndbLabelOptions;
          break;
        case FacilityType.Intersection:
          priority = this.styles.intLabelPriority;
          options = this.styles.intLabelOptions;
          break;
        case FacilityType.USR:
          priority = this.styles.userLabelPriority;
          options = this.styles.userLabelOptions;
          break;
      }
    }

    return new MapCullableLocationTextLabel(text, priority, waypoint.location, false, options);
  }
}