"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[5360],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,g=m["".concat(d,".").concat(u)]||m[u]||k[u]||i;return a?n.createElement(g,l(l({ref:t},o),{},{components:a})):n.createElement(g,l({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},457:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return o},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],s={id:"UserSettingSaveManager",title:"Class: UserSettingSaveManager",sidebar_label:"UserSettingSaveManager",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"framework/classes/UserSettingSaveManager",id:"framework/classes/UserSettingSaveManager",isDocsHomePage:!1,title:"Class: UserSettingSaveManager",description:"A manager for user settings that are saved and persistent across flight sessions. The manager facilitates saving",source:"@site/docs/framework/classes/UserSettingSaveManager.md",sourceDirName:"framework/classes",slug:"/framework/classes/UserSettingSaveManager",permalink:"/msfs-avionics-mirror/docs/framework/classes/UserSettingSaveManager",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"UserSettingSaveManager",title:"Class: UserSettingSaveManager",sidebar_label:"UserSettingSaveManager",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"UserFacilityUtils",permalink:"/msfs-avionics-mirror/docs/framework/classes/UserFacilityUtils"},next:{title:"Vec2Math",permalink:"/msfs-avionics-mirror/docs/framework/classes/Vec2Math"}},o=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"autoSaveKeys",id:"autosavekeys",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"entries",id:"entries",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"DATASTORE_PREFIX",id:"datastore_prefix",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"load",id:"load",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"onSettingChanged",id:"onsettingchanged",children:[{value:"Type parameters",id:"type-parameters",children:[],level:4},{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"save",id:"save",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"startAutoSave",id:"startautosave",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"stopAutoSave",id:"stopautosave",children:[{value:"Parameters",id:"parameters-5",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"getDataStoreKey",id:"getdatastorekey",children:[{value:"Parameters",id:"parameters-6",children:[],level:4},{value:"Returns",id:"returns-5",children:[],level:4},{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3}],level:2}],k={toc:o};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A manager for user settings that are saved and persistent across flight sessions. The manager facilitates saving\nand loading setting values to and from multiple keyed save slots and also supports auto-saving. Uses Data Store to\nstore saved setting values."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new UserSettingSaveManager"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"settings"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bus"),")"),(0,i.kt)("p",null,"Constructor."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"settings")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/UserSetting"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSetting")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("a",{parentName:"td",href:"../modules#usersettingtype"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSettingType")),">","[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This manager's managed settings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bus")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"EventBus"},(0,i.kt)("inlineCode",{parentName:"a"},"EventBus"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The event bus.")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSettingSaveManager.ts:39"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"autosavekeys"},"autoSaveKeys"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"autoSaveKeys"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSettingSaveManager.ts:32"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entries"},"entries"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"entries"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"UserSettingSaveManagerEntry"),"<",(0,i.kt)("a",{parentName:"p",href:"../modules#usersettingtype"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSettingType")),">","[]"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSettingSaveManager.ts:31"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"datastore_prefix"},"DATASTORE","_","PREFIX"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"DATASTORE","_","PREFIX"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"persistent-setting"')),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSettingSaveManager.ts:29"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"load"},"load"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"load"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Loads the saved values of this manager's settings."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The key from which to load the values.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSettingSaveManager.ts:69"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onsettingchanged"},"onSettingChanged"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"onSettingChanged"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"autoSaveDataStoreKeys"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"A callback which is called when a setting's value changes."),(0,i.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"../modules#usersettingtype"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSettingType")))))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"autoSaveDataStoreKeys")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The data store keys to which the setting's value should be automatically saved.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The new value of the setting.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSettingSaveManager.ts:58"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"save"},"save"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"save"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Saves the current values of this manager's settings."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The key to which to save the values.")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSettingSaveManager.ts:85"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"startautosave"},"startAutoSave"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"startAutoSave"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Starts automatically saving this manager's settings when their values change."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The key to which to save the values.")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSettingSaveManager.ts:98"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stopautosave"},"stopAutoSave"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"stopAutoSave"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Stops automatically saving this manager's settings when their values change."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The key to which to stop saving the values.")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSettingSaveManager.ts:117"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getdatastorekey"},"getDataStoreKey"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"getDataStoreKey"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"setting"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"saveKey"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Gets a data store key for a specific setting and save key."),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"setting")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/UserSetting"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSetting")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A user setting.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"saveKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The save key.")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"the data store key for the setting and save key."),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSettingSaveManager.ts:138"))}m.isMDXComponent=!0}}]);