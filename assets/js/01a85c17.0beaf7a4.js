"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[8412],{88936:(e,s,t)=>{t.d(s,{c:()=>v});var a=t(11504),i=t(34064),r=t(3808),l=t(69936),n=t(45800),c=t(57932),o=t(55592),m=t(75253);function d(e){const{pathname:s}=(0,o.IT)();return(0,a.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,m.Sc)(e.permalink,s))}(e,s)))),[e,s])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=t(17624);function b(e){let{sidebar:s}=e;const t=d(s.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.c)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.c)(u.sidebarItemTitle,"margin-bottom--md"),children:s.title}),(0,g.jsx)("ul",{className:(0,i.c)(u.sidebarItemList,"clean-list"),children:t.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(n.c,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=t(18392);function p(e){let{sidebar:s}=e;const t=d(s.items);return(0,g.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(n.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,g.jsx)(h.Mx,{component:p,props:e})}function x(e){let{sidebar:s}=e;const t=(0,l.U)();return s?.items.length?"mobile"===t?(0,g.jsx)(j,{sidebar:s}):(0,g.jsx)(b,{sidebar:s}):null}function v(e){const{sidebar:s,toc:t,children:a,...l}=e,n=s&&s.items.length>0;return(0,g.jsx)(r.c,{...l,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(x,{sidebar:s}),(0,g.jsx)("main",{className:(0,i.c)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),t&&(0,g.jsx)("div",{className:"col col--2",children:t})]})})})}},36955:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});t(11504);var a=t(34064),i=t(56948),r=t(53236),l=t(55808),n=t(88936),c=t(64992),o=t(11248),m=t(30028),d=t(17624);function u(e){let{tags:s,sidebar:t}=e;const u=(0,i.K)();return(0,d.jsxs)(r.cr,{className:(0,a.c)(l.W.wrapper.blogPages,l.W.page.blogTagsListPage),children:[(0,d.jsx)(r.U7,{title:u}),(0,d.jsx)(o.c,{tag:"blog_tags_list"}),(0,d.jsxs)(n.c,{sidebar:t,children:[(0,d.jsx)(m.c,{as:"h1",children:u}),(0,d.jsx)(c.c,{tags:s})]})]})}},83736:(e,s,t)=>{t.d(s,{c:()=>n});t(11504);var a=t(34064),i=t(45800);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=t(17624);function n(e){let{permalink:s,label:t,count:n}=e;return(0,l.jsxs)(i.c,{href:s,className:(0,a.c)(r.tag,n?r.tagWithCount:r.tagRegular),children:[t,n&&(0,l.jsx)("span",{children:n})]})}},64992:(e,s,t)=>{t.d(s,{c:()=>o});t(11504);var a=t(56948),i=t(83736),r=t(30028);const l={tag:"tag_Nnez"};var n=t(17624);function c(e){let{letterEntry:s}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(r.c,{as:"h2",id:s.letter,children:s.letter}),(0,n.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,n.jsx)("li",{className:l.tag,children:(0,n.jsx)(i.c,{...e})},e.permalink)))}),(0,n.jsx)("hr",{})]})}function o(e){let{tags:s}=e;const t=(0,a.M)(s);return(0,n.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,n.jsx)(c,{letterEntry:e},e.letter)))})}},56948:(e,s,t)=>{t.d(s,{K:()=>i,M:()=>r});var a=t(57932);const i=()=>(0,a.G)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[a]=s;return t.localeCompare(a)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}}}]);