import{j as s}from"./dayjs.min-ZUODdiE-.js";import{a as u,b as k,r as A}from"./fplosSaksbehandlerRestApi-BmCgkfCR.js";import"./index-uubelm5h.js";import"./useRestApiRunner-CYj01yVu.js";import{g,m as h}from"./nb_NO-AMOPF0IO.js";import{S as i}from"./SistBehandledeSaker-DKns60Fd.js";import"./index-BdzLX9oW.js";const E=g(h),P={title:"los/saksbehandler/saksstotte/SistBehandledeSaker",component:i,decorators:[E]},c=({behandledeOppgaver:m})=>{const l=[{key:u.BEHANDLEDE_OPPGAVER.name,data:m}];return s.jsx(k,{data:l,requestApi:A,children:s.jsx(i,{åpneFagsak:()=>{}})})},e=c.bind({});e.args={behandledeOppgaver:[{id:1,personnummer:"334342323",navn:"Espen Utvikler"}]};const a=c.bind({});var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
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
