import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as l}from"./index-uubelm5h.js";import{L as q,M as d,B as E}from"./nb_NO-Zqge3fS6.js";import{Z as M}from"./useRestApiRunner-Co55yBK5.js";import"./aktivitetStatus-B1m96ipJ.js";import{K as O}from"./kodeverkTyper-CavWL6Ds.js";import{O as C,F as _}from"./FlyttReservasjonModal-J11NB3lG.js";import{b as g,a as c}from"./fplosRestApi--K68MEhy.js";import{V as D}from"./VStack-C7XzQG3E.js";import{T as r}from"./Table-DoUdIv1o.js";import{S as K}from"./index.es-DSskcgoM.js";import{u as F,S as H}from"./Modal-nRd4VDWO.js";var P=function(a,v){var o={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&v.indexOf(n)<0&&(o[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(a);s<n.length;s++)v.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(a,n[s])&&(o[n[s]]=a[n[s]]);return o};const V=l.forwardRef((a,v)=>{var{title:o,titleId:n}=a,s=P(a,["title","titleId"]);let i=F();return i=o?n||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:v,"aria-labelledby":i},s),o?l.createElement("title",{id:i},o):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M3.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M9 15.75A5.25 5.25 0 0 0 3.75 21a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 13.5 0 .75.75 0 0 1-1.5 0A5.25 5.25 0 0 0 9 15.75m7.214-10.824a.75.75 0 1 0-.428 1.438A2.752 2.752 0 0 1 15 11.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 .75.75 4.25 4.25 0 0 1 4.25 4.25.75.75 0 0 0 1.5 0 5.75 5.75 0 0 0-4.206-5.539 4.251 4.251 0 0 0-.33-8.035",clipRule:"evenodd"}))}),B=(a,v,o,n)=>{let s=a[v];if(!s||s.length===0)return"";const i=s.find(m=>m.kode===o);return i?i.navn:""},L="_removeIcon_1c1ll_1",z="_calendarIcon_1c1ll_7",G="_flyttIcon_1c1ll_14",k={removeIcon:L,calendarIcon:z,flyttIcon:G},J=({reservasjoner:a,opphevReservasjon:v,hentAvdelingensReservasjoner:o,alleKodeverk:n})=>{const[s,i]=l.useState(!1),[m,y]=l.useState(!1),[u,R]=l.useState(void 0),j=l.useCallback(()=>{i(!1)},[]),h=l.useCallback(t=>{i(!0),R(t)},[]),b=l.useCallback(t=>{y(!0),R(t)},[]),T=l.useCallback(()=>{y(!1)},[]),p=l.useMemo(()=>a.sort((t,N)=>t.reservertAvNavn.localeCompare(N.reservertAvNavn)),[a]),{startRequest:f}=g.useRestApiRunner(c.ENDRE_OPPGAVERESERVASJON),{startRequest:x}=g.useRestApiRunner(c.FLYTT_RESERVASJON),{startRequest:w,state:A,data:S,resetRequestData:I}=g.useRestApiRunner(c.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK);return e.jsxs(D,{gap:"2",children:[e.jsx(q,{size:"small",children:e.jsx(d,{id:"ReservasjonerTabell.Reservasjoner"})}),p.length===0&&e.jsx(E,{size:"small",children:e.jsx(d,{id:"ReservasjonerTabell.IngenReservasjoner"})}),p.length>0&&e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsxs(r.Row,{children:[e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Navn"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Saksnr"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.BehandlingType"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.ReservertTil"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Endre"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Flytt"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Slett"})})]})}),e.jsx(r.Body,{children:p.map(t=>e.jsxs(r.Row,{shadeOnHover:!1,children:[e.jsx(r.DataCell,{children:t.reservertAvNavn}),e.jsx(r.DataCell,{children:t.oppgaveSaksNr}),e.jsx(r.DataCell,{children:B(n,O.BEHANDLING_TYPE,t.behandlingType)}),e.jsx(r.DataCell,{children:e.jsx(d,{id:"ReservasjonerTabell.ReservertTilFormat",values:M(t.reservertTilTidspunkt)})}),e.jsx(r.DataCell,{children:e.jsx(K,{className:k.calendarIcon,onClick:()=>h(t)})}),e.jsx(r.DataCell,{children:e.jsx(V,{className:k.flyttIcon,onClick:()=>b(t)})}),e.jsx(r.DataCell,{children:e.jsx(H,{className:k.removeIcon,onClick:()=>v(t.oppgaveId)})})]},t.oppgaveId))})]}),u&&s&&e.jsx(C,{closeModal:j,reserverTilDefault:u.reservertTilTidspunkt,endreReserverasjonState:j,hentReserverteOppgaver:o,oppgaveId:u.oppgaveId,endreOppgavereservasjon:f}),u&&m&&e.jsx(_,{closeModal:T,oppgaveId:u.oppgaveId,hentReserverteOppgaver:o,flyttOppgavereservasjon:x,hentSaksbehandler:w,hentSaksbehandlerState:A,saksbehandler:S,resetHentSaksbehandler:I})]})};J.__docgenInfo={description:"",methods:[],displayName:"ReservasjonerTabell",props:{reservasjoner:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  reservertAvUid: string;
  reservertAvNavn: string;
  reservertTilTidspunkt: string;
  oppgaveId: number;
  oppgaveSaksNr: number;
  behandlingType: string;
}`,signature:{properties:[{key:"reservertAvUid",value:{name:"string",required:!0}},{key:"reservertAvNavn",value:{name:"string",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!0}},{key:"oppgaveId",value:{name:"number",required:!0}},{key:"oppgaveSaksNr",value:{name:"number",required:!0}},{key:"behandlingType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  reservertAvUid: string;
  reservertAvNavn: string;
  reservertTilTidspunkt: string;
  oppgaveId: number;
  oppgaveSaksNr: number;
  behandlingType: string;
}>`}],raw:"Reservasjon[]"},description:""},opphevReservasjon:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgaveId: number) => Promise<string>",signature:{arguments:[{type:{name:"number"},name:"oppgaveId"}],return:{name:"Promise",elements:[{name:"string"}],raw:"Promise<string>"}}},description:""},hentAvdelingensReservasjoner:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};export{J as R};
