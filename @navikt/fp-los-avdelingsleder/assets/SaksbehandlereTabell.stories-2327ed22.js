import{j as s}from"./jsx-runtime-9c4ae004.js";import{k as A}from"./index.es-27184253.js";import{B as b,m as c}from"./nb_NO-ba6bd368.js";import{S as h}from"./SaksbehandlereTabell-767ad43c.js";import{R as S,r as v}from"./fplosRestApi-afc43ca3.js";import"./index-1b03fe98.js";import"./index.es-5c2532e8.js";import"./index-6fd5a17b.js";import"./SletteSaksbehandlerModal-a5aecbe8.js";import"./Provider-f8ab33a3.js";import"./Heading-981b0be5.js";const g=b(c),_={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:h,decorators:[g]},a=({saksbehandlere:k,hentAvdelingensSaksbehandlere:p})=>{const m=[{key:S.SLETT_SAKSBEHANDLER.name,data:void 0}];return s.jsx(A,{data:m,requestApi:v,children:s.jsx(h,{saksbehandlere:k||[],hentAvdelingensSaksbehandlere:p,valgtAvdelingEnhet:"NAV Viken"})})},e=a.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S53343",navn:"Steffen",avdelingsnavn:["NAV Oslo"]}],hentAvdelingensSaksbehandlere:()=>{}};const n=a.bind({});a.args={hentAvdelingensSaksbehandlere:()=>{}};var r,t,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const q=["Default","TomTabell"];export{e as Default,n as TomTabell,q as __namedExportsOrder,_ as default};
//# sourceMappingURL=SaksbehandlereTabell.stories-2327ed22.js.map
