import{g as w,w as H,j as c,G as U,B as P,F as y}from"./iframe-CieR7k8J.js";import{X as x}from"./index.es-BO-o7llL.js";import{u as m,a as C,F as b,i as h,V as M,b as J,w as Y,n as Q,c as r,d as X}from"./fagsakApi-ByEq8Mzo.js";import{h as a,H as n,c as q}from"./index-W4DJkiAI.js";import{g as z}from"./withIntl-CLQFbeSg.js";import{a as W}from"./alleKodeverk-DO07GSZv.js";import{a as Z}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{F as d}from"./FagsakData-P3KHKIxm.js";import{B as f}from"./BehandlingSupportIndex-B-qHO4fF.js";import{m as $}from"./nb_NO-D39UuuyA.js";import"./VStack-CaagOIyh.js";import"./index-C7KXsqNq.js";import"./CheckmarkCircleFill-DPiv6D22.js";import"./ExclamationmarkTriangleFill-w33cdxpA.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-CfJ3fE5u.js";import"./paths-Crn_Q2sD.js";import"./DokumentIndex-BgIrag85.js";import"./DokumentLink-D32Hc8kw.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-hqv2Q1Oz.js";import"./message-C7ei2db-.js";import"./Table-DqIJh-jq.js";import"./ChevronDown-Dc5Qt_rU.js";import"./Checkbox-I5u9queA.js";import"./StarFill-7n3RdQzy.js";import"./SupportHeader-C6kH9uHp.js";import"./ErrorBoundary-JBiUS3VF.js";import"./IngenBehandlingValgtPanel-C8uAfJYl.js";import"./errorType-BjnMMLTJ.js";import"./HistorikkIndex-Dl0MnrFk.js";import"./MeldingIndex-BOrldAqi.js";import"./index.es-L27AQpVk.js";import"./Tag-Dy-rtZ5y.js";import"./Popover-Dwd79hh-.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-OxdG9Nli.js";import"./useKodeverk-Dx2RqYq5.js";import"./SettPaVentReadOnlyModal-C5XeRKkU.js";import"./TotrinnskontrollIndex-DeYgoLeY.js";import"./Checkmark-Bqh7EimA.js";import"./UtvidEllerMinskKnapp-PydAxR1v.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,ee=z($),s=t=>q(Y(Q(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href)),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:M.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:P.REVURDERING,status:U.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},p={saksnummer:"123",fagsakYtelseType:y.FORELDREPENGER,status:J.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},Ye={title:"fagsak/BehandlingSupportIndex",decorators:[ee,w,H],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(W)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(Z)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(X()),{kodeverkOptions:_,fptilbake:G}=C(),{data:L}=m(_(e==="success")),{data:v}=m(G.kodeverkOptions(e==="success"));return L&&v?c.jsx(f,{...t}):c.jsx(x,{})}},i={args:{fagsakData:new d(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},g={args:{fagsakData:new d(p)}};var N,F,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var R,K,j;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(j=(K=l.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};var S,O,V;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...(V=(O=g.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const Qe=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,g as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,Qe as __namedExportsOrder,Ye as default};
