"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[2159],{24516:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(74848),a=o(28453);const r={layout:"post",title:"Open Source Project Review: Convert command line to Web App with Wooey",date:new Date("2022-11-19T09:35:04.000Z"),tags:["Software Practice"],authors:["xigou"]},i=void 0,s={permalink:"/blog/2022/11/19/convert-cmd-web-wooey",source:"@site/blog/2022-11-19-convert-cmd-web-wooey.md",title:"Open Source Project Review: Convert command line to Web App with Wooey",description:"There is a problem always annoying the software developer: How to deliver your software to your user?",date:"2022-11-19T09:35:04.000Z",tags:[{inline:!0,label:"Software Practice",permalink:"/blog/tags/software-practice"}],readingTime:5.685,hasTruncateMarker:!0,authors:[{name:"XiGou",title:"Software Developer",url:"https://github.com/XiGou",imageURL:"https://avatars.githubusercontent.com/u/20839871?s=400&u=362e4a7ba8a851d17b434dc784fbef454d94170c&v=4",key:"xigou",page:null}],frontMatter:{layout:"post",title:"Open Source Project Review: Convert command line to Web App with Wooey",date:"2022-11-19T09:35:04.000Z",tags:["Software Practice"],authors:["xigou"]},unlisted:!1,prevItem:{title:"\u957f\u8005\u6b7b\u4e86\uff0c\u6211\u7684\u9752\u5e74\u65f6\u4ee3\u4e5f\u6b7b\u4e86",permalink:"/blog/2022/11/30/jiangzemin-dead"},nextItem:{title:"\u771f\u6b63\u7684\u6838\u9178\u7231\u597d\u8005\uff1a\u4e00\u5929\u505a\u4e94\u6b21",permalink:"/blog/2022/11/13/finish-5-covid-test-in-one-day"}},c={authorsImageUrls:[void 0]},l=[{value:"What Makes Command Line Tool Hard to Use?",id:"what-makes-command-line-tool-hard-to-use",level:2},{value:"Complicated Dependencies",id:"complicated-dependencies",level:3},{value:"Has No Graphical User Interface",id:"has-no-graphical-user-interface",level:3},{value:"How to Convert Command Line to Web App",id:"how-to-convert-command-line-to-web-app",level:2},{value:"Wooey: A Script Server Matches All Our Needs",id:"wooey-a-script-server-matches-all-our-needs",level:2},{value:"Step By Step Solution",id:"step-by-step-solution",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"There is a problem always annoying the software developer: How to deliver your software to your user?"}),"\n",(0,n.jsx)(t.p,{children:"Recently, I wrote a tool for internal use,  It is implemented in Python , and packaged as a command line program, I think it is esay enough for me to use, but the reality is cruel,  not all the target user have technical background, the feedback is they all think it is hard to use it. when they need to use it, they would definitely asking me to support them again and again,  so the software I developed became a nightmare of mine."}),"\n",(0,n.jsx)(t.p,{children:"I have to think about what is best way to deliver software to end user, if you are working om a big project you don't need to think about this, because their softwares are complicated and have a very mature deploy or delivery pipeline, you just working on a narrow stage of this  pipeline. But I have to, now."}),"\n",(0,n.jsx)(t.h2,{id:"what-makes-command-line-tool-hard-to-use",children:"What Makes Command Line Tool Hard to Use?"}),"\n",(0,n.jsx)(t.h3,{id:"complicated-dependencies",children:"Complicated Dependencies"}),"\n",(0,n.jsx)(t.p,{children:"Some colleagues cannot even install it, because the user enviroment are different, and my tool depends on a Python3.7 and some Pypi packages, cause Python3.7 is not the default python version for most linux distributions, so the user need to install it by themselves, it is a hard task for user without a technical background.\nThis issue is easy to resolve, docker is a powerful weapon deal with the dependencies, I packaged my tool into a docker image with all the dependencies in, then I just need to told the user how to download the image and run it."}),"\n",(0,n.jsx)(t.h3,{id:"has-no-graphical-user-interface",children:"Has No Graphical User Interface"}),"\n",(0,n.jsx)(t.p,{children:"It's already 21st century now, Most people living in this century don't have a chance to use the command line. Many software deliver with a cross platform and user-friendly GUI, Software as-a Service is the main-stream delivery pattern, you don\u2019t even need to install a software, you can just open a Web page and start to use it.  So the best choice is to provide a GUI with my command line tool, It would be better to provide my Command Line as-a Service."}),"\n",(0,n.jsx)(t.h2,{id:"how-to-convert-command-line-to-web-app",children:"How to Convert Command Line to Web App"}),"\n",(0,n.jsx)(t.p,{children:"So what we need to do now is clear: Convert command line to Web App."}),"\n",(0,n.jsx)(t.p,{children:"But how to do it? As experienced software engineer, you may open your flowchart drawing software and the start to design the architecture of a backend and front-end separated software architecture, you should choose a database: relational or documentary oriented, you must choose a backend programming language: Node.js or Python, you need to write a restful API by youself, finally you also need to implement a GUI As a Single-paged WebApp or Desktop GUI."}),"\n",(0,n.jsx)(t.p,{children:"It sounds like a struggling work, and I refuse to do this, I need to find an easy way to achieve this goal: convert our command line to a web application, and the user can just click to set the arguments of the command line and the click submit button to run the tool. The most important thing is we don\u2019t need to write too much code."}),"\n",(0,n.jsx)(t.h2,{id:"wooey-a-script-server-matches-all-our-needs",children:"Wooey: A Script Server Matches All Our Needs"}),"\n",(0,n.jsx)(t.p,{children:"I searched on the internet and tried many projects. Finally I found it, it's Wooey."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/wooey/wooey",children:"https://github.com/wooey/wooey"})}),"\n",(0,n.jsx)(t.p,{children:"The command line tool is something like this, you can run it through the shell with specified arguments, and you can press Enter to execute it, the program will run for sometime and generate some file or print something to the console."}),"\n",(0,n.jsx)(t.p,{children:"Firstly we package it into a docker image, just makes the command line can run anywhere, and the user don't need to worry about the dependencies"}),"\n",(0,n.jsx)(t.p,{children:"The Wooey introduced itself as \u201ca simple web interface to run command line Python scripts\u201d, through Python we have the ability to run any command line program which installed inside operating system, if we write a script as wrapper for our command line and upload it to the wooey server, it will automatically transform our script to a Web App, that is what we all need!"}),"\n",(0,n.jsx)(t.h2,{id:"step-by-step-solution",children:"Step By Step Solution"}),"\n",(0,n.jsx)(t.p,{children:"To keep things simple, assume your command line tool is equivalent to shell commands below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sleep 10\necho $text\ntouch $file\n"})}),"\n",(0,n.jsx)(t.p,{children:"the arguments are text and file, this \u201ccommand line\u201d will sleep 10 second, then echo the text and create an empty file."}),"\n",(0,n.jsx)(t.p,{children:"We write a simple script to wrap it as a Python command line program:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'# file name is wooey_entry_cmd.py\nimport argparse\nimport subprocess\nimport sys\n\nparser = argparse.ArgumentParser(description="my cmd tool.")\nparser.add_argument("--text", help="anything", type=str, default="nothing")\nparser.add_argument("--output", help="file name", type=str, default="output")\n\ndef main():\n    args = parser.parse_args()\n    subprocess.run(["sleep", "10"])\n    subprocess.run(["echo", args.text])\n    subprocess.run(["touch", args.output])\n    return 0\n\nif __name__ == "__main__":\n    sys.exit(main())\n'})}),"\n",(0,n.jsx)(t.p,{children:"Then we write the Dockerfile to package our command line tool and the wooey project toghter as a docker image, and convert our Python script to a Web App through the wooey provided tool."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Dockerfile",children:"FROM python:3.7 as cmd\n# install you command tool here\n# we use linux pre installed command, skip this\n\nFROM cmd as wooey_ui\nWORKDIR /cmd2web_wooey\nRUN pip3.7 install wooey \\\n    && wooify -p cmd2web_wooey\nCOPY ./wooey_entry_cmd.py ./cmd2web_wooey/wooey_entry_cmd.py\nCOPY ./start_wooey.sh ./cmd2web_wooey/start_wooey.sh\nRUN cd cmd2web_wooey \\\n    && sed -i \"s/ALLOWED_HOSTS = \\[\\]/ALLOWED_HOSTS = \\[\\'\\*\\'\\]/\" ./cmd2web_wooey/settings/django_settings.py \\\n    && python3.7 manage.py addscript ./wooey_entry_cmd.py\nWORKDIR /cmd2web_wooey/cmd2web_wooey\nENTRYPOINT ./start_wooey.sh\n# port 8000 listening inside container\n"})}),"\n",(0,n.jsx)(t.p,{children:"In the Dockerfile, we specified the entrypoint as ./start_wooey.sh, and it is used to start the wooey project, it is just copied from the wooey document. The content of it is below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"#! /bin/bash\nnohup celery -A cmd2web_wooey worker -c 3 --beat -l info &\npython3.7 manage.py runserver 0.0.0.0:8000\n"})}),"\n",(0,n.jsx)(t.p,{children:"I must point out that I run celery inside the same docker container with the wooey server, and I changed the setting of Django project to accept any host, these are all bad practices and not safe at all. Considering my command line tool is for internal use, I don\u2019t care about security issues."}),"\n",(0,n.jsx)(t.p,{children:"The docker image building command is:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker build -f Dockerfile --target wooey_ui -t cmd2web_wooey .\n"})}),"\n",(0,n.jsx)(t.p,{children:"That\u2019s all we need to do, we now have a docker image provide our Command Line as-a Service. We can run a container from this image as a daemon server through command bellow:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker run -d -p 8000:8000 cmd2web_wooey:latest\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Now we can assess our Command Line WebUI in browser through ",(0,n.jsx)(t.a,{href:"http://IP:8000",children:"http://IP:8000"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://imgur.com/JlRaGqx.png",alt:"Imgur"})}),"\n",(0,n.jsx)(t.p,{children:"Click the \u201cwooey_entry_cmd\u201d script, that is the name of our python command line script, then set the arguments through the WebUI, click \u201csubmit\u201d to run the command."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://imgur.com/OiGSCKa.png",alt:"Imgur"})}),"\n",(0,n.jsx)(t.p,{children:"Wait a moment, and we can get the console output and the generated empty file from the result."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://imgur.com/ykgGckZ.png",alt:"Imgur"})}),"\n",(0,n.jsx)(t.p,{children:"code of this post are published on:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/XiGou/cmd2web_wooey",children:"https://github.com/XiGou/cmd2web_wooey"})}),"\n",(0,n.jsx)(t.p,{children:"Refs:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://wooey.readthedocs.io/en/latest/running_wooey.html",children:"https://wooey.readthedocs.io/en/latest/running_wooey.html"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/adamkewley/jobson",children:"https://github.com/adamkewley/jobson"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>s});var n=o(96540);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);