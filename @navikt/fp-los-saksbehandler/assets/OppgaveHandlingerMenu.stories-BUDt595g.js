import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-D0kriSNO.js";import{w as s,F as a,B as p}from"./iframe-6sLc6nWL.js";import{O as o}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as i}from"./withIntl-nMFV4D_u.js";import{O as l}from"./OppgaveHandlingerMenu-BGyDP__h.js";import{m}from"./nb_NO-CTGRyfFc.js";import"./preload-helper-D9Z9MdNV.js";import"./useMutation-Coz0oglK.js";import"./FlyttReservasjonModal-Dx52-NNi.js";import"./index.es-I3DalEUC.js";import"./index.es-BzBsaHxG.js";import"./Loader-Bsz5sjnH.js";import"./Modal-C9rYWZHM.js";import"./index-DmxU5NkJ.js";import"./composeEventHandlers-Ilc965z7.js";import"./Tag-BHN0w7_X.js";import"./VStack-_sYn5JF6.js";import"./OppgaveReservasjonForlengetModal-Em3putL0.js";import"./NotatModal-BG4lfSHv.js";import"./Portal-6ZIT7Q2v.js";import"./ChevronRight-DcI2uZ4-.js";import"./HourglassTopFilled-uL0wEN2R.js";import"./PersonHeadset-DgqrlkIq.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,g=i(m),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:l,decorators:[g,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:d("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[],oppgaveBehandlingStatus:o.UNDER_ARBEID}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }
  }
}`,...r.parameters?.docs?.source}}};const I=["Default"];export{r as Default,I as __namedExportsOrder,j as default};
