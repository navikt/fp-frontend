import{u as p,j as o,d as l,n as m,b as u}from"./iframe-B3LllOyS.js";import{R as c}from"./FlyttReservasjonModal-7oYJA89T.js";import{V as v}from"./VStack-oiDHnFzs.js";import{H as f}from"./nb_NO-iOLOzDYk.js";import{M as F}from"./Loader-BniX8TTA.js";const y=({height:r,nyeOgFerdigstilteOppgaver:e})=>{const i=p(),g=i.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Ferdigstilte"}),t=i.formatMessage({id:"NyeOgFerdigstilteOppgaverForSisteSyvGraf.Nye"}),s=b(e),n=s.map(a=>[a.dato.getTime(),a.antallFerdigstilte]),d=s.map(a=>[a.dato.getTime(),a.antallNye]);return o.jsx(c,{height:r,option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{formatter:a=>a.axisDimension==="y"?parseInt(a.value,10).toString():l(a.value).format(m)}}},legend:{data:[g,t],top:"bottom"},grid:{top:"5%",left:"3%",right:"4%",bottom:"12%",containLabel:!0},xAxis:[{type:"time",axisLabel:{formatter:"{dd}.{MM}.{yyyy}"}}],yAxis:[{type:"value"}],series:[{name:g,type:"line",areaStyle:{},emphasis:{focus:"series"},data:n},{name:t,type:"line",areaStyle:{},emphasis:{focus:"series"},data:d}],color:["#38a161","#337c9b"]}})},b=r=>{const e=[];if(r.length>0){const i=l().startOf("day"),g=l().subtract(7,"days").startOf("day");for(let t=g;t.isBefore(i);t=t.add(1,"days")){const s=r.filter(n=>l(n.dato).startOf("day").isSame(t));s.length===0?e.push({antallNye:0,antallFerdigstilte:0,dato:t.toDate()}):e.push({antallNye:s.reduce((n,d)=>n+d.antallNye,0),antallFerdigstilte:s.reduce((n,d)=>n+d.antallFerdigstilte,0),dato:t.toDate()})}}return e};y.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForSisteSyvGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const O=({height:r,nyeOgFerdigstilteOppgaver:e})=>o.jsxs(v,{gap:"space-4",children:[o.jsx(f,{size:"xsmall",level:"4",children:o.jsx(F,{id:"NyeOgFerdigstilteOppgaverForSisteSyvPanel.SisteSyv"})}),o.jsx(y,{height:r,nyeOgFerdigstilteOppgaver:S(e)})]}),S=(r=[])=>{const e=l().startOf("day");return r.filter(i=>e.isAfter(l(i.dato,u)))};O.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForSisteSyvPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};export{O as N};
