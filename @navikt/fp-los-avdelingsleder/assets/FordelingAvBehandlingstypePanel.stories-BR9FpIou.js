import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{z as e,Y as a}from"./index.es-Cl_yxThX.js";import{R as g}from"./RestApiMock-B6qRNcBN.js";import"./index-uubelm5h.js";import"./useRestApiRunner-J7gTlJGx.js";import{m}from"./nb_NO-xOTxt9dL.js";import{g as d}from"./withIntl-YzfFZyng.js";import{a as A}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,r as R}from"./fplosRestApi-CXMGmySj.js";import{F as s}from"./FordelingAvBehandlingstypePanel-oQCIwlMy.js";import"./Modal-tRW4hqse.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-Det53JvI.js";import"./VStack-yjYS5DzK.js";import"./FlyttReservasjonModal-B5OdIsAG.js";import"./index.es-D4mUV_xz.js";import"./Panel-ClMHD6wP.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-nhvMrtgl.js";const c=d(m),Y={title:"los/avdelingsleder/nokkeltall/FordelingAvBehandlingstypePanel",component:s,decorators:[c]},h=({oppgaverForAvdeling:i})=>{const p=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return r.jsx(g,{data:p,requestApi:R,children:r.jsx(s,{height:300,oppgaverForAvdeling:i,getValueFromLocalStorage:()=>""})})},t=h.bind({});t.args={oppgaverForAvdeling:[{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.FORSTEGANGSSOKNAD,tilBehandling:!0,antall:10},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.KLAGE,tilBehandling:!0,antall:4},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!0,antall:14},{fagsakYtelseType:e.ENGANGSSTONAD,behandlingType:a.REVURDERING,tilBehandling:!1,antall:4},{fagsakYtelseType:e.FORELDREPENGER,behandlingType:a.TILBAKEKREVING,tilBehandling:!1,antall:6}]};var o,l,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,Y as default};
