import{j as e}from"./jsx-runtime-QvZ8i92b.js";import{r as l}from"./index-uubelm5h.js";import{L as O,M as d,B as M}from"./nb_NO-Zqge3fS6.js";import{Z as _}from"./index.es-DGARnTEE.js";import"./aktivitetStatus-B1m96ipJ.js";import{K as D}from"./kodeverkTyper-CavWL6Ds.js";import{O as K,F}from"./FlyttReservasjonModal-CMPV57WJ.js";import{R as b}from"./useRestApiRunner-Dz_KBbnA.js";import{b as g,a as c}from"./fplosRestApi-DIvKj8Ld.js";import{V as H}from"./VStack-C7XzQG3E.js";import{T as n}from"./Table-Dp5M2zv1.js";import{S as P}from"./index.es-C82Zs4UF.js";import{u as V,S as B}from"./Modal-nRd4VDWO.js";var L=function(s,v){var o={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&v.indexOf(a)<0&&(o[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(s);t<a.length;t++)v.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(s,a[t])&&(o[a[t]]=s[a[t]]);return o};const G=l.forwardRef((s,v)=>{var{title:o,titleId:a}=s,t=L(s,["title","titleId"]);let i=V();return i=o?a||"title-"+i:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:v,"aria-labelledby":i},t),o?l.createElement("title",{id:i},o):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M3.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M9 15.75A5.25 5.25 0 0 0 3.75 21a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 13.5 0 .75.75 0 0 1-1.5 0A5.25 5.25 0 0 0 9 15.75m7.214-10.824a.75.75 0 1 0-.428 1.438A2.752 2.752 0 0 1 15 11.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 .75.75 4.25 4.25 0 0 1 4.25 4.25.75.75 0 0 0 1.5 0 5.75 5.75 0 0 0-4.206-5.539 4.251 4.251 0 0 0-.33-8.035",clipRule:"evenodd"}))}),U=(s,v,o,a)=>{let t=s[v];if(!t||t.length===0)return"";const i=t.find(m=>m.kode===o);return i?i.navn:""},z="_removeIcon_1c1ll_1",J="_calendarIcon_1c1ll_7",Y="_flyttIcon_1c1ll_14",k={removeIcon:z,calendarIcon:J,flyttIcon:Y},Z=({reservasjoner:s,opphevReservasjon:v,hentAvdelingensReservasjoner:o,alleKodeverk:a})=>{const[t,i]=l.useState(!1),[m,y]=l.useState(!1),[u,R]=l.useState(void 0),j=l.useCallback(()=>{i(!1)},[]),f=l.useCallback(r=>{i(!0),R(r)},[]),T=l.useCallback(r=>{y(!0),R(r)},[]),w=l.useCallback(()=>{y(!1)},[]),p=l.useMemo(()=>s.sort((r,C)=>r.reservertAvNavn.localeCompare(C.reservertAvNavn)),[s]),{startRequest:x}=g.useRestApiRunner(c.ENDRE_OPPGAVERESERVASJON),S=async r=>{if(!u)throw new Error("Reservasjon må være valgt");await x({oppgaveId:u.oppgaveId,reserverTil:r}),j(),o()},{startRequest:A}=g.useRestApiRunner(c.FLYTT_RESERVASJON),I=async r=>{if(!u)throw new Error("Reservasjon må være valgt");await A({oppgaveId:u.oppgaveId,...r}),o()},{startRequest:N,state:h,data:E,resetRequestData:q}=g.useRestApiRunner(c.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK);return e.jsxs(H,{gap:"2",children:[e.jsx(O,{size:"small",children:e.jsx(d,{id:"ReservasjonerTabell.Reservasjoner"})}),p.length===0&&e.jsx(M,{size:"small",children:e.jsx(d,{id:"ReservasjonerTabell.IngenReservasjoner"})}),p.length>0&&e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsxs(n.Row,{children:[e.jsx(n.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Navn"})}),e.jsx(n.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Saksnr"})}),e.jsx(n.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.BehandlingType"})}),e.jsx(n.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.ReservertTil"})}),e.jsx(n.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Endre"})}),e.jsx(n.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Flytt"})}),e.jsx(n.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Slett"})})]})}),e.jsx(n.Body,{children:p.map(r=>e.jsxs(n.Row,{shadeOnHover:!1,children:[e.jsx(n.DataCell,{children:r.reservertAvNavn}),e.jsx(n.DataCell,{children:r.oppgaveSaksNr}),e.jsx(n.DataCell,{children:U(a,D.BEHANDLING_TYPE,r.behandlingType)}),e.jsx(n.DataCell,{children:e.jsx(d,{id:"ReservasjonerTabell.ReservertTilFormat",values:_(r.reservertTilTidspunkt)})}),e.jsx(n.DataCell,{children:e.jsx(P,{className:k.calendarIcon,onClick:()=>f(r)})}),e.jsx(n.DataCell,{children:e.jsx(G,{className:k.flyttIcon,onClick:()=>T(r)})}),e.jsx(n.DataCell,{children:e.jsx(B,{className:k.removeIcon,onClick:()=>v(r.oppgaveId)})})]},r.oppgaveId))})]}),u&&t&&e.jsx(K,{closeModal:j,reserverTilDefault:u.reservertTilTidspunkt,endreOppgavereservasjon:S}),u&&m&&e.jsx(F,{closeModal:w,flyttOppgavereservasjon:I,hentSaksbehandler:r=>N({brukerIdent:r}),hentSaksbehandlerIsPending:h===b.LOADING,hentSaksbehandlerIsSuccess:h===b.SUCCESS,saksbehandler:E,resetHentSaksbehandler:q})]})};Z.__docgenInfo={description:"",methods:[],displayName:"ReservasjonerTabell",props:{reservasjoner:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};export{Z as R};
