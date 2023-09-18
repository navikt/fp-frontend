import{j as n}from"./jsx-runtime-9c4ae004.js";import{z as e,Y as a}from"./index.es-657e045f.js";import{k as g}from"./index.es-02a6c24a.js";import{B as d,j as m,m as A}from"./nb_NO-14bcf780.js";import{a as E,r as h}from"./fplosRestApi-beda4f04.js";import{F as s}from"./FordelingAvBehandlingstypePanel-cf3b974b.js";import"./index-1b03fe98.js";import"./index.es-dcafba10.js";import"./index-6fd5a17b.js";import"./index.es-fdea4595.js";import"./index.es-e059776d.js";import"./Provider-74b80cf1.js";import"./Detail-19d51d7c.js";import"./Heading-54254f6d.js";import"./Panel-fa0d0def.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-3c749e2b.js";const R=d(A),V={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[R]},c=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:m,global:!0}];return n.jsx(g,{data:p,requestApi:h,children:n.jsx(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=c.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var r,l,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
//# sourceMappingURL=FordelingAvBehandlingstypePanel.stories-5532a561.js.map
