import{f as D,w as I,j as c,y as R,B as K,F as j}from"./iframe-DJJSZnKn.js";import{X as S}from"./index.es-B2hsJ5AR.js";import{u as m,a as O,F as b,i as h,V,b as _,w as G,n as L,c as r,d as v}from"./fagsakApi-BbQRt27Q.js";import{h as a,H as n,c as w}from"./index-PEUWckwW.js";import{g as H}from"./withIntl-DPniUT7o.js";import{a as U}from"./alleKodeverk-DO07GSZv.js";import{a as P}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{F as d}from"./FagsakData-EcIUMWsc.js";import{B as f}from"./BehandlingSupportIndex-Cb6cHSsZ.js";import{m as y}from"./nb_NO-D39UuuyA.js";import"./VStack-kA3Ou1js.js";import"./index-eMEDysWj.js";import"./CheckmarkCircleFill-dfDcZLqo.js";import"./ExclamationmarkTriangleFill-C-nhPJeK.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-B2SqF5FV.js";import"./paths-BMyMXs6G.js";import"./DokumentIndex-C0L-UxgF.js";import"./FaktaKort-C8YtQvXY.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-DJp8dLc4.js";import"./message-BkaVALjK.js";import"./Table-Cyo_wJan.js";import"./ChevronDown-6agPlW51.js";import"./Checkbox-DkWzoZXE.js";import"./StarFill-CROGlUj_.js";import"./SupportHeader-O00iUgHI.js";import"./ErrorBoundary-DoQqzAWo.js";import"./IngenBehandlingValgtPanel-COSij0n1.js";import"./errorType-yaOa_Uif.js";import"./HistorikkIndex-CF5tdn-V.js";import"./MeldingIndex-CnLUA8y-.js";import"./index.es-Cy3MUSDS.js";import"./Tag-u81lfUdD.js";import"./Popover-Xcjxk941.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-RW8kpyEI.js";import"./useKodeverk-CsJBGr58.js";import"./SettPaVentReadOnlyModal-CKfODWAi.js";import"./TotrinnskontrollIndex-CL52XLr6.js";import"./Checkmark--drHXPSc.js";import"./UtvidEllerMinskKnapp-De1TiR9B.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,x=H(y),s=t=>w(G(L(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href)),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:V.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:K.REVURDERING,status:R.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},p={saksnummer:"123",fagsakYtelseType:j.FORELDREPENGER,status:_.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},Ge={title:"fagsak/BehandlingSupportIndex",decorators:[x,D,I],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(U)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(P)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(v()),{kodeverkOptions:N,fptilbake:F}=O(),{data:A}=m(N(e==="success")),{data:B}=m(F.kodeverkOptions(e==="success"));return A&&B?c.jsx(f,{...t}):c.jsx(S,{})}},i={args:{fagsakData:new d(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},g={args:{fagsakData:new d(p)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData({
      ...FAGSAK,
      behandlinger: [{
        ...BEHANDLING,
        behandlingTillatteOperasjoner: {
          ...BEHANDLING_TILLATTE_OPERASJONER,
          behandlingFraBeslutter: true
        }
      }]
    }),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData({
      ...FAGSAK,
      behandlinger: [{
        ...BEHANDLING,
        behandlingTillatteOperasjoner: {
          ...BEHANDLING_TILLATTE_OPERASJONER,
          behandlingTilGodkjenning: true
        }
      }]
    }),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...g.parameters?.docs?.source}}};const Le=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,g as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,Le as __namedExportsOrder,Ge as default};
