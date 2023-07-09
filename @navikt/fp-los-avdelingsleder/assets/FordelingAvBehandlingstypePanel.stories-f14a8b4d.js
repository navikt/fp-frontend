import{j as n}from"./jsx-runtime-5926aa06.js";import{z as e,Y as a}from"./index.es-657e045f.js";import{k as g}from"./index.es-f19dba30.js";import{B as d,j as m,m as A}from"./nb_NO-34c6c3ba.js";import{R as E,r as h}from"./fplosRestApi-56e2d09a.js";import{F as s}from"./FordelingAvBehandlingstypePanel-b87a2bea.js";import"./index-ebeaab24.js";import"./index.es-24d105fb.js";import"./index-9c09ad76.js";import"./index.es-333191f8.js";import"./index.es-7d65aa9f.js";import"./Provider-26ee741a.js";import"./index-f50b85d6.js";import"./Panel-e2c29623.js";import"./Heading-8a34415b.js";import"./StoreValuesInLocalStorage-28723227.js";import"./useLosKodeverk-46a11add.js";const R=d(A),V={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[R]},c=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:m,global:!0}];return n.jsx(g,{data:p,requestApi:h,children:n.jsx(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=c.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var r,l,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
//# sourceMappingURL=FordelingAvBehandlingstypePanel.stories-f14a8b4d.js.map
