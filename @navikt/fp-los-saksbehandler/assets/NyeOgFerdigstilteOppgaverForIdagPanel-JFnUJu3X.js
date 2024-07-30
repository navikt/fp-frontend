import{j as e,d as m}from"./dayjs.min-ZUODdiE-.js";import{r as l}from"./index-uubelm5h.js";import{a as O,f,d as y,j as h,b as I,A as k}from"./nb_NO-DcKd4Lqo.js";import{Y as a,I as T}from"./index.es-BkMxg3KK.js";import{u as x}from"./useLosKodeverk-ClvJXwZR.js";import{R}from"./FlyttReservasjonModal-C_KTvU5s.js";import{P as E}from"./Panel-CPWfv2j5.js";const o=[a.TILBAKEKREVING_REVURDERING,a.TILBAKEKREVING,a.DOKUMENTINNSYN,a.KLAGE,a.REVURDERING,a.FORSTEGANGSSOKNAD],N=({height:s,nyeOgFerdigstilteOppgaver:r,behandlingTyper:n})=>{const d=O(),b=l.useMemo(()=>o.map(i=>{if(i===a.FORSTEGANGSSOKNAD)return d.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Førstegangsbehandling"});const t=n.find(g=>g.kode===i);return t?t.navn:""}),[n]),p=d.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Ferdigstilte"}),u=d.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Nye"}),c=l.useMemo(()=>o.map(i=>{const t=r.find(g=>g.behandlingType===i);return t?t.antallFerdigstilte:0}),[r]),v=l.useMemo(()=>o.map(i=>{const t=r.find(g=>g.behandlingType===i);return t?t.antallNye:0}),[r]);return e.jsx(E,{children:e.jsx(R,{height:s,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[p,u]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:b},series:[{name:p,type:"bar",data:c},{name:u,type:"bar",data:v}],color:["#38a161","#337c9b"]}})})};N.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagGraf",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const G=(s=[])=>{const r=m();return s.filter(n=>r.isSame(m(n.dato,k),"day"))},F=({height:s,nyeOgFerdigstilteOppgaver:r})=>{const n=x(T.BEHANDLING_TYPE),d=l.useMemo(()=>G(r),[r]);return e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"small",children:e.jsx(y,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.NyeOgFerdigstilte"})}),e.jsx(h,{eightPx:!0}),e.jsx(I,{size:"small",children:e.jsx(y,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.IDag"})}),e.jsx(N,{height:s,nyeOgFerdigstilteOppgaver:d,behandlingTyper:n})]})},D=F;F.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagPanel.",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};export{D as N};
