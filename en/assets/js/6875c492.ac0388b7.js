(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[8610],{99703:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294),l=a(95999),r=a(32244);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.Z,{permalink:o,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79985:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294),l=a(9460),r=a(36157);function o(e){let{items:t,component:a=r.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},41714:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>E});var n=a(67294),l=a(86010),r=a(95999),o=a(88824),s=a(1944),i=a(35281),c=a(39960),g=a(39058),m=a(99703),u=a(90197),p=a(79985);function d(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function h(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(s.d,{title:a}),n.createElement(u.Z,{tag:"blog_tags_posts"}))}function b(e){let{tag:t,items:a,sidebar:l,listMetadata:o}=e;const s=d(t);return n.createElement(g.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,s),n.createElement(c.Z,{href:t.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(m.Z,{metadata:o}))}function E(e){return n.createElement(s.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(b,e))}},36157:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(67294),l=a(9460),r=a(30390),o=a(92949),s=a(99861);function i(e){const{colorMode:t}=(0,o.I)();let{type:a,category:l,categoryId:r}=e;return l="comments",r="DIC_kwDOF6hDGM4CSw_4",n.createElement(s.Z,{id:"comments",repo:"XiGou/xigou.github.io",repoId:"MDEwOlJlcG9zaXRvcnkzOTY5MDMxOTI=",category:l,categoryId:r,term:"say something",mapping:"title",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}var c=a(72389);function g(e){const{metadata:t}=(0,l.C)(),a=(0,c.Z)(),{frontMatter:o,slug:s,title:g}=t;var{enableComments:m}=o;void 0===m&&(m=!0);var u=!1;return a&&(u="/blog"===window.location.pathname||window.location.pathname.startsWith("/blog/page")),n.createElement(n.Fragment,null,n.createElement(r.Z,e),m&&!u&&n.createElement(i,null))}},11748:(e,t,a)=>{var n={"./locale":89234,"./locale.js":89234};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=11748}}]);