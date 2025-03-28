"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["1465"],{73540:function(n,e,s){s.r(e),s.d(e,{default:()=>g,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"Software-Usage/Git Proxy Configuration","title":"Git Proxy Configuration","description":"Git \u914D\u7F6E\u4EE3\u7406\u7684\u65B9\u6CD5","source":"@site/knowledges/Software-Usage/Git Proxy Configuration.md","sourceDirName":"Software-Usage","slug":"/Software-Usage/Git Proxy Configuration","permalink":"/knowledges/Software-Usage/Git Proxy Configuration","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"readings","previous":{"title":"Git GPG Signature","permalink":"/knowledges/Software-Usage/Git GPG Signature"},"next":{"title":"Git","permalink":"/knowledges/Software-Usage/Git"}}'),t=s("85893"),i=s("50065");let l={},o=void 0,c={},d=[{value:"<strong>Git \u914D\u7F6E\u4EE3\u7406\u7684\u65B9\u6CD5</strong>",id:"git-\u914D\u7F6E\u4EE3\u7406\u7684\u65B9\u6CD5",level:3},{value:"<strong>1. \u914D\u7F6E HTTP(S) \u4EE3\u7406</strong>",id:"1-\u914D\u7F6E-https-\u4EE3\u7406",level:2},{value:"<strong>\u5168\u5C40\u914D\u7F6E\uFF08\u5F71\u54CD\u6240\u6709 Git \u4ED3\u5E93\uFF09</strong>",id:"\u5168\u5C40\u914D\u7F6E\u5F71\u54CD\u6240\u6709-git-\u4ED3\u5E93",level:3},{value:"<strong>\u5355\u4E2A\u4ED3\u5E93\u914D\u7F6E</strong>",id:"\u5355\u4E2A\u4ED3\u5E93\u914D\u7F6E",level:3},{value:"<strong>2. \u914D\u7F6E SOCKS \u4EE3\u7406</strong>",id:"2-\u914D\u7F6E-socks-\u4EE3\u7406",level:2},{value:"<strong>\u5168\u5C40\u914D\u7F6E</strong>",id:"\u5168\u5C40\u914D\u7F6E",level:3},{value:"<strong>\u5355\u4E2A\u4ED3\u5E93\u914D\u7F6E</strong>",id:"\u5355\u4E2A\u4ED3\u5E93\u914D\u7F6E-1",level:3},{value:"<strong>3. SSH \u534F\u8BAE\u4EE3\u7406</strong>",id:"3-ssh-\u534F\u8BAE\u4EE3\u7406",level:2},{value:"<strong>\u65B9\u6CD5 1\uFF1A\u914D\u7F6E <code>~/.ssh/config</code></strong>",id:"\u65B9\u6CD5-1\u914D\u7F6E-sshconfig",level:3},{value:"<strong>\u65B9\u6CD5 2\uFF1A\u4F7F\u7528 <code>ProxyJump</code>\uFF08\u9002\u7528\u4E8E SSH \u8DF3\u677F\u673A\uFF09</strong>",id:"\u65B9\u6CD5-2\u4F7F\u7528-proxyjump\u9002\u7528\u4E8E-ssh-\u8DF3\u677F\u673A",level:3},{value:"<strong>4. \u53D6\u6D88\u4EE3\u7406</strong>",id:"4-\u53D6\u6D88\u4EE3\u7406",level:2},{value:"<strong>\u53D6\u6D88 HTTP \u4EE3\u7406</strong>",id:"\u53D6\u6D88-http-\u4EE3\u7406",level:3},{value:"<strong>\u53D6\u6D88 SOCKS \u4EE3\u7406</strong>",id:"\u53D6\u6D88-socks-\u4EE3\u7406",level:3},{value:"<strong>\u53D6\u6D88 SSH \u4EE3\u7406</strong>",id:"\u53D6\u6D88-ssh-\u4EE3\u7406",level:3},{value:"<strong>5. \u6D4B\u8BD5\u4EE3\u7406\u662F\u5426\u751F\u6548</strong>",id:"5-\u6D4B\u8BD5\u4EE3\u7406\u662F\u5426\u751F\u6548",level:2},{value:"<strong>\u603B\u7ED3</strong>",id:"\u603B\u7ED3",level:2}];function h(n){let e={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"git-\u914D\u7F6E\u4EE3\u7406\u7684\u65B9\u6CD5",children:(0,t.jsx)(e.strong,{children:"Git \u914D\u7F6E\u4EE3\u7406\u7684\u65B9\u6CD5"})}),"\n",(0,t.jsxs)(e.p,{children:["Git \u652F\u6301 ",(0,t.jsx)(e.strong,{children:"HTTP(S) \u4EE3\u7406"})," \u548C ",(0,t.jsx)(e.strong,{children:"SOCKS \u4EE3\u7406"}),"\uFF0C\u53EF\u4EE5\u9488\u5BF9\u5168\u5C40\u6216\u5355\u4E2A\u4ED3\u5E93\u8FDB\u884C\u914D\u7F6E\u3002"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"1-\u914D\u7F6E-https-\u4EE3\u7406",children:(0,t.jsx)(e.strong,{children:"1. \u914D\u7F6E HTTP(S) \u4EE3\u7406"})}),"\n",(0,t.jsxs)(e.p,{children:["\u9002\u7528\u4E8E ",(0,t.jsx)(e.code,{children:"https://"})," \u6216 ",(0,t.jsx)(e.code,{children:"http://"})," \u65B9\u5F0F\u7684 Git \u8FDE\u63A5\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u5168\u5C40\u914D\u7F6E\u5F71\u54CD\u6240\u6709-git-\u4ED3\u5E93",children:(0,t.jsx)(e.strong,{children:"\u5168\u5C40\u914D\u7F6E\uFF08\u5F71\u54CD\u6240\u6709 Git \u4ED3\u5E93\uFF09"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'git config --global http.proxy "http://\u4EE3\u7406IP:\u7AEF\u53E3"\ngit config --global https.proxy "http://\u4EE3\u7406IP:\u7AEF\u53E3"\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u793A\u4F8B\uFF1A"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'git config --global http.proxy "http://127.0.0.1:7890"\ngit config --global https.proxy "http://127.0.0.1:7890"\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u5355\u4E2A\u4ED3\u5E93\u914D\u7F6E",children:(0,t.jsx)(e.strong,{children:"\u5355\u4E2A\u4ED3\u5E93\u914D\u7F6E"})}),"\n",(0,t.jsx)(e.p,{children:"\u8FDB\u5165\u67D0\u4E2A Git \u4ED3\u5E93\u76EE\u5F55\uFF0C\u8FD0\u884C\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'git config --local http.proxy "http://127.0.0.1:7890"\ngit config --local https.proxy "http://127.0.0.1:7890"\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"2-\u914D\u7F6E-socks-\u4EE3\u7406",children:(0,t.jsx)(e.strong,{children:"2. \u914D\u7F6E SOCKS \u4EE3\u7406"})}),"\n",(0,t.jsxs)(e.p,{children:["\u9002\u7528\u4E8E ",(0,t.jsx)(e.strong,{children:"Clash\u3001V2Ray\u3001Shadowsocks"})," \u4EE3\u7406\u5DE5\u5177\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u5168\u5C40\u914D\u7F6E",children:(0,t.jsx)(e.strong,{children:"\u5168\u5C40\u914D\u7F6E"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'git config --global http.proxy "socks5://127.0.0.1:7891"\ngit config --global https.proxy "socks5://127.0.0.1:7891"\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u5355\u4E2A\u4ED3\u5E93\u914D\u7F6E-1",children:(0,t.jsx)(e.strong,{children:"\u5355\u4E2A\u4ED3\u5E93\u914D\u7F6E"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'git config --local http.proxy "socks5://127.0.0.1:7891"\ngit config --local https.proxy "socks5://127.0.0.1:7891"\n'})}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"3-ssh-\u534F\u8BAE\u4EE3\u7406",children:(0,t.jsx)(e.strong,{children:"3. SSH \u534F\u8BAE\u4EE3\u7406"})}),"\n",(0,t.jsxs)(e.p,{children:["Git \u9ED8\u8BA4 ",(0,t.jsx)(e.strong,{children:"\u4E0D\u652F\u6301"})," \u76F4\u63A5\u901A\u8FC7 ",(0,t.jsx)(e.code,{children:"git@github.com:xxx.git"}),"\uFF08SSH \u534F\u8BAE\uFF09\u914D\u7F6E\u4EE3\u7406\uFF0C\u9700\u8981\u501F\u52A9 ",(0,t.jsx)(e.code,{children:"ProxyCommand"})," \u6216 ",(0,t.jsx)(e.code,{children:"ProxyJump"}),"\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u65B9\u6CD5-1\u914D\u7F6E-sshconfig",children:(0,t.jsxs)(e.strong,{children:["\u65B9\u6CD5 1\uFF1A\u914D\u7F6E ",(0,t.jsx)(e.code,{children:"~/.ssh/config"})]})}),"\n",(0,t.jsxs)(e.p,{children:["\u7F16\u8F91 ",(0,t.jsx)(e.code,{children:"~/.ssh/config"}),"\uFF0C\u6DFB\u52A0\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ini",children:"Host github.com\n    ProxyCommand nc -X 5 -x 127.0.0.1:7891 %h %p\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6216\u8005\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ini",children:"Host github.com\n    ProxyCommand connect -S 127.0.0.1:7891 %h %p\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679C\u662F ",(0,t.jsx)(e.code,{children:"SOCKS5"})," \u4EE3\u7406\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ini",children:"Host github.com\n    ProxyCommand nc -X 5 -x 127.0.0.1:7891 %h %p\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u7136\u540E\u4F7F\u7528 ",(0,t.jsx)(e.code,{children:"ssh"})," \u65B9\u5F0F clone\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"git clone git@github.com:xxx.git\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u65B9\u6CD5-2\u4F7F\u7528-proxyjump\u9002\u7528\u4E8E-ssh-\u8DF3\u677F\u673A",children:(0,t.jsxs)(e.strong,{children:["\u65B9\u6CD5 2\uFF1A\u4F7F\u7528 ",(0,t.jsx)(e.code,{children:"ProxyJump"}),"\uFF08\u9002\u7528\u4E8E SSH \u8DF3\u677F\u673A\uFF09"]})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ini",children:"Host github.com\n    ProxyJump user@proxyserver\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u7136\u540E ",(0,t.jsx)(e.code,{children:"git clone"})," \u8D70 SSH \u4EE3\u7406\u3002"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"4-\u53D6\u6D88\u4EE3\u7406",children:(0,t.jsx)(e.strong,{children:"4. \u53D6\u6D88\u4EE3\u7406"})}),"\n",(0,t.jsx)(e.h3,{id:"\u53D6\u6D88-http-\u4EE3\u7406",children:(0,t.jsx)(e.strong,{children:"\u53D6\u6D88 HTTP \u4EE3\u7406"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"git config --global --unset http.proxy\ngit config --global --unset https.proxy\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u53D6\u6D88-socks-\u4EE3\u7406",children:(0,t.jsx)(e.strong,{children:"\u53D6\u6D88 SOCKS \u4EE3\u7406"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"git config --global --unset http.proxy\ngit config --global --unset https.proxy\n"})}),"\n",(0,t.jsx)(e.h3,{id:"\u53D6\u6D88-ssh-\u4EE3\u7406",children:(0,t.jsx)(e.strong,{children:"\u53D6\u6D88 SSH \u4EE3\u7406"})}),"\n",(0,t.jsxs)(e.p,{children:["\u7F16\u8F91 ",(0,t.jsx)(e.code,{children:"~/.ssh/config"}),"\uFF0C\u5220\u9664 ",(0,t.jsx)(e.code,{children:"ProxyCommand"})," \u914D\u7F6E\u3002"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"5-\u6D4B\u8BD5\u4EE3\u7406\u662F\u5426\u751F\u6548",children:(0,t.jsx)(e.strong,{children:"5. \u6D4B\u8BD5\u4EE3\u7406\u662F\u5426\u751F\u6548"})}),"\n",(0,t.jsxs)(e.p,{children:["\u53EF\u4EE5\u7528 ",(0,t.jsx)(e.code,{children:"git config --global --list"})," \u67E5\u770B\u4EE3\u7406\u914D\u7F6E\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"git config --global --list | grep proxy\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6216\u8005\u624B\u52A8\u6D4B\u8BD5\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"curl -x http://127.0.0.1:7890 https://github.com\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679C ",(0,t.jsx)(e.code,{children:"curl"})," \u80FD\u8BBF\u95EE GitHub\uFF0C\u800C ",(0,t.jsx)(e.code,{children:"git clone"})," \u5931\u8D25\uFF0C\u8BF4\u660E\u53EF\u80FD\u662F ",(0,t.jsx)(e.code,{children:"git"})," \u4EE3\u7406\u672A\u6B63\u786E\u914D\u7F6E\u3002"]}),"\n",(0,t.jsx)(e.hr,{}),"\n",(0,t.jsx)(e.h2,{id:"\u603B\u7ED3",children:(0,t.jsx)(e.strong,{children:"\u603B\u7ED3"})}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u4EE3\u7406\u7C7B\u578B"}),(0,t.jsx)(e.th,{children:"\u914D\u7F6E\u65B9\u5F0F"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"HTTP(S) \u4EE3\u7406"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'git config --global http.proxy "http://127.0.0.1:7890"'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"SOCKS \u4EE3\u7406"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:'git config --global http.proxy "socks5://127.0.0.1:7891"'})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"SSH \u4EE3\u7406"})}),(0,t.jsxs)(e.td,{children:["\u914D\u7F6E ",(0,t.jsx)(e.code,{children:"~/.ssh/config"})," ",(0,t.jsx)(e.code,{children:"ProxyCommand"})]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u53D6\u6D88\u4EE3\u7406"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"git config --global --unset http.proxy"})})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u4E3A Git \u914D\u7F6E\u4EE3\u7406\uFF0C\u89E3\u51B3\u514B\u9686\u6162\u3001\u8BBF\u95EE\u5931\u8D25\u7B49\u95EE\u9898 \uD83D\uDE80\u3002"})]})}function g(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return o},a:function(){return l}});var r=s(67294);let t={},i=r.createContext(t);function l(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);