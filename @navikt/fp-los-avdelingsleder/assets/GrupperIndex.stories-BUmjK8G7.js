import{R as n}from"./index-BBkUAzwr.js";import{g as p,m as i}from"./nb_NO-Dpo8zdWW.js";import{R as l}from"./RestApiMock-Dpt-GNNc.js";import"./useRestApiRunner-Bj3tzHZ6.js";import{a as v,r as m}from"./fplosRestApi-B7o859yn.js";import{G as d}from"./GrupperIndex-5WHT0sza.js";import"./index-PqR-_bA4.js";import"./GrupperPanel-DTEpTS5x.js";import"./index.es-4UZ3d1zR.js";import"./useDebounce-Cgfg4MPI.js";import"./Table-Bw9lLzTB.js";const u=p(i),c=[{brukerIdent:"ident1",navn:"Anders Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident12",navn:"Espen Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident4",navn:"Olga Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident3",navn:"Klara Utvikler",avdelingsnavn:["NAV Oslo"]}],r=[{avdelingsnavn:["NAV Oslo"],brukerIdent:"ident1",navn:"Anders Utvikler"}],g={saksbehandlere:r,saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"gruppenavn",saksbehandlere:r}]},x={title:"los/avdelingsleder/grupper/GrupperIndex",component:d,decorators:[u]},k=()=>{const o=[{key:v.HENT_GRUPPER.name,data:g}];return n.createElement(l,{data:o,requestApi:m},n.createElement(d,{valgtAvdelingEnhet:"test",avdelingensSaksbehandlere:c}))},e=k.bind({});var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const data = [{
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: saksbehandlereOgSaksbehandlerGrupper
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <GrupperIndex valgtAvdelingEnhet="test" avdelingensSaksbehandlere={avdelingensSaksbehandlere} />
    </RestApiMock>;
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,x as default};
