import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{e as w}from"./index.es-BzvdrRHu.js";import{c as b,b as H,w as P,d as U,B as y,F as x}from"./withPanelData-3jncuK43.js";import{u as m,a as C,F as f,i as h,w as J,n as M,b as Q,c as r}from"./fagsakApi-BSBBLeAJ.js";import{h as a,H as n}from"./index-DcGDEF8s.js";import{F as Y}from"./fagsakStatus-NXwGwLtb.js";import{g as q}from"./withIntl-9aGALyzG.js";import{a as z}from"./alleKodeverk-Ga5AMxGN.js";import{a as W}from"./alleKodeverkTilbakekreving-BHPNpSgX.js";import{F as g,V as X}from"./FagsakData-4_VgJz8T.js";import{i as k}from"./initFetchFptilbake-CspdHVpU.js";import"./omsorgOgRett-BjbhPDbF.js";import{B as T}from"./BehandlingSupportIndex-mgTdpWzi.js";import{m as Z}from"./nb_NO-BsDjQrpy.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-01kw3dKN.js";import"./ExclamationmarkTriangleFill-8krTx4VL.js";import"./message-Bw2FvloV.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./v4-CtRu48qb.js";import"./entry-preview-DjJQJfRT.js";import"./iframe-B1FF9Xct.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./paths-BST83XuA.js";import"./useTrackRouteParam-CtzH7lyK.js";import"./DokumentIndex-BXAcJ_6W.js";import"./DokumentLink-BTWewzDt.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-fEvbObBD.js";import"./Table-Bi-Dk1ZY.js";import"./Checkbox-DeRK9qaz.js";import"./StarFill-CfIh0sHG.js";import"./SupportHeader-DNWxCVt3.js";import"./ErrorBoundary-CzW1LkFk.js";import"./IngenBehandlingValgtPanel-DusBKpqw.js";import"./errorType-DOemPHy4.js";import"./HistorikkIndex-VGI502gS.js";import"./kodeverkUtils-DLZgokMR.js";import"./MeldingIndex-CunwdqPz.js";import"./index.es-2kcJIZxn.js";import"./Tag-V1Rsnp4N.js";import"./Popover-DLTk1l_o.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-fEVOUZVb.js";import"./useKodeverk-DYFOG9C3.js";import"./useVisForhandsvisningAvMelding-BZz9zPDt.js";import"./SettPaVentReadOnlyModal-BJF-VtY8.js";import"./TotrinnskontrollIndex-D7wNIbrE.js";import"./aksjonspunktCodes-BLM-Fgv6.js";import"./behandlingArsakType-CTXggz2Y.js";import"./behandlingResultatType-DHbqkXMl.js";import"./UtvidEllerMinskKnapp-BEcXpQvK.js";import"./Tooltip-CuxjLWCy.js";const $=q(Z),s=t=>J(M(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:X.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:y.REVURDERING,status:U.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:x.FORELDREPENGER,status:Y.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ia={title:"fagsak/BehandlingSupportIndex",decorators:[$,H,P],component:T,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>n.json(h)),a.get(f.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(z)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(W)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:b("button-click"),toggleVisUtvidetBehandlingDetaljer:b("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(Q()),{kodeverkOptions:O,fptilbake:L}=C(),{data:_}=m(O(e==="success")),{data:v}=m(L.kodeverkOptions(e==="success"));return _&&v?c.jsx(T,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var F,N,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
