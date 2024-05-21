import{R as o}from"./index-DogsOklH.js";import{g as c,d as t,N as a,m as g}from"./nb_NO-H9rL7jWp.js";import{z as r}from"./index.es-LzEcK_Mh.js";import{R as f}from"./RestApiMock-8FOaa7K1.js";import"./useRestApiRunner-t59neJBf.js";import{a as u}from"./alleKodeverkLos-3oPC0WGq.js";import{R as V,r as E}from"./fplosRestApi-7cfjsQHL.js";import{V as p}from"./VentefristUtløperPanel-CwN6zGvF.js";import"./index-MroJ3egt.js";import"./StoreValuesInLocalStorage-DtTb5O6k.js";import"./useLosKodeverk-EtPolOdW.js";import"./isSameOrBefore-cJ9-RUZQ.js";import"./FlyttReservasjonModal-bGLu1pnr.js";import"./index.es-ngO7zYbJ.js";import"./Panel--qvEpq93.js";const R=c(g),T={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[R]},s=5,h=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o.createElement(f,{data:d,requestApi:E},o.createElement(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""}))},e=h.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,T as default};
