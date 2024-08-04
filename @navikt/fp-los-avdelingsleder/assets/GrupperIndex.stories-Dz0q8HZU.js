import{j as n}from"./dayjs.min-ZUODdiE-.js";import{g as p,m as i}from"./nb_NO-CbGGUtQP.js";import{R as l}from"./RestApiMock-fGu3uRG7.js";import"./index-uubelm5h.js";import"./useRestApiRunner-DIVzIFJm.js";import{a as v,r as m}from"./fplosRestApi-BJC_OYKQ.js";import{G as d}from"./GrupperIndex-nb-kQ7gH.js";import"./index-BdzLX9oW.js";import"./GrupperPanel-Cs33CegH.js";import"./index.es-DyB4hsRy.js";import"./useDebounce-Bz42ND3_.js";import"./Table-2uLyFRIz.js";const u=p(i),g=[{brukerIdent:"ident1",navn:"Anders Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident12",navn:"Espen Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident4",navn:"Olga Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident3",navn:"Klara Utvikler",avdelingsnavn:["NAV Oslo"]}],r=[{avdelingsnavn:["NAV Oslo"],brukerIdent:"ident1",navn:"Anders Utvikler"}],k={saksbehandlere:r,saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"gruppenavn",saksbehandlere:r}]},P={title:"los/avdelingsleder/grupper/GrupperIndex",component:d,decorators:[u]},c=()=>{const o=[{key:v.HENT_GRUPPER.name,data:k}];return n.jsx(l,{data:o,requestApi:m,children:n.jsx(d,{valgtAvdelingEnhet:"test",avdelingensSaksbehandlere:g})})},e=c.bind({});var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const data = [{
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: saksbehandlereOgSaksbehandlerGrupper
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <GrupperIndex valgtAvdelingEnhet="test" avdelingensSaksbehandlere={avdelingensSaksbehandlere} />
    </RestApiMock>;
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,P as default};
