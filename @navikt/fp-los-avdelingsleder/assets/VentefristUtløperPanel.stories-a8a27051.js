import{j as o}from"./jsx-runtime-86dfebf6.js";import{g,d as t,N as a,m as c}from"./nb_NO-632fc4c8.js";import{z as r}from"./index.es-657e045f.js";import{R as f}from"./RestApiMock-492f57af.js";import{a as u}from"./alleKodeverkLos-5ac5bd02.js";import{a as V,r as h}from"./fplosRestApi-fe4a3ae6.js";import{V as p}from"./VentefristUtløperPanel-c3b41272.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./useGlobalStateRestApiData-20592075.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-c901f2b0.js";import"./isSameOrBefore-ea99da6c.js";import"./FlyttReservasjonModal-ffb422e9.js";import"./index.es-47c36ed4.js";import"./Modal-f8c23473.js";import"./Heading-c434b717.js";import"./Panel-384158e1.js";const k=g(c),j={title:"los/avdelingsleder/nokkeltall/VentefristUtløperPanel",component:p,decorators:[k]},s=5,A=({oppgaverManueltPaVent:m})=>{const d=[{key:V.KODEVERK_LOS.name,data:u,global:!0}];return o(f,{data:d,requestApi:h,children:o(p,{height:300,behandlingerPaVent:m,getValueFromLocalStorage:()=>""})})},e=A.bind({});e.args={oppgaverManueltPaVent:[{fagsakYtelseType:r.FORELDREPENGER,behandlingFrist:t().format(a),antall:10},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"d").format(a),antall:4},{fagsakYtelseType:r.ENGANGSSTONAD,behandlingFrist:t().add(s,"w").format(a),antall:14}]};var n,l,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
//# sourceMappingURL=VentefristUtløperPanel.stories-a8a27051.js.map
