import{d as t,j as o}from"./dayjs.min-ZUODdiE-.js";import{g,A as a,m as c}from"./nb_NO-ffV-qhYU.js";import{z as r}from"./index.es-Cl_yxThX.js";import{R as f}from"./RestApiMock-bbm7V34S.js";import"./index-uubelm5h.js";import"./useRestApiRunner-DIVzIFJm.js";import{a as u}from"./alleKodeverkLos-BJud6Q-i.js";import{R as V,r as h}from"./fplosRestApi-CXjbKy4z.js";import{V as p}from"./VentefristUtløperPanel-tG7fHllX.js";import"./index-BdzLX9oW.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-ilBKw7AH.js";import"./isSameOrBefore-DeYxtwBz.js";import"./FlyttReservasjonModal-CF3ZA447.js";import"./index.es-BZ8gbWlA.js";import"./Panel-HELrIUHO.js";const A=g(c),M={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[A]},s=5,E=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o.jsx(f,{data:d,requestApi:h,children:o.jsx(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},e=E.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
