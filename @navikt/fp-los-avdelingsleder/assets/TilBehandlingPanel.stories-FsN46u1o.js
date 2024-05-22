import{R as l}from"./index-DogsOklH.js";import{g as d,d as e,N as t,m as g}from"./nb_NO-Tp50aoLI.js";import{z as a,Y as o}from"./index.es-LzEcK_Mh.js";import{R}from"./RestApiMock-TmCF8zKT.js";import"./useRestApiRunner-t59neJBf.js";import{a as c}from"./alleKodeverkLos-3oPC0WGq.js";import{R as D,r as T}from"./fplosRestApi-7cfjsQHL.js";import{T as i}from"./TilBehandlingPanel-4oEoYpI0.js";import"./index-MroJ3egt.js";import"./isSameOrAfter-2cARl_z0.js";import"./isSameOrBefore-cJ9-RUZQ.js";import"./StoreValuesInLocalStorage-DtTb5O6k.js";import"./useLosKodeverk-EtPolOdW.js";import"./FlyttReservasjonModal-rmNTawi7.js";import"./index.es-avvzJ7c1.js";import"./Panel-YruKRthN.js";const f=d(g),_={title:"los/avdelingsleder/nokkeltall/TilBehandlingPanel",component:i,decorators:[f]},N=({oppgaverPerDato:m})=>{const E=[{key:D.KODEVERK_LOS.name,data:c,global:!0}];return l.createElement(R,{data:E,requestApi:T},l.createElement(i,{height:300,oppgaverPerDato:m,getValueFromLocalStorage:()=>""}))},r=N.bind({});r.args={oppgaverPerDato:[{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:e().format(t),antall:1},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:e().subtract(3,"d").format(t),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.KLAGE,opprettetDato:e().subtract(4,"d").format(t),antall:2},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.FORSTEGANGSSOKNAD,opprettetDato:e().subtract(4,"d").format(t),antall:6},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:e().subtract(10,"d").format(t),antall:3},{fagsakYtelseType:a.FORELDREPENGER,behandlingType:o.DOKUMENTINNSYN,opprettetDato:e().subtract(16,"d").format(t),antall:3}]};var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
