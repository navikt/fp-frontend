import{j as e}from"./jsx-runtime-CUEGZZF9.js";import{a as t}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{z as s,v as k,Y as c,b as g}from"./index.es-V78UKnai.js";import{R as d,b as u,r as f}from"./fplosSaksbehandlerRestApi-0x2sV2N8.js";import{g as E,m as b}from"./nb_NO-ipgnHic7.js";import{a as R}from"./alleKodeverkLos-Qz5F4oTQ.js";import{K as O}from"./Kjonnkode-oeRnvMGc.js";import{F as p}from"./FagsakList-4y5oP_r0.js";import"./index-DogsOklH.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./useGlobalStateRestApiData-n3nAw5-C.js";import"./index-MroJ3egt.js";import"./kodeverkUtils-d7epiQ_o.js";import"./useLosKodeverk-drM_QQER.js";import"./ChevronRight-bEtt5syV.js";const v=E(b),U={title:"los/saksbehandler/fagsakSearch/FagsakList",component:p,decorators:[v]},A=({fagsaker:i,fagsakOppgaver:l})=>{const m=[{key:d.KODEVERK_LOS.name,data:R,global:!0}];return e(u,{data:m,requestApi:f,children:e(p,{fagsaker:i,åpneFagsak:t("button-click"),selectOppgaveCallback:t("button-click"),fagsakOppgaver:l})})},a=A.bind({});a.args={fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:k.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:O.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:c.FORSTEGANGSSOKNAD,behandlingStatus:g.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};var r,o,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
  fagsaker,
  fagsakOppgaver
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <FagsakList fagsaker={fagsaker} åpneFagsak={action('button-click')} selectOppgaveCallback={action('button-click')} fagsakOppgaver={fagsakOppgaver} />
    </RestApiMock>;
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const q=["Default"];export{a as Default,q as __namedExportsOrder,U as default};
