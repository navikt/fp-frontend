import{R as s}from"./index-DogsOklH.js";import{a as c}from"./chunk-MZXVCX43-RlXIxtK5.js";import{Y as r,b as n,z as p}from"./index.es-V78UKnai.js";import{R as k,a as t,b as u,r as b}from"./fplosSaksbehandlerRestApi-P4G0FdKv.js";import"./useRestApiRunner-gYXVz7Mj.js";import{g as P,m as S}from"./nb_NO-FyPNv8I8.js";import{a as y}from"./alleKodeverkLos-Qz5F4oTQ.js";import{O as R}from"./OppgaverTabell-hrk-oxtw.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./kodeverkTyper-4shgb08m.js";import"./kodeverkUtils-d7epiQ_o.js";import"./BehandlingPollingTimoutModal-Dea-ey2S.js";import"./ExclamationmarkTriangleFill-0SRtyn2K.js";import"./OppgaveHandlingerMenu-A5jNBS_c.js";import"./FlyttReservasjonModal-52UFWF1n.js";import"./index.es-WzVU8gca.js";import"./OpphevReservasjonModal-WeiAk6nN.js";import"./OppgaveReservasjonForlengetModal-fwt0WCwS.js";import"./ChevronRight-gkg-CniB.js";const T=P(S),w={title:"los/saksbehandler/behandlingskoer/OppgaverTabell",component:R,decorators:[T]},g=({oppgaverTilBehandling:v,reserverteOppgaver:A})=>{const O=[{key:k.KODEVERK_LOS.name,data:y,global:!0},{key:t.FORLENG_OPPGAVERESERVASJON.name,data:{}},{key:t.RESERVERTE_OPPGAVER.name,data:A},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:v}];return s.createElement(u,{data:O,requestApi:b},s.createElement(R,{reserverOppgave:c("button-click"),valgtSakslisteId:1,doPolling:!1}))},e=g.bind({});e.args={oppgaverTilBehandling:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],reserverteOppgaver:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:r.KLAGE,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}]};const a=g.bind({});var o,l,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
