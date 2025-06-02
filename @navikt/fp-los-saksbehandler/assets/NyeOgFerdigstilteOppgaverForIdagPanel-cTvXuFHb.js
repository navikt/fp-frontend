import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-C4XKfyRp.js";import{e as v,b as n,d as u,P as F}from"./withThemeDecorator-C00hjHgE.js";import{u as O}from"./useLosKodeverk-qT2zupeR.js";import{R as f}from"./FlyttReservasjonModal-DPdEdLU2.js";import{V as k}from"./VStack-DZLO_5xl.js";import{H as h}from"./nb_NO-B34Cc-GC.js";import{M as T}from"./message-OO6pWzcv.js";const o=[n.TILBAKEKREVING_REVURDERING,n.TILBAKEKREVING,n.DOKUMENTINNSYN,n.KLAGE,n.REVURDERING,n.FORSTEGANGSSOKNAD],m=({height:a,nyeOgFerdigstilteOppgaver:r,behandlingTyper:i})=>{const s=v(),y=o.map(t=>{if(t===n.FORSTEGANGSSOKNAD)return s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Førstegangsbehandling"});const e=i.find(d=>d.kode===t);return e?e.navn:""}),l=s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Ferdigstilte"}),p=s.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Nye"}),b=o.map(t=>{const e=r.find(d=>d.behandlingType===t);return e?e.antallFerdigstilte:0}),N=o.map(t=>{const e=r.find(d=>d.behandlingType===t);return e?e.antallNye:0});return g.jsx(f,{height:a,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[l,p],top:"bottom"},grid:{top:"5%",left:"3%",right:"4%",bottom:"12%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:y},series:[{name:l,type:"bar",data:b},{name:p,type:"bar",data:N}],color:["#38a161","#337c9b"]}})};m.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const I=(a=[])=>{const r=u();return a.filter(i=>r.isSame(u(i.dato,F),"day"))},R=({height:a,nyeOgFerdigstilteOppgaver:r})=>{const i=O("BehandlingType"),s=c.useMemo(()=>I(r),[r]);return g.jsxs(k,{gap:"1",children:[g.jsx(h,{size:"xsmall",children:g.jsx(T,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.IDag"})}),g.jsx(m,{height:a,nyeOgFerdigstilteOppgaver:s,behandlingTyper:i})]})};R.__docgenInfo={description:"",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};export{R as N};
