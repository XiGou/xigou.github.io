"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[2596],{26168:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(11504);var n=a(34064),i=a(54596),o=a(11928),r=a(55808),s=a(88936),l=a(77508),c=a(11248),d=a(56565),g=a(18300),m=a(40480),p=a(17624);function u(e){const t=(0,m.Q)(e);return(0,p.jsx)(g.c,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,i.c)(),{blogDescription:n,blogTitle:r,permalink:s}=t,l="/"===s?a:r;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.U7,{title:l,description:n}),(0,p.jsx)(c.c,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:a,sidebar:n}=e;return(0,p.jsxs)(s.c,{sidebar:n,children:[(0,p.jsx)(d.c,{items:a}),(0,p.jsx)(l.c,{metadata:t})]})}function f(e){return(0,p.jsxs)(o.cr,{className:(0,n.c)(r.W.wrapper.blogPages,r.W.page.blogListPage),children:[(0,p.jsx)(h,{...e}),(0,p.jsx)(u,{...e}),(0,p.jsx)(b,{...e})]})}},77508:(e,t,a)=>{a.d(t,{c:()=>r});a(11504);var n=a(57932),i=a(31152),o=a(17624);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,o.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,o.jsx)(i.c,{permalink:a,title:(0,o.jsx)(n.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,o.jsx)(i.c,{permalink:r,title:(0,o.jsx)(n.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},56565:(e,t,a)=>{a.d(t,{c:()=>r});a(11504);var n=a(26064),i=a(8448),o=a(17624);function r(e){let{items:t,component:a=i.c}=e;return(0,o.jsx)(o.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,o.jsx)(n.E,{content:t,children:(0,o.jsx)(a,{children:(0,o.jsx)(t,{})})},t.metadata.permalink)}))})}},40480:(e,t,a)=>{a.d(t,{Q:()=>d,C:()=>g});var n=a(89908),i=a(54596),o=a(90232);var r=a(26064);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,a){return e?{image:p({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function d(e){const{siteConfig:t}=(0,i.c)(),{withBaseUrl:a}=(0,n.E)(),{metadata:{blogDescription:o,blogTitle:r,permalink:d}}=e,g=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:i,metadata:o}=e,{date:r,title:d,description:g,lastUpdatedAt:m}=o,p=n.image??i.image,u=i.keywords??[],h=`${t.url}${o.permalink}`,b=m?s(m):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:d,name:d,description:g,datePublished:r,...b?{dateModified:b}:{},...l(o.authors),...c(p,a,d),...u?{keywords:u}:{}}}(e.content,t,a)))}}function g(){const e=function(){const e=(0,o.c)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,r.g)(),{siteConfig:d}=(0,i.c)(),{withBaseUrl:g}=(0,n.E)(),{date:m,title:p,description:u,frontMatter:h,lastUpdatedAt:b}=a,f=t.image??h.image,x=h.keywords??[],j=b?s(b):void 0,y=`${d.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":y,mainEntityOfPage:y,url:y,headline:p,name:p,description:u,datePublished:m,...j?{dateModified:j}:{},...l(a.authors),...c(f,g,p),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function p(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}},8448:(e,t,a)=>{a.d(t,{c:()=>d});a(11504);var n=a(26064),i=a(12304),o=a(70768),r=a(59400),s=a(17624);function l(e){const{colorMode:t}=(0,o.U)();let{type:a,category:n,categoryId:i}=e;return n="comments",i="DIC_kwDOF6hDGM4CSw_4",(0,s.jsx)(r.c,{id:"comments",repo:"XiGou/xigou.github.io",repoId:"MDEwOlJlcG9zaXRvcnkzOTY5MDMxOTI=",category:n,categoryId:i,term:"say something",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}var c=a(89788);function d(e){const{metadata:t,isBlogPostPage:a}=(0,n.g)(),{frontMatter:o,slug:r,title:d}=((0,c.c)(),t),{enableComments:g}=o;let m;return m=void 0===o.enableComments||o.enableComments,(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.c,{...e}),m&&a&&(0,s.jsx)(l,{})]})}}}]);