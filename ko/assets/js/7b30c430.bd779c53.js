"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3838],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return o?n.createElement(g,a(a({ref:t},p),{},{components:o})):n.createElement(g,a({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},79317:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const i=o.p+"assets/images/zero_shot-1af9e1cb88412f9fdefa3b07b67c4193.png",a=o.p+"assets/images/zero_shot_example-89065990663d4ef044011844ff77f9af.png",l={sidebar_position:4},s="\ud83d\udfe2 \uc81c\ub85c \uc0f7(Zero Shot) \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",c={unversionedId:"intermediate/zero_shot_cot",id:"intermediate/zero_shot_cot",title:"\ud83d\udfe2 \uc81c\ub85c \uc0f7(Zero Shot) \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",description:'\uc81c\ub85c \uc0f7 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305(\uc81c\ub85c \uc0f7 CoT)\ub294 \uc544\uc8fc \uac04\ub2e8\ud55c \uc81c\ub85c \uc0f7 \ud504\ub86c\ud504\ud305 \uae30\uc220\uc774\uba74\uc11c CoT \ud504\ub86c\ud504\ud305(@wei2022chain)\uc758 \ud6c4\uc18d \uae30\uc220\uc774\ub2e4. ""Let\'s think step',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/intermediate/zero_shot_cot.md",sourceDirName:"intermediate",slug:"/intermediate/zero_shot_cot",permalink:"/ko/docs/intermediate/zero_shot_cot",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/zero_shot_cot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",permalink:"/ko/docs/intermediate/chain_of_thought"},next:{title:"\ud83d\udfe1 \uc790\uae30 \uc77c\uad00\uc131",permalink:"/ko/docs/intermediate/self_consistency"}},p={},d=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2},{value:"\uc2e4\ud328",id:"\uc2e4\ud328",level:4},{value:"\uc131\uacf5",id:"\uc131\uacf5",level:4},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:2},{value:"\uc120\ud0dd\uc9c0 \uc904\uc774\uae30",id:"\uc120\ud0dd\uc9c0-\uc904\uc774\uae30",level:2},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:2}],m={toc:d},u="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\uc81c\ub85c-\uc0f7zero-shot-\uc0ac\uace0-\uc0ac\uc2ac-\ud504\ub86c\ud504\ud305"},"\ud83d\udfe2 \uc81c\ub85c \uc0f7(Zero Shot) \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305"),(0,r.kt)("p",null,"\uc81c\ub85c \uc0f7 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305(\uc81c\ub85c \uc0f7 CoT)\ub294 \uc544\uc8fc \uac04\ub2e8\ud55c \uc81c\ub85c \uc0f7 \ud504\ub86c\ud504\ud305 \uae30\uc220\uc774\uba74\uc11c CoT \ud504\ub86c\ud504\ud305",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),'\uc758 \ud6c4\uc18d \uae30\uc220\uc774\ub2e4. ""',(0,r.kt)("strong",{parentName:"p"},"Let's think step\nby step."),'""\uc744 \uc9c8\ubb38\uc758 \ub9c8\uc9c0\ub9c9\uc5d0 \ub123\uac8c \ub418\uba74 LLM\uc740 \uc9c8\ubb38\uc5d0 \ub300\ud55c \uc0ac\uace0 \uc0ac\uc2ac\uc744 \uc0dd\uc131\ud558\uac8c \ub418\uace0 \uc774 \uc0ac\uace0 \uc0ac\uc2ac\uc744 \uc774\uc6a9\ud574\uc11c \ub354 \uc815\ud655\ud55c \ub2f5\ubcc0\uc744 \ucd94\ucd9c\ud574\ub0bc \uc218 \uc788\ub2e4.'),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:i,style:{width:"500px"}})),(0,r.kt)("div",{style:{textAlign:"center"}},"\uc81c\ub85c \uc0f7(Zero Shot) CoT (Kojima et al.)"),(0,r.kt)("p",null,"\uae30\uc220\uc801\uc73c\ub85c \uc81c\ub85c \uc0f7 CoT \uacfc\uc815\uc740 \ub450 \uac00\uc9c0\uc758 \uac1c\ubcc4\uc801\uc778 \ud504\ub86c\ud504\ud2b8/\ub2f5\ubcc0\uc73c\ub85c \uc774\ub8e8\uc5b4\uc838\uc788\ub2e4.\n\uc544\ub798\uc758 \uc774\ubbf8\uc9c0\ub97c \ubcf4\uba74 \uc67c\ucabd \uc704\uc758 \uc0c1\uc790\uc5d0\uc11c\ub294 \uc0ac\uace0 \uc0ac\uc2ac\uc744 \uc0dd\uc131\ud558\uace0 \uc624\ub978\ucabd \uc0c1\uc790\uc5d0\uc11c\ub294 \uccab \ubc88\uc9f8 \ud504\ub86c\ud504\ud2b8\uc5d0\uc11c \ub098\uc628 \ub2f5\ubcc0\uc744 \uc774\uc6a9\ud574\uc11c \ub2f5\ubcc0\uc744 \ucd94\ucd9c\ud55c\ub2e4.\n\uadf8\ub798\uc11c \ub450 \ubc88\uc9f8 \ud504\ub86c\ud504\ud2b8\ub294 \ud558\ub098\uc758 ",(0,r.kt)("em",{parentName:"p"},"\uc790\uae30 \uac15\ud654")," \ud504\ub86c\ud504\ud2b8\uac00 \ub41c\ub2e4."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:a,style:{width:"500px"}})),(0,r.kt)("div",{style:{textAlign:"center"}},"\uc804\uccb4 \uc81c\ub85c \uc0f7(Zero Shot) CoT \uacfc\uc815 (Kojima et al.)"),(0,r.kt)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,r.kt)("p",null,"\uc5ec\uae30 \ucd94\ub860\uc5d0 \ub300\ud55c \uba87\uac00\uc9c0 \uc608\uc2dc\uac00 \uc788\uc2b5\ub2c8\ub2e4.\n\uccab \ubc88\uc9f8 \ub370\ubaa8\ub294 GPT-3(davinci-003)\uc774 \uac04\ub2e8\ud55c \uc218\ud559 \ubb38\uc81c\ub97c \ud478\ub294\ub370 \uc2e4\ud328\ud558\ub294 \uac83\uc744 \ubcf4\uc5ec\uc8fc\uace0\n\ub450 \ubc88\uc9f8 \ub370\ubaa8\ub294 \uc81c\ub85c \uc0f7 CoT \ud504\ub86c\ud504\ud2b8\ub97c \uc774\uc694\ud574\uc11c \uc131\uacf5\uc801\uc73c\ub85c \ubb38\uc81c\ub97c \ud478\ub294 \uac83\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uc758 OpenAI API \ud0a4\ub97c \ub123\uc5b4\uc11c \uc608\uc2dc\ub4e4\uc744 \uc2e4\ud589\uc2dc\ucf1c\ubcf4\uc138\uc694.\n\uc81c\ub85c \uc0f7 CoT\uac00 \uae30\uc874\uc758 CoT \ud504\ub86c\ud504\ud2b8\ubcf4\ub2e4 \ud6e8\uc52c \ub354 \uac04\ub2e8\ud558\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\uc2e4\ud328"},"\uc2e4\ud328"),(0,r.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBoYXMgOCBwZWFycy4iLCJwcm9tcHQiOiJJZiBKb2huIGhhcyA1IHBlYXJzLCB0aGVuIGVhdHMgMiwgYW5kIGJ1eXMgNSBtb3JlLCB0aGVuIGdpdmVzIDMgdG8gaGlzIGZyaWVuZCwgaG93IG1hbnkgcGVhcnMgZG9lcyBoZSBoYXZlPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("h4",{id:"\uc131\uacf5"},"\uc131\uacf5"),(0,r.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiSm9obiBzdGFydHMgd2l0aCA1IHBlYXJzLiBIZSBlYXRzIDIgcGVhcnMsIGxlYXZpbmcgaGltIHdpdGggMyBwZWFycy4gSGUgYnV5cyA1IG1vcmUgcGVhcnMsIGdpdmluZyBoaW0gYSB0b3RhbCBvZiA4IHBlYXJzLiBIZSBnaXZlcyAzIHBlYXJzIHRvIGhpcyBmcmllbmQsIGxlYXZpbmcgaGltIHdpdGggb25seSA1IHBlYXJzLiIsInByb21wdCI6IklmIEpvaG4gaGFzIDUgcGVhcnMsIHRoZW4gZWF0cyAyLCBhbmQgYnV5cyA1IG1vcmUsIHRoZW4gZ2l2ZXMgMyB0byBoaXMgZnJpZW5kLCBob3cgbWFueSBwZWFycyBkb2VzIGhlIGhhdmU%2FXG5cbkxldCdzIHRoaW5rIHN0ZXAgYnkgc3RlcC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("h2",{id:"\uacb0\uacfc"},"\uacb0\uacfc"),(0,r.kt)("p",null,"\uc81c\ub85c \uc0f7 CoT(Zero-shot-CoT) \ub610\ud55c \uc0b0\uc218, \uc0c1\uc2dd \ubc0f \uc0c1\uc9d5\uc801 \ucd94\ub860 \uc791\uc5c5\uc5d0\uc11c \ub354 \ub098\uc740 \uacb0\uacfc\ub97c \ub0b4\ub294\ub370 \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \ub2f9\uc5f0\ud558\uac8c\ub3c4 \uae30\uc874\uc758 CoT\ubcf4\ub2e4\ub294 \ub35c \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4. \uc81c\ub85c \uc0f7 CoT\ub294 CoT \ud504\ub86c\ud504\ud2b8\uc758 \ud4e8\uc0f7 \uc608\uc81c\ub97c \uc5bb\uae30\uac00 \uc5b4\ub824\uc6b8 \ub54c \uac00\uc7a5 \ud6a8\uacfc\uc801\uc778 \ub300\uc548\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc120\ud0dd\uc9c0-\uc904\uc774\uae30"},"\uc120\ud0dd\uc9c0 \uc904\uc774\uae30"),(0,r.kt)("p",null,'Kojima \ub4f1, \ub9ce\uc740 \uc81c\ub85c \uc0f7 CoT(Zero-shot-CoT) \ud504\ub86c\ud504\ud2b8 \uc5f0\uad6c\uc5d0 \ub530\ub974\uba74\n"Let\u2019s solve this problem by splitting it into steps." or "Let\u2019s think about this logically."\ub4f1 \ub2e4\uc591\ud55c \uc5b4\uad6c\ub4e4\uc774 \uc788\uc9c0\ub9cc\n"Let\'s think step by step"\uac00 \uac00\uc7a5 \ud6a8\uacfc\uc801\uc774\uc600\uc2b5\ub2c8\ub2e4.'),(0,r.kt)("h2",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,r.kt)("p",null,"\ucd94\ucd9c \ub2e8\uacc4\ub294 \uc885\uc885 \uc791\uc5c5\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc57c\uc838\uc57c \ud558\ubbc0\ub85c \uc81c\ub85c \uc0f7 CoT(Zero-Shot-CoT)\uc744 \ucc98\uc74c\uc5d0 \ubcf4\uc774\ub294 \uac83\ubcf4\ub2e4 \ub354 \ud2b9\uc218\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc77c\ub840\ub85c \uc800\ub294 \uc0dd\uc131 \uc791\uc5c5\uc5d0\uc11c \ub2f5\ubcc0\uc758 \uae38\uc774\ub97c \ub298\ub9ac\ub294 \ub370\uc5d0\uc11c \uc81c\ub85c \uc0f7 CoT\uac00 \ud6a8\uacfc\uc801\uc774\ub77c\ub294 \uac83\uc744 \ubc1c\uacac\ud588\uc2b5\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4\uc11c, \ub2f5\ubcc0\uc758 \uae38\uc774\ub97c \ub298\ub9ac\uae30 \uc704\ud574\uc11c\n\ub2e8\uc21c\ud788 ",(0,r.kt)("inlineCode",{parentName:"p"},"Write a story about a frog and a mushroom who become friends."),"\ubcf4\ub2e4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Let's think step by step."),"\ub97c \ub9d0\ubbf8\uc5d0 \ucd94\uac00\ud558\ub294 \uac83\uc744 \uace0\ub824\ud574\ubcfc \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0}}]);