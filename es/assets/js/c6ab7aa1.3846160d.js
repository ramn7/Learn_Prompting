"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9918:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905)),a=r(3409);const i=r.p+"assets/images/special_pyramids-a65a414ff1a63e6fe8270035d9735ed1.png",s={sidebar_position:5},p="\ud83d\udfe2 Quality Boosters",l={unversionedId:"Images/quality_boosters",id:"Images/quality_boosters",title:"\ud83d\udfe2 Quality Boosters",description:"Quality boosters(@oppenlaender2022taxonomy) are terms added to a prompt to improve",source:"@site/docs/Images/quality_boosters.md",sourceDirName:"Images",slug:"/Images/quality_boosters",permalink:"/es/docs/Images/quality_boosters",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/Images/quality_boosters.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Style Modifiers",permalink:"/es/docs/Images/style_modifiers"},next:{title:"\ud83d\udfe2 Repetition",permalink:"/es/docs/Images/repetition"}},m={},c=[{value:"Notes",id:"notes",level:2}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-quality-boosters"},"\ud83d\udfe2 Quality Boosters"),(0,o.kt)("p",null,"Quality boosters",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' are terms added to a prompt to improve\ncertain non-style-specific qualities of the generated image. For example "amazing", "beautiful", and "good quality" are all quality boosters that can be used to improve the quality of the generated image.'),(0,o.kt)("h1",{id:"example"},"Example"),(0,o.kt)("p",null,"Recall from the other page the pyramids generated with DALLE, and the prompt ",(0,o.kt)("inlineCode",{parentName:"p"},"pyramid"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:a.Z,style:{width:"750px"}})),(0,o.kt)("p",null,"Now take at pyramids generated with this prompt:\n",(0,o.kt)("inlineCode",{parentName:"p"},"A beautiful, majestic, incredible pyramid, 4K")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:i,style:{width:"750px"}})),(0,o.kt)("p",null,"These are much more scenic and impressive! "),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Similar to the note on the previous page, our working definition of quality boosters differs from Oppenlaender et al.",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". This being said, it is\nsometimes difficult to exactly distinguish between quality boosters and style modifiers."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Oppenlaender, J. (2022). A Taxonomy of Prompt Modifiers for Text-To-Image Generation.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},3409:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pyramids-ed2dde639215400defa3079c90fc34af.png"}}]);