import{R as n}from"./index-DogsOklH.js";import{g as F,d as t,N as a,m as u}from"./nb_NO-FyPNv8I8.js";import{Y as r}from"./index.es-V78UKnai.js";import{R as N,b as R,r as h}from"./fplosSaksbehandlerRestApi-P4G0FdKv.js";import"./useRestApiRunner-gYXVz7Mj.js";import{a as A}from"./alleKodeverkLos-3oPC0WGq.js";import{N as m}from"./NyeOgFerdigstilteOppgaverForIdagPanel-4ZAFrYdT.js";import"./index-MroJ3egt.js";import"./useLosKodeverk-fyxlSTE3.js";import"./FlyttReservasjonModal-52UFWF1n.js";import"./index.es-WzVU8gca.js";import"./Panel--lX17xER.js";const v=F(u),M={title:"los/saksbehandler/saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:m,decorators:[v]},O=({nyeOgFerdigstilteOppgaver:c})=>{const y=[{key:N.KODEVERK_LOS.name,data:A,global:!0}];return n.createElement(R,{data:y,requestApi:h},n.createElement(m,{height:300,nyeOgFerdigstilteOppgaver:c}))},e=O.bind({});e.args={nyeOgFerdigstilteOppgaver:[{behandlingType:r.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:t().format(a)},{behandlingType:r.KLAGE,antallNye:23,antallFerdigstilte:2,dato:t().format(a)},{behandlingType:r.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:t().format(a)},{behandlingType:r.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:t().format(a)}]};const s=O.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var g,p,d;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const _=["Default","IngenBehandlinger"];export{e as Default,s as IngenBehandlinger,_ as __namedExportsOrder,M as default};
