import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{E as w}from"./index.es-Ctx3ZlRe.js";import{c as b,b as H,w as P,d as U,B as y,F as x}from"./withPanelData-Y7abaqKO.js";import{u as m,a as C,F as f,i as h,w as J,n as M,b as Q,c as r}from"./fagsakApi-DG9fPYVk.js";import{h as a,H as n}from"./index-Y5SXXV7L.js";import{F as Y}from"./fagsakStatus-NXwGwLtb.js";import{g as q}from"./withIntl-DcEIIrI6.js";import{a as z}from"./alleKodeverk-D9pP0qVl.js";import{a as W}from"./alleKodeverkTilbakekreving-BHPNpSgX.js";import{F as g,V as X}from"./FagsakData-4_VgJz8T.js";import{i as k}from"./initFetchFptilbake-CspdHVpU.js";import"./omsorgOgRett-H7E22Vnu.js";import{B as T}from"./BehandlingSupportIndex-DFg9FZ5F.js";import{m as Z}from"./nb_NO-BsDjQrpy.js";import"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-B9SIeT6G.js";import"./ExclamationmarkTriangleFill-Ksrn3ZZU.js";import"./message-CpAZ3Muq.js";import"./index-gMDb9Zpm.js";import"./index-DrFkskS4.js";import"./v4-CtRu48qb.js";import"./entry-preview-BQnKpzTH.js";import"./iframe-DXVEErhm.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-duuaId12.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./paths-DYnhjtYQ.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-0mCySwTz.js";import"./DokumentIndex-BkhjQo07.js";import"./eksterneLenker-DOKwbE_M.js";import"./Table-PDzDFYHg.js";import"./Checkbox-C8xviC1H.js";import"./StarFill-C1WEBMDo.js";import"./Link-3vX6XKTe.js";import"./SupportHeader-Bi_8HDJr.js";import"./ErrorBoundary-DD7xW7Bb.js";import"./IngenBehandlingValgtPanel-C6x_ppv1.js";import"./RestApiErrorContext-Dcq0Gika.js";import"./HistorikkIndex-DOxWY6ik.js";import"./kodeverkUtils-DLZgokMR.js";import"./MeldingIndex-DyNJGmT2.js";import"./index.es-DTcoAJfk.js";import"./Tag-Y7vEYGhm.js";import"./Popover-DFJvWqp8.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-CI3yO1gB.js";import"./useKodeverk-BT1zk5cR.js";import"./useVisForhandsvisningAvMelding-CqrEQrvz.js";import"./SettPaVentReadOnlyModal-GyTfrNYX.js";import"./TotrinnskontrollIndex-B4sXahoM.js";import"./aksjonspunktCodes-BLM-Fgv6.js";import"./behandlingArsakType-CTXggz2Y.js";import"./behandlingResultatType-DHbqkXMl.js";import"./UtvidEllerMinskKnapp-B00ZggaV.js";import"./Tooltip-CEzdWitx.js";const $=q(Z),s=t=>J(M(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:X.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:y.REVURDERING,status:U.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:x.FORELDREPENGER,status:Y.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ia={title:"fagsak/BehandlingSupportIndex",decorators:[$,H,P],component:T,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>n.json(h)),a.get(f.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(z)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(W)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:b("button-click"),toggleVisUtvidetBehandlingDetaljer:b("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(Q()),{kodeverkOptions:O,fptilbake:L}=C(),{data:_}=m(O(e==="success")),{data:v}=m(L.kodeverkOptions(e==="success"));return _&&v?c.jsx(T,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var F,N,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
