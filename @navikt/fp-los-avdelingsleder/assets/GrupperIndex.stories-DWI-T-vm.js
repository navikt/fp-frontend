import{R as n}from"./index-DVXBtNgz.js";import{g as p,m as i}from"./nb_NO-Cx50JONv.js";import{R as l}from"./RestApiMock-D7GvAGON.js";import"./useRestApiRunner-r8nm61Jn.js";import{a as m,r as v}from"./fplosRestApi-DXPSIiTb.js";import{G as d}from"./GrupperIndex-BnYCskcb.js";import"./index-Cbx7Fas8.js";import"./tslib.es6-CMwweBXX.js";import"./GrupperPanel-RA07XgbH.js";import"./index.es-BbgVYiA4.js";import"./useDebounce-Cv72iHWE.js";import"./Table-fM8G9n-f.js";const u=p(i),c=[{brukerIdent:"ident1",navn:"Anders Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident12",navn:"Espen Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident4",navn:"Olga Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident3",navn:"Klara Utvikler",avdelingsnavn:["NAV Oslo"]}],r=[{avdelingsnavn:["NAV Oslo"],brukerIdent:"ident1",navn:"Anders Utvikler"}],g={saksbehandlere:r,saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"gruppenavn",saksbehandlere:r}]},P={title:"los/avdelingsleder/grupper/GrupperIndex",component:d,decorators:[u]},k=()=>{const o=[{key:m.HENT_GRUPPER.name,data:g}];return n.createElement(l,{data:o,requestApi:v},n.createElement(d,{valgtAvdelingEnhet:"test",avdelingensSaksbehandlere:c}))},e=k.bind({});var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const data = [{
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: saksbehandlereOgSaksbehandlerGrupper
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <GrupperIndex valgtAvdelingEnhet="test" avdelingensSaksbehandlere={avdelingensSaksbehandlere} />
    </RestApiMock>;
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,P as default};
