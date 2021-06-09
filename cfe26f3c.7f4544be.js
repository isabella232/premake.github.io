(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{372:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return c}));var o=n(3),r=n(7),a=(n(0),n(443)),i=["components"],l={title:"Embedding Modules"},d={unversionedId:"Embedding-Modules",id:"Embedding-Modules",isDocsHomePage:!1,title:"Embedding Modules",description:"This section only applies if you want to embed your module into a custom build of Premake for easier distribution. If you're not doing that, you can skip it.",source:"@site/docs/Embedding-Modules.md",slug:"/Embedding-Modules",permalink:"/docs/Embedding-Modules",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Embedding-Modules.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1623250513},u=[],s={toc:u};function c(e){var t=e.components,n=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"This section only applies if you want to embed your module into a custom build of Premake for easier distribution. If you're not doing that, you can skip it.")),Object(a.b)("p",null,"Premake includes a number of modules as part of the official builds, with more being added regularly. These modules are embedded directly into Premake along with the core scripts to enable easy distribution of a single, self-contained executable."),Object(a.b)("p",null,"If you are creating a custom build of Premake, you can easily embed your own modules by following the instructions below. Also take a look at Premake's own set of modules in the ",Object(a.b)("inlineCode",{parentName:"p"},"modules/")," folder for some real working examples."),Object(a.b)("h4",{id:"1-put-your-module-where-premake-can-find-it"},"1. Put your module where Premake can find it."),Object(a.b)("p",null,"Premake's embedding system only considers scripts which are in Premake source code tree, so the first step is to put your module where it can be found. Premake's own modules are stored in the ",Object(a.b)("inlineCode",{parentName:"p"},"modules/")," folder."),Object(a.b)("h4",{id:"2-add-a-manifest"},"2. Add a manifest"),Object(a.b)("p",null,"Premake needs to know which scripts it should embed, and which it should ignore (tests, etc.). Create a file named ",Object(a.b)("inlineCode",{parentName:"p"},"_manifest.lua")," which returns an array file names to be loaded. For example, Premake's Xcode module manifest looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'return {\n    "_preload.lua",\n    "xcode.lua",\n    "xcode4_workspace.lua",\n    "xcode_common.lua",\n    "xcode_project.lua",\n}\n')),Object(a.b)("h4",{id:"3-add-an-optional-preload-script"},"3. Add an (optional) preload script"),Object(a.b)("p",null,"As more modules get added, Premake has to do more and more work on startup to evaluate all of those script files. To help minimize that work, modules should try to defer loading until they are actually needed by the project being generated."),Object(a.b)("p",null,"On startup, Premake will check each embedded module for script named ",Object(a.b)("inlineCode",{parentName:"p"},"_preload.lua"),". If present, Premake will run that script, and defer loading the rest of the module. After the project script has had a chance to run, Premake will then ask the module if it needs to be loaded and, if so, load it before continuing. If no ",Object(a.b)("inlineCode",{parentName:"p"},"_preload.lua")," script is present, the module will be fully loaded immediately on startup."),Object(a.b)("p",null,"To enable this, create a file named ",Object(a.b)("inlineCode",{parentName:"p"},"_preload.lua")," (be sure to also add it to your manifest). Move any settings or values that might be required by a project script\u2014new actions, command line options, or project API calls or allowed values\u2014out of your module to this file. At the very end of the script, return a function which determines whether the module can be loaded or not."),Object(a.b)("p",null,"Here is a subset of the ",Object(a.b)("inlineCode",{parentName:"p"},"_preload.lua")," script from Premake's Xcode module:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'    local p = premake\n\n-- Register the Xcode action.\n\n    newaction {\n        trigger     = "xcode4",\n        shortname   = "Apple Xcode 4",\n        description = "Generate Apple Xcode 4 project files",\n\n        -- \u2026\n    }\n\n-- Decide when the full module should be loaded.\n\n    return function(cfg)\n        return (_ACTION == "xcode4")\n    end\n')),Object(a.b)("p",null,'It starts by registering the Xcode action; this allows the action to be used on the command line and appear in Premake\'s help text, even though the full module has not yet been loaded. It then returns a test function to decide when the module should be loaded: in this case, when the user requests the "xcode4" action on the command line.'),Object(a.b)("p",null,"In the case of a new action, the test function's configuration argument is ignored. In Premake's D language module, it should only load if one of the project's specified in the user scripts wants to use the D language."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'return function(cfg)\n    return (cfg.language == "D")\nend\n')),Object(a.b)("h4",{id:"4-tell-premake-to-load-your-module"},"4. Tell Premake to load your module"),Object(a.b)("p",null,"If you would like your module loaded (or pre-loaded) on startup, you must add it to the list in ",Object(a.b)("inlineCode",{parentName:"p"},"src/_modules.lua"),". Modules in this list can be used by project scripts without having to first ",Object(a.b)("inlineCode",{parentName:"p"},"require()")," them."),Object(a.b)("p",null,"Modules that are not in this list are still embedded and may still be used by calling ",Object(a.b)("inlineCode",{parentName:"p"},"require()"),"."),Object(a.b)("h4",{id:"5-embed-and-rebuild"},"5. Embed and rebuild"),Object(a.b)("p",null,"The final step is run Premake's embedding script (",Object(a.b)("inlineCode",{parentName:"p"},"premake5 embed"),") and then rebuild the Premake executable."))}c.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,b=c["".concat(i,".").concat(m)]||c[m]||p[m]||a;return n?r.a.createElement(b,l(l({ref:t},u),{},{components:n})):r.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);