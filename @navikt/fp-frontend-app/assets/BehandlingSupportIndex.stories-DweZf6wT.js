import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index.es-BJaTNTPf.js";import{c as b,b as H,w as P,d as U,B as y,F as x}from"./withPanelData-DD6z-VSH.js";import{u as m,a as C,F as f,i as h,w as J,n as M,b as Q,c as r}from"./fagsakApi-Ci9aUxdT.js";import{h as a,H as n}from"./index-DzvRTBsC.js";import{F as Y}from"./fagsakStatus-NXwGwLtb.js";import{g as q}from"./withIntl-Bpi07I3k.js";import{a as z}from"./alleKodeverk-BGvpDL3l.js";import{a as W}from"./alleKodeverkTilbakekreving-BHPNpSgX.js";import{F as g,V as X}from"./FagsakData-4_VgJz8T.js";import{i as k}from"./initFetchFptilbake-CspdHVpU.js";import"./omsorgOgRett-B2aLX_aN.js";import{B as T}from"./BehandlingSupportIndex-HYu_BYPM.js";import{m as Z}from"./nb_NO-D39UuuyA.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./CheckmarkCircleFill-ktkUIws7.js";import"./ExclamationmarkTriangleFill-Dihrtw8z.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./v4-CtRu48qb.js";import"./entry-preview-DocOpyXO.js";import"./iframe-B9J_FVhX.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./decorators-Bnaor6Ku.js";import"./useTrackRouteParam-Hc8P9t5M.js";import"./paths-CCwgOjhY.js";import"./DokumentIndex-DhF2L3qa.js";import"./DokumentLink-B970jgP-.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-DpV_QEH-.js";import"./message-Bo2CExQW.js";import"./Table-D0u7PPiB.js";import"./ChevronDown-B5sALKbb.js";import"./Checkbox-Be3oMAZM.js";import"./StarFill-DAbKlyvO.js";import"./SupportHeader-CuDkxhP1.js";import"./ErrorBoundary-DD72PdY9.js";import"./IngenBehandlingValgtPanel-Dd7x74Dr.js";import"./errorType-CJj-WSLB.js";import"./HistorikkIndex-IOniZjIi.js";import"./MeldingIndex-BfMHxFgs.js";import"./index.es-BMDHDYrM.js";import"./Tag-DBYkMNSm.js";import"./Popover-CFWFbhxo.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-DavpKudR.js";import"./useKodeverk-c-tmDscl.js";import"./SettPaVentReadOnlyModal-teRUQZYD.js";import"./TotrinnskontrollIndex-DGdyK2dJ.js";import"./aksjonspunktCodes-CwqG_2qJ.js";import"./behandlingArsakType-CTXggz2Y.js";import"./behandlingResultatType-CKS0Ckn9.js";import"./Checkmark-M8HBZa3K.js";import"./UtvidEllerMinskKnapp-CzURJIuQ.js";import"./Tooltip-BcoLmd-A.js";const $=q(Z),s=t=>J(M(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:X.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:y.REVURDERING,status:U.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:x.FORELDREPENGER,status:Y.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ia={title:"fagsak/BehandlingSupportIndex",decorators:[$,H,P],component:T,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>n.json(h)),a.get(f.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(z)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(W)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:b("button-click"),toggleVisUtvidetBehandlingDetaljer:b("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(Q()),{kodeverkOptions:O,fptilbake:L}=C(),{data:_}=m(O(e==="success")),{data:v}=m(L.kodeverkOptions(e==="success"));return _&&v?c.jsx(T,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var F,N,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
