import{R as l}from"./index-BBkUAzwr.js";import{d as t}from"./dayjs.min-DXWWvErk.js";import{g as d,A as e,m as g}from"./nb_NO-ammWO68Y.js";import{z as a,Y as o}from"./index.es-Cl_yxThX.js";import{R}from"./RestApiMock--FIjvRYs.js";import"./useRestApiRunner-BbKnLk0z.js";import{a as c}from"./alleKodeverkLos-BJud6Q-i.js";import{R as D,r as f}from"./fplosRestApi-CKDBHRen.js";import{T as i}from"./TilBehandlingPanel-BEGdlaxW.js";import"./index-BfZ0jBbx.js";import"./isSameOrAfter-g8x2aXZs.js";import"./isSameOrBefore-lHPY4PLG.js";import"./StoreValuesInLocalStorage-DbvB94aq.js";import"./useLosKodeverk-YkaAS8Rx.js";import"./FlyttReservasjonModal-D0Vmy9Jg.js";import"./index.es-Ddaq4f5b.js";import"./Panel-BwoXZ0BW.js";const T=d(g),B={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[T]},u=({oppgaverPerDato:m})=>{const E=[{key:D.KODEVERK_LOS.name,data:c,global:!0}];return l.createElement(R,{data:E,requestApi:f},l.createElement(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""}))},r=u.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().format(e),antall:1},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(3,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:t().subtract(4,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(4,"d").format(e),antall:6},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(10,"d").format(e),antall:3},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(16,"d").format(e),antall:3}]};var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
