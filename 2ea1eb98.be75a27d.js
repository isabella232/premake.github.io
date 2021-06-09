(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(443)),l=["components"],c={title:"Makefile Projects"},i={unversionedId:"Makefile-Projects",id:"Makefile-Projects",isDocsHomePage:!1,title:"Makefile Projects",description:"Makefile projects give you the ability to completely specify the build and clean commands for a project, and are useful when you would like to shell out to an existing Makefile or other command line process.",source:"@site/docs/Makefile-Projects.md",slug:"/Makefile-Projects",permalink:"/docs/Makefile-Projects",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Makefile-Projects.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1623250513},s=[{value:"Example Usage",id:"example-usage",children:[]},{value:"Current Issues",id:"current-issues",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Makefile projects give you the ability to completely specify the build and clean commands for a project, and are useful when you would like to shell out to an existing Makefile or other command line process."),Object(o.b)("h2",{id:"example-usage"},"Example Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   kind "Makefile"\n\n   buildcommands {\n      "make %{cfg.buildcfg}"\n   }\n\n   rebuildcommands {\n      "make %{cfg.buildcfg} rebuild"\n   }\n\n   cleancommands {\n      "make clean %{cfg.buildcfg}"\n   }\n\n')),Object(o.b)("p",null,"This closely follows Visual Studio's own Makefile project feature, but it should be easy to see how it would translate to makefiles."),Object(o.b)("p",null,"Build rules follow the same configuration scoping as the rest of the Premake API. You can apply rules to a specific platform or build configuration, to specific files or all files, or to any combination."),Object(o.b)("p",null,"If the outputs include any object files, they will be automatically added to the link step. Ideally, any source code files included in the outputs would be fed back into the build, but that is not the case currently."),Object(o.b)("h2",{id:"current-issues"},"Current Issues"),Object(o.b)("p",null,"Makefile projects currently have a few shortcomings. Help fixing these issues, or any other gaps, would be most appreciated!"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The feature only works for Visual Studio currently.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"There is limited detection of paths in the build commands. Tokens that\nexpand to absolute paths (most of them do, i.e. %{cfg.objdir}) are properly\nmade project relative. Custom tokens, or paths hardcoded inline with the\ncommands, must be specified relative to the generated project location."))),Object(o.b)("p",null,"(Did I miss anything?)"),Object(o.b)("h2",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/Custom-Build-Commands"},"Custom Build Commands")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/Custom-Rules"},"Custom Rules")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/buildcommands"},"buildcommands")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/buildoutputs"},"buildoutputs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/cleancommands"},"cleancommands")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/rebuildcommands"},"rebuildcommands"))))}p.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);