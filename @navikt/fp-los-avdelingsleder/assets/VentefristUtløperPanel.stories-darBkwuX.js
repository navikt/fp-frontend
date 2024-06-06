import{R as o}from"./index-BBkUAzwr.js";import{g as c,d as t,N as a,m as g}from"./nb_NO-Dpo8zdWW.js";import{z as r}from"./index.es-Cl_yxThX.js";import{R as f}from"./RestApiMock-Dpt-GNNc.js";import"./useRestApiRunner-Bj3tzHZ6.js";import{a as u}from"./alleKodeverkLos-BJud6Q-i.js";import{R as V,r as E}from"./fplosRestApi-B7o859yn.js";import{V as p}from"./VentefristUtløperPanel-EEJX09AN.js";import"./index-PqR-_bA4.js";import"./StoreValuesInLocalStorage-DbvB94aq.js";import"./useLosKodeverk-CPiOfefX.js";import"./isSameOrBefore-lHPY4PLG.js";import"./FlyttReservasjonModal-2X6215Bk.js";import"./index.es-4UZ3d1zR.js";import"./Panel-BeohLQId.js";const R=c(g),M={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[R]},s=5,h=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o.createElement(f,{data:d,requestApi:E},o.createElement(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""}))},e=h.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
