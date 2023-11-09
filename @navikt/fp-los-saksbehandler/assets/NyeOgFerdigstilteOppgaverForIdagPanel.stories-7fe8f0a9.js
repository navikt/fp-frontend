import{j as n}from"./jsx-runtime-86dfebf6.js";import{g as F,d as t,N as a,m as u}from"./nb_NO-31758bbb.js";import{Y as r}from"./index.es-a3c6219c.js";import{c as h,a as N,r as A}from"./fplosSaksbehandlerRestApi-84411765.js";import{a as v}from"./alleKodeverkLos-5ac5bd02.js";import{N as m}from"./NyeOgFerdigstilteOppgaverForIdagPanel-45c8ac5f.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./useGlobalStateRestApiData-f709a7eb.js";import"./useLosKodeverk-24ad49f1.js";import"./FlyttReservasjonModal-96f6c934.js";import"./index.es-23262e77.js";import"./Panel-55287d0a.js";const K=F(u),_={title:"los/saksbehandler/saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:m,decorators:[K]},O=({nyeOgFerdigstilteOppgaver:c})=>{const y=[{key:h.KODEVERK_LOS.name,data:v,global:!0}];return n(N,{data:y,requestApi:A,children:n(m,{height:300,nyeOgFerdigstilteOppgaver:c})})},e=O.bind({});e.args={nyeOgFerdigstilteOppgaver:[{behandlingType:r.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:t().format(a)},{behandlingType:r.KLAGE,antallNye:23,antallFerdigstilte:2,dato:t().format(a)},{behandlingType:r.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:t().format(a)},{behandlingType:r.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:t().format(a)}]};const s=O.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
//# sourceMappingURL=NyeOgFerdigstilteOppgaverForIdagPanel.stories-7fe8f0a9.js.map
