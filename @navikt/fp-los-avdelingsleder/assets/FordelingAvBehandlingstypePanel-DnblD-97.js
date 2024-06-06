import{r as p,R as a}from"./index-BBkUAzwr.js";import{e as B,u as G,O as S,L as F,M as h,a as f,k as L}from"./nb_NO-Dpo8zdWW.js";import{Y as o,I as T,z as d}from"./index.es-Cl_yxThX.js";import{R as Y}from"./FlyttReservasjonModal-2X6215Bk.js";import{P}from"./Panel-BeohLQId.js";import{S as q}from"./StoreValuesInLocalStorage-DbvB94aq.js";import{u as b}from"./useLosKodeverk-CPiOfefX.js";const c=[o.TILBAKEKREVING_REVURDERING,o.TILBAKEKREVING,o.DOKUMENTINNSYN,o.KLAGE,o.REVURDERING,o.FORSTEGANGSSOKNAD],k=l=>{const t=l.reduce((n,e)=>{const r=c.findIndex(s=>s===e.behandlingType)+1;return{...n,[r]:n[r]?n[r]+e.antall:e.antall}},{});return c.map((n,e)=>t[e+1])},N=({height:l,oppgaverForAvdeling:t,behandlingTyper:n})=>{const e=B(),r=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBehandling"}),s=e.formatMessage({id:"FordelingAvBehandlingstypeGraf.TilBeslutter"}),m=p.useMemo(()=>c.map(i=>{const E=n.find(R=>R.kode===i);return E?E.navn:""}),[n]),u=p.useMemo(()=>k(t.filter(i=>i.tilBehandling)),[t]),g=p.useMemo(()=>k(t.filter(i=>!i.tilBehandling)),[t]);return a.createElement(P,null,a.createElement(Y,{height:l,option:{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{feature:{saveAsImage:{title:"Lagre ",name:"Antall_åpne_behandlinger"}}},legend:{data:[r,s]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value"},yAxis:{type:"category",data:m},series:[{name:r,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:u},{name:s,type:"bar",stack:"total",label:{show:!0},emphasis:{focus:"series"},data:g}],color:["#337c9b","#38a161"]}}))};N.__docgenInfo={description:"FordelingAvBehandlingstypeGraf.",methods:[],displayName:"FordelingAvBehandlingstypeGraf",props:{height:{required:!0,tsType:{name:"number"},description:""},behandlingTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"OppgaverForAvdeling[]"},description:""}}};const y=(l,t)=>{const n=l.find(e=>e.kode===t);return n?n.navn:""},v="ALLE",A="fordelingAvBehandlingstype",w={valgtYtelseType:v},I=({height:l,oppgaverForAvdeling:t,getValueFromLocalStorage:n})=>{const e=b(T.FAGSAK_YTELSE),r=b(T.BEHANDLING_TYPE),s=n(A),m=s?JSON.parse(s):void 0,u=G({defaultValues:m||w}),g=u.watch();return a.createElement(S,{formMethods:u},a.createElement(q,{stateKey:A,values:g}),a.createElement(F,{size:"small"},a.createElement(h,{id:"FordelingAvBehandlingstypePanel.Fordeling"})),a.createElement(f,{sixteenPx:!0}),a.createElement(L,{name:"valgtYtelseType",isHorizontal:!0,radios:[{value:d.FORELDREPENGER,label:y(e,d.FORELDREPENGER)},{value:d.ENGANGSSTONAD,label:y(e,d.ENGANGSSTONAD)},{value:d.SVANGERSKAPSPENGER,label:y(e,d.SVANGERSKAPSPENGER)},{value:v,label:a.createElement(h,{id:"FordelingAvBehandlingstypePanel.Alle"})}]}),a.createElement(f,{sixteenPx:!0}),a.createElement(N,{height:l,behandlingTyper:r,oppgaverForAvdeling:t?t.filter(i=>g.valgtYtelseType===v?!0:g.valgtYtelseType===i.fagsakYtelseType):[]}))};I.__docgenInfo={description:"FordelingAvBehandlingstypePanel.",methods:[],displayName:"FordelingAvBehandlingstypePanel",props:{height:{required:!0,tsType:{name:"number"},description:""},oppgaverForAvdeling:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}`,signature:{properties:[{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"behandlingType",value:{name:"string",required:!0}},{key:"tilBehandling",value:{name:"boolean",required:!0}},{key:"antall",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  fagsakYtelseType: string;
  behandlingType: string;
  tilBehandling: boolean;
  antall: number;
}>`}],raw:"OppgaverForAvdeling[]"},description:""},getValueFromLocalStorage:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => string | undefined",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:""}}};export{I as F};
