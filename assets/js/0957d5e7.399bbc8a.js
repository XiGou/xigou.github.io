"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["9557"],{98456:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>a,assets:()=>o,toc:()=>d,frontMatter:()=>t});var i=JSON.parse('{"id":"Software-Usage/Syncthing","title":"Syncthing","description":"\u5F00\u6E90\u7684\u5168\u5E73\u53F0\u652F\u6301\u7684 P2P \u540C\u6B65\u5DE5\u5177","source":"@site/knowledges/Software-Usage/Syncthing.md","sourceDirName":"Software-Usage","slug":"/Software-Usage/Syncthing","permalink":"/knowledges/Software-Usage/Syncthing","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"date":"2024-01-06 01:14:31 +0800","dg-publish":true,"title":"Syncthing"},"sidebar":"readings","previous":{"title":"Observability","permalink":"/knowledges/Software-Usage/Observability"},"next":{"title":"Terminal","permalink":"/knowledges/Software-Usage/Terminal"}}'),c=s("85893"),r=s("50065");let t={date:"2024-01-06 01:14:31 +0800","dg-publish":!0,title:"Syncthing"},l=void 0,o={},d=[{value:"\u3010\u4F7F\u7528\u624B\u518C\u3011\u4E4B\u2013\u81EA\u5EFA Syncthing \u53D1\u73B0\u670D\u52A1\u5668\u548C\u4E2D\u7EE7\u670D\u52A1\u5668",id:"\u4F7F\u7528\u624B\u518C\u4E4B\u81EA\u5EFA-syncthing-\u53D1\u73B0\u670D\u52A1\u5668\u548C\u4E2D\u7EE7\u670D\u52A1\u5668",level:2},{value:"1. Windwos Server \u5B89\u88C5\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1",id:"1-windwos-server-\u5B89\u88C5\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1",level:2},{value:"1.1. \u53D1\u73B0\u670D\u52A1",id:"11-\u53D1\u73B0\u670D\u52A1",level:3},{value:"1.2. \u4E2D\u7EE7\u670D\u52A1",id:"12-\u4E2D\u7EE7\u670D\u52A1",level:3},{value:"2. Linux \u4F7F\u7528 Docker \u65B9\u5F0F\u90E8\u7F72\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1",id:"2-linux-\u4F7F\u7528-docker-\u65B9\u5F0F\u90E8\u7F72\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1",level:2},{value:"3. Syncthing \u4E2D\u914D\u7F6E\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1\u5668",id:"3-syncthing-\u4E2D\u914D\u7F6E\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1\u5668",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u5F00\u6E90\u7684\u5168\u5E73\u53F0\u652F\u6301\u7684 P2P \u540C\u6B65\u5DE5\u5177"}),"\n",(0,c.jsx)(n.p,{children:"Golang \u5B9E\u73B0"}),"\n",(0,c.jsxs)(n.p,{children:["Web UI \u9ED8\u8BA4\u7AEF\u53E3  ",(0,c.jsx)(n.code,{children:"8384"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u670D\u52A1\u5668\u90E8\u7F72\u9700\u8981\u4FEE\u6539 ",(0,c.jsx)(n.code,{children:"ExecStart=/usr/bin/syncthing serve --no-browser  --gui-address=0.0.0.0:8384  --no-restart --logflags=0"})," \u624D\u80FD\u516C\u7F51\u8BBF\u95EE"]}),"\n",(0,c.jsx)(n.p,{children:"If your PC has a local firewall, you will need to open the following ports for incoming and outgoing traffic:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Port 22000/TCP: TCP based sync protocol traffic"}),"\n",(0,c.jsx)(n.li,{children:"Port 22000/UDP: QUIC based sync protocol traffic"}),"\n",(0,c.jsx)(n.li,{children:"Port 21027/UDP: for discovery broadcasts on IPv4 and multicasts on IPv6"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4F7F\u7528\u624B\u518C\u4E4B\u81EA\u5EFA-syncthing-\u53D1\u73B0\u670D\u52A1\u5668\u548C\u4E2D\u7EE7\u670D\u52A1\u5668",children:"\u3010\u4F7F\u7528\u624B\u518C\u3011\u4E4B\u2013\u81EA\u5EFA Syncthing \u53D1\u73B0\u670D\u52A1\u5668\u548C\u4E2D\u7EE7\u670D\u52A1\u5668"}),"\n",(0,c.jsx)(n.p,{children:"#\u7CFB\u7EDF #Windows #\u6559\u7A0B #\u5DE5\u5177 #\u624B\u518C #Docker #Linux #Docker-compose"}),"\n",(0,c.jsx)(n.p,{children:"Syncthing \u5B9E\u73B0\u65B9\u6CD5\uFF0C\u9996\u5148\u901A\u8FC7\u53D1\u73B0\u670D\u52A1\u5668 (Discosrv)\u53D1\u73B0\u548C\u7D22\u5F15\u7528\u6237\uFF0C\u5F53\u7528\u6237\u8BBE\u5907\u63A5\u5165\u53D1\u73B0\u670D\u52A1\u5668\u540E\uFF0C\u670D\u52A1\u5668\u4F1A\u8FDB\u884C\u8BBE\u5907\u7684\u8FDE\u63A5\u901A\u544A\uFF0C\u5F53\u8BBE\u5907\u4E4B\u95F4\u540C\u610F\u8FDE\u63A5\u540E\u8FDB\u884C\u8FDE\u63A5\uFF1B\u4E24\u53F0\u8BBE\u5907\u5EFA\u7ACB\u8FDE\u63A5\u540E\uFF0C\u6570\u636E\u9700\u8981\u901A\u8FC7 NAT \u7A7F\u900F\u7684\u65B9\u5F0F\u5B9E\u73B0\u4EA4\u6362\uFF0C\u5982\u679C NAT \u7A7F\u900F\u4E0D\u6210\u529F\uFF0C\u5C31\u9700\u8981\u4E2D\u7EE7 (Relaysrv)\u670D\u52A1\u5668\u4F20\u8F93\u6570\u636E\u3002Syncthing \u5B98\u65B9\u7684\u53D1\u73B0\u670D\u52A1\u5668 (Global Discovery)\u53CA\u793E\u533A\u8D21\u732E\u7684\u4E2D\u7EE7\u670D\u52A1\u5668\u591A\u96C6\u4E2D\u5728\u6B27\u6D32\u56FD\u5185\u8F83\u5C11\uFF0C\u4F7F\u7528 Syncthing \u65F6\u7ECF\u5E38\u4F1A\u51FA\u73B0\u8FDE\u63A5\u6162\u3001\u65F6\u5E38\u65AD\u5F00\u3001\u901F\u5EA6\u4E0D\u7A33\u5B9A\u7B49\u95EE\u9898\u3002\u672C\u7BC7\u5229\u7528\u4E00\u53F0\u56FD\u5185\u7684\u95F2\u7F6E\u670D\u52A1\u5668\u63D0\u4F9B\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1\u52A0\u5FEB\u540C\u6B65\u6548\u7387\uFF0C\u4E5F\u53EF\u4EE5\u89E3\u51B3\u9690\u79C1\u95EE\u9898\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["Syncthing \u793E\u533A Relay \u670D\u52A1\u5668\u6C60\u4F4D\u7F6E\uFF1A ",(0,c.jsx)(n.a,{href:"https://relays.syncthing.net/",children:"https://relays.syncthing.net/"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u540C\u6B65\u7A0B\u5E8F syncthing\uFF1A ",(0,c.jsx)(n.a,{href:"https://github.com/syncthing/syncthing",children:"https://github.com/syncthing/syncthing"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u53D1\u73B0\u670D\u52A1\u5668 stdiscosrv\uFF1A ",(0,c.jsx)(n.a,{href:"https://github.com/syncthing/discosrv",children:"https://github.com/syncthing/discosrv"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u4E2D\u7EE7\u670D\u52A1\u5668 strelaysrv\uFF1A ",(0,c.jsx)(n.a,{href:"https://github.com/syncthing/relaysrv",children:"https://github.com/syncthing/relaysrv"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u6587\u6863\uFF1A ",(0,c.jsx)(n.a,{href:"https://docs.syncthing.net/index.html",children:"https://docs.syncthing.net/index.html"})]}),"\n",(0,c.jsx)(n.h2,{id:"1-windwos-server-\u5B89\u88C5\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1",children:"1. Windwos Server \u5B89\u88C5\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1"}),"\n",(0,c.jsx)(n.h3,{id:"11-\u53D1\u73B0\u670D\u52A1",children:"1.1. \u53D1\u73B0\u670D\u52A1"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://github.com/syncthing/discosrv/releases",children:"https://github.com/syncthing/discosrv/releases"})," \u627E\u5230 windows \u7248\u672C\uFF0C\u4E0B\u8F7D\u89E3\u538B\u540E\u6253\u5F00 cmd \u8FD0\u884C\uFF1A",(0,c.jsx)(n.code,{children:"stdiscosrv.exe -debug"})," \u542F\u52A8 stdiscosrv \u670D\u52A1\uFF0C\u9ED8\u8BA4\u7AEF\u53E3 8443 \u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:'-listen ":8443"'})," \u6307\u5B9A\u76D1\u542C\u7AEF\u53E3\uFF0C\u5176\u4ED6\u53C2\u6570\u53C2\u770B ",(0,c.jsx)(n.code,{children:"-help"}),"\u3002\u7A0B\u5E8F\u542F\u52A8\u540E\uFF0C\u8BB0\u4E0B\u751F\u6210\u7684 ",(0,c.jsx)(n.code,{children:"Server device ID"}),"\uFF0C\u540E\u9762\u6DFB\u52A0\u53D1\u73B0\u670D\u52A1\u65F6\u4F1A\u7528\u5230\u3002\u540C\u65F6\uFF0C\u5728\u7A0B\u5E8F\u6587\u4EF6\u5939\u4E0B\u81EA\u52A8\u751F\u6210\u540C\u6B65\u53D1\u73B0\u670D\u52A1\u5668\u6570\u636E\u5E93 ",(0,c.jsx)(n.code,{children:"discovery.db"})," \u548C\u670D\u52A1\u5668\u8BC1\u4E66 ",(0,c.jsx)(n.code,{children:"cert. pem\u3001key.pem"})," \u8BC1\u4E66\u4E0D\u53D8\uFF0C\u91CD\u88C5\u540E ",(0,c.jsx)(n.code,{children:"Server device ID"})," \u4E0D\u53D8\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"12-\u4E2D\u7EE7\u670D\u52A1",children:"1.2. \u4E2D\u7EE7\u670D\u52A1"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://github.com/syncthing/relaysrv",children:"https://github.com/syncthing/relaysrv"})," \u627E\u5230 windows \u7248\u672C\uFF0C\u4E0B\u8F7D\u89E3\u538B\u540E\u6253\u5F00 cmd \u8FD0\u884C\uFF1A",(0,c.jsx)(n.code,{children:'strelaysrv.exe -debug -pools="" -protocol=tcp4'})," \u542F\u52A8 strelaysrv \u670D\u52A1\uFF0C\u9ED8\u8BA4\u7AEF\u53E3 22067\uFF08\u8FDE\u63A5\u7AEF\u53E3\uFF09\u300122070\uFF08\u670D\u52A1\u5668\u72B6\u6001\u7AEF\u53E3\uFF09\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,c.jsx)(n.code,{children:'-listen ":22067"'})," \u6307\u5B9A\u8FDE\u63A5\u7AEF\u53E3\uFF0C",(0,c.jsx)(n.code,{children:'-pools=""'})," \u4E0D\u516C\u5F00\u6B64\u670D\u52A1\u5668\uFF08\u9ED8\u8BA4\u4F1A\u52A0\u5165 Syncthing \u5B98\u65B9 Relay \u670D\u52A1\u5668\u6C60\u4E2D\u5171\u4EAB\u4E2D\u7EE7\u670D\u52A1\u5668\uFF0C\u4F1A\u6D88\u8017\u5927\u91CF\u6D41\u91CF\uFF0C\u5EFA\u8BAE\u6709\u6D41\u91CF\u4E0A\u9650\u7684\u670D\u52A1\u5668\u4E0D\u516C\u5F00\uFF09\uFF0C",(0,c.jsx)(n.code,{children:"-protocol=tcp4"})," \u53EA\u542F\u7528 TPv4 \u534F\u8BAE\uFF0C\u5176\u4ED6\u53C2\u6570\u53C2\u770B ",(0,c.jsx)(n.code,{children:"-help"}),"\u3002\u7A0B\u5E8F\u542F\u52A8\u540E\uFF0C\u8BB0\u4E0B\u751F\u6210\u7684 ",(0,c.jsx)(n.code,{children:"URI"}),"\uFF0C\u540E\u9762\u6DFB\u52A0\u4E2D\u7EE7\u670D\u52A1\u65F6\u4F1A\u7528\u5230\uFF0C\u540C\u65F6\uFF0C\u5728\u7A0B\u5E8F\u6587\u4EF6\u5939\u4E0B\u81EA\u52A8\u751F\u6210\u670D\u52A1\u5668\u8BC1\u4E66\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6CE8\u610F\uFF1A\u670D\u52A1\u5668\u9632\u706B\u5899\u653E\u884C\u7AEF\u53E38443\uFF0C22067\u3002"})}),"\n",(0,c.jsx)(n.h2,{id:"2-linux-\u4F7F\u7528-docker-\u65B9\u5F0F\u90E8\u7F72\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1",children:"2. Linux \u4F7F\u7528 Docker \u65B9\u5F0F\u90E8\u7F72\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1"}),"\n",(0,c.jsxs)(n.p,{children:["\u63A8\u8350\u4F7F\u7528 ",(0,c.jsx)(n.code,{children:"docker-compose"})," \u65B9\u5F0F\u90E8\u7F72\uFF0C",(0,c.jsx)(n.code,{children:"yaml"})," \u6587\u4EF6\u5982\u4E0B\uFF1A"]}),"\n",(0,c.jsxs)(n.p,{children:["\u83B7\u53D6\u53D1\u73B0\u670D\u52A1\u7684 ",(0,c.jsx)(n.code,{children:"Server device ID"})," \u548C\u4E2D\u7EE7\u670D\u52A1\u7684 ",(0,c.jsx)(n.code,{children:"URI"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6CE8\u610F\uFF1A\u670D\u52A1\u5668\u9632\u706B\u5899\u653E\u884C\u7AEF\u53E38443\uFF0C22067\u3002"})}),"\n",(0,c.jsx)(n.h2,{id:"3-syncthing-\u4E2D\u914D\u7F6E\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1\u5668",children:"3. Syncthing \u4E2D\u914D\u7F6E\u53D1\u73B0\u548C\u4E2D\u7EE7\u670D\u52A1\u5668"}),"\n",(0,c.jsxs)(n.p,{children:["\u6253\u5F00 Syncthing ",(0,c.jsx)(n.code,{children:"\u64CD\u4F5C"})," -> ",(0,c.jsx)(n.code,{children:"\u8BBE\u7F6E"})," -> ",(0,c.jsx)(n.code,{children:"\u8FDE\u63A5"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://image.vlinyu.com/i/2023/04/01/syncthingdr01.png",alt:""})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679C\u5E0C\u671B\u4FDD\u7559 Syncthing \u5B98\u65B9\u53D1\u73B0\u670D\u52A1\u5668\u548C\u793E\u533A\u4E2D\u7EE7\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u5728\u5730\u5740\u524D\u52A0\u4E0A ",(0,c.jsx)(n.code,{children:"default,"})," \u5982\uFF1A"]})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var i=s(67294);let c={},r=i.createContext(c);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);