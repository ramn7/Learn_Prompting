"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3545],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=n,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},96018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o=r.p+"assets/images/chain_of_thought_example-37c925a2720c9c4bb4c823d237bc72c8.png",i=r.p+"assets/images/prompted_palm-20fba06418ed8569b51f0dd376c03b41.png",l={sidebar_position:3,locale:"en-us",style:"chicago"},c="\ud83d\udfe2 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",s={unversionedId:"intermediate/chain_of_thought",id:"intermediate/chain_of_thought",title:"\ud83d\udfe2 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",description:"\uc0ac\uace0 \uc0ac\uc2ac (CoT) \ud504\ub86c\ud504\ud305 (@wei2022chain)\uc740 \ucd5c\uadfc\uc5d0 \uac1c\ubc1c\ub41c \ubc29\ubc95\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/intermediate/chain_of_thought.md",sourceDirName:"intermediate",slug:"/intermediate/chain_of_thought",permalink:"/ko/docs/intermediate/chain_of_thought",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/chain_of_thought.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,locale:"en-us",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/ko/docs/category/\ufe0f-intermediate"},next:{title:"\ud83d\udfe2 \uc81c\ub85c \uc0f7(Zero Shot) \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305",permalink:"/ko/docs/intermediate/zero_shot_cot"}},d={},p=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2},{value:"Incorrect",id:"incorrect",level:4},{value:"Correct",id:"correct",level:4},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:2},{value:"\uc81c\ud55c",id:"\uc81c\ud55c",level:2},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:2}],u={toc:p},g="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(g,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-\uc0ac\uace0-\uc0ac\uc2ac-\ud504\ub86c\ud504\ud305"},"\ud83d\udfe2 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305"),(0,n.kt)("p",null,"\uc0ac\uace0 \uc0ac\uc2ac (CoT) \ud504\ub86c\ud504\ud305",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\uc740 \ucd5c\uadfc\uc5d0 \uac1c\ubc1c\ub41c \ubc29\ubc95\uc785\ub2c8\ub2e4.\nLLM\uc5d0\uac8c \uc774\uc720\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud558\ub3c4\ub85d \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.\n\uc544\ub798\uc758 \uc0ac\uc9c4\uc5d0\uc11c",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \ud4e8\uc0f7 \ud45c\uc900 \ud504\ub86c\ud504\ud2b8(\uc67c\ucabd)\uc640 \uc0ac\uace0 \uc0ac\uc2ac \ud504\ub86c\ud504\ud305(\uc624\ub978\ucabd)\uc744 \ube44\uad50\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:o,style:{width:"750px"}})),(0,n.kt)("div",{style:{textAlign:"center"}},"\ud45c\uc900 \ud504\ub86c\ud504\ud305 vs CoT (Wei et al.)"),(0,n.kt)("p",null,"CoT\uc758 \uba54\uc778 \uc544\uc774\ub514\uc5b4\ub294 LLM\uc5d0\uac8c \ub2f5\uc774 \ub098\uc624\ub294 \uacfc\uc815\uc5d0 \ub300\ud574\uc11c \uc124\uba85\ud55c %%\ud45c\ubcf8|\ud45c\ubcf8%%\uc744 \ubcf4\uc5ec\uc90c\uc73c\ub85c\uc368 LLM\uc774 \ud504\ub86c\ud504\ud2b8\uc5d0 \ub2f5\ud560 \ub54c \ub611\uac19\uc774 \uadf8\uc5d0 \ub300\ud55c \uacfc\uc815\uc744 \uc124\uba85\ud558\ub3c4\ub85d \ub9cc\ub4dc\ub294 \uac83\uc785\ub2c8\ub2e4.\n\uc774\uc720\uc5d0 \ub300\ud55c \uc124\uba85\uc740 \uc885\uc885 \ub2f5\uc744 \ub354 \uc815\ud655\ud558\uac8c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,n.kt)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,n.kt)("p",null,"\uba87\uac00\uc9c0 \uc608\uc2dc\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uba3c\uc800 GPT-3 (davinci-003)\uac00 \uba87\uac00\uc9c0 \uac04\ub2e8\ud55c \ub2e8\uc5b4 \ubb38\uc81c\ub97c \ud2c0\ub9b0 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub450 \ubc88\uc9f8\uc5d0\uc11c\ub294 GPT-3(davinci-003)\uc774 CoT\ub97c \ud1b5\ud574\uc11c \uac19\uc740 \ubb38\uc81c\ub97c \ub9de\uc740 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h4",{id:"incorrect"},"Incorrect"),(0,n.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yay4iLCJwcm9tcHQiOiJXaGljaCBpcyBhIGZhc3RlciB3YXkgdG8gZ2V0IHRvIHdvcms%2FXG5PcHRpb24gMTogVGFrZSBhIDEwMDAgbWludXRlIGJ1cywgdGhlbiBhIGhhbGYgaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYmlrZSByaWRlLlxuT3B0aW9uIDI6IFRha2UgYW4gODAwIG1pbnV0ZSBidXMsIHRoZW4gYW4gaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAzMCBtaW51dGUgYmlrZSByaWRlLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("h4",{id:"correct"},"Correct"),(0,n.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIHdpbGwgdGFrZSAxMDAwKzMwKzEwID0gMTA0MCBtaW51dGVzLlxuT3B0aW9uIDIgd2lsbCB0YWtlIDgwMCs2MCszMCA9IDg5MCBtaW51dGVzLlxuU2luY2UgT3B0aW9uIDIgdGFrZXMgODkwIG1pbnV0ZXMgYW5kIE9wdGlvbiAxIHRha2VzIDEwNDAgbWludXRlcywgT3B0aW9uIDIgaXMgZmFzdGVyLiIsInByb21wdCI6IldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgaG9tZT9cbk9wdGlvbiAxOiBUYWtlIGFuIDEwIG1pbnV0ZXMgYnVzLCB0aGVuIGFuIDQwIG1pbnV0ZSBidXMsIGFuZCBmaW5hbGx5IGEgMTAgbWludXRlIHRyYWluLlxuT3B0aW9uIDI6IFRha2UgYSA5MCBtaW51dGVzIHRyYWluLCB0aGVuIGEgNDUgbWludXRlIGJpa2UgcmlkZSwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYnVzLlxuT3B0aW9uIDEgd2lsbCB0YWtlIDEwKzQwKzEwID0gNjAgbWludXRlcy5cbk9wdGlvbiAyIHdpbGwgdGFrZSA5MCs0NSsxMD0xNDUgbWludXRlcy5cblNpbmNlIE9wdGlvbiAxIHRha2VzIDYwIG1pbnV0ZXMgYW5kIE9wdGlvbiAyIHRha2VzIDE0NSBtaW51dGVzLCBPcHRpb24gMSBpcyBmYXN0ZXIuXG5cbldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yaz9cbk9wdGlvbiAxOiBUYWtlIGEgMTAwMCBtaW51dGUgYnVzLCB0aGVuIGEgaGFsZiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDEwIG1pbnV0ZSBiaWtlIHJpZGUuXG5PcHRpb24gMjogVGFrZSBhbiA4MDAgbWludXRlIGJ1cywgdGhlbiBhbiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDMwIG1pbnV0ZSBiaWtlIHJpZGUuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("h2",{id:"\uacb0\uacfc"},"\uacb0\uacfc"),(0,n.kt)("p",null,"CoT\ub294 \uc0b0\uc220\uc801, \uc0c1\uc2dd\uc801, \uc0c1\uc9d5\uc801 \ucd94\ub860 \uacfc\uc81c",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\uc640 \uac19\uc740 \uc77c\ub4e4\uc5d0 \ub354 \ud6a8\uc728\uc801\uc73c\ub85c \ub098\uc740 \uacb0\uacfc\ub97c \ub9cc\ub4e4\uc5b4 \ub0c8\ub2e4.\n\ud2b9\ud788 PaLM 540B",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\ub294 GSM8K",(0,n.kt)("sup",{parentName:"p",id:"fnref-3"},(0,n.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"\uc5d0\uc11c 57%\uc758 \uc815\ud655\ub3c4 \ud5a5\uc0c1\uc744 \ubcf4\uc600\ub2e4."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:i,style:{width:"300px"}})),(0,n.kt)("div",{style:{textAlign:"center"}},"Comparison of models on the GSM8K benchmark (Wei et al.)"),(0,n.kt)("h2",{id:"\uc81c\ud55c"},"\uc81c\ud55c"),(0,n.kt)("p",null,'\uc911\uc694\ud55c \uc810\uc740, Wei \ub4f1\uc5d0 \ub530\ub974\uba74, "CoT\ub294 \u223c100\uc5b5 \uac1c\uc758 \ud30c\ub77c\ubbf8\ud130\ub97c \uac00\uc9c4 \ubaa8\ub378\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud560 \ub54c\ub9cc \uc131\ub2a5 \ud5a5\uc0c1\uc744 \uac00\uc838\uc635\ub2c8\ub2e4". \ub354 \uc791\uc740 \ubaa8\ub378\uc740 \ube44\ub17c\ub9ac\uc801\uc778 \uc0ac\uace0 \uc0ac\uc2ac\uc744 \uc791\uc131\ud588\uace0 \uc774\ub294 \ud45c\uc900 \ud504\ub86c\ud504\ud2b8\ub85c \uc791\uc131\ud560 \ub54c \ubcf4\ub2e4 \ub354 \ubd80\uc815\ud655\ud588\uc2b5\ub2c8\ub2e4.\n\ubaa8\ub378\ub4e4\uc740 \ubcf4\ud1b5 \ubaa8\ub378\uc758 \ud06c\uae30\uc5d0 \ube44\ub840\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c CoT\ud504\ub86c\ud504\ud2b8\uc5d0 \ub530\ub978 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \ubcf4\uc600\uc2b5\ub2c8\ub2e4.'),(0,n.kt)("h2",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,n.kt)("p",null,"\uc774 \ucc55\ud130\ub97c \uc791\uc131\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \uc5b4\ub5a4 \uc5b8\uc5b4 \ubaa8\ub378\ub3c4 \ub2e4\uce58\uc9c0 \uc54a\uc558\ub2f5\ub2c8\ub2e4\ud83d\ude0a."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., \u2026 Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-3"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);