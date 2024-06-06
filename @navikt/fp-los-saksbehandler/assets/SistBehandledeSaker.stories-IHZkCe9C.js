import{R as t}from"./index-DVXBtNgz.js";import{a as u,b as k,r as A}from"./fplosSaksbehandlerRestApi-B5-o2O8e.js";import"./useRestApiRunner-ChU66ucg.js";import{g,m as E}from"./nb_NO-OtGB-zeg.js";import{S as i}from"./SistBehandledeSaker-CSz-jg25.js";import"./tslib.es6-CMwweBXX.js";import"./index-Cbx7Fas8.js";const h=g(E),P={title:"los/saksbehandler/saksstotte/SistBehandledeSaker",component:i,decorators:[h]},c=({behandledeOppgaver:m})=>{const l=[{key:u.BEHANDLEDE_OPPGAVER.name,data:m}];return t.createElement(k,{data:l,requestApi:A},t.createElement(i,{åpneFagsak:()=>{}}))},e=c.bind({});e.args={behandledeOppgaver:[{id:1,personnummer:"334342323",navn:"Espen Utvikler"}]};const a=c.bind({});var s,n,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
