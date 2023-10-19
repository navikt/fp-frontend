import{j as o}from"./jsx-runtime-9c4ae004.js";import{B as u,d as t,N as e,j as g,m as c}from"./nb_NO-1109ad64.js";import{z as r}from"./index.es-657e045f.js";import{k as f}from"./index.es-fd46ef39.js";import{a as P,r as E}from"./fplosRestApi-afc43ca3.js";import{M as i}from"./ManueltPaVentPanel-b76faf63.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-5c2532e8.js";import"./isSameOrBefore-ea99da6c.js";import"./index.es-8ed861d9.js";import"./index.es-8384c57a.js";import"./Provider-fdd1ccab.js";import"./Heading-b448de2b.js";import"./Panel-35f1a2e6.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-9c6ceb4a.js";const V=u(c),T={title:"los/avdelingsleder/nokkeltall/ManueltPaVentPanel",component:i,decorators:[V]},n=5,k=({oppgaverManueltPaVent:m})=>{const d=[{key:P.KODEVERK_LOS.name,data:g,global:!0}];return o.jsx(f,{data:d,requestApi:E,children:o.jsx(i,{height:300,oppgaverManueltPaVent:m,getValueFromLocalStorage:()=>""})})},a=k.bind({});a.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(e),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"d").format(e),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"w").format(e),antall:14}]};var s,l,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,T as default};
//# sourceMappingURL=ManueltPaVentPanel.stories-de92ce16.js.map
