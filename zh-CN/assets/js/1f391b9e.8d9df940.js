"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["7182"],{92393:function(e,t,i){i.d(t,{A:()=>o});var n=i(74848),s=i(96540),a=i(63982),r=i(6671);function c({sourceData:e,metastring:t,language:i}){let a=(0,s.useId)().replace(/:/g,""),[r,c]=(0,s.useState)(!1),[o,l]=(0,s.useState)(220),d=(0,s.useMemo)(()=>(function(e,t){let i=e.replace(/^\n+|\n+$/g,""),n=`
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
  `;return/<(?:!doctype|html|head|body)\b/i.test(i)?/<\/body>/i.test(i)?i.replace(/<\/body>/i,`${n}</body>`):`${i}${n}`:`<!DOCTYPE html>
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
    ${i}
    ${n}
  </body>
</html>`})(e,a),[a,e]);return(0,s.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"interactive-code-block:resize"===t.type&&t.frameId===a&&"number"==typeof t.height&&l(Math.max(120,Math.ceil(t.height)))}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[a]),(0,n.jsxs)("section",{className:"interactive-runtime",children:[(0,n.jsxs)("div",{className:"interactive-runtime__header",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"interactive-runtime__eyebrow",children:"Self-contained fenced component"}),(0,n.jsx)("h3",{className:"interactive-runtime__title",children:"Rendered from inline HTML, CSS, and JS"})]}),(0,n.jsxs)("div",{className:"interactive-runtime__actions",children:[(0,n.jsxs)("span",{className:"interactive-runtime__meta",children:["language: ",i??"text"]}),(0,n.jsx)("button",{type:"button",className:"interactive-runtime__button",onClick:()=>c(e=>!e),children:r?"Hide source":"Show source"})]})]}),(0,n.jsx)("iframe",{className:"interactive-runtime__frame",title:"Interactive fenced code block preview",sandbox:"allow-scripts",loading:"lazy",srcDoc:d,style:{height:`${o}px`}}),r?(0,n.jsx)("pre",{className:"interactive-runtime__source",children:(0,n.jsx)("code",{children:e})}):null,(0,n.jsxs)("p",{className:"interactive-runtime__footer",children:["Meta string: ",t??"(none)"]})]})}function o(e){var t;let i=e.metastring??e.meta??e.node?.meta??e.node?.data?.meta??"";if(!i.split(/\s+/).includes("render-interactive"))return(0,n.jsx)(r.A,{...e});let s="string"==typeof(t=e.children)?t:Array.isArray(t)?t.join(""):null;return null==s?(0,n.jsx)(r.A,{...e}):(0,n.jsx)("div",{className:"interactive-code-block",children:(0,n.jsx)(a.A,{fallback:(0,n.jsx)("div",{className:"interactive-code-block__fallback",children:"Loading interactive block..."}),children:()=>(0,n.jsx)(c,{sourceData:s,metastring:i,language:e.language})})})}}}]);