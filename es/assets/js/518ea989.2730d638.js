"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=i,u=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(u,o(o({ref:t},d),{},{components:r})):n.createElement(u,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905)),a=r(3409);const o=r.p+"assets/images/red_pyramids-9894ca5a33460e896b1a86929c5a64a9.png",s={sidebar_position:4},p="\ud83d\udfe2 Style Modifiers",l={unversionedId:"Images/style_modifiers",id:"Images/style_modifiers",title:"\ud83d\udfe2 Style Modifiers",description:"Style modifiers are simply descriptors which consistently",source:"@site/docs/Images/style_modifiers.md",sourceDirName:"Images",slug:"/Images/style_modifiers",permalink:"/es/docs/Images/style_modifiers",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/Images/style_modifiers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Intro to Image Prompting",permalink:"/es/docs/Images/intro"},next:{title:"\ud83d\udfe2 Quality Boosters",permalink:"/es/docs/Images/quality_boosters"}},d={},c=[{value:"Notes",id:"notes",level:2}],m={toc:c};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-style-modifiers"},"\ud83d\udfe2 Style Modifiers"),(0,i.kt)("p",null,"Style modifiers are simply descriptors which consistently\nproduce certain styles (e.g. 'tinted red', 'made of glass', 'rendered in Unity')",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),'. They can be combined together to\nproduce even more specific styles. They can "include information about art periods, schools, and styles, but also art materials and media, techniques, and artists"',(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("h1",{id:"example"},"Example"),(0,i.kt)("p",null,"Here are a few pyramids generated by DALLE, with the prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"pyramid"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a.Z,style:{width:"750px"}})),(0,i.kt)("p",null,"Here are a few pyramids generated by DALLE, with the prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"A pyramid made of glass, rendered in Unity and tinted red"),", which uses 3 style modifiers."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:o,style:{width:"750px"}})),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Oppenlaender et al.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," describe the ",(0,i.kt)("inlineCode",{parentName:"p"},"rendered in ...")," descriptor\nas a quality booster, but our working definition differs, since that modifier does consistently generate the specific Unity (or other render engine) style. As such, we will call that descriptor a style modifier."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Oppenlaender, J. (2022). A Taxonomy of Prompt Modifiers for Text-To-Image Generation.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},3409:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pyramids-ed2dde639215400defa3079c90fc34af.png"}}]);