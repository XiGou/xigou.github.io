"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["766"],{8846(e,t,n){n.d(t,{A:()=>r});var i=n(74848);n(96540);var s=n(33553),a=n(47291);function r(e){let{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.A,{permalink:n,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(a.A,{permalink:r,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},69523(e,t,n){n.d(t,{A:()=>r});var i=n(74848);n(96540);var s=n(70758),a=n(9115);function r({items:e,component:t=a.A}){return(0,i.jsx)(i.Fragment,{children:e.map(({content:e})=>(0,i.jsx)(s.in,{content:e,children:(0,i.jsx)(t,{children:(0,i.jsx)(e,{})})},e.metadata.permalink))})}},56214(e,t,n){n.r(t),n.d(t,{default:()=>v});var i=n(74848);n(96540);var s=n(18215),a=n(33553),r=n(64329),o=n(5678),l=n(28276),c=n(25863),d=n(96692),h=n(8846),m=n(3730),g=n(69523),u=n(23555),p=n(92107);function b({tag:e}){let t=(0,l.ZD)(e);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.be,{title:t,description:e.description}),(0,i.jsx)(m.A,{tag:"blog_tags_posts"})]})}function x({tag:e,items:t,sidebar:n,listMetadata:s}){let r=(0,l.ZD)(e);return(0,i.jsxs)(d.A,{sidebar:n,children:[e.unlisted&&(0,i.jsx)(u.A,{}),(0,i.jsxs)("header",{className:"margin-bottom--xl",children:[(0,i.jsx)(p.A,{as:"h1",children:r}),e.description&&(0,i.jsx)("p",{children:e.description}),(0,i.jsx)(c.A,{href:e.allTagsPath,children:(0,i.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,i.jsx)(g.A,{items:t}),(0,i.jsx)(h.A,{metadata:s})]})}function v(e){return(0,i.jsxs)(r.e3,{className:(0,s.A)(o.G.wrapper.blogPages,o.G.page.blogTagPostListPage),children:[(0,i.jsx)(b,{...e}),(0,i.jsx)(x,{...e})]})}},23555(e,t,n){n.d(t,{A:()=>c});var i=n(74848);n(96540);var s=n(18215),a=n(96675),r=n(5678),o=n(39507);function l({className:e}){return(0,i.jsx)(o.A,{type:"caution",title:(0,i.jsx)(a.Rc,{}),className:(0,s.A)(e,r.G.common.unlistedBanner),children:(0,i.jsx)(a.Uh,{})})}function c(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.AE,{}),(0,i.jsx)(l,{...e})]})}},28276(e,t,n){n.d(t,{ZD:()=>a,uz:()=>r}),n(74848),n(96540);var i=n(33553),s=n(84792);function a(e){let t=function(){let{selectMessage:e}=(0,s.W)();return t=>e(t,(0,i.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,i.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}let r=()=>(0,i.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},96675(e,t,n){n.d(t,{AE:()=>l,Rc:()=>r,TT:()=>d,Uh:()=>o,Yh:()=>c});var i=n(74848);n(96540);var s=n(33553),a=n(83405);function r(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},9115(e,t,n){n.d(t,{A:()=>d});var i=n(74848);n(96540);var s=n(70758),a=n(99834),r=n(5414),o=n(13955);function l(e){let{colorMode:t}=(0,r.G)(),{type:n,category:s,categoryId:a}=e;return s="comments",a="DIC_kwDOF6hDGM4CSw_4",(0,i.jsx)(o.A,{id:"comments",repo:"XiGou/xigou.github.io",repoId:"MDEwOlJlcG9zaXRvcnkzOTY5MDMxOTI=",category:s,categoryId:a,term:"say something",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}var c=n(19087);function d(e){var t;let n,{metadata:r,isBlogPostPage:o}=(0,s.e7)(),{siteConfig:d}=(0,c.A)(),{frontMatter:h}=r;n=void 0===h.enableComments||h.enableComments;let m=d?.customFields?.blogExcerptLength??200,g=d?.customFields?.blogExcerptEllipsis??"...",u=(t=r.description,!t||t.length<=m?t:`${t.slice(0,m).trimEnd()}${g}`),p=o?e.children:(0,i.jsx)("p",{children:u});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{...e,children:p}),n&&o&&(0,i.jsx)(l,{})]})}},30614(e,t,n){n.d(t,{A:()=>d});var i=n(74848),s=n(96540),a=n(76893),r=n(20326),o=n(40961);function l({sourceData:e,language:t}){let n=(0,s.useId)().replace(/:/g,""),[a,r]=(0,s.useState)(!1),[c,h]=(0,s.useState)(0),[m,g]=(0,s.useState)(0),u=(0,s.useMemo)(()=>(function(e,t,n){let i=e.replace(/^\n+|\n+$/g,""),s=`
    <script>
      (function () {
        const frameId = ${JSON.stringify(t)};

        function sendHeight() {
          const body = document.body;
          const html = document.documentElement;
          const height = Math.max(
            body ? body.scrollHeight : 0,
            body ? body.offsetHeight : 0,
            html ? html.clientHeight : 0,
            html ? html.scrollHeight : 0,
            html ? html.offsetHeight : 0
          );

          parent.postMessage({ type: 'interactive-code-block:resize', frameId, height }, '*');
        }

        window.addEventListener('load', sendHeight);
        window.addEventListener('resize', sendHeight);

        const observer = new MutationObserver(() => sendHeight());
        observer.observe(document.documentElement, {
          attributes: true,
          childList: true,
          subtree: true,
          characterData: true
        });

        sendHeight();
        setTimeout(sendHeight, 60);
        setTimeout(sendHeight, 240);
      }());
    </script>
  `;if(/<(?:!doctype|html|head|body)\b/i.test(i))return/<\/body>/i.test(i)?i.replace(/<\/body>/i,`${s}</body>`):`${i}${s}`;let a="js"===n||"javascript"===n?`<script>${i}</script>`:i;return`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root {
        color-scheme: light dark;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        padding: 0;
      }

      body {
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        line-height: 1.5;
        padding: 1rem;
      }
    </style>
  </head>
  <body>
    ${a}
    ${s}
  </body>
</html>`})(e,n,t),[n,e,t]);(0,s.useEffect)(()=>{function e(){g(window.innerHeight)}function t(e){let t=e.data;t&&"object"==typeof t&&"interactive-code-block:resize"===t.type&&t.frameId===n&&"number"==typeof t.height&&h(Math.max(0,Math.ceil(t.height)))}return e(),window.addEventListener("message",t),window.addEventListener("resize",e),()=>{window.removeEventListener("message",t),window.removeEventListener("resize",e)}},[n]),(0,s.useEffect)(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]);let p=m>0?m:0,b=p>0&&c>.8*p?.8*p:c;return(0,i.jsxs)("div",{className:"interactive-wrapper",children:[(0,i.jsxs)("div",{className:"interactive-toolbar",children:[(0,i.jsxs)("div",{className:"interactive-toolbar__left",children:[(0,i.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"interactive-icon",children:(0,i.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})}),(0,i.jsx)("span",{className:"interactive-toolbar__label",children:"live block"})]}),(0,i.jsx)("button",{type:"button",className:"interactive-toolbar__button",onClick:()=>r(!0),children:"View Code"})]}),(0,i.jsx)("div",{className:"interactive-main",children:(0,i.jsx)("iframe",{className:"interactive-frame",title:"live block",sandbox:"allow-scripts",loading:"lazy",srcDoc:u,style:b>0?{height:`${b}px`}:{height:"100px"}})}),a&&(0,o.createPortal)((0,i.jsx)("div",{className:"interactive-modal-overlay",onClick:()=>r(!1),children:(0,i.jsxs)("div",{className:"interactive-modal-container",onClick:e=>e.stopPropagation(),children:[(0,i.jsxs)("div",{className:"interactive-modal-header",children:[(0,i.jsxs)("span",{className:"interactive-modal-title",children:["Source Code (",t??"html",")"]}),(0,i.jsx)("button",{type:"button",className:"interactive-modal-close",onClick:()=>r(!1),"aria-label":"Close",children:(0,i.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,i.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),(0,i.jsx)("div",{className:"interactive-modal-body",children:(0,i.jsx)(d,{language:t??"html",children:e})})]})}),document.body)]})}let c=["render-interactive","interactive"];function d(e){var t;let n,s=e.metastring??e.meta??e.node?.meta??e.node?.data?.meta??"";if(n=s.split(/\s+/),!c.some(e=>n.includes(e)))return(0,i.jsx)(r.A,{...e});let o="string"==typeof(t=e.children)?t:Array.isArray(t)?t.join(""):null;return null==o?(0,i.jsx)(r.A,{...e}):(0,i.jsx)("div",{className:"interactive-code-block",children:(0,i.jsx)(a.A,{fallback:(0,i.jsx)("div",{className:"interactive-code-block__fallback",children:"Loading interactive block..."}),children:()=>(0,i.jsx)(l,{sourceData:o,metastring:s,language:e.language})})})}}}]);