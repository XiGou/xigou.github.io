"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[5059],{92364:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=c(74848),s=c(28453);const o={title:"gcc/g++\u7f16\u8bd1\u53c2\u6570\u987a\u5e8f\u6240\u5f15\u8d77\u7684\u94fe\u63a5\u9519\u8bef"},r=void 0,i={id:"CPP/Repost-gcc_g++_args_should_put_in_order",title:"gcc/g++\u7f16\u8bd1\u53c2\u6570\u987a\u5e8f\u6240\u5f15\u8d77\u7684\u94fe\u63a5\u9519\u8bef",description:"From: gcc/g++\u7f16\u8bd1\u53c2\u6570\u987a\u5e8f\u6240\u5f15\u8d77\u7684\u94fe\u63a5\u9519\u8bef\\_g++\u7684\u53c2\u6570\u662f\u6709\u987a\u5e8f\u8981\u6c42\u7684-CSDN\u535a\u5ba2",source:"@site/knowledges/CPP/Repost-gcc_g++_args_should_put_in_order.md",sourceDirName:"CPP",slug:"/CPP/Repost-gcc_g++_args_should_put_in_order",permalink:"/knowledges/CPP/Repost-gcc_g++_args_should_put_in_order",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"gcc/g++\u7f16\u8bd1\u53c2\u6570\u987a\u5e8f\u6240\u5f15\u8d77\u7684\u94fe\u63a5\u9519\u8bef"},sidebar:"readings",previous:{title:"How_to_check_glibc_version_of_a_binary_in build_time",permalink:"/knowledges/CPP/How_to_check_glibc_version_of_a_binary_in build_time"},next:{title:"RPM",permalink:"/knowledges/CentOS/RPM"}},l={},d=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:4},{value:"\u95ee\u9898\u89e3\u6790\xa0",id:"\u95ee\u9898\u89e3\u6790",level:4},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:4}];function p(e){const n={a:"a",blockquote:"blockquote",br:"br",h4:"h4",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["From: ",(0,t.jsx)(n.a,{href:"https://blog.csdn.net/avideointerfaces/article/details/114156653#:~:text=%E5%9C%A8gcc%2Fg%2B%2B%E5%91%BD%E4%BB%A4%E4%B8%AD,%EF%BC%8C%E5%BB%BA%E8%AE%AE%E6%94%BE%E5%88%B0%E5%89%8D%E9%9D%A2%EF%BC%89%E3%80%82",children:"gcc/g++\u7f16\u8bd1\u53c2\u6570\u987a\u5e8f\u6240\u5f15\u8d77\u7684\u94fe\u63a5\u9519\u8bef_g++\u7684\u53c2\u6570\u662f\u6709\u987a\u5e8f\u8981\u6c42\u7684-CSDN\u535a\u5ba2"}),(0,t.jsx)(n.br,{}),"\n","TLDR: \u6211\u8349\u6ce5\u9a6c\uff0c\u8fd9\u4e5f\u80fd\u51fa\u9519\u200b, \u7b80\u5355\u8bf4\u5c31\u662f -l \u53c2\u6570\u5fc5\u987b\u653e\u5728\u6e90\u4ee3\u7801\u540e\u9762"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"\u95ee\u9898\u63cf\u8ff0",children:"\u95ee\u9898\u63cf\u8ff0"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5e94\u7528\u4ee3\u7801\u91cc\u9762\u8c03\u7528",(0,t.jsx)(n.a,{href:"https://so.csdn.net/so/search?q=opencv&spm=1001.2101.3001.7020",children:"opencv"})," API\uff08\u6bd4\u5982imread imshow\u7b49\uff09\uff0c\u7136\u540e\u7528gcc/g++\u7f16\u8bd1\u5c31\u9047\u5230\u4e86\u4e0b\u9762\u7684\u94fe\u63a5\u9519\u8bef\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img-blog.csdnimg.cn/20210226235233362.png",alt:""})}),"\n",(0,t.jsx)(n.h4,{id:"\u95ee\u9898\u89e3\u6790",children:"\u95ee\u9898\u89e3\u6790\xa0"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u94fe\u63a5\u9519\u8bef\u5f88\u663e\u7136\u662f\u8bf4opencv\u5e93\u6ca1\u627e\u5230\u6216\u7248\u672c\u4e0d\u5bf9\u800c\u5bfc\u81f4\u7684\u3002\u4f46\u662fg++\u7f16\u8bd1\u547d\u4ee4\u662f\u6709\u6b63\u786e\u7684\u628aopencv\u5e93link\u8fdb\u6765\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img-blog.csdnimg.cn/20210226235620841.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u518d\u4e09\u786e\u8ba4\uff0c/usr/local/lib_opencv343/lib\u4e0b\u9762\u662f\u5b58\u5728libopencv_world.so\u7684\u3002\xa0"}),"\n",(0,t.jsx)(n.p,{children:"\u7ecf\u8fc7\u5927\u534a\u5929\u7684\u6298\u817e\uff0c\u540e\u6765\u624d\u53d1\u73b0\u662fgcc\u7f16\u8bd1\u53c2\u6570\u987a\u5e8f\u5f15\u8d77\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728gcc/g++\u547d\u4ee4\u4e2d\uff0c -I\uff08include\u53c2\u6570\uff09\u6bd4\u8f83\u81ea\u7531\uff0c\u53ef\u4ee5\u653e\u5230\u6e90\u7a0b\u5e8f\u6587\u4ef6\uff08*.cpp/c\uff09\u7684\u524d\u9762\u6216\u540e\u9762\uff08\u5f53\u7136\u4e3a\u4e86\u6613\u8bfb\u6027\uff0c\u5efa\u8bae\u653e\u5230\u524d\u9762\uff09\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u662f-lxxx\uff08link\u53c2\u6570\uff09\u5c31\u4e0d\u4e00\u6837\u4e86\u3002 \u5b83\u53ea\u80fd\u653e\u5230\u6e90\u7a0b\u5e8f\u6587\u4ef6\u7684\u540e\u9762\uff0c\u6765\u8868\u793a\u524d\u9762\u7684\u6e90\u7a0b\u5e8f\u4f9d\u8d56\u4e8e\u540e\u9762-l\u6240\u6307\u5b9a\u7684\u5e93\u3002\u6240\u4ee5\u4e0a\u9762\u7684\u4ee3\u7801\u8981\u60f3\u7f16\u8bd1\u94fe\u63a5\u901a\u8fc7\uff0c\u5c31\u53ea\u9700\u8981\u5c06\u4e0a\u9762\u53c2\u6570\u4e2d\u7684-lopencv_world\u79fb\u5230opencv_test.cpp\u7684\u540e\u9762\uff0c \u6765\u8868\u660e\u524d\u9762cpp\u4f1alink libopencv_world.so\u5e93\u3002 \u76f8\u53cd\uff0c\u5982\u679c\u5199\u5728\u524d\u9762\uff08\u867d\u7136\u5199\u7684\u6b63\u786e\uff09\uff0c\u94fe\u63a5\u65f6\u4e0d\u4f1a\u53bb\u627e\u8be5\u5e93\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\xa0gcc/g++\u7f16\u8bd1\u547d\u4ee4\u53c2\u6570\u5bf9\u4e8e-l\u6307\u5b9a\u52a8\u6001\u5e93\u662f\u6709\u4f4d\u7f6e\u987a\u5e8f\u8981\u6c42\u7684\u3002 \u5f53\u4f4d\u7f6e\u4e0d\u5bf9\uff08\u5728\u6e90\u4ee3\u7801\u6587\u4ef6\u7684\u540e\u9762\uff09\u5c31\u4f1a\u5f15\u8d77\u94fe\u63a5\u9519\u8bef\u3002 \u800c\u8fd9\u5f88\u5bb9\u6613\u5bfc\u81f4\u5f00\u53d1\u8005\u82b1\u5927\u91cf\u7cbe\u529b\u5728\u8c03\u67e5\u662f\u5426-L\u6240\u6307\u5b9a\u7684\u5e93\u8def\u5f84\u6709\u95ee\u9898\uff0c\u8fd8\u53ef\u80fd\u89c9\u5f97\u5e93\u7248\u672c\u6216c++\u7f16\u8bd1\u5668\u6709\u95ee\u9898\u7b49\u7b49\u3002"})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>i});var t=c(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);