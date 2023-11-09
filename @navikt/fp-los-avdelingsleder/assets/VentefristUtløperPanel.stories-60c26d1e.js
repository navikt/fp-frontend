import{j as o}from"./jsx-runtime-86dfebf6.js";import{g,d as t,N as a,m as c}from"./nb_NO-7d7a9a16.js";import{z as r}from"./index.es-657e045f.js";import{R as f}from"./intl-test-helper-4315b879.js";import{a as u}from"./alleKodeverkLos-5ac5bd02.js";import{a as V,r as h}from"./fplosRestApi-e273a6f1.js";import{V as p}from"./VentefristUtløperPanel-7eb59629.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./useGlobalStateRestApiData-20592075.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-ac1cee0a.js";import"./isSameOrBefore-ea99da6c.js";import"./FlyttReservasjonModal-bd269abd.js";import"./index.es-6bc5cfcb.js";import"./Panel-ccb95562.js";const k=g(c),_={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[k]},s=5,A=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o(f,{data:d,requestApi:h,children:o(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},e=A.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const U=["Default"];export{e as Default,U as __namedExportsOrder,_ as default};
//# sourceMappingURL=VentefristUtløperPanel.stories-60c26d1e.js.map
