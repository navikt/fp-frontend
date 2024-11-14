import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{u as R,L as x,M as v}from"./nb_NO-xOTxt9dL.js";import{u as G,$ as S,k as F}from"./index.es-hWEM_5pc.js";import{y as T}from"./useRestApiRunner-C_OWMqIS.js";import{Y as o,I as b,z as d}from"./index.es-Cl_yxThX.js";import{r as p}from"./index-uubelm5h.js";import{R as L}from"./FlyttReservasjonModal-BQeLkUs7.js";import{P as Y}from"./Panel-ClMHD6wP.js";import{S as P}from"./StoreValuesInLocalStorage-D6Hb4UHw.js";import{u as k}from"./useLosKodeverk-RIRSZOsd.js";const c=[o.TILBAKEKREVING_REVURDERING,o.TILBAKEKREVING,o.DOKUMENTINNSYN,o.KLAGE,o.REVURDERING,o.FORSTEGANGSSOKNAD],A=s=>{const t=s.reduce((n,e)=>{const r=c.findIndex(i=>i===e.behandlingType)+1;return{...n,[r]:n[r]?n[r]+e.antall:e.antall}},{});return c.map((n,e)=>t[e+1])},N=({height:s,oppgaverForAvdeling:t,behandlingTyper:n})=>{const e=R(),r=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBehandling"}),i=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBeslutter"}),m=p.useMemo(()=>c.map(l=>{const f=n.find(B=>B.kode===l);return f?f.navn:""}),[n]),u=p.useMemo(()=>A(t.filter(l=>l.tilBehandling)),[t]),g=p.useMemo(()=>A(t.filter(l=>!l.tilBehandling)),[t]);return a.jsx(Y,{children:a.jsx(L,{height:s,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Antall_åpne_behandlinger"}}},legend:{data:[r,i]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:m},series:[{name:r,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:u},{name:i,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:g}],color:["#337c9b","#38a161"]}})})};N.__docgenInfo={description:"FordelingAvBehandlingstypeGraf.",methods:[],displayName:"FordelingAvBehandlingstypeGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"OppgaverForAvdeling[]"},description:""}}};const y=(s,t)=>{const n=s.find(e=>e.kode===t);return n?n.navn:""},h="ALLE",E="fordelingAvBehandlingstype",q={valgtYtelseType:h},j=({height:s,oppgaverForAvdeling:t,getValueFromLocalStorage:n})=>{const e=k(b.FAGSAK_YTELSE),r=k(b.BEHANDLING_TYPE),i=n(E),m=i?JSON.parse(i):void 0,u=G({defaultValues:m||q}),g=u.watch();return a.jsxs(S,{formMethods:u,children:[a.jsx(P,{stateKey:E,values:g}),a.jsx(x,{size:"small",children:a.jsx(v,{id:"FordelingAvBehandlingstypePanel.Fordeling"})}),a.jsx(T,{sixteenPx:!0}),a.jsx(F,{name:"valgtYtelseType",isHorizontal:!0,radios:[{value:d.FORELDREPENGER,label:y(e,d.FORELDREPENGER)},{value:d.ENGANGSSTONAD,label:y(e,d.ENGANGSSTONAD)},{value:d.SVANGERSKAPSPENGER,label:y(e,d.SVANGERSKAPSPENGER)},{value:h,label:a.jsx(v,{id:"FordelingAvBehandlingstypePanel.Alle"})}]}),a.jsx(T,{sixteenPx:!0}),a.jsx(N,{height:s,behandlingTyper:r,oppgaverForAvdeling:t?t.filter(l=>g.valgtYtelseType===h?!0:g.valgtYtelseType===l.fagsakYtelseType):[]})]})};j.__docgenInfo={description:"FordelingAvBehandlingstypePanel.",methods:[],displayName:"FordelingAvBehandlingstypePanel",props:{height:{required:!0,tsType:{name:"number"},description:""},oppgaverForAvdeling:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
