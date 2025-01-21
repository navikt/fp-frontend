import{j as a}from"./jsx-runtime-CLpGMVip.js";import{u as B,r as R,Z as F}from"./index.es-BS4uMHGm.js";import{b as q,L as S,M as f}from"./nb_NO-B4p7h2ZR.js";import{u as G}from"./useQuery-DFVsKHAH.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as o}from"./fagsakYtelseType-DI8GXtVr.js";import{K as k}from"./kodeverkTyper-CavWL6Ds.js";import{V as L,j as w}from"./fplosAvdelingslederApi-ByBFIqlo.js";import{S as x}from"./StoreValuesInLocalStorage-CzHz49GX.js";import{u as T}from"./useLosKodeverk-C2bgZdPP.js";import{B as d}from"./behandlingType-BdbjGMJD.js";import{R as Y}from"./FlyttReservasjonModal-CxEJ13zR.js";import"./index-B5OHeJSP.js";const v=[d.TILBAKEKREVING_REVURDERING,d.TILBAKEKREVING,d.DOKUMENTINNSYN,d.KLAGE,d.REVURDERING,d.FORSTEGANGSSOKNAD],h=({height:s,oppgaverForAvdeling:i,behandlingTyper:n})=>{const e=q(),r=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBehandling"}),l=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBeslutter"}),g=v.map(t=>{const p=n.find(N=>N.kode===t);return p?p.navn:""}),m=b(i.filter(t=>t.tilBehandling)),u=b(i.filter(t=>!t.tilBehandling));return a.jsx(Y,{height:s,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Antall_åpne_behandlinger"}}},legend:{data:[r,l]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:g},series:[{name:r,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:m},{name:l,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:u}],color:["#337c9b","#38a161"]}})},b=s=>{const i=s.reduce((n,e)=>{const r=v.findIndex(l=>l===e.behandlingType)+1;return{...n,[r]:n[r]?n[r]+e.antall:e.antall}},{});return v.map((n,e)=>i[e+1])};h.__docgenInfo={description:"",methods:[],displayName:"FordelingAvBehandlingstypeGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},oppgaverForAvdeling:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}`,signature:{properties:[{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"behandlingType",value:{name:"string",required:!0}},{key:"tilBehandling",value:{name:"boolean",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}>`}],raw:"OppgaverForAvdeling[]"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"FordelingAvBehandlingstypeGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},oppgaverForAvdeling:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}`,signature:{properties:[{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"behandlingType",value:{name:"string",required:!0}},{key:"tilBehandling",value:{name:"boolean",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}>`}],raw:"OppgaverForAvdeling[]"},description:""}}};const y=(s,i)=>{const n=s.find(e=>e.kode===i);return n?n.navn:""},c="ALLE",A="fordelingAvBehandlingstype",j={valgtYtelseType:c},E=({height:s,valgtAvdelingEnhet:i,getValueFromLocalStorage:n})=>{const{data:e}=G(w(i)),r=T(k.FAGSAK_YTELSE),l=T(k.BEHANDLING_TYPE),g=n(A),m=g?JSON.parse(g):void 0,u=B({defaultValues:m||j}),t=u.watch();return a.jsxs(R,{formMethods:u,children:[a.jsx(x,{stateKey:A,values:t}),a.jsxs(L,{gap:"2",children:[a.jsx(S,{size:"small",children:a.jsx(f,{id:"FordelingAvBehandlingstypePanel.Fordeling"})}),a.jsx(F,{name:"valgtYtelseType",isHorizontal:!0,radios:[{value:o.FORELDREPENGER,label:y(r,o.FORELDREPENGER)},{value:o.ENGANGSSTONAD,label:y(r,o.ENGANGSSTONAD)},{value:o.SVANGERSKAPSPENGER,label:y(r,o.SVANGERSKAPSPENGER)},{value:c,label:a.jsx(f,{id:"FordelingAvBehandlingstypePanel.Alle"})}]}),a.jsx(h,{height:s,behandlingTyper:l,oppgaverForAvdeling:e?e.filter(p=>t.valgtYtelseType===c?!0:t.valgtYtelseType===p.fagsakYtelseType):[]})]})]})};E.__docgenInfo={description:"",methods:[],displayName:"FordelingAvBehandlingstypePanel",props:{height:{required:!0,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},getValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => string | undefined",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:""}}};E.__docgenInfo={description:"",methods:[],displayName:"FordelingAvBehandlingstypePanel",props:{height:{required:!0,tsType:{name:"number"},description:""},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},getValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => string | undefined",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:""}}};export{E as F};
