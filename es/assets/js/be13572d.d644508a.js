"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=i,h=m["".concat(l,".").concat(g)]||m[g]||c[g]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>N,frontMatter:()=>y,metadata:()=>b,toc:()=>I});var a=n(7462),i=(n(7294),n(3905));const o=n.p+"assets/images/rockets_dalle_1-7f1a022bf61a41c2a5ccd675dabd18d3.png",r=n.p+"assets/images/rockets_dalle_2-2fab72209cff2f8650f8ec2b24afc530.png",s=n.p+"assets/images/computer_dalle_1-dd60e8ffec7009fc54f05f4c2df0f1d9.png",l=n.p+"assets/images/astronaut_dalle_1-08f7aa321dc87af6bc813be988c95d5d.png",p=n.p+"assets/images/astronaut_sd_1-cee6fd5391288884517e424d6012127b.png",d=n.p+"assets/images/rocket_sd_1-2fcaf68fb553e4bb288255d5b103f605.png";var c=n(8778);const m=n.p+"assets/images/laptop_sd_1-6c4d2a9c1a586e61a9a8f6d3a603ab13.png",g=n.p+"assets/images/gemstone_sd_1-a01817c059289e1639391fa484f84d07.png",h=n.p+"assets/images/gemstone_sd_2-e97da891cb99dff7f8c350da2f5b6c94.png",u=n.p+"assets/images/gemstone_sd_3-4ea9f958d5d5dbe4ea80c19c45b93c6f.png";var f=n(3553),w=n(64);const y={sidebar_position:1},k="\ud83d\udfe2 Intro to Image Prompting",b={unversionedId:"Images/intro",id:"Images/intro",title:"\ud83d\udfe2 Intro to Image Prompting",description:"Figuring out the best prompt to create a perfect image is a particular challenge.",source:"@site/docs/Images/intro.md",sourceDirName:"Images",slug:"/Images/intro",permalink:"/es/docs/Images/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/Images/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddbc\ufe0f Image Prompting",permalink:"/es/docs/category/\ufe0f-image-prompting"},next:{title:"\ud83d\udfe2 Style Modifiers",permalink:"/es/docs/Images/style_modifiers"}},v={},I=[{value:"Example",id:"example",level:2}],x={toc:I};function N(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-intro-to-image-prompting"},"\ud83d\udfe2 Intro to Image Prompting"),(0,i.kt)("p",null,"Figuring out the best prompt to create a perfect image is a particular challenge.\nResearch into methods to do so is not quite as developed as text prompting. This\nmay be due to inherent challenges in creating objects which are fundamentally subjective\nand often lack good accuracy metrics. However, fear not, as the image prompting\ncommunity",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," has made great discoveries about how to prompt various image models",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,i.kt)("p",null,"This guide covers basic image prompting techniques, and we highly encourage\nthat you look at the great resources at the end of the chapter.\nAdditionally, we provide an example of the end-to-end image prompting process below."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here I will go through an example of how I created the images for the front page of this course.\nI had been experimenting with low poly style for a deep reinforcement learning\nneural radiance field project. I liked the low poly style, and wanted to use it\nfor this course's images. "),(0,i.kt)("p",null,"I wanted an astronaut, a rocket, and a computer for the images on the front page."),(0,i.kt)("p",null,"I did a bunch of research into how to create low poly images, on ",(0,i.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/StableDiffusion/"},"r/StableDiffusion"),"\nand other sites, but couldn't find anything super helpful."),(0,i.kt)("p",null,"I decided to just start with DALLE and the prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"Low poly white and blue rocket shooting to the moon in front of a sparse green meadow")," and see what happened."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,style:{width:"750px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:r,style:{width:"750px"}})),(0,i.kt)("p",null,"I thought these results were pretty decent for a first try; I particularly liked\nthe bottom left rocket."),(0,i.kt)("p",null,"Next, I wanted a computer in the same style: ",(0,i.kt)("inlineCode",{parentName:"p"},"Low poly white and blue computer sitting in a sparse green meadow")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:s,style:{width:"750px"}})),(0,i.kt)("p",null,"Finally, I needed an astronaut! ",(0,i.kt)("inlineCode",{parentName:"p"},"Low poly white and blue astronaut sitting in a sparse green meadow with low poly mountains in the background")," seemed to do the trick."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:l,style:{width:"750px"}})),(0,i.kt)("p",null,"I thought the second one was decent."),(0,i.kt)("p",null,"Now I had an astronaut, a rocket, and a computer. I was happy with them,\nso I put them on the front page. After a few days and input from my friends I\nrealized the style just wasn't consistent \ud83d\ude14."),(0,i.kt)("p",null,"I did some more research on ",(0,i.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/StableDiffusion/"},"r/StableDiffusion")," and found people using the word isometric. I decided to try that out, using Stable Diffusion instead of DALLE.\nI also realized that I needed to add more modifiers to my prompt\nto constrain the style. I tried this prompt:\n",(0,i.kt)("inlineCode",{parentName:"p"},"A low poly world, with an astronaut in white suit and blue visor sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:p,style:{width:"250px"}})),(0,i.kt)("p",null,"These weren't great, so I decided to start on the rocket instead"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"A low poly world, with a white and blue rocket blasting off from a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:d,style:{width:"250px"}})),(0,i.kt)("p",null,"These are not particularly good, but after a bit of iterating around here, I ended up with "),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:c.Z,style:{width:"250px"}})),(0,i.kt)("p",null,"Now I needed a better laptop"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"A low poly world, with a white and blue laptop sitting in sparse green meadow with low poly mountains in the background. The screen is completely blue. Highly detailed, isometric, 4K")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:m,style:{width:"250px"}})),(0,i.kt)("p",null,"I got some inconsistent results; I like the bottom right one, but I decided to go in a different direction."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"A low poly world, with a glowing white and blue gemstone sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:g,style:{width:"250px"}})),(0,i.kt)("p",null,"This wasn't quite right. Let's try something magical and glowing."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"A low poly world, with a glowing white and blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:h,style:{width:"250px"}})),(0,i.kt)("p",null,"I liked these, but wanted the stone in the middle of the screen."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"A low poly world, with a glowing blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:u,style:{width:"250px"}})),(0,i.kt)("p",null,"Somewhere around here, I used SD's ability to have a previous image provide some influence for future images.\nAnd thus I arrived at:"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:f.Z,style:{width:"250px"}})),(0,i.kt)("p",null,"Finally, I was on to the astronaut."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"A low poly world, with an astronaut in white suite and blue visor is sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:w.Z,style:{width:"250px"}})),(0,i.kt)("p",null,"At this point, I was sufficiently happy with the style consistency between my three images to use them\non the website. The main takeaways for me were that this was a very iterative, research heavy process,\nand I had to modify my expectations and ideas as I experimented with different prompts and models."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Parsons, G. (2022). The DALLE 2 Prompt Book. https://dallery.gallery/the-dalle-2-prompt-book/\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2021). High-Resolution Image Synthesis with Latent Diffusion Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Ramesh, A., Dhariwal, P., Nichol, A., Chu, C., & Chen, M. (2022). Hierarchical Text-Conditional Image Generation with CLIP Latents.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}N.isMDXComponent=!0},64:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/astronaut-95650234596819f54ee184f1dabd8943.png"},3553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/computer-243ae75c79d233de57ba6cd14c5b7999.png"},8778:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rocket-a44f3d49a8eb6b98b2d30de930e63c16.png"}}]);