import{R as n}from"./index-DVXBtNgz.js";import{a}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{Y as m,b as d,z as g}from"./index.es-BkMxg3KK.js";import{a as t,b as u,r as E}from"./fplosSaksbehandlerRestApi-_JpbzVtX.js";import"./useRestApiRunner-B4tj0W_o.js";import{g as R,m as c}from"./nb_NO-CXyD09lO.js";import{O as p}from"./OppgaveHandlingerMenu-CtANVEM7.js";import"./v4-CQkTLCs1.js";import"./tslib.es6-CMwweBXX.js";import"./index-Cbx7Fas8.js";import"./FlyttReservasjonModal-Blfeh4kU.js";import"./index.es-BjxD05A9.js";import"./OpphevReservasjonModal-DMKbBQEd.js";import"./OppgaveReservasjonForlengetModal-Dy4OC-MJ.js";const v=R(c),H={title:"los/saksbehandler/behandlingskoer/OppgaveHandlingerMenu",component:p,decorators:[v]},k=({oppgave:i})=>{const l=[{key:t.OPPHEV_OPPGAVERESERVASJON.name,data:{}},{key:t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,data:{brukerIdent:"teasdfa",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]}},{key:t.FLYTT_RESERVASJON.name,data:{}}];return n.createElement(u,{data:l,requestApi:E},n.createElement(p,{toggleMenu:a("button-click"),offset:{top:50,left:0},oppgave:i,imageNode:null,forlengOppgaveReservasjon:()=>Promise.resolve(""),hentReserverteOppgaver:a("button-click")}))},e=k.bind({});e.args={oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:g.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
