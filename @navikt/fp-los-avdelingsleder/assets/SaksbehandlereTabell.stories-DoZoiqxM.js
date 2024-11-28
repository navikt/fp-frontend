import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{m as g}from"./nb_NO-Zqge3fS6.js";import{g as S}from"./withIntl-Bv-P8ZIY.js";import{R as u}from"./RestApiMock-DW0j1xpC.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Co55yBK5.js";import{a as E,r as T}from"./fplosRestApi--K68MEhy.js";import{S as p}from"./SaksbehandlereTabell-CslDALQg.js";import"./index-C5xsJX-I.js";import"./Modal-nRd4VDWO.js";import"./dayjs.min-BsYQKNhR.js";import"./SletteSaksbehandlerModal-DX8AxsKq.js";import"./Table-DoUdIv1o.js";const f=S(g),B={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:p,decorators:[f]},s=({saksbehandlere:m,hentAvdelingensSaksbehandlere:c})=>{const v=[{key:E.SLETT_SAKSBEHANDLER.name,data:void 0}];return t.jsx(u,{data:v,requestApi:T,children:t.jsx(p,{saksbehandlere:m||[],hentAvdelingensSaksbehandlere:c,valgtAvdelingEnhet:"Nav Vikafossen"})})},e=s.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",ansattAvdeling:"Oslo"},{brukerIdent:"S53343",navn:"Steffen",ansattAvdeling:"Oslo"},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}],hentAvdelingensSaksbehandlere:()=>{}};const a=s.bind({});s.args={hentAvdelingensSaksbehandlere:()=>{}};const n=s.bind({});n.args={saksbehandlere:[{brukerIdent:"X1111",navn:"Ukjent saksbehandler (X11111)",ansattAvdeling:null},{brukerIdent:"H11111",navn:"Hildegunn",ansattAvdeling:"Drammen"}]};var r,d,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(k=(o=a.parameters)==null?void 0:o.docs)==null?void 0:k.source}}};var h,A,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(b=(A=n.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const P=["Default","TomTabell","MedSaksbehandlerUtenAnsattAvdeling"];export{e as Default,n as MedSaksbehandlerUtenAnsattAvdeling,a as TomTabell,P as __namedExportsOrder,B as default};
