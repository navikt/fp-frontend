import{R as s}from"./index-DogsOklH.js";import{a as c}from"./chunk-MZXVCX43-RlXIxtK5.js";import{Y as r,b as n,z as p}from"./index.es-V78UKnai.js";import{R as k,a as t,b as u,r as b}from"./fplosSaksbehandlerRestApi-GEsMItNL.js";import"./useRestApiRunner-gYXVz7Mj.js";import{g as P,m as S}from"./nb_NO-NgrW6B2a.js";import{a as y}from"./alleKodeverkLos-3oPC0WGq.js";import{O as R}from"./OppgaverTabell-V7Krs3Sp.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./kodeverkTyper-4shgb08m.js";import"./kodeverkUtils-d7epiQ_o.js";import"./BehandlingPollingTimoutModal-wFhhcViN.js";import"./ExclamationmarkTriangleFill-OZ8Gam3P.js";import"./OppgaveHandlingerMenu-YlPbfJjw.js";import"./FlyttReservasjonModal-joZAR0eQ.js";import"./index.es-e5__LsBl.js";import"./OpphevReservasjonModal-_-SMpHV8.js";import"./OppgaveReservasjonForlengetModal-zVGN2iOi.js";import"./ChevronRight-_QnLl86z.js";const T=P(S),w={title:"los/saksbehandler/behandlingskoer/OppgaverTabell",component:R,decorators:[T]},g=({oppgaverTilBehandling:v,reserverteOppgaver:A})=>{const O=[{key:k.KODEVERK_LOS.name,data:y,global:!0},{key:t.FORLENG_OPPGAVERESERVASJON.name,data:{}},{key:t.RESERVERTE_OPPGAVER.name,data:A},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:v}];return s.createElement(u,{data:O,requestApi:b},s.createElement(R,{reserverOppgave:c("button-click"),valgtSakslisteId:1,doPolling:!1}))},e=g.bind({});e.args={oppgaverTilBehandling:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],reserverteOppgaver:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:r.KLAGE,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}]};const a=g.bind({});var o,l,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,d,E;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(E=(d=a.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};const z=["Default","TomOppgaveTabell"];export{e as Default,a as TomOppgaveTabell,z as __namedExportsOrder,w as default};
