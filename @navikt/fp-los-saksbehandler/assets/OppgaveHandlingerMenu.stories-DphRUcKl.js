import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-D2WcQp54.js";import{w as p,F as i,B as m}from"./iframe-Cb_ISg--.js";import{g as l}from"./withIntl-DginZqZZ.js";import{O as d}from"./OppgaveHandlingerMenu-Dg1TMIkY.js";import{m as E}from"./nb_NO-Cz-DehRK.js";import"./useMutation-Dse_DItv.js";import"./FlyttReservasjonModal-inlmcaXr.js";import"./index.es-CFfJp_UP.js";import"./index.es-0GbpNu_8.js";import"./Loader-BPbWQrE7.js";import"./Modal-GY09lf0u.js";import"./index-DDfoBEuY.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-QHs8JhIS.js";import"./Tag-8oyzaAVR.js";import"./VStack-D_z2lemC.js";import"./index.es-MLu144aj.js";import"./message-DxCmWH9K.js";import"./OppgaveReservasjonForlengetModal-BLb2Xlfz.js";import"./NotatModal-DXiN4LZ5.js";import"./Portal-Dsx1mL3h.js";import"./ChevronRight-DfuiG5nP.js";import"./PersonHeadset-CeIMFh2Y.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),Y={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,p],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:i.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    oppgave: {
      id: 1,
      reservasjonStatus: {
        erReservert: false,
        flyttetReservasjon: {
          tidspunkt: '2019-02-02',
          uid: '23423',
          navn: 'Espen Utvikler',
          begrunnelse: 'Flyttet'
        },
        reservertTilTidspunkt: '2021-08-02T00:54:25.455'
      },
      saksnummer: '1234',
      personnummer: '1212',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '1',
      andreKriterier: []
    }
  }
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const H=["Default"];export{r as Default,H as __namedExportsOrder,Y as default};
