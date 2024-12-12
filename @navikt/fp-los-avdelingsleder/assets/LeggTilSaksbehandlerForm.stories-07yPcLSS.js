import{j as d}from"./jsx-runtime-QvZ8i92b.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{m as E}from"./nb_NO-Zqge3fS6.js";import{g as f}from"./withIntl-Bv-P8ZIY.js";import{R as K}from"./RestApiMock-CCcMv-43.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Dz_KBbnA.js";import{a as i,r as L}from"./fplosRestApi-DIvKj8Ld.js";import{L as b}from"./LeggTilSaksbehandlerForm-CtHvWczx.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./index.es-DGARnTEE.js";import"./Modal-nRd4VDWO.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-C82Zs4UF.js";import"./VStack-C7XzQG3E.js";import"./index.es-BjtZFtlt.js";const T=f(E),U={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:b,decorators:[T]},s={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},r=({avdelingensSaksbehandlere:c,funnetSaksbehandler:v,hentAvdelingensSaksbehandlere:u})=>{const R=[{key:i.SAKSBEHANDLER_SOK.name,data:v},{key:i.OPPRETT_NY_SAKSBEHANDLER.name,data:void 0}];return d.jsx(K,{data:R,requestApi:L,children:d.jsx(b,{avdelingensSaksbehandlere:c||[],hentAvdelingensSaksbehandlere:u,valgtAvdelingEnhet:"Nav Vikafossen"})})},e=r.bind({});e.args={funnetSaksbehandler:s,hentAvdelingensSaksbehandlere:t("button-click")};const n=r.bind({});n.args={avdelingensSaksbehandlere:[s],funnetSaksbehandler:s,hentAvdelingensSaksbehandlere:t("button-click")};const a=r.bind({});a.args={avdelingensSaksbehandlere:[s],funnetSaksbehandler:void 0,hentAvdelingensSaksbehandlere:t("button-click")};var l,o,k;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
      <LeggTilSaksbehandlerForm avdelingensSaksbehandlere={avdelingensSaksbehandlere || []} hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} valgtAvdelingEnhet="Nav Vikafossen" />
    </RestApiMock>;
}`,...(k=(o=e.parameters)==null?void 0:o.docs)==null?void 0:k.source}}};var h,S,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
      <LeggTilSaksbehandlerForm avdelingensSaksbehandlere={avdelingensSaksbehandlere || []} hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} valgtAvdelingEnhet="Nav Vikafossen" />
    </RestApiMock>;
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var A,m,p;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
      <LeggTilSaksbehandlerForm avdelingensSaksbehandlere={avdelingensSaksbehandlere || []} hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} valgtAvdelingEnhet="Nav Vikafossen" />
    </RestApiMock>;
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const z=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{n as AlleredeLagtTil,e as Default,a as SaksbehandlerFinnesIkke,z as __namedExportsOrder,U as default};
