"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["8385"],{36033:function(e,t,n){n.d(t,{A:()=>r});var i=n(74848);n(96540);var s=n(79064),a=n(20718);function r(e){let{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.A,{permalink:n,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(a.A,{permalink:r,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},2436:function(e,t,n){n.d(t,{A:()=>r});var i=n(74848);n(96540);var s=n(7931),a=n(75580);function r({items:e,component:t=a.A}){return(0,i.jsx)(i.Fragment,{children:e.map(({content:e})=>(0,i.jsx)(s.in,{content:e,children:(0,i.jsx)(t,{children:(0,i.jsx)(e,{})})},e.metadata.permalink))})}},66573:function(e,t,n){n.r(t),n.d(t,{default:()=>x});var i=n(74848);n(96540);var s=n(77871),a=n(79064),r=n(59836),l=n(9783),o=n(83981),c=n(77478),d=n(97671),h=n(36033),u=n(91383),m=n(2436),g=n(89226),p=n(13408);function b({tag:e}){let t=(0,o.ZD)(e);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.be,{title:t,description:e.description}),(0,i.jsx)(u.A,{tag:"blog_tags_posts"})]})}function f({tag:e,items:t,sidebar:n,listMetadata:s}){let r=(0,o.ZD)(e);return(0,i.jsxs)(d.A,{sidebar:n,children:[e.unlisted&&(0,i.jsx)(g.A,{}),(0,i.jsxs)("header",{className:"margin-bottom--xl",children:[(0,i.jsx)(p.A,{as:"h1",children:r}),e.description&&(0,i.jsx)("p",{children:e.description}),(0,i.jsx)(c.A,{href:e.allTagsPath,children:(0,i.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,i.jsx)(m.A,{items:t}),(0,i.jsx)(h.A,{metadata:s})]})}function x(e){return(0,i.jsxs)(r.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,i.jsx)(b,{...e}),(0,i.jsx)(f,{...e})]})}},89226:function(e,t,n){n.d(t,{A:()=>c});var i=n(74848);n(96540);var s=n(77871),a=n(40596),r=n(9783),l=n(85152);function o({className:e}){return(0,i.jsx)(l.A,{type:"caution",title:(0,i.jsx)(a.Rc,{}),className:(0,s.A)(e,r.G.common.unlistedBanner),children:(0,i.jsx)(a.Uh,{})})}function c(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.AE,{}),(0,i.jsx)(o,{...e})]})}},83981:function(e,t,n){n.d(t,{ZD:()=>a,uz:()=>r}),n(74848),n(96540);var i=n(79064),s=n(16953);function a(e){let t=function(){let{selectMessage:e}=(0,s.W)();return t=>e(t,(0,i.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,i.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}let r=()=>(0,i.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},40596:function(e,t,n){n.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});var i=n(74848);n(96540);var s=n(79064),a=n(69676);function r(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(a.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},75580:function(e,t,n){n.d(t,{A:()=>d});var i=n(74848);n(96540);var s=n(7931),a=n(4027),r=n(34109),l=n(60331);function o(e){let{colorMode:t}=(0,r.G)(),{type:n,category:s,categoryId:a}=e;return s="comments",a="DIC_kwDOF6hDGM4CSw_4",(0,i.jsx)(l.A,{id:"comments",repo:"XiGou/xigou.github.io",repoId:"MDEwOlJlcG9zaXRvcnkzOTY5MDMxOTI=",category:s,categoryId:a,term:"say something",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}var c=n(69034);function d(e){var t;let n,{metadata:r,isBlogPostPage:l}=(0,s.e7)(),{siteConfig:d}=(0,c.A)(),{frontMatter:h}=r;n=void 0===h.enableComments||h.enableComments;let u=d?.customFields?.blogExcerptLength??200,m=d?.customFields?.blogExcerptEllipsis??"...",g=(t=r.description,!t||t.length<=u?t:`${t.slice(0,u).trimEnd()}${m}`),p=l?e.children:(0,i.jsx)("p",{children:g});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{...e,children:p}),n&&l&&(0,i.jsx)(o,{})]})}},92393:function(e,t,n){n.d(t,{A:()=>o});var i=n(74848),s=n(96540),a=n(63982),r=n(6671);function l({sourceData:e,metastring:t,language:n}){let a=(0,s.useId)().replace(/:/g,""),[r,l]=(0,s.useState)(!1),[o,c]=(0,s.useState)(220),d=(0,s.useMemo)(()=>(function(e,t){let n=e.replace(/^\n+|\n+$/g,""),i=`
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
</html>`})(e,a),[a,e]);return(0,s.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"interactive-code-block:resize"===t.type&&t.frameId===a&&"number"==typeof t.height&&c(Math.max(120,Math.ceil(t.height)))}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[a]),(0,i.jsxs)("section",{className:"interactive-runtime",children:[(0,i.jsxs)("div",{className:"interactive-runtime__header",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"interactive-runtime__eyebrow",children:"Self-contained fenced component"}),(0,i.jsx)("h3",{className:"interactive-runtime__title",children:"Rendered from inline HTML, CSS, and JS"})]}),(0,i.jsxs)("div",{className:"interactive-runtime__actions",children:[(0,i.jsxs)("span",{className:"interactive-runtime__meta",children:["language: ",n??"text"]}),(0,i.jsx)("button",{type:"button",className:"interactive-runtime__button",onClick:()=>l(e=>!e),children:r?"Hide source":"Show source"})]})]}),(0,i.jsx)("iframe",{className:"interactive-runtime__frame",title:"Interactive fenced code block preview",sandbox:"allow-scripts",loading:"lazy",srcDoc:d,style:{height:`${o}px`}}),r?(0,i.jsx)("pre",{className:"interactive-runtime__source",children:(0,i.jsx)("code",{children:e})}):null,(0,i.jsxs)("p",{className:"interactive-runtime__footer",children:["Meta string: ",t??"(none)"]})]})}function o(e){var t;let n=e.metastring??e.meta??e.node?.meta??e.node?.data?.meta??"";if(!n.split(/\s+/).includes("render-interactive"))return(0,i.jsx)(r.A,{...e});let s="string"==typeof(t=e.children)?t:Array.isArray(t)?t.join(""):null;return null==s?(0,i.jsx)(r.A,{...e}):(0,i.jsx)("div",{className:"interactive-code-block",children:(0,i.jsx)(a.A,{fallback:(0,i.jsx)("div",{className:"interactive-code-block__fallback",children:"Loading interactive block..."}),children:()=>(0,i.jsx)(l,{sourceData:s,metastring:n,language:e.language})})})}}}]);