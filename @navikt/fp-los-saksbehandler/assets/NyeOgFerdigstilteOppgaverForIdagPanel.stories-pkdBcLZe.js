import{j as n}from"./jsx-runtime-CUEGZZF9.js";import{g as F,d as t,N as a,m as u}from"./nb_NO-ifoLtffX.js";import{Y as r}from"./index.es-V78UKnai.js";import{R as h,b as N,r as A}from"./fplosSaksbehandlerRestApi-wUaOZ4LW.js";import{a as R}from"./alleKodeverkLos-Qz5F4oTQ.js";import{N as m}from"./NyeOgFerdigstilteOppgaverForIdagPanel-wdB5r7ER.js";import"./index-DogsOklH.js";import"./index-MroJ3egt.js";import"./useGlobalStateRestApiData-n3nAw5-C.js";import"./useLosKodeverk-E7gMKg2s.js";import"./FlyttReservasjonModal-kaPJ9b-9.js";import"./index.es-6jszBJub.js";import"./Panel-mUo8-ngF.js";const v=F(u),_={title:"los/saksbehandler/saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:m,decorators:[v]},O=({nyeOgFerdigstilteOppgaver:c})=>{const y=[{key:h.KODEVERK_LOS.name,data:R,global:!0}];return n(N,{data:y,requestApi:A,children:n(m,{height:300,nyeOgFerdigstilteOppgaver:c})})},e=O.bind({});e.args={nyeOgFerdigstilteOppgaver:[{behandlingType:r.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:t().format(a)},{behandlingType:r.KLAGE,antallNye:23,antallFerdigstilte:2,dato:t().format(a)},{behandlingType:r.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:t().format(a)},{behandlingType:r.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:t().format(a)}]};const s=O.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const q=["Default","IngenBehandlinger"];export{e as Default,s as IngenBehandlinger,q as __namedExportsOrder,_ as default};
