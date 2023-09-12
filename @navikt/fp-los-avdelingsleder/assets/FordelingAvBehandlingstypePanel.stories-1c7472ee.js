import{j as n}from"./jsx-runtime-9c4ae004.js";import{z as e,Y as a}from"./index.es-657e045f.js";import{k as g}from"./index.es-352655e9.js";import{B as d,j as m,m as A}from"./nb_NO-d1625de4.js";import{a as E,r as h}from"./fplosRestApi-beda4f04.js";import{F as s}from"./FordelingAvBehandlingstypePanel-a2c5e147.js";import"./index-1b03fe98.js";import"./index.es-dcafba10.js";import"./index-6fd5a17b.js";import"./index.es-189ffba3.js";import"./index.es-eb6186af.js";import"./Provider-dbd6cb80.js";import"./Detail-ac630136.js";import"./Heading-603274ab.js";import"./Panel-add0b43c.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-3c749e2b.js";const R=d(A),V={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[R]},c=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:m,global:!0}];return n.jsx(g,{data:p,requestApi:h,children:n.jsx(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=c.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var r,l,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,V as default};
//# sourceMappingURL=FordelingAvBehandlingstypePanel.stories-1c7472ee.js.map
