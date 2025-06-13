import{a as e,L as t,H as n}from"./fplosSaksbehandlerApi-DrqWvl2Z.js";import{w as i,F as o,B as m}from"./iframe-Bws3bu95.js";import{g as l}from"./withIntl-Bt0Rz11j.js";import{O as d}from"./OppgaveHandlingerMenu-DtcY-MTc.js";import{m as E}from"./nb_NO-BSp1OVhR.js";import"./useMutation-BpzAYnnJ.js";import"./FlyttReservasjonModal-BToxcsCs.js";import"./index.es-CmOCzFp9.js";import"./index.es-Bwml7v1q.js";import"./Loader-BK_HnObf.js";import"./Modal-BvWUmwaz.js";import"./index-BY5qreuI.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-Ck61LRMw.js";import"./Tag-CUSSmyMF.js";import"./VStack-CEGFtULC.js";import"./index.es-zHyhEYNi.js";import"./message-Cle8p4Ck.js";import"./OppgaveReservasjonForlengetModal-DWR0mjKD.js";import"./NotatModal-DTfcRWVr.js";import"./Portal-DyOIr1xA.js";import"./ChevronRight-CNZYTDEH.js";import"./PersonHeadset-DbrvuNlA.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,u=l(E),j={title:"behandlingskoer/OppgaveHandlingerMenu",component:d,decorators:[u,i],parameters:{msw:{handlers:[e.post(t.OPPHEV_OPPGAVERESERVASJON,()=>n.json({})),e.post(t.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK,()=>n.json({brukerIdent:"teasdfa",navn:"Espen Utvikler"})),e.post(t.FLYTT_RESERVASJON,()=>n.json({})),e.post(t.FORLENG_OPPGAVERESERVASJON,()=>n.json({}))]}},args:{setEnableTableEvents:g("button-click"),brukernavn:"T232332"}},r={args:{oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"},reservertTilTidspunkt:"2021-08-02T00:54:25.455"},saksnummer:"1234",personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:o.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1",andreKriterier:[]}}};var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
