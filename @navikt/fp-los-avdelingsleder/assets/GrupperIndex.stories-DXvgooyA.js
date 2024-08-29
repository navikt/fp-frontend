import{j as n}from"./dayjs.min-ZUODdiE-.js";import{g as l,m as i}from"./nb_NO-ffV-qhYU.js";import{R as o}from"./RestApiMock-bbm7V34S.js";import"./index-uubelm5h.js";import"./useRestApiRunner-DIVzIFJm.js";import{a as u,r as m}from"./fplosRestApi-CXjbKy4z.js";import{G as d}from"./GrupperIndex-Dm5zJ8Lg.js";import"./index-BdzLX9oW.js";import"./GrupperPanel-BHiIx1Go.js";import"./index.es-BZ8gbWlA.js";import"./useDebounce-BKWmQmCi.js";import"./Table-BNax95ki.js";const v=l(i),g=[{brukerIdent:"ident1",navn:"Anders Utvikler",ansattAvdeling:null},{brukerIdent:"ident12",navn:"Espen Utvikler",ansattAvdeling:null},{brukerIdent:"ident4",navn:"Olga Utvikler",ansattAvdeling:null},{brukerIdent:"ident3",navn:"Klara Utvikler",ansattAvdeling:null}],r=[{brukerIdent:"ident1",navn:"Anders Utvikler",ansattAvdeling:null}],k={saksbehandlere:r,saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"gruppenavn",saksbehandlere:r}]},_={title:"los/avdelingsleder/grupper/GrupperIndex",component:d,decorators:[v]},c=()=>{const p=[{key:u.HENT_GRUPPER.name,data:k}];return n.jsx(o,{data:p,requestApi:m,children:n.jsx(d,{valgtAvdelingEnhet:"test",avdelingensSaksbehandlere:g})})},e=c.bind({});var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const data = [{
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: saksbehandlereOgSaksbehandlerGrupper
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <GrupperIndex valgtAvdelingEnhet="test" avdelingensSaksbehandlere={avdelingensSaksbehandlere} />
    </RestApiMock>;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,_ as default};
