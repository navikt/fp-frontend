import{j as s}from"./jsx-runtime-9c4ae004.js";import{R as u,k,r as h}from"./fplosSaksbehandlerRestApi-a3fbd65d.js";import{B as A,m as g}from"./nb_NO-a1d72823.js";import{S as i}from"./SistBehandledeSaker-8f7d0131.js";import"./index-1b03fe98.js";import"./index.es-3a2d92d7.js";import"./index-6fd5a17b.js";import"./Heading-b82b5751.js";const E=A(g),D={title:"los/saksbehandler/saksstotte/SistBehandledeSaker",component:i,decorators:[E]},m=({behandledeOppgaver:c})=>{const l=[{key:u.BEHANDLEDE_OPPGAVER.name,data:c}];return s.jsx(k,{data:l,requestApi:h,children:s.jsx(i,{åpneFagsak:()=>{}})})},e=m.bind({});e.args={behandledeOppgaver:[{id:1,personnummer:"334342323",navn:"Espen Utvikler"}]};const a=m.bind({});var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  behandledeOppgaver
}) => {
  const data = [{
    key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name,
    data: behandledeOppgaver
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SistBehandledeSaker åpneFagsak={() => undefined} />
    </RestApiMock>;
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var d,o,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  behandledeOppgaver
}) => {
  const data = [{
    key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name,
    data: behandledeOppgaver
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SistBehandledeSaker åpneFagsak={() => undefined} />
    </RestApiMock>;
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const x=["Default","IngenBehandlinger"];export{e as Default,a as IngenBehandlinger,x as __namedExportsOrder,D as default};
//# sourceMappingURL=SistBehandledeSaker.stories-10913f66.js.map
