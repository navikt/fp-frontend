import{j as n}from"./jsx-runtime-9c4ae004.js";import{B as F,d as t,N as a,j as u,m as h}from"./nb_NO-f3f50ba4.js";import{Y as r}from"./index.es-a3c6219c.js";import{b as N,k as A,r as R}from"./fplosSaksbehandlerRestApi-b0e8d207.js";import{N as m}from"./NyeOgFerdigstilteOppgaverForIdagPanel-d9067d3c.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-76bb323d.js";import"./useLosKodeverk-074366b9.js";import"./index.es-9acae570.js";import"./index.es-b5f29a80.js";import"./Provider-983842f2.js";import"./Heading-73495d18.js";import"./Panel-c899ecc9.js";const b=F(h),_={title:"los/saksbehandler/saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:m,decorators:[b]},O=({nyeOgFerdigstilteOppgaver:c})=>{const y=[{key:N.KODEVERK_LOS.name,data:u,global:!0}];return n.jsx(A,{data:y,requestApi:R,children:n.jsx(m,{height:300,nyeOgFerdigstilteOppgaver:c})})},e=O.bind({});e.args={nyeOgFerdigstilteOppgaver:[{behandlingType:r.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:t().format(a)},{behandlingType:r.KLAGE,antallNye:23,antallFerdigstilte:2,dato:t().format(a)},{behandlingType:r.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:t().format(a)},{behandlingType:r.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:t().format(a)}]};const s=O.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
//# sourceMappingURL=NyeOgFerdigstilteOppgaverForIdagPanel.stories-8f2df86b.js.map
