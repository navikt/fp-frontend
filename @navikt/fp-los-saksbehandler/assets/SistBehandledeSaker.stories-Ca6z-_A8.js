import{R as t}from"./index-BBkUAzwr.js";import{a as u,b as k,r as A}from"./fplosSaksbehandlerRestApi-yC5FIIxZ.js";import"./useRestApiRunner-CnLmgk-1.js";import{g,m as E}from"./nb_NO-B_pArjwH.js";import{S as i}from"./SistBehandledeSaker-CdCfQJGn.js";import"./index-PqR-_bA4.js";const h=g(E),O={title:"los/saksbehandler/saksstotte/SistBehandledeSaker",component:i,decorators:[h]},c=({behandledeOppgaver:m})=>{const l=[{key:u.BEHANDLEDE_OPPGAVER.name,data:m}];return t.createElement(k,{data:l,requestApi:A},t.createElement(i,{åpneFagsak:()=>{}}))},e=c.bind({});e.args={behandledeOppgaver:[{id:1,personnummer:"334342323",navn:"Espen Utvikler"}]};const a=c.bind({});var s,n,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const P=["Default","IngenBehandlinger"];export{e as Default,a as IngenBehandlinger,P as __namedExportsOrder,O as default};
