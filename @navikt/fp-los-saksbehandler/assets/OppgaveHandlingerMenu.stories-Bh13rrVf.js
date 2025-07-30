import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-C_BiMBf0.js";import{w as s,F as a,B as o}from"./iframe-hNqesRcp.js";import{g as p}from"./withIntl-BEBqK_wJ.js";import{O as i}from"./OppgaveHandlingerMenu-B-oMrTau.js";import{m}from"./nb_NO-CdMwuD92.js";import"./useMutation-ImEZStIl.js";import"./FlyttReservasjonModal-DIhGC0yB.js";import"./index.es-P77Vc6LQ.js";import"./index.es-DfQqHWLi.js";import"./index.es-CUkkbtKU.js";import"./Loader-YGnArDwq.js";import"./Modal-0k8TAjQ8.js";import"./index-BpNC3YFo.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Xxm36YLu.js";import"./Tag-DVtEO-BQ.js";import"./VStack-5r37413G.js";import"./index.es-loPsd4YV.js";import"./message-BYzHJXfW.js";import"./OppgaveReservasjonForlengetModal-C1D-xAyc.js";import"./NotatModal-CExVi37x.js";import"./Portal-DHrlVjcM.js";import"./ChevronRight-fLetyFPk.js";import"./PersonHeadset-BDRxuyNl.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=p(m),U={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const V=["Default"];export{r as Default,V as __namedExportsOrder,U as default};
