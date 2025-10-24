import{g as N,w as V,j as c}from"./iframe-ynvR1aa-.js";import{Z as A}from"./index.es-C6I7PSSH.js";import{u as d,a as R,F as m,i,w as S,n as _,b as s,c as O}from"./fagsakApi-CSmaGqZM.js";import{h as n,H as a,c as j}from"./index-CKpFjfa3.js";import{g as D}from"./withIntl-DaOiny0u.js";import{a as H}from"./alleKodeverk-BnsD7hyO.js";import{a as L}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{F as h,V as E}from"./FagsakData-BhpsHlBf.js";import{i as p}from"./initFetchFptilbake-CspdHVpU.js";import{B as u}from"./BehandlingMenuIndex-DsvFCOWo.js";import{m as G}from"./nb_NO-DoSdDVe_.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-BpFLoSDH.js";import"./index-Bvn51Lwf.js";import"./CheckmarkCircleFill-CYaLeEU-.js";import"./ExclamationmarkTriangleFill-B7ZHpX-B.js";import"./index.es-NMx4Uadh.js";import"./index-BaP7gGSs.js";import"./Popover-QGBI-asP.js";import"./Checkbox-BvMOjug4.js";import"./message-BBlFJ2An.js";import"./bind-BRsnqjMB.js";import"./index.es-BI-Eh53Y.js";import"./Link-C0jLh-3b.js";import"./Checkmark-CxwYnnWr.js";import"./Kjonnkode-DjBoP8-t.js";import"./Table-DH7KPXW8.js";import"./FaktaKort-jXMyYBVj.js";import"./eksterneLenker-CZTrovcW.js";import"./SettPaVentModalIndex-CKWfjQTf.js";import"./useBehandlingPollingOperasjoner-vu_NuiY8.js";import"./behandlingApi-cO32cEXT.js";import"./ErrorBoundary-DK4t2rx_.js";import"./IngenBehandlingValgtPanel-AK7PSoJR.js";import"./apiPollingStatus-nT-xUZgL.js";import"./useKodeverk-CHZoG03r.js";import"./tilbakekrevingUtils-B4wJRSdP.js";import"./paths-_Yndq9xs.js";import"./Dropdown-N3hox9pR.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,w=D(G),r=t=>j(S(_(i.links.find(e=>e.rel===t)??i.sakLinks.find(e=>e.rel===t)??p.links.find(e=>e.rel===t)??p.sakLinks.find(e=>e.rel===t)).href)),y={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!0,vergeBehandlingsmeny:E.OPPRETT},b=[{versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:"BT-004",status:"UTRED",behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:y}],k={saksnummer:"123",fagsakYtelseType:"FP",status:"UBEH",behandlinger:b,sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[]},K=[n.get(m.INIT_FETCH_FPTILBAKE,()=>a.json(p)),n.get(r(s.KODEVERK),()=>a.json(H)),n.get(r(s.KODEVERK_FPTILBAKE),()=>a.json(L)),n.get(r(s.KAN_TILBAKEKREVING_OPPRETTES),()=>a.json(!1)),n.get(r(s.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>a.json(!1)),n.post(r(s.ENDRE_SAK_MARKERING),()=>new a(null,{status:200}))],Ie={title:"fagsak/BehandlingMenuIndex",decorators:[w,N,V],component:u,parameters:{msw:{handlers:K.concat(n.get(m.INIT_FETCH,()=>a.json(i)))}},args:{setBehandling:f("button-click"),hentOgSettBehandling:f("button-click")},render:t=>{const{status:e}=d(O()),{kodeverkOptions:F,fptilbake:T}=R(),{data:B}=d(F(e==="success")),{data:I}=d(T.kodeverkOptions(e==="success"));return B&&I?c.jsx(u,{...t}):c.jsx(A,{})}},l={args:{fagsakData:new h(k),behandlingUuid:"1"}},o={args:{fagsakData:new h(k)}},g={parameters:{msw:{handlers:K.concat(n.get(m.INIT_FETCH,()=>a.json({...i,innloggetBruker:{...i.innloggetBruker,kanVeilede:!0}})))}},args:{behandlingUuid:"1",fagsakData:new h({...k,behandlinger:[{...b[0],behandlingTillatteOperasjoner:{uuid:"1",behandlingFraBeslutter:!1,behandlingKanSendeMelding:!1,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!1,behandlingKanHenlegges:!1,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!1,behandlingKanSettesPaVent:!1,behandlingKanMerkesHaster:!0,vergeBehandlingsmeny:E.SKJUL}}]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
