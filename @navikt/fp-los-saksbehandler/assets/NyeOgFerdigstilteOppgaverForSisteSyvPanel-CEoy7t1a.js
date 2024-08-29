import{j as s,d as g}from"./dayjs.min-ZUODdiE-.js";import{r as y}from"./index-uubelm5h.js";import{a as u,R as c,y as F,b as v,d as f,A as O}from"./nb_NO-BZsAfFWQ.js";import{R as b}from"./FlyttReservasjonModal-B1ir_TJO.js";import{P as N}from"./Panel-Bc7J8-tr.js";const h=a=>{const e=[];if(a.length>0){const n=g().startOf("day"),o=g().subtract(7,"days").startOf("day");for(let t=o;t.isBefore(n);t=t.add(1,"days")){const i=a.filter(l=>g(l.dato).startOf("day").isSame(t));i.length===0?e.push({antallNye:0,antallFerdigstilte:0,dato:t.toDate()}):e.push({antallNye:i.reduce((l,d)=>l+d.antallNye,0),antallFerdigstilte:i.reduce((l,d)=>l+d.antallFerdigstilte,0),dato:t.toDate()})}}return e},p=({height:a,nyeOgFerdigstilteOppgaver:e})=>{const n=u(),o=n.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Ferdigstilte"}),t=n.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Nye"}),i=y.useMemo(()=>h(e),[e]),l=y.useMemo(()=>i.map(r=>[r.dato.getTime(),r.antallFerdigstilte]),[i]),d=y.useMemo(()=>i.map(r=>[r.dato.getTime(),r.antallNye]),[i]);return s.jsx(N,{children:s.jsx(b,{height:a,option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{formatter:r=>r.axisDimension==="y"?parseInt(r.value,10).toString():g(r.value).format(c)}}},legend:{data:[o,t]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}}],yAxis:[{type:"value"}],series:[{name:o,type:"line",areaStyle:{},emphasis:{focus:"series"},data:l},{name:t,type:"line",areaStyle:{},emphasis:{focus:"series"},data:d}],color:["#38a161","#337c9b"]}})})};p.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagGraf",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const S=(a=[])=>{const e=g().startOf("day");return a.filter(n=>e.isAfter(g(n.dato,O)))},m=({height:a,nyeOgFerdigstilteOppgaver:e})=>{const n=y.useMemo(()=>S(e),[e]);return s.jsxs(s.Fragment,{children:[s.jsx(F,{eightPx:!0}),s.jsx(v,{size:"small",children:s.jsx(f,{id:"NyeOgFerdigstilteOppgaverForSisteSyvPanel.SisteSyv"})}),s.jsx(p,{height:a,nyeOgFerdigstilteOppgaver:n})]})},P=m;m.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForSisteSyvPanel.",methods:[],displayName:"NyeOgFerdigstilteOppgaverForSisteSyvPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
