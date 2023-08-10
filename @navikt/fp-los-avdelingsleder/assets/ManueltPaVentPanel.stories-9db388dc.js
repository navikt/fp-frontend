import{j as o}from"./jsx-runtime-69eee039.js";import{B as u,d as t,N as e,j as g,m as c}from"./nb_NO-7b970f8e.js";import{z as r}from"./index.es-657e045f.js";import{k as f}from"./index.es-15120e22.js";import{a as P,r as E}from"./fplosRestApi-06437043.js";import{M as i}from"./ManueltPaVentPanel-06b8f63e.js";import"./index-7c191284.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";import"./index.es-6dfc8135.js";import"./isSameOrBefore-3c6a6c36.js";import"./index.es-3716ffc0.js";import"./index.es-d43f158f.js";import"./Provider-b10fa804.js";import"./index-b3a39e30.js";import"./Panel-d69a7370.js";import"./Heading-7322b494.js";import"./StoreValuesInLocalStorage-2b38d468.js";import"./useLosKodeverk-c784a1f9.js";const V=u(c),q={title:"los/avdelingsleder/nokkeltall/ManueltPaVentPanel",component:i,decorators:[V]},n=5,k=({oppgaverManueltPaVent:m})=>{const d=[{key:P.KODEVERK_LOS.name,data:g,global:!0}];return o.jsx(f,{data:d,requestApi:E,children:o.jsx(i,{height:300,oppgaverManueltPaVent:m,getValueFromLocalStorage:()=>""})})},a=k.bind({});a.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(e),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"d").format(e),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"w").format(e),antall:14}]};var s,l,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`({
  oppgaverManueltPaVent
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <ManueltPaVentPanel height={300} oppgaverManueltPaVent={oppgaverManueltPaVent} getValueFromLocalStorage={() => ''} />
    </RestApiMock>;
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const Y=["Default"];export{a as Default,Y as __namedExportsOrder,q as default};
//# sourceMappingURL=ManueltPaVentPanel.stories-9db388dc.js.map
