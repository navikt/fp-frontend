import{r as S,R as j,j as e,p as P,w as U,B as _}from"./iframe-BW_eBa9a.js";import{Q as G}from"./index.es-D10FMMa4.js";import{u as N}from"./useQuery-Bacc5zva.js";import{V as J,C as M,D as B,E as Y,F as Q,G as q,h as o,L as l,b as p,l as z}from"./fplosAvdelingslederApi-BM-v2Lh1.js";import{L as X,M as v,B as W,g as Z,m as $}from"./nb_NO-qE2fI-bL.js";import{u as ee,a as b}from"./useLosKodeverk-C2c6R0rx.js";import{u as c}from"./useMutation-CCMh2XYm.js";import{O as se,F as te}from"./FlyttReservasjonModal-D6kYtYLM.js";import{T as t}from"./Table-DY0NiyLv.js";import{u as ne,f as re,S as ae}from"./Modal-DTxV1a0v.js";import"./preload-helper-PPVm8Dsz.js";import"./BasePrimitive-BR-HTfsR.js";import"./index.es-Dl5p6Owh.js";import"./index-Cvnu0zax.js";var oe=function(r,R){var d={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&R.indexOf(n)<0&&(d[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)R.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(d[n[i]]=r[n[i]]);return d};const le=S.forwardRef((r,R)=>{var{title:d,titleId:n}=r,i=oe(r,["title","titleId"]);let a=ne();return a=d?n||"title-"+a:void 0,j.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:R,"aria-labelledby":a},i),d?j.createElement("title",{id:a},d):null,j.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5M3.75 7.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M9 15.75A5.25 5.25 0 0 0 3.75 21a.75.75 0 0 1-1.5 0 6.75 6.75 0 0 1 13.5 0 .75.75 0 0 1-1.5 0A5.25 5.25 0 0 0 9 15.75m7.214-10.824a.75.75 0 1 0-.428 1.438A2.752 2.752 0 0 1 15 11.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 .75.75 4.25 4.25 0 0 1 4.25 4.25.75.75 0 0 0 1.5 0 5.75 5.75 0 0 0-4.206-5.539 4.251 4.251 0 0 0-.33-8.035",clipRule:"evenodd"}))}),pe="_removeIcon_pcl0t_1",de="_calendarIcon_pcl0t_7",ie="_flyttIcon_pcl0t_14",A={removeIcon:pe,calendarIcon:de,flyttIcon:ie},O=({valgtAvdelingEnhet:r})=>{const[R,d]=S.useState(!1),[n,i]=S.useState(!1),[a,T]=S.useState(void 0),w=ee("BehandlingType"),{data:L,refetch:m}=N(q(r)),h=L.toSorted((s,g)=>s.reservertAvNavn.localeCompare(g.reservertAvNavn)),{mutate:I}=c({mutationFn:s=>M(s.oppgaveId),onSuccess:()=>m()}),{mutateAsync:x,data:V,status:f,reset:y}=c({mutationFn:s=>B(s.brukerIdent)}),k=s=>{d(!0),T(s)},D=s=>{i(!0),T(s)},{mutateAsync:H}=c({mutationFn:s=>Y(s.oppgaveId,s.reserverTil)}),F=async s=>{if(!a)throw new Error("Reservasjon må være valgt");await H({oppgaveId:a.oppgaveId,reserverTil:s}),d(!1),m()},{mutateAsync:K}=c({mutationFn:s=>Q(s.oppgaveId,s.brukerIdent,s.begrunnelse)}),C=async s=>{if(!a)throw new Error("Reservasjon må være valgt");await K({oppgaveId:a.oppgaveId,...s}),m()};return e.jsxs(J,{gap:"space-8",children:[e.jsx(X,{size:"small",children:e.jsx(v,{id:"ReservasjonerTabell.Reservasjoner"})}),h.length===0&&e.jsx(W,{size:"small",children:e.jsx(v,{id:"ReservasjonerTabell.IngenReservasjoner"})}),h.length>0&&e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsxs(t.Row,{children:[e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.Navn"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.Saksnr"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.BehandlingType"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.ReservertTil"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.Endre"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.Flytt"})}),e.jsx(t.ColumnHeader,{children:e.jsx(v,{id:"ReservasjonerTabell.Slett"})})]})}),e.jsx(t.Body,{children:h.map(s=>e.jsxs(t.Row,{shadeOnHover:!1,children:[e.jsx(t.DataCell,{children:s.reservertAvNavn}),e.jsx(t.DataCell,{children:s.oppgaveSaksNr}),e.jsx(t.DataCell,{children:w.find(g=>g.kode===s.behandlingType)?.navn}),e.jsx(t.DataCell,{children:e.jsx(v,{id:"ReservasjonerTabell.ReservertTilFormat",values:P(s.reservertTilTidspunkt)})}),e.jsx(t.DataCell,{children:e.jsx(re,{className:A.calendarIcon,onClick:()=>k(s)})}),e.jsx(t.DataCell,{children:e.jsx(le,{className:A.flyttIcon,onClick:()=>D(s)})}),e.jsx(t.DataCell,{children:e.jsx(ae,{className:A.removeIcon,onClick:()=>I({oppgaveId:s.oppgaveId})})})]},s.oppgaveId))})]}),a&&R&&e.jsx(se,{closeModal:()=>d(!1),reserverTilDefault:a.reservertTilTidspunkt,endreOppgavereservasjon:F}),a&&n&&e.jsx(te,{closeModal:()=>i(!1),flyttOppgavereservasjon:C,hentSaksbehandler:s=>x({brukerIdent:s}),hentSaksbehandlerIsPending:f==="pending",hentSaksbehandlerIsSuccess:f==="success",saksbehandler:V,resetHentSaksbehandler:y})]})};O.__docgenInfo={description:"",methods:[],displayName:"ReservasjonerTabell",props:{valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""}}};const ve=Z($),Ne={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:O,decorators:[ve,U],args:{valgtAvdelingEnhet:"1"},render:r=>{const{data:R}=N(z());return R?e.jsx(O,{...r}):e.jsx(G,{})}},E={parameters:{msw:{handlers:[o.get(l.KODEVERK_LOS,()=>p.json(b)),o.get(l.RESERVASJONER_FOR_AVDELING,()=>p.json([])),o.post(l.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new p(null,{status:200})),o.post(l.ENDRE_OPPGAVERESERVASJON,()=>new p(null,{status:200})),o.post(l.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new p(null,{status:200})),o.post(l.FLYTT_RESERVASJON,()=>new p(null,{status:200}))]}}},u={parameters:{msw:{handlers:[o.get(l.KODEVERK_LOS,()=>p.json(b)),o.get(l.RESERVASJONER_FOR_AVDELING,()=>p.json([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:"122234",behandlingType:_.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:"23454",behandlingType:_.KLAGE}])),o.post(l.AVDELINGSLEDER_OPPHEVER_RESERVASJON,()=>new p(null,{status:200})),o.post(l.ENDRE_OPPGAVERESERVASJON,()=>new p(null,{status:200})),o.post(l.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>new p(null,{status:200})),o.post(l.FLYTT_RESERVASJON,()=>new p(null,{status:200}))]}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
        behandlingType: BehandlingTypeEnum.FORSTEGANGSSOKNAD
      }, {
        reservertAvUid: 'gtfbrt-tbrtb',
        reservertAvNavn: 'Eirik Utvikler',
        reservertTilTidspunkt: '2020-01-01',
        oppgaveId: 2,
        oppgaveSaksNr: '23454',
        behandlingType: BehandlingTypeEnum.KLAGE
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
}`,...u.parameters?.docs?.source}}};const be=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{u as VisTabellMedReservasjoner,E as ViseAtIngenReservasjonerBleFunnet,be as __namedExportsOrder,Ne as default};
