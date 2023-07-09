import{j as r}from"./jsx-runtime-5926aa06.js";import{a as t}from"./chunk-OPEUWD42-a3b45fd8.js";import{z as s,v as h,Y as n,m as o}from"./index.es-3e46b5c8.js";import{A as S}from"./index.es-9080d8e0.js";import{a as E,k as R,r as v}from"./fplosSaksbehandlerRestApi-325d6556.js";import{B as O,j as A,m as F}from"./nb_NO-80ad4d83.js";import{F as m}from"./FagsakSearch-f0913709.js";import"./index-ebeaab24.js";import"./index.es-d4f46e89.js";import"./index-9c09ad76.js";import"./PersonInfo-cb30f893.js";import"./Heading-5fc0994e.js";import"./SearchForm-e8857341.js";import"./index.es-90bbcc0d.js";import"./advarsel-27b41fd8.js";import"./FagsakList-bf8e2b92.js";import"./index.es-4cd68a77.js";import"./useLosKodeverk-38939188.js";import"./ChevronRight-93858554.js";const D=O(F),w={title:"los/saksbehandler/fagsakSearch/FagsakSearch",component:m,decorators:[D]},d=({fagsaker:u,fagsakOppgaver:b})=>{const f=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return r.jsx(R,{data:f,requestApi:v,children:r.jsx(m,{fagsaker:u,fagsakOppgaver:b,searchFagsakCallback:t("button-click"),searchResultReceived:!0,åpneFagsak:t("button-click"),selectOppgaveCallback:t("button-click"),searchStarted:!1,resetSearch:t("button-click"),kanSaksbehandle:!0})})},a=d.bind({});a.args={fagsaker:[{saksnummer:"12213234",fagsakYtelseType:s.FORELDREPENGER,status:h.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};const e=d.bind({});e.args={fagsaker:[],fagsakOppgaver:[]};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`({
  fagsaker,
  fagsakOppgaver
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <FagsakSearch fagsaker={fagsaker} fagsakOppgaver={fagsakOppgaver} searchFagsakCallback={action('button-click')} searchResultReceived åpneFagsak={action('button-click')} selectOppgaveCallback={action('button-click')} searchStarted={false} resetSearch={action('button-click')} kanSaksbehandle />
    </RestApiMock>;
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,k,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
  fagsaker,
  fagsakOppgaver
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <FagsakSearch fagsaker={fagsaker} fagsakOppgaver={fagsakOppgaver} searchFagsakCallback={action('button-click')} searchResultReceived åpneFagsak={action('button-click')} selectOppgaveCallback={action('button-click')} searchStarted={false} resetSearch={action('button-click')} kanSaksbehandle />
    </RestApiMock>;
}`,...(g=(k=e.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const z=["Default","IngentingBleFunnet"];export{a as Default,e as IngentingBleFunnet,z as __namedExportsOrder,w as default};
//# sourceMappingURL=FagsakSearch.stories-f26e8106.js.map
