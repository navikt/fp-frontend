import{R as o}from"./index-DVXBtNgz.js";import{g as c,d as t,N as a,m as g}from"./nb_NO-CHG6adMY.js";import{z as r}from"./index.es-Cl_yxThX.js";import{R as f}from"./RestApiMock-DcR0Wtlh.js";import"./useRestApiRunner-DMqLTnzH.js";import{a as u}from"./alleKodeverkLos-BJud6Q-i.js";import{R as V,r as E}from"./fplosRestApi-Cec8OPf6.js";import{V as p}from"./VentefristUtløperPanel-DxKT4Ii4.js";import"./index-Cbx7Fas8.js";import"./tslib.es6-CMwweBXX.js";import"./StoreValuesInLocalStorage-C8lZhFdq.js";import"./useLosKodeverk-CEzN4GAn.js";import"./isSameOrBefore-hONzKWgy.js";import"./FlyttReservasjonModal-BbGeKIhX.js";import"./index.es-CWIpGV0D.js";import"./Panel-ClCDxyoK.js";const R=c(g),T={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[R]},s=5,h=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o.createElement(f,{data:d,requestApi:E},o.createElement(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""}))},e=h.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const U=["Default"];export{e as Default,U as __namedExportsOrder,T as default};
