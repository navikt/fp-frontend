import{j as n}from"./jsx-runtime-QvZ8i92b.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as l}from"./behandlingStatus-CZkrUkra.js";import{B as d}from"./behandlingType-BdbjGMJD.js";import{F as u}from"./fagsakYtelseType-DI8GXtVr.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{g as c}from"./withIntl-DXHUjld2.js";import{a as g,b as E,r as k}from"./fplosSaksbehandlerRestApi-D8GFX0av.js";import"./index-uubelm5h.js";import"./useRestApiRunner-PStp57wB.js";import{O as s}from"./OpphevReservasjonModal-BQ8SLFBC.js";import{m as R}from"./nb_NO-C4RkFlUy.js";import"./v4-CQkTLCs1.js";import"./index.es-Bk8hSli7.js";import"./index.es-UbZaQCW7.js";import"./dayjs.min-BsYQKNhR.js";import"./Loader-CXblLYfE.js";import"./index.es-DXmPf6Wl.js";import"./ChevronDown-C80NRibc.js";import"./Tag-DyOxNX7P.js";import"./index-C5xsJX-I.js";import"./Modal-BG2sORRw.js";import"./composeEventHandlers-DeH74NdU.js";import"./Slot-CBut_XMV.js";import"./index.es-C0qDvsAq.js";const h=c(R),q={title:"behandlingskoer/OpphevReservasjonModal",component:s,decorators:[h],render:({oppgave:i,hentReserverteOppgaver:p})=>{const m=[{key:g.OPPHEV_OPPGAVERESERVASJON.name,data:{}}];return n.jsx(E,{data:m,requestApi:k,children:n.jsx(s,{oppgave:i,closeModal:t("button-click"),hentReserverteOppgaver:p})})}},e={args:{closeModal:t("button-click"),hentReserverteOppgaver:t("button-click"),oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,behandlingStatus:l.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:u.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}}};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    closeModal: action('button-click'),
    hentReserverteOppgaver: action('button-click'),
    oppgave: {
      id: 1,
      status: {
        erReservert: false,
        flyttetReservasjon: {
          tidspunkt: '2019-02-02',
          uid: '23423',
          navn: 'Espen Utvikler',
          begrunnelse: 'Flyttet'
        }
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
    }
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,q as default};
