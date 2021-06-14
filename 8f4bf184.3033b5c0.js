(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{271:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(443)),o=["components"],l={},c={unversionedId:"buildinputs",id:"buildinputs",isDocsHomePage:!1,title:"buildinputs",description:"Specifies the source file file inputs of a custom build command or rule.",source:"@site/docs/buildinputs.md",slug:"/buildinputs",permalink:"/docs/buildinputs",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/buildinputs.md",version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,sidebar:"docs",previous:{title:"builddependencies",permalink:"/docs/builddependencies"},next:{title:"buildlog",permalink:"/docs/buildlog"}},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:u};function s(e){var t=e.components,n=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Specifies the source file file inputs of a custom build command or rule."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lua"},'buildinputs { "inputs" }\n')),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"inputs")," is the list of input source files."),Object(a.b)("h3",{id:"applies-to"},"Applies To"),Object(a.b)("p",null,"Project configurations."),Object(a.b)("h3",{id:"availability"},"Availability"),Object(a.b)("p",null,"Premake 5.0 or later."),Object(a.b)("h3",{id:"see-also"},"See Also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/Custom-Build-Commands"},"Custom Build Commands")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/Custom-Rules"},"Custom Rules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/buildcommands"},"buildcommands")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/builddependencies"},"builddependencies")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/buildoutputs"},"buildoutputs"))))}s.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);