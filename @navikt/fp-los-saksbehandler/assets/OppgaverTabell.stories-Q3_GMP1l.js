import{j as s}from"./jsx-runtime-CUEGZZF9.js";import{a as k}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{Y as r,b as n,z as p}from"./index.es-V78UKnai.js";import{R as c,a as t,b as u,r as b}from"./fplosSaksbehandlerRestApi-9nzGfz3D.js";import{g as P,m as S}from"./nb_NO-ZnAO4ZoY.js";import{a as y}from"./alleKodeverkLos-Qz5F4oTQ.js";import{O as g}from"./OppgaverTabell-7nVo_zXr.js";import"./index-DogsOklH.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./useGlobalStateRestApiData-n3nAw5-C.js";import"./index-MroJ3egt.js";import"./kodeverkTyper-ntOwH22Y.js";import"./kodeverkUtils-d7epiQ_o.js";import"./BehandlingPollingTimoutModal-AUptiTAn.js";import"./ExclamationmarkTriangleFill-6rdq2_kn.js";import"./OppgaveHandlingerMenu-GzNpU2kV.js";import"./FlyttReservasjonModal-MZAxPJya.js";import"./index.es-2ZtIRP0H.js";import"./OpphevReservasjonModal--aByaOZ2.js";import"./OppgaveReservasjonForlengetModal-pj3u3UkQ.js";import"./ChevronRight-hIOTfLSe.js";const T=P(S),C={title:"los/saksbehandler/behandlingskoer/OppgaverTabell",component:g,decorators:[T]},R=({oppgaverTilBehandling:v,reserverteOppgaver:A})=>{const O=[{key:c.KODEVERK_LOS.name,data:y,global:!0},{key:t.FORLENG_OPPGAVERESERVASJON.name,data:{}},{key:t.RESERVERTE_OPPGAVER.name,data:A},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:v}];return s(u,{data:O,requestApi:b,children:s(g,{reserverOppgave:k("button-click"),valgtSakslisteId:1,doPolling:!1})})},e=R.bind({});e.args={oppgaverTilBehandling:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],reserverteOppgaver:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:r.KLAGE,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}]};const a=R.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
