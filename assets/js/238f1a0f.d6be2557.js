"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[7296],{29708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(17624),s=t(4552);const a={date:"2024-01-06 01:14:31 +0800",title:"File Transfering"},o=void 0,i={id:"Software-Usage/File Transfering",title:"File Transfering",description:"rsync",source:"@site/knowledges/Software-Usage/File Transfering.md",sourceDirName:"Software-Usage",slug:"/Software-Usage/File Transfering",permalink:"/knowledges/Software-Usage/File Transfering",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{date:"2024-01-06 01:14:31 +0800",title:"File Transfering"},sidebar:"readings",previous:{title:"CasaOS",permalink:"/knowledges/Software-Usage/CasaOS"},next:{title:"Knowledge Management Software",permalink:"/knowledges/Software-Usage/Knowledge Management Software"}},c={},l=[{value:"rsync",id:"rsync",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"rsync",children:"rsync"}),"\n",(0,r.jsx)(n.p,{children:"^83e05d"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.ruanyifeng.com/blog/2020/08/rsync.html",children:"rsync \u7528\u6cd5\u6559\u7a0b - \u962e\u4e00\u5cf0\u7684\u7f51\u7edc\u65e5\u5fd7"})}),"\n",(0,r.jsx)(n.p,{children:"sync source to destination"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# result to: destination/source\nrsync -r source destination\n# result to: destination/file_in_source\nrsync -r source/ destination  \n# result: with metadata\nrsync -a source destination\n# -n dry run, -v verbose\nrsync -anv source/ destination\n# make src and dst totally same, --delete will delete file in dst but not in src.\nrsync -av --delete source/ destination\n# ssh protocal\nrsync -av --delete source/ username@remote_host:destination\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>o});var r=t(11504);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);