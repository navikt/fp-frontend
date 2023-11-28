import{j as s}from"./jsx-runtime-CUEGZZF9.js";import{a as u,b as k,r as A}from"./fplosSaksbehandlerRestApi-R1O2aTN7.js";import{g,m as h}from"./nb_NO-ey_aYqDl.js";import{S as i}from"./SistBehandledeSaker-DsoM_U3M.js";import"./index-DogsOklH.js";import"./useGlobalStateRestApiData-n3nAw5-C.js";import"./index-MroJ3egt.js";const E=g(h),P={title:"los/saksbehandler/saksstotte/SistBehandledeSaker",component:i,decorators:[E]},c=({behandledeOppgaver:m})=>{const l=[{key:u.BEHANDLEDE_OPPGAVER.name,data:m}];return s(k,{data:l,requestApi:A,children:s(i,{åpneFagsak:()=>{}})})},e=c.bind({});e.args={behandledeOppgaver:[{id:1,personnummer:"334342323",navn:"Espen Utvikler"}]};const a=c.bind({});var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const v=["Default","IngenBehandlinger"];export{e as Default,a as IngenBehandlinger,v as __namedExportsOrder,P as default};
