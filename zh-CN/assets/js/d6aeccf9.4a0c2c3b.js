"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[637],{1777:(s,e,d)=>{d.r(e),d.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>r,toc:()=>h});var i=d(5893),n=d(1151);const t={"dg-publish":!0},c=void 0,r={id:"UsefulSnipets/iscsiadm common commands",title:"iscsiadm common commands",description:"\u4ee5\u4e0b\u662f\u4e00\u4efd\u5e38\u7528\u7684 iscsiadm \u547d\u4ee4\u8868\uff1a",source:"@site/knowledges/UsefulSnipets/iscsiadm common commands.md",sourceDirName:"UsefulSnipets",slug:"/UsefulSnipets/iscsiadm common commands",permalink:"/zh-CN/knowledges/UsefulSnipets/iscsiadm common commands",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{"dg-publish":!0},sidebar:"readings",previous:{title:"Gen Random data",permalink:"/zh-CN/knowledges/UsefulSnipets/Linux Common Operations"}},l={},h=[];function x(s){const e={code:"code",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["\u4ee5\u4e0b\u662f\u4e00\u4efd\u5e38\u7528\u7684 ",(0,i.jsx)(e.code,{children:"iscsiadm"})," \u547d\u4ee4\u8868\uff1a"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u53d1\u73b0\u76ee\u6807\uff08Discovery\uff09"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u547d\u4ee4"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m discovery -t st -p <IP>"})}),(0,i.jsx)(e.td,{children:"\u53d1\u73b0\u6307\u5b9a IP \u5730\u5740\u7684 iSCSI \u76ee\u6807"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m discovery -t sendtargets"})}),(0,i.jsx)(e.td,{children:"\u53d1\u73b0\u6240\u6709\u53ef\u7528\u7684 iSCSI \u76ee\u6807"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m discovery -t sendtargets -p <IP>"})}),(0,i.jsx)(e.td,{children:"\u53d1\u73b0\u6307\u5b9a IP \u5730\u5740\u7684\u6240\u6709 iSCSI \u76ee\u6807"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u767b\u5f55\u548c\u767b\u51fa\uff08Login/Logout\uff09"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u547d\u4ee4"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m node -T <target_name> -p <IP>"})}),(0,i.jsx)(e.td,{children:"\u767b\u5f55\u6307\u5b9a IP \u5730\u5740\u7684 iSCSI \u76ee\u6807"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m node -T <target_name> -p <IP> -u"})}),(0,i.jsx)(e.td,{children:"\u767b\u51fa\u6307\u5b9a IP \u5730\u5740\u7684 iSCSI \u76ee\u6807"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m node --logoutall=all"})}),(0,i.jsx)(e.td,{children:"\u767b\u51fa\u6240\u6709\u5df2\u767b\u5f55\u7684 iSCSI \u76ee\u6807"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u4f1a\u8bdd\u7ba1\u7406\uff08Session Management\uff09"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u547d\u4ee4"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m session"})}),(0,i.jsx)(e.td,{children:"\u663e\u793a\u5f53\u524d\u6d3b\u52a8\u7684 iSCSI \u4f1a\u8bdd\u4fe1\u606f"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m session -r <session_id>"})}),(0,i.jsx)(e.td,{children:"\u79fb\u9664\u6307\u5b9a\u4f1a\u8bdd ID \u7684 iSCSI \u4f1a\u8bdd"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m session --rescan"})}),(0,i.jsx)(e.td,{children:"\u91cd\u65b0\u626b\u63cf\u6240\u6709 iSCSI \u4f1a\u8bdd"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m session --rescan-target=<IQN>"})}),(0,i.jsx)(e.td,{children:"\u91cd\u65b0\u626b\u63cf\u6307\u5b9a IQN \u7684 iSCSI \u4f1a\u8bdd"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u76ee\u6807\u7ba1\u7406\uff08Target Management\uff09"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u547d\u4ee4"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m node"})}),(0,i.jsx)(e.td,{children:"\u663e\u793a\u5f53\u524d\u5df2\u914d\u7f6e\u7684 iSCSI \u76ee\u6807\u4fe1\u606f"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m node -T <target_name> -p <IP> --op=new"})}),(0,i.jsx)(e.td,{children:"\u6dfb\u52a0\u65b0\u7684 iSCSI \u76ee\u6807"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m node -T <target_name> -p <IP> --op=delete"})}),(0,i.jsx)(e.td,{children:"\u5220\u9664\u6307\u5b9a iSCSI \u76ee\u6807"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m node -T <target_name> -p <IP> --op=update"})}),(0,i.jsx)(e.td,{children:"\u66f4\u65b0\u6307\u5b9a iSCSI \u76ee\u6807\u7684\u5c5e\u6027"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u547d\u4ee4"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m iface"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u663e\u793a\u5f53\u524d\u7684\u7f51\u7edc\u63a5\u53e3\u4fe1\u606f"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m fw"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u663e\u793a iSCSI \u9002\u914d\u5668\u56fa\u4ef6\u4fe1\u606f"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m fw --op=update"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u66f4\u65b0 iSCSI \u9002\u914d\u5668\u56fa\u4ef6"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m sessionstats"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u663e\u793a iSCSI \u4f1a\u8bdd\u7edf\u8ba1\u4fe1\u606f"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m statistics"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u663e\u793a iSCSI \u7edf\u8ba1\u4fe1\u606f"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m node -p <IP> -l"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u4f7f\u7528 CHAP \u8ba4\u8bc1\u767b\u5f55 iSCSI \u76ee\u6807"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m node -p <IP> -I <iface>"})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u6307\u5b9a\u7f51\u7edc\u63a5\u53e3\u767b\u5f55 iSCSI \u76ee\u6807"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"iscsiadm -m session -P 3  "})}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"\u6bcf\u4e2alun\u7684\u672c\u5730\u8def\u5f84"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["\u4ee5\u4e0a\u662f\u4e00\u4e9b\u5e38\u7528\u7684 ",(0,i.jsx)(e.code,{children:"iscsiadm"})," \u547d\u4ee4\uff0c\u4f9b\u4f60\u53c2\u8003\u548c\u67e5\u8be2\u3002\u8bf7\u6ce8\u610f\uff0c\u5177\u4f53\u547d\u4ee4\u7684\u9009\u9879\u548c\u53c2\u6570\u53ef\u80fd\u56e0\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\u548c iSCSI \u5b9e\u73b0\u800c\u6709\u6240\u4e0d\u540c\u3002\u5efa\u8bae\u5728\u4f7f\u7528\u547d\u4ee4\u65f6\u53c2\u8003\u76f8\u5173\u6587\u6863\u6216\u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u4ee5\u83b7\u53d6\u51c6\u786e\u7684\u7528\u6cd5\u548c\u9009\u9879\u8bf4\u660e\u3002"]})]})}function o(s={}){const{wrapper:e}={...(0,n.a)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(x,{...s})}):x(s)}},1151:(s,e,d)=>{d.d(e,{Z:()=>r,a:()=>c});var i=d(7294);const n={},t=i.createContext(n);function c(s){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:c(s.components),i.createElement(t.Provider,{value:e},s.children)}}}]);