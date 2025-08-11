import{g as D,w as I,j as c,a0 as R,I as K,F as j}from"./iframe-CnzAQIke.js";import{X as S}from"./index.es-D5Vm-hBw.js";import{u as m,a as O,F as b,i as h,V,b as _,w as G,n as L,c as r,d as v}from"./fagsakApi-DyKD9eSm.js";import{h as a,H as n,c as w}from"./index-nIHNnJ_0.js";import{g as H}from"./withIntl-C9DF2j3L.js";import{a as U}from"./alleKodeverk-DO07GSZv.js";import{a as P}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{F as d}from"./FagsakData-EcIUMWsc.js";import{B as f}from"./BehandlingSupportIndex-BEqd_Rf8.js";import{m as y}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-D9Z9MdNV.js";import"./VStack-BX_B4ZsH.js";import"./index-D-dCar1_.js";import"./CheckmarkCircleFill-BXV5w3t4.js";import"./ExclamationmarkTriangleFill-BQ8sS53S.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-BjKXFmEF.js";import"./paths-B0dyOaP7.js";import"./DokumentIndex-CPqYBp45.js";import"./FaktaKort-DN24uKGE.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-DrgkAYnV.js";import"./message-2pXBggY0.js";import"./Table-nyjnVMzL.js";import"./ChevronDown-C1FIsIVN.js";import"./Checkbox-XF5qfpTy.js";import"./StarFill-COwy2Uux.js";import"./SupportHeader-CafTuR-u.js";import"./ErrorBoundary-B8uI1NtL.js";import"./IngenBehandlingValgtPanel-Bk5xWokY.js";import"./errorType-DN_K5MEe.js";import"./HistorikkIndex-DOf6tnJ-.js";import"./MeldingIndex-E9Gnc2-j.js";import"./index.es-CRvs16Hk.js";import"./Tag-CrDfwUs7.js";import"./Popover-D4ZTW0T0.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-2Xk1a3HR.js";import"./useKodeverk-DMgVu_N-.js";import"./SettPaVentReadOnlyModal-77SayUi8.js";import"./TotrinnskontrollIndex-r2_E8Oo_.js";import"./Checkmark--u00n7f7.js";import"./UtvidEllerMinskKnapp-CGVhuIDn.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,x=H(y),s=t=>w(G(L(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href)),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:V.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:K.REVURDERING,status:R.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},p={saksnummer:"123",fagsakYtelseType:j.FORELDREPENGER,status:_.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},Le={title:"fagsak/BehandlingSupportIndex",decorators:[x,D,I],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(U)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(P)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(v()),{kodeverkOptions:N,fptilbake:F}=O(),{data:A}=m(N(e==="success")),{data:B}=m(F.kodeverkOptions(e==="success"));return A&&B?c.jsx(f,{...t}):c.jsx(S,{})}},i={args:{fagsakData:new d(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},g={args:{fagsakData:new d(p)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
