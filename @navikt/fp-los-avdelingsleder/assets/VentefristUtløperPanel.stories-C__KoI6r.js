import{R as o}from"./index-BBkUAzwr.js";import{d as t}from"./dayjs.min-DXWWvErk.js";import{g as c,A as a,m as g}from"./nb_NO-ammWO68Y.js";import{z as r}from"./index.es-Cl_yxThX.js";import{R as f}from"./RestApiMock--FIjvRYs.js";import"./useRestApiRunner-BbKnLk0z.js";import{a as u}from"./alleKodeverkLos-BJud6Q-i.js";import{R as V,r as E}from"./fplosRestApi-CKDBHRen.js";import{V as p}from"./VentefristUtløperPanel-Sia4Q7U7.js";import"./index-BfZ0jBbx.js";import"./StoreValuesInLocalStorage-DbvB94aq.js";import"./useLosKodeverk-YkaAS8Rx.js";import"./isSameOrBefore-lHPY4PLG.js";import"./FlyttReservasjonModal-D0Vmy9Jg.js";import"./index.es-Ddaq4f5b.js";import"./Panel-BwoXZ0BW.js";const R=c(g),T={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[R]},s=5,A=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o.createElement(f,{data:d,requestApi:E},o.createElement(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""}))},e=A.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
