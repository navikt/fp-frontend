import{R as s}from"./index-DogsOklH.js";import{R as b}from"./RestApiMock-8FOaa7K1.js";import"./useRestApiRunner-t59neJBf.js";import{g as m,m as c}from"./nb_NO-H9rL7jWp.js";import{S as h}from"./SaksbehandlereTabell-VoKSLk9w.js";import{a as S,r as v}from"./fplosRestApi-7cfjsQHL.js";import"./index-MroJ3egt.js";import"./SletteSaksbehandlerModal-NMr9ZlKB.js";const g=m(c),D={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:h,decorators:[g]},n=({saksbehandlere:k,hentAvdelingensSaksbehandlere:A})=>{const p=[{key:S.SLETT_SAKSBEHANDLER.name,data:void 0}];return s.createElement(b,{data:p,requestApi:v},s.createElement(h,{saksbehandlere:k||[],hentAvdelingensSaksbehandlere:A,valgtAvdelingEnhet:"NAV Viken"}))},e=n.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S53343",navn:"Steffen",avdelingsnavn:["NAV Oslo"]}],hentAvdelingensSaksbehandlere:()=>{}};const a=n.bind({});n.args={hentAvdelingensSaksbehandlere:()=>{}};var t,r,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var l,o,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const K=["Default","TomTabell"];export{e as Default,a as TomTabell,K as __namedExportsOrder,D as default};
