(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(443)),o=["components"],s={title:"Filters"},l={unversionedId:"Filters",id:"Filters",isDocsHomePage:!1,title:"Filters",description:"Premake's filter system allows you target build settings to the exact configurations in which you want them to appear. You can filter by specific build configurations or platforms, operating system, target actions, and more.",source:"@site/docs/Filters.md",slug:"/Filters",permalink:"/docs/Filters",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Filters.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1623250513,sidebar:"docs",previous:{title:"Configurations & Platforms",permalink:"/docs/Configurations-and-Platforms"},next:{title:"Build Settings",permalink:"/docs/Build-Settings"}},c=[],p={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Premake's filter system allows you target build settings to the exact configurations in which you want them to appear. You can filter by specific build configurations or platforms, operating system, target actions, ",Object(a.b)("a",{parentName:"p",href:"/docs/filter"},"and more"),"."),Object(a.b)("p",null,'Here is an example which sets a preprocessor symbol named "DEBUG" in a workspace\'s "Debug" build configuration, and "NDEBUG" in the Release configuration.'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\n   filter "configurations:Debug"\n      defines { "DEBUG" }\n\n   filter "configurations:Release"\n      defines { "NDEBUG" }\n')),Object(a.b)("p",null,"Filters are always made up of two parts: a ",Object(a.b)("em",{parentName:"p"},"prefix")," that specifies which field is being filtered against, and a ",Object(a.b)("em",{parentName:"p"},"pattern")," that specifies which values of that field should be accepted. Here is another example that filters by the target action:"),Object(a.b)("p",null,'Filters follow Premake\'s pseudo-declarative style for its scripts: calling filter() makes that filter condition "active". All settings which subsequently appear in the script will be filtered by this condition until a new filter or container (workspace, project) is activated.'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'-- All of these settings will appear in the Debug configuration\nfilter "configurations:Debug"\n  defines { "DEBUG" }\n  flags { "Symbols" }\n\n-- All of these settings will appear in the Release configuration\nfilter "configurations:Release"\n  defines { "NDEBUG" }\n  optimize "On"\n\n-- This is a sneaky bug (assuming you always want to link against these lib files).\n-- Because the last filter set was Release. These libraries will only be linked for release.\n-- To fix this place this after the "Deactivate" filter call below. Or before any filter calls.\nlinks { "png", "zlib" }\n\n-- "Deactivate" the current filter; these settings will apply\n-- to the entire workspace or project (whichever is active)\nfilter {}\n  files { "**.cpp" }\n')),Object(a.b)("p",null,'Filters are evaluated at generation time, when the workspace or project file is being created and written to disk. When it comes time to output the settings for this workspace\'s "Debug" build configuration, Premake evaluates the list of filters to find those that match the "Debug" criteria.'),Object(a.b)("p",null,'Using the above example, Premake would first consider the filter "configurations:Debug". It would check the name of the configuration that was currently being output, see that it matched, and so include any settings up to the next filter call.'),Object(a.b)("p",null,'The filter "configurations:Release" would be skipped, because the pattern "Release" would not match the name of the configuration currently being generated ("Debug").'),Object(a.b)("p",null,'The last filter "{}" does not define any filtering criteria, and so does not exclude anything. Any settings applied after this filter will appear in ',Object(a.b)("em",{parentName:"p"},"all")," configurations within the workspace or project."),Object(a.b)("p",null,'Filters may also be combined, modified with "or" or "not", and use pattern matches. For a more complete description and lots of examples, see ',Object(a.b)("a",{parentName:"p",href:"/docs/filter"},Object(a.b)("inlineCode",{parentName:"a"},"filter")),"."))}u.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||f[b]||a;return n?i.a.createElement(d,s(s({ref:t},c),{},{components:n})):i.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);