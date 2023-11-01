import{j as s}from"./jsx-runtime-86dfebf6.js";import{a as c}from"./chunk-AY7I2SME-5eb1ab46.js";import{Y as r,b as n,z as p}from"./index.es-a3c6219c.js";import{c as k,R as t,a as u,r as P}from"./fplosSaksbehandlerRestApi-c8d31a2a.js";import{g as b,m as S}from"./nb_NO-bdcde2eb.js";import{a as y}from"./alleKodeverkLos-5ac5bd02.js";import{O as g}from"./OppgaverTabell-468bde95.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-f709a7eb.js";import"./index-6fd5a17b.js";import"./kodeverkTyper-3907affc.js";import"./kodeverkUtils-fd60f151.js";import"./BehandlingPollingTimoutModal-cfd923bd.js";import"./ExclamationmarkTriangleFill-9ea3bd48.js";import"./Modal-3d35e8b3.js";import"./Heading-bf5304e2.js";import"./OppgaveHandlingerMenu-45c4c8bf.js";import"./FlyttReservasjonModal-94dd8153.js";import"./index.es-9abdc4ea.js";import"./OpphevReservasjonModal-07d47ab5.js";import"./OppgaveReservasjonForlengetModal-c2fcd9c2.js";import"./ChevronRight-cb1791e9.js";const T=b(S),C={title:"los/saksbehandler/behandlingskoer/OppgaverTabell",component:g,decorators:[T]},R=({oppgaverTilBehandling:v,reserverteOppgaver:A})=>{const O=[{key:k.KODEVERK_LOS.name,data:y,global:!0},{key:t.FORLENG_OPPGAVERESERVASJON.name,data:{}},{key:t.RESERVERTE_OPPGAVER.name,data:A},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:v}];return s(u,{data:O,requestApi:P,children:s(g,{reserverOppgave:c("button-click"),valgtSakslisteId:1,doPolling:!1})})},e=R.bind({});e.args={oppgaverTilBehandling:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],reserverteOppgaver:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:r.KLAGE,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}]};const a=R.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,E;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(E=(m=a.parameters)==null?void 0:m.docs)==null?void 0:E.source}}};const Q=["Default","TomOppgaveTabell"];export{e as Default,a as TomOppgaveTabell,Q as __namedExportsOrder,C as default};
//# sourceMappingURL=OppgaverTabell.stories-3de4375f.js.map
