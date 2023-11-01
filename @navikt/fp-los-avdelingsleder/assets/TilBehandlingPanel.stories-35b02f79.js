import{j as s}from"./jsx-runtime-86dfebf6.js";import{g as E,d as t,N as e,m as g}from"./nb_NO-efa96071.js";import{z as a,Y as o}from"./index.es-657e045f.js";import{R}from"./RestApiMock-e250a15a.js";import{a as c}from"./alleKodeverkLos-5ac5bd02.js";import{a as D,r as T}from"./fplosRestApi-86173006.js";import{T as i}from"./TilBehandlingPanel-247ea3d4.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./useGlobalStateRestApiData-20592075.js";import"./isSameOrAfter-48a89950.js";import"./isSameOrBefore-ea99da6c.js";import"./StoreValuesInLocalStorage-6ed602ef.js";import"./useLosKodeverk-d600ecab.js";import"./FlyttReservasjonModal-e3bc3fdb.js";import"./index.es-f7212981.js";import"./Modal-8716ca3f.js";import"./Heading-8e12b169.js";import"./Panel-cae179d9.js";const f=E(g),V={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[f]},N=({oppgaverPerDato:m})=>{const d=[{key:D.KODEVERK_LOS.name,data:c,global:!0}];return s(R,{data:d,requestApi:T,children:s(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""})})},r=N.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().format(e),antall:1},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(3,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:t().subtract(4,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(4,"d").format(e),antall:6},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(10,"d").format(e),antall:3},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(16,"d").format(e),antall:3}]};var l,p,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`({
  oppgaverPerDato
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <TilBehandlingPanel height={300} oppgaverPerDato={oppgaverPerDato} getValueFromLocalStorage={() => ''} />
    </RestApiMock>;
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const j=["Default"];export{r as Default,j as __namedExportsOrder,V as default};
//# sourceMappingURL=TilBehandlingPanel.stories-35b02f79.js.map
