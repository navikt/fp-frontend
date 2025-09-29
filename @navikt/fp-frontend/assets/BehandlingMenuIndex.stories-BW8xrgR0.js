import{k as I,w as A,j as u,B as V}from"./iframe-CsBD3T2M.js";import{Q as S}from"./index.es-DhJcGz6z.js";import{u as d,a as R,F as m,i,V as f,b as _,w as D,n as O,c as s,d as j}from"./fagsakApi-BJMA_Cxc.js";import{h as n,H as a,c as L}from"./index-BuAb35cs.js";import{g as H}from"./withIntl-xBvBB-WC.js";import{a as G}from"./alleKodeverk-DO07GSZv.js";import{a as w}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as p}from"./initFetchFptilbake-CspdHVpU.js";import{F as h}from"./FagsakData-EcIUMWsc.js";import{B as c}from"./BehandlingMenuIndex-BhW5v-s5.js";import{m as y}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-D90Uj1HC.js";import"./index-CmpEquNz.js";import"./CheckmarkCircleFill-CpyCiQqF.js";import"./ExclamationmarkTriangleFill-BcKqijKy.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./index.es-DDM2ueLX.js";import"./index-ytCJHYfH.js";import"./Popover-CmKg7-AU.js";import"./Checkbox-CollbgTs.js";import"./message-DllOlMsz.js";import"./bind-Ceq1xcaT.js";import"./index.es-Bj3rXCCI.js";import"./Link-Bwcjo2Gm.js";import"./Checkmark-iAS4qzNf.js";import"./Kjonnkode-DjBoP8-t.js";import"./Table-CrLUmXyP.js";import"./ErrorBoundary-CfZNV5Jn.js";import"./eksterneLenker-CZTrovcW.js";import"./IngenBehandlingValgtPanel-iah4s_Ou.js";import"./errorType-CR8mmZf7.js";import"./dokumentMalType-B-Xou3xH.js";import"./SettPaVentModalIndex-CYLXZKUf.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-BJXaghJ-.js";import"./behandlingApi-B_EUC-Rk.js";import"./apiPollingStatus-nT-xUZgL.js";import"./useKodeverk-CnL87gFS.js";import"./paths-6hRtqE8e.js";import"./Dropdown-HtjXTjUy.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,P=H(y),r=t=>L(D(O(i.links.find(e=>e.rel===t)??i.sakLinks.find(e=>e.rel===t)??p.links.find(e=>e.rel===t)??p.sakLinks.find(e=>e.rel===t)).href)),v={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!0,vergeBehandlingsmeny:f.OPPRETT},b=[{versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:"BT-004",status:V.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:v}],k={saksnummer:"123",fagsakYtelseType:"FP",status:_.UNDER_BEHANDLING,behandlinger:b,sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[]},K=[n.get(m.INIT_FETCH_FPTILBAKE,()=>a.json(p)),n.get(r(s.KODEVERK),()=>a.json(G)),n.get(r(s.KODEVERK_FPTILBAKE),()=>a.json(w)),n.get(r(s.KAN_TILBAKEKREVING_OPPRETTES),()=>a.json(!1)),n.get(r(s.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>a.json(!1)),n.post(r(s.ENDRE_SAK_MARKERING),()=>new a(null,{status:200}))],Re={title:"fagsak/BehandlingMenuIndex",decorators:[P,I,A],component:c,parameters:{msw:{handlers:K.concat(n.get(m.INIT_FETCH,()=>a.json(i)))}},args:{setBehandling:E("button-click"),hentOgSettBehandling:E("button-click")},render:t=>{const{status:e}=d(j()),{kodeverkOptions:F,fptilbake:B}=R(),{data:T}=d(F(e==="success")),{data:N}=d(B.kodeverkOptions(e==="success"));return T&&N?u.jsx(c,{...t}):u.jsx(S,{})}},l={args:{fagsakData:new h(k),behandlingUuid:"1"}},o={args:{fagsakData:new h(k)}},g={parameters:{msw:{handlers:K.concat(n.get(m.INIT_FETCH,()=>a.json({...i,innloggetBruker:{...i.innloggetBruker,kanVeilede:!0}})))}},args:{behandlingUuid:"1",fagsakData:new h({...k,behandlinger:[{...b[0],behandlingTillatteOperasjoner:{uuid:"1",behandlingFraBeslutter:!1,behandlingKanSendeMelding:!1,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!1,behandlingKanHenlegges:!1,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!1,behandlingKanSettesPaVent:!1,behandlingKanMerkesHaster:!0,vergeBehandlingsmeny:f.SKJUL}}]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const _e=["ValgNårBehandlingErValgt","ValgNårBehandlingIkkeErValgt","ValgNårVeileder"];export{l as ValgNårBehandlingErValgt,o as ValgNårBehandlingIkkeErValgt,g as ValgNårVeileder,_e as __namedExportsOrder,Re as default};
