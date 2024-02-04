"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[4776],{57884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(17624),i=t(4552);const o={"dg-publish":!0,"Last Edited":"2023-11-17T23:58",date:new Date("2022-11-05T00:22:33.000Z")},a=void 0,r={id:"UsefulSnipets/Linux Common Operations",title:"Linux Common Operations",description:"Gen Random data",source:"@site/knowledges/UsefulSnipets/Linux Common Operations.md",sourceDirName:"UsefulSnipets",slug:"/UsefulSnipets/Linux Common Operations",permalink:"/zh-CN/knowledges/UsefulSnipets/Linux Common Operations",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{"dg-publish":!0,"Last Edited":"2023-11-17T23:58",date:"2022-11-05T00:22:33.000Z"},sidebar:"readings",previous:{title:"FIO common tests",permalink:"/zh-CN/knowledges/UsefulSnipets/FIO common tests"},next:{title:"iscsiadm common commands",permalink:"/zh-CN/knowledges/UsefulSnipets/iscsiadm common commands"}},c={},d=[{value:"Gen Random data",id:"gen-random-data",level:2},{value:"Enable Coredump",id:"enable-coredump",level:2},{value:"Check Disk Space Usage",id:"check-disk-space-usage",level:2},{value:"Watch the specified file and sync it to test enviroment when changed.",id:"watch-the-specified-file-and-sync-it-to-test-enviroment-when-changed",level:2},{value:"Network",id:"network",level:2},{value:"rsync",id:"rsync",level:2}];function l(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"gen-random-data",children:"Gen Random data"}),"\n",(0,s.jsx)(n.p,{children:"Also used to test IO performance."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dd if=/dev/urandom of=random_data.bin bs=1M count=1024\n"})}),"\n",(0,s.jsx)(n.h2,{id:"enable-coredump",children:"Enable Coredump"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'ulimit -c unlimited\necho "core.%e.%p" > /proc/sys/kernel/core_pattern\n'})}),"\n",(0,s.jsx)(n.h2,{id:"check-disk-space-usage",children:"Check Disk Space Usage"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ncdu"}),"\n",(0,s.jsx)(n.li,{children:"du"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"watch-the-specified-file-and-sync-it-to-test-enviroment-when-changed",children:"Watch the specified file and sync it to test enviroment when changed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Shell",children:"while true; do inotifywait file.py; scp file.py root@x.x.x.x:/root; done;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"network",children:"Network"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ip"}),"\n",(0,s.jsx)(n.li,{children:"netstat"}),"\n",(0,s.jsx)(n.li,{children:"nload: show realtime network load graph in terminal"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"rsync",children:"rsync"}),"\n",(0,s.jsx)(n.p,{children:"Sync Source Directory to Destination Directory"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rsync -av --delete ./src_path root@x.x.x.x:/dst_path\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>a});var s=t(11504);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);