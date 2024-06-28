import{R as r}from"./index-DVXBtNgz.js";import{a as c}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{Y as s,b as n,z as p}from"./index.es-BkMxg3KK.js";import{R as k,a as t,b as u,r as b}from"./fplosSaksbehandlerRestApi-1LvtrRZK.js";import"./useRestApiRunner-B4tj0W_o.js";import{g as P,m as S}from"./nb_NO-B4G50tbZ.js";import{a as y}from"./alleKodeverkLos-BJud6Q-i.js";import{O as R}from"./OppgaverTabell-C3mproMX.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-Dkhc0ShP.js";import"./tslib.es6-CMwweBXX.js";import"./index-Cbx7Fas8.js";import"./kodeverkTyper-DJMuX7JX.js";import"./kodeverkUtils-RGNAgZhp.js";import"./BehandlingPollingTimoutModal-B6M0ttR4.js";import"./ExclamationmarkTriangleFill-Btbhbi2D.js";import"./OppgaveHandlingerMenu-CkPqD31p.js";import"./FlyttReservasjonModal-D0LWy4vy.js";import"./index.es-IrfsGEXF.js";import"./OpphevReservasjonModal-HzAN5voy.js";import"./OppgaveReservasjonForlengetModal-CmPrH8CE.js";import"./ChevronRight-Cu_AKvLq.js";const T=P(S),C={title:"los/saksbehandler/behandlingskoer/OppgaverTabell",component:R,decorators:[T]},g=({oppgaverTilBehandling:v,reserverteOppgaver:A})=>{const O=[{key:k.KODEVERK_LOS.name,data:y,global:!0},{key:t.FORLENG_OPPGAVERESERVASJON.name,data:{}},{key:t.RESERVERTE_OPPGAVER.name,data:A},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:v}];return r.createElement(u,{data:O,requestApi:b},r.createElement(R,{reserverOppgave:c("button-click"),valgtSakslisteId:1,doPolling:!1}))},e=g.bind({});e.args={oppgaverTilBehandling:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:s.FORSTEGANGSSOKNAD,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],reserverteOppgaver:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:s.KLAGE,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}]};const a=g.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(E=(d=a.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};const Q=["Default","TomOppgaveTabell"];export{e as Default,a as TomOppgaveTabell,Q as __namedExportsOrder,C as default};
