import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-PAph43QV.js";import{w as i,F as o,B as m}from"./iframe-B1D1pV9u.js";import{g as l}from"./withIntl-t2Q3Sraj.js";import{O as d}from"./OppgaveHandlingerMenu-BZi3BFG7.js";import{m as E}from"./nb_NO-DLS7tT1N.js";import"./useMutation-Cb1kSlAD.js";import"./FlyttReservasjonModal-C5dT8ha8.js";import"./index.es-DXWnYqE1.js";import"./index.es-egtfdZEU.js";import"./Loader-Cd5B1-KT.js";import"./Modal-DZ-W5KCz.js";import"./index-DtHGLxIc.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BKul69dv.js";import"./Tag-D2gWS7qA.js";import"./VStack-C8zeWQkJ.js";import"./index.es-Dh1iFmq1.js";import"./message-174L90AR.js";import"./OppgaveReservasjonForlengetModal-CrId2BkY.js";import"./NotatModal-gqcQ6m5n.js";import"./Portal-Bhe6qZPx.js";import"./ChevronRight-CdniEDmD.js";import"./PersonHeadset-BuYfz4Ck.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,i],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:o.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
