import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-B2AQAuw2.js";import{w as i,F as o,B as m}from"./iframe-D70Tnhx0.js";import{g as l}from"./withIntl-CDsxDtZ7.js";import{O as d}from"./OppgaveHandlingerMenu-Cty0vCbf.js";import{m as E}from"./nb_NO-Bc_rXWi2.js";import"./useMutation-BPwQ7agt.js";import"./FlyttReservasjonModal-KhAK_x0w.js";import"./index.es-BFTRVqwT.js";import"./index.es-BVSFFaqq.js";import"./Loader-Dy4WN2O0.js";import"./Modal-CNbHlX5O.js";import"./index-CAFejsPJ.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-D13T2JtO.js";import"./Tag-C4X_taQ0.js";import"./VStack-CymHhqNl.js";import"./index.es-CHj6DLSC.js";import"./message-BuvWnYug.js";import"./OppgaveReservasjonForlengetModal-B6q4vAB1.js";import"./NotatModal-BsJKly7Q.js";import"./Portal-BVxXpFRI.js";import"./ChevronRight-BDKEhxoV.js";import"./PersonHeadset-BIyO2G3t.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,i],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:o.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
