import{j as t}from"./dayjs.min-ZUODdiE-.js";import{a as R,u as x,Y as G,L as S,M as f,b,D as F}from"./nb_NO-DgrJ5I7_.js";import{Y as o,I as T,z as d}from"./index.es-Cl_yxThX.js";import{r as m}from"./index-uubelm5h.js";import{R as Y}from"./FlyttReservasjonModal-T2LUAHV7.js";import{P as L}from"./Panel-CmVqk4jv.js";import{S as P}from"./StoreValuesInLocalStorage-D6Hb4UHw.js";import{u as k}from"./useLosKodeverk-xh6nOoB3.js";const c=[o.TILBAKEKREVING_REVURDERING,o.TILBAKEKREVING,o.DOKUMENTINNSYN,o.KLAGE,o.REVURDERING,o.FORSTEGANGSSOKNAD],A=s=>{const a=s.reduce((n,e)=>{const r=c.findIndex(i=>i===e.behandlingType)+1;return{...n,[r]:n[r]?n[r]+e.antall:e.antall}},{});return c.map((n,e)=>a[e+1])},N=({height:s,oppgaverForAvdeling:a,behandlingTyper:n})=>{const e=R(),r=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBehandling"}),i=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBeslutter"}),p=m.useMemo(()=>c.map(l=>{const v=n.find(B=>B.kode===l);return v?v.navn:""}),[n]),u=m.useMemo(()=>A(a.filter(l=>l.tilBehandling)),[a]),g=m.useMemo(()=>A(a.filter(l=>!l.tilBehandling)),[a]);return t.jsx(L,{children:t.jsx(Y,{height:s,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Antall_åpne_behandlinger"}}},legend:{data:[r,i]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:p},series:[{name:r,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:u},{name:i,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:g}],color:["#337c9b","#38a161"]}})})};N.__docgenInfo={description:"FordelingAvBehandlingstypeGraf.",methods:[],displayName:"FordelingAvBehandlingstypeGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"OppgaverForAvdeling[]"},description:""}}};const y=(s,a)=>{const n=s.find(e=>e.kode===a);return n?n.navn:""},h="ALLE",E="fordelingAvBehandlingstype",q={valgtYtelseType:h},j=({height:s,oppgaverForAvdeling:a,getValueFromLocalStorage:n})=>{const e=k(T.FAGSAK_YTELSE),r=k(T.BEHANDLING_TYPE),i=n(E),p=i?JSON.parse(i):void 0,u=x({defaultValues:p||q}),g=u.watch();return t.jsxs(G,{formMethods:u,children:[t.jsx(P,{stateKey:E,values:g}),t.jsx(S,{size:"small",children:t.jsx(f,{id:"FordelingAvBehandlingstypePanel.Fordeling"})}),t.jsx(b,{sixteenPx:!0}),t.jsx(F,{name:"valgtYtelseType",isHorizontal:!0,radios:[{value:d.FORELDREPENGER,label:y(e,d.FORELDREPENGER)},{value:d.ENGANGSSTONAD,label:y(e,d.ENGANGSSTONAD)},{value:d.SVANGERSKAPSPENGER,label:y(e,d.SVANGERSKAPSPENGER)},{value:h,label:t.jsx(f,{id:"FordelingAvBehandlingstypePanel.Alle"})}]}),t.jsx(b,{sixteenPx:!0}),t.jsx(N,{height:s,behandlingTyper:r,oppgaverForAvdeling:a?a.filter(l=>g.valgtYtelseType===h?!0:g.valgtYtelseType===l.fagsakYtelseType):[]})]})};j.__docgenInfo={description:"FordelingAvBehandlingstypePanel.",methods:[],displayName:"FordelingAvBehandlingstypePanel",props:{height:{required:!0,tsType:{name:"number"},description:""},oppgaverForAvdeling:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
