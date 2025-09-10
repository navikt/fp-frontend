import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-C4EheF9Y.js";import{w as s,B as a}from"./iframe-CPFa3gmr.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-C00_soG9.js";import{O as i}from"./OppgaveHandlingerMenu-5BgynDVQ.js";import{m}from"./nb_NO-C12JtpDU.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-C7w5bHmz.js";import"./FlyttReservasjonModal-BGxmViOl.js";import"./index.es-BBSxhl5l.js";import"./index.es--0PdulrM.js";import"./Loader-CB5uaQ93.js";import"./Modal-D_mzxU70.js";import"./floating-ui.react-BRI3OAgS.js";import"./composeEventHandlers-BvJ_3eqJ.js";import"./index-J920Gb80.js";import"./ChevronDown-DAom9lm-.js";import"./Tag-Rq661IkE.js";import"./VStack-Bb4vw2vW.js";import"./OppgaveReservasjonForlengetModal-BLIokEXK.js";import"./NotatModal-BUR4sIRQ.js";import"./Portal-D9088itx.js";import"./ChevronRight-DGRy0qGk.js";import"./HourglassTopFilled-tz3SqQYQ.js";import"./PersonHeadset-KoLOGJPP.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '1',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }
  }
}`,...r.parameters?.docs?.source}}};const L=["Default"];export{r as Default,L as __namedExportsOrder,G as default};
