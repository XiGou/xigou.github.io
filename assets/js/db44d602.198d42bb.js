"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[7912],{50928:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=s(17624),t=s(4552);const c={"dg-publish":!0,"Last Edited":"2023-11-17T23:58",date:new Date("2022-11-05T00:22:33.000Z")},i=void 0,l={id:"CentOS/How to check RPM Dependencies",title:"How to check RPM Dependencies",description:"\u6709\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5\u53ef\u4ee5\u67e5\u770b\u4e00\u4e2aRPM\u8f6f\u4ef6\u5305\u7684\u4f9d\u8d56\u5173\u7cfb:",source:"@site/knowledges/CentOS/How to check RPM Dependencies.md",sourceDirName:"CentOS",slug:"/CentOS/How to check RPM Dependencies",permalink:"/knowledges/CentOS/How to check RPM Dependencies",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{"dg-publish":!0,"Last Edited":"2023-11-17T23:58",date:"2022-11-05T00:22:33.000Z"},sidebar:"readings",previous:{title:"gcc/g++\u7f16\u8bd1\u53c2\u6570\u987a\u5e8f\u6240\u5f15\u8d77\u7684\u94fe\u63a5\u9519\u8bef",permalink:"/knowledges/CPP/Repost-gcc_g++_args_should_put_in_order"},next:{title:"Git",permalink:"/knowledges/Git"}},o={},d=[];function p(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u6709\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5\u53ef\u4ee5\u67e5\u770b\u4e00\u4e2aRPM\u8f6f\u4ef6\u5305\u7684\u4f9d\u8d56\u5173\u7cfb:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528rpm\u547d\u4ee4\u7684-qR\u53c2\u6570"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rpm -qR package.rpm\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u67e5\u770b\u76f4\u63a5\u4f9d\u8d56\u7684\u8f6f\u4ef6\u5305\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528yum\u672c\u5730\u4ed3\u5e93"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"yum deplist package.rpm\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u67e5\u770b\u8be6\u7ec6\u7684\u4f9d\u8d56\u6811\u4fe1\u606f\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u89e3\u5f00RPM\u5305\u67e5\u770bspec\u6587\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6bcf\u4e00\u4e2aRPM\u8f6f\u4ef6\u5305\u91cc\u90fd\u5305\u542b\u4e00\u4e2aspec\u6587\u4ef6,\u53ef\u4ee5\u76f4\u63a5\u67e5\u770b\u5176\u4e2d\u7684\u4f9d\u8d56\u58f0\u660e\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"\u67e5\u770bRPM\u6570\u636e\u5e93"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"yumdownloader --resolve package.rpm\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u5728\u672c\u5730yum\u6570\u636e\u5e93\u4e2d\u89e3\u6790\u6240\u6709\u4f9d\u8d56\u5173\u7cfb\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528rpmlint\u68c0\u67e5\u5305"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rpmlint package.rpm\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u83b7\u5f97\u8be6\u7ec6\u5305\u5185\u5206\u6790\u62a5\u544a,\u5305\u62ec\u4f9d\u8d56\u58f0\u660e\u68c0\u67e5\u7b49\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"\u624b\u52a8\u5b89\u88c5\u6d4b\u8bd5\u4f9d\u8d56\u60c5\u51b5"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u76f4\u63a5\u5b89\u88c5RPM,\u901a\u8fc7\u6587\u4ef6\u7cfb\u7edf\u548c\u547d\u4ee4\u8fdb\u884c\u4f9d\u8d56\u6027\u68c0\u6d4b\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"\u5728\u7ebfRPM\u6570\u636e\u5e93\u67e5\u8be2"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6bd4\u5982\u5728koji\u6216repo\u67e5\u8be2\u5177\u4f53\u8f6f\u4ef6\u5305\u7684\u4e8b\u5148\u58f0\u660e\u548c\u89e3\u6790\u540e\u7684\u4f9d\u8d56\u60c5\u51b5\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"8",children:["\n",(0,r.jsx)(n.li,{children:"\u5206\u6790\u6e90\u4ee3\u7801\u548c\u7f16\u8bd1logs"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u6709\u6e90\u4ee3\u7801,\u53ef\u4ee5\u5206\u6790\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u751f\u6210\u7684\u4f9d\u8d56\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u65b9\u6cd5\u7ed3\u5408\u4f7f\u7528\u53ef\u4ee5\u5168\u9762\u4e86\u89e3\u4e00\u4e2aRPM\u5305\u7684\u76f4\u63a5\u548c\u95f4\u63a5\u6240\u6709\u4f9d\u8d56\u5173\u7cfb\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>i});var r=s(11504);const t={},c=r.createContext(t);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);