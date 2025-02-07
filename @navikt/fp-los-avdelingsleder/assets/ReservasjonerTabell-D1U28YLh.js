import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-B5OHeJSP.js";import{L as M,M as d,B as A}from"./nb_NO-B4p7h2ZR.js";import{u as D}from"./index.es-1l7GYZKP.js";import{u as F}from"./useQuery-DVfWY0XH.js";import{u as p}from"./useMutation-DW66zKiQ.js";import"./aktivitetStatus-B1m96ipJ.js";import{K as N}from"./kodeverkTyper-CavWL6Ds.js";import{O as H,F as B}from"./FlyttReservasjonModal-DOm7jM5O.js";import{V as P,v as q,w as z,x as L,y as K,z as V}from"./fplosAvdelingslederApi-ByBFIqlo.js";import{u as G}from"./useLosKodeverk-oT1Cy1xD.js";import{T as r}from"./Table-CBNmRfiX.js";import{S as Q}from"./index.es-D6ktstkZ.js";import{u as X,S as Y}from"./Modal-BQwjsmca.js";var J=function(n,c){var o={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&c.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(n);l<a.length;l++)c.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(n,a[l])&&(o[a[l]]=n[a[l]]);return o};const U=i.forwardRef((n,c)=>{var{title:o,titleId:a}=n,l=J(n,["title","titleId"]);let t=X();return t=o?a||"title-"+t:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:c,"aria-labelledby":t},l),o?i.createElement("title",{id:t},o):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M3.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M9 15.75A5.25 5.25 0 0 0 3.75 21a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 13.5 0 .75.75 0 0 1-1.5 0A5.25 5.25 0 0 0 9 15.75m7.214-10.824a.75.75 0 1 0-.428 1.438A2.752 2.752 0 0 1 15 11.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 .75.75 4.25 4.25 0 0 1 4.25 4.25.75.75 0 0 0 1.5 0 5.75 5.75 0 0 0-4.206-5.539 4.251 4.251 0 0 0-.33-8.035",clipRule:"evenodd"}))}),W="_removeIcon_1c1ll_1",Z="_calendarIcon_1c1ll_7",$="_flyttIcon_1c1ll_14",h={removeIcon:W,calendarIcon:Z,flyttIcon:$},f=({valgtAvdelingEnhet:n})=>{const[c,o]=i.useState(!1),[a,l]=i.useState(!1),[t,u]=i.useState(void 0),x=G(N.BEHANDLING_TYPE),{data:R,refetch:j}=F(q(n)),m=R.toSorted((s,v)=>s.reservertAvNavn.localeCompare(v.reservertAvNavn)),{mutate:y}=p({mutationFn:s=>z(s.oppgaveId),onSuccess:()=>j()}),{mutateAsync:b,data:I,status:g,reset:T}=p({mutationFn:s=>L(s.brukerIdent)}),S=s=>{o(!0),u(s)},w=s=>{l(!0),u(s)},{mutateAsync:k}=p({mutationFn:s=>K(s.oppgaveId,s.reserverTil)}),C=async s=>{if(!t)throw new Error("Reservasjon må være valgt");await k({oppgaveId:t.oppgaveId,reserverTil:s}),o(!1),j()},{mutateAsync:O}=p({mutationFn:s=>V(s.oppgaveId,s.brukerIdent,s.begrunnelse)}),_=async s=>{if(!t)throw new Error("Reservasjon må være valgt");await O({oppgaveId:t.oppgaveId,...s}),j()};return e.jsxs(P,{gap:"2",children:[e.jsx(M,{size:"small",children:e.jsx(d,{id:"ReservasjonerTabell.Reservasjoner"})}),m.length===0&&e.jsx(A,{size:"small",children:e.jsx(d,{id:"ReservasjonerTabell.IngenReservasjoner"})}),m.length>0&&e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsxs(r.Row,{children:[e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Navn"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Saksnr"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.BehandlingType"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.ReservertTil"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Endre"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Flytt"})}),e.jsx(r.ColumnHeader,{children:e.jsx(d,{id:"ReservasjonerTabell.Slett"})})]})}),e.jsx(r.Body,{children:m.map(s=>{var v;return e.jsxs(r.Row,{shadeOnHover:!1,children:[e.jsx(r.DataCell,{children:s.reservertAvNavn}),e.jsx(r.DataCell,{children:s.oppgaveSaksNr}),e.jsx(r.DataCell,{children:(v=x.find(E=>E.kode===s.behandlingType))==null?void 0:v.navn}),e.jsx(r.DataCell,{children:e.jsx(d,{id:"ReservasjonerTabell.ReservertTilFormat",values:D(s.reservertTilTidspunkt)})}),e.jsx(r.DataCell,{children:e.jsx(Q,{className:h.calendarIcon,onClick:()=>S(s)})}),e.jsx(r.DataCell,{children:e.jsx(U,{className:h.flyttIcon,onClick:()=>w(s)})}),e.jsx(r.DataCell,{children:e.jsx(Y,{className:h.removeIcon,onClick:()=>y({oppgaveId:s.oppgaveId})})})]},s.oppgaveId)})})]}),t&&c&&e.jsx(H,{closeModal:()=>o(!1),reserverTilDefault:t.reservertTilTidspunkt,endreOppgavereservasjon:C}),t&&a&&e.jsx(B,{closeModal:()=>l(!1),flyttOppgavereservasjon:_,hentSaksbehandler:s=>b({brukerIdent:s}),hentSaksbehandlerIsPending:g==="pending",hentSaksbehandlerIsSuccess:g==="success",saksbehandler:I,resetHentSaksbehandler:T})]})};f.__docgenInfo={description:"",methods:[],displayName:"ReservasjonerTabell",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"ReservasjonerTabell",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};export{f as R};
