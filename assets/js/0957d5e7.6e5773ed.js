"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[4604],{92044:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var c=s(17624),i=s(4552);const r={date:"2024-01-06 01:14:31 +0800","dg-publish":!0,title:"Syncthing"},t=void 0,o={id:"Software-Usage/Syncthing",title:"Syncthing",description:"\u5f00\u6e90\u7684\u5168\u5e73\u53f0\u652f\u6301\u7684 P2P \u540c\u6b65\u5de5\u5177",source:"@site/knowledges/Software-Usage/Syncthing.md",sourceDirName:"Software-Usage",slug:"/Software-Usage/Syncthing",permalink:"/knowledges/Software-Usage/Syncthing",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{date:"2024-01-06 01:14:31 +0800","dg-publish":!0,title:"Syncthing"},sidebar:"readings",previous:{title:"Nmap",permalink:"/knowledges/Software-Usage/Nmap"},next:{title:"ffmpeg",permalink:"/knowledges/Software-Usage/ffmpeg"}},d={},l=[{value:"\u3010\u4f7f\u7528\u624b\u518c\u3011\u4e4b\u2013\u81ea\u5efa Syncthing \u53d1\u73b0\u670d\u52a1\u5668\u548c\u4e2d\u7ee7\u670d\u52a1\u5668",id:"\u4f7f\u7528\u624b\u518c\u4e4b\u81ea\u5efa-syncthing-\u53d1\u73b0\u670d\u52a1\u5668\u548c\u4e2d\u7ee7\u670d\u52a1\u5668",level:2},{value:"1. Windwos Server \u5b89\u88c5\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1",id:"1-windwos-server-\u5b89\u88c5\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1",level:2},{value:"1.1. \u53d1\u73b0\u670d\u52a1",id:"11-\u53d1\u73b0\u670d\u52a1",level:3},{value:"1.2. \u4e2d\u7ee7\u670d\u52a1",id:"12-\u4e2d\u7ee7\u670d\u52a1",level:3},{value:"2. Linux \u4f7f\u7528 Docker \u65b9\u5f0f\u90e8\u7f72\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1",id:"2-linux-\u4f7f\u7528-docker-\u65b9\u5f0f\u90e8\u7f72\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1",level:2},{value:"3. Syncthing \u4e2d\u914d\u7f6e\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1\u5668",id:"3-syncthing-\u4e2d\u914d\u7f6e\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1\u5668",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u5f00\u6e90\u7684\u5168\u5e73\u53f0\u652f\u6301\u7684 P2P \u540c\u6b65\u5de5\u5177"}),"\n",(0,c.jsx)(n.p,{children:"Golang \u5b9e\u73b0"}),"\n",(0,c.jsxs)(n.p,{children:["Web UI \u9ed8\u8ba4\u7aef\u53e3  ",(0,c.jsx)(n.code,{children:"8384"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u670d\u52a1\u5668\u90e8\u7f72\u9700\u8981\u4fee\u6539 ",(0,c.jsx)(n.code,{children:"ExecStart=/usr/bin/syncthing serve --no-browser  --gui-address=0.0.0.0:8384  --no-restart --logflags=0"})," \u624d\u80fd\u516c\u7f51\u8bbf\u95ee"]}),"\n",(0,c.jsx)(n.p,{children:"If your PC has a local firewall, you will need to open the following ports for incoming and outgoing traffic:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Port 22000/TCP: TCP based sync protocol traffic"}),"\n",(0,c.jsx)(n.li,{children:"Port 22000/UDP: QUIC based sync protocol traffic"}),"\n",(0,c.jsx)(n.li,{children:"Port 21027/UDP: for discovery broadcasts on IPv4 and multicasts on IPv6"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528\u624b\u518c\u4e4b\u81ea\u5efa-syncthing-\u53d1\u73b0\u670d\u52a1\u5668\u548c\u4e2d\u7ee7\u670d\u52a1\u5668",children:"\u3010\u4f7f\u7528\u624b\u518c\u3011\u4e4b\u2013\u81ea\u5efa Syncthing \u53d1\u73b0\u670d\u52a1\u5668\u548c\u4e2d\u7ee7\u670d\u52a1\u5668"}),"\n",(0,c.jsx)(n.p,{children:"#\u7cfb\u7edf #Windows #\u6559\u7a0b #\u5de5\u5177 #\u624b\u518c #Docker #Linux #Docker-compose"}),"\n",(0,c.jsx)(n.p,{children:"Syncthing \u5b9e\u73b0\u65b9\u6cd5\uff0c\u9996\u5148\u901a\u8fc7\u53d1\u73b0\u670d\u52a1\u5668 (Discosrv)\u53d1\u73b0\u548c\u7d22\u5f15\u7528\u6237\uff0c\u5f53\u7528\u6237\u8bbe\u5907\u63a5\u5165\u53d1\u73b0\u670d\u52a1\u5668\u540e\uff0c\u670d\u52a1\u5668\u4f1a\u8fdb\u884c\u8bbe\u5907\u7684\u8fde\u63a5\u901a\u544a\uff0c\u5f53\u8bbe\u5907\u4e4b\u95f4\u540c\u610f\u8fde\u63a5\u540e\u8fdb\u884c\u8fde\u63a5\uff1b\u4e24\u53f0\u8bbe\u5907\u5efa\u7acb\u8fde\u63a5\u540e\uff0c\u6570\u636e\u9700\u8981\u901a\u8fc7 NAT \u7a7f\u900f\u7684\u65b9\u5f0f\u5b9e\u73b0\u4ea4\u6362\uff0c\u5982\u679c NAT \u7a7f\u900f\u4e0d\u6210\u529f\uff0c\u5c31\u9700\u8981\u4e2d\u7ee7 (Relaysrv)\u670d\u52a1\u5668\u4f20\u8f93\u6570\u636e\u3002Syncthing \u5b98\u65b9\u7684\u53d1\u73b0\u670d\u52a1\u5668 (Global Discovery)\u53ca\u793e\u533a\u8d21\u732e\u7684\u4e2d\u7ee7\u670d\u52a1\u5668\u591a\u96c6\u4e2d\u5728\u6b27\u6d32\u56fd\u5185\u8f83\u5c11\uff0c\u4f7f\u7528 Syncthing \u65f6\u7ecf\u5e38\u4f1a\u51fa\u73b0\u8fde\u63a5\u6162\u3001\u65f6\u5e38\u65ad\u5f00\u3001\u901f\u5ea6\u4e0d\u7a33\u5b9a\u7b49\u95ee\u9898\u3002\u672c\u7bc7\u5229\u7528\u4e00\u53f0\u56fd\u5185\u7684\u95f2\u7f6e\u670d\u52a1\u5668\u63d0\u4f9b\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1\u52a0\u5feb\u540c\u6b65\u6548\u7387\uff0c\u4e5f\u53ef\u4ee5\u89e3\u51b3\u9690\u79c1\u95ee\u9898\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["Syncthing \u793e\u533a Relay \u670d\u52a1\u5668\u6c60\u4f4d\u7f6e\uff1a ",(0,c.jsx)(n.a,{href:"https://relays.syncthing.net/",children:"https://relays.syncthing.net/"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u540c\u6b65\u7a0b\u5e8f syncthing\uff1a ",(0,c.jsx)(n.a,{href:"https://github.com/syncthing/syncthing",children:"https://github.com/syncthing/syncthing"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u53d1\u73b0\u670d\u52a1\u5668 stdiscosrv\uff1a ",(0,c.jsx)(n.a,{href:"https://github.com/syncthing/discosrv",children:"https://github.com/syncthing/discosrv"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e2d\u7ee7\u670d\u52a1\u5668 strelaysrv\uff1a ",(0,c.jsx)(n.a,{href:"https://github.com/syncthing/relaysrv",children:"https://github.com/syncthing/relaysrv"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u6587\u6863\uff1a ",(0,c.jsx)(n.a,{href:"https://docs.syncthing.net/index.html",children:"https://docs.syncthing.net/index.html"})]}),"\n",(0,c.jsx)(n.h2,{id:"1-windwos-server-\u5b89\u88c5\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1",children:"1. Windwos Server \u5b89\u88c5\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1"}),"\n",(0,c.jsx)(n.h3,{id:"11-\u53d1\u73b0\u670d\u52a1",children:"1.1. \u53d1\u73b0\u670d\u52a1"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://github.com/syncthing/discosrv/releases",children:"https://github.com/syncthing/discosrv/releases"})," \u627e\u5230 windows \u7248\u672c\uff0c\u4e0b\u8f7d\u89e3\u538b\u540e\u6253\u5f00 cmd \u8fd0\u884c\uff1a",(0,c.jsx)(n.code,{children:"stdiscosrv.exe -debug"})," \u542f\u52a8 stdiscosrv \u670d\u52a1\uff0c\u9ed8\u8ba4\u7aef\u53e3 8443 \u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:'-listen ":8443"'})," \u6307\u5b9a\u76d1\u542c\u7aef\u53e3\uff0c\u5176\u4ed6\u53c2\u6570\u53c2\u770b ",(0,c.jsx)(n.code,{children:"-help"}),"\u3002\u7a0b\u5e8f\u542f\u52a8\u540e\uff0c\u8bb0\u4e0b\u751f\u6210\u7684 ",(0,c.jsx)(n.code,{children:"Server device ID"}),"\uff0c\u540e\u9762\u6dfb\u52a0\u53d1\u73b0\u670d\u52a1\u65f6\u4f1a\u7528\u5230\u3002\u540c\u65f6\uff0c\u5728\u7a0b\u5e8f\u6587\u4ef6\u5939\u4e0b\u81ea\u52a8\u751f\u6210\u540c\u6b65\u53d1\u73b0\u670d\u52a1\u5668\u6570\u636e\u5e93 ",(0,c.jsx)(n.code,{children:"discovery.db"})," \u548c\u670d\u52a1\u5668\u8bc1\u4e66 ",(0,c.jsx)(n.code,{children:"cert. pem\u3001key.pem"})," \u8bc1\u4e66\u4e0d\u53d8\uff0c\u91cd\u88c5\u540e ",(0,c.jsx)(n.code,{children:"Server device ID"})," \u4e0d\u53d8\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"12-\u4e2d\u7ee7\u670d\u52a1",children:"1.2. \u4e2d\u7ee7\u670d\u52a1"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"https://github.com/syncthing/relaysrv",children:"https://github.com/syncthing/relaysrv"})," \u627e\u5230 windows \u7248\u672c\uff0c\u4e0b\u8f7d\u89e3\u538b\u540e\u6253\u5f00 cmd \u8fd0\u884c\uff1a",(0,c.jsx)(n.code,{children:'strelaysrv.exe -debug -pools="" -protocol=tcp4'})," \u542f\u52a8 strelaysrv \u670d\u52a1\uff0c\u9ed8\u8ba4\u7aef\u53e3 22067\uff08\u8fde\u63a5\u7aef\u53e3\uff09\u300122070\uff08\u670d\u52a1\u5668\u72b6\u6001\u7aef\u53e3\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:'-listen ":22067"'})," \u6307\u5b9a\u8fde\u63a5\u7aef\u53e3\uff0c",(0,c.jsx)(n.code,{children:'-pools=""'})," \u4e0d\u516c\u5f00\u6b64\u670d\u52a1\u5668\uff08\u9ed8\u8ba4\u4f1a\u52a0\u5165 Syncthing \u5b98\u65b9 Relay \u670d\u52a1\u5668\u6c60\u4e2d\u5171\u4eab\u4e2d\u7ee7\u670d\u52a1\u5668\uff0c\u4f1a\u6d88\u8017\u5927\u91cf\u6d41\u91cf\uff0c\u5efa\u8bae\u6709\u6d41\u91cf\u4e0a\u9650\u7684\u670d\u52a1\u5668\u4e0d\u516c\u5f00\uff09\uff0c",(0,c.jsx)(n.code,{children:"-protocol=tcp4"})," \u53ea\u542f\u7528 TPv4 \u534f\u8bae\uff0c\u5176\u4ed6\u53c2\u6570\u53c2\u770b ",(0,c.jsx)(n.code,{children:"-help"}),"\u3002\u7a0b\u5e8f\u542f\u52a8\u540e\uff0c\u8bb0\u4e0b\u751f\u6210\u7684 ",(0,c.jsx)(n.code,{children:"URI"}),"\uff0c\u540e\u9762\u6dfb\u52a0\u4e2d\u7ee7\u670d\u52a1\u65f6\u4f1a\u7528\u5230\uff0c\u540c\u65f6\uff0c\u5728\u7a0b\u5e8f\u6587\u4ef6\u5939\u4e0b\u81ea\u52a8\u751f\u6210\u670d\u52a1\u5668\u8bc1\u4e66\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a\u670d\u52a1\u5668\u9632\u706b\u5899\u653e\u884c\u7aef\u53e38443\uff0c22067\u3002"})}),"\n",(0,c.jsx)(n.h2,{id:"2-linux-\u4f7f\u7528-docker-\u65b9\u5f0f\u90e8\u7f72\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1",children:"2. Linux \u4f7f\u7528 Docker \u65b9\u5f0f\u90e8\u7f72\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1"}),"\n",(0,c.jsxs)(n.p,{children:["\u63a8\u8350\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"docker-compose"})," \u65b9\u5f0f\u90e8\u7f72\uff0c",(0,c.jsx)(n.code,{children:"yaml"})," \u6587\u4ef6\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsxs)(n.p,{children:["\u83b7\u53d6\u53d1\u73b0\u670d\u52a1\u7684 ",(0,c.jsx)(n.code,{children:"Server device ID"})," \u548c\u4e2d\u7ee7\u670d\u52a1\u7684 ",(0,c.jsx)(n.code,{children:"URI"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a\u670d\u52a1\u5668\u9632\u706b\u5899\u653e\u884c\u7aef\u53e38443\uff0c22067\u3002"})}),"\n",(0,c.jsx)(n.h2,{id:"3-syncthing-\u4e2d\u914d\u7f6e\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1\u5668",children:"3. Syncthing \u4e2d\u914d\u7f6e\u53d1\u73b0\u548c\u4e2d\u7ee7\u670d\u52a1\u5668"}),"\n",(0,c.jsxs)(n.p,{children:["\u6253\u5f00 Syncthing ",(0,c.jsx)(n.code,{children:"\u64cd\u4f5c"})," -> ",(0,c.jsx)(n.code,{children:"\u8bbe\u7f6e"})," -> ",(0,c.jsx)(n.code,{children:"\u8fde\u63a5"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:"https://image.vlinyu.com/i/2023/04/01/syncthingdr01.png",alt:""})}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u5e0c\u671b\u4fdd\u7559 Syncthing \u5b98\u65b9\u53d1\u73b0\u670d\u52a1\u5668\u548c\u793e\u533a\u4e2d\u7ee7\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u5728\u5730\u5740\u524d\u52a0\u4e0a ",(0,c.jsx)(n.code,{children:"default,"})," \u5982\uff1a"]})]})}function a(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>t});var c=s(11504);const i={},r=c.createContext(i);function t(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);