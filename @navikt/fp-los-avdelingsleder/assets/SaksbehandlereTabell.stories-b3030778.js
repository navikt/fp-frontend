import{j as s}from"./jsx-runtime-69eee039.js";import{k as A}from"./index.es-0d3529a2.js";import{B as b,m as c}from"./nb_NO-d9a4e020.js";import{S as p}from"./SaksbehandlereTabell-e34386b3.js";import{R as S,r as v}from"./fplosRestApi-06437043.js";import{M as g}from"./Provider-bfaf0040.js";import"./index-7c191284.js";import"./index.es-6dfc8135.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";import"./remove-2f21eb3e.js";import"./SletteSaksbehandlerModal-4ad5fa6a.js";import"./advarsel-27b41fd8.js";import"./index-b3a39e30.js";g.setAppElement("body");const u=b(c),D={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:p,decorators:[u]},n=({saksbehandlere:m,hentAvdelingensSaksbehandlere:h})=>{const k=[{key:S.SLETT_SAKSBEHANDLER.name,data:void 0}];return s.jsx(A,{data:k,requestApi:v,children:s.jsx(p,{saksbehandlere:m||[],hentAvdelingensSaksbehandlere:h,valgtAvdelingEnhet:"NAV Viken"})})},e=n.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S53343",navn:"Steffen",avdelingsnavn:["NAV Oslo"]}],hentAvdelingensSaksbehandlere:()=>{}};const a=n.bind({});n.args={hentAvdelingensSaksbehandlere:()=>{}};var r,t,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const j=["Default","TomTabell"];export{e as Default,a as TomTabell,j as __namedExportsOrder,D as default};
//# sourceMappingURL=SaksbehandlereTabell.stories-b3030778.js.map
