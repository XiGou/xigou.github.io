"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["2672"],{98156:function(n,e,s){s.r(e),s.d(e,{default:()=>x,frontMatter:()=>r,metadata:()=>c,assets:()=>d,toc:()=>a,contentTitle:()=>h});var c=JSON.parse('{"id":"Software-Usage/Git Format-Patch","title":"Git Format-Patch","description":"TL;DR;","source":"@site/knowledges/Software-Usage/Git Format-Patch.md","sourceDirName":"Software-Usage","slug":"/Software-Usage/Git Format-Patch","permalink":"/zh-CN/knowledges/Software-Usage/Git Format-Patch","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"readings","previous":{"title":"GNU Global","permalink":"/zh-CN/knowledges/Software-Usage/GNU Global"},"next":{"title":"Git GPG Signature","permalink":"/zh-CN/knowledges/Software-Usage/Git GPG Signature"}}'),l=s("85893"),i=s("50065");let r={},h=void 0,d={},a=[{value:"TL;DR;",id:"tldr",level:2},{value:"\u6B65\u9AA4 1\uFF1A\u5728\u6E90\u673A\u5668\u4E0A\u751F\u6210 Patch \u6587\u4EF6",id:"\u6B65\u9AA4-1\u5728\u6E90\u673A\u5668\u4E0A\u751F\u6210-patch-\u6587\u4EF6",level:3},{value:"\u4F7F\u7528 <code>git format-patch</code>",id:"\u4F7F\u7528-git-format-patch",level:4},{value:"\u6B65\u9AA4 2\uFF1A\u4F20\u8F93 Patch \u6587\u4EF6",id:"\u6B65\u9AA4-2\u4F20\u8F93-patch-\u6587\u4EF6",level:3},{value:"\u6B65\u9AA4 3\uFF1A\u5728\u76EE\u6807\u673A\u5668\u4E0A\u5E94\u7528 Patch \u6587\u4EF6",id:"\u6B65\u9AA4-3\u5728\u76EE\u6807\u673A\u5668\u4E0A\u5E94\u7528-patch-\u6587\u4EF6",level:3},{value:"\u4F7F\u7528 <code>git apply</code> \u6216 <code>git am</code>",id:"\u4F7F\u7528-git-apply-\u6216-git-am",level:4},{value:"\u51B2\u7A81",id:"\u51B2\u7A81",level:3},{value:"\u793A\u4F8B\u5B8C\u6574\u6D41\u7A0B",id:"\u793A\u4F8B\u5B8C\u6574\u6D41\u7A0B",level:3},{value:"\u6E90\u673A\u5668",id:"\u6E90\u673A\u5668",level:4},{value:"\u76EE\u6807\u673A\u5668",id:"\u76EE\u6807\u673A\u5668",level:4},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:3}];function t(n){let e={br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"tldr",children:"TL;DR;"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u751F\u6210 patch"}),"\uFF1A",(0,l.jsx)(e.code,{children:"git format-patch <commit-range>"}),"\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u4F20\u8F93"}),"\uFF1A\u624B\u52A8\u6216\u7528\u5DE5\u5177\uFF08\u5982 ",(0,l.jsx)(e.code,{children:"scp"}),"\uFF09\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5E94\u7528"}),"\uFF1A","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"git apply"}),"\uFF1A\u53EA\u5E94\u7528\u66F4\u6539\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"git am"}),"\uFF1A\u5E94\u7528\u5E76\u521B\u5EFA commit\uFF08\u63A8\u8350\uFF09\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u8FD9\u4E2A\u65B9\u6CD5\u7B80\u5355\u9AD8\u6548\uFF0C\u9002\u5408\u8DE8\u673A\u5668\u5171\u4EAB\u4EE3\u7801\u3002"}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:"\u5728 Git \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u5C06\u67D0\u4E2A commit \u8F6C\u6362\u4E3A patch \u6587\u4EF6\uFF0C\u7136\u540E\u4F20\u8F93\u5230\u53E6\u4E00\u53F0\u673A\u5668\u4E0A\u5E76\u5E94\u7528\uFF08apply\uFF09\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u901A\u5E38\u7528\u4E8E\u5728\u65E0\u6CD5\u76F4\u63A5\u63A8\u9001\uFF08push\uFF09\u6216\u62C9\u53D6\uFF08pull\uFF09\u7684\u60C5\u51B5\u4E0B\u5171\u4EAB\u66F4\u6539\uFF0C\u4F8B\u5982\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u6216\u624B\u52A8\u6587\u4EF6\u4F20\u8F93\u3002\u4EE5\u4E0B\u662F\u5177\u4F53\u7684\u6B65\u9AA4\u548C\u547D\u4EE4\uFF1A"}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"\u6B65\u9AA4-1\u5728\u6E90\u673A\u5668\u4E0A\u751F\u6210-patch-\u6587\u4EF6",children:"\u6B65\u9AA4 1\uFF1A\u5728\u6E90\u673A\u5668\u4E0A\u751F\u6210 Patch \u6587\u4EF6"}),"\n",(0,l.jsxs)(e.h4,{id:"\u4F7F\u7528-git-format-patch",children:["\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"git format-patch"})]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"git format-patch"})," \u662F\u4E13\u95E8\u7528\u6765\u5C06 commit \u8F6C\u6362\u4E3A patch \u6587\u4EF6\u7684\u547D\u4EE4\u3002\u6BCF\u4E2A patch \u6587\u4EF6\u4F1A\u5305\u542B commit \u7684\u5143\u6570\u636E\uFF08\u4F5C\u8005\u3001\u65E5\u671F\u3001\u6D88\u606F\u7B49\uFF09\u548C\u66F4\u6539\u5185\u5BB9\u3002"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u67E5\u770B\u76EE\u6807 commit"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B commit \u5386\u53F2\uFF0C\u627E\u5230\u4F60\u60F3\u8F6C\u6362\u7684 commit \u7684 SHA \u503C\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git log --oneline\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5047\u8BBE\u76EE\u6807 commit \u662F ",(0,l.jsx)(e.code,{children:"abc1234"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u751F\u6210 Patch \u6587\u4EF6"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u751F\u6210\u4ECE\u67D0\u4E2A commit \u5230 HEAD \u7684\u6240\u6709 patch\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git format-patch abc1234^..abc1234\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"abc1234^..abc1234"})," \u8868\u793A\u53EA\u5305\u542B ",(0,l.jsx)(e.code,{children:"abc1234"})," \u8FD9\u4E00\u4E2A commit\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:["\u8F93\u51FA\uFF1A\u751F\u6210\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4F8B\u5982 ",(0,l.jsx)(e.code,{children:"0001-Your-commit-message.patch"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5982\u679C\u60F3\u751F\u6210\u591A\u4E2A commit \u7684 patch\uFF0C\u4F8B\u5982\u4ECE ",(0,l.jsx)(e.code,{children:"abc1234"})," \u5230 ",(0,l.jsx)(e.code,{children:"def5678"}),"\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git format-patch abc1234..def5678\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8FD9\u4F1A\u751F\u6210\u591A\u4E2A patch \u6587\u4EF6\uFF08\u6BCF\u4E2A commit \u4E00\u4E2A\uFF09\uFF0C\u6587\u4EF6\u540D\u4EE5\u6570\u5B57\u9012\u589E\u5F00\u5934\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u68C0\u67E5 Patch \u6587\u4EF6"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u751F\u6210\u7684 patch \u6587\u4EF6\u662F\u6587\u672C\u683C\u5F0F\uFF0C\u53EF\u4EE5\u7528 ",(0,l.jsx)(e.code,{children:"cat"})," \u6216\u6587\u672C\u7F16\u8F91\u5668\u67E5\u770B\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"cat 0001-Your-commit-message.patch\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5185\u5BB9\u5305\u62EC commit \u4FE1\u606F\u548C diff\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"\u6B65\u9AA4-2\u4F20\u8F93-patch-\u6587\u4EF6",children:"\u6B65\u9AA4 2\uFF1A\u4F20\u8F93 Patch \u6587\u4EF6"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5C06\u751F\u6210\u7684 ",(0,l.jsx)(e.code,{children:".patch"})," \u6587\u4EF6\u4F20\u8F93\u5230\u76EE\u6807\u673A\u5668\uFF0C\u53EF\u4EE5\u901A\u8FC7\uFF1A","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"U \u76D8"}),"\uFF1A\u624B\u52A8\u590D\u5236\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"SCP"}),"\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"scp 0001-Your-commit-message.patch user@remote-machine:/path/to/destination\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u7535\u5B50\u90AE\u4EF6"}),"\uFF1A\u4F5C\u4E3A\u9644\u4EF6\u53D1\u9001\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4EFB\u4F55\u5176\u4ED6\u6587\u4EF6\u4F20\u8F93\u65B9\u5F0F\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"\u6B65\u9AA4-3\u5728\u76EE\u6807\u673A\u5668\u4E0A\u5E94\u7528-patch-\u6587\u4EF6",children:"\u6B65\u9AA4 3\uFF1A\u5728\u76EE\u6807\u673A\u5668\u4E0A\u5E94\u7528 Patch \u6587\u4EF6"}),"\n",(0,l.jsxs)(e.h4,{id:"\u4F7F\u7528-git-apply-\u6216-git-am",children:["\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"git apply"})," \u6216 ",(0,l.jsx)(e.code,{children:"git am"})]}),"\n",(0,l.jsx)(e.p,{children:"Git \u63D0\u4F9B\u4E86\u4E24\u79CD\u4E3B\u8981\u547D\u4EE4\u6765\u5E94\u7528 patch\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"git apply"})}),"\uFF1A\u53EA\u5E94\u7528 diff\uFF0C\u4E0D\u4FDD\u7559 commit \u5143\u6570\u636E\uFF08\u5982\u4F5C\u8005\u3001\u6D88\u606F\uFF09\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"git am"})}),"\uFF08apply mail\uFF09\uFF1A\u5E94\u7528 patch \u5E76\u521B\u5EFA\u5BF9\u5E94\u7684 commit\uFF0C\u4FDD\u7559\u5143\u6570\u636E\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5207\u6362\u5230\u76EE\u6807\u4ED3\u5E93"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u786E\u4FDD\u4F60\u5728\u76EE\u6807\u673A\u5668\u4E0A\u7684 Git \u4ED3\u5E93\u4E2D\uFF0C\u4E14\u5F53\u524D\u5206\u652F\u662F\u4F60\u60F3\u5E94\u7528 patch \u7684\u5206\u652F\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git checkout target-branch\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5E94\u7528 Patch"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsxs)(e.strong,{children:["\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"git apply"}),"\uFF08\u4E0D\u521B\u5EFA commit\uFF09"]}),"\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git apply /path/to/0001-Your-commit-message.patch\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u68C0\u67E5\u66F4\u6539\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git diff\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u624B\u52A8\u63D0\u4EA4\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:'git add .\ngit commit -m "Apply patch from abc1234"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsxs)(e.strong,{children:["\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"git am"}),"\uFF08\u63A8\u8350\uFF0C\u4FDD\u7559 commit \u4FE1\u606F\uFF09"]}),"\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git am /path/to/0001-Your-commit-message.patch\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u8FD9\u4F1A\u76F4\u63A5\u521B\u5EFA\u4E00\u4E2A\u65B0 commit\uFF0C\u4FDD\u7559\u539F\u59CB\u4F5C\u8005\u3001\u65E5\u671F\u548C\u6D88\u606F\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u6709\u591A\u4E2A patch \u6587\u4EF6\uFF0C\u6309\u987A\u5E8F\u5E94\u7528\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git am *.patch\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u9A8C\u8BC1"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u68C0\u67E5\u5E94\u7528\u540E\u7684\u5386\u53F2\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git log --oneline\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u786E\u4FDD\u66F4\u6539\u5DF2\u6B63\u786E\u5E94\u7528\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u51B2\u7A81",children:"\u51B2\u7A81"}),"\n",(0,l.jsxs)(e.p,{children:["\u4F7F\u7528 git apply \u7684 --reject \u9009\u9879\uFF08\u90E8\u5206\u5E94\u7528\uFF09",(0,l.jsx)(e.br,{}),"\n","git apply \u652F\u6301 --reject \u9009\u9879\uFF0C\u53EF\u4EE5\u8BA9\u5B83\u5C1D\u8BD5\u5E94\u7528\u80FD\u5339\u914D\u7684\u90E8\u5206\uFF0C\u5E76\u5C06\u65E0\u6CD5\u5E94\u7528\u7684\u90E8\u5206\u4FDD\u5B58\u4E3A .rej \u6587\u4EF6\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793A\u4F8B\u5B8C\u6574\u6D41\u7A0B",children:"\u793A\u4F8B\u5B8C\u6574\u6D41\u7A0B"}),"\n",(0,l.jsx)(e.h4,{id:"\u6E90\u673A\u5668",children:"\u6E90\u673A\u5668"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# \u67E5\u770B commit\ngit log --oneline\n# \u5047\u8BBE\u76EE\u6807 commit \u662F abc1234\ngit format-patch abc1234^..abc1234\n# \u751F\u6210 0001-My-commit-message.patch\n\n# \u4F20\u8F93\u5230\u76EE\u6807\u673A\u5668\nscp 0001-My-commit-message.patch user@remote:/home/user/patches/\n"})}),"\n",(0,l.jsx)(e.h4,{id:"\u76EE\u6807\u673A\u5668",children:"\u76EE\u6807\u673A\u5668"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# \u8FDB\u5165\u76EE\u6807\u4ED3\u5E93\ncd /path/to/repo\ngit checkout main\n\n# \u5E94\u7528 patch\ngit am /home/user/patches/0001-My-commit-message.patch\n\n# \u68C0\u67E5\ngit log --oneline\n"})}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u51B2\u7A81\u5904\u7406"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679C patch \u5E94\u7528\u65F6\u9047\u5230\u51B2\u7A81\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"git apply"})," \u4F1A\u62A5\u9519\u5E76\u505C\u6B62\uFF0C\u4F60\u9700\u8981\u624B\u52A8\u4FEE\u6539\u51B2\u7A81\u6587\u4EF6\uFF0C\u7136\u540E\u63D0\u4EA4\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"git am"})," \u4F1A\u6682\u505C\u5E76\u63D0\u793A\u51B2\u7A81\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git status  # \u67E5\u770B\u51B2\u7A81\n# \u89E3\u51B3\u51B2\u7A81\u540E\ngit add <file>\ngit am --continue\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u6216\u653E\u5F03\u5E94\u7528\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git am --abort\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u7F16\u7801\u95EE\u9898"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5982\u679C patch \u6587\u4EF6\u5305\u542B\u4E2D\u6587\uFF0C\u786E\u4FDD\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u7F16\u7801\u4E00\u81F4\uFF08\u901A\u5E38 UTF-8\uFF09\u3002\u53EF\u4EE5\u7528 ",(0,l.jsx)(e.code,{children:"file"})," \u68C0\u67E5\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"file 0001-My-commit-message.patch\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5206\u652F\u5339\u914D"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u786E\u4FDD\u76EE\u6807\u673A\u5668\u7684\u5F53\u524D\u5206\u652F\u72B6\u6001\u4E0E\u6E90\u673A\u5668\u7684\u57FA\u51C6\u72B6\u6001\u63A5\u8FD1\uFF0C\u5426\u5219 patch \u53EF\u80FD\u65E0\u6CD5\u5E94\u7528\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u6587\u4EF6\u540D\u81EA\u5B9A\u4E49"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u9ED8\u8BA4 patch \u6587\u4EF6\u540D\u57FA\u4E8E commit \u6D88\u606F\uFF0C\u53EF\u4EE5\u7528 ",(0,l.jsx)(e.code,{children:"-o"})," \u6307\u5B9A\u8F93\u51FA\u76EE\u5F55\u6216\u624B\u52A8\u91CD\u547D\u540D\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git format-patch abc1234^..abc1234 -o /path/to/patches\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function x(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(t,{...n})}):t(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return h},a:function(){return r}});var c=s(67294);let l={},i=c.createContext(l);function r(n){let e=c.useContext(i);return c.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),c.createElement(i.Provider,{value:e},n.children)}}}]);