import{j as d}from"./jsx-runtime-9c4ae004.js";import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import{k as E}from"./index.es-352655e9.js";import{B as f,m as K}from"./nb_NO-d1625de4.js";import{L as p}from"./LeggTilSaksbehandlerForm-6b015192.js";import{R as l,r as L}from"./fplosRestApi-beda4f04.js";import"./index-1b03fe98.js";import"./index.es-dcafba10.js";import"./index-6fd5a17b.js";import"./index.es-eb6186af.js";const N=f(K),q={title:"los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm",component:p,decorators:[N]},s={brukerIdent:"R232323",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},r=({avdelingensSaksbehandlere:c,funnetSaksbehandler:u,hentAvdelingensSaksbehandlere:v})=>{const R=[{key:l.SAKSBEHANDLER_SOK.name,data:u},{key:l.OPPRETT_NY_SAKSBEHANDLER.name,data:void 0}];return d.jsx(E,{data:R,requestApi:L,children:d.jsx(p,{avdelingensSaksbehandlere:c||[],hentAvdelingensSaksbehandlere:v,valgtAvdelingEnhet:"NAV Viken"})})},e=r.bind({});e.args={funnetSaksbehandler:s,hentAvdelingensSaksbehandlere:t("button-click")};const n=r.bind({});n.args={avdelingensSaksbehandlere:[s],funnetSaksbehandler:s,hentAvdelingensSaksbehandlere:t("button-click")};const a=r.bind({});a.args={avdelingensSaksbehandlere:[s],funnetSaksbehandler:void 0,hentAvdelingensSaksbehandlere:t("button-click")};var i,o,k;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(A=(S=n.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var g,b,m;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const x=["Default","AlleredeLagtTil","SaksbehandlerFinnesIkke"];export{n as AlleredeLagtTil,e as Default,a as SaksbehandlerFinnesIkke,x as __namedExportsOrder,q as default};
//# sourceMappingURL=LeggTilSaksbehandlerForm.stories-477f37ef.js.map
