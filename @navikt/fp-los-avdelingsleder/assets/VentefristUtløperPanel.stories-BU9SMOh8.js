import{R as o}from"./index-DVXBtNgz.js";import{d as t}from"./dayjs.min-Dkhc0ShP.js";import{g as c,N as a,m as g}from"./nb_NO-DypaWN8k.js";import{z as r}from"./index.es-Cl_yxThX.js";import{R as f}from"./RestApiMock-CMcnG-4N.js";import"./useRestApiRunner-r8nm61Jn.js";import{a as u}from"./alleKodeverkLos-BJud6Q-i.js";import{R as V,r as E}from"./fplosRestApi-DXPSIiTb.js";import{V as p}from"./VentefristUtløperPanel-D7avAjnr.js";import"./index-Cbx7Fas8.js";import"./tslib.es6-CMwweBXX.js";import"./StoreValuesInLocalStorage-C8lZhFdq.js";import"./useLosKodeverk-BklsCf3V.js";import"./isSameOrBefore-hONzKWgy.js";import"./FlyttReservasjonModal-uEX_gf2E.js";import"./index.es-CZr2up0C.js";import"./Panel-BoQTDHFM.js";const R=c(g),U={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[R]},s=5,h=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o.createElement(f,{data:d,requestApi:E},o.createElement(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""}))},e=h.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,U as default};
