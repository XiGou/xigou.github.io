"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["7985"],{29656:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"CPP/Demangling compiled C++ names with c++filt","title":"Demangling compiled C++ names with c++filt","description":"IBM Documentation.","source":"@site/knowledges/CPP/Demangling compiled C++ names with c++filt.md","sourceDirName":"CPP","slug":"/CPP/Demangling compiled C++ names with c++filt","permalink":"/zh-CN/knowledges/CPP/Demangling compiled C++ names with c++filt","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"clippings","permalink":"/zh-CN/knowledges/tags/clippings"}],"version":"current","frontMatter":{"title":"Demangling compiled C++ names with c++filt","source":"https://www.ibm.com/docs/en/xl-c-and-cpp-aix/16.1?topic=names-demangling-compiled-c-cfilt","author":null,"published":"2024-01-26T00:00:00.000Z","created":"2025-02-13T00:00:00.000Z","description":"IBM Documentation.","tags":["clippings"]},"sidebar":"readings","previous":{"title":"SD \u5361 \u548C microSD \u5361\u901F\u5EA6\u7B49\u7EA7\u6307\u5357 - \u91D1\u58EB\u987F\u79D1\u6280","permalink":"/zh-CN/knowledges/3C/SD \u5361 \u548C microSD \u5361\u901F\u5EA6\u7B49\u7EA7\u6307\u5357 - \u91D1\u58EB\u987F\u79D1\u6280"},"next":{"title":"Dev Env Setup","permalink":"/zh-CN/knowledges/CPP/Dev Env Setup"}}'),a=i("85893"),s=i("50065");let l={title:"Demangling compiled C++ names with c++filt",source:"https://www.ibm.com/docs/en/xl-c-and-cpp-aix/16.1?topic=names-demangling-compiled-c-cfilt",author:null,published:new Date("2024-01-26T00:00:00.000Z"),created:new Date("2025-02-13T00:00:00.000Z"),description:"IBM Documentation.",tags:["clippings"]},c=void 0,o={},d=[{value:"c++filt command syntaxRead syntax diagramSkip visual syntax diagram",id:"cfilt-command-syntaxread-syntax-diagramskip-visual-syntax-diagram",level:2}];function r(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The c++filt utility is a filter that copies characters from file names or standard input to standard output, replacing all mangled names with their corresponding demangled names. You can use the filter directly with file name arguments, and the filter outputs the demangled names of all mangled names in the files; or you can use a shell command that inputs text, such as specific mangled names, and pipe it to the filter, so that the filter provides the demangled names of the names you specified."}),"\n",(0,a.jsxs)(n.h2,{id:"cfilt-command-syntaxread-syntax-diagramskip-visual-syntax-diagram",children:["c++filt command syntax",(0,a.jsx)(n.img,{src:"https://www.ibm.com/docs/en/SSGH3R_16.1.0/c.gif",alt:"Read syntax diagram"}),(0,a.jsx)(n.a,{href:"https://www.ibm.com/docs/en/xl-c-and-cpp-aix/?topic=names-demangling-compiled-c-cfilt#skip",children:(0,a.jsx)(n.img,{src:"https://www.ibm.com/docs/en/SSGH3R_16.1.0/c.gif",alt:"Skip visual syntax diagram"})})]}),"\n",(0,a.jsx)(n.p,{children:"You can specify one or more of the following options:"}),"\n",(0,a.jsx)(n.p,{children:"-m"}),"\n",(0,a.jsx)(n.p,{children:"Produces a symbol map, containing a side-by-side listing of demangled names in the left column and their corresponding mangled names in the right column."}),"\n",(0,a.jsx)(n.p,{children:"-s"}),"\n",(0,a.jsx)(n.p,{children:"Produces a continuous listing of each demangled name followed immediately by its mangled name."}),"\n",(0,a.jsxs)(n.p,{children:["-w ",(0,a.jsx)(n.em,{children:"width"})]}),"\n",(0,a.jsx)(n.p,{children:"Prints demangled names in fields width characters wide. If the name is shorter than width, it is padded on the right with blanks; if longer, it is truncated to width."}),"\n",(0,a.jsx)(n.p,{children:"-C"}),"\n",(0,a.jsxs)(n.p,{children:["Demangles standalone class names, such as ",(0,a.jsx)(n.code,{children:"Q2_1X1Y"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"-S"}),"\n",(0,a.jsxs)(n.p,{children:["Demangles special compiler-generated symbol names, such as",(0,a.jsx)(n.code,{children:" __vft1X"})," (represents a virtual function)."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"filename"})}),"\n",(0,a.jsx)(n.p,{children:"Is the name of the file containing the mangled names you want to demangle. You can specify more than one file name."}),"\n",(0,a.jsxs)(n.p,{children:["For example, the following command shows the symbols contained in an object file ",(0,a.jsx)(n.code,{children:"functions.o"}),", producing a side-by-side listing of the mangled and demangled names with a field width of 40 characters:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"c++filt -m -w 40 functions.o\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output is displayed as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"C++ Symbol Mapping\ndemangled:                              Mangled:\n\nAverage::insertValue(double)            insertValue__7AverageFd\nAverage::getCount()                     getCount__7AverageFv\nAverage::getTotal()                     getTotal__7AverageFv\nAverage::getAverage()                   getAverage__7AverageFv\n"})}),"\n",(0,a.jsx)(n.p,{children:"The following command shows the demangled name immediately followed by the mangled name:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"echo getAverage__7AverageFv | c++filt -s\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output is displayed as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Average::getAverage()getAverage__7AverageFv\n"})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return l}});var t=i(67294);let a={},s=t.createContext(a);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);