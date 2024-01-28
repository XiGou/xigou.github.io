"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[2302],{4780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(85893),a=n(11151);const o={layout:"post",title:"Generate Single Page HTML Data Report Using Plotly in Python",date:new Date("2023-04-14T01:11:04.000Z"),"Last Edited":"2023-04-14T10:03","Date created":"2023-04-01T22:44",tags:["technology","data_visualization"],authors:["xigou"]},s="Background  & Requirements Definination",l={permalink:"/blog/2023/03/23/gen-report-plotly",source:"@site/blog/2023-03-23-gen-report-plotly.md",title:"Generate Single Page HTML Data Report Using Plotly in Python",description:"Someone said: the best way to write a blog is not just describe waht you did, but how you resolve a problem, to record how do you think about that at that moment.",date:"2023-04-14T01:11:04.000Z",formattedDate:"April 14, 2023",tags:[{label:"technology",permalink:"/blog/tags/technology"},{label:"data_visualization",permalink:"/blog/tags/data-visualization"}],readingTime:4.655,hasTruncateMarker:!0,authors:[{name:"XiGou",title:"Software Developer",url:"https://github.com/XiGou",imageURL:"https://avatars.githubusercontent.com/u/20839871?s=400&u=362e4a7ba8a851d17b434dc784fbef454d94170c&v=4",key:"xigou"}],frontMatter:{layout:"post",title:"Generate Single Page HTML Data Report Using Plotly in Python",date:"2023-04-14T01:11:04.000Z","Last Edited":"2023-04-14T10:03","Date created":"2023-04-01T22:44",tags:["technology","data_visualization"],authors:["xigou"]},unlisted:!1,prevItem:{title:"\u897f\u897f\u5f17\u795e\u8bdd- \u5929\u95e8\u5c71\u56db\u4eba\u96c6\u4f53\u81ea\u6740\u4e8b\u4ef6",permalink:"/blog/2023/04/15/le-myth-de-sysyphes-4-suicide-in-tianmenshan"},nextItem:{title:"\u300a\u7b2c\u4e8c\u6027\u300b\u8bfb\u540e\u611f",permalink:"/blog/2023/02/05/The-Second-Sex"}},i={authorsImageUrls:[void 0]},p=[{value:"Requirements Clearify:",id:"requirements-clearify",level:2},{value:"Write the Interface and Testcase First",id:"write-the-interface-and-testcase-first",level:2},{value:"Implement the Core Function",id:"implement-the-core-function",level:2},{value:"Make It Self-contained",id:"make-it-self-contained",level:2},{value:"Glimpse of The Report Page",id:"glimpse-of-the-report-page",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Someone said: the best way to write a blog is not just describe waht you did, but how you resolve a problem, to record how do you think about that at that moment."}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"I agree with this."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"We often need to generate some data reports, a typical senario is we got some data, and we want to generate a single page data report, so in this blog I will describe how to generate single page HTML data report using open source library Plotly in python."}),"\n",(0,r.jsx)(t.h2,{id:"requirements-clearify",children:"Requirements Clearify:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"the input is processed data, as an example, we assume that it is a combination of tabular data, time series data and barchart data;"}),"\n",(0,r.jsx)(t.li,{children:"we should generate charts one-by-one for each data source, and put them all into a single HTML file;"}),"\n",(0,r.jsx)(t.li,{children:"this is a tool component, we need to integrate it with other software, wo make the integration easier, make it self-contained is a good choice, that means the output file can be accessed in offline environment."}),"\n"]}),"\n",(0,r.jsx)(t.h1,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.h2,{id:"write-the-interface-and-testcase-first",children:"Write the Interface and Testcase First"}),"\n",(0,r.jsx)(t.p,{children:"TDD( Test Driven Developing ) is always a good practice in software developing, according to the TDD work flow, we should write the interface and test case first."}),"\n",(0,r.jsx)(t.p,{children:"First, let\u2019s build the project structure like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 Makefile\n\u251c\u2500\u2500 plotly_offline_report\n\u2502   \u251c\u2500\u2500 gen_report.py\n\u2502   \u251c\u2500\u2500 __init__.py\n\u2514\u2500\u2500 tests\n    \u251c\u2500\u2500 __init__.py\n    \u2514\u2500\u2500 test_gen_report.py\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.code,{children:"gen_report.py"}),", we define the structure ReportData as the source data of the report,  and the function ",(0,r.jsx)(t.code,{children:"gen_report()"})," to finish the report generating, we are not planning to implement it in this stage, so the function body is empty."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class ReportData:\n    tabular_data = None\n    time_series_data = []\n    bar_chart_data = []\n\nclass ReportGenerator:\n  \n    def __init__(self, report_data, report_filename):\n        self._report_data = report_data\n        self._report_filename = report_filename\n\n    def gen_report_file(self):\n\t\tpass\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.code,{children:"test_gen_report.py"}),", we implement the GenReport Testcase, the testcase described what we need to do is get the report data  and call the gen_report() function on the report data to geneate a report file. The report file will be stored in the ",(0,r.jsx)(t.code,{children:"TMP_DIR"}),", and we can use ",(0,r.jsx)(t.code,{children:" python3 -m http.server --directory /tmp/plotly_gen_report/"})," to start a webserver on the directory, so we can easily open browser to check if it fullfilled our requirments mannually, TDD workflow makes the dev-test loop faster and accelerates the development."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import unittest\nimport tempfile\nimport os\nimport random\n\nfrom plotly_offline_report.gen_report import ReportGenerator, ReportData\n\nTMP_DIR = "/tmp/plotly_gen_report"\n\nclass TestGenReport(unittest.TestCase):\n    def setUp(self) -> None:\n        if not (os.path.exists(TMP_DIR) and os.path.isdir(TMP_DIR)):\n            os.mkdir(TMP_DIR)\n\n    def test_gen_report(self):\n        report_data = ReportData()\n        report_data.tabular_data = [["test_header" for i in range(10)]]\n        report_data.tabular_data.extend(\n            [[random.randint(1, 100) for i in range(10)] for j in range(5)]\n        )\n        report_data.bar_chart_data = [(i, random.randint(1, 100)) for i in range(10)]\n        report_data.time_series_data = [random.randint(1, 100) for i in range(1000)]\n        test_report_file = tempfile.NamedTemporaryFile(\n            dir=TMP_DIR, delete=False, suffix=".html"\n        )\n        ReportGenerator(report_data, test_report_file.name)\n\nif __name__ == "__main__":\n    unittest.main()\n'})}),"\n",(0,r.jsxs)(t.p,{children:["In  ",(0,r.jsx)(t.code,{children:"Makefile"}),", we defined the test step and clean up step of the project."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-makefile",children:".PHONY: test\ntest:\n\tpython3 -m unittest tests/test_gen_report.py\n\n.PHONY: clean\nclean:\n\trm -rf /tmp/plotly_gen_report\n"})}),"\n",(0,r.jsx)(t.h2,{id:"implement-the-core-function",children:"Implement the Core Function"}),"\n",(0,r.jsx)(t.p,{children:"To make the post more clear, I will just put some code snipets to demostrate the core structure of the implementation, full version of code can be accessed at github repo:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/XiGou/plotly_gen_offline_report",children:"https://github.com/XiGou/plotly_gen_offline_report"})}),"\n",(0,r.jsxs)(t.p,{children:["In ReportGenerator class, we use 3 functions to plot the figure or table by plotly and pandas library, and got the HTML string, and use ",(0,r.jsx)(t.code,{children:"gen_report_html_str()"})," to compose them all and filled into ",(0,r.jsx)(t.code,{children:"_report_html_template"})," and got the final html string. At lase we write it into an HTML file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from plotly.offline.offline import get_plotlyjs\nimport pkgutil\nimport pandas as pd\nimport plotly.express as px\n\nclass ReportData:\n    tabular_data = None  # [["header"], [1]]\n    time_series_data = []  # [{"timestamp":1, "value": 1}]\n    bar_chart_data = []  # [{"value":1, "count": 1}]\n\nPKG_NAME = "plotly_offline_report"\n\nclass ReportGenerator:\n    _report_html_template = """\n\t\t# defined the basic html wrapper to display the report\n\t\t"""\n\n    def __init__(self, report_data, report_filename):\n        self._report_data: ReportData = report_data\n        self._report_filename = report_filename\n        self._report_sections = []\n\n    def _gen_report_html_str_for_ts_data(self):\n        data = self._report_data.time_series_data\n\t\t\t\t# plot line figure using plotly\n        return f"""\n            <h3> Time Series Data </h3>\n            {fig.to_html(full_html=False, include_plotlyjs=False)}\n        """\n\n    def _gen_report_html_str_for_barchart_data(self):\n        data = self._report_data.bar_chart_data\n        data.sort(key=lambda x: x["value"])\n        # plot barchart using plotly\n        return f"""\n            <h3> Bar Chart Data </h3>\n            {fig.to_html(full_html=False, include_plotlyjs=False)}\n        """\n\n    def _gen_report_html_str_for_tabular_data(self):\n        data = self._report_data.tabular_data\n        # compose the pandas dataframe\n        return f"""\n            <h2> Tabular Data </h2>\n            {df_stylers.to_html()}\n        """\n\n    def gen_report_html_str(self):\n\t\t\t\t...\n\n    def gen_report_file(self):\n        with open(self._report_filename, "w", encoding="utf-8") as f:\n            f.write(self.gen_report_html_str())\n'})}),"\n",(0,r.jsx)(t.h2,{id:"make-it-self-contained",children:"Make It Self-contained"}),"\n",(0,r.jsx)(t.p,{children:"The key point of this project is to make the report self-contained, so it can be opened in enviroment without internet."}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:"function call to_html(full_html=False, include_plotlyjs=False)"})," of plotly, we set ",(0,r.jsx)(t.code,{children:"full_html=False"})," to generate just an html div instead of a complete HTML file include the hearder and body. we set  ",(0,r.jsx)(t.code,{children:"include_plotlyjs=False"})," because we need to include multple figure in one report HTML, we don\u2019t want it to appear multiple time in one page, and each plotly js script make our file few MBs bigger."]}),"\n",(0,r.jsxs)(t.p,{children:["the implementation of ",(0,r.jsx)(t.code,{children:"gen_report_html_str()"})," is below, we make the bootstrap and plotly js/css as static assets of our project, we use bootstrap here to build a grid layout and make our page looks better, and we include these contents directly into the ",(0,r.jsx)(t.code,{children:"_report_html_template"})," then we got a full version of our report."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'def gen_report_html_str(self):\n        self._report_sections = [\n            self._gen_report_html_str_for_tabular_data(),\n            self._gen_report_html_str_for_barchart_data(),\n            self._gen_report_html_str_for_ts_data(),\n        ]\n        plotlyjs_script = f"""\n        {self._window_plotly_config}\n        <script type="text/javascript">{get_plotlyjs()}<\/script>\n        """\n        bootstrapjs = f"""<script>{pkgutil.get_data(f"{PKG_NAME}.assets", "bootstrap.bundle.min.js").decode("utf-8")}<\/script>"""\n        bootstrapcss = f"""<style>{pkgutil.get_data(f"{PKG_NAME}.assets", "bootstrap.min.css").decode("utf-8")}</style>"""\n        return self._report_html_template.format(\n            report_sections=self._compose_report_sections(),\n            style=bootstrapcss,\n            scripts=f"{plotlyjs_script}\\n{bootstrapjs}",\n        )\n'})}),"\n",(0,r.jsx)(t.h2,{id:"glimpse-of-the-report-page",children:"Glimpse of The Report Page"}),"\n",(0,r.jsx)(t.p,{children:"It looks morden, elegant, and it is interative."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://imgur.com/rxpfH1h.jpeg",alt:"Web capture_14-4-2023_05713_192.168.75.183.jpeg"})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var r=n(67294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);