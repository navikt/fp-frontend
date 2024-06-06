import{R as l}from"./index-BBkUAzwr.js";import{g as d,d as e,N as t,m as g}from"./nb_NO-Dpo8zdWW.js";import{z as a,Y as o}from"./index.es-Cl_yxThX.js";import{R}from"./RestApiMock-Dpt-GNNc.js";import"./useRestApiRunner-Bj3tzHZ6.js";import{a as c}from"./alleKodeverkLos-BJud6Q-i.js";import{R as D,r as T}from"./fplosRestApi-B7o859yn.js";import{T as i}from"./TilBehandlingPanel-e1_Lg7tH.js";import"./index-PqR-_bA4.js";import"./isSameOrAfter-g8x2aXZs.js";import"./isSameOrBefore-lHPY4PLG.js";import"./StoreValuesInLocalStorage-DbvB94aq.js";import"./useLosKodeverk-CPiOfefX.js";import"./FlyttReservasjonModal-2X6215Bk.js";import"./index.es-4UZ3d1zR.js";import"./Panel-BeohLQId.js";const f=d(g),_={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[f]},N=({oppgaverPerDato:m})=>{const E=[{key:D.KODEVERK_LOS.name,data:c,global:!0}];return l.createElement(R,{data:E,requestApi:T},l.createElement(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""}))},r=N.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:e().format(t),antall:1},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:e().subtract(3,"d").format(t),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:e().subtract(4,"d").format(t),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:e().subtract(4,"d").format(t),antall:6},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:e().subtract(10,"d").format(t),antall:3},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:e().subtract(16,"d").format(t),antall:3}]};var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const B=["Default"];export{r as Default,B as __namedExportsOrder,_ as default};
