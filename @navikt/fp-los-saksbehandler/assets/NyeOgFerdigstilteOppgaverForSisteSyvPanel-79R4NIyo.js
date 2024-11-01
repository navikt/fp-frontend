import{j as s}from"./jsx-runtime-QvZ8i92b.js";import{r as y}from"./index-uubelm5h.js";import{d as o}from"./dayjs.min-BsYQKNhR.js";import{d as m,R as u,y as c,e as f,f as F,A as v}from"./nb_NO-DLTQouge.js";import{R as O}from"./FlyttReservasjonModal-CK5Xkhpa.js";import{P as b}from"./Panel-DTUiiOw5.js";const N=a=>{const e=[];if(a.length>0){const n=o().startOf("day"),g=o().subtract(7,"days").startOf("day");for(let t=g;t.isBefore(n);t=t.add(1,"days")){const i=a.filter(l=>o(l.dato).startOf("day").isSame(t));i.length===0?e.push({antallNye:0,antallFerdigstilte:0,dato:t.toDate()}):e.push({antallNye:i.reduce((l,d)=>l+d.antallNye,0),antallFerdigstilte:i.reduce((l,d)=>l+d.antallFerdigstilte,0),dato:t.toDate()})}}return e},p=({height:a,nyeOgFerdigstilteOppgaver:e})=>{const n=m(),g=n.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Ferdigstilte"}),t=n.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Nye"}),i=y.useMemo(()=>N(e),[e]),l=y.useMemo(()=>i.map(r=>[r.dato.getTime(),r.antallFerdigstilte]),[i]),d=y.useMemo(()=>i.map(r=>[r.dato.getTime(),r.antallNye]),[i]);return s.jsx(b,{children:s.jsx(O,{height:a,option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{formatter:r=>r.axisDimension==="y"?parseInt(r.value,10).toString():o(r.value).format(u)}}},legend:{data:[g,t]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}}],yAxis:[{type:"value"}],series:[{name:g,type:"line",areaStyle:{},emphasis:{focus:"series"},data:l},{name:t,type:"line",areaStyle:{},emphasis:{focus:"series"},data:d}],color:["#38a161","#337c9b"]}})})};p.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagGraf",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const h=(a=[])=>{const e=o().startOf("day");return a.filter(n=>e.isAfter(o(n.dato,v)))},S=({height:a,nyeOgFerdigstilteOppgaver:e})=>{const n=y.useMemo(()=>h(e),[e]);return s.jsxs(s.Fragment,{children:[s.jsx(c,{eightPx:!0}),s.jsx(f,{size:"small",children:s.jsx(F,{id:"NyeOgFerdigstilteOppgaverForSisteSyvPanel.SisteSyv"})}),s.jsx(p,{height:a,nyeOgFerdigstilteOppgaver:n})]})};S.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForSisteSyvPanel.",methods:[],displayName:"NyeOgFerdigstilteOppgaverForSisteSyvPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};export{S as N};
