import{j as s}from"./jsx-runtime-69eee039.js";import{a as k}from"./chunk-AY7I2SME-c7b6cf8a.js";import{Y as r,b as n,z as p}from"./index.es-a3c6219c.js";import{b as u,R as t,k as c,r as b}from"./fplosSaksbehandlerRestApi-729f2e45.js";import{B as P,j as S,m as y}from"./nb_NO-8bb8d840.js";import{O as R}from"./OppgaverTabell-4585f70d.js";import"./index-7c191284.js";import"./index.es-ba84c291.js";import"./floating-ui.react-dom.esm-0ed0f36f.js";import"./index-ecbee218.js";import"./index.es-f5c23214.js";import"./BehandlingPollingTimoutModal-49f589d3.js";import"./advarsel-27b41fd8.js";import"./Provider-11097238.js";import"./index-b3a39e30.js";import"./OppgaveHandlingerMenu-e550b136.js";import"./index.es-cebb64fb.js";import"./index.es-40ddef49.js";import"./Heading-970a94fb.js";import"./OpphevReservasjonModal-5ea56291.js";import"./OppgaveReservasjonForlengetModal-e59ead57.js";import"./ChevronRight-2e3eaa53.js";const T=P(y),C={title:"los/saksbehandler/behandlingskoer/OppgaverTabell",component:R,decorators:[T]},g=({oppgaverTilBehandling:v,reserverteOppgaver:O})=>{const A=[{key:u.KODEVERK_LOS.name,data:S,global:!0},{key:t.FORLENG_OPPGAVERESERVASJON.name,data:{}},{key:t.RESERVERTE_OPPGAVER.name,data:O},{key:t.OPPGAVER_TIL_BEHANDLING.name,data:v}];return s.jsx(c,{data:A,requestApi:b,children:s.jsx(R,{reserverOppgave:k("button-click"),valgtSakslisteId:1,doPolling:!1})})},e=g.bind({});e.args={oppgaverTilBehandling:[{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}],reserverteOppgaver:[{id:2,status:{erReservert:!0},saksnummer:1234,personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:r.KLAGE,behandlingStatus:n.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:p.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2"}]};const a=g.bind({});var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
//# sourceMappingURL=OppgaverTabell.stories-6b161295.js.map
