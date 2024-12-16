import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{m as g}from"./nb_NO-Du4pagSL.js";import{g as S}from"./withIntl-B_2QVpuP.js";import{R as u}from"./RestApiMock-CMGSvSy2.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Dz_KBbnA.js";import{a as E,r as T}from"./fplosRestApi-DIvKj8Ld.js";import{S as b}from"./SaksbehandlereTabell-SLwGEfSf.js";import"./index-C5xsJX-I.js";import"./index.es-B3phUJaJ.js";import"./Modal-CrXtQo6t.js";import"./dayjs.min-BsYQKNhR.js";import"./SletteSaksbehandlerModal-BZFPXHmV.js";import"./Table-Bc0CjSPI.js";const f=S(g),P={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:b,decorators:[f]},s=({saksbehandlere:m,hentAvdelingensSaksbehandlere:c})=>{const v=[{key:E.SLETT_SAKSBEHANDLER.name,data:void 0}];return t.jsx(u,{data:v,requestApi:T,children:t.jsx(b,{saksbehandlere:m||[],hentAvdelingensSaksbehandlere:c,valgtAvdelingEnhet:"Nav Vikafossen"})})},e=s.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",ansattAvdeling:"Oslo"},{brukerIdent:"S53343",navn:"Steffen",ansattAvdeling:"Oslo"},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}],hentAvdelingensSaksbehandlere:()=>{}};const a=s.bind({});s.args={hentAvdelingensSaksbehandlere:()=>{}};const n=s.bind({});n.args={saksbehandlere:[{brukerIdent:"X1111",navn:"Ukjent saksbehandler (X11111)",ansattAvdeling:null},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]};var r,d,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  saksbehandlere,
  hentAvdelingensSaksbehandlere
}) => {
  const data = [{
    key: RestApiPathsKeys.SLETT_SAKSBEHANDLER.name,
    data: undefined
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereTabell saksbehandlere={saksbehandlere || []} hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} valgtAvdelingEnhet="Nav Vikafossen" />
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
      <SaksbehandlereTabell saksbehandlere={saksbehandlere || []} hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} valgtAvdelingEnhet="Nav Vikafossen" />
    </RestApiMock>;
}`,...(k=(o=a.parameters)==null?void 0:o.docs)==null?void 0:k.source}}};var h,p,A;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
  saksbehandlere,
  hentAvdelingensSaksbehandlere
}) => {
  const data = [{
    key: RestApiPathsKeys.SLETT_SAKSBEHANDLER.name,
    data: undefined
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SaksbehandlereTabell saksbehandlere={saksbehandlere || []} hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} valgtAvdelingEnhet="Nav Vikafossen" />
    </RestApiMock>;
}`,...(A=(p=n.parameters)==null?void 0:p.docs)==null?void 0:A.source}}};const U=["Default","TomTabell","MedSaksbehandlerUtenAnsattAvdeling"];export{e as Default,n as MedSaksbehandlerUtenAnsattAvdeling,a as TomTabell,U as __namedExportsOrder,P as default};
