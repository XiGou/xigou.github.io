"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[9296],{64125:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=s(74848),o=s(28453);const r={"dg-publish":!0,title:"ffmpeg",date:"2024-01-06 01:14:31 +0800"},a=void 0,i={id:"Software-Usage/ffmpeg",title:"ffmpeg",description:"Common Use Case",source:"@site/knowledges/Software-Usage/ffmpeg.md",sourceDirName:"Software-Usage",slug:"/Software-Usage/ffmpeg",permalink:"/zh-CN/knowledges/Software-Usage/ffmpeg",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{"dg-publish":!0,title:"ffmpeg",date:"2024-01-06 01:14:31 +0800"},sidebar:"readings",previous:{title:"blktrace",permalink:"/zh-CN/knowledges/Software-Usage/blktrace"},next:{title:"FIO common tests",permalink:"/zh-CN/knowledges/UsefulSnipets/FIO common tests"}},l={},c=[{value:"Common Use Case",id:"common-use-case",level:2},{value:"Compress all images under a directory",id:"compress-all-images-under-a-directory",level:3}];function m(e){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"common-use-case",children:"Common Use Case"}),"\n",(0,t.jsx)(n.h3,{id:"compress-all-images-under-a-directory",children:"Compress all images under a directory"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'mkdir backup\nfor file in *.png; do ffmpeg -i "$file" -compression_level 100 -y "backup/${file}_compressed.png"; done\n\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(96540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);