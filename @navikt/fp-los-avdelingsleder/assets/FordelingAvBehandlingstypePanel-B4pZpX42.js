import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{d as R,u as x,Y as G,L as S,M as f,y as T,j as F}from"./nb_NO-BE-Qr1m0.js";import{Y as o,I as b,z as d}from"./index.es-Cl_yxThX.js";import{r as m}from"./index-uubelm5h.js";import{R as Y}from"./FlyttReservasjonModal-ZEcxWev_.js";import{P as L}from"./Panel-DEh15Zsa.js";import{S as P}from"./StoreValuesInLocalStorage-D6Hb4UHw.js";import{u as k}from"./useLosKodeverk-Bf_J3o3R.js";const c=[o.TILBAKEKREVING_REVURDERING,o.TILBAKEKREVING,o.DOKUMENTINNSYN,o.KLAGE,o.REVURDERING,o.FORSTEGANGSSOKNAD],A=s=>{const t=s.reduce((n,e)=>{const r=c.findIndex(i=>i===e.behandlingType)+1;return{...n,[r]:n[r]?n[r]+e.antall:e.antall}},{});return c.map((n,e)=>t[e+1])},N=({height:s,oppgaverForAvdeling:t,behandlingTyper:n})=>{const e=R(),r=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBehandling"}),i=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBeslutter"}),p=m.useMemo(()=>c.map(l=>{const v=n.find(B=>B.kode===l);return v?v.navn:""}),[n]),u=m.useMemo(()=>A(t.filter(l=>l.tilBehandling)),[t]),g=m.useMemo(()=>A(t.filter(l=>!l.tilBehandling)),[t]);return a.jsx(L,{children:a.jsx(Y,{height:s,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Antall_åpne_behandlinger"}}},legend:{data:[r,i]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:p},series:[{name:r,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:u},{name:i,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:g}],color:["#337c9b","#38a161"]}})})};N.__docgenInfo={description:"FordelingAvBehandlingstypeGraf.",methods:[],displayName:"FordelingAvBehandlingstypeGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"OppgaverForAvdeling[]"},description:""}}};const y=(s,t)=>{const n=s.find(e=>e.kode===t);return n?n.navn:""},h="ALLE",E="fordelingAvBehandlingstype",j={valgtYtelseType:h},q=({height:s,oppgaverForAvdeling:t,getValueFromLocalStorage:n})=>{const e=k(b.FAGSAK_YTELSE),r=k(b.BEHANDLING_TYPE),i=n(E),p=i?JSON.parse(i):void 0,u=x({defaultValues:p||j}),g=u.watch();return a.jsxs(G,{formMethods:u,children:[a.jsx(P,{stateKey:E,values:g}),a.jsx(S,{size:"small",children:a.jsx(f,{id:"FordelingAvBehandlingstypePanel.Fordeling"})}),a.jsx(T,{sixteenPx:!0}),a.jsx(F,{name:"valgtYtelseType",isHorizontal:!0,radios:[{value:d.FORELDREPENGER,label:y(e,d.FORELDREPENGER)},{value:d.ENGANGSSTONAD,label:y(e,d.ENGANGSSTONAD)},{value:d.SVANGERSKAPSPENGER,label:y(e,d.SVANGERSKAPSPENGER)},{value:h,label:a.jsx(f,{id:"FordelingAvBehandlingstypePanel.Alle"})}]}),a.jsx(T,{sixteenPx:!0}),a.jsx(N,{height:s,behandlingTyper:r,oppgaverForAvdeling:t?t.filter(l=>g.valgtYtelseType===h?!0:g.valgtYtelseType===l.fagsakYtelseType):[]})]})};q.__docgenInfo={description:"FordelingAvBehandlingstypePanel.",methods:[],displayName:"FordelingAvBehandlingstypePanel",props:{height:{required:!0,tsType:{name:"number"},description:""},oppgaverForAvdeling:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}`,signature:{properties:[{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"behandlingType",value:{name:"string",required:!0}},{key:"tilBehandling",value:{name:"boolean",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}>`}],raw:"OppgaverForAvdeling[]"},description:""},getValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => string | undefined",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:""}}};export{q as F};
