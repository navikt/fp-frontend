import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{u as R,$ as x,k as G}from"./index.es-C82Zs4UF.js";import{u as F,L as S,M as v}from"./nb_NO-Zqge3fS6.js";import{y as T}from"./index.es-DGARnTEE.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as o}from"./fagsakYtelseType-DI8GXtVr.js";import{K as k}from"./kodeverkTyper-CavWL6Ds.js";import{S as L}from"./StoreValuesInLocalStorage-D6Hb4UHw.js";import{u as b}from"./useLosKodeverk-D3IvkdFj.js";import{r as p}from"./index-uubelm5h.js";import{B as d}from"./behandlingType-BdbjGMJD.js";import{R as Y}from"./FlyttReservasjonModal-CMPV57WJ.js";import{P}from"./Panel-Dwv4sAY7.js";const h=[d.TILBAKEKREVING_REVURDERING,d.TILBAKEKREVING,d.DOKUMENTINNSYN,d.KLAGE,d.REVURDERING,d.FORSTEGANGSSOKNAD],A=s=>{const t=s.reduce((n,e)=>{const r=h.findIndex(i=>i===e.behandlingType)+1;return{...n,[r]:n[r]?n[r]+e.antall:e.antall}},{});return h.map((n,e)=>t[e+1])},B=({height:s,oppgaverForAvdeling:t,behandlingTyper:n})=>{const e=F(),r=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBehandling"}),i=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBeslutter"}),m=p.useMemo(()=>h.map(l=>{const f=n.find(N=>N.kode===l);return f?f.navn:""}),[n]),u=p.useMemo(()=>A(t.filter(l=>l.tilBehandling)),[t]),g=p.useMemo(()=>A(t.filter(l=>!l.tilBehandling)),[t]);return a.jsx(P,{children:a.jsx(Y,{height:s,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Antall_åpne_behandlinger"}}},legend:{data:[r,i]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:m},series:[{name:r,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:u},{name:i,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:g}],color:["#337c9b","#38a161"]}})})};B.__docgenInfo={description:"FordelingAvBehandlingstypeGraf.",methods:[],displayName:"FordelingAvBehandlingstypeGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"OppgaverForAvdeling[]"},description:""}}};const y=(s,t)=>{const n=s.find(e=>e.kode===t);return n?n.navn:""},c="ALLE",E="fordelingAvBehandlingstype",q={valgtYtelseType:c},j=({height:s,oppgaverForAvdeling:t,getValueFromLocalStorage:n})=>{const e=b(k.FAGSAK_YTELSE),r=b(k.BEHANDLING_TYPE),i=n(E),m=i?JSON.parse(i):void 0,u=R({defaultValues:m||q}),g=u.watch();return a.jsxs(x,{formMethods:u,children:[a.jsx(L,{stateKey:E,values:g}),a.jsx(S,{size:"small",children:a.jsx(v,{id:"FordelingAvBehandlingstypePanel.Fordeling"})}),a.jsx(T,{sixteenPx:!0}),a.jsx(G,{name:"valgtYtelseType",isHorizontal:!0,radios:[{value:o.FORELDREPENGER,label:y(e,o.FORELDREPENGER)},{value:o.ENGANGSSTONAD,label:y(e,o.ENGANGSSTONAD)},{value:o.SVANGERSKAPSPENGER,label:y(e,o.SVANGERSKAPSPENGER)},{value:c,label:a.jsx(v,{id:"FordelingAvBehandlingstypePanel.Alle"})}]}),a.jsx(T,{sixteenPx:!0}),a.jsx(B,{height:s,behandlingTyper:r,oppgaverForAvdeling:t?t.filter(l=>g.valgtYtelseType===c?!0:g.valgtYtelseType===l.fagsakYtelseType):[]})]})};j.__docgenInfo={description:"FordelingAvBehandlingstypePanel.",methods:[],displayName:"FordelingAvBehandlingstypePanel",props:{height:{required:!0,tsType:{name:"number"},description:""},oppgaverForAvdeling:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}`,signature:{properties:[{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"behandlingType",value:{name:"string",required:!0}},{key:"tilBehandling",value:{name:"boolean",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}>`}],raw:"OppgaverForAvdeling[]"},description:""},getValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => string | undefined",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:""}}};export{j as F};
