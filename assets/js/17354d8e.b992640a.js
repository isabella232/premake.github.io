"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2535],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68178:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={},c=void 0,p={unversionedId:"pchheader",id:"pchheader",isDocsHomePage:!1,title:"pchheader",description:"Specifies the #include form of the precompiled header file name.",source:"@site/docs/pchheader.md",sourceDirName:".",slug:"/pchheader",permalink:"/docs/pchheader",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/pchheader.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"optimize",permalink:"/docs/optimize"},next:{title:"pchsource",permalink:"/docs/pchsource"}},u=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Specifies the #include form of the precompiled header file name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'pchheader ("name.h")\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/Precompiled-Headers"},"Precompiled Headers")," for more information."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name.h")," is the name of the precompiled header, as it is specified in the #include statements of the project source code. If your source code includes the header like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include "myproject.h"\n')),(0,i.kt)("p",null,"...specify the header in your script like this, even if the file itself is located on a different path relative to the project (and presumably found at compile time via the include file search paths):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'pchheader "myproject.h"\n')),(0,i.kt)("h3",{id:"applies-to"},"Applies To"),(0,i.kt)("p",null,"Project configurations."),(0,i.kt)("h3",{id:"availability"},"Availability"),(0,i.kt)("p",null,"Premake 4.0 and up."),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Precompiled-Headers"},"Precompiled Headers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/pchsource"},"pchsource"))))}d.isMDXComponent=!0}}]);