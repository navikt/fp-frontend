import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{Q as w}from"./index.es-3mY2NE4O.js";import{c as b,b as H,w as P,d as U,B as y,F as x}from"./withPanelData-g3ZJRFFm.js";import{u as m,a as Q,F as f,i as h,w as C,n as J,b as M,c as r}from"./initFetch-ChXFpEDe.js";import{h as a,H as n}from"./index-CiTJJs0Y.js";import{F as Y}from"./fagsakStatus-NXwGwLtb.js";import{g as q}from"./withIntl-BtEsO8W8.js";import{a as z}from"./alleKodeverk-Dm9joGL5.js";import{a as W}from"./alleKodeverkTilbakekreving-dIUSSyeF.js";import{F as g,V as X}from"./FagsakData-4_VgJz8T.js";import{B as T}from"./BehandlingSupportIndex-DRwqBK9D.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import{m as Z}from"./nb_NO-BsDjQrpy.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-DwHIkOsx.js";import"./ExclamationmarkTriangleFill-CdfK8heW.js";import"./message-BNb4AvKI.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-SBFJ0j9G.js";import"./iframe-BXEM1MRC.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./paths-CHo4Pa8b.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-CNphPZc5.js";import"./DokumentIndex-CvZIeXkp.js";import"./eksterneLenker-DOKwbE_M.js";import"./Table-ZQu-oQwV.js";import"./Checkbox-CQh5ScDP.js";import"./StarFill-C3eRA3IL.js";import"./Link-CuhnNa_l.js";import"./SupportHeader-DuYI_GT0.js";import"./ErrorBoundary-bIoxSojd.js";import"./IngenBehandlingValgtPanel-CqIrUXpn.js";import"./RestApiErrorContext-D7YnyNzE.js";import"./HistorikkIndex-CZAqs1G9.js";import"./kodeverkUtils-DLZgokMR.js";import"./MeldingIndex-CK1sNOBn.js";import"./index.es-CmO1OSHi.js";import"./Tag-CV0tVHoV.js";import"./Popover-YVCHIgc7.js";import"./dokumentMalType-uHvYWaNM.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-Tbs5jGEp.js";import"./useKodeverk-BHr7o7nr.js";import"./useVisForhandsvisningAvMelding-UHl9Spyq.js";import"./SettPaVentReadOnlyModal-BP-1I3V1.js";import"./TotrinnskontrollIndex-TcIJEsI0.js";import"./aksjonspunktCodes-BLM-Fgv6.js";import"./behandlingArsakType-CTXggz2Y.js";import"./behandlingResultatType-DHbqkXMl.js";import"./UtvidEllerMinskKnapp-CIV72Xx7.js";import"./Tooltip-C3Q5dDht.js";const $=q(Z),s=t=>C(J(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:X.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:y.REVURDERING,status:U.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:x.FORELDREPENGER,status:Y.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},sa={title:"fagsak/BehandlingSupportIndex",decorators:[$,H,P],component:T,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>n.json(h)),a.get(f.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(z)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(W)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:b("button-click"),toggleVisUtvidetBehandlingDetaljer:b("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(M()),{kodeverkOptions:O,fptilbake:L}=Q(),{data:_}=m(O(e==="success")),{data:v}=m(L.kodeverkOptions(e==="success"));return _&&v?c.jsx(T,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var N,F,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(K=(j=l.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var S,V,G;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const ia=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,p as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,ia as __namedExportsOrder,sa as default};
