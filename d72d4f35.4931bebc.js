(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{380:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(443)),c=["components"],i={},l={unversionedId:"table.deepcopy",id:"table.deepcopy",isDocsHomePage:!1,title:"table.deepcopy",description:"Make a complete copy of a table, including any child tables it contains.",source:"@site/docs/table.deepcopy.md",slug:"/table.deepcopy",permalink:"/docs/table.deepcopy",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/table.deepcopy.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"table.contains",permalink:"/docs/table.contains"},next:{title:"table.extract",permalink:"/docs/table.extract"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]}],u={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make a complete copy of a table, including any child tables it contains."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"copy = table.deepcopy(tbl)\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tbl")," is the table to be copied."),Object(o.b)("h3",{id:"return-value"},"Return Value"),Object(o.b)("p",null,"A copy of the provided table."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 or later."))}b.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(r),s=n,y=b["".concat(c,".").concat(s)]||b[s]||d[s]||o;return r?a.a.createElement(y,i(i({ref:t},p),{},{components:r})):a.a.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);