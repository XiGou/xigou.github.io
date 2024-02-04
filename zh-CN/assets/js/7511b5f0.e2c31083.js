"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[7480],{36496:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(17624),i=t(4552);const r={layout:"post",title:"[Literature Reading] Modern Code Review: A Case Study at Google",date:new Date("2021-12-14T21:35:04.000Z"),tags:["Software Engineering"],authors:["xigou"]},s=void 0,a={permalink:"/zh-CN/blog/2021/12/14/Modern-Code-Review-A-Case-Study-at-Google",source:"@site/blog/2021-12-14-Modern-Code-Review-A-Case-Study-at-Google.md",title:"[Literature Reading] Modern Code Review: A Case Study at Google",description:"Recently, after called some code review meetings in my daily work, I got interested about code review practice, so I read this excellent article on the weekend.",date:"2021-12-14T21:35:04.000Z",formattedDate:"2021\u5e7412\u670814\u65e5",tags:[{label:"Software Engineering",permalink:"/zh-CN/blog/tags/software-engineering"}],readingTime:3.865,hasTruncateMarker:!0,authors:[{name:"XiGou",title:"Software Developer",url:"https://github.com/XiGou",imageURL:"https://avatars.githubusercontent.com/u/20839871?s=400&u=362e4a7ba8a851d17b434dc784fbef454d94170c&v=4",key:"xigou"}],frontMatter:{layout:"post",title:"[Literature Reading] Modern Code Review: A Case Study at Google",date:"2021-12-14T21:35:04.000Z",tags:["Software Engineering"],authors:["xigou"]},unlisted:!1,prevItem:{title:"\u4e3a\u4f60\u5199\u8bd7",permalink:"/zh-CN/blog/2022/01/21/poetry"},nextItem:{title:"Wireshark experements of Computer Networks: Top-Down Approach",permalink:"/zh-CN/blog/2020/09/04/Computer-Networks-Top-Down-Approach-s-wireshark-experements"}},d={authorsImageUrls:[void 0]},l=[{value:"Hisroty of code review practice",id:"hisroty-of-code-review-practice",level:2},{value:"This research answered three Research Questions about code review:",id:"this-research-answered-three-research-questions-about-code-review",level:2},{value:"RQ1: What are the motivations for code review at Google?",id:"rq1-what-are-the-motivations-for-code-review-at-google",level:3},{value:"RQ2: What is the practice of code review at Google?",id:"rq2-what-is-the-practice-of-code-review-at-google",level:3},{value:"Something interesting",id:"something-interesting",level:2},{value:"Write at the end",id:"write-at-the-end",level:2}];function c(e){const o={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Recently, after called some code review meetings in my daily work, I got interested about code review practice, so I read this excellent article on the weekend."}),"\n",(0,n.jsx)(o.h2,{id:"hisroty-of-code-review-practice",children:"Hisroty of code review practice"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Code Inspections"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"It's a very  structured process style code review, when developers finished code, they shoud working on planning, overview, preparation, inspection meeting, reworking, and follow-up for code review, reviewers and code authors will sitting in the same room, and they can talk with the author face to face to understand the code and find the defects."}),"\n",(0,n.jsxs)(o.ol,{start:"2",children:["\n",(0,n.jsx)(o.li,{children:"Asynchronous review via email"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:'Until the late 2000s, most large OSS projects adopted a form of remote, asynchronous reviews, relying on patches sent to communication channels such as mailing lists and issue tracking systems. So this method broke the limitations of "sitting toghter" and authors don\'t need to do a presentation to explain the code, instead they should explain the code in the length of one email.'}),"\n",(0,n.jsxs)(o.ol,{start:"3",children:["\n",(0,n.jsx)(o.li,{children:"Tool-based review"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"The main-streamd code review practice nowdays is tool-based, the representative of review systems are Gerrit, CodeFlow, ReviewBoard and Phabricator."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"Typical workflow of tool-based review"}),":"]}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"author submit code patch to review system,"}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"reviewers review code and post comment on specific lines of code,"}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"authors reply comments or submit new patch to review system,"}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"repeat step 2-3 until all reviewers or specific role of your team think the patch is ready for testing or merging."}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Pull-based development model"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"Mainly used in Github or similar code repo website, very similar to Tool-based review."}),"\n",(0,n.jsx)(o.h2,{id:"this-research-answered-three-research-questions-about-code-review",children:"This research answered three Research Questions about code review:"}),"\n",(0,n.jsx)(o.h3,{id:"rq1-what-are-the-motivations-for-code-review-at-google",children:"RQ1: What are the motivations for code review at Google?"}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Finding 1. Expectations for code review at Google do not center around problem solving. Reviewing was introduced at Google to ensure code readability and maintainability. Today\u2019s developers also perceive this educational aspect, in addition to maintaining norms, tracking history, gatekeeping, and accident prevention. Defect finding is welcomed but not the only focus."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"This is in line with my daily experience, when fixing bug it very useful to search for a similar bugfix patch in review system, and the review system contains some auto process to do static check and testing."}),"\n",(0,n.jsx)(o.p,{children:"Besides, The most important aim in business view is to grab out the knowledge out of the brain of the developer and make others easy to learn it, this makes every piece of code at least read by 2-3 employee inside organization, when some empolyee leave the organization, negative impact will be small."}),"\n",(0,n.jsx)(o.h3,{id:"rq2-what-is-the-practice-of-code-review-at-google",children:"RQ2: What is the practice of code review at Google?"}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Finding 3. The Google code review process is aligned with the convergent practice of being lightweight and flexible. In contrast to other studied systems, however, ownership and readability are explicit and play a key role. The review tool includes reviewer recommendation and code analysis result"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"The most impressive part for me is: In Google, every code directory has owner(a set of people), when you change the code of that directory, owner should review and approve the code."}),"\n",(0,n.jsx)(o.h2,{id:"something-interesting",children:"Something interesting"}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"At Google, over 35% of\nthe changes under consideration modify only a single file and\nabout 90% modify fewer than 10 files. Over 10% of changes\nmodify only a single line of code, and the median number of\nlines modified is 24. The median change size is significantly\nlower than reported by Rigby and Bird for companies such as\nAMD (44 lines), Lucent (263 lines), and Bing, Office and SQL\nServer at Microsoft (somewhere between those boundaries),\nbut in line for change sizes in open source projects."}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:'Even in big and fast-developing company like Google, most of the code modification is "small", when you usually need to change hundreds lines of code, that means something wrong with your company, please start to post your resume as soon as possible.'}),"\n",(0,n.jsx)(o.h2,{id:"write-at-the-end",children:"Write at the end"}),"\n",(0,n.jsx)(o.p,{children:"In my team now, I'd rather define the code review process as \"Tool-based Code Inspections\", we are using Gerrit to track code patch for review, but almost nobody will post comments or reply on it,  the reviewer have no interest to read others' code, developer should call a meeting and do a presentation to explain the code to reviewers, then reviewers will propose some comments in the meeting."}),"\n",(0,n.jsx)(o.h1,{id:"refs",children:"Refs"}),"\n",(0,n.jsx)("div",{id:"refer-anchor-1"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"[1] Caitlin Sadowski, Emma S\xf6derberg, Luke Church, Michal Sipko and Alberto Bacchelli. 2018. Modern Code Review: A Case Study at Google. In Proceedings of 40th International Conference on Software Engineering: Software Engineering in Practice Track, Gothenburg, Sweden, May 27-June 3, 2018 (ICSE-SEIP \u201918), 10 pages. DOI: 10.1145/3183519.3183525"}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,i.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,o,t)=>{t.d(o,{I:()=>a,M:()=>s});var n=t(11504);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);