import{j as s}from"./jsx-runtime-86dfebf6.js";import{R as b}from"./intl-test-helper-4315b879.js";import{g as m,m as c}from"./nb_NO-7d7a9a16.js";import{S as h}from"./SaksbehandlereTabell-78c2f971.js";import{R as S,r as v}from"./fplosRestApi-e273a6f1.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-20592075.js";import"./index-6fd5a17b.js";import"./SletteSaksbehandlerModal-efba4ff5.js";const g=m(c),K={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:h,decorators:[g]},n=({saksbehandlere:k,hentAvdelingensSaksbehandlere:p})=>{const A=[{key:S.SLETT_SAKSBEHANDLER.name,data:void 0}];return s(b,{data:A,requestApi:v,children:s(h,{saksbehandlere:k||[],hentAvdelingensSaksbehandlere:p,valgtAvdelingEnhet:"NAV Viken"})})},e=n.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S53343",navn:"Steffen",avdelingsnavn:["NAV Oslo"]}],hentAvdelingensSaksbehandlere:()=>{}};const a=n.bind({});n.args={hentAvdelingensSaksbehandlere:()=>{}};var r,t,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  saksbehandlere,
  hentAvdelingensSaksbehandlere
}) => {
  const data = [{
    key: RestApiPathsKeys.SLETT_SAKSBEHANDLER.name,
    data: undefined
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereTabell saksbehandlere={saksbehandlere || []} hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var l,o,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
  saksbehandlere,
  hentAvdelingensSaksbehandlere
}) => {
  const data = [{
    key: RestApiPathsKeys.SLETT_SAKSBEHANDLER.name,
    data: undefined
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereTabell saksbehandlere={saksbehandlere || []} hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} valgtAvdelingEnhet="NAV Viken" />
    </RestApiMock>;
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const L=["Default","TomTabell"];export{e as Default,a as TomTabell,L as __namedExportsOrder,K as default};
//# sourceMappingURL=SaksbehandlereTabell.stories-a33b7c52.js.map
