import{j as s}from"./dayjs.min-DKYhEbg2.js";import{R as b}from"./RestApiMock-DKZL9Vcn.js";import"./index-BBkUAzwr.js";import"./useRestApiRunner-DAdfBy_z.js";import{g as m,m as c}from"./nb_NO-CRq88Yak.js";import{S as h}from"./SaksbehandlereTabell-BG8v91Xm.js";import{a as S,r as v}from"./fplosRestApi-Dw3FUmgN.js";import"./index-BfZ0jBbx.js";import"./SletteSaksbehandlerModal-4qmtKcUb.js";const g=m(c),D={title:"los/avdelingsleder/saksbehandlere/SaksbehandlereTabell",component:h,decorators:[g]},n=({saksbehandlere:k,hentAvdelingensSaksbehandlere:p})=>{const A=[{key:S.SLETT_SAKSBEHANDLER.name,data:void 0}];return s.jsx(b,{data:A,requestApi:v,children:s.jsx(h,{saksbehandlere:k||[],hentAvdelingensSaksbehandlere:p,valgtAvdelingEnhet:"NAV Viken"})})},e=n.bind({});e.args={saksbehandlere:[{brukerIdent:"R12122",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]},{brukerIdent:"S53343",navn:"Steffen",avdelingsnavn:["NAV Oslo"]}],hentAvdelingensSaksbehandlere:()=>{}};const a=n.bind({});n.args={hentAvdelingensSaksbehandlere:()=>{}};var r,t,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const K=["Default","TomTabell"];export{e as Default,a as TomTabell,K as __namedExportsOrder,D as default};
