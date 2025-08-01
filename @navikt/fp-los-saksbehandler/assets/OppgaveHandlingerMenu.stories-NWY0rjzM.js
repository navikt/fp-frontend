import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-VmWZgKW-.js";import{w as s,F as a,B as o}from"./iframe-CyPkD_ak.js";import{g as p}from"./withIntl-CIFsDVd0.js";import{O as i}from"./OppgaveHandlingerMenu-B5kx-p_p.js";import{m}from"./nb_NO-CRusyisS.js";import"./useMutation-BDyGKyio.js";import"./FlyttReservasjonModal-BmfBBKio.js";import"./index.es-CYQDWAXV.js";import"./index.es-naRtX646.js";import"./index.es-CVnPHYNh.js";import"./Loader-CY0_Js7v.js";import"./Modal-D50mm1Zy.js";import"./index-CpEopPp5.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CH8_dNCP.js";import"./Tag-CvXDIv8V.js";import"./VStack-CYvyhPBD.js";import"./index.es-FVdwy9rG.js";import"./message-D_e69ppz.js";import"./OppgaveReservasjonForlengetModal-ROWSCm7v.js";import"./NotatModal-BwRiGe19.js";import"./Portal-k5y8ZYq9.js";import"./ChevronRight-GKQL61kp.js";import"./PersonHeadset-XVL86nBO.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,d=p(m),U={title:"behandlingskoer/OppgaveHandlingerMenu",component:i,decorators:[d,s],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:l("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
