import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{d as t}from"./dayjs.min-BsYQKNhR.js";import{A as a,m as g}from"./nb_NO-DrhcNu1S.js";import{z as r}from"./index.es-Cl_yxThX.js";import{R as c}from"./RestApiMock-C__BYG2T.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{g as f}from"./withIntl-Berq2KW1.js";import{a as u}from"./alleKodeverkLos-BJud6Q-i.js";import{R as V,r as h}from"./fplosRestApi-1yojVYCb.js";import{V as p}from"./VentefristUtløperPanel-BVRVZB3N.js";import"./index-C5xsJX-I.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-Bf_J3o3R.js";import"./isSameOrBefore-DeYxtwBz.js";import"./FlyttReservasjonModal-BzemuNjD.js";import"./index.es-qfXkDFSI.js";import"./Panel-D1Pw-hs1.js";const A=f(g),j={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[A]},s=5,E=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o.jsx(c,{data:d,requestApi:h,children:o.jsx(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},e=E.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  oppgaverManueltPaVent
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <VentefristUtløperPanel height={300} behandlingerPaVent={oppgaverManueltPaVent} getValueFromLocalStorage={() => ''} />
    </RestApiMock>;
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const U=["Default"];export{e as Default,U as __namedExportsOrder,j as default};
