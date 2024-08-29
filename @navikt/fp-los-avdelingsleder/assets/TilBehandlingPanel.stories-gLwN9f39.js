import{d as t,j as s}from"./dayjs.min-ZUODdiE-.js";import{g as d,E as e,m as g}from"./nb_NO-DaKPuc26.js";import{z as a,Y as o}from"./index.es-Cl_yxThX.js";import{R}from"./RestApiMock-47fXKIMv.js";import"./index-uubelm5h.js";import"./useRestApiRunner-DIVzIFJm.js";import{a as c}from"./alleKodeverkLos-BJud6Q-i.js";import{R as D,r as T}from"./fplosRestApi-CXjbKy4z.js";import{T as i}from"./TilBehandlingPanel-BDW00r_w.js";import"./index-BdzLX9oW.js";import"./isSameOrAfter-C-awqOHd.js";import"./isSameOrBefore-DeYxtwBz.js";import"./StoreValuesInLocalStorage-D6Hb4UHw.js";import"./useLosKodeverk-ilBKw7AH.js";import"./FlyttReservasjonModal-wiXl8wxS.js";import"./index.es-CD656DKD.js";import"./Panel-ConQEAqL.js";const f=d(g),M={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[f]},u=({oppgaverPerDato:m})=>{const E=[{key:D.KODEVERK_LOS.name,data:c,global:!0}];return s.jsx(R,{data:E,requestApi:T,children:s.jsx(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""})})},r=u.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().format(e),antall:1},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(3,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:t().subtract(4,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(4,"d").format(e),antall:6},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(10,"d").format(e),antall:3},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(16,"d").format(e),antall:3}]};var l,p,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const _=["Default"];export{r as Default,_ as __namedExportsOrder,M as default};
