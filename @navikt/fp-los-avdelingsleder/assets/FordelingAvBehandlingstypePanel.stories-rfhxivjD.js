import{j as l}from"./jsx-runtime-CUEGZZF9.js";import{z as e,Y as a}from"./index.es-LzEcK_Mh.js";import{R as g}from"./RestApiMock-GVojLHLL.js";import{g as d,m}from"./nb_NO-gecc5r6D.js";import{a as A}from"./alleKodeverkLos-Qz5F4oTQ.js";import{R as E,r as R}from"./fplosRestApi-rp57q-9T.js";import{F as s}from"./FordelingAvBehandlingstypePanel-M0vgW0Kb.js";import"./index-DogsOklH.js";import"./useGlobalStateRestApiData-A2OyOdo-.js";import"./index-MroJ3egt.js";import"./FlyttReservasjonModal-A26N0AFy.js";import"./index.es-n3GFEPFi.js";import"./Panel-OhF1Mq2S.js";import"./StoreValuesInLocalStorage-A19sIOBb.js";import"./useLosKodeverk-VAX3Rq0T.js";const c=d(m),L={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[c]},h=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return l(g,{data:p,requestApi:R,children:l(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=h.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var n,r,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
