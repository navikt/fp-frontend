import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as l}from"./behandlingStatus-CZkrUkra.js";import{B as d}from"./behandlingType-BdbjGMJD.js";import{F as E}from"./fagsakYtelseType-DI8GXtVr.js";import{a as e,b as u,r as g}from"./fplosSaksbehandlerRestApi-D8GFX0av.js";import"./index-uubelm5h.js";import"./useRestApiRunner-PStp57wB.js";import{g as k}from"./withIntl-DXHUjld2.js";import{O as a}from"./OppgaveHandlingerMenu-CfD34vIm.js";import{m as c}from"./nb_NO-C4RkFlUy.js";import"./v4-CQkTLCs1.js";import"./index.es-Bk8hSli7.js";import"./index.es-UbZaQCW7.js";import"./dayjs.min-BsYQKNhR.js";import"./Loader-CXblLYfE.js";import"./FlyttReservasjonModal-DDsbYd8V.js";import"./index.es-DXmPf6Wl.js";import"./ChevronDown-C80NRibc.js";import"./Tag-DyOxNX7P.js";import"./index-C5xsJX-I.js";import"./Modal-BG2sORRw.js";import"./composeEventHandlers-DeH74NdU.js";import"./Slot-CBut_XMV.js";import"./index.es-C0qDvsAq.js";import"./VStack-Cn_RGqfq.js";import"./OppgaveReservasjonForlengetModal-tBU_j_KA.js";import"./OpphevReservasjonModal-BQ8SLFBC.js";import"./useControllableState-DfAzX_fN.js";import"./ChevronRight-Dxl7riK3.js";import"./PersonHeadset-DzMW16HL.js";const R=k(c),W={title:"behandlingskoer/OppgaveHandlingerMenu",component:a,decorators:[R],render:({oppgave:o})=>{const m=[{key:e.OPPHEV_OPPGAVERESERVASJON.name,data:{}},{key:e.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,data:{brukerIdent:"teasdfa",navn:"Espen Utvikler"}},{key:e.FLYTT_RESERVASJON.name,data:{}},{key:e.FORLENG_OPPGAVERESERVASJON.name,data:{}}];return r.jsx(u,{data:m,requestApi:g,children:r.jsx(a,{oppgave:o,hentReserverteOppgaver:n("button-click"),setEnableTableEvents:n("button-click")})})}},t={args:{oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:l.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:E.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"},hentReserverteOppgaver:n("button-click"),setEnableTableEvents:n("button-click")}};var s,i,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const X=["Default"];export{t as Default,X as __namedExportsOrder,W as default};
