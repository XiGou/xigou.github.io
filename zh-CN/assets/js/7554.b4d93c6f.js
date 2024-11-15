"use strict";(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([["7554"],{17646:function(e,t,a){function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{A:function(){return i}}),(0,a(5995).eW)(i,"populateCommonDb")},37279:function(e,t,a){a.d(t,{diagram:function(){return b}});var i=a(17646),l=a(7690),r=a(94159),n=a(5995),o=a(3194),s=a(27818),c=n.vZ.pie,p={sections:new Map,showData:!1,config:c},d=p.sections,u=p.showData,g=structuredClone(c),f=(0,n.eW)(()=>structuredClone(g),"getConfig"),h=(0,n.eW)(()=>{d=new Map,u=p.showData,(0,n.ZH)()},"clear"),x=(0,n.eW)(({label:e,value:t})=>{!d.has(e)&&(d.set(e,t),n.cM.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),m=(0,n.eW)(()=>d,"getSections"),w=(0,n.eW)(e=>{u=e},"setShowData"),S=(0,n.eW)(()=>u,"getShowData"),T={getConfig:f,clear:h,setDiagramTitle:n.g2,getDiagramTitle:n.Kr,setAccTitle:n.GN,getAccTitle:n.eu,setAccDescription:n.U$,getAccDescription:n.Mx,addSection:x,getSections:m,setShowData:w,getShowData:S},$=(0,n.eW)((e,t)=>{(0,i.A)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),y={parse:(0,n.eW)(async e=>{let t=await (0,o.Qc)("pie",e);n.cM.debug(t),$(t,T)},"parse")},D=(0,n.eW)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),C=(0,n.eW)(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return(0,s.ve8)().value(e=>e.value)(t)},"createPieArcs"),W=(0,n.eW)((e,t,a,i)=>{n.cM.debug("rendering pie chart\n"+e);let o=i.db,c=(0,n.nV)(),p=(0,l.Rb)(o.getConfig(),c.pie),d=(0,r.P)(t),u=d.append("g");u.attr("transform","translate(225,225)");let{themeVariables:g}=c,[f]=(0,l.VG)(g.pieOuterStrokeWidth);f??=2;let h=p.textPosition,x=185,m=(0,s.Nb1)().innerRadius(0).outerRadius(x),w=(0,s.Nb1)().innerRadius(x*h).outerRadius(x*h);u.append("circle").attr("cx",0).attr("cy",0).attr("r",x+f/2).attr("class","pieOuterCircle");let S=o.getSections(),T=C(S),$=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],y=(0,s.PKp)($);u.selectAll("mySlices").data(T).enter().append("path").attr("d",m).attr("fill",e=>y(e.data.label)).attr("class","pieCircle");let D=0;S.forEach(e=>{D+=e}),u.selectAll("mySlices").data(T).enter().append("text").text(e=>(e.data.value/D*100).toFixed(0)+"%").attr("transform",e=>"translate("+w.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let W=u.selectAll(".legend").data(y.domain()).enter().append("g").attr("class","legend").attr("transform",(e,t)=>{let a=22,i=22*y.domain().length/2;return"translate(216,"+(t*a-i)+")"});W.append("rect").attr("width",18).attr("height",18).style("fill",y).style("stroke",y),W.data(T).append("text").attr("x",22).attr("y",14).text(e=>{let{label:t,value:a}=e.data;return o.getShowData()?`${t} [${a}]`:t});let b=512+Math.max(...W.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));d.attr("viewBox",`0 0 ${b} 450`),(0,n.v2)(d,450,b,p.useMaxWidth)},"draw"),b={parser:y,db:T,renderer:{draw:W},styles:D}}}]);