(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{245:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return p}));var t=n(3),o=n(7),a=(n(0),n(443)),i=["components"],c={title:"Removing Values"},s={unversionedId:"Removing-Values",id:"Removing-Values",isDocsHomePage:!1,title:"Removing Values",description:"The remove...() set of functions remove one or more values from a list of configuration values. Every configuration list in the Premake API has a corresponding remove function: flags() has removeflags(), defines() has removedefines(), and so on.",source:"@site/docs/Removing-Values.md",slug:"/Removing-Values",permalink:"/docs/Removing-Values",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Removing-Values.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682},l=[{value:"Applies To",id:"applies-to",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function p(e){var r=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The remove...() set of functions remove one or more values from a list of configuration values. Every configuration list in the Premake API has a corresponding remove function: ",Object(a.b)("a",{parentName:"p",href:"/docs/flags"},"flags()")," has removeflags(), ",Object(a.b)("a",{parentName:"p",href:"/docs/defines"},"defines()")," has removedefines(), and so on."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'remove... { "values_to_remove" }\n')),Object(a.b)("h2",{id:"applies-to"},"Applies To"),Object(a.b)("p",null,"Project configurations."),Object(a.b)("h2",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"One or more values to remove. If multiple values are specified, use the Lua table syntax."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,"Remove the NoExceptions flag from a previous configuration."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'removeflags "NoExceptions"\n')),Object(a.b)("p",null,"You can use wildcards in removes. This example will remove both WIN32 and WIN64 from the defines."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'defines { "WIN32", "WIN64", "LINUX", "MACOSX" }\nremovedefines "WIN*"\n')))}p.isMDXComponent=!0},443:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return d}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=t,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return n?o.a.createElement(d,c(c({ref:r},l),{},{components:n})):o.a.createElement(d,c({ref:r},l))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);