"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["7496"],{43238:function(e,t,n){n.r(t),n.d(t,{default:()=>x});var i=n(74848);n(96540);var s=n(77871),a=n(69034),r=n(59836),o=n(9783),l=n(97671),c=n(36033),d=n(91383),m=n(2436),h=n(69676),u=n(7931);function g(e){let t=(0,u.kJ)(e);return(0,i.jsx)(h.A,{children:(0,i.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){let{metadata:t}=e,{siteConfig:{title:n}}=(0,a.A)(),{blogDescription:s,blogTitle:o,permalink:l}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.be,{title:"/"===l?n:o,description:s}),(0,i.jsx)(d.A,{tag:"blog_posts_list"})]})}function b(e){let{metadata:t,items:n,sidebar:s}=e;return(0,i.jsxs)(l.A,{sidebar:s,children:[(0,i.jsx)(m.A,{items:n}),(0,i.jsx)(c.A,{metadata:t})]})}function x(e){return(0,i.jsxs)(r.e3,{className:(0,s.A)(o.G.wrapper.blogPages,o.G.page.blogListPage),children:[(0,i.jsx)(p,{...e}),(0,i.jsx)(g,{...e}),(0,i.jsx)(b,{...e})]})}},36033:function(e,t,n){n.d(t,{A:()=>r});var i=n(74848);n(96540);var s=n(79064),a=n(20718);function r(e){let{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.A,{permalink:n,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(a.A,{permalink:r,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},2436:function(e,t,n){n.d(t,{A:()=>r});var i=n(74848);n(96540);var s=n(7931),a=n(75580);function r({items:e,component:t=a.A}){return(0,i.jsx)(i.Fragment,{children:e.map(({content:e})=>(0,i.jsx)(s.in,{content:e,children:(0,i.jsx)(t,{children:(0,i.jsx)(e,{})})},e.metadata.permalink))})}},75580:function(e,t,n){n.d(t,{A:()=>d});var i=n(74848);n(96540);var s=n(7931),a=n(4027),r=n(34109),o=n(60331);function l(e){let{colorMode:t}=(0,r.G)(),{type:n,category:s,categoryId:a}=e;return s="comments",a="DIC_kwDOF6hDGM4CSw_4",(0,i.jsx)(o.A,{id:"comments",repo:"XiGou/xigou.github.io",repoId:"MDEwOlJlcG9zaXRvcnkzOTY5MDMxOTI=",category:s,categoryId:a,term:"say something",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}var c=n(69034);function d(e){var t;let n,{metadata:r,isBlogPostPage:o}=(0,s.e7)(),{siteConfig:d}=(0,c.A)(),{frontMatter:m}=r;n=void 0===m.enableComments||m.enableComments;let h=d?.customFields?.blogExcerptLength??200,u=d?.customFields?.blogExcerptEllipsis??"...",g=(t=r.description,!t||t.length<=h?t:`${t.slice(0,h).trimEnd()}${u}`),p=o?e.children:(0,i.jsx)("p",{children:g});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{...e,children:p}),n&&o&&(0,i.jsx)(l,{})]})}},92393:function(e,t,n){n.d(t,{A:()=>l});var i=n(74848),s=n(96540),a=n(63982),r=n(6671);function o({sourceData:e,metastring:t,language:n}){let a=(0,s.useId)().replace(/:/g,""),[r,o]=(0,s.useState)(!1),[l,c]=(0,s.useState)(220),d=(0,s.useMemo)(()=>(function(e,t){let n=e.replace(/^\n+|\n+$/g,""),i=`
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
</html>`})(e,a),[a,e]);return(0,s.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"interactive-code-block:resize"===t.type&&t.frameId===a&&"number"==typeof t.height&&c(Math.max(120,Math.ceil(t.height)))}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[a]),(0,i.jsxs)("section",{className:"interactive-runtime",children:[(0,i.jsxs)("div",{className:"interactive-runtime__header",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"interactive-runtime__eyebrow",children:"Self-contained fenced component"}),(0,i.jsx)("h3",{className:"interactive-runtime__title",children:"Rendered from inline HTML, CSS, and JS"})]}),(0,i.jsxs)("div",{className:"interactive-runtime__actions",children:[(0,i.jsxs)("span",{className:"interactive-runtime__meta",children:["language: ",n??"text"]}),(0,i.jsx)("button",{type:"button",className:"interactive-runtime__button",onClick:()=>o(e=>!e),children:r?"Hide source":"Show source"})]})]}),(0,i.jsx)("iframe",{className:"interactive-runtime__frame",title:"Interactive fenced code block preview",sandbox:"allow-scripts",loading:"lazy",srcDoc:d,style:{height:`${l}px`}}),r?(0,i.jsx)("pre",{className:"interactive-runtime__source",children:(0,i.jsx)("code",{children:e})}):null,(0,i.jsxs)("p",{className:"interactive-runtime__footer",children:["Meta string: ",t??"(none)"]})]})}function l(e){var t;let n=e.metastring??e.meta??e.node?.meta??e.node?.data?.meta??"";if(!n.split(/\s+/).includes("render-interactive"))return(0,i.jsx)(r.A,{...e});let s="string"==typeof(t=e.children)?t:Array.isArray(t)?t.join(""):null;return null==s?(0,i.jsx)(r.A,{...e}):(0,i.jsx)("div",{className:"interactive-code-block",children:(0,i.jsx)(a.A,{fallback:(0,i.jsx)("div",{className:"interactive-code-block__fallback",children:"Loading interactive block..."}),children:()=>(0,i.jsx)(o,{sourceData:s,metastring:n,language:e.language})})})}}}]);