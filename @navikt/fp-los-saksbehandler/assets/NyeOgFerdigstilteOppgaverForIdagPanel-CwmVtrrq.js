import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{r as v}from"./index-uubelm5h.js";import{d as m}from"./dayjs.min-BsYQKNhR.js";import{d as c,H as F}from"./nb_NO-C4RkFlUy.js";import{A as f}from"./index.es-UbZaQCW7.js";import"./aktivitetStatus-B1m96ipJ.js";import{K as O}from"./kodeverkTyper-CavWL6Ds.js";import{u as k}from"./useLosKodeverk-DJ8tcsp9.js";import{B as t}from"./behandlingType-BdbjGMJD.js";import{R as h}from"./FlyttReservasjonModal-CmCvWMvs.js";import{V as T}from"./VStack-Cn_RGqfq.js";import{M as I}from"./Loader-CW5Pi24c.js";const g=[t.TILBAKEKREVING_REVURDERING,t.TILBAKEKREVING,t.DOKUMENTINNSYN,t.KLAGE,t.REVURDERING,t.FORSTEGANGSSOKNAD],u=({height:a,nyeOgFerdigstilteOppgaver:r,behandlingTyper:i})=>{const s=c(),y=g.map(n=>{if(n===t.FORSTEGANGSSOKNAD)return s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Førstegangsbehandling"});const e=i.find(d=>d.kode===n);return e?e.navn:""}),l=s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Ferdigstilte"}),p=s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Nye"}),N=g.map(n=>{const e=r.find(d=>d.behandlingType===n);return e?e.antallFerdigstilte:0}),b=g.map(n=>{const e=r.find(d=>d.behandlingType===n);return e?e.antallNye:0});return o.jsx(h,{height:a,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[l,p],top:"bottom"},grid:{top:"5%",left:"3%",right:"4%",bottom:"12%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:y},series:[{name:l,type:"bar",data:N},{name:p,type:"bar",data:b}],color:["#38a161","#337c9b"]}})};u.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},nyeOgFerdigstilteOppgaver:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const R=(a=[])=>{const r=m();return a.filter(i=>r.isSame(m(i.dato,f),"day"))},E=({height:a,nyeOgFerdigstilteOppgaver:r})=>{const i=k(O.BEHANDLING_TYPE),s=v.useMemo(()=>R(r),[r]);return o.jsxs(T,{gap:"1",children:[o.jsx(F,{size:"xsmall",children:o.jsx(I,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.IDag"})}),o.jsx(u,{height:a,nyeOgFerdigstilteOppgaver:s,behandlingTyper:i})]})};E.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};export{E as N};
