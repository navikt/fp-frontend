import{d as t,j as n}from"./dayjs.min-DKYhEbg2.js";import{g as F,A as a,m as u}from"./nb_NO-DY6WQH50.js";import{Y as r}from"./index.es-BkMxg3KK.js";import{R as h,b as A,r as N}from"./fplosSaksbehandlerRestApi-CWRPAkFP.js";import"./index-BBkUAzwr.js";import"./useRestApiRunner-DyfIg1tq.js";import{a as R}from"./alleKodeverkLos-BJud6Q-i.js";import{N as m}from"./NyeOgFerdigstilteOppgaverForIdagPanel-DoPoEXnc.js";import"./index-BfZ0jBbx.js";import"./useLosKodeverk-DwnXc9KF.js";import"./FlyttReservasjonModal-D-CseH1C.js";import"./index.es-BU-7Ku74.js";import"./Panel-B8w0mR9w.js";const v=F(u),M={title:"los/saksbehandler/saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:m,decorators:[v]},O=({nyeOgFerdigstilteOppgaver:c})=>{const y=[{key:h.KODEVERK_LOS.name,data:R,global:!0}];return n.jsx(A,{data:y,requestApi:N,children:n.jsx(m,{height:300,nyeOgFerdigstilteOppgaver:c})})},e=O.bind({});e.args={nyeOgFerdigstilteOppgaver:[{behandlingType:r.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:t().format(a)},{behandlingType:r.KLAGE,antallNye:23,antallFerdigstilte:2,dato:t().format(a)},{behandlingType:r.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:t().format(a)},{behandlingType:r.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:t().format(a)}]};const s=O.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  nyeOgFerdigstilteOppgaver
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <NyeOgFerdigstilteOppgaverForIdagPanel height={300} nyeOgFerdigstilteOppgaver={nyeOgFerdigstilteOppgaver} />
    </RestApiMock>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,g,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`({
  nyeOgFerdigstilteOppgaver
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <NyeOgFerdigstilteOppgaverForIdagPanel height={300} nyeOgFerdigstilteOppgaver={nyeOgFerdigstilteOppgaver} />
    </RestApiMock>;
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const _=["Default","IngenBehandlinger"];export{e as Default,s as IngenBehandlinger,_ as __namedExportsOrder,M as default};
