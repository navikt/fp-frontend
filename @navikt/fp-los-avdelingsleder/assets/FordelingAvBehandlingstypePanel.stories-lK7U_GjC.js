import{R as l}from"./index-DogsOklH.js";import{z as e,Y as a}from"./index.es-LzEcK_Mh.js";import{R as g}from"./RestApiMock-8FOaa7K1.js";import"./useRestApiRunner-t59neJBf.js";import{g as d,m}from"./nb_NO-H9rL7jWp.js";import{a as A}from"./alleKodeverkLos-Qz5F4oTQ.js";import{R as E,r as R}from"./fplosRestApi-7cfjsQHL.js";import{F as s}from"./FordelingAvBehandlingstypePanel-yvCe8tVu.js";import"./index-MroJ3egt.js";import"./FlyttReservasjonModal-bGLu1pnr.js";import"./index.es-ngO7zYbJ.js";import"./Panel--qvEpq93.js";import"./StoreValuesInLocalStorage-DtTb5O6k.js";import"./useLosKodeverk-EtPolOdW.js";const c=d(m),B={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[c]},h=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return l.createElement(g,{data:p,requestApi:R},l.createElement(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""}))},t=h.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var n,r,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
