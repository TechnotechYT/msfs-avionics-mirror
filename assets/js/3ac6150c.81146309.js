"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[6912],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(n),f=r,u=k["".concat(m,".").concat(f)]||k[f]||d[f]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2793:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"AbstractUnit",title:"Class: AbstractUnit<F>",sidebar_label:"AbstractUnit",sidebar_position:0,custom_edit_url:null},m=void 0,p={unversionedId:"framework/classes/AbstractUnit",id:"version-0.2.0/framework/classes/AbstractUnit",title:"Class: AbstractUnit<F>",description:"A unit of measurement.",source:"@site/versioned_docs/version-0.2.0/framework/classes/AbstractUnit.md",sourceDirName:"framework/classes",slug:"/framework/classes/AbstractUnit",permalink:"/msfs-avionics-mirror/docs/framework/classes/AbstractUnit",draft:!1,editUrl:null,tags:[],version:"0.2.0",sidebarPosition:0,frontMatter:{id:"AbstractUnit",title:"Class: AbstractUnit<F>",sidebar_label:"AbstractUnit",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"AbstractSubscribableSet",permalink:"/msfs-avionics-mirror/docs/framework/classes/AbstractSubscribableSet"},next:{title:"ArraySubject",permalink:"/msfs-avionics-mirror/docs/framework/classes/ArraySubject"}},s={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"family",id:"family",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Methods",id:"methods",level:2},{value:"canConvert",id:"canconvert",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"convertFrom",id:"convertfrom",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"convertTo",id:"convertto",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"createNumber",id:"createnumber",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}],k={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A unit of measurement."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"F")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AbstractUnit"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/classes/SimpleUnit"},(0,i.kt)("inlineCode",{parentName:"a"},"SimpleUnit"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/classes/CompoundUnit"},(0,i.kt)("inlineCode",{parentName:"a"},"CompoundUnit"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/classes/NavAngleUnit"},(0,i.kt)("inlineCode",{parentName:"a"},"NavAngleUnit"))))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},(0,i.kt)("inlineCode",{parentName:"a"},"Unit")),"<",(0,i.kt)("inlineCode",{parentName:"li"},"F"),">")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new AbstractUnit"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"F"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),")"),(0,i.kt)("p",null,"Constructor."),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"F")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of this unit.")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"src/sdk/math/NumberUnit.ts:739"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"family"},"family"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"family"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"F")),(0,i.kt)("p",null,"This unit's family."),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},"Unit"),".",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit#family"},"family")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"src/sdk/math/NumberUnit.ts:733"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"This unit's name."),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},"Unit"),".",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit#name"},"name")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"canconvert"},"canConvert"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"canConvert"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"otherUnit"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Checks whether conversions between this unit and another unit are possible."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"otherUnit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},(0,i.kt)("inlineCode",{parentName:"a"},"Unit")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The other unit.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether conversions between this unit and another unit are possible."),(0,i.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},"Unit"),".",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit#canconvert"},"canConvert")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"src/sdk/math/NumberUnit.ts:743"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"convertfrom"},"convertFrom"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"convertFrom"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fromUnit"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Converts a value of another unit to this unit."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The value to convert.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fromUnit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},(0,i.kt)("inlineCode",{parentName:"a"},"Unit")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"F"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The unit from which to convert.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The converted value."),(0,i.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},"Unit"),".",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit#convertfrom"},"convertFrom")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"src/sdk/math/NumberUnit.ts:751"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"convertto"},"convertTo"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"convertTo"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"toUnit"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Converts a value of this unit to another unit."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The value to convert.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"toUnit")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},(0,i.kt)("inlineCode",{parentName:"a"},"Unit")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"F"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The unit to which to convert.")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The converted value."),(0,i.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},"Unit"),".",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit#convertto"},"convertTo")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"src/sdk/math/NumberUnit.ts:748"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createnumber"},"createNumber"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createNumber"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/classes/NumberUnit"},(0,i.kt)("inlineCode",{parentName:"a"},"NumberUnit")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"F"),", ",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/classes/AbstractUnit"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractUnit")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"F"),">",">"),(0,i.kt)("p",null,"Creates a NumberUnit with a specified initial value of this unit type."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The numeric value of the new NumberUnit.")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/classes/NumberUnit"},(0,i.kt)("inlineCode",{parentName:"a"},"NumberUnit")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"F"),", ",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/classes/AbstractUnit"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractUnit")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"F"),">",">"),(0,i.kt)("p",null,"A NumberUnit of this unit type."),(0,i.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},"Unit"),".",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit#createnumber"},"createNumber")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"src/sdk/math/NumberUnit.ts:754"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"equals"},"equals"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"equals"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"other"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Checks whether this unit is equal to another unit. Returns true if and only if the other unit belongs to the same\nfamily and has the same name as this unit."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"other")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},(0,i.kt)("inlineCode",{parentName:"a"},"Unit")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The other unit to which to compare.")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether this unit is equal to the comparison."),(0,i.kt)("h4",{id:"implementation-of-6"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit"},"Unit"),".",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Unit#equals"},"equals")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,"src/sdk/math/NumberUnit.ts:759"))}f.isMDXComponent=!0}}]);