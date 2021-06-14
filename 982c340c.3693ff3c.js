(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{282:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return m}));var n=o(3),a=o(7),r=(o(0),o(443)),s=["components"],i={title:"Custom Build Commads"},l={unversionedId:"Custom-Build-Commands",id:"Custom-Build-Commands",isDocsHomePage:!1,title:"Custom Build Commads",description:"There are a few different ways that you can add custom commands to your Premake-generated builds: pre- and post-build stages, custom build commands, and custom rules.",source:"@site/docs/Custom-Build-Commands.md",slug:"/Custom-Build-Commands",permalink:"/docs/Custom-Build-Commands",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Custom-Build-Commands.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682},c=[{value:"Pre- and Post-Build Stages",id:"pre--and-post-build-stages",children:[]},{value:"Custom Build Commands",id:"custom-build-commands",children:[]},{value:"Custom Rules",id:"custom-rules",children:[]}],u={toc:c};function m(e){var t=e.components,o=Object(a.a)(e,s);return Object(r.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are a few different ways that you can add custom commands to your Premake-generated builds: ",Object(r.b)("em",{parentName:"p"},"pre- and post-build stages"),", ",Object(r.b)("em",{parentName:"p"},"custom build commands"),", and ",Object(r.b)("em",{parentName:"p"},"custom rules"),"."),Object(r.b)("p",null,"You can also use ",Object(r.b)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile projects")," to execute external shell scripts or makefiles, rather than use the normal build system."),Object(r.b)("h2",{id:"pre--and-post-build-stages"},"Pre- and Post-Build Stages"),Object(r.b)("p",null,"These are the simplest to setup and use: pass one or more command lines to the ",Object(r.b)("a",{parentName:"p",href:"/docs/prebuildcommands"},Object(r.b)("inlineCode",{parentName:"a"},"prebuildcommands")),", ",Object(r.b)("a",{parentName:"p",href:"/docs/prelinkcommands"},Object(r.b)("inlineCode",{parentName:"a"},"prelinkcommands")),", or ",Object(r.b)("a",{parentName:"p",href:"/docs/postbuildcommands"},Object(r.b)("inlineCode",{parentName:"a"},"postbuildcommands"))," functions. You can use ",Object(r.b)("a",{parentName:"p",href:"/docs/Tokens"},"Tokens")," to create generic commands that will work across platforms and configurations."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},'-- copy a file from the objects directory to the target directory\npostbuildcommands {\n  "{COPY} %{cfg.objdir}/output.map %{cfg.targetdir}"\n}\n')),Object(r.b)("h2",{id:"custom-build-commands"},"Custom Build Commands"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"As of this writing, the custom build commands feature is still incomplete; see the list of limitations below.")),Object(r.b)("p",null,"Custom build commands provide the ability to compile or process new types of files, other than the C/C++ or C# files Premake supports out of the box. You can compile a Cg shader program, or process an image."),Object(r.b)("p",null,"Here is an example which compiles all Lua files in a project to C:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lua"},"filter 'files:**.lua'\n   -- A message to display while this build step is running (optional)\n   buildmessage 'Compiling %{file.relpath}'\n\n   -- One or more commands to run (required)\n   buildcommands {\n      'luac -o \"%{cfg.objdir}/%{file.basename}.out\" \"%{file.relpath}\"'\n   }\n\n   -- One or more outputs resulting from the build (required)\n   buildoutputs { '%{cfg.objdir}/%{file.basename}.c' }\n\n   -- One or more additional dependencies for this build command (optional)\n   buildinputs { 'path/to/file1.ext', 'path/to/file2.ext' }\n\n")),Object(r.b)("p",null,"The basic syntax follows Visual Studio's model, but it should be easy to see how it would translate to makefiles."),Object(r.b)("p",null,"Build rules follow the same configuration scoping as the rest of the Premake API. You can apply rules to a specific platform or build configuration, to specific files or all files, or to any combination. And you can use ",Object(r.b)("a",{parentName:"p",href:"/docs/Tokens"},"Tokens")," to create generic commands that will work across platforms and configurations."),Object(r.b)("p",null,"If the outputs include any object files, they will be automatically added to the link step. Ideally, any source code files included in the outputs would be fed back into the build, but that is not the case currently."),Object(r.b)("p",null,"Custom build commands currently have a few shortcomings. Help fixing these issues, or any other gaps, would be most appreciated!"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"There is limited detection of paths in the build commands. Tokens that\nexpand to absolute paths (most of them do, i.e. %{cfg.objdir}) are properly\nmade project relative. Custom tokens, or paths hardcoded inline with the\ncommands, must be specified relative to the generated project location.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Commands that output C/C++ source files are not fed into the build\nprocess yet (but commands that output object files are fed to the\nlinker).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The generated makefile rule only takes the first output into account\nfor dependency checking."))),Object(r.b)("h2",{id:"custom-rules"},"Custom Rules"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/docs/Custom-Rules"},"custom rules feature")," is similar to custom build commands. It allows you describe how to build a particular kind of file, but in a more generic way, and with variables that can be set in your project script. ",Object(r.b)("a",{parentName:"p",href:"/docs/Custom-Rules"},"Learn more about custom rules here"),"."))}m.isMDXComponent=!0},443:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return b}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(o),p=n,b=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return o?a.a.createElement(b,i(i({ref:t},c),{},{components:o})):a.a.createElement(b,i({ref:t},c))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=o[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);