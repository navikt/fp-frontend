import{R as t}from"./index-BBkUAzwr.js";import{a as u,b as k,r as A}from"./fplosSaksbehandlerRestApi-A_nzAW8M.js";import"./useRestApiRunner-8WsurDIp.js";import{g,m as h}from"./nb_NO-Bv_fr8-1.js";import{S as i}from"./SistBehandledeSaker-wfsmbn6k.js";import"./dayjs.min-DXWWvErk.js";import"./index-BfZ0jBbx.js";const E=g(h),P={title:"los/saksbehandler/saksstotte/SistBehandledeSaker",component:i,decorators:[E]},c=({behandledeOppgaver:m})=>{const l=[{key:u.BEHANDLEDE_OPPGAVER.name,data:m}];return t.createElement(k,{data:l,requestApi:A},t.createElement(i,{åpneFagsak:()=>{}}))},e=c.bind({});e.args={behandledeOppgaver:[{id:1,personnummer:"334342323",navn:"Espen Utvikler"}]};const a=c.bind({});var s,n,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Default","IngenBehandlinger"];export{e as Default,a as IngenBehandlinger,v as __namedExportsOrder,P as default};
