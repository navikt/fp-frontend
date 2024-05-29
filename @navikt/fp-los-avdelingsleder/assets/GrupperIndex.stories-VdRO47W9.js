import{R as n}from"./index-DogsOklH.js";import{g as p,m as i}from"./nb_NO-8vkv4Fjx.js";import{R as l}from"./RestApiMock-PoHaMzn1.js";import"./useRestApiRunner-t59neJBf.js";import{a as v,r as m}from"./fplosRestApi-hxLEfccG.js";import{G as d}from"./GrupperIndex-q2bdExo_.js";import"./index-MroJ3egt.js";import"./GrupperPanel-k3BA54DO.js";import"./index.es-lhDBPqjE.js";import"./useDebounce-7npZRRYW.js";import"./Table-jpuw6DY0.js";const u=p(i),c=[{brukerIdent:"ident1",navn:"Anders Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident12",navn:"Espen Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident4",navn:"Olga Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident3",navn:"Klara Utvikler",avdelingsnavn:["NAV Oslo"]}],r=[{avdelingsnavn:["NAV Oslo"],brukerIdent:"ident1",navn:"Anders Utvikler"}],g={saksbehandlere:r,saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"gruppenavn",saksbehandlere:r}]},x={title:"los/avdelingsleder/grupper/GrupperIndex",component:d,decorators:[u]},k=()=>{const o=[{key:v.HENT_GRUPPER.name,data:g}];return n.createElement(l,{data:o,requestApi:m},n.createElement(d,{valgtAvdelingEnhet:"test",avdelingensSaksbehandlere:c}))},e=k.bind({});var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const data = [{
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: saksbehandlereOgSaksbehandlerGrupper
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <GrupperIndex valgtAvdelingEnhet="test" avdelingensSaksbehandlere={avdelingensSaksbehandlere} />
    </RestApiMock>;
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,x as default};
