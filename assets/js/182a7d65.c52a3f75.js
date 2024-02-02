"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[1578],{7163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(5893),a=t(1151);const r={"dg-publish":!0},s=void 0,i={id:"Software/Calibra_Build_EBook_Management_System",title:"Calibra_Build_EBook_Management_System",description:"[!info] Github Repo",source:"@site/collections/Software/Calibra_Build_EBook_Management_System.md",sourceDirName:"Software",slug:"/Software/Calibra_Build_EBook_Management_System",permalink:"/collections/Software/Calibra_Build_EBook_Management_System",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{"dg-publish":!0},sidebar:"readings",previous:{title:"Software",permalink:"/collections/Resource/Software"},next:{title:"CasaOS",permalink:"/collections/Software/CasaOS"}},l={},c=[];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["[!info] Github Repo\n",(0,o.jsxs)(n.a,{href:"https://github.com/janeczku/calibre-web",children:["GitHub - janeczku/calibre-web: ","\ud83d\udcda"," Web app for browsing, reading and downloading eBooks stored in a Calibre database"]})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Webui can be found at\xa0",(0,o.jsx)(n.code,{children:"http://your-ip:8083"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"---\nservices:\n  calibre-web:\n    image: lscr.io/linuxserver/calibre-web:latest\n    container_name: calibre-web\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=Etc/UTC\n      - DOCKER_MODS=linuxserver/mods:universal-calibre #optional\n      - OAUTHLIB_RELAX_TOKEN_SCOPE=1 #optional\n    volumes:\n      - /path/to/data:/config\n      - /path/to/calibre/library:/books\n    ports:\n      - 8083:8083\n    restart: unless-stopped\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run -d \\\n  --name=calibre-web \\\n  -e PUID=1000 \\\n  -e PGID=1000 \\\n  -e TZ=Etc/UTC \\\n  -e DOCKER_MODS=linuxserver/mods:universal-calibre `#optional` \\\n  -e OAUTHLIB_RELAX_TOKEN_SCOPE=1 `#optional` \\\n  -p 8083:8083 \\\n  -v /path/to/data:/config \\\n  -v /path/to/calibre/library:/books \\\n  --restart unless-stopped \\\n  lscr.io/linuxserver/calibre-web:latest\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var o=t(7294);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);