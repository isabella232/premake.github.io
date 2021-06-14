(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{317:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return u})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),l=(t(0),t(443)),i=["components"],o={title:"Your First Script"},s={unversionedId:"Your-First-Script",id:"Your-First-Script",isDocsHomePage:!1,title:"Your First Script",description:'Let\'s start by configuring a build for the traditional "Hello, world!" program, as written in C:',source:"@site/docs/Your-First-Script.md",slug:"/Your-First-Script",permalink:"/docs/Your-First-Script",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Your-First-Script.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,sidebar:"docs",previous:{title:"Building Premake",permalink:"/docs/Building-Premake"},next:{title:"Workspaces & Projects",permalink:"/docs/Workspaces-and-Projects"}},u=[{value:"What&#39;s Going On Here?",id:"whats-going-on-here",children:[{value:"Premake is Lua",id:"premake-is-lua",children:[]},{value:"Functions and Arguments",id:"functions-and-arguments",children:[]},{value:"Values and Lists",id:"values-and-lists",children:[]},{value:"Paths",id:"paths",children:[]}]}],c={toc:u};function p(e){var a=e.components,t=Object(r.a)(e,i);return Object(l.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Let's start by configuring a build for the traditional ",Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/%22Hello,_world!%22_program"},'"Hello, world!" program'),", as written in C:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-c"},'/* hello.c */\n#include <stdio.h>\n\nint main(void) {\n   puts("Hello, world!");\n   return 0;\n}\n')),Object(l.b)("p",null,"The Premake script for a typical C program, such as this example, would be:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'-- premake5.lua\nworkspace "HelloWorld"\n   configurations { "Debug", "Release" }\n\nproject "HelloWorld"\n   kind "ConsoleApp"\n   language "C"\n   targetdir "bin/%{cfg.buildcfg}"\n\n   files { "**.h", "**.c" }\n\n   filter "configurations:Debug"\n      defines { "DEBUG" }\n      symbols "On"\n\n   filter "configurations:Release"\n      defines { "NDEBUG" }\n      optimize "On"\n')),Object(l.b)("p",null,"If you save this script as a file named ",Object(l.b)("inlineCode",{parentName:"p"},"premake5.lua"),", and place it in the same directory as ",Object(l.b)("inlineCode",{parentName:"p"},"hello.c")," above, you can then generate project files by running a command like this one:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ premake5 vs2013\n")),Object(l.b)("p",null,"This particular command will generate ",Object(l.b)("inlineCode",{parentName:"p"},"HelloWorld.sln")," and ",Object(l.b)("inlineCode",{parentName:"p"},"HelloWorld.vcxproj")," files for Visual Studio 2013 (see ",Object(l.b)("a",{parentName:"p",href:"/docs/Using-Premake"},"Using Premake")," or run ",Object(l.b)("inlineCode",{parentName:"p"},"premake --help")," for a complete list of exporters). If you build the generated workspace, you will get a command line executable named ",Object(l.b)("inlineCode",{parentName:"p"},"HelloWorld.exe")," in the ",Object(l.b)("inlineCode",{parentName:"p"},"bin/Debug")," or ",Object(l.b)("inlineCode",{parentName:"p"},"bin/Release")," directory, depending on which configuration was selected within Visual Studio."),Object(l.b)("p",null,"If you happened to be on Linux, you could generate and build a makefile like so:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ premake5 gmake\n$ make                # build default (Debug) configuration\n$ make config=release # build release configuration\n$ make help           # show available configurations\n")),Object(l.b)("p",null,"If you'd like to use a name for your script other than the default \"premake5.lua\", use Premake's ",Object(l.b)("inlineCode",{parentName:"p"},"--file")," argument to tell it which file it should load."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ premake5 --file=MyProjectScript.lua vs2013\n")),Object(l.b)("h2",{id:"whats-going-on-here"},"What's Going On Here?"),Object(l.b)("p",null,"Through the rest of this manual I'll break this sample down and walk through all of the features of Premake in a somewhat logical fashion. It isn't rocket science, and you probably already have the gist of it from the example above, so feel free to skip around. But first, it is helpful to know a few things about Premake scripts in general."),Object(l.b)("h3",{id:"premake-is-lua"},"Premake is Lua"),Object(l.b)("p",null,"Premake is built on ",Object(l.b)("a",{parentName:"p",href:"http://www.lua.org/about.html"},"Lua"),", a powerful, fast, lightweight scripting language. Premake scripts are really Lua programs, so anything you can do in Lua can also be done in a Premake script."),Object(l.b)("p",null,"Premake builds on the Lua runtime, adding functions for defining workspaces, projects, and configurations as well as common build and file management tasks. It also provides conventions for setting your own command line options and arguments, allowing for construction of sophisticated build configuration and automation scripts."),Object(l.b)("p",null,"Because of the descriptive nature of the Lua language, your build scripts will often look more like static configuration files than mini-programs, as you can see from the example above."),Object(l.b)("p",null,"You can ",Object(l.b)("a",{parentName:"p",href:"http://www.lua.org/about.html"},"learn more about Lua here")," or from their ",Object(l.b)("a",{parentName:"p",href:"http://www.lua.org/manual/5.3/"},"excellent reference manual"),", but here's what you need to know to understand this example:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The identation whitespace is arbitrary; this is the way I happen to like it.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'A double dash "--" starts a single line comment.')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'Curly braces "{" and "}" are used to denote lists of values.'))),Object(l.b)("h3",{id:"functions-and-arguments"},"Functions and Arguments"),Object(l.b)("p",null,"Each line in the sample script is actually a function call. When you call a Lua function with a simple string or table argument you may omit the usual parenthesis for readability. So the first two lines of the sample could also be written as:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'workspace("HelloWorld")\nconfigurations({ "Debug", "Release" })\n')),Object(l.b)("p",null,"If you use anything ",Object(l.b)("em",{parentName:"p"},"other")," than a simple string or table, the parenthesis become mandatory."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'local lang = "C++"\nlanguage (lang)  -- using a variable, needs parenthesis\n\nworkspace("HelloWorld" .. _ACTION) -- using string concatenation, needs parenthesis\n')),Object(l.b)("h3",{id:"values-and-lists"},"Values and Lists"),Object(l.b)("p",null,"Most of Premake's functions accept either a single string or a list of strings as arguments. Single string arguments are easy to use and understand."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'language "C++"\n')),Object(l.b)("p",null,"If multiple values are encountered for a simple value, the last one seen wins."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'language "C++"   -- the value is now "C++"\nlanguage "C"     -- the value is now "C"\n')),Object(l.b)("p",null,"For functions that accept a list of values, you may supply a list using Lua's curly brace syntax, or a single string value."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'defines { "DEBUG", "TRACE" }  -- defines multiple values using list syntax\ndefines { "NDEBUG" }           -- defines a single value using list syntax\ndefines "NDEBUG"              -- defines a single value as a simple string\n')),Object(l.b)("p",null,"If multiple values are encountered for a list, they are concatenated."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'defines { "DEBUG", "TRACE" }  -- value is now { "DEBUG", "TRACE" }\ndefines { "WINDOWS" }         -- value is now { "DEBUG", "TRACE", "WINDOWS" }\n')),Object(l.b)("p",null,"If you ever wish to remove a previously set value, all list functions define a corresponding remove...() call."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lua"},'defines { "DEBUG", "TRACE" }  -- value is now { "DEBUG", "TRACE" }\nremovedefines { "TRACE" }     -- value is now { "DEBUG" }\n')),Object(l.b)("h3",{id:"paths"},"Paths"),Object(l.b)("p",null,"You'll be specifying lots of paths in your Premake scripts. There are two rules to remember:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Always specify paths relative to the script file in which they appear.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},'Always use forward slashes ("/") as a path separator. Premake will translate to the appropriate separator when generating the output files.'))))}p.isMDXComponent=!0},443:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),c=function(e){var a=r.a.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return r.a.createElement(u.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||l;return t?r.a.createElement(m,o(o({ref:a},u),{},{components:t})):r.a.createElement(m,o({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);