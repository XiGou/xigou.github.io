"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[3684],{51197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=t(85893),i=t(11151);const o={"dg-publish":!0},a=void 0,l={id:"UsefulSnipets/Linux Common Operations",title:"Linux Common Operations",description:"Gen Random data",source:"@site/knowledges/UsefulSnipets/Linux Common Operations.md",sourceDirName:"UsefulSnipets",slug:"/UsefulSnipets/Linux Common Operations",permalink:"/knowledges/UsefulSnipets/Linux Common Operations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{"dg-publish":!0},sidebar:"readings",previous:{title:"FIO common tests",permalink:"/knowledges/UsefulSnipets/FIO common tests"},next:{title:"iscsiadm common commands",permalink:"/knowledges/UsefulSnipets/iscsiadm common commands"}},c={},d=[{value:"Gen Random data",id:"gen-random-data",level:2},{value:"Enable Coredump",id:"enable-coredump",level:2},{value:"Check Disk Space Usage",id:"check-disk-space-usage",level:2},{value:"Watch the specified file and sync it to test enviroment when changed.",id:"watch-the-specified-file-and-sync-it-to-test-enviroment-when-changed",level:2},{value:"Network",id:"network",level:2}];function r(e){const n={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"gen-random-data",children:"Gen Random data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dd if=/dev/urandom of=random_data.bin bs=1M count=1024\n"})}),"\n",(0,s.jsx)(n.h2,{id:"enable-coredump",children:"Enable Coredump"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'ulimit -c unlimited\necho "core.%e.%p" > /proc/sys/kernel/core_pattern\n'})}),"\n",(0,s.jsx)(n.h2,{id:"check-disk-space-usage",children:"Check Disk Space Usage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ncdu"}),"\n",(0,s.jsx)(n.li,{children:"du"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"watch-the-specified-file-and-sync-it-to-test-enviroment-when-changed",children:"Watch the specified file and sync it to test enviroment when changed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Shell",children:"while true; do inotifywait file.py; scp file.py root@x.x.x.x:/root; done;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"network",children:"Network"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ip"}),"\n",(0,s.jsx)(n.li,{children:"netstat"}),"\n",(0,s.jsx)(n.li,{children:"nload: show realtime network load graph in terminal"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(67294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);