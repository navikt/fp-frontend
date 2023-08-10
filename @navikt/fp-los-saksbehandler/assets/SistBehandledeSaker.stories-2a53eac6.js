import{j as s}from"./jsx-runtime-69eee039.js";import{R as u,k,r as h}from"./fplosSaksbehandlerRestApi-729f2e45.js";import{B as A,m as g}from"./nb_NO-8bb8d840.js";import{S as i}from"./SistBehandledeSaker-db4e0305.js";import"./index-7c191284.js";import"./index.es-ba84c291.js";import"./floating-ui.react-dom.esm-0ed0f36f.js";import"./index-ecbee218.js";import"./Heading-970a94fb.js";const E=A(g),x={title:"los/saksbehandler/saksstotte/SistBehandledeSaker",component:i,decorators:[E]},m=({behandledeOppgaver:c})=>{const l=[{key:u.BEHANDLEDE_OPPGAVER.name,data:c}];return s.jsx(k,{data:l,requestApi:h,children:s.jsx(i,{åpneFagsak:()=>{}})})},e=m.bind({});e.args={behandledeOppgaver:[{id:1,personnummer:"334342323",navn:"Espen Utvikler"}]};const a=m.bind({});var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  behandledeOppgaver
}) => {
  const data = [{
    key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name,
    data: behandledeOppgaver
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SistBehandledeSaker åpneFagsak={() => undefined} />
    </RestApiMock>;
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var d,o,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  behandledeOppgaver
}) => {
  const data = [{
    key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name,
    data: behandledeOppgaver
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SistBehandledeSaker åpneFagsak={() => undefined} />
    </RestApiMock>;
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const y=["Default","IngenBehandlinger"];export{e as Default,a as IngenBehandlinger,y as __namedExportsOrder,x as default};
//# sourceMappingURL=SistBehandledeSaker.stories-2a53eac6.js.map
