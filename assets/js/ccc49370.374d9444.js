"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[6103],{324:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});n(7294);var a=n(6905),o=n(5463),i=n(3702),s=n(9107),l=n(7306),r=n(2234),c=n(7325),d=n(3672),m=n(5893);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.Z,{...n,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,m.jsx)(d.Z,{...t,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,s.C)(),{title:n,description:a,date:i,tags:l,authors:r,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(o.d,{title:n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:i}),r.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=n(7086),f=n(9501);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:o}=(0,s.C)(),{nextItem:i,prevItem:c,frontMatter:d,unlisted:g}=a,{hide_table_of_contents:v,toc_min_heading_level:p,toc_max_heading_level:x}=d;return(0,m.jsxs)(l.Z,{sidebar:t,toc:!v&&o.length>0?(0,m.jsx)(h.Z,{toc:o,minHeadingLevel:p,maxHeadingLevel:x}):void 0,children:[g&&(0,m.jsx)(f.Z,{}),(0,m.jsx)(r.Z,{children:n}),(i||c)&&(0,m.jsx)(u,{nextItem:i,prevItem:c})]})}function p(e){const t=e.content;return(0,m.jsx)(s.n,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(o.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:[(0,m.jsx)(g,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},7086:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var a=n(6905),o=n(2728);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=n(5893);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,a.Z)(i.tableOfContents,"thin-scrollbar",t),children:(0,s.jsx)(o.Z,{...n,linkClassName:l,linkActiveClassName:r})})}},2728:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),o=n(107);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:s}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:s}),c=r(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(4791),u=n(5893);function g(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?(0,u.jsx)("ul",{className:o?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const f=(0,o.L)(),v=c??f.tableOfContents.minHeadingLevel,p=m??f.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,a.useMemo)((()=>s({toc:i(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:v,maxHeadingLevel:p});return d((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:v,maxHeadingLevel:p}}),[l,r,v,p])),(0,u.jsx)(h,{toc:x,className:n,linkClassName:l,...g})}},9501:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var a=n(6905),o=n(7325),i=n(1514),s=n(5893);function l(){return(0,s.jsx)(o.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,s.jsx)(o.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(i.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(3702),m=n(9114);function u(e){let{className:t}=e;return(0,s.jsx)(m.Z,{type:"caution",title:(0,s.jsx)(l,{}),className:(0,a.Z)(t,d.k.common.unlistedBanner),children:(0,s.jsx)(r,{})})}function g(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(u,{...e})]})}},2234:(e,t,n)=>{n.d(t,{Z:()=>d});n(7294);var a=n(9107),o=n(1116),i=n(9200),s=n(9861),l=n(5893);function r(e){const{colorMode:t}=(0,i.I)();let{type:n,category:a,categoryId:o}=e;return a="comments",o="DIC_kwDOF6hDGM4CSw_4",(0,l.jsx)(s.Z,{id:"comments",repo:"XiGou/xigou.github.io",repoId:"MDEwOlJlcG9zaXRvcnkzOTY5MDMxOTI=",category:a,categoryId:o,term:"say something",mapping:"title",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}var c=n(1048);function d(e){const{metadata:t,isBlogPostPage:n}=(0,a.C)(),{frontMatter:i,slug:s,title:d}=((0,c.Z)(),t),{enableComments:m}=i;let u;return u=void 0===i.enableComments||i.enableComments,(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{...e}),u&&n&&(0,l.jsx)(r,{})]})}}}]);