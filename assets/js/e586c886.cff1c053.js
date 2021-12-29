"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[2309],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(n),k=a,N=s["".concat(m,".").concat(k)]||s[k]||u[k]||i;return n?r.createElement(N,l(l({ref:t},p),{},{components:n})):r.createElement(N,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5304:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"NumberFormatter",title:"Class: NumberFormatter",sidebar_label:"NumberFormatter",sidebar_position:0,custom_edit_url:null},m=void 0,d={unversionedId:"framework/classes/NumberFormatter",id:"framework/classes/NumberFormatter",isDocsHomePage:!1,title:"Class: NumberFormatter",description:"A utility class for creating number formatters.",source:"@site/docs/framework/classes/NumberFormatter.md",sourceDirName:"framework/classes",slug:"/framework/classes/NumberFormatter",permalink:"/msfs-avionics-mirror/docs/framework/classes/NumberFormatter",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"NumberFormatter",title:"Class: NumberFormatter",sidebar_label:"NumberFormatter",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"NullPathStream",permalink:"/msfs-avionics-mirror/docs/framework/classes/NullPathStream"},next:{title:"NumberUnit",permalink:"/msfs-avionics-mirror/docs/framework/classes/NumberUnit"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"DEFAULT_OPTIONS",id:"default_options",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"roundFuncs",id:"roundfuncs",children:[{value:"Type declaration",id:"type-declaration",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[{value:"Parameters",id:"parameters-1",children:[],level:5},{value:"Returns",id:"returns-1",children:[],level:5}],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"formatNumber",id:"formatnumber",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],u={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A utility class for creating number formatters."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new NumberFormatter"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"default_options"},"DEFAULT","_","OPTIONS"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"DEFAULT","_","OPTIONS"),": ",(0,i.kt)("a",{parentName:"p",href:"../modules#numberformatteroptions"},(0,i.kt)("inlineCode",{parentName:"a"},"NumberFormatterOptions"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/NumberFormatter.ts:34"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"roundfuncs"},"roundFuncs"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"roundFuncs"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"1")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/NumberFormatter.ts:45"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"create"},"create"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"create"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): (",(0,i.kt)("inlineCode",{parentName:"p"},"number"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Creates a number formatter."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"../modules#numberformatteroptions"},(0,i.kt)("inlineCode",{parentName:"a"},"NumberFormatterOptions")),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Options to customize the formatter.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fn")),(0,i.kt)("p",null,"A number formatter."),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Creates a number formatter."),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"A number formatter."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/NumberFormatter.ts:135"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"formatnumber"},"formatNumber"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"formatNumber"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"precision"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"roundFunc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"maxDigits"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"forceDecimalZeroes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pad"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"showCommas"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"forceSign"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nanString"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Formats a number to a string."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"precision")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The precision to which to round the number. A value of 0 denotes no rounding.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"roundFunc")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"number"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The rounding function to use.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"maxDigits")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The maximum number of digits to enforce.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"forceDecimalZeroes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether to force trailing zeroes after the decimal point.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"pad")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of digits to which to pad with zeroes in front of the decimal point.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"showCommas")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether to show commas.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"forceSign")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether to force the display of a positive sign.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nanString")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The string to use for NaN.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number to format.")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"A formatted string."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/NumberFormatter.ts:64"))}s.isMDXComponent=!0}}]);