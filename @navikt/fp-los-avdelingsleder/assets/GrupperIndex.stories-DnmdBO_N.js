import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{m as i}from"./nb_NO-DfdIw2AA.js";import{g as o}from"./withIntl-BBed-5Ab.js";import{R as l}from"./RestApiMock-diGW-Wut.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{a as u,r as m}from"./fplosRestApi-1yojVYCb.js";import{G as p}from"./GrupperIndex-C0xDchcB.js";import"./index-C4_kIme7.js";import"./dayjs.min-BsYQKNhR.js";import"./GrupperPanel-4PMjDmqs.js";import"./index.es-CaspzMY6.js";import"./useDebounce-B9XN_M0r.js";import"./Table-CJKrOZvX.js";const v=o(i),g=[{brukerIdent:"ident1",navn:"Anders Utvikler",ansattAvdeling:null},{brukerIdent:"ident12",navn:"Espen Utvikler",ansattAvdeling:null},{brukerIdent:"ident4",navn:"Olga Utvikler",ansattAvdeling:null},{brukerIdent:"ident3",navn:"Klara Utvikler",ansattAvdeling:null}],t=[{brukerIdent:"ident1",navn:"Anders Utvikler",ansattAvdeling:null}],k={saksbehandlere:t,saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"gruppenavn",saksbehandlere:t}]},y={title:"los/avdelingsleder/grupper/GrupperIndex",component:p,decorators:[v]},c=()=>{const d=[{key:u.HENT_GRUPPER.name,data:k}];return r.jsx(l,{data:d,requestApi:m,children:r.jsx(p,{valgtAvdelingEnhet:"test",avdelingensSaksbehandlere:g})})},e=c.bind({});var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const data = [{
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: saksbehandlereOgSaksbehandlerGrupper
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <GrupperIndex valgtAvdelingEnhet="test" avdelingensSaksbehandlere={avdelingensSaksbehandlere} />
    </RestApiMock>;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,y as default};
