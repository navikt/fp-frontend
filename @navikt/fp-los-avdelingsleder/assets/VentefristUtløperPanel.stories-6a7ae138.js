import{j as o}from"./jsx-runtime-86dfebf6.js";import{g,d as t,N as a,m as c}from"./nb_NO-efa96071.js";import{z as r}from"./index.es-657e045f.js";import{R as f}from"./RestApiMock-e250a15a.js";import{a as u}from"./alleKodeverkLos-5ac5bd02.js";import{a as V,r as h}from"./fplosRestApi-86173006.js";import{V as p}from"./VentefristUtløperPanel-7b3daa18.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./useGlobalStateRestApiData-20592075.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-d600ecab.js";import"./isSameOrBefore-ea99da6c.js";import"./FlyttReservasjonModal-e3bc3fdb.js";import"./index.es-f7212981.js";import"./Modal-8716ca3f.js";import"./Heading-8e12b169.js";import"./Panel-cae179d9.js";const k=g(c),j={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[k]},s=5,A=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o(f,{data:d,requestApi:h,children:o(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},e=A.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,j as default};
//# sourceMappingURL=VentefristUtløperPanel.stories-6a7ae138.js.map
