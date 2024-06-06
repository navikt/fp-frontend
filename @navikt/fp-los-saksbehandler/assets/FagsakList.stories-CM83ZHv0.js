import{R as e}from"./index-BBkUAzwr.js";import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{z as s,v as k,Y as c,b as g}from"./index.es-BkMxg3KK.js";import{R as d,b as u,r as f}from"./fplosSaksbehandlerRestApi-yC5FIIxZ.js";import"./useRestApiRunner-CnLmgk-1.js";import{g as E,m as b}from"./nb_NO-B_pArjwH.js";import{a as R}from"./alleKodeverkLos-BJud6Q-i.js";import{K as O}from"./Kjonnkode-C-fkzSiP.js";import{F as p}from"./FagsakList-C_ep2xA6.js";import"./v4-CQkTLCs1.js";import"./index-PqR-_bA4.js";import"./kodeverkUtils-RGNAgZhp.js";import"./useLosKodeverk-Bu585ykK.js";import"./ChevronRight-CZo5iNVk.js";const v=E(b),U={title:"los/saksbehandler/fagsakSearch/FagsakList",component:p,decorators:[v]},A=({fagsaker:i,fagsakOppgaver:l})=>{const m=[{key:d.KODEVERK_LOS.name,data:R,global:!0}];return e.createElement(u,{data:m,requestApi:f},e.createElement(p,{fagsaker:i,åpneFagsak:t("button-click"),selectOppgaveCallback:t("button-click"),fagsakOppgaver:l}))},a=A.bind({});a.args={fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:k.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:O.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:c.FORSTEGANGSSOKNAD,behandlingStatus:g.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const q=["Default"];export{a as Default,q as __namedExportsOrder,U as default};
