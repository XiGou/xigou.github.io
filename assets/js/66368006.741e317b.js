"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[678],{1688:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=i(17624),s=i(4552);const c={"dg-publish":!0},t=void 0,o={id:"CPP/How_to_check_glibc_version_of_a_binary_in build_time",title:"How_to_check_glibc_version_of_a_binary_in build_time",description:"There are several ways to check the glibc version that a binary file depends on::",source:"@site/knowledges/CPP/How_to_check_glibc_version_of_a_binary_in build_time.md",sourceDirName:"CPP",slug:"/CPP/How_to_check_glibc_version_of_a_binary_in build_time",permalink:"/knowledges/CPP/How_to_check_glibc_version_of_a_binary_in build_time",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{"dg-publish":!0},sidebar:"readings",previous:{title:"Dev Env Setup",permalink:"/knowledges/CPP/Dev Env Setup"},next:{title:"gcc/g++\u7f16\u8bd1\u53c2\u6570\u987a\u5e8f\u6240\u5f15\u8d77\u7684\u94fe\u63a5\u9519\u8bef",permalink:"/knowledges/CPP/Repost-gcc_g++_args_should_put_in_order"}},l={},d=[];function a(e){const n={br:"br",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["There are several ways to check the ",(0,r.jsx)(n.code,{children:"glibc"})," version that a binary file depends on::"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"ldd command"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ldd binary_file\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"objdump, disassembly"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"objdump -T binary_file | grep -i glibc\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"readelf"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"readelf -d binary_file | grep libc\n"})}),"\n",(0,r.jsx)(n.p,{children:"check dynamic section to get libc version\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"check the source code repo"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you can access the source code, check the building scripts for the glibc version\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["rpm/deb package manage tools",(0,r.jsx)(n.br,{}),"\n","[[RPM]]"]}),"\n",(0,r.jsx)(n.li,{children:"gdb debugging"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"gdb binary_file\nprint (const char*) ELF->gnu_required->name \n"})}),"\n",(0,r.jsx)(n.p,{children:"show the glibc SONAME version when linking\u3002"}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"strings extracting"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"strings binary_file | grep GLIBC\n"})}),"\n",(0,r.jsx)(n.p,{children:"extracting glibc symbols version prefixes\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>t});var r=i(11504);const s={},c=r.createContext(s);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);