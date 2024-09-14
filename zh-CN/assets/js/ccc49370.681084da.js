"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[3249],{11917:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(96540);var i=n(18215),a=n(17153),s=n(18630),o=n(89101),r=n(6953),l=n(92475),c=n(23230),d=n(13555),m=n(74848);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,o.e7)(),{title:n,description:i,date:s,tags:r,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(a.be,{title:n,description:i,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:s}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var h=n(21141);function f(){const e=(0,o.J_)();return(0,m.jsx)(h.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=n(98793),x=n(94648);function v(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:a}=(0,o.e7)(),{nextItem:s,prevItem:c,frontMatter:d}=i,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:f}=d;return(0,m.jsxs)(r.A,{sidebar:t,toc:!g&&a.length>0?(0,m.jsx)(p.A,{toc:a,minHeadingLevel:h,maxHeadingLevel:f}):void 0,children:[(0,m.jsx)(x.A,{metadata:i}),(0,m.jsx)(l.A,{children:n}),(s||c)&&(0,m.jsx)(u,{nextItem:s,prevItem:c})]})}function b(e){const t=e.content;return(0,m.jsx)(o.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(a.e3,{className:(0,i.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,m.jsx)(g,{}),(0,m.jsx)(f,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},48811:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var i=n(18215),a=n(96907),s=n(18630),o=n(54182),r=n(74848);function l(e){let{className:t}=e;return(0,r.jsx)(o.A,{type:"caution",title:(0,r.jsx)(a.Rc,{}),className:(0,i.A)(t,s.G.common.unlistedBanner),children:(0,r.jsx)(a.Uh,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.AE,{}),(0,r.jsx)(l,{...e})]})}},94648:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var i=n(18215),a=n(96907),s=n(18630),o=n(54182),r=n(74848);function l(e){let{className:t}=e;return(0,r.jsx)(o.A,{type:"caution",title:(0,r.jsx)(a.Yh,{}),className:(0,i.A)(t,s.G.common.draftBanner),children:(0,r.jsx)(a.TT,{})})}var c=n(48811);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:i}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||i.unlisted)&&(0,r.jsx)(c.A,{}),i.draft&&(0,r.jsx)(l,{})]})}},98793:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var i=n(18215),a=n(61507);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=n(74848);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,i.A)(s.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(a.A,{...n,linkClassName:r,linkActiveClassName:l})})}},61507:(e,t,n)=>{n.d(t,{A:()=>f});var i=n(96540),a=n(86957);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>r(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),c=l(r,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var m=n(14783),u=n(74848);function g(e){let{toc:t,className:n,linkClassName:i,isChild:a}=e;return t.length?(0,u.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const h=i.memo(g);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const f=(0,a.p)(),p=c??f.tableOfContents.minHeadingLevel,x=m??f.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>o({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:x}}),[r,l,p,x])),(0,u.jsx)(h,{toc:v,className:n,linkClassName:r,...g})}},96907:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>o,TT:()=>d,Uh:()=>r,Yh:()=>c});n(96540);var i=n(23230),a=n(21141),s=n(74848);function o(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,s.jsx)(a.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},92475:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var i=n(89101),a=n(23162),s=n(7710),o=n(13955),r=n(74848);function l(e){const{colorMode:t}=(0,s.G)();let{type:n,category:i,categoryId:a}=e;return i="comments",a="DIC_kwDOF6hDGM4CSw_4",(0,r.jsx)(o.A,{id:"comments",repo:"XiGou/xigou.github.io",repoId:"MDEwOlJlcG9zaXRvcnkzOTY5MDMxOTI=",category:i,categoryId:a,term:"say something",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}var c=n(11062);function d(e){const{metadata:t,isBlogPostPage:n}=(0,i.e7)(),{frontMatter:s,slug:o,title:d}=((0,c.A)(),t),{enableComments:m}=s;let u;return u=void 0===s.enableComments||s.enableComments,(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{...e}),u&&n&&(0,r.jsx)(l,{})]})}}}]);