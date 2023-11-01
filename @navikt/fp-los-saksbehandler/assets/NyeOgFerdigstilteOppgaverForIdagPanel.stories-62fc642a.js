import{j as o}from"./jsx-runtime-86dfebf6.js";import{g as F,d as t,N as a,m as u}from"./nb_NO-bdcde2eb.js";import{Y as r}from"./index.es-a3c6219c.js";import{c as h,a as N,r as A}from"./fplosSaksbehandlerRestApi-c8d31a2a.js";import{a as v}from"./alleKodeverkLos-5ac5bd02.js";import{N as m}from"./NyeOgFerdigstilteOppgaverForIdagPanel-ce2c6631.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./useGlobalStateRestApiData-f709a7eb.js";import"./useLosKodeverk-4328c9a9.js";import"./FlyttReservasjonModal-94dd8153.js";import"./index.es-9abdc4ea.js";import"./Modal-3d35e8b3.js";import"./Heading-bf5304e2.js";import"./Panel-ed8829c7.js";const K=F(u),V={title:"los/saksbehandler/saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:m,decorators:[K]},O=({nyeOgFerdigstilteOppgaver:c})=>{const y=[{key:h.KODEVERK_LOS.name,data:v,global:!0}];return o(N,{data:y,requestApi:A,children:o(m,{height:300,nyeOgFerdigstilteOppgaver:c})})},e=O.bind({});e.args={nyeOgFerdigstilteOppgaver:[{behandlingType:r.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:t().format(a)},{behandlingType:r.KLAGE,antallNye:23,antallFerdigstilte:2,dato:t().format(a)},{behandlingType:r.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:t().format(a)},{behandlingType:r.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:t().format(a)}]};const s=O.bind({});var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const j=["Default","IngenBehandlinger"];export{e as Default,s as IngenBehandlinger,j as __namedExportsOrder,V as default};
//# sourceMappingURL=NyeOgFerdigstilteOppgaverForIdagPanel.stories-62fc642a.js.map
