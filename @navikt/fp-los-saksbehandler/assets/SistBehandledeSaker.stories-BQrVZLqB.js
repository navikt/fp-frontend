import{j as s}from"./jsx-runtime-QvZ8i92b.js";import{a as u,b as k,r as A}from"./fplosSaksbehandlerRestApi-tcz63uSM.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{m as g}from"./nb_NO-BxfL2bzu.js";import{g as h}from"./withIntl-z0syI_c3.js";import{S as i}from"./SistBehandledeSaker-B-9NWCc7.js";import"./dayjs.min-BsYQKNhR.js";import"./index-C5xsJX-I.js";const E=h(g),x={title:"los/saksbehandler/saksstotte/SistBehandledeSaker",component:i,decorators:[E]},m=({behandledeOppgaver:c})=>{const l=[{key:u.BEHANDLEDE_OPPGAVER.name,data:c}];return s.jsx(k,{data:l,requestApi:A,children:s.jsx(i,{åpneFagsak:()=>{}})})},e=m.bind({});e.args={behandledeOppgaver:[{id:1,personnummer:"334342323",navn:"Espen Utvikler"}]};const a=m.bind({});var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  behandledeOppgaver
}) => {
  const data = [{
    key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name,
    data: behandledeOppgaver
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SistBehandledeSaker åpneFagsak={() => undefined} />
    </RestApiMock>;
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var o,d,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`({
  behandledeOppgaver
}) => {
  const data = [{
    key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name,
    data: behandledeOppgaver
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SistBehandledeSaker åpneFagsak={() => undefined} />
    </RestApiMock>;
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const y=["Default","IngenBehandlinger"];export{e as Default,a as IngenBehandlinger,y as __namedExportsOrder,x as default};
