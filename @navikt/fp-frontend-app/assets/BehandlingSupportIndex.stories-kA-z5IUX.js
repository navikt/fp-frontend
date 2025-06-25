import{g as w,w as H,j as c,G as U,B as P,F as y}from"./iframe-DyNQ8pxm.js";import{X as x}from"./index.es-Bg782uy8.js";import{u as m,a as C,F as b,i as h,V as M,b as J,w as Y,n as Q,c as r,d as X}from"./fagsakApi-DYk9oBgu.js";import{h as a,H as n,c as q}from"./index-BXqKkPSv.js";import{g as z}from"./withIntl-CYfGkhFy.js";import{a as W}from"./alleKodeverk-DO07GSZv.js";import{a as Z}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{F as d}from"./FagsakData-P3KHKIxm.js";import{B as f}from"./BehandlingSupportIndex-CDTYPeAr.js";import{m as $}from"./nb_NO-D39UuuyA.js";import"./VStack-DrA8dglJ.js";import"./index-Cs4kSZtu.js";import"./CheckmarkCircleFill-DGP7fGP4.js";import"./ExclamationmarkTriangleFill-YzR9f0X3.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-DcHML2ae.js";import"./paths-UCSI8tFB.js";import"./DokumentIndex-aS5NayFL.js";import"./DokumentLink-EJNOdZ0T.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-BGbczGMl.js";import"./message-BpQMa37Y.js";import"./Table-01p-QwEI.js";import"./ChevronDown-BKu4uGgL.js";import"./Checkbox-C2p_3PNR.js";import"./StarFill-7WLBgsPq.js";import"./SupportHeader-Cz-wntw7.js";import"./ErrorBoundary-gRqFlN3K.js";import"./IngenBehandlingValgtPanel-ny9yNqQZ.js";import"./errorType-BLUN7xUo.js";import"./HistorikkIndex-C9vcnmJt.js";import"./MeldingIndex-PVh_7_u9.js";import"./index.es-Ic8-cdME.js";import"./Tag-D9uxoGdT.js";import"./Popover-CciAPuo4.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-DWOFI5RH.js";import"./useKodeverk-DOuDKlnH.js";import"./SettPaVentReadOnlyModal-lbTQpxHO.js";import"./TotrinnskontrollIndex-DzUhZ-uV.js";import"./Checkmark-CtIhQUk6.js";import"./UtvidEllerMinskKnapp-B-7Rkxil.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,ee=z($),s=t=>q(Y(Q(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href)),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:M.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:P.REVURDERING,status:U.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},p={saksnummer:"123",fagsakYtelseType:y.FORELDREPENGER,status:J.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},Ye={title:"fagsak/BehandlingSupportIndex",decorators:[ee,w,H],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(W)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(Z)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(X()),{kodeverkOptions:_,fptilbake:G}=C(),{data:L}=m(_(e==="success")),{data:v}=m(G.kodeverkOptions(e==="success"));return L&&v?c.jsx(f,{...t}):c.jsx(x,{})}},i={args:{fagsakData:new d(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},g={args:{fagsakData:new d(p)}};var N,F,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
