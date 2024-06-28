import{r as y,R as s}from"./index-DVXBtNgz.js";import{d as g}from"./dayjs.min-Dkhc0ShP.js";import{a as u,n as c,i as F,L as v,d as f,A as O}from"./nb_NO-B4G50tbZ.js";import{R as b}from"./FlyttReservasjonModal-D0LWy4vy.js";import{P as N}from"./Panel-CFLcWv7D.js";const S=r=>{const e=[];if(r.length>0){const n=g().startOf("day"),d=g().subtract(7,"days").startOf("day");for(let t=d;t.isBefore(n);t=t.add(1,"days")){const i=r.filter(l=>g(l.dato).startOf("day").isSame(t));i.length===0?e.push({antallNye:0,antallFerdigstilte:0,dato:t.toDate()}):e.push({antallNye:i.reduce((l,o)=>l+o.antallNye,0),antallFerdigstilte:i.reduce((l,o)=>l+o.antallFerdigstilte,0),dato:t.toDate()})}}return e},m=({height:r,nyeOgFerdigstilteOppgaver:e})=>{const n=u(),d=n.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Ferdigstilte"}),t=n.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Nye"}),i=y.useMemo(()=>S(e),[e]),l=y.useMemo(()=>i.map(a=>[a.dato.getTime(),a.antallFerdigstilte]),[i]),o=y.useMemo(()=>i.map(a=>[a.dato.getTime(),a.antallNye]),[i]);return s.createElement(N,null,s.createElement(b,{height:r,option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{formatter:a=>a.axisDimension==="y"?parseInt(a.value,10).toString():g(a.value).format(c)}}},legend:{data:[d,t]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}}],yAxis:[{type:"value"}],series:[{name:d,type:"line",areaStyle:{},emphasis:{focus:"series"},data:l},{name:t,type:"line",areaStyle:{},emphasis:{focus:"series"},data:o}],color:["#38a161","#337c9b"]}}))};m.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagGraf",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const h=(r=[])=>{const e=g().startOf("day");return r.filter(n=>e.isAfter(g(n.dato,O)))},p=({height:r,nyeOgFerdigstilteOppgaver:e})=>{const n=y.useMemo(()=>h(e),[e]);return s.createElement(s.Fragment,null,s.createElement(F,{eightPx:!0}),s.createElement(v,{size:"small"},s.createElement(f,{id:"NyeOgFerdigstilteOppgaverForSisteSyvPanel.SisteSyv"})),s.createElement(m,{height:r,nyeOgFerdigstilteOppgaver:n}))},P=p;p.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForSisteSyvPanel.",methods:[],displayName:"NyeOgFerdigstilteOppgaverForSisteSyvPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};export{P as N};
