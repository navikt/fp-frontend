import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-P9I5UXps.js";import{w as i,F as o,B as m}from"./iframe-C2Bmoqpo.js";import{g as l}from"./withIntl-BHIQfUJk.js";import{O as d}from"./OppgaveHandlingerMenu-d_dhPEwd.js";import{m as E}from"./nb_NO-LpCgDUxH.js";import"./useMutation-DV6ToaFV.js";import"./FlyttReservasjonModal-DUFCadFR.js";import"./index.es-B3kfqTGZ.js";import"./index.es-BujUic_-.js";import"./Loader-BnB4ugVX.js";import"./Modal-DeetvLKW.js";import"./index-92Pmthch.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-CVXhaUtN.js";import"./Tag-Deuonrqi.js";import"./VStack-DVuexD08.js";import"./index.es-CDdrYzbV.js";import"./message-DANWFqkS.js";import"./OppgaveReservasjonForlengetModal-4VeFLJva.js";import"./NotatModal-C7CpDAGw.js";import"./Portal-DSr_xOwW.js";import"./ChevronRight-C9JOjJNE.js";import"./PersonHeadset-B_cVL6GE.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,i],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:o.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const H=["Default"];export{r as Default,H as __namedExportsOrder,j as default};
