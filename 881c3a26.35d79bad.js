(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(443)),i={title:"Community Update #8",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},s={permalink:"/blog/2021/04/20/community-update-8",source:"@site/blog/2021-04-20-community-update-8.md",description:"Welcome Website!",date:"2021-04-20T00:00:00.000Z",tags:[{label:"community-updates",permalink:"/blog/tags/community-updates"}],title:"Community Update #8",readingTime:2.23,truncated:!1,nextItem:{title:"Community Update #7",permalink:"/blog/2021/02/24/community-update-7"}},c=[{value:"Welcome Website!",id:"welcome-website",children:[]},{value:"Premake v5.0-alpha16 Released",id:"premake-v50-alpha16-released",children:[]},{value:"RFC: Branch or Backport",id:"rfc-branch-or-backport",children:[]},{value:"What&#39;s Next for Next",id:"whats-next-for-next",children:[]},{value:"Thanks \ud83d\ude4f",id:"thanks-",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"welcome-website"},"Welcome Website!"),Object(o.b)("p",null,"The biggest update this cycle: a new and very much improved Premake website. Built with ",Object(o.b)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus"),', the new site gives us better navigation and search, a place for news (with RSS!) and it sure looks a hell of a lot better than my "make a website in 20 minutes" version we were running before.'),Object(o.b)("p",null,"Many thanks to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/KyrietS"},"@KyrietS")," for kicking off the process and the help with bootstrapping and content migration! \ud83d\ude4c"),Object(o.b)("p",null,"On the process side, this upgrade means that the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/tree/master/website/docs"},"documentation now lives with the code"),". Anyone can contribute by submitting a pull request, and the docs can now be updated right alongside the code that implements the changes. I'm optimistic this will help us improve the accuracy and timeliness of the documentation."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"(The GitHub wiki served us well in its time, and is still there for the historical record. But people tended to not keep it up to date with the code. Navigation and search wasn't as nice. And permissions were all-or-nothing; there was no great way to strike a balance between community edits and preventing spam and vandalism.)")),Object(o.b)("p",null,"Very happy about this."),Object(o.b)("h3",{id:"premake-v50-alpha16-released"},"Premake v5.0-alpha16 Released"),Object(o.b)("p",null,"I\u2026did not realize how long it had been since there was a proper release. Pandemic and all that. I've corrected the matter: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/releases/tag/v5.0.0-alpha16"},"v5.0-alpha16 is now available"),", with lots of good improvements. See the full changelog ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/releases/tag/v5.0.0-alpha16"},"here"),"."),Object(o.b)("p",null,"(By the way, if anyone out there has a knack for build automation I'd love to see these releases automated. Get in touch!)"),Object(o.b)("h3",{id:"rfc-branch-or-backport"},"RFC: Branch or Backport"),Object(o.b)("p",null,"I also finally sat down and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/discussions/1616"},"opened an RFC")," to figure out what to do with the work going on over at ",Object(o.b)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"premake-next"),": branch and push ahead to a v6, or backport the improvements into v5? I've gone back and forth on it but came down on the side of branching; now I'd love to hear what the community thinks. Join the discussion ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/discussions/1616"},"here"),"."),Object(o.b)("h3",{id:"whats-next-for-next"},"What's Next for Next"),Object(o.b)("p",null,"While we're discussing, I'm hoping to get back to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"premake-next"),", finish up the first few build switches (defines, include directories, that kind of thing), and show them working for both project and file-level configurations, exported for Visual Studio."),Object(o.b)("h3",{id:"thanks-"},"Thanks \ud83d\ude4f"),Object(o.b)("p",null,"As I do but never do enough, many thanks to ",Object(o.b)("a",{parentName:"p",href:"https://github.com/samsinsane"},"@samsinsane"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/KyrietS"},"@KyrietS"),", and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/pulls?q=is%3Apr+is%3Aclosed+sort%3Aupdated-desc"},"everyone who contributed code")," and helped review PRs and issues this cycle."),Object(o.b)("p",null,"Many thanks to ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://opencollective.com/_fivem#section-contributions"},"CitizenFX Collective"))," and ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://opencollective.com/premake#section-contributors"},"all our monthly backers"))," who allow me to work on Premake instead of shilling for client work. Couldn't be doing this without your generosity."),Object(o.b)("p",null,"And as ever: I welcome questions, suggestions, and concerns. Message or DM me at ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),", email at ",Object(o.b)("a",{parentName:"p",href:"mailto:starkos@industriousone.com"},"starkos@industriousone.com"),", or ",Object(o.b)("a",{parentName:"p",href:"https://github.com/premake/premake-core/discussions"},"open a discussion on GitHub"),"."),Object(o.b)("p",null,"~st."))}l.isMDXComponent=!0},443:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||h[m]||o;return n?r.a.createElement(b,s(s({ref:t},p),{},{components:n})):r.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);