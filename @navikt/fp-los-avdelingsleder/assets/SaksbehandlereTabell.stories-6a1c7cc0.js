import{j as s}from"./jsx-runtime-9c4ae004.js";import{k as A}from"./index.es-bf1c6c02.js";import{B as b,m as c}from"./nb_NO-7fc4d3fe.js";import{S as p}from"./SaksbehandlereTabell-5c4855d4.js";import{R as S,r as v}from"./fplosRestApi-beda4f04.js";import"./index-1b03fe98.js";import"./index.es-dcafba10.js";import"./index-6fd5a17b.js";import"./remove-2f21eb3e.js";import"./SletteSaksbehandlerModal-af2f488f.js";import"./Provider-862e7645.js";import"./Detail-95eaaf87.js";import"./Heading-87cc8cdf.js";const g=b(c),B={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:p,decorators:[g]},a=({saksbehandlere:h,hentAvdelingensSaksbehandlere:k})=>{const m=[{key:S.SLETT_SAKSBEHANDLER.name,data:void 0}];return s.jsx(A,{data:m,requestApi:v,children:s.jsx(p,{saksbehandlere:h||[],hentAvdelingensSaksbehandlere:k,valgtAvdelingEnhet:"NAV Viken"})})},e=a.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S53343",navn:"Steffen",avdelingsnavn:["NAV Oslo"]}],hentAvdelingensSaksbehandlere:()=>{}};const n=a.bind({});a.args={hentAvdelingensSaksbehandlere:()=>{}};var r,t,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var l,i,o;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const D=["Default","TomTabell"];export{e as Default,n as TomTabell,D as __namedExportsOrder,B as default};
//# sourceMappingURL=SaksbehandlereTabell.stories-6a1c7cc0.js.map
