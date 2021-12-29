"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[1668],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=l(t),d=i,m=v["".concat(c,".").concat(d)]||v[d]||p[d]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=v;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},1288:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return v}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),s=["components"],o={sidebar_position:3},c="Receiving H Events",l={unversionedId:"interacting-with-msfs/receiving-h-events",id:"interacting-with-msfs/receiving-h-events",isDocsHomePage:!1,title:"Receiving H Events",description:"What Are H Events?",source:"@site/docs/interacting-with-msfs/receiving-h-events.md",sourceDirName:"interacting-with-msfs",slug:"/interacting-with-msfs/receiving-h-events",permalink:"/msfs-avionics-mirror/docs/interacting-with-msfs/receiving-h-events",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Key Events",permalink:"/msfs-avionics-mirror/docs/interacting-with-msfs/key-events"},next:{title:"Querying Navdata",permalink:"/msfs-avionics-mirror/docs/interacting-with-msfs/querying-navdata"}},u=[{value:"What Are H Events?",id:"what-are-h-events",children:[],level:2},{value:"How To Receive H Events",id:"how-to-receive-h-events",children:[],level:2}],p={toc:u};function v(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"receiving-h-events"},"Receiving H Events"),(0,a.kt)("h2",{id:"what-are-h-events"},"What Are H Events?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"H events"),", so named as they are prefixed with the text ",(0,a.kt)("strong",{parentName:"p"},"H:"),", are a new way of interacting with the simulator as of MSFS. They are defined in cockpit panel ModelBehaviors, and only go in one direction: from the panel to Javascript/HTML code."),(0,a.kt)("p",null,"H events are not required to be defined ahead of time, similar to L vars, and can be named with any contiguous alphanumeric characters. Each cockpit panel in MSFS sends a number of cockpit specific H events that have no analogous key event, such as pressing individual buttons on an FMS computer."),(0,a.kt)("p",null,"These individual panel specific events can be received by Javascript instruments."),(0,a.kt)("h2",{id:"how-to-receive-h-events"},"How To Receive H Events"),(0,a.kt)("p",null,"Inside your main instrument class that extends ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseInstrument"),", you must define the method ",(0,a.kt)("inlineCode",{parentName:"p"},"onInteractionEvent()")," in order to receive H events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class MyInstrument extends BaseInstrument {\n  get templateID(): string {\n    return 'MyInstrument';\n  }\n\n  //Will be called by the VCockpit system when a H event is received\n  public onInteractionEvent(args: string[]): void {\n    const hEventName = args[0];\n    console.log(`Got a H Event named ${hEventName}!`);\n  }\n}\n")),(0,a.kt)("p",null,"The avionics framework also provides a convenient utility publisher class to publish H events to an ",(0,a.kt)("inlineCode",{parentName:"p"},"EventBus"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class MyInstrument extends BaseInstrument {\n  private readonly eventBus = new EventBus();\n  private readonly hEventPublisher = new HEventPublisher(this.eventBus);\n\n  get templateID(): string {\n    return 'MyInstrument';\n  }\n\n  public connectedCallback(): void {\n    super.connectedCallback();\n    this.hEventPublisher.startPublish();\n  }\n\n  public onInteractionEvent(args: string[]): void {\n    this.hEventPublisher.dispatchHEvent(args[0]);\n  }\n}\n\n//Later, in a component:\nconst subscriber = this.props.bus.getSubscriber<HEvent>();\nsubscriber.on('hEvent')\n  .handle(eventName => console.log(`Got a H Event named ${eventName}!`));\n")))}v.isMDXComponent=!0}}]);