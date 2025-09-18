import{g as I,w as A,j as u,X as R,B as V}from"./iframe-DiXKBbgR.js";import{Q as S}from"./index.es-BzP_Lhlo.js";import{u as d,a as _,F as m,i,V as f,b as D,w as O,n as j,c as s,d as L}from"./fagsakApi-D5axd_lj.js";import{h as n,H as a,c as H}from"./index-DZrXCkKm.js";import{g as G}from"./withIntl-Cgc_G1CV.js";import{a as w}from"./alleKodeverk-DO07GSZv.js";import{a as y}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as p}from"./initFetchFptilbake-CspdHVpU.js";import{F as h}from"./FagsakData-EcIUMWsc.js";import{B as E}from"./BehandlingMenuIndex-OlgRrLaG.js";import{m as P}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-C7JvNPOk.js";import"./index-CaQ7-otG.js";import"./CheckmarkCircleFill-BOHc0Xj-.js";import"./ExclamationmarkTriangleFill-CEeZOHVH.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./index.es-DOFjUKTE.js";import"./index-Dj9FmmxJ.js";import"./Popover-nUANRpHZ.js";import"./Checkbox-BAlo7UBm.js";import"./message-Cd7NpIaj.js";import"./bind-aTD010B5.js";import"./index.es-CvXwvmhy.js";import"./Link-BUhNzaOB.js";import"./Checkmark-Dg3jP_Jz.js";import"./Kjonnkode-DjBoP8-t.js";import"./Table-JqulxqyT.js";import"./FaktaKort-7e9CJlkE.js";import"./eksterneLenker-DcE6CUbm.js";import"./dokumentMalType-B-Xou3xH.js";import"./SettPaVentModalIndex-DkS6607f.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-C6WPjZbb.js";import"./behandlingApi-BHueB5yG.js";import"./apiPollingStatus-nT-xUZgL.js";import"./errorType-B_fxOFvj.js";import"./useKodeverk-DVwO5mzp.js";import"./paths-C9sYxlSw.js";import"./Dropdown-BNOe-x4f.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,U=G(P),r=t=>H(O(j(i.links.find(e=>e.rel===t)??i.sakLinks.find(e=>e.rel===t)??p.links.find(e=>e.rel===t)??p.sakLinks.find(e=>e.rel===t)).href)),v={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!0,vergeBehandlingsmeny:f.OPPRETT},b=[{versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:V.REVURDERING,status:R.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:v}],k={saksnummer:"123",fagsakYtelseType:"FP",status:D.UNDER_BEHANDLING,behandlinger:b,sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[]},K=[n.get(m.INIT_FETCH_FPTILBAKE,()=>a.json(p)),n.get(r(s.KODEVERK),()=>a.json(w)),n.get(r(s.KODEVERK_FPTILBAKE),()=>a.json(y)),n.get(r(s.KAN_TILBAKEKREVING_OPPRETTES),()=>a.json(!1)),n.get(r(s.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>a.json(!1)),n.post(r(s.ENDRE_SAK_MARKERING),()=>new a(null,{status:200}))],Se={title:"fagsak/BehandlingMenuIndex",decorators:[U,I,A],component:E,parameters:{msw:{handlers:K.concat(n.get(m.INIT_FETCH,()=>a.json(i)))}},args:{setBehandling:c("button-click"),hentOgSettBehandling:c("button-click")},render:t=>{const{status:e}=d(L()),{kodeverkOptions:F,fptilbake:B}=_(),{data:T}=d(F(e==="success")),{data:N}=d(B.kodeverkOptions(e==="success"));return T&&N?u.jsx(E,{...t}):u.jsx(S,{})}},l={args:{fagsakData:new h(k),behandlingUuid:"1"}},o={args:{fagsakData:new h(k)}},g={parameters:{msw:{handlers:K.concat(n.get(m.INIT_FETCH,()=>a.json({...i,innloggetBruker:{...i.innloggetBruker,kanVeilede:!0}})))}},args:{behandlingUuid:"1",fagsakData:new h({...k,behandlinger:[{...b[0],behandlingTillatteOperasjoner:{uuid:"1",behandlingFraBeslutter:!1,behandlingKanSendeMelding:!1,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!1,behandlingKanHenlegges:!1,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!1,behandlingKanSettesPaVent:!1,behandlingKanMerkesHaster:!0,vergeBehandlingsmeny:f.SKJUL}}]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        ...ALLE_BEHANDLINGER[0],
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
}`,...g.parameters?.docs?.source}}};const _e=["ValgNårBehandlingErValgt","ValgNårBehandlingIkkeErValgt","ValgNårVeileder"];export{l as ValgNårBehandlingErValgt,o as ValgNårBehandlingIkkeErValgt,g as ValgNårVeileder,_e as __namedExportsOrder,Se as default};
