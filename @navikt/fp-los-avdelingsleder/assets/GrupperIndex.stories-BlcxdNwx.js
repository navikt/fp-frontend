import{j as n}from"./dayjs.min-DKYhEbg2.js";import{g as p,m as i}from"./nb_NO-CRq88Yak.js";import{R as l}from"./RestApiMock-DKZL9Vcn.js";import"./index-BBkUAzwr.js";import"./useRestApiRunner-DAdfBy_z.js";import{a as v,r as m}from"./fplosRestApi-Dw3FUmgN.js";import{G as d}from"./GrupperIndex-BroxeA7s.js";import"./index-BfZ0jBbx.js";import"./GrupperPanel-Cpv2FLkk.js";import"./index.es-CdOhyqnT.js";import"./useDebounce-DHYpG2Mf.js";import"./Table-B9QWrIP5.js";const u=p(i),g=[{brukerIdent:"ident1",navn:"Anders Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident12",navn:"Espen Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident4",navn:"Olga Utvikler",avdelingsnavn:["NAV Oslo"]},{brukerIdent:"ident3",navn:"Klara Utvikler",avdelingsnavn:["NAV Oslo"]}],r=[{avdelingsnavn:["NAV Oslo"],brukerIdent:"ident1",navn:"Anders Utvikler"}],k={saksbehandlere:r,saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"gruppenavn",saksbehandlere:r}]},P={title:"los/avdelingsleder/grupper/GrupperIndex",component:d,decorators:[u]},c=()=>{const o=[{key:v.HENT_GRUPPER.name,data:k}];return n.jsx(l,{data:o,requestApi:m,children:n.jsx(d,{valgtAvdelingEnhet:"test",avdelingensSaksbehandlere:g})})},e=c.bind({});var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const data = [{
    key: RestApiPathsKeys.HENT_GRUPPER.name,
    data: saksbehandlereOgSaksbehandlerGrupper
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <GrupperIndex valgtAvdelingEnhet="test" avdelingensSaksbehandlere={avdelingensSaksbehandlere} />
    </RestApiMock>;
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,P as default};
