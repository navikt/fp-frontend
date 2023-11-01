import{j as s}from"./jsx-runtime-86dfebf6.js";import{R as u,a as k,r as A}from"./fplosSaksbehandlerRestApi-c8d31a2a.js";import{g,m as h}from"./nb_NO-bdcde2eb.js";import{S as i}from"./SistBehandledeSaker-4d46f531.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-f709a7eb.js";import"./index-6fd5a17b.js";import"./Heading-bf5304e2.js";const E=g(h),v={title:"los/saksbehandler/saksstotte/SistBehandledeSaker",component:i,decorators:[E]},c=({behandledeOppgaver:m})=>{const l=[{key:u.BEHANDLEDE_OPPGAVER.name,data:m}];return s(k,{data:l,requestApi:A,children:s(i,{åpneFagsak:()=>{}})})},e=c.bind({});e.args={behandledeOppgaver:[{id:1,personnummer:"334342323",navn:"Espen Utvikler"}]};const a=c.bind({});var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  behandledeOppgaver
}) => {
  const data = [{
    key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name,
    data: behandledeOppgaver
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SistBehandledeSaker åpneFagsak={() => undefined} />
    </RestApiMock>;
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var o,d,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`({
  behandledeOppgaver
}) => {
  const data = [{
    key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name,
    data: behandledeOppgaver
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SistBehandledeSaker åpneFagsak={() => undefined} />
    </RestApiMock>;
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const y=["Default","IngenBehandlinger"];export{e as Default,a as IngenBehandlinger,y as __namedExportsOrder,v as default};
//# sourceMappingURL=SistBehandledeSaker.stories-972bf3c2.js.map
