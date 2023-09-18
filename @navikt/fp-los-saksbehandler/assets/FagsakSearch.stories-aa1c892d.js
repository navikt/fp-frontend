import{j as r}from"./jsx-runtime-9c4ae004.js";import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import{z as s,v as h,Y as n,b as o}from"./index.es-a3c6219c.js";import{_ as S}from"./index.es-9f4223fb.js";import{b as E,k as R,r as v}from"./fplosSaksbehandlerRestApi-65de4e1b.js";import{B as O,j as A,m as F}from"./nb_NO-b2e865e9.js";import{F as m}from"./FagsakSearch-4af9b701.js";import"./index-1b03fe98.js";import"./index.es-3a2d92d7.js";import"./index-6fd5a17b.js";import"./PersonInfo-260be9ab.js";import"./Heading-f91b5548.js";import"./SearchForm-0a702194.js";import"./index.es-d6a09112.js";import"./ExclamationmarkTriangleFill-a9e0e6bd.js";import"./FagsakList-c6fea495.js";import"./index.es-c5fcd9dd.js";import"./useLosKodeverk-af588712.js";import"./ChevronRight-8b9055bb.js";const D=O(F),w={title:"los/saksbehandler/fagsakSearch/FagsakSearch",component:m,decorators:[D]},d=({fagsaker:u,fagsakOppgaver:b})=>{const f=[{key:E.KODEVERK_LOS.name,data:A,global:!0}];return r.jsx(R,{data:f,requestApi:v,children:r.jsx(m,{fagsaker:u,fagsakOppgaver:b,searchFagsakCallback:t("button-click"),searchResultReceived:!0,åpneFagsak:t("button-click"),selectOppgaveCallback:t("button-click"),searchStarted:!1,resetSearch:t("button-click"),kanSaksbehandle:!0})})},a=d.bind({});a.args={fagsaker:[{saksnummer:"12213234",fagsakYtelseType:s.FORELDREPENGER,status:h.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};const e=d.bind({});e.args={fagsaker:[],fagsakOppgaver:[]};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
//# sourceMappingURL=FagsakSearch.stories-aa1c892d.js.map
