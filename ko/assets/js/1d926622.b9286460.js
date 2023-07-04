"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a=n.p+"assets/images/bad_water-044cd25e3aaca95491acd045b20e85c2.jpg",o=n.p+"assets/images/good_water-6ee623c93733416f07135ad5432e5852.jpg",p=n.p+"assets/images/planet-0b85f367e155e9ed1107ab2a87a16939.png",l=n.p+"assets/images/planet_aliens-109c9be85e21193dfac22e5dc6c4b9e9.png",s={sidebar_position:50},m="\ud83d\udfe2 Repetition",c={unversionedId:"image_prompting/repetition",id:"image_prompting/repetition",title:"\ud83d\udfe2 Repetition",description:"Repeating the same word within a prompt, or similar phrases can cause the model",source:"@site/docs/image_prompting/repetition.md",sourceDirName:"image_prompting",slug:"/image_prompting/repetition",permalink:"/ko/docs/image_prompting/repetition",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/image_prompting/repetition.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Quality Boosters",permalink:"/ko/docs/image_prompting/quality_boosters"},next:{title:"\ud83d\udfe2 Weighted Terms",permalink:"/ko/docs/image_prompting/weighted_terms"}},u={},d=[{value:"Notes",id:"notes",level:2}],g={toc:d},f="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-repetition"},"\ud83d\udfe2 Repetition"),(0,i.kt)("p",null,"Repeating the same word within a prompt, or similar phrases can cause the model\nto emphasize that word in the generated image",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". For example, ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/phillip_isola/status/1532189632217112577"},"@Phillip Isola")," generated these waterfalls with DALLE:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"A beautiful painting of a mountain next to a waterfall."),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a,style:{width:"750px"}})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"A very very very very very very very very very very very very very very very very very very very very very very beautiful painting of a mountain next to a waterfall.")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,style:{width:"750px"}})),(0,i.kt)("p",null,"The emphasis on the word ",(0,i.kt)("inlineCode",{parentName:"p"},"very")," seems to improve generation quality! Repetition can\nalso be used to emphasize subject terms. For example, if you want to generate an image\nof a planet with aliens, using the prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens"),"\nwill make it more likely that aliens are in the resultant image. The following images are made with Stable Diffusion."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"A planet with aliens")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:p,style:{width:"250px"}})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:l,style:{width:"250px"}})),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"This method is not perfect, and using weights (next article) is often a better option."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Oppenlaender, J. (2022). A Taxonomy of Prompt Modifiers for Text-To-Image Generation.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}y.isMDXComponent=!0}}]);