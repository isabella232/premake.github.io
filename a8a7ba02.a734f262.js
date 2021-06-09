(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{315:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(443)),c=["components"],i={},l={unversionedId:"pchsource",id:"pchsource",isDocsHomePage:!1,title:"pchsource",description:"Specifies the C/C++ source code file which controls the compilation of the header.",source:"@site/docs/pchsource.md",slug:"/pchsource",permalink:"/docs/pchsource",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/pchsource.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1623250513,sidebar:"docs",previous:{title:"pchheader",permalink:"/docs/pchheader"},next:{title:"pic",permalink:"/docs/pic"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],s={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Specifies the C/C++ source code file which controls the compilation of the header."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'pchsource ("sourcefile.cpp")\n')),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"/docs/Precompiled-Headers"},"Precompiled Headers")," for more information."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sourcefile.cpp")," is the name of the source code which triggers the compilation of the header. This file must contain the header file's ",Object(o.b)("inlineCode",{parentName:"p"},"#include")," statement as the first line of code; this is usually the only statement in the file."),Object(o.b)("p",null,"(Can anyone find a good link to this in the MSDN docs? They just rearranged the site and I'm not finding anything useful right now.)"),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Project configurations."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 4.0 and up."),Object(o.b)("h2",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/Precompiled-Headers"},"Precompiled Headers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/pchheader"},"pchheader"))))}u.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(f,i(i({ref:t},p),{},{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);