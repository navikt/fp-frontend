import{R as n}from"./index-DVXBtNgz.js";import{d as t}from"./dayjs.min-Dkhc0ShP.js";import{g as F,A as a,m as u}from"./nb_NO-B4G50tbZ.js";import{Y as r}from"./index.es-BkMxg3KK.js";import{R,b as h,r as A}from"./fplosSaksbehandlerRestApi-1LvtrRZK.js";import"./useRestApiRunner-B4tj0W_o.js";import{a as N}from"./alleKodeverkLos-BJud6Q-i.js";import{N as m}from"./NyeOgFerdigstilteOppgaverForIdagPanel-CqEzxFYV.js";import"./tslib.es6-CMwweBXX.js";import"./index-Cbx7Fas8.js";import"./useLosKodeverk-B_YlLI5l.js";import"./FlyttReservasjonModal-D0LWy4vy.js";import"./index.es-IrfsGEXF.js";import"./Panel-CFLcWv7D.js";const v=F(u),q={title:"los/saksbehandler/saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:m,decorators:[v]},O=({nyeOgFerdigstilteOppgaver:c})=>{const y=[{key:R.KODEVERK_LOS.name,data:N,global:!0}];return n.createElement(h,{data:y,requestApi:A},n.createElement(m,{height:300,nyeOgFerdigstilteOppgaver:c}))},e=O.bind({});e.args={nyeOgFerdigstilteOppgaver:[{behandlingType:r.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:t().format(a)},{behandlingType:r.KLAGE,antallNye:23,antallFerdigstilte:2,dato:t().format(a)},{behandlingType:r.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:t().format(a)},{behandlingType:r.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:t().format(a)}]};const s=O.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const V=["Default","IngenBehandlinger"];export{e as Default,s as IngenBehandlinger,V as __namedExportsOrder,q as default};
