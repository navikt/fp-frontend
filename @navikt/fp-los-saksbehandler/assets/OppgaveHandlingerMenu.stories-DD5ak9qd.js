import{a as e,L as n,H as t}from"./fplosSaksbehandlerApi-CHpAHwIy.js";import{w as p,F as i,B as m}from"./iframe-BVTG5DQn.js";import{g as l}from"./withIntl-TNySBBmS.js";import{O as d}from"./OppgaveHandlingerMenu-BXTG8S9W.js";import{m as E}from"./nb_NO-Cd-arOzM.js";import"./useMutation-CMM1t-yj.js";import"./FlyttReservasjonModal-sDuo19S1.js";import"./index.es-CSoebvA5.js";import"./index.es-p2I_thuD.js";import"./Loader-BR3iPa-G.js";import"./Modal-CuZXMraw.js";import"./index-8H-CvFi6.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-B9aWN_JB.js";import"./Tag-CkjPnsoN.js";import"./VStack-D8YIQLAv.js";import"./message-DbQbEmJn.js";import"./OppgaveReservasjonForlengetModal-CneqqmFt.js";import"./NotatModal-ClBsadwL.js";import"./Portal-BvRXXLfG.js";import"./ChevronRight-BqE01Iia.js";import"./PersonHeadset-iIeB0LXi.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),V={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,p],parameters:{msw:{handlers:[e.post(n.OPPHEV_OPPGAVERESERVASJON,()=>t.json({})),e.post(n.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>t.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(n.FLYTT_RESERVASJON,()=>t.json({})),e.post(n.FORLENG_OPPGAVERESERVASJON,()=>t.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,reservasjonStatus:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:i.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const Y=["Default"];export{r as Default,Y as __namedExportsOrder,V as default};
