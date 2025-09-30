import{r as S,R as g,j as e,p as K,w as P}from"./iframe-55PEk90g.js";import{Q as U}from"./index.es-C44hVVmF.js";import{u as _}from"./useQuery-C71aYVz1.js";import{V as J,C as M,D as B,E as G,F as Y,G as q,h as o,L as l,b as p,l as Q}from"./fplosAvdelingslederApi-Bt8bHvbk.js";import{L as z,M as v,B as X,g as W,m as Z}from"./nb_NO-CnqV6mPc.js";import{u as $,a as N}from"./useLosKodeverk-C3Ly0BHb.js";import{u as c}from"./useMutation-1T5dGigW.js";import{O as ee,F as se}from"./FlyttReservasjonModal-Cy53-rKP.js";import{T as t}from"./Table-CWO-jRrv.js";import{u as te,q as ne,S as re}from"./Modal-1nTydjrk.js";import"./preload-helper-PPVm8Dsz.js";import"./BasePrimitive-BlwfFd6L.js";import"./index.es-C3kNu2Ah.js";import"./index-CRPgZlub.js";var ae=function(r,R){var d={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&R.indexOf(n)<0&&(d[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)R.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(d[n[i]]=r[n[i]]);return d};const oe=S.forwardRef((r,R)=>{var{title:d,titleId:n}=r,i=ae(r,["title","titleId"]);let a=te();return a=d?n||"title-"+a:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:R,"aria-labelledby":a},i),d?g.createElement("title",{id:a},d):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M3.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M9 15.75A5.25 5.25 0 0 0 3.75 21a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 13.5 0 .75.75 0 0 1-1.5 0A5.25 5.25 0 0 0 9 15.75m7.214-10.824a.75.75 0 1 0-.428 1.438A2.752 2.752 0 0 1 15 11.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 .75.75 4.25 4.25 0 0 1 4.25 4.25.75.75 0 0 0 1.5 0 5.75 5.75 0 0 0-4.206-5.539 4.251 4.251 0 0 0-.33-8.035",clipRule:"evenodd"}))}),le="_removeIcon_pcl0t_1",pe="_calendarIcon_pcl0t_7",de="_flyttIcon_pcl0t_14",O={removeIcon:le,calendarIcon:pe,flyttIcon:de},A=({valgtAvdelingEnhet:r})=>{const[R,d]=S.useState(!1),[n,i]=S.useState(!1),[a,T]=S.useState(void 0),b=$("BehandlingType"),{data:w,refetch:j}=_(q(r)),m=w.toSorted((s,h)=>s.reservertAvNavn.localeCompare(h.reservertAvNavn)),{mutate:I}=c({mutationFn:s=>M(s.oppgaveId),onSuccess:()=>j()}),{mutateAsync:L,data:x,status:f,reset:V}=c({mutationFn:s=>B(s.brukerIdent)}),y=s=>{d(!0),T(s)},k=s=>{i(!0),T(s)},{mutateAsync:D}=c({mutationFn:s=>G(s.oppgaveId,s.reserverTil)}),H=async s=>{if(!a)throw new Error("Reservasjon må være valgt");await D({oppgaveId:a.oppgaveId,reserverTil:s}),d(!1),j()},{mutateAsync:F}=c({mutationFn:s=>Y(s.oppgaveId,s.brukerIdent,s.begrunnelse)}),C=async s=>{if(!a)throw new Error("Reservasjon må være valgt");await F({oppgaveId:a.oppgaveId,...s}),j()};return e.jsxs(J,{gap:"space-8",children:[e.jsx(z,{size:"small",children:e.jsx(v,{id:"ReservasjonerTabell.Reservasjoner"})}),m.length===0&&e.jsx(X,{size:"small",children:e.jsx(v,{id:"ReservasjonerTabell.IngenReservasjoner"})}),m.length>0&&e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsxs(t.Row,{children:[e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.Navn"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.Saksnr"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.BehandlingType"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.ReservertTil"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.Endre"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.Flytt"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.Slett"})})]})}),e.jsx(t.Body,{children:m.map(s=>e.jsxs(t.Row,{shadeOnHover:!1,children:[e.jsx(t.DataCell,{children:s.reservertAvNavn}),e.jsx(t.DataCell,{children:s.oppgaveSaksNr}),e.jsx(t.DataCell,{children:b.find(h=>h.kode===s.behandlingType)?.navn}),e.jsx(t.DataCell,{children:e.jsx(v,{id:"ReservasjonerTabell.ReservertTilFormat",values:K(s.reservertTilTidspunkt)})}),e.jsx(t.DataCell,{children:e.jsx(ne,{className:O.calendarIcon,onClick:()=>y(s)})}),e.jsx(t.DataCell,{children:e.jsx(oe,{className:O.flyttIcon,onClick:()=>k(s)})}),e.jsx(t.DataCell,{children:e.jsx(re,{className:O.removeIcon,onClick:()=>I({oppgaveId:s.oppgaveId})})})]},s.oppgaveId))})]}),a&&R&&e.jsx(ee,{closeModal:()=>d(!1),reserverTilDefault:a.reservertTilTidspunkt,endreOppgavereservasjon:H}),a&&n&&e.jsx(se,{closeModal:()=>i(!1),flyttOppgavereservasjon:C,hentSaksbehandler:s=>L({brukerIdent:s}),hentSaksbehandlerIsPending:f==="pending",hentSaksbehandlerIsSuccess:f==="success",saksbehandler:x,resetHentSaksbehandler:V})]})};A.__docgenInfo={description:"",methods:[],displayName:"ReservasjonerTabell",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};const ie=W(Z),_e={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:A,decorators:[ie,P],args:{valgtAvdelingEnhet:"1"},render:r=>{const{data:R}=_(Q());return R?e.jsx(A,{...r}):e.jsx(U,{})}},E={parameters:{msw:{handlers:[o.get(l.KODEVERK_LOS,()=>p.json(N)),o.get(l.RESERVASJONER_FOR_AVDELING,()=>p.json([])),o.post(l.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new p(null,{status:200})),o.post(l.ENDRE_OPPGAVERESERVASJON,()=>new p(null,{status:200})),o.post(l.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new p(null,{status:200})),o.post(l.FLYTT_RESERVASJON,()=>new p(null,{status:200}))]}}},u={parameters:{msw:{handlers:[o.get(l.KODEVERK_LOS,()=>p.json(N)),o.get(l.RESERVASJONER_FOR_AVDELING,()=>p.json([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:"122234",behandlingType:"BT-002"},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:"23454",behandlingType:"BT-003"}])),o.post(l.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new p(null,{status:200})),o.post(l.ENDRE_OPPGAVERESERVASJON,()=>new p(null,{status:200})),o.post(l.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new p(null,{status:200})),o.post(l.FLYTT_RESERVASJON,()=>new p(null,{status:200}))]}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.RESERVASJONER_FOR_AVDELING, () => HttpResponse.json([])), http.post(LosUrl.AVDELINGSLEDER_OPPHEVER_RESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.ENDRE_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.FLYTT_RESERVASJON, () => new HttpResponse(null, {
        status: 200
      }))]
    }
  }
}`,...E.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.RESERVASJONER_FOR_AVDELING, () => HttpResponse.json([{
        reservertAvUid: 'wsfwer-sdsfd',
        reservertAvNavn: 'Espen Utvikler',
        reservertTilTidspunkt: '2020-01-10',
        oppgaveId: 1,
        oppgaveSaksNr: '122234',
        behandlingType: 'BT-002'
      }, {
        reservertAvUid: 'gtfbrt-tbrtb',
        reservertAvNavn: 'Eirik Utvikler',
        reservertTilTidspunkt: '2020-01-01',
        oppgaveId: 2,
        oppgaveSaksNr: '23454',
        behandlingType: 'BT-003'
      }])), http.post(LosUrl.AVDELINGSLEDER_OPPHEVER_RESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.ENDRE_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, () => new HttpResponse(null, {
        status: 200
      })), http.post(LosUrl.FLYTT_RESERVASJON, () => new HttpResponse(null, {
        status: 200
      }))]
    }
  }
}`,...u.parameters?.docs?.source}}};const Ne=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{u as VisTabellMedReservasjoner,E as ViseAtIngenReservasjonerBleFunnet,Ne as __namedExportsOrder,_e as default};
