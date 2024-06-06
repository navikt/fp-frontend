import{R as l}from"./index-DVXBtNgz.js";import{g as d,d as t,N as e,m as g}from"./nb_NO-CHG6adMY.js";import{z as a,Y as o}from"./index.es-Cl_yxThX.js";import{R}from"./RestApiMock-DcR0Wtlh.js";import"./useRestApiRunner-DMqLTnzH.js";import{a as c}from"./alleKodeverkLos-BJud6Q-i.js";import{R as D,r as T}from"./fplosRestApi-Cec8OPf6.js";import{T as i}from"./TilBehandlingPanel-D_C4jCrC.js";import"./index-Cbx7Fas8.js";import"./tslib.es6-CMwweBXX.js";import"./isSameOrAfter-CXImAz9r.js";import"./isSameOrBefore-hONzKWgy.js";import"./StoreValuesInLocalStorage-C8lZhFdq.js";import"./useLosKodeverk-CEzN4GAn.js";import"./FlyttReservasjonModal-BbGeKIhX.js";import"./index.es-CWIpGV0D.js";import"./Panel-ClCDxyoK.js";const f=d(g),B={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[f]},N=({oppgaverPerDato:m})=>{const E=[{key:D.KODEVERK_LOS.name,data:c,global:!0}];return l.createElement(R,{data:E,requestApi:T},l.createElement(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""}))},r=N.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().format(e),antall:1},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(3,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:t().subtract(4,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(4,"d").format(e),antall:6},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(10,"d").format(e),antall:3},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(16,"d").format(e),antall:3}]};var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
