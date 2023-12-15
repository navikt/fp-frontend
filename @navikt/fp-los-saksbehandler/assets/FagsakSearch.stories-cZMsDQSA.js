import{j as r}from"./jsx-runtime-CUEGZZF9.js";import{a as t}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{z as s,v as h,Y as n,b as o}from"./index.es-V78UKnai.js";import{K as S}from"./Kjonnkode-oeRnvMGc.js";import{R as E,b as R,r as v}from"./fplosSaksbehandlerRestApi-9dkwlRoo.js";import{g as O,m as A}from"./nb_NO-ifoLtffX.js";import{a as F}from"./alleKodeverkLos-Qz5F4oTQ.js";import{F as m}from"./FagsakSearch-bMSrv8z5.js";import"./index-DogsOklH.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./useGlobalStateRestApiData-n3nAw5-C.js";import"./index-MroJ3egt.js";import"./PersonInfo-TGcvFFkW.js";import"./SearchForm-F-2NB4tW.js";import"./index.es-6jszBJub.js";import"./ExclamationmarkTriangleFill-QKQZkfSk.js";import"./FagsakList-m6jPFUYZ.js";import"./kodeverkUtils-d7epiQ_o.js";import"./useLosKodeverk-LxhvBA04.js";import"./ChevronRight-VRmgnOTv.js";const K=O(A),J={title:"los/saksbehandler/fagsakSearch/FagsakSearch",component:m,decorators:[K]},d=({fagsaker:u,fagsakOppgaver:b})=>{const f=[{key:E.KODEVERK_LOS.name,data:F,global:!0}];return r(R,{data:f,requestApi:v,children:r(m,{fagsaker:u,fagsakOppgaver:b,searchFagsakCallback:t("button-click"),searchResultReceived:!0,åpneFagsak:t("button-click"),selectOppgaveCallback:t("button-click"),searchStarted:!1,resetSearch:t("button-click"),kanSaksbehandle:!0})})},a=d.bind({});a.args={fagsaker:[{saksnummer:"12213234",fagsakYtelseType:s.FORELDREPENGER,status:h.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};const e=d.bind({});e.args={fagsaker:[],fagsakOppgaver:[]};var c,i,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(g=(k=e.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const Q=["Default","IngentingBleFunnet"];export{a as Default,e as IngentingBleFunnet,Q as __namedExportsOrder,J as default};
