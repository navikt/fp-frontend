import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-smQbFDOI.js";import{w as s,F as a,B as o}from"./iframe-ByYO6KOV.js";import{g as p}from"./withIntl-J4d6Mu0I.js";import{O as i}from"./OppgaveHandlingerMenu-DKFZYmvL.js";import{m}from"./nb_NO-CIwUGrZ2.js";import"./useMutation-DhUbwNJY.js";import"./FlyttReservasjonModal-CmtPezqh.js";import"./index.es-OepJvX5g.js";import"./index.es-DP5DjQzJ.js";import"./Loader-BIWjlfaJ.js";import"./Modal-DZP-HGw0.js";import"./index-wy_rA9iY.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-DGYRj2vc.js";import"./Tag-DEr0G3vC.js";import"./VStack-D-2Qoep_.js";import"./message-M9Grmtq-.js";import"./OppgaveReservasjonForlengetModal-BW57wjlH.js";import"./NotatModal-DYevlVXn.js";import"./Portal-B38NdSq-.js";import"./ChevronRight-M9nPIeex.js";import"./PersonHeadset-C7akI6st.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=p(m),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,j as default};
