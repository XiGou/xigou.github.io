"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["6074"],{9115(e,t,i){i.d(t,{A:()=>d});var n=i(74848);i(96540);var s=i(70758),o=i(99834),a=i(5414),r=i(13955);function l(e){let{colorMode:t}=(0,a.G)(),{type:i,category:s,categoryId:o}=e;return s="comments",o="DIC_kwDOF6hDGM4CSw_4",(0,n.jsx)(r.A,{id:"comments",repo:"XiGou/xigou.github.io",repoId:"MDEwOlJlcG9zaXRvcnkzOTY5MDMxOTI=",category:s,categoryId:o,term:"say something",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}var c=i(19087);function d(e){var t;let i,{metadata:a,isBlogPostPage:r}=(0,s.e7)(),{siteConfig:d}=(0,c.A)(),{frontMatter:h}=a;i=void 0===h.enableComments||h.enableComments;let m=d?.customFields?.blogExcerptLength??200,u=d?.customFields?.blogExcerptEllipsis??"...",g=(t=a.description,!t||t.length<=m?t:`${t.slice(0,m).trimEnd()}${u}`),v=r?e.children:(0,n.jsx)("p",{children:g});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{...e,children:v}),i&&r&&(0,n.jsx)(l,{})]})}},30614(e,t,i){i.d(t,{A:()=>d});var n=i(74848),s=i(96540),o=i(76893),a=i(20326),r=i(40961);function l({sourceData:e,language:t}){let i=(0,s.useId)().replace(/:/g,""),[o,a]=(0,s.useState)(!1),[c,h]=(0,s.useState)(0),[m,u]=(0,s.useState)(0),g=(0,s.useMemo)(()=>(function(e,t,i){let n=e.replace(/^\n+|\n+$/g,""),s=`
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
</html>`})(e,i,t),[i,e,t]);(0,s.useEffect)(()=>{function e(){u(window.innerHeight)}function t(e){let t=e.data;t&&"object"==typeof t&&"interactive-code-block:resize"===t.type&&t.frameId===i&&"number"==typeof t.height&&h(Math.max(0,Math.ceil(t.height)))}return e(),window.addEventListener("message",t),window.addEventListener("resize",e),()=>{window.removeEventListener("message",t),window.removeEventListener("resize",e)}},[i]),(0,s.useEffect)(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o]);let v=m>0?m:0,b=v>0&&c>.8*v?.8*v:c;return(0,n.jsxs)("div",{className:"interactive-wrapper",children:[(0,n.jsxs)("div",{className:"interactive-toolbar",children:[(0,n.jsxs)("div",{className:"interactive-toolbar__left",children:[(0,n.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"interactive-icon",children:(0,n.jsx)("polygon",{points:"5 3 19 12 5 21 5 3"})}),(0,n.jsx)("span",{className:"interactive-toolbar__label",children:"live block"})]}),(0,n.jsx)("button",{type:"button",className:"interactive-toolbar__button",onClick:()=>a(!0),children:"View Code"})]}),(0,n.jsx)("div",{className:"interactive-main",children:(0,n.jsx)("iframe",{className:"interactive-frame",title:"live block",sandbox:"allow-scripts",loading:"lazy",srcDoc:g,style:b>0?{height:`${b}px`}:{height:"100px"}})}),o&&(0,r.createPortal)((0,n.jsx)("div",{className:"interactive-modal-overlay",onClick:()=>a(!1),children:(0,n.jsxs)("div",{className:"interactive-modal-container",onClick:e=>e.stopPropagation(),children:[(0,n.jsxs)("div",{className:"interactive-modal-header",children:[(0,n.jsxs)("span",{className:"interactive-modal-title",children:["Source Code (",t??"html",")"]}),(0,n.jsx)("button",{type:"button",className:"interactive-modal-close",onClick:()=>a(!1),"aria-label":"Close",children:(0,n.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,n.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),(0,n.jsx)("div",{className:"interactive-modal-body",children:(0,n.jsx)(d,{language:t??"html",children:e})})]})}),document.body)]})}let c=["render-interactive","interactive"];function d(e){var t;let i,s=e.metastring??e.meta??e.node?.meta??e.node?.data?.meta??"";if(i=s.split(/\s+/),!c.some(e=>i.includes(e)))return(0,n.jsx)(a.A,{...e});let r="string"==typeof(t=e.children)?t:Array.isArray(t)?t.join(""):null;return null==r?(0,n.jsx)(a.A,{...e}):(0,n.jsx)("div",{className:"interactive-code-block",children:(0,n.jsx)(o.A,{fallback:(0,n.jsx)("div",{className:"interactive-code-block__fallback",children:"Loading interactive block..."}),children:()=>(0,n.jsx)(l,{sourceData:r,metastring:s,language:e.language})})})}}}]);