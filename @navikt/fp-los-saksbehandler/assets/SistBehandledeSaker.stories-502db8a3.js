import{j as s}from"./jsx-runtime-9c4ae004.js";import{R as u,k,r as h}from"./fplosSaksbehandlerRestApi-31142b17.js";import{B as A,m as g}from"./nb_NO-158985cd.js";import{S as i}from"./SistBehandledeSaker-66170c3b.js";import"./index-1b03fe98.js";import"./index.es-06c0167b.js";import"./index-6fd5a17b.js";import"./Heading-b0d06053.js";const E=A(g),D={title:"los/saksbehandler/saksstotte/SistBehandledeSaker",component:i,decorators:[E]},m=({behandledeOppgaver:c})=>{const l=[{key:u.BEHANDLEDE_OPPGAVER.name,data:c}];return s.jsx(k,{data:l,requestApi:h,children:s.jsx(i,{åpneFagsak:()=>{}})})},e=m.bind({});e.args={behandledeOppgaver:[{id:1,personnummer:"334342323",navn:"Espen Utvikler"}]};const a=m.bind({});var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
//# sourceMappingURL=SistBehandledeSaker.stories-502db8a3.js.map
