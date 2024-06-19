import{R as l}from"./index-DVXBtNgz.js";import{z as e,Y as a}from"./index.es-Cl_yxThX.js";import{R as g}from"./RestApiMock-D7GvAGON.js";import"./useRestApiRunner-r8nm61Jn.js";import{g as d,m}from"./nb_NO-Cx50JONv.js";import{a as A}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,r as R}from"./fplosRestApi-DXPSIiTb.js";import{F as s}from"./FordelingAvBehandlingstypePanel-CK8-HZrN.js";import"./index-Cbx7Fas8.js";import"./tslib.es6-CMwweBXX.js";import"./FlyttReservasjonModal-D3Vqcv6P.js";import"./index.es-BbgVYiA4.js";import"./Panel-CrVd1bPV.js";import"./StoreValuesInLocalStorage-C8lZhFdq.js";import"./useLosKodeverk-BklsCf3V.js";const c=d(m),L={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[c]},h=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return l.createElement(g,{data:p,requestApi:R},l.createElement(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""}))},t=h.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var n,r,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,L as default};
