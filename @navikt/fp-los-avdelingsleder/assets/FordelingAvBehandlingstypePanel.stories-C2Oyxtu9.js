import{j as r}from"./jsx-runtime-QvZ8i92b.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as e}from"./behandlingType-BdbjGMJD.js";import{F as a}from"./fagsakYtelseType-DI8GXtVr.js";import{R as g}from"./RestApiMock-jOjxntRb.js";import"./index-uubelm5h.js";import"./useRestApiRunner-puvCxW7G.js";import{m}from"./nb_NO-COD-RJQh.js";import{g as d}from"./withIntl-Dj43w9ql.js";import{a as A}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,r as R}from"./fplosRestApi-CA_rjeFW.js";import{F as s}from"./FordelingAvBehandlingstypePanel-h06yhyPy.js";import"./Modal-AsiqG6ll.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-BEcJ7ulV.js";import"./VStack-CoISPiHd.js";import"./kodeverkTyper-CavWL6Ds.js";import"./FlyttReservasjonModal-0I9TiFOd.js";import"./index.es-t6CmvQr4.js";import"./Panel-kMoRCghZ.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-43wcDHc1.js";const h=d(m),q={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[h]},c=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return r.jsx(g,{data:p,requestApi:R,children:r.jsx(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=c.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:a.FORELDREPENGER,behandlingType:e.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:a.ENGANGSSTONAD,behandlingType:e.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:a.ENGANGSSTONAD,behandlingType:e.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:a.ENGANGSSTONAD,behandlingType:e.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:e.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var o,l,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const M=["Default"];export{t as Default,M as __namedExportsOrder,q as default};
