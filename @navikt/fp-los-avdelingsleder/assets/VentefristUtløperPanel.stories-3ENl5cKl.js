import{j as o}from"./jsx-runtime-CUEGZZF9.js";import{g,d as t,N as a,m as c}from"./nb_NO-gecc5r6D.js";import{z as r}from"./index.es-LzEcK_Mh.js";import{R as f}from"./RestApiMock-GVojLHLL.js";import{a as u}from"./alleKodeverkLos-Qz5F4oTQ.js";import{R as V,r as h}from"./fplosRestApi-rp57q-9T.js";import{V as p}from"./VentefristUtløperPanel-FGAOzqGf.js";import"./index-DogsOklH.js";import"./index-MroJ3egt.js";import"./useGlobalStateRestApiData-A2OyOdo-.js";import"./StoreValuesInLocalStorage-A19sIOBb.js";import"./useLosKodeverk-VAX3Rq0T.js";import"./isSameOrBefore-cJ9-RUZQ.js";import"./FlyttReservasjonModal-A26N0AFy.js";import"./index.es-n3GFEPFi.js";import"./Panel-OhF1Mq2S.js";const k=g(c),_={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[k]},s=5,A=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o(f,{data:d,requestApi:h,children:o(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},e=A.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,_ as default};
