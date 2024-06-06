import{r as d,R as e}from"./index-DVXBtNgz.js";import{a as O,H as f,e as u,j as I,L as E,d as y,N as k}from"./nb_NO-OtGB-zeg.js";import{Y as a,I as h}from"./index.es-BkMxg3KK.js";import{u as R}from"./useLosKodeverk-BPn0-cQV.js";import{R as T}from"./FlyttReservasjonModal-B1lxaZFw.js";import{P as G}from"./Panel-B02zeD3J.js";const o=[a.TILBAKEKREVING_REVURDERING,a.TILBAKEKREVING,a.DOKUMENTINNSYN,a.KLAGE,a.REVURDERING,a.FORSTEGANGSSOKNAD],N=({height:s,nyeOgFerdigstilteOppgaver:r,behandlingTyper:n})=>{const g=O(),F=d.useMemo(()=>o.map(i=>{if(i===a.FORSTEGANGSSOKNAD)return g.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Førstegangsbehandling"});const t=n.find(l=>l.kode===i);return t?t.navn:""}),[n]),p=g.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Ferdigstilte"}),m=g.formatMessage({id:"NyeOgFerdigstilteOppgaverForIdagGraf.Nye"}),v=d.useMemo(()=>o.map(i=>{const t=r.find(l=>l.behandlingType===i);return t?t.antallFerdigstilte:0}),[r]),b=d.useMemo(()=>o.map(i=>{const t=r.find(l=>l.behandlingType===i);return t?t.antallNye:0}),[r]);return e.createElement(G,null,e.createElement(T,{height:s,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[p,m]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:F},series:[{name:p,type:"bar",data:v},{name:m,type:"bar",data:b}],color:["#38a161","#337c9b"]}}))};N.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagGraf",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"NyeOgFerdigstilteOppgaver[]"},description:""}}};const q=(s=[])=>{const r=y();return s.filter(n=>r.isSame(y(n.dato,k),"day"))},c=({height:s,nyeOgFerdigstilteOppgaver:r})=>{const n=R(h.BEHANDLING_TYPE),g=d.useMemo(()=>q(r),[r]);return e.createElement(e.Fragment,null,e.createElement(f,{size:"small"},e.createElement(u,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.NyeOgFerdigstilte"})),e.createElement(I,{eightPx:!0}),e.createElement(E,{size:"small"},e.createElement(u,{id:"NyeOgFerdigstilteOppgaverForIdagPanel.IDag"})),e.createElement(N,{height:s,nyeOgFerdigstilteOppgaver:g,behandlingTyper:n}))},D=c;c.__docgenInfo={description:"NyeOgFerdigstilteOppgaverForIdagPanel.",methods:[],displayName:"NyeOgFerdigstilteOppgaverForIdagPanel",props:{height:{required:!0,tsType:{name:"number"},description:""},nyeOgFerdigstilteOppgaver:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
