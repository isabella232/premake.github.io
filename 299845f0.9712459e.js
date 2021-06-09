(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{131:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(443)),c=["components"],i={},l={unversionedId:"workspace",id:"workspace",isDocsHomePage:!1,title:"workspace",description:"Creates a new workspace.",source:"@site/docs/workspace.md",slug:"/workspace",permalink:"/docs/workspace",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/workspace.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1623250513,sidebar:"docs",previous:{title:"warnings",permalink:"/docs/warnings"},next:{title:"xcodebuildresources",permalink:"/docs/xcodebuildresources"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Creates a new workspace."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'workspace ("name")\n')),Object(o.b)("p",null,"Workspaces are the top-level objects in a Premake build script, and are synonymous with a Visual Studio solution. Each workspace contains one or more projects, which in turn contain the settings to generate a single binary target."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"name")," is a unique name for the workspace. If a workspace with the given name already exists, it is made active and returned."),Object(o.b)("p",null,"If no name is given, the current workspace scope is returned, and also made active."),Object(o.b)("p",null,'If "',"*",'" is used, the "root" configuration scope, which applies to all workspaces, is selected and nil is returned.'),Object(o.b)("p",null,"By default, the project name will be used as the file name of the generated project file; be careful with spaces and special characters. You can override this default with the ",Object(o.b)("a",{parentName:"p",href:"/docs/filename"},"filename")," call."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 4.0 or later."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,'Create a new workspace named "MyWorkspace", with debug and release build configurations.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n')),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/project"},"project")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/group"},"group")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/configuration"},"configuration")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/location"},"location")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/filename"},"filename"))))}u.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?n.a.createElement(m,i(i({ref:t},s),{},{components:r})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);