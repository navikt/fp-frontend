import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{e as y,H as m}from"./nb_NO-BzEvKQvT.js";import{P as u,A as c}from"./index.es-C2Q1sPzL.js";import{d as l}from"./dayjs.min-DkLNzaWO.js";import{R as f}from"./FlyttReservasjonModal-DkFWjF7e.js";import{V as v}from"./VStack-BvZgA6p7.js";import"./index-_2TAQcTa.js";import{M as F}from"./message-BTEGNoJQ.js";const b=a=>{const e=[];if(a.length>0){const i=l().startOf("day"),g=l().subtract(7,"days").startOf("day");for(let t=g;t.isBefore(i);t=t.add(1,"days")){const s=a.filter(n=>l(n.dato).startOf("day").isSame(t));s.length===0?e.push({antallNye:0,antallFerdigstilte:0,dato:t.toDate()}):e.push({antallNye:s.reduce((n,o)=>n+o.antallNye,0),antallFerdigstilte:s.reduce((n,o)=>n+o.antallFerdigstilte,0),dato:t.toDate()})}}return e},p=({height:a,nyeOgFerdigstilteOppgaver:e})=>{const i=y(),g=i.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Ferdigstilte"}),t=i.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Nye"}),s=b(e),n=s.map(r=>[r.dato.getTime(),r.antallFerdigstilte]),o=s.map(r=>[r.dato.getTime(),r.antallNye]);return d.jsx(f,{height:a,option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{formatter:r=>r.axisDimension==="y"?parseInt(r.value,10).toString():l(r.value).format(u)}}},legend:{data:[g,t],top:"bottom"},grid:{top:"5%",left:"3%",right:"4%",bottom:"12%",containLabel:!0},xAxis:[{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}}],yAxis:[{type:"value"}],series:[{name:g,type:"line",areaStyle:{},emphasis:{focus:"series"},data:n},{name:t,type:"line",areaStyle:{},emphasis:{focus:"series"},data:o}],color:["#38a161","#337c9b"]}})};p.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForSisteSyvGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const O=(a=[])=>{const e=l().startOf("day");return a.filter(i=>e.isAfter(l(i.dato,c)))},S=({height:a,nyeOgFerdigstilteOppgaver:e})=>d.jsxs(v,{gap:"1",children:[d.jsx(m,{size:"xsmall",children:d.jsx(F,{id:"NyeOgFerdigstilteOppgaverForSisteSyvPanel.SisteSyv"})}),d.jsx(p,{height:a,nyeOgFerdigstilteOppgaver:O(e)})]});S.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForSisteSyvPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
