import{j as s}from"./jsx-runtime-5926aa06.js";import{a as k}from"./chunk-OPEUWD42-a3b45fd8.js";import{Y as r,m as n,z as p}from"./index.es-3e46b5c8.js";import{a as u,R as t,k as c,r as P}from"./fplosSaksbehandlerRestApi-325d6556.js";import{B as b,j as S,m as y}from"./nb_NO-80ad4d83.js";import{O as R}from"./OppgaverTabell-46f3a11e.js";import"./index-ebeaab24.js";import"./index.es-d4f46e89.js";import"./index-9c09ad76.js";import"./index.es-4cd68a77.js";import"./BehandlingPollingTimoutModal-4b237913.js";import"./advarsel-27b41fd8.js";import"./Provider-e02157b4.js";import"./index-f50b85d6.js";import"./OppgaveHandlingerMenu-29cfdbd4.js";import"./index.es-f5e58d0b.js";import"./index.es-90bbcc0d.js";import"./Heading-5fc0994e.js";import"./OpphevReservasjonModal-12424e2a.js";import"./OppgaveReservasjonForlengetModal-dd205e7b.js";import"./ChevronRight-93858554.js";const T=b(y),z={title:"los/saksbehandler/behandlingskoer/OppgaverTabell",component:R,decorators:[T]},g=({oppgaverTilBehandling:v,reserverteOppgaver:O})=>{const A=[{key:u.KODEVERK_LOS.name,data:S,global:!0},{key:t.FORLENG_OPPGAVERESERVASJON.name,data:{}},{key:t.RESERVERTE_OPPGAVER.name,data:O},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:v}];return s.jsx(c,{data:A,requestApi:P,children:s.jsx(R,{reserverOppgave:k("button-click"),valgtSakslisteId:1,doPolling:!1})})},e=g.bind({});e.args={oppgaverTilBehandling:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],reserverteOppgaver:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:r.KLAGE,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}]};const a=g.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  oppgaverTilBehandling,
  reserverteOppgaver
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.FORLENG_OPPGAVERESERVASJON.name,
    data: {}
  }, {
    key: RestApiPathsKeys.RESERVERTE_OPPGAVER.name,
    data: reserverteOppgaver
  }, {
    key: RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING.name,
    data: oppgaverTilBehandling
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <OppgaverTabell reserverOppgave={action('button-click')} valgtSakslisteId={1} doPolling={false} />
    </RestApiMock>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,d,E;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
  oppgaverTilBehandling,
  reserverteOppgaver
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.FORLENG_OPPGAVERESERVASJON.name,
    data: {}
  }, {
    key: RestApiPathsKeys.RESERVERTE_OPPGAVER.name,
    data: reserverteOppgaver
  }, {
    key: RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING.name,
    data: oppgaverTilBehandling
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <OppgaverTabell reserverOppgave={action('button-click')} valgtSakslisteId={1} doPolling={false} />
    </RestApiMock>;
}`,...(E=(d=a.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};const C=["Default","TomOppgaveTabell"];export{e as Default,a as TomOppgaveTabell,C as __namedExportsOrder,z as default};
//# sourceMappingURL=OppgaverTabell.stories-b2ce0ee8.js.map
