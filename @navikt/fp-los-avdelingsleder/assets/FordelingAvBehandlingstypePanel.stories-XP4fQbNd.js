import{R as l}from"./index-DVXBtNgz.js";import{z as e,Y as a}from"./index.es-Cl_yxThX.js";import{R as g}from"./RestApiMock-DpQNFfzU.js";import"./useRestApiRunner-r8nm61Jn.js";import{g as d,m}from"./nb_NO-D3Fg8-s9.js";import{a as A}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,r as R}from"./fplosRestApi-DXPSIiTb.js";import{F as s}from"./FordelingAvBehandlingstypePanel-CzM321Mw.js";import"./index-Cbx7Fas8.js";import"./dayjs.min-Dkhc0ShP.js";import"./tslib.es6-CMwweBXX.js";import"./FlyttReservasjonModal-Cyib0n-G.js";import"./index.es-BoB8IYOI.js";import"./Panel-Bo6ejZce.js";import"./StoreValuesInLocalStorage-C8lZhFdq.js";import"./useLosKodeverk-BklsCf3V.js";const c=d(m),P={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[c]},h=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return l.createElement(g,{data:p,requestApi:R},l.createElement(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""}))},t=h.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,P as default};
