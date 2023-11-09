import{j as n}from"./jsx-runtime-86dfebf6.js";import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{Y as d,b as m,z as g}from"./index.es-a3c6219c.js";import{R as t,a as u,r as v}from"./fplosSaksbehandlerRestApi-84411765.js";import{g as E,m as R}from"./nb_NO-31758bbb.js";import{O as p}from"./OppgaveHandlingerMenu-927a1d4c.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-f709a7eb.js";import"./index-6fd5a17b.js";import"./FlyttReservasjonModal-96f6c934.js";import"./index.es-23262e77.js";import"./OpphevReservasjonModal-55601bf5.js";import"./OppgaveReservasjonForlengetModal-81bc4875.js";const c=E(R),D={title:"los/saksbehandler/behandlingskoer/OppgaveHandlingerMenu",component:p,decorators:[c]},k=({oppgave:i})=>{const l=[{key:t.OPPHEV_OPPGAVERESERVASJON.name,data:{}},{key:t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,data:{brukerIdent:"teasdfa",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]}},{key:t.FLYTT_RESERVASJON.name,data:{}}];return n(u,{data:l,requestApi:v,children:n(p,{toggleMenu:a("button-click"),offset:{top:50,left:0},oppgave:i,imageNode:null,forlengOppgaveReservasjon:()=>Promise.resolve(""),hentReserverteOppgaver:a("button-click")})})},e=k.bind({});e.args={oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:m.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:g.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=OppgaveHandlingerMenu.stories-1969ea00.js.map
