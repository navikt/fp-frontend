import{g as N,w as V,j as c}from"./iframe-D_b5tSRA.js";import{Z as A}from"./index.es-wSAPzoqN.js";import{u as d,a as R,F as m,i,w as S,n as _,b as s,c as O}from"./fagsakApi-DQsk5Mj6.js";import{h as n,H as a,c as j}from"./index-Bg4Mzsp1.js";import{g as D}from"./withIntl-pnOgCKQu.js";import{a as H}from"./alleKodeverk-BnsD7hyO.js";import{a as L}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{F as h,V as E}from"./FagsakData-BhpsHlBf.js";import{i as p}from"./initFetchFptilbake-CspdHVpU.js";import{B as u}from"./BehandlingMenuIndex-CREvIVnl.js";import{m as G}from"./nb_NO-DoSdDVe_.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-Dp01Wt-e.js";import"./index-B9jaLmxr.js";import"./CheckmarkCircleFill-idUAWyJz.js";import"./ExclamationmarkTriangleFill-Bd5RJjt5.js";import"./index.es-fMmada3k.js";import"./index-DIMg5482.js";import"./Popover-CrgiSVwS.js";import"./Checkbox-Lqv1fh5A.js";import"./message-CC48y34_.js";import"./bind-DBn5X46w.js";import"./index.es-QQxBN4Z8.js";import"./Link-mZwSyAx9.js";import"./Checkmark-B_CHYcVD.js";import"./Kjonnkode-DjBoP8-t.js";import"./Table-ZPL416KL.js";import"./FaktaKort-CPTqwuq1.js";import"./eksterneLenker-CZTrovcW.js";import"./SettPaVentModalIndex-B2V28n7H.js";import"./useBehandlingPollingOperasjoner-Dsdsbuth.js";import"./behandlingApi-DSvcTBW7.js";import"./ErrorBoundary-BIPNpIAb.js";import"./IngenBehandlingValgtPanel-Bq6SHiPe.js";import"./apiPollingStatus-nT-xUZgL.js";import"./useKodeverk-FV-ldEJc.js";import"./tilbakekrevingUtils-B4wJRSdP.js";import"./paths-D9z80i1n.js";import"./Dropdown-D6U77594.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,w=D(G),r=t=>j(S(_(i.links.find(e=>e.rel===t)??i.sakLinks.find(e=>e.rel===t)??p.links.find(e=>e.rel===t)??p.sakLinks.find(e=>e.rel===t)).href)),y={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!0,vergeBehandlingsmeny:E.OPPRETT},b=[{versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:"BT-004",status:"UTRED",behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:y}],k={saksnummer:"123",fagsakYtelseType:"FP",status:"UBEH",behandlinger:b,sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[]},K=[n.get(m.INIT_FETCH_FPTILBAKE,()=>a.json(p)),n.get(r(s.KODEVERK),()=>a.json(H)),n.get(r(s.KODEVERK_FPTILBAKE),()=>a.json(L)),n.get(r(s.KAN_TILBAKEKREVING_OPPRETTES),()=>a.json(!1)),n.get(r(s.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>a.json(!1)),n.post(r(s.ENDRE_SAK_MARKERING),()=>new a(null,{status:200}))],Ie={title:"fagsak/BehandlingMenuIndex",decorators:[w,N,V],component:u,parameters:{msw:{handlers:K.concat(n.get(m.INIT_FETCH,()=>a.json(i)))}},args:{setBehandling:f("button-click"),hentOgSettBehandling:f("button-click")},render:t=>{const{status:e}=d(O()),{kodeverkOptions:F,fptilbake:T}=R(),{data:B}=d(F(e==="success")),{data:I}=d(T.kodeverkOptions(e==="success"));return B&&I?c.jsx(u,{...t}):c.jsx(A,{})}},l={args:{fagsakData:new h(k),behandlingUuid:"1"}},o={args:{fagsakData:new h(k)}},g={parameters:{msw:{handlers:K.concat(n.get(m.INIT_FETCH,()=>a.json({...i,innloggetBruker:{...i.innloggetBruker,kanVeilede:!0}})))}},args:{behandlingUuid:"1",fagsakData:new h({...k,behandlinger:[{...b[0],behandlingTillatteOperasjoner:{uuid:"1",behandlingFraBeslutter:!1,behandlingKanSendeMelding:!1,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!1,behandlingKanHenlegges:!1,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!1,behandlingKanSettesPaVent:!1,behandlingKanMerkesHaster:!0,vergeBehandlingsmeny:E.SKJUL}}]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: HANDLERS.concat(http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json({
        ...initFetchFpsak,
        innloggetBruker: {
          ...initFetchFpsak.innloggetBruker,
          kanVeilede: true
        }
      })))
    }
  },
  args: {
    behandlingUuid: '1',
    fagsakData: new FagsakData({
      ...FAGSAK,
      behandlinger: [{
        ...ALLE_BEHANDLINGER[0]!,
        behandlingTillatteOperasjoner: {
          uuid: '1',
          behandlingFraBeslutter: false,
          behandlingKanSendeMelding: false,
          behandlingTilGodkjenning: false,
          behandlingKanBytteEnhet: false,
          behandlingKanHenlegges: false,
          behandlingKanGjenopptas: false,
          behandlingKanOpnesForEndringer: false,
          behandlingKanSettesPaVent: false,
          behandlingKanMerkesHaster: true,
          vergeBehandlingsmeny: VergeBehandlingmenyValg.SKJUL
        }
      }]
    })
  }
}`,...g.parameters?.docs?.source}}};const Ne=["ValgNårBehandlingErValgt","ValgNårBehandlingIkkeErValgt","ValgNårVeileder"];export{l as ValgNårBehandlingErValgt,o as ValgNårBehandlingIkkeErValgt,g as ValgNårVeileder,Ne as __namedExportsOrder,Ie as default};
