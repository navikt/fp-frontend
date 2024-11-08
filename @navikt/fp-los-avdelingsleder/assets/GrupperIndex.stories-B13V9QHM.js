import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{m as i}from"./nb_NO-C3qr7Zu2.js";import{g as o}from"./withIntl-hgZvmSKC.js";import{R as l}from"./RestApiMock-C5ot3P9D.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{a as u,r as m}from"./fplosRestApi-1yojVYCb.js";import{G as p}from"./GrupperIndex-DnzqOxHp.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./GrupperPanel-ChbNQoTG.js";import"./index.es-B356lO2T.js";import"./useDebounce-sDbwM9lX.js";import"./Table-B813JqKx.js";const v=o(i),g=[{brukerIdent:"ident1",navn:"Anders Utvikler",ansattAvdeling:null},{brukerIdent:"ident12",navn:"Espen Utvikler",ansattAvdeling:null},{brukerIdent:"ident4",navn:"Olga Utvikler",ansattAvdeling:null},{brukerIdent:"ident3",navn:"Klara Utvikler",ansattAvdeling:null}],t=[{brukerIdent:"ident1",navn:"Anders Utvikler",ansattAvdeling:null}],k={saksbehandlere:t,saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"gruppenavn",saksbehandlere:t}]},y={title:"los/avdelingsleder/grupper/GrupperIndex",component:p,decorators:[v]},c=()=>{const d=[{key:u.HENT_GRUPPER.name,data:k}];return r.jsx(l,{data:d,requestApi:m,children:r.jsx(p,{valgtAvdelingEnhet:"test",avdelingensSaksbehandlere:g})})},e=c.bind({});var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const data = [{
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: saksbehandlereOgSaksbehandlerGrupper
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <GrupperIndex valgtAvdelingEnhet="test" avdelingensSaksbehandlere={avdelingensSaksbehandlere} />
    </RestApiMock>;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,y as default};
