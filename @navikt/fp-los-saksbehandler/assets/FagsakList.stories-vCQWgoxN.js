import{R as e}from"./index-DogsOklH.js";import{a as t}from"./chunk-MZXVCX43-RlXIxtK5.js";import{z as s,v as k,Y as c,b as g}from"./index.es-V78UKnai.js";import{R as d,b as u,r as f}from"./fplosSaksbehandlerRestApi-GEsMItNL.js";import"./useRestApiRunner-gYXVz7Mj.js";import{g as E,m as b}from"./nb_NO-NgrW6B2a.js";import{a as R}from"./alleKodeverkLos-3oPC0WGq.js";import{K as O}from"./Kjonnkode-oeRnvMGc.js";import{F as p}from"./FagsakList-woOCVdR5.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./kodeverkUtils-d7epiQ_o.js";import"./useLosKodeverk-5u2qWEa5.js";import"./ChevronRight-_QnLl86z.js";const v=E(b),U={title:"los/saksbehandler/fagsakSearch/FagsakList",component:p,decorators:[v]},A=({fagsaker:i,fagsakOppgaver:l})=>{const m=[{key:d.KODEVERK_LOS.name,data:R,global:!0}];return e.createElement(u,{data:m,requestApi:f},e.createElement(p,{fagsaker:i,åpneFagsak:t("button-click"),selectOppgaveCallback:t("button-click"),fagsakOppgaver:l}))},a=A.bind({});a.args={fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:k.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:O.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:c.FORSTEGANGSSOKNAD,behandlingStatus:g.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
