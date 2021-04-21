(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(443)),i={},l={unversionedId:"newoption",id:"newoption",isDocsHomePage:!1,title:"newoption",description:"Registers a new command-line option. For more information, see Command Line Arguments.",source:"@site/docs/newoption.md",slug:"/newoption",permalink:"/docs/newoption",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/newoption.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1619017045,sidebar:"docs",previous:{title:"newaction",permalink:"/docs/newaction"},next:{title:"nuget",permalink:"/docs/nuget"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Registers a new command-line option. For more information, see ",Object(o.b)("a",{parentName:"p",href:"/docs/Command-Line-Arguments"},"Command Line Arguments"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"newoption { description }\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"description")," is a table describing the new option. It may contain the following fields:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null}),Object(o.b)("th",{parentName:"tr",align:null}))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"trigger"),Object(o.b)("td",{parentName:"tr",align:null},'What the user would type on the command line to select the option, e.g. "--name".')),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"description"),Object(o.b)("td",{parentName:"tr",align:null},"A short description of the option, to be displayed in the help text.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"value"),Object(o.b)("td",{parentName:"tr",align:null},"Optional. If the option needs a value, provides a hint to the user what type of data is expected.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"allowed"),Object(o.b)("td",{parentName:"tr",align:null},"Optional. A list of key-value pairs listing the allowed values for the option.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"default"),Object(o.b)("td",{parentName:"tr",align:null},"Optional. Sets the default for this option if not specified on the commandline.")))),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 4.0 and later."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Register a new option to select a rendering API for a 3D application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'newoption {\n   trigger     = "gfxapi",\n   value       = "API",\n   description = "Choose a particular 3D API for rendering",\n   default     = "opengl",\n   allowed = {\n      { "opengl",    "OpenGL" },\n      { "direct3d",  "Direct3D (Windows only)" },\n      { "software",  "Software Renderer" }\n   }\n}\n')),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/Command-Line-Arguments"},"Command Line Arguments"))))}b.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||o;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);