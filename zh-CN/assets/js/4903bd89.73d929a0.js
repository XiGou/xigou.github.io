"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[3684],{51197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(85893),o=t(11151);const i={"dg-publish":!0},r="Gen Random data",a={id:"UsefulSnipets/Linux Common Operations",title:"Gen Random data",description:"- ncdu",source:"@site/knowledges/UsefulSnipets/Linux Common Operations.md",sourceDirName:"UsefulSnipets",slug:"/UsefulSnipets/Linux Common Operations",permalink:"/zh-CN/knowledges/UsefulSnipets/Linux Common Operations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{"dg-publish":!0},sidebar:"readings",previous:{title:"FIO common tests",permalink:"/zh-CN/knowledges/UsefulSnipets/FIO common tests"},next:{title:"iscsiadm common commands",permalink:"/zh-CN/knowledges/UsefulSnipets/iscsiadm common commands"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"gen-random-data",children:"Gen Random data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dd if=/dev/urandom of=random_data.bin bs=1M count=1024\n"})}),"\n",(0,s.jsx)(n.h1,{id:"enable-coredump",children:"Enable Coredump"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'ulimit -c unlimited\necho "core.%e.%p" > /proc/sys/kernel/core_pattern\n'})}),"\n",(0,s.jsx)(n.h1,{id:"\u67e5\u770b\u7a7a\u95f4\u5360\u7528",children:"\u67e5\u770b\u7a7a\u95f4\u5360\u7528"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ncdu"}),"\n",(0,s.jsx)(n.li,{children:"du"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"watch-the-specified-file-and-sync-it-to-test-enviroment-when-changed",children:"Watch the specified file and sync it to test enviroment when changed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Shell",children:"while true; do inotifywait file.py; scp file.py root@x.x.x.x:/root; done;\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(67294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);