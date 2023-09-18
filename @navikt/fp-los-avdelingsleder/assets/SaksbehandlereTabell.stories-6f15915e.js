import{j as s}from"./jsx-runtime-9c4ae004.js";import{k as A}from"./index.es-02a6c24a.js";import{B as b,m as c}from"./nb_NO-14bcf780.js";import{S as h}from"./SaksbehandlereTabell-188ccb39.js";import{R as S,r as v}from"./fplosRestApi-beda4f04.js";import"./index-1b03fe98.js";import"./index.es-dcafba10.js";import"./index-6fd5a17b.js";import"./SletteSaksbehandlerModal-71bf5cf2.js";import"./Provider-74b80cf1.js";import"./Detail-19d51d7c.js";import"./Heading-54254f6d.js";const g=b(c),q={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:h,decorators:[g]},a=({saksbehandlere:k,hentAvdelingensSaksbehandlere:p})=>{const m=[{key:S.SLETT_SAKSBEHANDLER.name,data:void 0}];return s.jsx(A,{data:m,requestApi:v,children:s.jsx(h,{saksbehandlere:k||[],hentAvdelingensSaksbehandlere:p,valgtAvdelingEnhet:"NAV Viken"})})},e=a.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S53343",navn:"Steffen",avdelingsnavn:["NAV Oslo"]}],hentAvdelingensSaksbehandlere:()=>{}};const n=a.bind({});a.args={hentAvdelingensSaksbehandlere:()=>{}};var r,t,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const B=["Default","TomTabell"];export{e as Default,n as TomTabell,B as __namedExportsOrder,q as default};
//# sourceMappingURL=SaksbehandlereTabell.stories-6f15915e.js.map
