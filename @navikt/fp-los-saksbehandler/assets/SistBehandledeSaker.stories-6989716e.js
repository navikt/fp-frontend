import{j as s}from"./jsx-runtime-5926aa06.js";import{R as u,k,r as h}from"./fplosSaksbehandlerRestApi-325d6556.js";import{B as A,m as g}from"./nb_NO-80ad4d83.js";import{S as i}from"./SistBehandledeSaker-420df92e.js";import"./index-ebeaab24.js";import"./index.es-d4f46e89.js";import"./index-9c09ad76.js";import"./Heading-5fc0994e.js";const E=A(g),D={title:"los/saksbehandler/saksstotte/SistBehandledeSaker",component:i,decorators:[E]},m=({behandledeOppgaver:c})=>{const l=[{key:u.BEHANDLEDE_OPPGAVER.name,data:c}];return s.jsx(k,{data:l,requestApi:h,children:s.jsx(i,{åpneFagsak:()=>{}})})},e=m.bind({});e.args={behandledeOppgaver:[{id:1,personnummer:"334342323",navn:"Espen Utvikler"}]};const a=m.bind({});var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
//# sourceMappingURL=SistBehandledeSaker.stories-6989716e.js.map
