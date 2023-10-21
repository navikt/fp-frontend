import{j as n}from"./jsx-runtime-9c4ae004.js";import{z as e,Y as a}from"./index.es-657e045f.js";import{k as g}from"./index.es-3a17af17.js";import{B as d,j as m,m as A}from"./nb_NO-05becbd9.js";import{a as E,r as h}from"./fplosRestApi-812c551e.js";import{F as s}from"./FordelingAvBehandlingstypePanel-11ca6bd5.js";import"./index-1b03fe98.js";import"./index.es-5c2532e8.js";import"./index-6fd5a17b.js";import"./index.es-dbe55641.js";import"./index.es-5900b098.js";import"./Provider-29253648.js";import"./Heading-d0e6bb7b.js";import"./Panel-76c4732c.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-a2b371c1.js";const R=d(A),P={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[R]},c=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:m,global:!0}];return n.jsx(g,{data:p,requestApi:h,children:n.jsx(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=c.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var l,r,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
//# sourceMappingURL=FordelingAvBehandlingstypePanel.stories-aab8384e.js.map
