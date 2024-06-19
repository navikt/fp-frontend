import{R as r}from"./index-DVXBtNgz.js";import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{z as s,v as E,Y as n,b as o}from"./index.es-BkMxg3KK.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{R as h,b as R,r as v}from"./fplosSaksbehandlerRestApi-_JpbzVtX.js";import"./useRestApiRunner-B4tj0W_o.js";import{g as O,m as A}from"./nb_NO-CXyD09lO.js";import{a as F}from"./alleKodeverkLos-BJud6Q-i.js";import{F as m}from"./FagsakSearch-CeVq9Ysq.js";import"./v4-CQkTLCs1.js";import"./tslib.es6-CMwweBXX.js";import"./index-Cbx7Fas8.js";import"./PersonInfo-YCNcln23.js";import"./SearchForm-DfFZ4V4A.js";import"./index.es-BjxD05A9.js";import"./ExclamationmarkTriangleFill-Bd-fcg-X.js";import"./FagsakList-CKq2G0kk.js";import"./kodeverkUtils-RGNAgZhp.js";import"./useLosKodeverk-BF3zTobk.js";import"./ChevronRight-DxjcbTmQ.js";const K=O(A),z={title:"los/saksbehandler/fagsakSearch/FagsakSearch",component:m,decorators:[K]},d=({fagsaker:u,fagsakOppgaver:b})=>{const f=[{key:h.KODEVERK_LOS.name,data:F,global:!0}];return r.createElement(R,{data:f,requestApi:v},r.createElement(m,{fagsaker:u,fagsakOppgaver:b,searchFagsakCallback:t("button-click"),searchResultReceived:!0,åpneFagsak:t("button-click"),selectOppgaveCallback:t("button-click"),searchStarted:!1,resetSearch:t("button-click"),kanSaksbehandle:!0}))},a=d.bind({});a.args={fagsaker:[{saksnummer:"12213234",fagsakYtelseType:s.FORELDREPENGER,status:E.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};const e=d.bind({});e.args={fagsaker:[],fagsakOppgaver:[]};var c,l,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,k,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
