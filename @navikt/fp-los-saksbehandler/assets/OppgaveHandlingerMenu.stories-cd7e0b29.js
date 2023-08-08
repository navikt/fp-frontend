import{j as n}from"./jsx-runtime-69eee039.js";import{a}from"./chunk-AY7I2SME-c7b6cf8a.js";import{Y as m,b as d,z as g}from"./index.es-a3c6219c.js";import{R as t,k as u,r as E}from"./fplosSaksbehandlerRestApi-383ae4d7.js";import{B as v,m as R}from"./nb_NO-e54960b1.js";import{O as p}from"./OppgaveHandlingerMenu-d574b86a.js";import{M as k}from"./Provider-a1ad3610.js";import"./index-7c191284.js";import"./index.es-ba84c291.js";import"./floating-ui.react-dom.esm-0ed0f36f.js";import"./index-ecbee218.js";import"./index.es-844689cc.js";import"./index.es-612e8fe3.js";import"./Heading-3de150af.js";import"./OpphevReservasjonModal-69cf75ff.js";import"./OppgaveReservasjonForlengetModal-85eea891.js";import"./index-b3a39e30.js";const c=v(R);k.setAppElement("body");const F={title:"los/saksbehandler/behandlingskoer/OppgaveHandlingerMenu",component:p,decorators:[c]},A=({oppgave:i})=>{const l=[{key:t.OPPHEV_OPPGAVERESERVASJON.name,data:{}},{key:t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,data:{brukerIdent:"teasdfa",navn:"Espen Utvikler",avdelingsnavn:["NAV Viken"]}},{key:t.FLYTT_RESERVASJON.name,data:{}}];return n.jsx(u,{data:l,requestApi:E,children:n.jsx(p,{toggleMenu:a("button-click"),offset:{top:50,left:0},oppgave:i,imageNode:null,forlengOppgaveReservasjon:()=>Promise.resolve(""),hentReserverteOppgaver:a("button-click")})})},e=A.bind({});e.args={oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:g.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,F as default};
//# sourceMappingURL=OppgaveHandlingerMenu.stories-cd7e0b29.js.map
