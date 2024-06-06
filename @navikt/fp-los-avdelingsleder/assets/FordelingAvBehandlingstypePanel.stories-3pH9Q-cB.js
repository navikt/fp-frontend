import{R as l}from"./index-BBkUAzwr.js";import{z as e,Y as a}from"./index.es-Cl_yxThX.js";import{R as g}from"./RestApiMock-Dpt-GNNc.js";import"./useRestApiRunner-Bj3tzHZ6.js";import{g as d,m}from"./nb_NO-Dpo8zdWW.js";import{a as A}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,r as R}from"./fplosRestApi-B7o859yn.js";import{F as s}from"./FordelingAvBehandlingstypePanel-DnblD-97.js";import"./index-PqR-_bA4.js";import"./FlyttReservasjonModal-2X6215Bk.js";import"./index.es-4UZ3d1zR.js";import"./Panel-BeohLQId.js";import"./StoreValuesInLocalStorage-DbvB94aq.js";import"./useLosKodeverk-CPiOfefX.js";const c=d(m),B={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[c]},h=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return l.createElement(g,{data:p,requestApi:R},l.createElement(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""}))},t=h.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var n,r,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,B as default};
