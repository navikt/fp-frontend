import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{Y as m,b as d,z as E}from"./index.es-BkMxg3KK.js";import{a as e,b as u,r as g}from"./fplosSaksbehandlerRestApi-DzOe4zkL.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{m as c}from"./nb_NO-3Rkd6eZ_.js";import{g as k}from"./withIntl-BuEyDIEb.js";import{O as s}from"./OppgaveHandlingerMenu-D5_Kctk6.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./index-C5xsJX-I.js";import"./FlyttReservasjonModal-DiGw4qlu.js";import"./index.es-BNbbWCfQ.js";import"./VStack-XUoC8Lli.js";import"./OppgaveReservasjonForlengetModal-CdiHK4N7.js";import"./OpphevReservasjonModal-C4NR07K9.js";import"./useControllableState-DTAvaL6c.js";import"./ChevronRight-BGSoxRgL.js";import"./PersonHeadset-Dfcukrc3.js";const R=k(c),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:s,decorators:[R],render:({oppgave:o})=>{const l=[{key:e.OPPHEV_OPPGAVERESERVASJON.name,data:{}},{key:e.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,data:{brukerIdent:"teasdfa",navn:"Espen Utvikler"}},{key:e.FLYTT_RESERVASJON.name,data:{}},{key:e.FORLENG_OPPGAVERESERVASJON.name,data:{}}];return r.jsx(u,{data:l,requestApi:g,children:r.jsx(s,{oppgave:o,hentReserverteOppgaver:n("button-click"),setEnableTableEvents:n("button-click")})})}},t={args:{oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"},hentReserverteOppgaver:n("button-click"),setEnableTableEvents:n("button-click")}};var a,i,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    oppgave: {
      id: 1,
      status: {
        erReservert: false,
        flyttetReservasjon: {
          tidspunkt: '2019-02-02',
          uid: '23423',
          navn: 'Espen Utvikler',
          begrunnelse: 'Flyttet'
        },
        reservertTilTidspunkt: '2021-08-02T00:54:25.455'
      },
      saksnummer: 1234,
      personnummer: '1212',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '1'
    },
    hentReserverteOppgaver: action('button-click'),
    setEnableTableEvents: action('button-click')
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,j as default};
