import{j as n}from"./jsx-runtime-69eee039.js";import{z as e,Y as a}from"./index.es-657e045f.js";import{k as g}from"./index.es-0d3529a2.js";import{B as d,j as m,m as A}from"./nb_NO-d9a4e020.js";import{a as E,r as h}from"./fplosRestApi-06437043.js";import{F as s}from"./FordelingAvBehandlingstypePanel-ea23c6cc.js";import"./index-7c191284.js";import"./index.es-6dfc8135.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";import"./index.es-9700a5ac.js";import"./index.es-0bb870d0.js";import"./Provider-bfaf0040.js";import"./index-b3a39e30.js";import"./Panel-54080986.js";import"./Heading-1f23922b.js";import"./StoreValuesInLocalStorage-2b38d468.js";import"./useLosKodeverk-c784a1f9.js";const R=d(A),j={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[R]},c=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:m,global:!0}];return n.jsx(g,{data:p,requestApi:h,children:n.jsx(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=c.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var r,l,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,j as default};
//# sourceMappingURL=FordelingAvBehandlingstypePanel.stories-4c0811ac.js.map
