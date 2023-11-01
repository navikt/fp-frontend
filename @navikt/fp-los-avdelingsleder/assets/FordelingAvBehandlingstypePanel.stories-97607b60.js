import{j as l}from"./jsx-runtime-86dfebf6.js";import{z as e,Y as a}from"./index.es-657e045f.js";import{R as g}from"./RestApiMock-e250a15a.js";import{g as d,m}from"./nb_NO-efa96071.js";import{a as A}from"./alleKodeverkLos-5ac5bd02.js";import{a as E,r as c}from"./fplosRestApi-86173006.js";import{F as s}from"./FordelingAvBehandlingstypePanel-8a42cb2d.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-20592075.js";import"./index-6fd5a17b.js";import"./FlyttReservasjonModal-e3bc3fdb.js";import"./index.es-f7212981.js";import"./Modal-8716ca3f.js";import"./Heading-8e12b169.js";import"./Panel-cae179d9.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-d600ecab.js";const h=d(m),V={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[h]},R=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return l(g,{data:p,requestApi:c,children:l(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=R.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const I=["Default"];export{t as Default,I as __namedExportsOrder,V as default};
//# sourceMappingURL=FordelingAvBehandlingstypePanel.stories-97607b60.js.map
