import{d as t,j as s}from"./dayjs.min-DKYhEbg2.js";import{g as E,A as e,m as g}from"./nb_NO-CRq88Yak.js";import{z as a,Y as o}from"./index.es-Cl_yxThX.js";import{R}from"./RestApiMock-DKZL9Vcn.js";import"./index-BBkUAzwr.js";import"./useRestApiRunner-DAdfBy_z.js";import{a as c}from"./alleKodeverkLos-BJud6Q-i.js";import{R as D,r as T}from"./fplosRestApi-Dw3FUmgN.js";import{T as i}from"./TilBehandlingPanel-TI7Ph0PO.js";import"./index-BfZ0jBbx.js";import"./isSameOrAfter-g8x2aXZs.js";import"./isSameOrBefore-lHPY4PLG.js";import"./StoreValuesInLocalStorage-DbvB94aq.js";import"./useLosKodeverk-0-n5-l60.js";import"./FlyttReservasjonModal-B4ZmK9bW.js";import"./index.es-CdOhyqnT.js";import"./Panel-B5ILUgZi.js";const f=E(g),M={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[f]},u=({oppgaverPerDato:m})=>{const d=[{key:D.KODEVERK_LOS.name,data:c,global:!0}];return s.jsx(R,{data:d,requestApi:T,children:s.jsx(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""})})},r=u.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().format(e),antall:1},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(3,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:t().subtract(4,"d").format(e),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:t().subtract(4,"d").format(e),antall:6},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(10,"d").format(e),antall:3},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:t().subtract(16,"d").format(e),antall:3}]};var l,p,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
