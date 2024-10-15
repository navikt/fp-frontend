import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{R as S}from"./RestApiMock-DfQwrlrl.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{m as v}from"./nb_NO-DhmRaBXY.js";import{g as u}from"./withIntl-RR40jGaC.js";import{S as p}from"./SaksbehandlereTabell-CbdINCzl.js";import{a as E,r as T}from"./fplosRestApi-1yojVYCb.js";import"./index-CfOt2XX2.js";import"./dayjs.min-BsYQKNhR.js";import"./SletteSaksbehandlerModal-DExzTYO_.js";import"./Table-ClAnTQq7.js";const R=u(v),x={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:p,decorators:[R]},s=({saksbehandlere:m,hentAvdelingensSaksbehandlere:c})=>{const g=[{key:E.SLETT_SAKSBEHANDLER.name,data:void 0}];return t.jsx(S,{data:g,requestApi:T,children:t.jsx(p,{saksbehandlere:m||[],hentAvdelingensSaksbehandlere:c,valgtAvdelingEnhet:"NAV Viken"})})},e=s.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",ansattAvdeling:"Oslo"},{brukerIdent:"S53343",navn:"Steffen",ansattAvdeling:"Oslo"},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}],hentAvdelingensSaksbehandlere:()=>{}};const a=s.bind({});s.args={hentAvdelingensSaksbehandlere:()=>{}};const n=s.bind({});n.args={saksbehandlere:[{brukerIdent:"X1111",navn:"Ukjent saksbehandler (X11111)",ansattAvdeling:null},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]};var r,d,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,o,k;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(k=(o=a.parameters)==null?void 0:o.docs)==null?void 0:k.source}}};var h,A,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(b=(A=n.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const j=["Default","TomTabell","MedSaksbehandlerUtenAnsattAvdeling"];export{e as Default,n as MedSaksbehandlerUtenAnsattAvdeling,a as TomTabell,j as __namedExportsOrder,x as default};
