import{j as d}from"./jsx-runtime-QvZ8i92b.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{R as E}from"./RestApiMock-DVhxYJfd.js";import"./index-uubelm5h.js";import"./useRestApiRunner-C_OWMqIS.js";import{m as f}from"./nb_NO-xOTxt9dL.js";import{g as K}from"./withIntl-YzfFZyng.js";import{L as b}from"./LeggTilSaksbehandlerForm-DTqWH6m_.js";import{a as l,r as L}from"./fplosRestApi-CbLPsHxS.js";import"./v4-CQkTLCs1.js";import"./Modal-tRW4hqse.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-hWEM_5pc.js";import"./VStack-yjYS5DzK.js";import"./index.es-BIJMLfII.js";const T=K(f),w={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:b,decorators:[T]},s={brukerIdent:"R232323",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},r=({avdelingensSaksbehandlere:c,funnetSaksbehandler:v,hentAvdelingensSaksbehandlere:u})=>{const R=[{key:l.SAKSBEHANDLER_SOK.name,data:v},{key:l.OPPRETT_NY_SAKSBEHANDLER.name,data:void 0}];return d.jsx(E,{data:R,requestApi:L,children:d.jsx(b,{avdelingensSaksbehandlere:c||[],hentAvdelingensSaksbehandlere:u,valgtAvdelingEnhet:"Nav Vikafossen"})})},e=r.bind({});e.args={funnetSaksbehandler:s,hentAvdelingensSaksbehandlere:t("button-click")};const n=r.bind({});n.args={avdelingensSaksbehandlere:[s],funnetSaksbehandler:s,hentAvdelingensSaksbehandlere:t("button-click")};const a=r.bind({});a.args={avdelingensSaksbehandlere:[s],funnetSaksbehandler:void 0,hentAvdelingensSaksbehandlere:t("button-click")};var i,o,k;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const U=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{n as AlleredeLagtTil,e as Default,a as SaksbehandlerFinnesIkke,U as __namedExportsOrder,w as default};
