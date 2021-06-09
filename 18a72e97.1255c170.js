(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{443:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(443)),i=["components"],l={title:"Custom Rules"},u={unversionedId:"Custom-Rules",id:"Custom-Rules",isDocsHomePage:!1,title:"Custom Rules",description:"Rule file generation is a new and experimental feature of Premake 5.0, which currently only supports Visual Studio and the gmake2 action. It allows you describe how to build a particular kind of file, similar to custom build commands, but in a more generic way, and with variables that can be set in your project script.",source:"@site/docs/Custom-Rules.md",slug:"/Custom-Rules",permalink:"/docs/Custom-Rules",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Custom-Rules.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1623250513},s=[{value:"Your First Rule",id:"your-first-rule",children:[]},{value:"Rule Properties",id:"rule-properties",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Rule file generation is a new and experimental feature of Premake 5.0, which currently only supports Visual Studio and the gmake2 action. It allows you describe how to build a particular kind of file, similar to ",Object(o.b)("a",{parentName:"p",href:"/docs/Custom-Build-Commands"},"custom build commands"),", but in a more generic way, and with variables that can be set in your project script."),Object(o.b)("p",null,"At generation time, Premake will output the appropriate rule files for the target action, just as it does for workspaces and projects.  For Visual Studio 2010+, Premake will generate ",Object(o.b)("inlineCode",{parentName:"p"},"RuleName.props"),", ",Object(o.b)("inlineCode",{parentName:"p"},"RuleName.targets"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"RuleName.xml"),". Currently, no other actions are supported."),Object(o.b)("p",null,"The documentation for this feature is still very incomplete."),Object(o.b)("h2",{id:"your-first-rule"},"Your First Rule"),Object(o.b)("p",null,"A simple build rule might look like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'rule "MyCustomRule"\n  display "My custom compiler"\n  fileextension ".xyz"\n\n  buildmessage \'Compiling %(Filename) with MyCustomCC\'\n  buildcommands \'MyCustomCC.exe -c "%(FullPath)" -o "%(IntDir)/%(Filename).obj"\'\n  buildoutputs \'%(IntDir)/%(Filename).obj"\'\n')),Object(o.b)("p",null,'This rule will pass all files in project with the ".xyz" file extension through the specified build command. At export time, the files ',Object(o.b)("inlineCode",{parentName:"p"},"MyCustomRule.props"),", ",Object(o.b)("inlineCode",{parentName:"p"},"MyCustomRule.targets"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"MyCustomRule.xml")," will be generated in the sample directory. Like workspaces and projects, this can be changed with ",Object(o.b)("a",{parentName:"p",href:"/docs/location"},Object(o.b)("inlineCode",{parentName:"a"},"location"))," and ",Object(o.b)("a",{parentName:"p",href:"/docs/filename"},Object(o.b)("inlineCode",{parentName:"a"},"filename")),"."),Object(o.b)("p",null,"There are still some shortcomings with the current implementation, notably that we don't have a generic set of variables to use in the commands. The example above uses Visual Studio's own variables such as ",Object(o.b)("inlineCode",{parentName:"p"},"%(FullPath)")," and ",Object(o.b)("inlineCode",{parentName:"p"},"%(IntDir)"),"; obviously these won't work if rules are implemented for a different toolset."),Object(o.b)("p",null,"To use the sample rule from above in a project, list the rule name in a ",Object(o.b)("a",{parentName:"p",href:"/docs/rules"},Object(o.b)("inlineCode",{parentName:"a"},"rules"))," statement:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'project "MyProject"\n  rules { "MyCustomRule" }\n')),Object(o.b)("h2",{id:"rule-properties"},"Rule Properties"),Object(o.b)("p",null,"The benefit of custom rules over ",Object(o.b)("a",{parentName:"p",href:"/docs/Custom-Build-Commands"},"custom build commands")," is the ability to specify ",Object(o.b)("em",{parentName:"p"},"properties"),", which can then be set like any other project or configuration value. Properties are defined with ",Object(o.b)("a",{parentName:"p",href:"/docs/propertydefinition"},Object(o.b)("inlineCode",{parentName:"a"},"propertydefinition"))," functions, including default values which can be overridden by specific project configurations."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'rule "MyCustomRule"\n  -- ...rule settings...\n\n  propertydefinition {\n    name = "StripDebugInfo",\n    ind = "boole\n    display = "Strip Debug Info",\n    description = "Remove debug information from the generated object files"\n    value = false,\n    switch = "-s"\n  }\n')),Object(o.b)("p",null,"Properties may then be used in the rule commands by enclosing the name in square brackets. This, again, is a Visual Studio convention; we may switch it up if support for additional exporters becomes available."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'buildcommand \'MyCustomCC.exe -c "%(FullPath)" -o "%(IntDir)/%(Filename).obj" [StripDebugInfo]\n')),Object(o.b)("p",null,"The string ",Object(o.b)("inlineCode",{parentName:"p"},"[StripDebugInfo]")," will be set with the switch value ",Object(o.b)("inlineCode",{parentName:"p"},"-s")," if the value is set to true."),Object(o.b)("p",null,"To set the properties for a rule, Premake will create a setter function of the format ",Object(o.b)("em",{parentName:"p"},"ruleName"),"Vars(). To set the example property above for a project's release configuration only:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'project "MyProject"\n  rules { "MyCustomRule" }\n\n  filter { "configurations:Release" }\n    myCustomRuleVars {\n      StripDebugInfo = true\n    }\n')))}p.isMDXComponent=!0}}]);