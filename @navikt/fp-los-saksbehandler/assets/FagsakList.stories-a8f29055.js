import{j as e}from"./jsx-runtime-86dfebf6.js";import{a as t}from"./chunk-AY7I2SME-5eb1ab46.js";import{z as s,v as k,Y as c,b as g}from"./index.es-a3c6219c.js";import{c as d,a as u,r as f}from"./fplosSaksbehandlerRestApi-c8d31a2a.js";import{g as E,m as b}from"./nb_NO-bdcde2eb.js";import{a as R}from"./alleKodeverkLos-5ac5bd02.js";import{K as O}from"./Kjonnkode-594fc607.js";import{F as p}from"./FagsakList-b56cd44b.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-f709a7eb.js";import"./index-6fd5a17b.js";import"./kodeverkUtils-fd60f151.js";import"./useLosKodeverk-4328c9a9.js";import"./ChevronRight-cb1791e9.js";const v=E(b),P={title:"los/saksbehandler/fagsakSearch/FagsakList",component:p,decorators:[v]},A=({fagsaker:i,fagsakOppgaver:l})=>{const m=[{key:d.KODEVERK_LOS.name,data:R,global:!0}];return e(u,{data:m,requestApi:f,children:e(p,{fagsaker:i,åpneFagsak:t("button-click"),selectOppgaveCallback:t("button-click"),fagsakOppgaver:l})})},a=A.bind({});a.args={fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:k.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:O.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:c.FORSTEGANGSSOKNAD,behandlingStatus:g.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const U=["Default"];export{a as Default,U as __namedExportsOrder,P as default};
//# sourceMappingURL=FagsakList.stories-a8f29055.js.map
