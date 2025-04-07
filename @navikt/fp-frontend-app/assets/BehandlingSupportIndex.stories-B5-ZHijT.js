import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{E as w}from"./index.es-DtlH7w-K.js";import{c as b,b as H,w as P,d as U,B as y,F as x}from"./withPanelData-DK7TKY55.js";import{u as m,a as C,F as f,i as h,w as J,n as M,b as Q,c as r}from"./fagsakApi-DamE0s-R.js";import{h as a,H as n}from"./index-Y5SXXV7L.js";import{F as Y}from"./fagsakStatus-NXwGwLtb.js";import{g as q}from"./withIntl-u64WMsKq.js";import{a as z}from"./alleKodeverk-D9pP0qVl.js";import{a as W}from"./alleKodeverkTilbakekreving-BHPNpSgX.js";import{F as g,V as X}from"./FagsakData-4_VgJz8T.js";import{i as k}from"./initFetchFptilbake-CspdHVpU.js";import"./omsorgOgRett-BQ8j6ZdA.js";import{B as T}from"./BehandlingSupportIndex-CGVx8Vz8.js";import{m as Z}from"./nb_NO-BsDjQrpy.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-J9zonIbR.js";import"./ExclamationmarkTriangleFill-BHeq5F1c.js";import"./message-DhOkRgUv.js";import"./index-gMDb9Zpm.js";import"./index-DrFkskS4.js";import"./v4-CtRu48qb.js";import"./entry-preview-DLLfSFn-.js";import"./iframe-R_wHpCNk.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-duuaId12.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./paths-CmemSjIC.js";import"./useTrackRouteParam-BLqGWhiz.js";import"./DokumentIndex-BkiusQXC.js";import"./DokumentLink-Bi-KnzBF.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-Bvk9y6t6.js";import"./Table-CmF-x09i.js";import"./Checkbox-p3grUQJc.js";import"./StarFill-DKrlcrFN.js";import"./SupportHeader-uyomFCtl.js";import"./ErrorBoundary-B2pYEEcN.js";import"./IngenBehandlingValgtPanel-3OSpDaQQ.js";import"./RestApiErrorContext-Dcq0Gika.js";import"./HistorikkIndex-CDVCKzju.js";import"./kodeverkUtils-DLZgokMR.js";import"./MeldingIndex-D3JzE0tS.js";import"./index.es-DtShBs9w.js";import"./Tag-ZB2_lF4n.js";import"./Popover-DkudeEFo.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-SlEW92ta.js";import"./useKodeverk-aaoxI7jm.js";import"./useVisForhandsvisningAvMelding-A_YPomhS.js";import"./SettPaVentReadOnlyModal-Dgo8s6dT.js";import"./TotrinnskontrollIndex-QaSGv-do.js";import"./aksjonspunktCodes-BLM-Fgv6.js";import"./behandlingArsakType-CTXggz2Y.js";import"./behandlingResultatType-DHbqkXMl.js";import"./UtvidEllerMinskKnapp-DVEYtsVW.js";import"./Tooltip-BSqp7aHZ.js";const $=q(Z),s=t=>J(M(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:X.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:y.REVURDERING,status:U.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:x.FORELDREPENGER,status:Y.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ia={title:"fagsak/BehandlingSupportIndex",decorators:[$,H,P],component:T,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>n.json(h)),a.get(f.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(z)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(W)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:b("button-click"),toggleVisUtvidetBehandlingDetaljer:b("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(Q()),{kodeverkOptions:O,fptilbake:L}=C(),{data:_}=m(O(e==="success")),{data:v}=m(L.kodeverkOptions(e==="success"));return _&&v?c.jsx(T,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var F,N,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const oa=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,p as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,oa as __namedExportsOrder,ia as default};
