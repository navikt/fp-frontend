import{j as n}from"./jsx-runtime-5926aa06.js";import{a}from"./chunk-OPEUWD42-a3b45fd8.js";import{Y as m,m as d,z as g}from"./index.es-3e46b5c8.js";import{R as t,k as u,r as E}from"./fplosSaksbehandlerRestApi-325d6556.js";import{B as v,m as R}from"./nb_NO-80ad4d83.js";import{O as p}from"./OppgaveHandlingerMenu-29cfdbd4.js";import{M as k}from"./Provider-e02157b4.js";import"./index-ebeaab24.js";import"./index.es-d4f46e89.js";import"./index-9c09ad76.js";import"./index.es-f5e58d0b.js";import"./index.es-90bbcc0d.js";import"./Heading-5fc0994e.js";import"./OpphevReservasjonModal-12424e2a.js";import"./OppgaveReservasjonForlengetModal-dd205e7b.js";import"./index-f50b85d6.js";const c=v(R);k.setAppElement("body");const j={title:"los/saksbehandler/behandlingskoer/OppgaveHandlingerMenu",component:p,decorators:[c]},A=({oppgave:i})=>{const l=[{key:t.OPPHEV_OPPGAVERESERVASJON.name,data:{}},{key:t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,data:{brukerIdent:"teasdfa",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]}},{key:t.FLYTT_RESERVASJON.name,data:{}}];return n.jsx(u,{data:l,requestApi:E,children:n.jsx(p,{toggleMenu:a("button-click"),offset:{top:50,left:0},oppgave:i,imageNode:null,forlengOppgaveReservasjon:()=>Promise.resolve(""),hentReserverteOppgaver:a("button-click")})})},e=A.bind({});e.args={oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:g.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const F=["Default"];export{e as Default,F as __namedExportsOrder,j as default};
//# sourceMappingURL=OppgaveHandlingerMenu.stories-0e84d0c6.js.map
