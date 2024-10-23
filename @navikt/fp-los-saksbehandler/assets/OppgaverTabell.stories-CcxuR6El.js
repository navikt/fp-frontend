import{j as s}from"./jsx-runtime-QvZ8i92b.js";import{a as k}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{Y as r,b as n,z as p}from"./index.es-BkMxg3KK.js";import{R as u,a as t,b as c,r as b}from"./fplosSaksbehandlerRestApi-Dn6WkI7i.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{m as P}from"./nb_NO-D2w3x064.js";import{g as S}from"./withIntl-Cox7C9nx.js";import{a as y}from"./alleKodeverkLos-BJud6Q-i.js";import{O as R}from"./OppgaverTabell-cH-N5iCB.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./index-CfOt2XX2.js";import"./kodeverkTyper-CavWL6Ds.js";import"./kodeverkUtils-RGNAgZhp.js";import"./BehandlingPollingTimoutModal-C2cs0Nik.js";import"./ExclamationmarkTriangleFill-_BlAmCEt.js";import"./OppgaveHandlingerMenu-CxicfZ__.js";import"./FlyttReservasjonModal-CFmqJaq4.js";import"./index.es-BS3KsWJ9.js";import"./OpphevReservasjonModal-DEjrRIwv.js";import"./OppgaveReservasjonForlengetModal-Dboe-vu_.js";import"./ChevronRight-CTWdv7l-.js";const T=S(P),Q={title:"los/saksbehandler/behandlingskoer/OppgaverTabell",component:R,decorators:[T]},g=({oppgaverTilBehandling:v,reserverteOppgaver:A})=>{const O=[{key:u.KODEVERK_LOS.name,data:y,global:!0},{key:t.FORLENG_OPPGAVERESERVASJON.name,data:{}},{key:t.RESERVERTE_OPPGAVER.name,data:A},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:v}];return s.jsx(c,{data:O,requestApi:b,children:s.jsx(R,{reserverOppgave:k("button-click"),valgtSakslisteId:1,doPolling:!1})})},e=g.bind({});e.args={oppgaverTilBehandling:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],reserverteOppgaver:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:r.KLAGE,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}]};const a=g.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(E=(d=a.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};const W=["Default","TomOppgaveTabell"];export{e as Default,a as TomOppgaveTabell,W as __namedExportsOrder,Q as default};
