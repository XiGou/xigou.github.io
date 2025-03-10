"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["3152"],{7730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var s=n(15262),r=n(85893),i=n(50065);let o={title:"How Etcd IO Looks Like?",authors:["xigou"],tags:["Software","Dev"],date:"2025-01-02 23:14:31 +0800"},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Conclusion",id:"conclusion",level:2},{value:"Refs:",id:"refs",level:2}];function d(e){let t={a:"a",br:"br",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Recently I am working with an issue that complains about ",(0,r.jsx)(t.code,{children:"etcd"})," WAL fsync met high P99 Latency."]}),"\n",(0,r.jsx)(t.p,{children:"Then a question appeared on my head: How the IO of etcd looks like? Is it unfriendly to our storage device?"}),"\n",(0,r.jsxs)(t.p,{children:["Then I used the biosnoop in (bcc-tools)[",(0,r.jsx)(t.a,{href:"https://github.com/iovisor/bcc",children:"https://github.com/iovisor/bcc"}),"],"," and recorded the IO of etcd about one hour."]}),"\n",(0,r.jsx)(t.p,{children:"That is the result:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["most IO size are 4KB aligned;",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.img,{alt:"size",src:n(61993).Z+"",width:"2801",height:"1385"})]}),"\n",(0,r.jsxs)(t.li,{children:["these IO just hit several range of the block device;",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.img,{alt:"sectors1",src:n(27905).Z+"",width:"2791",height:"1449"})]}),"\n",(0,r.jsxs)(t.li,{children:["zoom in and we can see it  usually write to many files simultaneously, most are sequential IO;",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.img,{alt:"offset3",src:n(21474).Z+"",width:"2741",height:"1409"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.img,{alt:"offset1",src:n(64851).Z+"",width:"2767",height:"1329"})]}),"\n",(0,r.jsxs)(t.li,{children:["and finally I found a perfect sequential IO offset line.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.img,{alt:"offset2",src:n(24215).Z+"",width:"2727",height:"1401"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(t.p,{children:"So the result is: the IO pattern of etcd is very friendly to block storage devices, if you found etcd not works fine with your storage device, you must find root cause from your storage device."}),"\n",(0,r.jsx)(t.h2,{id:"refs",children:"Refs:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.suse.com/support/kb/doc/?id=000020100",children:"Slow etcd performance (performance testing and optimization) | Support | SUSE"})}),"\n",(0,r.jsx)(t.li,{children:"Code to process the biosnoop logs"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import plotly.graph_objects as go\nimport pandas as pd\n\nimport argparse\n\nparser = argparse.ArgumentParser(description='Analyze etcd IO latency from a file.')\nparser.add_argument('file_path', help='Path to the input file containing the data.')\nargs = parser.parse_args()\n\nwith open(args.file_path, 'r') as file:\n    data = file.read()\n\n# Parse the data\nimport io\ndf = pd.read_csv(io.StringIO(data), delim_whitespace=True)\n\n# Filter for etcd entries\netcd_df = df[df['COMM'] == 'etcd']\n\n# Create scatter plot for time vs. latency\nfig_latency = go.Figure(data=go.Scatter(x=etcd_df['TIME(s)'], y=etcd_df['LAT(ms)'], mode='markers'))\nfig_latency.update_layout(title='Time vs. Latency for etcd IO', xaxis_title='Time (s)', yaxis_title='Latency (ms)')\n\n# Create scatter plot for time vs. bytes\nfig_bytes = go.Figure(data=go.Scatter(x=etcd_df['TIME(s)'], y=etcd_df['BYTES'], mode='markers'))\nfig_bytes.update_layout(title='Time vs. Bytes for etcd IO', xaxis_title='Time (s)', yaxis_title='Bytes')\n\n# Create scatter plot for time vs. sectors\nfig_sectors = go.Figure(data=go.Scatter(x=etcd_df['TIME(s)'], y=etcd_df['SECTOR'], mode='markers'))\nfig_sectors.update_layout(title='Time vs. Sectors for etcd IO', xaxis_title='Time (s)', yaxis_title='Sectors')\n\n# Additional statistical analysis\n# Calculate mean, median, and standard deviation of latency for etcd\nlatency_stats = etcd_df['LAT(ms)'].describe()\n\n# Save the plots as HTML files\nimport os\nif not os.path.exists(\"./reports\"):\n    os.mkdir(\"./reports\")\n\nfig_latency.write_html(\"./reports/latency_plot.html\")\nfig_bytes.write_html(\"./reports/bytes_plot.html\")\nfig_sectors.write_html(\"./reports/sectors_plot.html\")\n\n# Start a simple HTTP server to serve the HTML files\nimport http.server\nimport socketserver\n\nPORT = 19999\nHandler = http.server.SimpleHTTPRequestHandler\n\nwith socketserver.TCPServer((\"\", PORT), Handler) as httpd:\n    print(\"Serving at port\", PORT)\n    httpd.serve_forever()\n\n\n\n"})})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},27905:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/20250307174631-5279f1190a08681aeeeff330ceb6f92e.png"},64851:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/20250307174752-dc8325f604f2f187fa3891346569a871.png"},24215:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/20250307174842-6507f8ae247fefbb06a299a5530d73ea.png"},21474:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/20250307174934-ea9101b8c8aa7be2edbc6463830266fa.png"},61993:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/20250307174958-6be7031ae7e0c75c459fa38a90b0d58c.png"},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var s=n(67294);let r={},i=s.createContext(r);function o(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}},15262:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/2025/03/07/how-etcd-io-looks-like","source":"@site/blog/2025-03-07-how-etcd-io-looks-like.md","title":"How Etcd IO Looks Like?","description":"Recently I am working with an issue that complains about etcd WAL fsync met high P99 Latency.","date":"2025-01-02T23:14:31.000Z","tags":[{"inline":true,"label":"Software","permalink":"/zh-CN/blog/tags/software"},{"inline":true,"label":"Dev","permalink":"/zh-CN/blog/tags/dev"}],"readingTime":1.85,"hasTruncateMarker":true,"authors":[{"name":"XiGou","title":"Software Developer","url":"https://github.com/XiGou","imageURL":"https://avatars.githubusercontent.com/u/20839871?s=400&u=362e4a7ba8a851d17b434dc784fbef454d94170c&v=4","key":"xigou","page":null}],"frontMatter":{"title":"How Etcd IO Looks Like?","authors":["xigou"],"tags":["Software","Dev"],"date":"2025-01-02 23:14:31 +0800"},"unlisted":false,"prevItem":{"title":"\u5E93\u65AF\u79D1\u7684\u68AF\u7530","permalink":"/zh-CN/blog/2025/01/27/kusike-titian"},"nextItem":{"title":"\u4F69\u7D22\u963F\u300A\u6211\u5C06\u5B87\u5B99\u968F\u8EAB\u643A\u5E26\u300B-\u6458\u5F55","permalink":"/zh-CN/blog/2024/12/15/I_carry_the_universe_with_me"}}')}}]);