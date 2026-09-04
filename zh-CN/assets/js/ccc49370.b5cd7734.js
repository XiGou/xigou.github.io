"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["6074"],{9115(e,t,i){i.d(t,{A:()=>d});var n=i(74848);i(96540);var s=i(70758),o=i(99834),r=i(5414),a=i(13955);function l(e){let{colorMode:t}=(0,r.G)(),{type:i,category:s,categoryId:o}=e;return s="comments",o="DIC_kwDOF6hDGM4CSw_4",(0,n.jsx)(a.A,{id:"comments",repo:"XiGou/xigou.github.io",repoId:"MDEwOlJlcG9zaXRvcnkzOTY5MDMxOTI=",category:s,categoryId:o,term:"say something",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}var c=i(19087);function d(e){var t;let i,{metadata:r,isBlogPostPage:a}=(0,s.e7)(),{siteConfig:d}=(0,c.A)(),{frontMatter:m}=r;i=void 0===m.enableComments||m.enableComments;let h=d?.customFields?.blogExcerptLength??200,u=d?.customFields?.blogExcerptEllipsis??"...",g=(t=r.description,!t||t.length<=h?t:`${t.slice(0,h).trimEnd()}${u}`),p=a?e.children:(0,n.jsx)("p",{children:g});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{...e,children:p}),i&&a&&(0,n.jsx)(l,{})]})}},32866(e,t,i){i.d(t,{A:()=>a});var n=i(74848);i(96540);var s=i(64329),o=i(70758),r=i(75120);function a(){let{assets:e,metadata:t}=(0,o.e7)(),{title:i,description:a,date:l,tags:c,authors:d,frontMatter:m}=t,{keywords:h}=m,u=e.image??m.image,g=m.title_meta??i;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.be,{title:g,description:a,keywords:h,image:u,children:[(0,n.jsx)("meta",{property:"og:type",content:"article"}),(0,n.jsx)("meta",{property:"article:published_time",content:l}),d.some(e=>e.url)&&(0,n.jsx)("meta",{property:"article:author",content:d.map(e=>e.url).filter(Boolean).join(",")}),c.length>0&&(0,n.jsx)("meta",{property:"article:tag",content:c.map(e=>e.label).join(",")})]}),(0,n.jsx)(r.A,{title:g,description:a})]})}},30614(e,t,i){i.d(t,{A:()=>d});var n=i(74848),s=i(96540),o=i(76893),r=i(20326),a=i(40961);function l({sourceData:e,language:t}){let i=(0,s.useId)().replace(/:/g,""),[o,r]=(0,s.useState)(!1),[c,m]=(0,s.useState)(0),[h,u]=(0,s.useState)(0),g=(0,s.useMemo)(()=>(function(e,t,i){let n=e.replace(/^\n+|\n+$/g,""),s=`
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
  `;if(/<(?:!doctype|html|head|body)\b/i.test(n))return/<\/body>/i.test(n)?n.replace(/<\/body>/i,`${s}</body>`):`${n}${s}`;let o="js"===i||"javascript"===i?`<script>${n}</script>`:n;return`<!DOCTYPE html>
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
    ${o}
    ${s}
  </body>
</html>`})(e,i,t),[i,e,t]);(0,s.useEffect)(()=>{function e(){u(window.innerHeight)}function t(e){let t=e.data;t&&"object"==typeof t&&"interactive-code-block:resize"===t.type&&t.frameId===i&&"number"==typeof t.height&&m(Math.max(0,Math.ceil(t.height)))}return e(),window.addEventListener("message",t),window.addEventListener("resize",e),()=>{window.removeEventListener("message",t),window.removeEventListener("resize",e)}},[i]),(0,s.useEffect)(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o]);let p=h>0?h:0,v=p>0&&c>.8*p?.8*p:c;return(0,n.jsxs)("div",{className:"interactive-wrapper",children:[(0,n.jsxs)("div",{className:"interactive-toolbar",children:[(0,n.jsxs)("div",{className:"interactive-toolbar__left",children:[(0,n.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"interactive-icon",children:(0,n.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})}),(0,n.jsx)("span",{className:"interactive-toolbar__label",children:"live block"})]}),(0,n.jsx)("button",{type:"button",className:"interactive-toolbar__button",onClick:()=>r(!0),children:"View Code"})]}),(0,n.jsx)("div",{className:"interactive-main",children:(0,n.jsx)("iframe",{className:"interactive-frame",title:"live block",sandbox:"allow-scripts",loading:"lazy",srcDoc:g,style:v>0?{height:`${v}px`}:{height:"100px"}})}),o&&(0,a.createPortal)((0,n.jsx)("div",{className:"interactive-modal-overlay",onClick:()=>r(!1),children:(0,n.jsxs)("div",{className:"interactive-modal-container",onClick:e=>e.stopPropagation(),children:[(0,n.jsxs)("div",{className:"interactive-modal-header",children:[(0,n.jsxs)("span",{className:"interactive-modal-title",children:["Source Code (",t??"html",")"]}),(0,n.jsx)("button",{type:"button",className:"interactive-modal-close",onClick:()=>r(!1),"aria-label":"Close",children:(0,n.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,n.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),(0,n.jsx)("div",{className:"interactive-modal-body",children:(0,n.jsx)(d,{language:t??"html",children:e})})]})}),document.body)]})}let c=["render-interactive","interactive"];function d(e){var t;let i,s=e.metastring??e.meta??e.node?.meta??e.node?.data?.meta??"";if(i=s.split(/\s+/),!c.some(e=>i.includes(e)))return(0,n.jsx)(r.A,{...e});let a="string"==typeof(t=e.children)?t:Array.isArray(t)?t.join(""):null;return null==a?(0,n.jsx)(r.A,{...e}):(0,n.jsx)("div",{className:"interactive-code-block",children:(0,n.jsx)(o.A,{fallback:(0,n.jsx)("div",{className:"interactive-code-block__fallback",children:"Loading interactive block..."}),children:()=>(0,n.jsx)(l,{sourceData:a,metastring:s,language:e.language})})})}}}]);