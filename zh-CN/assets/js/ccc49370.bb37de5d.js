"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["6074"],{75580:function(e,t,n){n.d(t,{A:()=>d});var i=n(74848);n(96540);var s=n(7931),a=n(4027),r=n(34109),c=n(60331);function o(e){let{colorMode:t}=(0,r.G)(),{type:n,category:s,categoryId:a}=e;return s="comments",a="DIC_kwDOF6hDGM4CSw_4",(0,i.jsx)(c.A,{id:"comments",repo:"XiGou/xigou.github.io",repoId:"MDEwOlJlcG9zaXRvcnkzOTY5MDMxOTI=",category:s,categoryId:a,term:"say something",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}var l=n(69034);function d(e){var t;let n,{metadata:r,isBlogPostPage:c}=(0,s.e7)(),{siteConfig:d}=(0,l.A)(),{frontMatter:m}=r;n=void 0===m.enableComments||m.enableComments;let h=d?.customFields?.blogExcerptLength??200,u=d?.customFields?.blogExcerptEllipsis??"...",g=(t=r.description,!t||t.length<=h?t:`${t.slice(0,h).trimEnd()}${u}`),b=c?e.children:(0,i.jsx)("p",{children:g});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{...e,children:b}),n&&c&&(0,i.jsx)(o,{})]})}},92393:function(e,t,n){n.d(t,{A:()=>o});var i=n(74848),s=n(96540),a=n(63982),r=n(6671);function c({sourceData:e,metastring:t,language:n}){let a=(0,s.useId)().replace(/:/g,""),[r,c]=(0,s.useState)(!1),[o,l]=(0,s.useState)(220),d=(0,s.useMemo)(()=>(function(e,t){let n=e.replace(/^\n+|\n+$/g,""),i=`
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
  `;return/<(?:!doctype|html|head|body)\b/i.test(n)?/<\/body>/i.test(n)?n.replace(/<\/body>/i,`${i}</body>`):`${n}${i}`:`<!DOCTYPE html>
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
      }
    </style>
  </head>
  <body>
    ${n}
    ${i}
  </body>
</html>`})(e,a),[a,e]);return(0,s.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"interactive-code-block:resize"===t.type&&t.frameId===a&&"number"==typeof t.height&&l(Math.max(120,Math.ceil(t.height)))}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[a]),(0,i.jsxs)("section",{className:"interactive-runtime",children:[(0,i.jsxs)("div",{className:"interactive-runtime__header",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"interactive-runtime__eyebrow",children:"Self-contained fenced component"}),(0,i.jsx)("h3",{className:"interactive-runtime__title",children:"Rendered from inline HTML, CSS, and JS"})]}),(0,i.jsxs)("div",{className:"interactive-runtime__actions",children:[(0,i.jsxs)("span",{className:"interactive-runtime__meta",children:["language: ",n??"text"]}),(0,i.jsx)("button",{type:"button",className:"interactive-runtime__button",onClick:()=>c(e=>!e),children:r?"Hide source":"Show source"})]})]}),(0,i.jsx)("iframe",{className:"interactive-runtime__frame",title:"Interactive fenced code block preview",sandbox:"allow-scripts",loading:"lazy",srcDoc:d,style:{height:`${o}px`}}),r?(0,i.jsx)("pre",{className:"interactive-runtime__source",children:(0,i.jsx)("code",{children:e})}):null,(0,i.jsxs)("p",{className:"interactive-runtime__footer",children:["Meta string: ",t??"(none)"]})]})}function o(e){var t;let n=e.metastring??e.meta??e.node?.meta??e.node?.data?.meta??"";if(!n.split(/\s+/).includes("render-interactive"))return(0,i.jsx)(r.A,{...e});let s="string"==typeof(t=e.children)?t:Array.isArray(t)?t.join(""):null;return null==s?(0,i.jsx)(r.A,{...e}):(0,i.jsx)("div",{className:"interactive-code-block",children:(0,i.jsx)(a.A,{fallback:(0,i.jsx)("div",{className:"interactive-code-block__fallback",children:"Loading interactive block..."}),children:()=>(0,i.jsx)(c,{sourceData:s,metastring:n,language:e.language})})})}}}]);