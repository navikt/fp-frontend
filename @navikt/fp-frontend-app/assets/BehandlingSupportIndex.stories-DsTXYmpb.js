import{j as c}from"./jsx-runtime-CLpGMVip.js";import{$ as w}from"./index.es-Ba7Faqdq.js";import{d as H,B as P,F as v,b as y,w as U,c as x}from"./withPanelData-0-G3gUT2.js";import{F as b,i as h,u as m,a as C,w as J,n as M,b as r,c as Q}from"./initFetch-C3Ta7GLm.js";import{h as a,H as n}from"./index-DqeTBbD1.js";import{F as Y}from"./fagsakStatus-NXwGwLtb.js";import{g as $}from"./withIntl-DNexp6Ir.js";import{a as q}from"./alleKodeverk-BFmIlMu4.js";import{a as z}from"./alleKodeverkTilbakekreving-dIUSSyeF.js";import{V as W,F as g}from"./FagsakData-4_VgJz8T.js";import{B as f}from"./BehandlingSupportIndex-D3lGEv4m.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import{m as X}from"./nb_NO-l8jqaU6D.js";import"./index-B8jnc8p3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-CJilavqB.js";import"./ExclamationmarkTriangleFill-C6_fgdaK.js";import"./CheckmarkCircleFill-CSmfiWlp.js";import"./index-Dmw-q_WW.js";import"./index-Dv0WEcwZ.js";import"./v4-CtRu48qb.js";import"./react-CnmYimJM.js";import"./iframe-BKuuSDrZ.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./decorators-DIzpaN6C.js";import"./paths-5tO6s07B.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-DHLiJ2Jx.js";import"./DokumentIndex-BUhHoAtJ.js";import"./eksterneLenker-DOKwbE_M.js";import"./Table-TR3HPi0G.js";import"./Checkbox-D4aBpghx.js";import"./useFormField-CjFsRywK.js";import"./StarFill-BeMIThqK.js";import"./Link-qmT9b3Cr.js";import"./SupportHeader-C0o9MfEE.js";import"./ErrorBoundary-BXrS-_hk.js";import"./IngenBehandlingValgtPanel-C56AoV2p.js";import"./RestApiErrorContext-D3DzVTT-.js";import"./HistorikkIndex-D9jf6b-Q.js";import"./kodeverkUtils-DLZgokMR.js";import"./Popover-CS-v8-Ax.js";import"./Box-Cec0THKM.js";import"./MeldingIndex-CISwCpyz.js";import"./index.es-Cfe-Pn3f.js";import"./Tag-j4ZAMQZK.js";import"./dokumentMalType-uHvYWaNM.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-DftYVzkW.js";import"./useKodeverk-Dpp26hnU.js";import"./useVisForhandsvisningAvMelding-BTkO3aH0.js";import"./SettPaVentReadOnlyModal-u1_hWY_w.js";import"./TotrinnskontrollIndex-0viS2Rcq.js";import"./aksjonspunktCodes-BuBbCIxs.js";import"./behandlingArsakType-CTXggz2Y.js";import"./moment-C5S46NFB.js";import"./behandlingResultatType-DHbqkXMl.js";const Z=$(X),s=t=>J(M(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:W.OPPRETT},u={versjon:2,uuid:"1",behandlingKoet:!1,behandlingPaaVent:!1,kanHenleggeBehandling:!0,type:H.REVURDERING,status:P.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:v.FORELDREPENGER,status:Y.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ta={title:"fagsak/BehandlingSupportIndex",decorators:[Z,y,U],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(q)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(z)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:x("button-click")},render:t=>{const{status:e}=m(Q()),{kodeverkOptions:G,fptilbake:O}=C(),{data:L}=m(G(e==="success")),{data:_}=m(O.kodeverkOptions(e==="success"));return L&&_?c.jsx(f,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var T,N,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...(F=(N=i.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var A,B,D;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var I,R,K;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(K=(R=l.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var j,S,V;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const ra=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,p as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,ra as __namedExportsOrder,ta as default};
