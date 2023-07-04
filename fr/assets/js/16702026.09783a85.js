"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(r),c=i,u=m["".concat(p,".").concat(c)]||m[c]||f[c]||o;return r?n.createElement(u,a(a({ref:t},l),{},{components:r})):n.createElement(u,a({ref:t},l))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=r(87462),i=(r(67294),r(3905));const o=r.p+"assets/images/good_pitt-95ed5cb5246fab730e02429982d1b256.png",a=r.p+"assets/images/bad_pitt-02395368d9e8f97c8f0674d9b0f13d38.png",s={sidebar_position:90},p="\ud83d\udfe2 Fix Deformed Generations",d={unversionedId:"image_prompting/fix_deformed_generations",id:"image_prompting/fix_deformed_generations",title:"\ud83d\udfe2 Fix Deformed Generations",description:"Deformed generations, particularly on human body parts (e.g. hands, feet), are a common issue with many models. This can be dealt with to some extent with good negative prompts(@blake2022with). The following example is adapted from this Reddit post.",source:"@site/docs/image_prompting/fix_deformed_generations.md",sourceDirName:"image_prompting",slug:"/image_prompting/fix_deformed_generations",permalink:"/fr/docs/image_prompting/fix_deformed_generations",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/image_prompting/fix_deformed_generations.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Weighted Terms",permalink:"/fr/docs/image_prompting/weighted_terms"},next:{title:"\ud83d\udfe2 Midjourney",permalink:"/fr/docs/image_prompting/midjourney"}},l={},m=[{value:"Example",id:"example",level:2}],f={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-fix-deformed-generations"},"\ud83d\udfe2 Fix Deformed Generations"),(0,i.kt)("p",null,"Deformed generations, particularly on human body parts (e.g. hands, feet), are a common issue with many models. This can be dealt with to some extent with good negative prompts",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". The following example is adapted from ",(0,i.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/"},"this Reddit post"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Using Stable Diffusion v1.5 and the following prompt, we generate a nice image of Brad Pitt, except for his hands of course!"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a,style:{width:"250px"}})),(0,i.kt)("p",null,"Using a robust negative prompt, we can generate much more convincing hands."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6 | disfigured, deformed hands, blurry, grainy, broken, cross-eyed, undead, photoshopped, overexposed, underexposed, lowres, bad anatomy, bad hands, extra digits, fewer digits, bad digit, bad ears, bad eyes, bad face, cropped: -5")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,style:{width:"250px"}})),(0,i.kt)("p",null,"Using a similar negative prompt can help with other body parts as well. Unfortunately, this technique is not consistent, so you may need to attempt multiple generations\nbefore getting a good result.\nIn the future, this type of prompting should be unnecessary since models will improve.\nHowever, currently it is a very useful technique."),(0,i.kt)("h1",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Improved models such as ",(0,i.kt)("a",{parentName:"p",href:"https://civitai.com/models/3666/protogen-x34-official-release"},"Protogen")," are often better with hands, feet, etc."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Blake. (2022). With the right prompt, Stable Diffusion 2.0 can do hands. https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);