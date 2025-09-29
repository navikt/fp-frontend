import{k as I,w as A,j as u,B as V}from"./iframe-CXy1SQYV.js";import{Q as S}from"./index.es-s-MPZQXJ.js";import{u as d,a as R,F as m,i,V as f,b as _,w as D,n as O,c as s,d as j}from"./fagsakApi-BeLiGKxN.js";import{h as n,H as a,c as L}from"./index-CMW1nJDh.js";import{g as H}from"./withIntl-DND26XXN.js";import{a as G}from"./alleKodeverk-DO07GSZv.js";import{a as w}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as p}from"./initFetchFptilbake-CspdHVpU.js";import{F as h}from"./FagsakData-EcIUMWsc.js";import{B as c}from"./BehandlingMenuIndex-D7UImBn-.js";import{m as y}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-DcF40O_v.js";import"./index-t6QNXaX7.js";import"./CheckmarkCircleFill-Com79Hyx.js";import"./ExclamationmarkTriangleFill-B6mdnf3A.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./index.es-CdljjSKN.js";import"./index-DQwyXHA2.js";import"./Popover-QtTluKNQ.js";import"./Checkbox-71J7IWt8.js";import"./message-CYj9KsSt.js";import"./bind-wrPDSPnq.js";import"./index.es-DEo0fTmc.js";import"./Link-BPDsJfE7.js";import"./Checkmark-D4ZqSncC.js";import"./Kjonnkode-DjBoP8-t.js";import"./Table-CYkt-yDN.js";import"./ErrorBoundary-D-0eAXHJ.js";import"./eksterneLenker-CZTrovcW.js";import"./IngenBehandlingValgtPanel-CnTRCu5R.js";import"./errorType-CR8mmZf7.js";import"./dokumentMalType-B-Xou3xH.js";import"./SettPaVentModalIndex-B5CThgrg.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-BF8jmR9k.js";import"./behandlingApi-DxzYXA0d.js";import"./apiPollingStatus-nT-xUZgL.js";import"./useKodeverk-CDxyb-iT.js";import"./paths-DF6WiQl2.js";import"./Dropdown-B6MqQ1kd.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,P=H(y),r=t=>L(D(O(i.links.find(e=>e.rel===t)??i.sakLinks.find(e=>e.rel===t)??p.links.find(e=>e.rel===t)??p.sakLinks.find(e=>e.rel===t)).href)),v={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!0,vergeBehandlingsmeny:f.OPPRETT},b=[{versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:"BT-004",status:V.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:v}],k={saksnummer:"123",fagsakYtelseType:"FP",status:_.UNDER_BEHANDLING,behandlinger:b,sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[]},K=[n.get(m.INIT_FETCH_FPTILBAKE,()=>a.json(p)),n.get(r(s.KODEVERK),()=>a.json(G)),n.get(r(s.KODEVERK_FPTILBAKE),()=>a.json(w)),n.get(r(s.KAN_TILBAKEKREVING_OPPRETTES),()=>a.json(!1)),n.get(r(s.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>a.json(!1)),n.post(r(s.ENDRE_SAK_MARKERING),()=>new a(null,{status:200}))],Re={title:"fagsak/BehandlingMenuIndex",decorators:[P,I,A],component:c,parameters:{msw:{handlers:K.concat(n.get(m.INIT_FETCH,()=>a.json(i)))}},args:{setBehandling:E("button-click"),hentOgSettBehandling:E("button-click")},render:t=>{const{status:e}=d(j()),{kodeverkOptions:F,fptilbake:B}=R(),{data:T}=d(F(e==="success")),{data:N}=d(B.kodeverkOptions(e==="success"));return T&&N?u.jsx(c,{...t}):u.jsx(S,{})}},l={args:{fagsakData:new h(k),behandlingUuid:"1"}},o={args:{fagsakData:new h(k)}},g={parameters:{msw:{handlers:K.concat(n.get(m.INIT_FETCH,()=>a.json({...i,innloggetBruker:{...i.innloggetBruker,kanVeilede:!0}})))}},args:{behandlingUuid:"1",fagsakData:new h({...k,behandlinger:[{...b[0],behandlingTillatteOperasjoner:{uuid:"1",behandlingFraBeslutter:!1,behandlingKanSendeMelding:!1,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!1,behandlingKanHenlegges:!1,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!1,behandlingKanSettesPaVent:!1,behandlingKanMerkesHaster:!0,vergeBehandlingsmeny:f.SKJUL}}]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
