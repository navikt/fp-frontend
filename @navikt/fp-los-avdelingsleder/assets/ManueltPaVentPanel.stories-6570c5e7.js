import{j as o}from"./jsx-runtime-9c4ae004.js";import{B as u,d as t,N as e,j as g,m as c}from"./nb_NO-05becbd9.js";import{z as r}from"./index.es-657e045f.js";import{k as f}from"./index.es-3a17af17.js";import{a as P,r as E}from"./fplosRestApi-812c551e.js";import{M as i}from"./ManueltPaVentPanel-7228dca0.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-5c2532e8.js";import"./isSameOrBefore-ea99da6c.js";import"./index.es-dbe55641.js";import"./index.es-5900b098.js";import"./Provider-29253648.js";import"./Heading-d0e6bb7b.js";import"./Panel-76c4732c.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-a2b371c1.js";const V=u(c),T={title:"los/avdelingsleder/nokkeltall/ManueltPaVentPanel",component:i,decorators:[V]},n=5,k=({oppgaverManueltPaVent:m})=>{const d=[{key:P.KODEVERK_LOS.name,data:g,global:!0}];return o.jsx(f,{data:d,requestApi:E,children:o.jsx(i,{height:300,oppgaverManueltPaVent:m,getValueFromLocalStorage:()=>""})})},a=k.bind({});a.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(e),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"d").format(e),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(n,"w").format(e),antall:14}]};var s,l,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=ManueltPaVentPanel.stories-6570c5e7.js.map
