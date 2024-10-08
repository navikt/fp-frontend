import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{z as e,Y as a}from"./index.es-Cl_yxThX.js";import{R as g}from"./RestApiMock-BqEzg2zk.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{m as d}from"./nb_NO-BDUDBxCz.js";import{g as m}from"./withIntl-Cpwx8HlB.js";import{a as A}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,r as R}from"./fplosRestApi-1yojVYCb.js";import{F as s}from"./FordelingAvBehandlingstypePanel-Cb1bQ9vg.js";import"./index-CfOt2XX2.js";import"./dayjs.min-BsYQKNhR.js";import"./FlyttReservasjonModal-DusLLi5H.js";import"./index.es-CU2WkXv2.js";import"./Panel--8iV_nPK.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-Bf_J3o3R.js";const c=m(d),V={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[c]},h=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return r.jsx(g,{data:p,requestApi:R,children:r.jsx(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=h.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var o,l,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,V as default};
