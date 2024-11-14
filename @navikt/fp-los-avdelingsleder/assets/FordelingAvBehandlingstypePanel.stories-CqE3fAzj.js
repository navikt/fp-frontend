import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{z as e,Y as a}from"./index.es-Cl_yxThX.js";import{R as g}from"./RestApiMock-jOjxntRb.js";import"./index-uubelm5h.js";import"./useRestApiRunner-puvCxW7G.js";import{m}from"./nb_NO-COD-RJQh.js";import{g as d}from"./withIntl-Dj43w9ql.js";import{a as A}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,r as R}from"./fplosRestApi-CA_rjeFW.js";import{F as s}from"./FordelingAvBehandlingstypePanel-797PuNNQ.js";import"./Modal-AsiqG6ll.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-BEcJ7ulV.js";import"./VStack-CoISPiHd.js";import"./FlyttReservasjonModal-0I9TiFOd.js";import"./index.es-t6CmvQr4.js";import"./Panel-kMoRCghZ.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-43wcDHc1.js";const c=d(m),Y={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[c]},h=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return r.jsx(g,{data:p,requestApi:R,children:r.jsx(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=h.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var o,l,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
  oppgaverForAvdeling
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <FordelingAvBehandlingstypePanel height={300} oppgaverForAvdeling={oppgaverForAvdeling} getValueFromLocalStorage={() => ''} />
    </RestApiMock>;
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,Y as default};
