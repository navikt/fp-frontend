import{j as n}from"./jsx-runtime-9c4ae004.js";import{z as e,Y as a}from"./index.es-657e045f.js";import{k as g}from"./index.es-3a7f7be2.js";import{B as d,j as m,m as A}from"./nb_NO-844deeab.js";import{a as E,r as h}from"./fplosRestApi-810d5a30.js";import{F as s}from"./FordelingAvBehandlingstypePanel-b118fb69.js";import"./index-1b03fe98.js";import"./index.es-42a31a03.js";import"./index-6fd5a17b.js";import"./index.es-4f28cd7c.js";import"./index.es-acb77150.js";import"./Modal-ee83e495.js";import"./Heading-8b102f20.js";import"./Panel-c03d4096.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-0790130a.js";const R=d(A),P={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[R]},c=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:m,global:!0}];return n.jsx(g,{data:p,requestApi:h,children:n.jsx(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=c.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var l,r,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const V=["Default"];export{t as Default,V as __namedExportsOrder,P as default};
//# sourceMappingURL=FordelingAvBehandlingstypePanel.stories-c0d73f92.js.map
