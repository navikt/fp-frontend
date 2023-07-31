import{j as o}from"./jsx-runtime-9c4ae004.js";import{B as u,d as t,N as e,j as g,m as c}from"./nb_NO-a0ce56b0.js";import{z as r}from"./index.es-657e045f.js";import{k as f}from"./index.es-aea7e86d.js";import{a as P,r as E}from"./fplosRestApi-94bed106.js";import{M as i}from"./ManueltPaVentPanel-3853780c.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-4278fc81.js";import"./isSameOrBefore-ea99da6c.js";import"./index.es-a2b4d019.js";import"./index.es-89e7351f.js";import"./Provider-5bc3c550.js";import"./index-f6b105ee.js";import"./Panel-9758bfd8.js";import"./Heading-95b0ce84.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-e441829e.js";const V=u(c),_={title:"los/avdelingsleder/nokkeltall/ManueltPaVentPanel",component:i,decorators:[V]},n=5,k=({oppgaverManueltPaVent:m})=>{const d=[{key:P.KODEVERK_LOS.name,data:g,global:!0}];return o.jsx(f,{data:d,requestApi:E,children:o.jsx(i,{height:300,oppgaverManueltPaVent:m,getValueFromLocalStorage:()=>""})})},a=k.bind({});a.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(e),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"d").format(e),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"w").format(e),antall:14}]};var s,l,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=ManueltPaVentPanel.stories-f0d27440.js.map
