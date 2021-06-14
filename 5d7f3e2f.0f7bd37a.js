(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(443)),i=["components"],c={},l={unversionedId:"configurations",id:"configurations",isDocsHomePage:!1,title:"configurations",description:'Specifies the set of build configurations, such as "Debug" and "Release", for a workspace or project.',source:"@site/docs/configurations.md",slug:"/configurations",permalink:"/docs/configurations",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/configurations.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"configuration",permalink:"/docs/configuration"},next:{title:"copylocal",permalink:"/docs/copylocal"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Specifies the set of build configurations, such as "Debug" and "Release", for a workspace or project.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'configurations { "names" }\n')),Object(o.b)("p",null,'A configuration encapsulates a collection of build settings, allowing the developer to easily switch between them. "Debug" and "Release" are the most common configuration names.'),Object(o.b)("p",null,"For more information, see ",Object(o.b)("a",{parentName:"p",href:"/docs/Configurations-and-Platforms"},"Configurations and Platforms"),"."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"names")," is a list of configuration names. Spaces are allowed, but may make using certain Premake features, such as a command-line configuration selection, more difficult."),Object(o.b)("h3",{id:"applies-to"},"Applies To"),Object(o.b)("p",null,"Workspaces and projects."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 4.0 or later. Per-project configuration lists were introduced in Premake 5.0."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Specify debug and release configurations for a workspace."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n  configurations { "Debug", "Release" }\n')),Object(o.b)("p",null,"Add additional configurations for a dynamic link library version."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'configurations { "Debug", "Release", "DebugDLL", "ReleaseDLL" }\n')),Object(o.b)("h2",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/Configurations-and-Platforms"},"Configurations and Platforms")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/platforms"},"platforms"))))}p.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);