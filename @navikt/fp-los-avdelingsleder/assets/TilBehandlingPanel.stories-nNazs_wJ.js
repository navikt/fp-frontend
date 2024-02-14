import{j as s}from"./jsx-runtime-CUEGZZF9.js";import{g as E,d as t,N as e,m as g}from"./nb_NO-k-ioYHLQ.js";import{z as a,Y as o}from"./index.es-LzEcK_Mh.js";import{R}from"./RestApiMock-SiosCgtf.js";import{a as c}from"./alleKodeverkLos-Qz5F4oTQ.js";import{R as D,r as T}from"./fplosRestApi-74D8GJap.js";import{T as i}from"./TilBehandlingPanel-lmuwU7TZ.js";import"./index-DogsOklH.js";import"./index-MroJ3egt.js";import"./useGlobalStateRestApiData-A2OyOdo-.js";import"./isSameOrAfter-2cARl_z0.js";import"./isSameOrBefore-cJ9-RUZQ.js";import"./StoreValuesInLocalStorage-A19sIOBb.js";import"./useLosKodeverk-oWG57m0p.js";import"./FlyttReservasjonModal-9Aq3uo1z.js";import"./index.es-7P-vm6tu.js";import"./Panel-o4KFTaS8.js";const f=E(g),B={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[f]},N=({oppgaverPerDato:m})=>{const d=[{key:D.KODEVERK_LOS.name,data:c,global:!0}];return s(R,{data:d,requestApi:T,children:s(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""})})},r=N.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().format(e),antall:1},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(3,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:t().subtract(4,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(4,"d").format(e),antall:6},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(10,"d").format(e),antall:3},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(16,"d").format(e),antall:3}]};var l,p,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const I=["Default"];export{r as Default,I as __namedExportsOrder,B as default};
