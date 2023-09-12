import{j as o}from"./jsx-runtime-9c4ae004.js";import{B as u,d as t,N as e,j as g,m as c}from"./nb_NO-349fe7a4.js";import{z as r}from"./index.es-657e045f.js";import{k as f}from"./index.es-44dedc9f.js";import{a as P,r as E}from"./fplosRestApi-beda4f04.js";import{M as i}from"./ManueltPaVentPanel-c5852bd1.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-dcafba10.js";import"./isSameOrBefore-ea99da6c.js";import"./index.es-37044bfa.js";import"./index.es-1fef6f08.js";import"./Provider-7b4d17ce.js";import"./Detail-bb5c8bf1.js";import"./Heading-5c498eab.js";import"./Panel-89f2070f.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-3c749e2b.js";const V=u(c),_={title:"los/avdelingsleder/nokkeltall/ManueltPaVentPanel",component:i,decorators:[V]},n=5,k=({oppgaverManueltPaVent:m})=>{const d=[{key:P.KODEVERK_LOS.name,data:g,global:!0}];return o.jsx(f,{data:d,requestApi:E,children:o.jsx(i,{height:300,oppgaverManueltPaVent:m,getValueFromLocalStorage:()=>""})})},a=k.bind({});a.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(e),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"d").format(e),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"w").format(e),antall:14}]};var s,l,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=ManueltPaVentPanel.stories-5fd4ad05.js.map
