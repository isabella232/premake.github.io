(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{223:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(443)),i=["components"],l={},c={unversionedId:"defines",id:"defines",isDocsHomePage:!1,title:"defines",description:"Adds preprocessor or compiler symbols to a project.",source:"@site/docs/defines.md",slug:"/defines",permalink:"/docs/defines",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/defines.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1623250513,sidebar:"docs",previous:{title:"defaultplatform",permalink:"/docs/defaultplatform"},next:{title:"dependson",permalink:"/docs/dependson"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Adds preprocessor or compiler symbols to a project."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'defines { "symbols" }\n')),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"symbols")," specifies a list of symbols to be defined."),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Project configurations."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 4.0 or later."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Define two new symbols in the current project."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'defines { "DEBUG", "TRACE" }\n')),Object(o.b)("p",null,"Symbols may also assign values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'defines { "CALLSPEC=__dllexport" }\n')))}u.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(f,l(l({ref:t},s),{},{components:r})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);