import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{d as t}from"./dayjs.min-BsYQKNhR.js";import{A as a,m as F}from"./nb_NO-BxfL2bzu.js";import{Y as r}from"./index.es-BkMxg3KK.js";import{R as u,b as h,r as A}from"./fplosSaksbehandlerRestApi-tcz63uSM.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{g as N}from"./withIntl-z0syI_c3.js";import{a as R}from"./alleKodeverkLos-BJud6Q-i.js";import{N as m}from"./NyeOgFerdigstilteOppgaverForIdagPanel-TrlBrfNa.js";import"./index-C5xsJX-I.js";import"./useLosKodeverk-DoM0cT3z.js";import"./FlyttReservasjonModal-31X9Kfvz.js";import"./index.es-X5vC34ph.js";import"./Panel-Cnj1Ea_C.js";const f=N(F),j={title:"los/saksbehandler/saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:m,decorators:[f]},O=({nyeOgFerdigstilteOppgaver:c})=>{const y=[{key:u.KODEVERK_LOS.name,data:R,global:!0}];return o.jsx(h,{data:y,requestApi:A,children:o.jsx(m,{height:300,nyeOgFerdigstilteOppgaver:c})})},e=O.bind({});e.args={nyeOgFerdigstilteOppgaver:[{behandlingType:r.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:t().format(a)},{behandlingType:r.KLAGE,antallNye:23,antallFerdigstilte:2,dato:t().format(a)},{behandlingType:r.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:t().format(a)},{behandlingType:r.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:t().format(a)}]};const s=O.bind({});var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const q=["Default","IngenBehandlinger"];export{e as Default,s as IngenBehandlinger,q as __namedExportsOrder,j as default};
