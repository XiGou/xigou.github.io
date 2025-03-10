"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["809"],{9150:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>p,contentTitle:()=>a});var i=JSON.parse('{"id":"Linux/Alpine","title":"Alpine Linux Usage","description":"Install","source":"@site/knowledges/Linux/Alpine.md","sourceDirName":"Linux","slug":"/Linux/Alpine","permalink":"/zh-CN/knowledges/Linux/Alpine","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Alpine Linux Usage"},"sidebar":"readings","previous":{"title":"Git","permalink":"/zh-CN/knowledges/Git"},"next":{"title":"Mount iso as yum repo","permalink":"/zh-CN/knowledges/Linux/Mount iso as yum repo"}}'),r=t("85893"),s=t("50065");let l={title:"Alpine Linux Usage"},a=void 0,o={},p=[{value:"Install",id:"install",level:2},{value:"Install Desktop &amp; xrdp",id:"install-desktop--xrdp",level:2}];function d(e){let n={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"setup-alpine\n"})}),"\n",(0,r.jsx)(n.p,{children:"when setting apk mirror, don't use auto select fastest mirror, it takes a long time."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://wiki.alpinelinux.org/wiki/Installation",children:"Installation - Alpine Linux"})}),"\n",(0,r.jsx)(n.h2,{id:"install-desktop--xrdp",children:"Install Desktop & xrdp"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://wiki.alpinelinux.org/wiki/Xfce",children:"Xfce - Alpine Linux"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://wiki.alpinelinux.org/wiki/Remote_Desktop_Server",children:"Remote Desktop Server - Alpine Linux"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"setup-desktop\n\nalpine:~# rc-service lightdm start\nalpine:~# rc-update add lightdm\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apk add xrdp xorgxrdp\nrc-service xrdp start \nrc-service xrdp-sesman start\nrc-update add xrdp\nrc-update add xrdp-sesman\n"})})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var i=t(67294);let r={},s=i.createContext(r);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);