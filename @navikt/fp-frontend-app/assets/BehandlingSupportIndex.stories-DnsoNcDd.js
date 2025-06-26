import{g as w,w as H,j as c,G as U,B as P,F as y}from"./iframe-CEBl04XH.js";import{X as x}from"./index.es-DiGFJCga.js";import{u as m,a as C,F as b,i as h,V as M,b as J,w as Y,n as Q,c as r,d as X}from"./fagsakApi-Bh_tHANK.js";import{h as a,H as n,c as q}from"./index-Be5VQJ3V.js";import{g as z}from"./withIntl-DeVhO_JM.js";import{a as W}from"./alleKodeverk-DO07GSZv.js";import{a as Z}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{F as d}from"./FagsakData-P3KHKIxm.js";import{B as f}from"./BehandlingSupportIndex-DgStVC_J.js";import{m as $}from"./nb_NO-D39UuuyA.js";import"./VStack-B38_v6_K.js";import"./index-CaYTyr2g.js";import"./CheckmarkCircleFill-DSlByi9h.js";import"./ExclamationmarkTriangleFill-DiEgli_V.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-C6TuLSDP.js";import"./paths-_y4HPd3H.js";import"./DokumentIndex-BtY_6uT9.js";import"./DokumentLink-CSy__a33.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-BpARfOMn.js";import"./message-B298pYBZ.js";import"./Table-jZhdnIfA.js";import"./ChevronDown-3P9VOL_L.js";import"./Checkbox-DW_jo91Q.js";import"./StarFill-DNNRI_AI.js";import"./SupportHeader-DTtm__vr.js";import"./ErrorBoundary-BUuipqVI.js";import"./IngenBehandlingValgtPanel-cbJMljCG.js";import"./errorType-DSc1jZu4.js";import"./HistorikkIndex-ybwYA8E9.js";import"./MeldingIndex-BweonD-C.js";import"./index.es-CBYUX8uU.js";import"./Tag-CJN7Qhfg.js";import"./Popover-BBfr5HSg.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-CEIx4kpj.js";import"./useKodeverk-BeB7bn1o.js";import"./SettPaVentReadOnlyModal-DAtV3v6t.js";import"./TotrinnskontrollIndex-CVxDBZnL.js";import"./Checkmark-irBMFSRv.js";import"./UtvidEllerMinskKnapp-BLlYiRoO.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,ee=z($),s=t=>q(Y(Q(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href)),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:M.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:P.REVURDERING,status:U.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},p={saksnummer:"123",fagsakYtelseType:y.FORELDREPENGER,status:J.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},Ye={title:"fagsak/BehandlingSupportIndex",decorators:[ee,w,H],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(W)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(Z)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(X()),{kodeverkOptions:_,fptilbake:G}=C(),{data:L}=m(_(e==="success")),{data:v}=m(G.kodeverkOptions(e==="success"));return L&&v?c.jsx(f,{...t}):c.jsx(x,{})}},i={args:{fagsakData:new d(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new d({...p,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},g={args:{fagsakData:new d(p)}};var N,F,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
