"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[7327],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7670:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],d={id:"ThrottledTaskQueueHandler",title:"Interface: ThrottledTaskQueueHandler",sidebar_label:"ThrottledTaskQueueHandler",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"framework/interfaces/ThrottledTaskQueueHandler",id:"framework/interfaces/ThrottledTaskQueueHandler",isDocsHomePage:!1,title:"Interface: ThrottledTaskQueueHandler",description:"A handler which defines the behavior of a ThrottledTaskQueueProcess.",source:"@site/docs/framework/interfaces/ThrottledTaskQueueHandler.md",sourceDirName:"framework/interfaces",slug:"/framework/interfaces/ThrottledTaskQueueHandler",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/ThrottledTaskQueueHandler",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ThrottledTaskQueueHandler",title:"Interface: ThrottledTaskQueueHandler",sidebar_label:"ThrottledTaskQueueHandler",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"TCASSensitivity",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/TCASSensitivity"},next:{title:"TrafficContact",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/TrafficContact"}},u=[{value:"Methods",id:"methods",children:[{value:"canContinue",id:"cancontinue",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"onAborted",id:"onaborted",children:[{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"onFinished",id:"onfinished",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"onPaused",id:"onpaused",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"onStarted",id:"onstarted",children:[{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2}],p={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A handler which defines the behavior of a ThrottledTaskQueueProcess."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"cancontinue"},"canContinue"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"canContinue"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"elapsedFrameCount"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatchedTaskCount"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"timeElapsed"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Checks if queue processing can continue in the current frame. If this method returns false, queue processing will\npause in the current frame and resume in the next frame via requestAnimationFrame()."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"elapsedFrameCount")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of frames elapsed since queue processing started. Equal to 0 on the first frame, 1 on the second, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dispatchedTaskCount")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of tasks already dispatched in the current frame.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timeElapsed")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The time elapsed so far in the current frame, in milliseconds.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"whether queue processing can continue in the current frame."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/ThrottledTaskQueueProcess.ts:21"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onaborted"},"onAborted"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onAborted"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"This method is called when queue processing is aborted."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/ThrottledTaskQueueProcess.ts:40"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onfinished"},"onFinished"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onFinished"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"elapsedFrameCount"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"This method is called when queue processing is finished."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"elapsedFrameCount")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of frames elpased since queue processing started. Equal to 0 on the first frame, 1 on the second, etc.")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/ThrottledTaskQueueProcess.ts:35"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onpaused"},"onPaused"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onPaused"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"elapsedFrameCount"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"This method is called when queue processing is paused."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"elapsedFrameCount")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of frames elapsed since queue processing started. Equal to 0 on the first frame, 1 on the second, etc.")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/ThrottledTaskQueueProcess.ts:28"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onstarted"},"onStarted"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"onStarted"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"This method is called when queue processing is started."),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/ThrottledTaskQueueProcess.ts:10"))}c.isMDXComponent=!0}}]);