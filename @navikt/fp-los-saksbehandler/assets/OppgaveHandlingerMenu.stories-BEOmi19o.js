import{j as n}from"./dayjs.min-DKYhEbg2.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import{Y as m,b as d,z as g}from"./index.es-BkMxg3KK.js";import{a as t,b as u,r as E}from"./fplosSaksbehandlerRestApi-CWRPAkFP.js";import"./index-BBkUAzwr.js";import"./useRestApiRunner-DyfIg1tq.js";import{g as v,m as R}from"./nb_NO-DY6WQH50.js";import{O as p}from"./OppgaveHandlingerMenu-BOXS2D05.js";import"./v4-CQkTLCs1.js";import"./index-BfZ0jBbx.js";import"./FlyttReservasjonModal-D-CseH1C.js";import"./index.es-BU-7Ku74.js";import"./OpphevReservasjonModal-DNaw7Kf1.js";import"./OppgaveReservasjonForlengetModal-CnTd4QL0.js";const c=v(R),H={title:"los/saksbehandler/behandlingskoer/OppgaveHandlingerMenu",component:p,decorators:[c]},k=({oppgave:i})=>{const l=[{key:t.OPPHEV_OPPGAVERESERVASJON.name,data:{}},{key:t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,data:{brukerIdent:"teasdfa",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]}},{key:t.FLYTT_RESERVASJON.name,data:{}}];return n.jsx(u,{data:l,requestApi:E,children:n.jsx(p,{toggleMenu:a("button-click"),offset:{top:50,left:0},oppgave:i,imageNode:null,forlengOppgaveReservasjon:()=>Promise.resolve(""),hentReserverteOppgaver:a("button-click")})})},e=k.bind({});e.args={oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:g.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  oppgave
}) => {
  const data = [{
    key: RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON.name,
    data: {}
  }, {
    key: RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,
    data: {
      brukerIdent: 'teasdfa',
      navn: 'Espen Utvikler',
      avdelingsnavn: ['NAV Viken']
    }
  }, {
    key: RestApiPathsKeys.FLYTT_RESERVASJON.name,
    data: {}
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <OppgaveHandlingerMenu toggleMenu={action('button-click')} offset={{
      top: 50,
      left: 0
    }} oppgave={oppgave} imageNode={null} forlengOppgaveReservasjon={() => Promise.resolve('')} hentReserverteOppgaver={action('button-click')} />
    </RestApiMock>;
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,H as default};
