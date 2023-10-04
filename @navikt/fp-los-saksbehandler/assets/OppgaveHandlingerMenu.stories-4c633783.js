import{j as n}from"./jsx-runtime-9c4ae004.js";import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{Y as m,b as d,z as g}from"./index.es-a3c6219c.js";import{R as t,k as u,r as E}from"./fplosSaksbehandlerRestApi-e31cdd26.js";import{B as v,m as R}from"./nb_NO-fac64f37.js";import{O as p}from"./OppgaveHandlingerMenu-7e765614.js";import"./index-1b03fe98.js";import"./index.es-dad88425.js";import"./index-6fd5a17b.js";import"./index.es-541aad2e.js";import"./index.es-86601b2d.js";import"./Provider-b3018c49.js";import"./Heading-dcc00cd8.js";import"./OpphevReservasjonModal-0523a635.js";import"./OppgaveReservasjonForlengetModal-c2e37479.js";const k=v(R),L={title:"los/saksbehandler/behandlingskoer/OppgaveHandlingerMenu",component:p,decorators:[k]},c=({oppgave:i})=>{const l=[{key:t.OPPHEV_OPPGAVERESERVASJON.name,data:{}},{key:t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,data:{brukerIdent:"teasdfa",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]}},{key:t.FLYTT_RESERVASJON.name,data:{}}];return n.jsx(u,{data:l,requestApi:E,children:n.jsx(p,{toggleMenu:a("button-click"),offset:{top:50,left:0},oppgave:i,imageNode:null,forlengOppgaveReservasjon:()=>Promise.resolve(""),hentReserverteOppgaver:a("button-click")})})},e=c.bind({});e.args={oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:g.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,L as default};
//# sourceMappingURL=OppgaveHandlingerMenu.stories-4c633783.js.map
