"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[2302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,u=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={layout:"post",title:"Generate Single Page HTML Data Report Using Plotly in Python",date:new Date("2023-04-14T01:11:04.000Z"),tags:["technology","data_visualization"],authors:["xigou"]},l=void 0,i={permalink:"/blog/2023/03/23/gen-report-plotly",source:"@site/blog/2023-03-23-gen-report-plotly.md",title:"Generate Single Page HTML Data Report Using Plotly in Python",description:"Someone said: the best way to write a blog is not just describe waht you did, but how you resolve a problem, to record how do you think about that at that moment.",date:"2023-04-14T01:11:04.000Z",formattedDate:"2023\u5e744\u670814\u65e5",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"data_visualization",permalink:"/blog/tags/data-visualization"}],readingTime:4.655,hasTruncateMarker:!0,authors:[{name:"XiGou",title:"Software Developer",url:"https://github.com/XiGou",imageURL:"https://avatars.githubusercontent.com/u/20839871?s=400&u=362e4a7ba8a851d17b434dc784fbef454d94170c&v=4",key:"xigou"}],frontMatter:{layout:"post",title:"Generate Single Page HTML Data Report Using Plotly in Python",date:"2023-04-14T01:11:04.000Z",tags:["technology","data_visualization"],authors:["xigou"]},prevItem:{title:"Joker \u8c08\u6cbb\u56fd\u7406\u653f\uff1a\u8bba\u6cbb\u5b89\u7ba1\u7406\u4e2d\u7684\u6bb4\u6253\u4ed6\u4eba",permalink:"/blog/2023/10/21/fight-in-law"},nextItem:{title:"\u300a\u7b2c\u4e8c\u6027\u300b\u8bfb\u540e\u611f",permalink:"/blog/2023/02/05/The-Second-Sex"}},s={authorsImageUrls:[void 0]},p=[{value:"Requirements Clearify:",id:"requirements-clearify",level:2},{value:"Write the Interface and Testcase First",id:"write-the-interface-and-testcase-first",level:2},{value:"Implement the Core Function",id:"implement-the-core-function",level:2},{value:"Make It Self-contained",id:"make-it-self-contained",level:2},{value:"Glimpse of The Report Page",id:"glimpse-of-the-report-page",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Someone said: the best way to write a blog is not just describe waht you did, but how you resolve a problem, to record how do you think about that at that moment.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I agree with this.")),(0,r.kt)("h1",{id:"background---requirements-definination"},"Background  & Requirements Definination"),(0,r.kt)("p",null,"We often need to generate some data reports, a typical senario is we got some data, and we want to generate a single page data report, so in this blog I will describe how to generate single page HTML data report using open source library Plotly in python."),(0,r.kt)("h2",{id:"requirements-clearify"},"Requirements Clearify:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"the input is processed data, as an example, we assume that it is a combination of tabular data, time series data and barchart data;"),(0,r.kt)("li",{parentName:"ol"},"we should generate charts one-by-one for each data source, and put them all into a single HTML file;"),(0,r.kt)("li",{parentName:"ol"},"this is a tool component, we need to integrate it with other software, wo make the integration easier, make it self-contained is a good choice, that means the output file can be accessed in offline environment.")),(0,r.kt)("h1",{id:"implementation"},"Implementation"),(0,r.kt)("h2",{id:"write-the-interface-and-testcase-first"},"Write the Interface and Testcase First"),(0,r.kt)("p",null,"TDD( Test Driven Developing ) is always a good practice in software developing, according to the TDD work flow, we should write the interface and test case first."),(0,r.kt)("p",null,"First, let\u2019s build the project structure like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 plotly_offline_report\n\u2502   \u251c\u2500\u2500 gen_report.py\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2514\u2500\u2500 tests\n    \u251c\u2500\u2500 __init__.py\n    \u2514\u2500\u2500 test_gen_report.py\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"gen_report.py"),", we define the structure ReportData as the source data of the report,  and the function ",(0,r.kt)("inlineCode",{parentName:"p"},"gen_report()")," to finish the report generating, we are not planning to implement it in this stage, so the function body is empty."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nclass ReportData:\n    tabular_data = None\n    time_series_data = []\n    bar_chart_data = []\n\nclass ReportGenerator:\n  \n    def __init__(self, report_data, report_filename):\n        self._report_data = report_data\n        self._report_filename = report_filename\n\n    def gen_report_file(self):\n                pass\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"test_gen_report.py"),", we implement the GenReport Testcase, the testcase described what we need to do is get the report data  and call the gen_report() function on the report data to geneate a report file. The report file will be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"TMP_DIR"),", and we can use ",(0,r.kt)("inlineCode",{parentName:"p"}," python3 -m http.server --directory /tmp/plotly_gen_report/")," to start a webserver on the directory, so we can easily open browser to check if it fullfilled our requirments mannually, TDD workflow makes the dev-test loop faster and accelerates the development."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import unittest\nimport tempfile\nimport os\nimport random\n\nfrom plotly_offline_report.gen_report import ReportGenerator, ReportData\n\nTMP_DIR = "/tmp/plotly_gen_report"\n\nclass TestGenReport(unittest.TestCase):\n    def setUp(self) -> None:\n        if not (os.path.exists(TMP_DIR) and os.path.isdir(TMP_DIR)):\n            os.mkdir(TMP_DIR)\n\n    def test_gen_report(self):\n        report_data = ReportData()\n        report_data.tabular_data = [["test_header" for i in range(10)]]\n        report_data.tabular_data.extend(\n            [[random.randint(1, 100) for i in range(10)] for j in range(5)]\n        )\n        report_data.bar_chart_data = [(i, random.randint(1, 100)) for i in range(10)]\n        report_data.time_series_data = [random.randint(1, 100) for i in range(1000)]\n        test_report_file = tempfile.NamedTemporaryFile(\n            dir=TMP_DIR, delete=False, suffix=".html"\n        )\n        ReportGenerator(report_data, test_report_file.name)\n\nif __name__ == "__main__":\n    unittest.main()\n')),(0,r.kt)("p",null,"In  ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile"),", we defined the test step and clean up step of the project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".PHONY: test\ntest:\n    python3 -m unittest tests/test_gen_report.py\n\n.PHONY: clean\nclean:\n    rm -rf /tmp/plotly_gen_report\n")),(0,r.kt)("h2",{id:"implement-the-core-function"},"Implement the Core Function"),(0,r.kt)("p",null,"To make the post more clear, I will just put some code snipets to demostrate the core structure of the implementation, full version of code can be accessed at github repo: "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/XiGou/plotly_gen_offline_report"},"https://github.com/XiGou/plotly_gen_offline_report")),(0,r.kt)("p",null,"In ReportGenerator class, we use 3 functions to plot the figure or table by plotly and pandas library, and got the HTML string, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"gen_report_html_str()")," to compose them all and filled into ",(0,r.kt)("inlineCode",{parentName:"p"},"_report_html_template")," and got the final html string. At lase we write it into an HTML file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'from plotly.offline.offline import get_plotlyjs\nimport pkgutil\nimport pandas as pd\nimport plotly.express as px\n\nclass ReportData:\n    tabular_data = None  # [["header"], [1]]\n    time_series_data = []  # [{"timestamp":1, "value": 1}]\n    bar_chart_data = []  # [{"value":1, "count": 1}]\n\nPKG_NAME = "plotly_offline_report"\n\nclass ReportGenerator:\n    _report_html_template = """\n        # defined the basic html wrapper to display the report\n        """\n\n    def __init__(self, report_data, report_filename):\n        self._report_data: ReportData = report_data\n        self._report_filename = report_filename\n        self._report_sections = []\n\n    def _gen_report_html_str_for_ts_data(self):\n        data = self._report_data.time_series_data\n                # plot line figure using plotly\n        return f"""\n            <h3> Time Series Data </h3>\n            {fig.to_html(full_html=False, include_plotlyjs=False)}\n        """\n\n    def _gen_report_html_str_for_barchart_data(self):\n        data = self._report_data.bar_chart_data\n        data.sort(key=lambda x: x["value"])\n        # plot barchart using plotly\n        return f"""\n            <h3> Bar Chart Data </h3>\n            {fig.to_html(full_html=False, include_plotlyjs=False)}\n        """\n\n    def _gen_report_html_str_for_tabular_data(self):\n        data = self._report_data.tabular_data\n        # compose the pandas dataframe\n        return f"""\n            <h2> Tabular Data </h2>\n            {df_stylers.to_html()}\n        """\n\n    def gen_report_html_str(self):\n                ...\n\n    def gen_report_file(self):\n        with open(self._report_filename, "w", encoding="utf-8") as f:\n            f.write(self.gen_report_html_str())\n')),(0,r.kt)("h2",{id:"make-it-self-contained"},"Make It Self-contained"),(0,r.kt)("p",null,"The key point of this project is to make the report self-contained, so it can be opened in enviroment without internet."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"function call to_html(full_html=False, include_plotlyjs=False)")," of plotly, we set ",(0,r.kt)("inlineCode",{parentName:"p"},"full_html=False")," to generate just an html div instead of a complete HTML file include the hearder and body. we set  ",(0,r.kt)("inlineCode",{parentName:"p"},"include_plotlyjs=False")," because we need to include multple figure in one report HTML, we don\u2019t want it to appear multiple time in one page, and each plotly js script make our file few MBs bigger."),(0,r.kt)("p",null,"the implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"gen_report_html_str()")," is below, we make the bootstrap and plotly js/css as static assets of our project, we use bootstrap here to build a grid layout and make our page looks better, and we include these contents directly into the ",(0,r.kt)("inlineCode",{parentName:"p"},"_report_html_template")," then we got a full version of our report."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def gen_report_html_str(self):\n        self._report_sections = [\n            self._gen_report_html_str_for_tabular_data(),\n            self._gen_report_html_str_for_barchart_data(),\n            self._gen_report_html_str_for_ts_data(),\n        ]\n        plotlyjs_script = f"""\n        {self._window_plotly_config}\n        <script type="text/javascript">{get_plotlyjs()}<\/script>\n        """\n        bootstrapjs = f"""<script>{pkgutil.get_data(f"{PKG_NAME}.assets", "bootstrap.bundle.min.js").decode("utf-8")}<\/script>"""\n        bootstrapcss = f"""<style>{pkgutil.get_data(f"{PKG_NAME}.assets", "bootstrap.min.css").decode("utf-8")}</style>"""\n        return self._report_html_template.format(\n            report_sections=self._compose_report_sections(),\n            style=bootstrapcss,\n            scripts=f"{plotlyjs_script}\\n{bootstrapjs}",\n        )\n')),(0,r.kt)("h2",{id:"glimpse-of-the-report-page"},"Glimpse of The Report Page"),(0,r.kt)("p",null,"It looks morden, elegant, and it is interative."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://imgur.com/rxpfH1h.jpeg",alt:"Web capture_14-4-2023_05713_192.168.75.183.jpeg"})))}m.isMDXComponent=!0}}]);