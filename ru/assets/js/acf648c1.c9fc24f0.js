"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=i,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905)),o=r(53409);const a=r.p+"assets/images/special_pyramids-a65a414ff1a63e6fe8270035d9735ed1.png",s={sidebar_position:5},p="\ud83d\udfe2 Quality Boosters",l={unversionedId:"image_prompting/quality_boosters",id:"image_prompting/quality_boosters",title:"\ud83d\udfe2 Quality Boosters",description:"Quality boosters(@oppenlaender2022taxonomy) are terms added to a prompt to improve",source:"@site/docs/image_prompting/quality_boosters.md",sourceDirName:"image_prompting",slug:"/image_prompting/quality_boosters",permalink:"/ru/docs/image_prompting/quality_boosters",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/image_prompting/quality_boosters.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Style Modifiers",permalink:"/ru/docs/image_prompting/style_modifiers"},next:{title:"\ud83d\udfe2 Repetition",permalink:"/ru/docs/image_prompting/repetition"}},m={},c=[{value:"Notes",id:"notes",level:2}],u={toc:c},d="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-quality-boosters"},"\ud83d\udfe2 Quality Boosters"),(0,i.kt)("p",null,"Quality boosters",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' are terms added to a prompt to improve\ncertain non-style-specific qualities of the generated image. For example "amazing", "beautiful", and "good quality" are all quality boosters that can be used to improve the quality of the generated image.'),(0,i.kt)("h1",{id:"example"},"Example"),(0,i.kt)("p",null,"Recall from the other page the pyramids generated with DALLE, and the prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"pyramid"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o.Z,style:{width:"750px"}})),(0,i.kt)("p",null,"Now take at pyramids generated with this prompt:\n",(0,i.kt)("inlineCode",{parentName:"p"},"A beautiful, majestic, incredible pyramid, 4K")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a,style:{width:"750px"}})),(0,i.kt)("p",null,"These are much more scenic and impressive! "),(0,i.kt)("p",null,"Here is a list of a number of quality boosters: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"High resolution, 2K, 4K, 8K, clear, good lighting, detailed, extremely detailed, sharp focus, intricate, beautiful, realistic+++, complementary colors, high quality, hyper detailed, masterpiece, best quality, artstation, stunning\n")),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Similar to the note on the previous page, our working definition of quality boosters differs from Oppenlaender et al.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". This being said, it is\nsometimes difficult to exactly distinguish between quality boosters and style modifiers."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Oppenlaender, J. (2022). A Taxonomy of Prompt Modifiers for Text-To-Image Generation.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},53409:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pyramids-ed2dde639215400defa3079c90fc34af.png"}}]);