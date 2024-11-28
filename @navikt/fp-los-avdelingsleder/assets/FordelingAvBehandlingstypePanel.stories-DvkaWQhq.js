import{j as r}from"./jsx-runtime-QvZ8i92b.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as e}from"./behandlingType-BdbjGMJD.js";import{F as a}from"./fagsakYtelseType-DI8GXtVr.js";import{m as g}from"./nb_NO-Zqge3fS6.js";import{g as m}from"./withIntl-Bv-P8ZIY.js";import{a as d}from"./alleKodeverkLos-BJud6Q-i.js";import{R as A}from"./RestApiMock-DW0j1xpC.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Co55yBK5.js";import{R as E,r as R}from"./fplosRestApi--K68MEhy.js";import{F as s}from"./FordelingAvBehandlingstypePanel-BjDOaOog.js";import"./index-C5xsJX-I.js";import"./Modal-nRd4VDWO.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-DSskcgoM.js";import"./VStack-C7XzQG3E.js";import"./kodeverkTyper-CavWL6Ds.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-DsR1Iwhq.js";import"./FlyttReservasjonModal-J11NB3lG.js";import"./index.es-BoTLjJqU.js";import"./Panel-Dwv4sAY7.js";const h=m(g),q={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[h]},c=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:d,global:!0}];return r.jsx(A,{data:p,requestApi:R,children:r.jsx(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=c.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:a.FORELDREPENGER,behandlingType:e.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:a.ENGANGSSTONAD,behandlingType:e.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:a.ENGANGSSTONAD,behandlingType:e.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:a.ENGANGSSTONAD,behandlingType:e.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:e.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var o,l,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
