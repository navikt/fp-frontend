import{j as t}from"./dayjs.min-ZUODdiE-.js";import{R as S}from"./RestApiMock-bbm7V34S.js";import"./index-uubelm5h.js";import"./useRestApiRunner-DIVzIFJm.js";import{g as v,m as u}from"./nb_NO-ffV-qhYU.js";import{S as p}from"./SaksbehandlereTabell-Chp7n0n5.js";import{a as E,r as T}from"./fplosRestApi-CXjbKy4z.js";import"./index-BdzLX9oW.js";import"./SletteSaksbehandlerModal-DbozRU6r.js";import"./Table-BNax95ki.js";const R=v(u),I={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:p,decorators:[R]},s=({saksbehandlere:m,hentAvdelingensSaksbehandlere:c})=>{const g=[{key:E.SLETT_SAKSBEHANDLER.name,data:void 0}];return t.jsx(S,{data:g,requestApi:T,children:t.jsx(p,{saksbehandlere:m||[],hentAvdelingensSaksbehandlere:c,valgtAvdelingEnhet:"NAV Viken"})})},e=s.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",ansattAvdeling:"Oslo"},{brukerIdent:"S53343",navn:"Steffen",ansattAvdeling:"Oslo"},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}],hentAvdelingensSaksbehandlere:()=>{}};const a=s.bind({});s.args={hentAvdelingensSaksbehandlere:()=>{}};const n=s.bind({});n.args={saksbehandlere:[{brukerIdent:"X1111",navn:"Ukjent saksbehandler (X11111)",ansattAvdeling:null},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]};var r,d,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(b=(A=n.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const _=["Default","TomTabell","MedSaksbehandlerUtenAnsattAvdeling"];export{e as Default,n as MedSaksbehandlerUtenAnsattAvdeling,a as TomTabell,_ as __namedExportsOrder,I as default};
