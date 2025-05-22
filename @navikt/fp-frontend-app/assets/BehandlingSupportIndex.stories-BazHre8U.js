import{j as c}from"./index-nufLo1NJ.js";import{r as w}from"./index.es-BD5hDPkm.js";import{c as b,b as H,w as P,d as U,B as y,F as x}from"./withPanelData-DKK9DXru.js";import{u as m,a as C,F as f,i as h,w as J,n as M,b as Q,c as r}from"./fagsakApi-BPFEguWL.js";import{h as a,H as n,c as Y}from"./index-Cg096ojA.js";import{F as q}from"./fagsakStatus-NXwGwLtb.js";import{g as z}from"./withIntl-C9WEGJkX.js";import{a as W}from"./alleKodeverk-BGvpDL3l.js";import{a as X}from"./alleKodeverkTilbakekreving-BHPNpSgX.js";import{F as g,V as Z}from"./FagsakData-4_VgJz8T.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{B as T}from"./BehandlingSupportIndex-DYr4_MIs.js";import{m as $}from"./nb_NO-D39UuuyA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-0CCRSEf1.js";import"./index-mMUbb89k.js";import"./CheckmarkCircleFill-Ac0J0NLC.js";import"./ExclamationmarkTriangleFill-bsMvQ_fS.js";import"./v4-CtRu48qb.js";import"./entry-preview-BCmrubB7.js";import"./iframe-CvOyTXeD.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./decorators-Bnaor6Ku.js";import"./useTrackRouteParam-adMGrsQ2.js";import"./paths-DqSvmwzg.js";import"./DokumentIndex-DPZ1CIvb.js";import"./DokumentLink-CuBA-bKG.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-BJnLkNWm.js";import"./message-B0i3JlHd.js";import"./Table-CavULp6q.js";import"./ChevronDown-BXugOVrI.js";import"./Checkbox-BlJq5-sJ.js";import"./StarFill-UBV-I_eQ.js";import"./SupportHeader-xZROwT-s.js";import"./ErrorBoundary-B09gRWDj.js";import"./IngenBehandlingValgtPanel-DQvSVSvJ.js";import"./errorType-Bd3zmrf5.js";import"./HistorikkIndex-Bt9YqBeW.js";import"./MeldingIndex-oGeI1c0b.js";import"./index.es-bFQ8hlJd.js";import"./Tag-D0M0T5iE.js";import"./Popover-DhoQZWl_.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-CJBznDC2.js";import"./useKodeverk-5bNhrjWh.js";import"./SettPaVentReadOnlyModal-EFBMCbjt.js";import"./TotrinnskontrollIndex-BtpwK_SN.js";import"./aksjonspunktCodes-CwqG_2qJ.js";import"./behandlingArsakType-CTXggz2Y.js";import"./behandlingResultatType-CKS0Ckn9.js";import"./Checkmark-By0ecjAr.js";import"./UtvidEllerMinskKnapp-B6Lvjy0K.js";import"./Tooltip-DJpwmNda.js";const ee=z($),s=t=>Y(J(M(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href)),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:Z.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:y.REVURDERING,status:U.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:x.FORELDREPENGER,status:q.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},sa={title:"fagsak/BehandlingSupportIndex",decorators:[ee,H,P],component:T,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>n.json(h)),a.get(f.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(W)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(X)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:b("button-click"),toggleVisUtvidetBehandlingDetaljer:b("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(Q()),{kodeverkOptions:O,fptilbake:L}=C(),{data:_}=m(O(e==="success")),{data:v}=m(L.kodeverkOptions(e==="success"));return _&&v?c.jsx(T,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var F,N,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var B,D,I;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(K=(j=l.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var S,V,G;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const ia=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,p as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,ia as __namedExportsOrder,sa as default};
