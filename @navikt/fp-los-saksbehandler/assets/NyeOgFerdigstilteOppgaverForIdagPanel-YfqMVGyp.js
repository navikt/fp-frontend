import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-_2TAQcTa.js";import{e as c,b as t,H as F}from"./nb_NO-DXuZpwvA.js";import{A as O}from"./index.es-ClwW4EUb.js";import{d as m}from"./dayjs.min-DkLNzaWO.js";import{u as f,K as k}from"./useLosKodeverk-DDdvs0LQ.js";import{R as h}from"./FlyttReservasjonModal-DAjdBA81.js";import{V as T}from"./VStack-a-3uwZHN.js";import{M as I}from"./message-BP4r06K8.js";const o=[t.TILBAKEKREVING_REVURDERING,t.TILBAKEKREVING,t.DOKUMENTINNSYN,t.KLAGE,t.REVURDERING,t.FORSTEGANGSSOKNAD],u=({height:a,nyeOgFerdigstilteOppgaver:r,behandlingTyper:i})=>{const s=c(),y=o.map(n=>{if(n===t.FORSTEGANGSSOKNAD)return s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Førstegangsbehandling"});const e=i.find(d=>d.kode===n);return e?e.navn:""}),l=s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Ferdigstilte"}),p=s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Nye"}),N=o.map(n=>{const e=r.find(d=>d.behandlingType===n);return e?e.antallFerdigstilte:0}),b=o.map(n=>{const e=r.find(d=>d.behandlingType===n);return e?e.antallNye:0});return g.jsx(h,{height:a,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[l,p],top:"bottom"},grid:{top:"5%",left:"3%",right:"4%",bottom:"12%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:y},series:[{name:l,type:"bar",data:N},{name:p,type:"bar",data:b}],color:["#38a161","#337c9b"]}})};u.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const R=(a=[])=>{const r=m();return a.filter(i=>r.isSame(m(i.dato,O),"day"))},E=({height:a,nyeOgFerdigstilteOppgaver:r})=>{const i=f(k.BEHANDLING_TYPE),s=v.useMemo(()=>R(r),[r]);return g.jsxs(T,{gap:"1",children:[g.jsx(F,{size:"xsmall",children:g.jsx(I,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.IDag"})}),g.jsx(u,{height:a,nyeOgFerdigstilteOppgaver:s,behandlingTyper:i})]})};E.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
