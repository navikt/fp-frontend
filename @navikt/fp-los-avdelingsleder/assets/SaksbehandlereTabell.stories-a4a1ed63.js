import{j as s}from"./jsx-runtime-9c4ae004.js";import{k as A}from"./index.es-3a17af17.js";import{B as b,m as c}from"./nb_NO-05becbd9.js";import{S as h}from"./SaksbehandlereTabell-5343a613.js";import{R as S,r as v}from"./fplosRestApi-812c551e.js";import"./index-1b03fe98.js";import"./index.es-5c2532e8.js";import"./index-6fd5a17b.js";import"./SletteSaksbehandlerModal-cd86428c.js";import"./Provider-29253648.js";import"./Heading-d0e6bb7b.js";const g=b(c),_={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:h,decorators:[g]},a=({saksbehandlere:k,hentAvdelingensSaksbehandlere:p})=>{const m=[{key:S.SLETT_SAKSBEHANDLER.name,data:void 0}];return s.jsx(A,{data:m,requestApi:v,children:s.jsx(h,{saksbehandlere:k||[],hentAvdelingensSaksbehandlere:p,valgtAvdelingEnhet:"NAV Viken"})})},e=a.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S53343",navn:"Steffen",avdelingsnavn:["NAV Oslo"]}],hentAvdelingensSaksbehandlere:()=>{}};const n=a.bind({});a.args={hentAvdelingensSaksbehandlere:()=>{}};var r,t,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
//# sourceMappingURL=SaksbehandlereTabell.stories-a4a1ed63.js.map
