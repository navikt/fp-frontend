import{j as d}from"./jsx-runtime-QvZ8i92b.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{R as E}from"./RestApiMock-CpztDn02.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{m as f}from"./nb_NO-BE-Qr1m0.js";import{g as K}from"./withIntl-B5J5Towl.js";import{L as b}from"./LeggTilSaksbehandlerForm-CKssP69L.js";import{a as l,r as L}from"./fplosRestApi-1yojVYCb.js";import"./v4-CQkTLCs1.js";import"./index-CfOt2XX2.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-D15_9Uao.js";const T=K(f),I={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:b,decorators:[T]},s={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},r=({avdelingensSaksbehandlere:c,funnetSaksbehandler:u,hentAvdelingensSaksbehandlere:v})=>{const R=[{key:l.SAKSBEHANDLER_SOK.name,data:u},{key:l.OPPRETT_NY_SAKSBEHANDLER.name,data:void 0}];return d.jsx(E,{data:R,requestApi:L,children:d.jsx(b,{avdelingensSaksbehandlere:c||[],hentAvdelingensSaksbehandlere:v,valgtAvdelingEnhet:"NAV Viken"})})},e=r.bind({});e.args={funnetSaksbehandler:s,hentAvdelingensSaksbehandlere:t("button-click")};const n=r.bind({});n.args={avdelingensSaksbehandlere:[s],funnetSaksbehandler:s,hentAvdelingensSaksbehandlere:t("button-click")};const a=r.bind({});a.args={avdelingensSaksbehandlere:[s],funnetSaksbehandler:void 0,hentAvdelingensSaksbehandlere:t("button-click")};var i,o,k;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var g,m,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const j=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{n as AlleredeLagtTil,e as Default,a as SaksbehandlerFinnesIkke,j as __namedExportsOrder,I as default};
