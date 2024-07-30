import{d as t,j as o}from"./dayjs.min-DKYhEbg2.js";import{g,A as a,m as c}from"./nb_NO-CRq88Yak.js";import{z as r}from"./index.es-Cl_yxThX.js";import{R as f}from"./RestApiMock-DKZL9Vcn.js";import"./index-BBkUAzwr.js";import"./useRestApiRunner-DAdfBy_z.js";import{a as u}from"./alleKodeverkLos-BJud6Q-i.js";import{R as V,r as h}from"./fplosRestApi-Dw3FUmgN.js";import{V as p}from"./VentefristUtløperPanel-DZfBhOuC.js";import"./index-BfZ0jBbx.js";import"./StoreValuesInLocalStorage-DbvB94aq.js";import"./useLosKodeverk-0-n5-l60.js";import"./isSameOrBefore-lHPY4PLG.js";import"./FlyttReservasjonModal-B4ZmK9bW.js";import"./index.es-CdOhyqnT.js";import"./Panel-B5ILUgZi.js";const A=g(c),M={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[A]},s=5,E=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o.jsx(f,{data:d,requestApi:h,children:o.jsx(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},e=E.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,M as default};
