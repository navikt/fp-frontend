import{g as w,w as U,j as c,G as H,B as P,F as y}from"./iframe-BCrnBfGx.js";import{Q as x}from"./index.es-tGhOXKHX.js";import{u as m,a as C,F as b,i as h,V as Q,b as J,w as M,n as Y,c as r,d as q}from"./fagsakApi-CBdMxIKf.js";import{h as a,H as n,c as z}from"./index-B6spuSh-.js";import{g as W}from"./withIntl-BlJS7LM1.js";import{a as X}from"./alleKodeverk-DO07GSZv.js";import{a as Z}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{F as d}from"./FagsakData-P3KHKIxm.js";import{B as T}from"./BehandlingSupportIndex-CvGDGjFl.js";import{m as $}from"./nb_NO-D39UuuyA.js";import"./VStack-CQLy9gat.js";import"./index-CNm9irjX.js";import"./CheckmarkCircleFill-B2Qoszxr.js";import"./ExclamationmarkTriangleFill-Cam7LfLA.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-BTybdKGl.js";import"./paths-Dps4Eoab.js";import"./DokumentIndex-CzZQalOM.js";import"./DokumentLink-i4z5MA3m.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-Cfpqk-_y.js";import"./message-y5Y9LRqh.js";import"./Table-wggr4bk4.js";import"./ChevronDown-DKrgkVkx.js";import"./Checkbox-CX0GZ03u.js";import"./StarFill-DrJzt6_j.js";import"./SupportHeader-ftodq9Fe.js";import"./ErrorBoundary-COLkZu_u.js";import"./IngenBehandlingValgtPanel-cWc1Nx-n.js";import"./errorType-yPs-cyaW.js";import"./HistorikkIndex-CrvH52b0.js";import"./MeldingIndex-DYXd-URz.js";import"./index.es-CKhTp_QE.js";import"./Tag-ghpMe2od.js";import"./Popover-DLa1I-h2.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-CrOC4R3W.js";import"./useKodeverk-BwlNxrQJ.js";import"./SettPaVentReadOnlyModal-CKDOSzwP.js";import"./TotrinnskontrollIndex-DVkrMaH0.js";import"./Checkmark-CWYAPVBe.js";import"./UtvidEllerMinskKnapp-DaytIu1g.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,ee=W($),s=t=>z(M(Y(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href)),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:Q.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:P.REVURDERING,status:H.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},p={saksnummer:"123",fagsakYtelseType:y.FORELDREPENGER,status:J.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},Me={title:"fagsak/BehandlingSupportIndex",decorators:[ee,w,U],component:T,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(X)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(Z)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:f("button-click"),toggleVisUtvidetBehandlingDetaljer:f("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(q()),{kodeverkOptions:_,fptilbake:G}=C(),{data:L}=m(_(e==="success")),{data:v}=m(G.kodeverkOptions(e==="success"));return L&&v?c.jsx(T,{...t}):c.jsx(x,{})}},i={args:{fagsakData:new d(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},g={args:{fagsakData:new d(p)}};var N,F,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const Ye=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,g as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,Ye as __namedExportsOrder,Me as default};
