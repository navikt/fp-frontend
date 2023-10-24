import{j as r}from"./jsx-runtime-86dfebf6.js";import{a as t}from"./chunk-AY7I2SME-5eb1ab46.js";import{z as s,v as h,Y as n,b as o}from"./index.es-a3c6219c.js";import{K as S}from"./Kjonnkode-594fc607.js";import{c as E,a as R,r as v}from"./fplosSaksbehandlerRestApi-9e71e6d6.js";import{g as O,m as A}from"./nb_NO-fb2db81d.js";import{a as F}from"./alleKodeverkLos-5ac5bd02.js";import{F as m}from"./FagsakSearch-5849d5ed.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-f709a7eb.js";import"./index-6fd5a17b.js";import"./PersonInfo-2d62d953.js";import"./Heading-981ec25e.js";import"./SearchForm-7b4c42eb.js";import"./index.es-79615db4.js";import"./ExclamationmarkTriangleFill-960bf3d3.js";import"./FagsakList-6747b2cc.js";import"./kodeverkUtils-fd60f151.js";import"./useLosKodeverk-2644aca6.js";import"./ChevronRight-6b8b46aa.js";const K=O(A),z={title:"los/saksbehandler/fagsakSearch/FagsakSearch",component:m,decorators:[K]},d=({fagsaker:u,fagsakOppgaver:b})=>{const f=[{key:E.KODEVERK_LOS.name,data:F,global:!0}];return r(R,{data:f,requestApi:v,children:r(m,{fagsaker:u,fagsakOppgaver:b,searchFagsakCallback:t("button-click"),searchResultReceived:!0,åpneFagsak:t("button-click"),selectOppgaveCallback:t("button-click"),searchStarted:!1,resetSearch:t("button-click"),kanSaksbehandle:!0})})},a=d.bind({});a.args={fagsaker:[{saksnummer:"12213234",fagsakYtelseType:s.FORELDREPENGER,status:h.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};const e=d.bind({});e.args={fagsaker:[],fagsakOppgaver:[]};var c,i,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,k,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(g=(k=e.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const J=["Default","IngentingBleFunnet"];export{a as Default,e as IngentingBleFunnet,J as __namedExportsOrder,z as default};
//# sourceMappingURL=FagsakSearch.stories-01774936.js.map
