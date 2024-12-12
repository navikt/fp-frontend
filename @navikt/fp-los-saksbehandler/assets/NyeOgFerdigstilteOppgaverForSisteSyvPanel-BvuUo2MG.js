import{j as g}from"./jsx-runtime-DR9Q75dM.js";import{e as m,H as u}from"./nb_NO-DkvGH99a.js";import{R as b,A as v}from"./index.es-3EwiyZMP.js";import{d as l}from"./dayjs.min-CnNqAF5I.js";import{R as c}from"./FlyttReservasjonModal-WWAz_8u0.js";import{V as F}from"./VStack-CdW3Cbzf.js";import"./index-DRjF_FHU.js";import{M as O}from"./i18n.context-BgIj-wcF.js";const f=a=>{const e=[];if(a.length>0){const i=l().startOf("day"),o=l().subtract(7,"days").startOf("day");for(let t=o;t.isBefore(i);t=t.add(1,"days")){const s=a.filter(n=>l(n.dato).startOf("day").isSame(t));s.length===0?e.push({antallNye:0,antallFerdigstilte:0,dato:t.toDate()}):e.push({antallNye:s.reduce((n,d)=>n+d.antallNye,0),antallFerdigstilte:s.reduce((n,d)=>n+d.antallFerdigstilte,0),dato:t.toDate()})}}return e},y=({height:a,nyeOgFerdigstilteOppgaver:e})=>{const i=m(),o=i.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Ferdigstilte"}),t=i.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Nye"}),s=f(e),n=s.map(r=>[r.dato.getTime(),r.antallFerdigstilte]),d=s.map(r=>[r.dato.getTime(),r.antallNye]);return g.jsx(c,{height:a,option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{formatter:r=>r.axisDimension==="y"?parseInt(r.value,10).toString():l(r.value).format(b)}}},legend:{data:[o,t],top:"bottom"},grid:{top:"5%",left:"3%",right:"4%",bottom:"12%",containLabel:!0},xAxis:[{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}}],yAxis:[{type:"value"}],series:[{name:o,type:"line",areaStyle:{},emphasis:{focus:"series"},data:n},{name:t,type:"line",areaStyle:{},emphasis:{focus:"series"},data:d}],color:["#38a161","#337c9b"]}})};y.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForSisteSyvGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForSisteSyvGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const N=(a=[])=>{const e=l().startOf("day");return a.filter(i=>e.isAfter(l(i.dato,v)))},p=({height:a,nyeOgFerdigstilteOppgaver:e})=>g.jsxs(F,{gap:"1",children:[g.jsx(u,{size:"xsmall",children:g.jsx(O,{id:"NyeOgFerdigstilteOppgaverForSisteSyvPanel.SisteSyv"})}),g.jsx(y,{height:a,nyeOgFerdigstilteOppgaver:N(e)})]});p.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForSisteSyvPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForSisteSyvPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};export{p as N};
