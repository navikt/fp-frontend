import{g as D,w as I,j as c,a0 as R,I as K,F as j}from"./iframe-Bc6MnM7x.js";import{X as S}from"./index.es-CW8Ifkd4.js";import{u as m,a as O,F as b,i as h,V,b as _,w as G,n as L,c as r,d as v}from"./fagsakApi-61TSk5l1.js";import{h as a,H as n,c as w}from"./index-ds89wNPV.js";import{g as H}from"./withIntl-pio2QyUa.js";import{a as U}from"./alleKodeverk-DO07GSZv.js";import{a as P}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{F as d}from"./FagsakData-EcIUMWsc.js";import{B as f}from"./BehandlingSupportIndex-ClCAi1Fs.js";import{m as y}from"./nb_NO-D39UuuyA.js";import"./preload-helper-D9Z9MdNV.js";import"./VStack-CGCkUYkP.js";import"./index-W81j7pmO.js";import"./CheckmarkCircleFill-CBGq9CqH.js";import"./ExclamationmarkTriangleFill-CtXGS0og.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-CF6o3F-C.js";import"./paths-DE2XTfrE.js";import"./DokumentIndex-B8ssQyXs.js";import"./FaktaKort-kinCaR4W.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-DuLEcN12.js";import"./message-B4Vm-LEJ.js";import"./Table-B_I0ya4A.js";import"./ChevronDown-B9CuJd_S.js";import"./Checkbox-I6NeYG3C.js";import"./StarFill-BPh8-vkU.js";import"./SupportHeader-DI5rN6ZA.js";import"./ErrorBoundary-BxA26AKj.js";import"./IngenBehandlingValgtPanel-DAWKHpYO.js";import"./errorType-DysDNlDL.js";import"./HistorikkIndex-Bw7nEnN2.js";import"./MeldingIndex-BBLTlU4P.js";import"./index.es-ClPHeCRs.js";import"./Tag-CvELLh9d.js";import"./Popover-CytarwEP.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-SxSXLJAo.js";import"./useKodeverk-YFcdayx4.js";import"./SettPaVentReadOnlyModal-CrKrsqMb.js";import"./TotrinnskontrollIndex-z6M7X4sc.js";import"./Checkmark-CJXA0_7h.js";import"./UtvidEllerMinskKnapp-DlOeYh8b.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,x=H(y),s=t=>w(G(L(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href)),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:V.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:K.REVURDERING,status:R.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},p={saksnummer:"123",fagsakYtelseType:j.FORELDREPENGER,status:_.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},Le={title:"fagsak/BehandlingSupportIndex",decorators:[x,D,I],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(U)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(P)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(v()),{kodeverkOptions:N,fptilbake:F}=O(),{data:A}=m(N(e==="success")),{data:B}=m(F.kodeverkOptions(e==="success"));return A&&B?c.jsx(f,{...t}):c.jsx(S,{})}},i={args:{fagsakData:new d(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},g={args:{fagsakData:new d(p)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const ve=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,g as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,ve as __namedExportsOrder,Le as default};
