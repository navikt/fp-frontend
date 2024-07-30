import{j as s}from"./dayjs.min-DKYhEbg2.js";import{a as k}from"./chunk-454WOBUV-CM0pFb8Z.js";import{Y as r,b as n,z as p}from"./index.es-BkMxg3KK.js";import{R as u,a as t,b as c,r as b}from"./fplosSaksbehandlerRestApi-CWRPAkFP.js";import"./index-BBkUAzwr.js";import"./useRestApiRunner-DyfIg1tq.js";import{g as P,m as S}from"./nb_NO-DY6WQH50.js";import{a as y}from"./alleKodeverkLos-BJud6Q-i.js";import{O as R}from"./OppgaverTabell-ysBDq0pd.js";import"./v4-CQkTLCs1.js";import"./index-BfZ0jBbx.js";import"./kodeverkTyper-DJMuX7JX.js";import"./kodeverkUtils-RGNAgZhp.js";import"./BehandlingPollingTimoutModal-BEbkuscW.js";import"./ExclamationmarkTriangleFill-D_H37nIb.js";import"./OppgaveHandlingerMenu-BOXS2D05.js";import"./FlyttReservasjonModal-D-CseH1C.js";import"./index.es-BU-7Ku74.js";import"./OpphevReservasjonModal-DNaw7Kf1.js";import"./OppgaveReservasjonForlengetModal-CnTd4QL0.js";import"./ChevronRight-Bo7ctSmw.js";const T=P(S),z={title:"los/saksbehandler/behandlingskoer/OppgaverTabell",component:R,decorators:[T]},g=({oppgaverTilBehandling:v,reserverteOppgaver:A})=>{const O=[{key:u.KODEVERK_LOS.name,data:y,global:!0},{key:t.FORLENG_OPPGAVERESERVASJON.name,data:{}},{key:t.RESERVERTE_OPPGAVER.name,data:A},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:v}];return s.jsx(c,{data:O,requestApi:b,children:s.jsx(R,{reserverOppgave:k("button-click"),valgtSakslisteId:1,doPolling:!1})})},e=g.bind({});e.args={oppgaverTilBehandling:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],reserverteOppgaver:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:r.KLAGE,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}]};const a=g.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(E=(m=a.parameters)==null?void 0:m.docs)==null?void 0:E.source}}};const C=["Default","TomOppgaveTabell"];export{e as Default,a as TomOppgaveTabell,C as __namedExportsOrder,z as default};
