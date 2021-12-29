"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[9895],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5102:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"TurnToJoinGreatCircleBuilder",title:"Class: TurnToJoinGreatCircleBuilder",sidebar_label:"TurnToJoinGreatCircleBuilder",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"framework/classes/TurnToJoinGreatCircleBuilder",id:"framework/classes/TurnToJoinGreatCircleBuilder",isDocsHomePage:!1,title:"Class: TurnToJoinGreatCircleBuilder",description:"Builds constant-radius turns to join great-circle paths.",source:"@site/docs/framework/classes/TurnToJoinGreatCircleBuilder.md",sourceDirName:"framework/classes",slug:"/framework/classes/TurnToJoinGreatCircleBuilder",permalink:"/msfs-avionics-mirror/docs/framework/classes/TurnToJoinGreatCircleBuilder",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TurnToJoinGreatCircleBuilder",title:"Class: TurnToJoinGreatCircleBuilder",sidebar_label:"TurnToJoinGreatCircleBuilder",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"TurnToJoinGreatCircleAtPointBuilder",permalink:"/msfs-avionics-mirror/docs/framework/classes/TurnToJoinGreatCircleAtPointBuilder"},next:{title:"Units",permalink:"/msfs-avionics-mirror/docs/framework/classes/Units"}},c=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"circleVectorBuilder",id:"circlevectorbuilder",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"geoCircleCache",id:"geocirclecache",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"vec3Cache",id:"vec3cache",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"build",id:"build",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4},{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Builds constant-radius turns to join great-circle paths."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new TurnToJoinGreatCircleBuilder"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"circlevectorbuilder"},"circleVectorBuilder"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"circleVectorBuilder"),": ",(0,i.kt)("a",{parentName:"p",href:"CircleVectorBuilder"},(0,i.kt)("inlineCode",{parentName:"a"},"CircleVectorBuilder"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"src/sdk/flightplan/FlightPathVectorBuilder.ts:447"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"geocirclecache"},"geoCircleCache"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"geoCircleCache"),": ",(0,i.kt)("a",{parentName:"p",href:"GeoCircle"},(0,i.kt)("inlineCode",{parentName:"a"},"GeoCircle")),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"src/sdk/flightplan/FlightPathVectorBuilder.ts:445"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"vec3cache"},"vec3Cache"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"vec3Cache"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Float64Array"),"[]"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"src/sdk/flightplan/FlightPathVectorBuilder.ts:444"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"build"},"build"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"build"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"vectors"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"startCourse"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"endPath"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"radius"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"flags?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("p",null,"Builds an arc representing a turn from a defined start point and initial course toward a defined target great-\ncircle path, ending at the point in the turn circle which is closest to the target path."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," Error if ",(0,i.kt)("inlineCode",{parentName:"p"},"endPath")," is not a great circle."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vectors")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/CircleVector"},(0,i.kt)("inlineCode",{parentName:"a"},"CircleVector")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The flight path vector sequence to which to add the vectors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The index in the sequence at which to add the vectors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"start")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/LatLonInterface"},(0,i.kt)("inlineCode",{parentName:"a"},"LatLonInterface"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Float64Array")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The start point.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"startCourse")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The initial true course bearing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"endPath")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"GeoCircle"},(0,i.kt)("inlineCode",{parentName:"a"},"GeoCircle"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The great-circle path defining the target course.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"radius")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The radius of the turn, in meters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"flags?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The flags to set on the turn vector. Defaults to the ",(0,i.kt)("inlineCode",{parentName:"td"},"TurnToCourse")," flag.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("p",null,"The number of vectors added to the sequence, which is always equal to 1."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"src/sdk/flightplan/FlightPathVectorBuilder.ts:462"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"build"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"vectors"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"startPath"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"endPath"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"radius"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"flags?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("p",null,"Builds an arc representing a turn from a defined start point and initial course toward a defined target great-\ncircle path, ending at the point in the turn circle which is closest to the target path."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," Error if ",(0,i.kt)("inlineCode",{parentName:"p"},"startPath")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"endPath")," is not a great circle, or if ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," does not lie on ",(0,i.kt)("inlineCode",{parentName:"p"},"startPath"),"."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vectors")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/CircleVector"},(0,i.kt)("inlineCode",{parentName:"a"},"CircleVector")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The flight path vector sequence to which to add the vectors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The index in the sequence at which to add the vectors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"start")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/LatLonInterface"},(0,i.kt)("inlineCode",{parentName:"a"},"LatLonInterface"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Float64Array")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The start point.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"startPath")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"GeoCircle"},(0,i.kt)("inlineCode",{parentName:"a"},"GeoCircle"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The great-circle path defining the initial course.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"endPath")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"GeoCircle"},(0,i.kt)("inlineCode",{parentName:"a"},"GeoCircle"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The great-circle path defining the target course.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"radius")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The radius of the turn, in meters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"flags?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The flags to set on the turn vector. Defaults to the ",(0,i.kt)("inlineCode",{parentName:"td"},"TurnToCourse")," flag.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("p",null,"The number of vectors added to the sequence, which is always equal to 1."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"src/sdk/flightplan/FlightPathVectorBuilder.ts:484"))}u.isMDXComponent=!0}}]);