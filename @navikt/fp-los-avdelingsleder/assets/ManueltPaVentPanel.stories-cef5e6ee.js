import{j as o}from"./jsx-runtime-5926aa06.js";import{B as u,d as t,N as e,j as g,m as c}from"./nb_NO-34c6c3ba.js";import{z as r}from"./index.es-657e045f.js";import{k as f}from"./index.es-f19dba30.js";import{R as P,r as E}from"./fplosRestApi-56e2d09a.js";import{M as i}from"./ManueltPaVentPanel-9ed8cbdb.js";import"./index-ebeaab24.js";import"./index-9c09ad76.js";import"./index.es-24d105fb.js";import"./isSameOrBefore-1b33768e.js";import"./index.es-333191f8.js";import"./index.es-7d65aa9f.js";import"./Provider-26ee741a.js";import"./index-f50b85d6.js";import"./Panel-e2c29623.js";import"./Heading-8a34415b.js";import"./StoreValuesInLocalStorage-28723227.js";import"./useLosKodeverk-46a11add.js";const V=u(c),_={title:"los/avdelingsleder/nokkeltall/ManueltPaVentPanel",component:i,decorators:[V]},n=5,k=({oppgaverManueltPaVent:m})=>{const d=[{key:P.KODEVERK_LOS.name,data:g,global:!0}];return o.jsx(f,{data:d,requestApi:E,children:o.jsx(i,{height:300,oppgaverManueltPaVent:m,getValueFromLocalStorage:()=>""})})},a=k.bind({});a.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(e),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"d").format(e),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"w").format(e),antall:14}]};var s,l,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const q=["Default"];export{a as Default,q as __namedExportsOrder,_ as default};
//# sourceMappingURL=ManueltPaVentPanel.stories-cef5e6ee.js.map
