import{h as e,L as n,H as t}from"./fplosSaksbehandlerApi-BZvap6Fv.js";import{w as s,B as a}from"./iframe-D7QvprpV.js";import{O as p}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as o}from"./withIntl-CDv_6EOo.js";import{O as i}from"./OppgaveHandlingerMenu-B0TqbyMv.js";import{m}from"./nb_NO-8Dtbmjy8.js";import"./preload-helper-PPVm8Dsz.js";import"./useMutation-kE1L09dn.js";import"./FlyttReservasjonModal-gNq7uFX-.js";import"./index.es-B47NpgJ0.js";import"./index.es-DwtIUmGP.js";import"./Loader-B29GRadZ.js";import"./Modal-Bk7ZiD1t.js";import"./floating-ui.react-DY5XLlDo.js";import"./composeEventHandlers-qRCbCdav.js";import"./index-gSKIV6-f.js";import"./ChevronDown-Cs5YeVgB.js";import"./Tag-DJy__Sqy.js";import"./VStack-B9R60f1s.js";import"./OppgaveReservasjonForlengetModal-BshKkFCR.js";import"./NotatModal-DsYuncUa.js";import"./Portal-Bdnc4z5r.js";import"./ChevronRight-2cXkR1Co.js";import"./HourglassTopFilled-B5tkOX31.js";import"./PersonHeadset-BPw08QN0.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=o(m),G={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:a.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:p.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
