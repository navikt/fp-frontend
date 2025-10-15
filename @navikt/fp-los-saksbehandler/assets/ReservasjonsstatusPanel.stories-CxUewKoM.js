import{t as x,r as y,o as B,h as E,L as A,H as V}from"./fplosSaksbehandlerApi-bDEMoisP.js";import{r as k,R as g,j as n,P as w,e as U,w as _}from"./iframe-FHusWhXg.js";import{u as T}from"./useQuery-CkNNG0T0.js";import{u as b}from"./useMutation-FCyebI87.js";import{u as F,m as z}from"./nb_NO-DyXQqJfF.js";import{H as M}from"./VStack-IrdgVemv.js";import{B as h}from"./floating-ui.react-CszcVAZV.js";import{M as f}from"./Loader-B5b3277y.js";import{T as H}from"./Tooltip-CsclIVM2.js";import"./preload-helper-PPVm8Dsz.js";import"./composeEventHandlers-C1c8aMmq.js";import"./index-BOr9xCvS.js";import"./Portal-Bzzdoe31.js";var C=function(r,o){var s={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&o.indexOf(e)<0&&(s[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(r);a<e.length;a++)o.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(r,e[a])&&(s[e[a]]=r[e[a]]);return s};const N=k.forwardRef((r,o)=>{var{title:s,titleId:e}=r,a=C(r,["title","titleId"]);let i=F();return i=s?e||"title-"+i:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:o,"aria-labelledby":i},a),s?g.createElement("title",{id:i},s):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.25 7a4.75 4.75 0 0 1 9.5 0v2.25H17c.966 0 1.75.784 1.75 1.75v9a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-9c0-.966.784-1.75 1.75-1.75h.25zm1.5 0a3.25 3.25 0 0 1 6.5 0v2.25h-6.5zM7 10.75a.25.25 0 0 0-.25.25v8.25h10.5V11a.25.25 0 0 0-.25-.25zm3.5 3.75a1.5 1.5 0 1 1 2.25 1.3V17a.75.75 0 0 1-1.5 0v-1.2a1.5 1.5 0 0 1-.75-1.3",clipRule:"evenodd"}))}),j=U(z),I=({saksnummer:r,behandlingUuid:o,kanVeilede:s})=>{const[e,a]=k.useState(!1),{data:i=[],refetch:R}=T({...x([r]),refetchInterval:e?!1:3e4}),t=i.find(S=>S.behandlingId===o),l=t?.reservasjonStatus.erReservert;k.useEffect(()=>{a(l||!1)},[l]);const{mutate:P}=b({mutationFn:B,onSuccess:()=>{R()}}),{mutateAsync:O}=b({mutationFn:y,onSuccess:()=>{R()}});return n.jsx(w,{value:j,children:n.jsxs(M,{gap:"space-8",align:"center",children:[!s&&!l&&!!t&&n.jsx(h,{size:"small",onClick:()=>O(t.id),children:n.jsx(f,{id:"ReservasjonsstatusPanel.Reserver"})}),l&&t.reservasjonStatus.erReservertAvInnloggetBruker&&n.jsx(H,{content:j.formatMessage({id:"ReservasjonsstatusPanel.ErReservertPaDeg"}),children:n.jsx(h,{size:"small",variant:"primary-neutral",onClick:()=>P(t.id),disabled:s,children:n.jsx(f,{id:"ReservasjonsstatusPanel.OpphevReservasjon"})})}),l&&!t.reservasjonStatus.erReservertAvInnloggetBruker&&n.jsx(h,{size:"small",variant:"primary-neutral",disabled:!0,icon:n.jsx(N,{"aria-hidden":!0}),children:n.jsx(f,{id:"ReservasjonsstatusPanel.Reservert",values:{navn:t.reservasjonStatus.reservertAvNavn}})})]})})};I.__docgenInfo={description:"",methods:[],displayName:"ReservasjonsstatusPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!1,tsType:{name:"string"},description:""},kanVeilede:{required:!0,tsType:{name:"boolean"},description:""}}};const d=[{id:0,behandlingId:"012",reservasjonStatus:{erReservert:!1,erReservertAvInnloggetBruker:!1}},{id:1,behandlingId:"123",reservasjonStatus:{erReservert:!0,erReservertAvInnloggetBruker:!0,reservertAvBrukerIdent:"Z123456",reservertTidspunkt:"2024-01-01T12:00:00"}},{id:2,behandlingId:"456",reservasjonStatus:{erReservert:!0,erReservertAvInnloggetBruker:!1,reservertAvBrukerIdent:"Z123456",reservertTidspunkt:"2024-01-01T12:00:00",reservertAvNavn:"Ola Nordmann"}}],re={title:"ReservasjonsstatusPanel",component:I,decorators:[_],parameters:{msw:{handlers:[E.get(A.OPPGAVER_FOR_FAGSAKER,()=>V.json(d))]}}},u={args:{saksnummer:"12345",behandlingUuid:d[0].behandlingId,kanVeilede:!1}},p={args:{saksnummer:"12345",behandlingUuid:d[1].behandlingId,kanVeilede:!1}},v={args:{saksnummer:"12345",behandlingUuid:d[2].behandlingId,kanVeilede:!1}},m={args:{saksnummer:"12345",behandlingUuid:d[2].behandlingId,kanVeilede:!0}},c={args:{saksnummer:"12345",behandlingUuid:d[1].behandlingId,kanVeilede:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    saksnummer: '12345',
    behandlingUuid: oppgaver[0]!.behandlingId,
    kanVeilede: false
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    saksnummer: '12345',
    behandlingUuid: oppgaver[1]!.behandlingId,
    kanVeilede: false
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    saksnummer: '12345',
    behandlingUuid: oppgaver[2]!.behandlingId,
    kanVeilede: false
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    saksnummer: '12345',
    behandlingUuid: oppgaver[2]!.behandlingId,
    kanVeilede: true
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    saksnummer: '12345',
    behandlingUuid: oppgaver[1]!.behandlingId,
    kanVeilede: true
  }
}`,...c.parameters?.docs?.source}}};const se=["ErIkkeReservert","ErReservertPåInnloggetBruker","ErReservertPåAnnenBruker","VeilederReservertPåAnnenBruker","VeilederReservertPåInnloggetBruker"];export{u as ErIkkeReservert,v as ErReservertPåAnnenBruker,p as ErReservertPåInnloggetBruker,m as VeilederReservertPåAnnenBruker,c as VeilederReservertPåInnloggetBruker,se as __namedExportsOrder,re as default};
