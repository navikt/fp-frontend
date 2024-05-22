import{R as n}from"./index-DogsOklH.js";import{a}from"./chunk-MZXVCX43-RlXIxtK5.js";import{Y as m,b as d,z as g}from"./index.es-V78UKnai.js";import{a as t,b as u,r as E}from"./fplosSaksbehandlerRestApi-GEsMItNL.js";import"./useRestApiRunner-gYXVz7Mj.js";import{g as R,m as c}from"./nb_NO-NgrW6B2a.js";import{O as p}from"./OppgaveHandlingerMenu-YlPbfJjw.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./FlyttReservasjonModal-joZAR0eQ.js";import"./index.es-e5__LsBl.js";import"./OpphevReservasjonModal-_-SMpHV8.js";import"./OppgaveReservasjonForlengetModal-zVGN2iOi.js";const v=R(c),D={title:"los/saksbehandler/behandlingskoer/OppgaveHandlingerMenu",component:p,decorators:[v]},k=({oppgave:i})=>{const l=[{key:t.OPPHEV_OPPGAVERESERVASJON.name,data:{}},{key:t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,data:{brukerIdent:"teasdfa",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]}},{key:t.FLYTT_RESERVASJON.name,data:{}}];return n.createElement(u,{data:l,requestApi:E},n.createElement(p,{toggleMenu:a("button-click"),offset:{top:50,left:0},oppgave:i,imageNode:null,forlengOppgaveReservasjon:()=>Promise.resolve(""),hentReserverteOppgaver:a("button-click")}))},e=k.bind({});e.args={oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:g.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,D as default};
