import{g as w,w as U,j as c,G as H,B as P,F as y}from"./iframe-lfDIuZnd.js";import{X as x}from"./index.es-CdaMSA98.js";import{u as m,a as C,F as b,i as h,V as J,b as M,w as Y,n as Q,c as r,d as X}from"./fagsakApi-CD2Jrh7f.js";import{h as a,H as n,c as q}from"./index-CW7vuJ2T.js";import{g as z}from"./withIntl-D5TbP7z7.js";import{a as W}from"./alleKodeverk-DO07GSZv.js";import{a as Z}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{F as d}from"./FagsakData-P3KHKIxm.js";import{B as T}from"./BehandlingSupportIndex-BHTWdl6I.js";import{m as $}from"./nb_NO-D39UuuyA.js";import"./VStack-CXZ-xuB-.js";import"./index-Ck0MhVia.js";import"./CheckmarkCircleFill-Bu6YmzF6.js";import"./ExclamationmarkTriangleFill-BmEV_uHl.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-DFhLUJYY.js";import"./paths-BlEwqyPy.js";import"./DokumentIndex-BPr2n2M6.js";import"./DokumentLink-CgHvP7pf.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-B4PA_pAP.js";import"./message-9gnytQ3y.js";import"./Table-6GjCgIyV.js";import"./ChevronDown-CrzwDjuo.js";import"./Checkbox-BQmOQQCV.js";import"./StarFill-Fsp3DLyy.js";import"./SupportHeader-eGQsV_Z9.js";import"./ErrorBoundary-ByLO5slM.js";import"./IngenBehandlingValgtPanel-XVNSnxGt.js";import"./errorType-CdcZ532h.js";import"./HistorikkIndex-lXUs3lEQ.js";import"./MeldingIndex-Cicu_v0T.js";import"./index.es-CMpJRk1M.js";import"./Tag-CyXCI2BH.js";import"./Popover-C4Pvu8ho.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-D3it6vCI.js";import"./useKodeverk-BMXW-b9Y.js";import"./SettPaVentReadOnlyModal-DtTxC_oe.js";import"./TotrinnskontrollIndex-DpuxIR6J.js";import"./Checkmark-CLeDPSuI.js";import"./UtvidEllerMinskKnapp-BcEavL21.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,ee=z($),s=t=>q(Y(Q(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href)),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:J.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:P.REVURDERING,status:H.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},p={saksnummer:"123",fagsakYtelseType:y.FORELDREPENGER,status:M.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},Ye={title:"fagsak/BehandlingSupportIndex",decorators:[ee,w,U],component:T,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(W)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(Z)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:f("button-click"),toggleVisUtvidetBehandlingDetaljer:f("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(X()),{kodeverkOptions:_,fptilbake:G}=C(),{data:L}=m(_(e==="success")),{data:v}=m(G.kodeverkOptions(e==="success"));return L&&v?c.jsx(T,{...t}):c.jsx(x,{})}},i={args:{fagsakData:new d(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},g={args:{fagsakData:new d(p)}};var N,F,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...(A=(F=i.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var B,D,I;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var R,j,K;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(K=(j=l.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var S,O,V;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const Qe=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,g as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,Qe as __namedExportsOrder,Ye as default};
