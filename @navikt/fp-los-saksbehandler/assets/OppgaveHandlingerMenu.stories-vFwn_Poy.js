import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{Y as m,b as d,z as g}from"./index.es-BkMxg3KK.js";import{a as t,b as u,r as E}from"./fplosSaksbehandlerRestApi-tcz63uSM.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{m as R}from"./nb_NO-BxfL2bzu.js";import{g as c}from"./withIntl-z0syI_c3.js";import{O as p}from"./OppgaveHandlingerMenu-Daw43fFQ.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./index-C5xsJX-I.js";import"./FlyttReservasjonModal-31X9Kfvz.js";import"./index.es-X5vC34ph.js";import"./OpphevReservasjonModal-Du2F3RC4.js";import"./OppgaveReservasjonForlengetModal-cg-PDP2A.js";const v=c(R),L={title:"los/saksbehandler/behandlingskoer/OppgaveHandlingerMenu",component:p,decorators:[v]},k=({oppgave:i})=>{const l=[{key:t.OPPHEV_OPPGAVERESERVASJON.name,data:{}},{key:t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,data:{brukerIdent:"teasdfa",navn:"Espen Utvikler"}},{key:t.FLYTT_RESERVASJON.name,data:{}}];return n.jsx(u,{data:l,requestApi:E,children:n.jsx(p,{toggleMenu:a("button-click"),offset:{top:50,left:0},oppgave:i,imageNode:null,forlengOppgaveReservasjon:()=>Promise.resolve(""),hentReserverteOppgaver:a("button-click")})})},e=k.bind({});e.args={oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:g.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",href:""}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  oppgave
}) => {
  const data = [{
    key: RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON.name,
    data: {}
  }, {
    key: RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,
    data: {
      brukerIdent: 'teasdfa',
      navn: 'Espen Utvikler'
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,L as default};
