import{j as n}from"./jsx-runtime-9c4ae004.js";import{B as F,d as t,N as a,j as u,m as h}from"./nb_NO-b2e865e9.js";import{Y as r}from"./index.es-a3c6219c.js";import{b as N,k as A,r as R}from"./fplosSaksbehandlerRestApi-65de4e1b.js";import{N as m}from"./NyeOgFerdigstilteOppgaverForIdagPanel-3a14df2a.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-3a2d92d7.js";import"./useLosKodeverk-af588712.js";import"./index.es-84287325.js";import"./index.es-d6a09112.js";import"./Provider-545deae6.js";import"./Heading-f91b5548.js";import"./Panel-d2656cdd.js";const b=F(h),_={title:"los/saksbehandler/saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:m,decorators:[b]},O=({nyeOgFerdigstilteOppgaver:c})=>{const y=[{key:N.KODEVERK_LOS.name,data:u,global:!0}];return n.jsx(A,{data:y,requestApi:R,children:n.jsx(m,{height:300,nyeOgFerdigstilteOppgaver:c})})},e=O.bind({});e.args={nyeOgFerdigstilteOppgaver:[{behandlingType:r.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:t().format(a)},{behandlingType:r.KLAGE,antallNye:23,antallFerdigstilte:2,dato:t().format(a)},{behandlingType:r.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:t().format(a)},{behandlingType:r.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:t().format(a)}]};const s=O.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
//# sourceMappingURL=NyeOgFerdigstilteOppgaverForIdagPanel.stories-a7d7f21a.js.map
