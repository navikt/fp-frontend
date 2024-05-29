import{R as d}from"./index-DogsOklH.js";import{a as t}from"./chunk-MZXVCX43-RlXIxtK5.js";import{R as E}from"./RestApiMock-PoHaMzn1.js";import"./useRestApiRunner-t59neJBf.js";import{g as f,m as K}from"./nb_NO-8vkv4Fjx.js";import{L as m}from"./LeggTilSaksbehandlerForm-bpeF8f61.js";import{a as l,r as L}from"./fplosRestApi-hxLEfccG.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./index.es-lhDBPqjE.js";const N=f(K),q={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:m,decorators:[N]},s={brukerIdent:"R232323",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},r=({avdelingensSaksbehandlere:p,funnetSaksbehandler:u,hentAvdelingensSaksbehandlere:v})=>{const R=[{key:l.SAKSBEHANDLER_SOK.name,data:u},{key:l.OPPRETT_NY_SAKSBEHANDLER.name,data:void 0}];return d.createElement(E,{data:R,requestApi:L},d.createElement(m,{avdelingensSaksbehandlere:p||[],hentAvdelingensSaksbehandlere:v,valgtAvdelingEnhet:"NAV Viken"}))},e=r.bind({});e.args={funnetSaksbehandler:s,hentAvdelingensSaksbehandlere:t("button-click")};const n=r.bind({});n.args={avdelingensSaksbehandlere:[s],funnetSaksbehandler:s,hentAvdelingensSaksbehandlere:t("button-click")};const a=r.bind({});a.args={avdelingensSaksbehandlere:[s],funnetSaksbehandler:void 0,hentAvdelingensSaksbehandlere:t("button-click")};var i,o,k;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
  avdelingensSaksbehandlere,
  funnetSaksbehandler,
  hentAvdelingensSaksbehandlere
}) => {
  const data = [{
    key: RestApiPathsKeys.SAKSBEHANDLER_SOK.name,
    data: funnetSaksbehandler
  }, {
    key: RestApiPathsKeys.OPPRETT_NY_SAKSBEHANDLER.name,
    data: undefined
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <LeggTilSaksbehandlerForm avdelingensSaksbehandlere={avdelingensSaksbehandlere || []} hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(k=(o=e.parameters)==null?void 0:o.docs)==null?void 0:k.source}}};var h,S,A;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
  avdelingensSaksbehandlere,
  funnetSaksbehandler,
  hentAvdelingensSaksbehandlere
}) => {
  const data = [{
    key: RestApiPathsKeys.SAKSBEHANDLER_SOK.name,
    data: funnetSaksbehandler
  }, {
    key: RestApiPathsKeys.OPPRETT_NY_SAKSBEHANDLER.name,
    data: undefined
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <LeggTilSaksbehandlerForm avdelingensSaksbehandlere={avdelingensSaksbehandlere || []} hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var g,b,c;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`({
  avdelingensSaksbehandlere,
  funnetSaksbehandler,
  hentAvdelingensSaksbehandlere
}) => {
  const data = [{
    key: RestApiPathsKeys.SAKSBEHANDLER_SOK.name,
    data: funnetSaksbehandler
  }, {
    key: RestApiPathsKeys.OPPRETT_NY_SAKSBEHANDLER.name,
    data: undefined
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <LeggTilSaksbehandlerForm avdelingensSaksbehandlere={avdelingensSaksbehandlere || []} hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(c=(b=a.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const M=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{n as AlleredeLagtTil,e as Default,a as SaksbehandlerFinnesIkke,M as __namedExportsOrder,q as default};
