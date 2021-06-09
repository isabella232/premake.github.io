(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{426:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(443)),i=["components"],p={title:"Community Update #3",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},c={permalink:"/blog/2020/01/08/community-update-3",source:"@site/blog/2020-01-08-community-update-3.md",description:"Just a quick update this time: I had big plans for new features this cycle, but ended up getting swamped in end-of-year deadlines, and was only able to deliver a small portion of what I had intended (and late, at that). Still, I did manage a quick port-and-polish of the unit testing module and all of its dependencies, so I'm well positioned to begin the new user scripting API work in earnest. I will be on the road a fair bit over the next quarter, but I'm still optimistic that I can get enough of the new system online to give folks a sense of where things are headed.",date:"2020-01-08T00:00:00.000Z",tags:[{label:"community-updates",permalink:"/blog/tags/community-updates"}],title:"Community Update #3",readingTime:.925,truncated:!1,prevItem:{title:"Community Update #4",permalink:"/blog/2020/04/07/community-update-4"},nextItem:{title:"Community Update #2",permalink:"/blog/2019/10/23/ community-update-2"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Just a quick update this time: I had big plans for new features this cycle, but ended up getting swamped in end-of-year deadlines, and was only able to deliver a small portion of what I had intended (and late, at that). Still, I did manage a quick port-and-polish of the unit testing module and all of its dependencies, so I'm well positioned to begin the new user scripting API work in earnest. I will be on the road a fair bit over the next quarter, but I'm still optimistic that I can get enough of the new system online to give folks a sense of where things are headed."),Object(o.b)("p",null,"If you haven't been following along, you can see what I've been up to, and why, over at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"my premake-next repository on GitHub"),". I'm also posting regular updates here, as well as at ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),"."),Object(o.b)("p",null,"Many thanks to ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://opencollective.com/_fivem"},"CitizenFX Collective"))," and ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://opencollective.com/industriousone"},"Industrious One")),", and to new contributors ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://opencollective.com/renaud-guillard"},"Renaud Guillard"),", ",Object(o.b)("a",{parentName:"strong",href:"https://opencollective.com/wracky"},"Wracky"),",")," and ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://opencollective.com/micha-titulaer"},"MiCroN3000")),". Your generous support makes this possible, and is very much appreciated! \ud83c\udf89"),Object(o.b)("p",null,"~st."),Object(o.b)("p",null,"(Your feedback is welcome and appreciated\u2014come find us at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake"},"github.com/premake")," or ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),".)"))}s.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,b=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?a.a.createElement(b,p(p({ref:t},l),{},{components:n})):a.a.createElement(b,p({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);