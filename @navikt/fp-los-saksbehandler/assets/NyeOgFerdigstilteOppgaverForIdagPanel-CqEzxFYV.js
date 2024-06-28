import{r as l,R as e}from"./index-DVXBtNgz.js";import{d as u}from"./dayjs.min-Dkhc0ShP.js";import{a as O,H as f,d as y,i as I,L as E,A as k}from"./nb_NO-B4G50tbZ.js";import{Y as a,I as h}from"./index.es-BkMxg3KK.js";import{u as R}from"./useLosKodeverk-B_YlLI5l.js";import{R as T}from"./FlyttReservasjonModal-D0LWy4vy.js";import{P as G}from"./Panel-CFLcWv7D.js";const o=[a.TILBAKEKREVING_REVURDERING,a.TILBAKEKREVING,a.DOKUMENTINNSYN,a.KLAGE,a.REVURDERING,a.FORSTEGANGSSOKNAD],c=({height:s,nyeOgFerdigstilteOppgaver:r,behandlingTyper:n})=>{const g=O(),F=l.useMemo(()=>o.map(i=>{if(i===a.FORSTEGANGSSOKNAD)return g.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Førstegangsbehandling"});const t=n.find(d=>d.kode===i);return t?t.navn:""}),[n]),p=g.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Ferdigstilte"}),m=g.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Nye"}),v=l.useMemo(()=>o.map(i=>{const t=r.find(d=>d.behandlingType===i);return t?t.antallFerdigstilte:0}),[r]),b=l.useMemo(()=>o.map(i=>{const t=r.find(d=>d.behandlingType===i);return t?t.antallNye:0}),[r]);return e.createElement(G,null,e.createElement(T,{height:s,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[p,m]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:F},series:[{name:p,type:"bar",data:v},{name:m,type:"bar",data:b}],color:["#38a161","#337c9b"]}}))};c.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagGraf",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const q=(s=[])=>{const r=u();return s.filter(n=>r.isSame(u(n.dato,k),"day"))},N=({height:s,nyeOgFerdigstilteOppgaver:r})=>{const n=R(h.BEHANDLING_TYPE),g=l.useMemo(()=>q(r),[r]);return e.createElement(e.Fragment,null,e.createElement(f,{size:"small"},e.createElement(y,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.NyeOgFerdigstilte"})),e.createElement(I,{eightPx:!0}),e.createElement(E,{size:"small"},e.createElement(y,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.IDag"})),e.createElement(c,{height:s,nyeOgFerdigstilteOppgaver:g,behandlingTyper:n}))},x=N;N.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagPanel.",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}`,signature:{properties:[{key:"behandlingType",value:{name:"string",required:!0}},{key:"antallNye",value:{name:"number",required:!0}},{key:"antallFerdigstilte",value:{name:"number",required:!0}},{key:"dato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  behandlingType: string;
  antallNye: number;
  antallFerdigstilte: number;
  dato: string;
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};export{x as N};
