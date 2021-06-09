(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(443)),i=["components"],l={},c={unversionedId:"path.getabsolute",id:"path.getabsolute",isDocsHomePage:!1,title:"path.getabsolute",description:"Converts a relative path to an absolute path.",source:"@site/docs/path.getabsolute.md",slug:"/path.getabsolute",permalink:"/docs/path.getabsolute",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/path.getabsolute.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1623250513,sidebar:"docs",previous:{title:"path.appendExtension",permalink:"/docs/path.appendExtension"},next:{title:"path.getbasename",permalink:"/docs/path.getbasename"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:p};function s(e){var t=e.components,r=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Converts a relative path to an absolute path."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'p = path.getabsolute("path", "relativeTo")\n')),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"path")," is the relative path to be converted. It does not need to actually exist on the file system."),Object(o.b)("p",null,"If provided, ",Object(o.b)("inlineCode",{parentName:"p"},"relativeTo")," specifies an absolute path from which ",Object(o.b)("inlineCode",{parentName:"p"},"path")," is considered relative. If not specified, the current working directory will be used."),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"A new absolute path, calculated from the current working directory, or the ",Object(o.b)("inlineCode",{parentName:"p"},"relativeTo")," parameter if provided."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 4.0 or later. The ",Object(o.b)("inlineCode",{parentName:"p"},"relativeTo")," parameter is available in Premake 5.0 or later."),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/path.isabsolute"},"path.isabsolute"))))}s.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return r?n.a.createElement(m,l(l({ref:t},p),{},{components:r})):n.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);