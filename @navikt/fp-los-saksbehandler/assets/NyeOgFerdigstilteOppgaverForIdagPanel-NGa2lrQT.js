import{u as N,B as r,j as g,d as u}from"./iframe-hNqesRcp.js";import{P as F}from"./index.es-CUkkbtKU.js";import{u as c}from"./useLosKodeverk-CNwBN8Oi.js";import{R as O}from"./FlyttReservasjonModal-DIhGC0yB.js";import{V as f}from"./VStack-5r37413G.js";import{H as k}from"./nb_NO-CdMwuD92.js";import{M as h}from"./message-BYzHJXfW.js";const o=[r.TILBAKEKREVING_REVURDERING,r.TILBAKEKREVING,r.DOKUMENTINNSYN,r.KLAGE,r.REVURDERING,r.FORSTEGANGSSOKNAD],y=({height:a,nyeOgFerdigstilteOppgaver:n,behandlingTyper:i})=>{const s=N(),m=o.map(t=>{if(t===r.FORSTEGANGSSOKNAD)return s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Førstegangsbehandling"});const e=i.find(d=>d.kode===t);return e?e.navn:""}),l=s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Ferdigstilte"}),p=s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Nye"}),b=o.map(t=>{const e=n.find(d=>d.behandlingType===t);return e?e.antallFerdigstilte:0}),v=o.map(t=>{const e=n.find(d=>d.behandlingType===t);return e?e.antallNye:0});return g.jsx(O,{height:a,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[l,p],top:"bottom"},grid:{top:"5%",left:"3%",right:"4%",bottom:"12%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:m},series:[{name:l,type:"bar",data:b},{name:p,type:"bar",data:v}],color:["#38a161","#337c9b"]}})};y.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"LosKodeverkMedNavn<'BehandlingType'>[]"},description:""},nyeOgFerdigstilteOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const T=({height:a,nyeOgFerdigstilteOppgaver:n})=>{const i=c("BehandlingType"),s=I(n);return g.jsxs(f,{gap:"1",children:[g.jsx(k,{size:"xsmall",children:g.jsx(h,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.IDag"})}),g.jsx(y,{height:a,nyeOgFerdigstilteOppgaver:s,behandlingTyper:i})]})},I=(a=[])=>{const n=u();return a.filter(i=>n.isSame(u(i.dato,F),"day"))};T.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};export{T as N};
