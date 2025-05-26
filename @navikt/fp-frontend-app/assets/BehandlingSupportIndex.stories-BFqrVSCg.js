import{j as c}from"./index-nufLo1NJ.js";import{r as w}from"./index.es-DJ6BCpYL.js";import{c as b,b as H,w as P,d as U,B as y,F as x}from"./withPanelData-DPuHUr4Y.js";import{u as m,a as C,F as f,i as h,V as J,b as M,w as Q,n as Y,c as q,d as r}from"./fagsakApi-BuY4aD1j.js";import{h as a,H as n,c as z}from"./index-Cg096ojA.js";import{g as W}from"./withIntl-DbQ9zPc0.js";import{a as X}from"./alleKodeverk-DO07GSZv.js";import{a as Z}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{F as g}from"./FagsakData-P3KHKIxm.js";import{B as T}from"./BehandlingSupportIndex-Bb1GKgS4.js";import{m as $}from"./nb_NO-D39UuuyA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-0CCRSEf1.js";import"./index-mMUbb89k.js";import"./CheckmarkCircleFill-BB8lcxtn.js";import"./ExclamationmarkTriangleFill-CrvpSpF4.js";import"./v4-CtRu48qb.js";import"./entry-preview-CmCp_Saf.js";import"./iframe-D6DEVYbk.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./decorators-Bnaor6Ku.js";import"./useTrackRouteParam-CzGDlf60.js";import"./paths-Bhscivpg.js";import"./DokumentIndex-Byqiu3Wx.js";import"./DokumentLink-CQdpsYtP.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-CB9DOqWk.js";import"./message-DYZHeMYc.js";import"./Table-GThiQbHA.js";import"./ChevronDown-DL8BLSEf.js";import"./Checkbox-BRUi_2RV.js";import"./StarFill-CtTLTZsX.js";import"./SupportHeader-DiTluZud.js";import"./ErrorBoundary-PK6UTL5p.js";import"./IngenBehandlingValgtPanel-RPEFpYp9.js";import"./errorType-_o4G3Q68.js";import"./HistorikkIndex-9MpAdCJW.js";import"./MeldingIndex-jcjiSdpG.js";import"./index.es-RKcKQIPV.js";import"./Tag-Cscd1ZbB.js";import"./Popover-Bw2ho7gl.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-DKvKurrb.js";import"./useKodeverk-BDHHd7Cd.js";import"./SettPaVentReadOnlyModal-BEht2eBt.js";import"./TotrinnskontrollIndex-BJxRtFq_.js";import"./aksjonspunktCodes-CwqG_2qJ.js";import"./behandlingArsakType-CTXggz2Y.js";import"./behandlingResultatType-CKS0Ckn9.js";import"./Checkmark-BFJy7zow.js";import"./UtvidEllerMinskKnapp-BIpkhYxR.js";import"./Tooltip-CTWnwEJh.js";const ee=W($),s=t=>z(Q(Y(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href)),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:J.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:y.REVURDERING,status:U.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:x.FORELDREPENGER,status:M.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ra={title:"fagsak/BehandlingSupportIndex",decorators:[ee,H,P],component:T,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>n.json(h)),a.get(f.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(X)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(Z)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:b("button-click"),toggleVisUtvidetBehandlingDetaljer:b("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(q()),{kodeverkOptions:O,fptilbake:L}=C(),{data:_}=m(O(e==="success")),{data:v}=m(L.kodeverkOptions(e==="success"));return _&&v?c.jsx(T,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var F,N,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const sa=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,p as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,sa as __namedExportsOrder,ra as default};
