import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{z as s,v as h,Y as n,b as o}from"./index.es-BkMxg3KK.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{R,b as E,r as v}from"./fplosSaksbehandlerRestApi-tcz63uSM.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{m as O}from"./nb_NO-BxfL2bzu.js";import{g as A}from"./withIntl-z0syI_c3.js";import{a as F}from"./alleKodeverkLos-BJud6Q-i.js";import{F as m}from"./FagsakSearch-DoD3wmu5.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./index-C5xsJX-I.js";import"./PersonInfo-DrKB_YID.js";import"./SearchForm-CAAVrBwP.js";import"./index.es-ZwhdwzKu.js";import"./ExclamationmarkTriangleFill-DELIGLDL.js";import"./FagsakList-GoD8Dmu1.js";import"./kodeverkUtils-RGNAgZhp.js";import"./useLosKodeverk-DoM0cT3z.js";import"./ChevronRight-Ad25opSq.js";const K=A(O),Q={title:"los/saksbehandler/fagsakSearch/FagsakSearch",component:m,decorators:[K]},d=({fagsaker:u,fagsakOppgaver:b})=>{const f=[{key:R.KODEVERK_LOS.name,data:F,global:!0}];return r.jsx(E,{data:f,requestApi:v,children:r.jsx(m,{fagsaker:u,fagsakOppgaver:b,searchFagsakCallback:t("button-click"),searchResultReceived:!0,åpneFagsak:t("button-click"),selectOppgaveCallback:t("button-click"),searchStarted:!1,resetSearch:t("button-click"),kanSaksbehandle:!0})})},a=d.bind({});a.args={fagsaker:[{saksnummer:"12213234",fagsakYtelseType:s.FORELDREPENGER,status:h.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:n.FORSTEGANGSSOKNAD,behandlingStatus:o.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};const e=d.bind({});e.args={fagsaker:[],fagsakOppgaver:[]};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(g=(k=e.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const W=["Default","IngentingBleFunnet"];export{a as Default,e as IngentingBleFunnet,W as __namedExportsOrder,Q as default};
