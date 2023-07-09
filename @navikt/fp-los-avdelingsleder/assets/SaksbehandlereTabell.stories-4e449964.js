import{j as s}from"./jsx-runtime-5926aa06.js";import{k as A}from"./index.es-f19dba30.js";import{B as b,m as c}from"./nb_NO-34c6c3ba.js";import{S as p}from"./SaksbehandlereTabell-59a16675.js";import{a as S,r as v}from"./fplosRestApi-56e2d09a.js";import{M as g}from"./Provider-26ee741a.js";import"./index-ebeaab24.js";import"./index.es-24d105fb.js";import"./index-9c09ad76.js";import"./remove-2f21eb3e.js";import"./SletteSaksbehandlerModal-b33389a0.js";import"./advarsel-27b41fd8.js";import"./index-f50b85d6.js";g.setAppElement("body");const u=b(c),B={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:p,decorators:[u]},n=({saksbehandlere:m,hentAvdelingensSaksbehandlere:h})=>{const k=[{key:S.SLETT_SAKSBEHANDLER.name,data:void 0}];return s.jsx(A,{data:k,requestApi:v,children:s.jsx(p,{saksbehandlere:m||[],hentAvdelingensSaksbehandlere:h,valgtAvdelingEnhet:"NAV Viken"})})},e=n.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S53343",navn:"Steffen",avdelingsnavn:["NAV Oslo"]}],hentAvdelingensSaksbehandlere:()=>{}};const a=n.bind({});n.args={hentAvdelingensSaksbehandlere:()=>{}};var r,t,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const D=["Default","TomTabell"];export{e as Default,a as TomTabell,D as __namedExportsOrder,B as default};
//# sourceMappingURL=SaksbehandlereTabell.stories-4e449964.js.map
