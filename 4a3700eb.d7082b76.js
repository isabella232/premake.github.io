(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(443)),l=["components"],o={},c={unversionedId:"buildaction",id:"buildaction",isDocsHomePage:!1,title:"buildaction",description:"Specifies how a file or set of files should be treated during the compilation process. It is usually paired with a filter to select a file set. If no build action is specified for a file a default action will be used, based on the file's extension.",source:"@site/docs/buildaction.md",slug:"/buildaction",permalink:"/docs/buildaction",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/buildaction.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1623250513,sidebar:"docs",previous:{title:"bindirs",permalink:"/docs/bindirs"},next:{title:"buildcommands",permalink:"/docs/buildcommands"}},b=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Specifies how a file or set of files should be treated during the compilation process. It is usually paired with a filter to select a file set. If no build action is specified for a file a default action will be used, based on the file's extension."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'buildaction ("action")\n')),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"For C/C++, ",Object(i.b)("inlineCode",{parentName:"p"},"action")," is the name of the MSBuild action as defined by the vcxproj format; eg: ",Object(i.b)("inlineCode",{parentName:"p"},"ClCompile"),", ",Object(i.b)("inlineCode",{parentName:"p"},"FxCompile"),", ",Object(i.b)("inlineCode",{parentName:"p"},"None"),", etc, and may refer to any such action available to MSBuild."),Object(i.b)("p",null,"For C# projects, ",Object(i.b)("inlineCode",{parentName:"p"},"buildaction")," behaviour is special to support legacy implementation.\nIn C#, ",Object(i.b)("inlineCode",{parentName:"p"},"action")," is one of"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Action"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Application"),Object(i.b)("td",{parentName:"tr",align:null},"Mark the file as the application definition XAML for WPF.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Compile"),Object(i.b)("td",{parentName:"tr",align:null},"Treat the file as source code; compile and link it.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Component"),Object(i.b)("td",{parentName:"tr",align:null},"Treat the source file as ",Object(i.b)("a",{parentName:"td",href:"http://msdn.microsoft.com/en-us/library/ms228287(v=vs.90).aspx"},"a component"),", usually a visual control.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Copy"),Object(i.b)("td",{parentName:"tr",align:null},"Copy the file to the target directory.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Embed"),Object(i.b)("td",{parentName:"tr",align:null},"Embed the file into the target binary as a resource.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Form"),Object(i.b)("td",{parentName:"tr",align:null},"Treat the source file as visual (Windows) form.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"None"),Object(i.b)("td",{parentName:"tr",align:null},"Do nothing with this file.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Resource"),Object(i.b)("td",{parentName:"tr",align:null},"Copy/embed the file with the project resources.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"UserControl"),Object(i.b)("td",{parentName:"tr",align:null},"Treat the source file as ",Object(i.b)("a",{parentName:"td",href:"http://msdn.microsoft.com/en-us/library/a6h7e207(v=vs.71).aspx"},"visual user control"),".")))),Object(i.b)("p",null,"The descriptive actions such as ",Object(i.b)("strong",{parentName:"p"},"Component"),", ",Object(i.b)("strong",{parentName:"p"},"Form*, and "),"UserControl** are only recognized by Visual Studio, and may be considered optional as Visual Studio will automatically deduce the types when it first examines the project. You only need to specify these actions to avoid unnecessary modifications to the project files on save."),Object(i.b)("h3",{id:"applies-to"},"Applies To"),Object(i.b)("p",null,"File configurations."),Object(i.b)("h3",{id:"availability"},"Availability"),Object(i.b)("p",null,"Build actions are currently supported for C/C++ and C# projects."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Compile"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Copy"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Embed"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"None")," are available in Premake 4.4 or later. All actions are available in Premake 5.0 or later."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("p",null,"Embed all PNG images files into the target binary."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-lua"},'filter "files:**.png"\n   buildaction "Embed"\n')))}s.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);