import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{M as w}from"./index.es-BwJWPKfZ.js";import{c as H,b as P,w as v,d as y,B as U,F as x}from"./withPanelData-CuUto9MH.js";import{u as m,a as M,F as b,i as h,w as C,n as J,b as Q,c as r}from"./initFetch-DDO4sht4.js";import{h as a,H as n}from"./index-CfpqQiaz.js";import{F as Y}from"./fagsakStatus-NXwGwLtb.js";import{g as q}from"./withIntl-Dutz68X-.js";import{a as z}from"./alleKodeverk-BFmIlMu4.js";import{a as W}from"./alleKodeverkTilbakekreving-dIUSSyeF.js";import{F as g,V as X}from"./FagsakData-4_VgJz8T.js";import{B as f}from"./BehandlingSupportIndex-Bmv4mIK1.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import{m as Z}from"./nb_NO-l8jqaU6D.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-CHiMIR3-.js";import"./ExclamationmarkTriangleFill-CmFMjmNV.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-BlIIWlKI.js";import"./iframe-4VSnd7HF.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./decorators-DIzpaN6C.js";import"./paths-BCZHw0iS.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-7_euVa6z.js";import"./DokumentIndex-mUDqqNIO.js";import"./eksterneLenker-DOKwbE_M.js";import"./Table-B8YhxwYM.js";import"./Checkbox-l_MTvChq.js";import"./useFormField-Cw0qMBIi.js";import"./StarFill-CUCQdSrj.js";import"./Link-DA7lkXc8.js";import"./SupportHeader-FbmWZpSs.js";import"./ErrorBoundary-DlrxAUlX.js";import"./IngenBehandlingValgtPanel-D2rAZRBR.js";import"./RestApiErrorContext-D7YnyNzE.js";import"./HistorikkIndex--rqzGcoo.js";import"./kodeverkUtils-DLZgokMR.js";import"./Popover-DkC66A3f.js";import"./MeldingIndex-BA7w8D2N.js";import"./index.es-CyZRmUOO.js";import"./Tag-CAdLdh-9.js";import"./dokumentMalType-uHvYWaNM.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-Daaz_Sdn.js";import"./useKodeverk-C_Fvlbvc.js";import"./useVisForhandsvisningAvMelding-q9JkCWj1.js";import"./SettPaVentReadOnlyModal-CF8lm1IA.js";import"./TotrinnskontrollIndex-9b3j1dfa.js";import"./aksjonspunktCodes-BuBbCIxs.js";import"./behandlingArsakType-CTXggz2Y.js";import"./moment-C5S46NFB.js";import"./behandlingResultatType-DHbqkXMl.js";const $=q(Z),s=t=>C(J(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:X.OPPRETT},u={versjon:2,uuid:"1",behandlingKoet:!1,behandlingPaaVent:!1,kanHenleggeBehandling:!0,type:U.REVURDERING,status:y.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:x.FORELDREPENGER,status:Y.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},na={title:"fagsak/BehandlingSupportIndex",decorators:[$,P,v],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(z)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(W)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:H("button-click")},render:t=>{const{status:e}=m(Q()),{kodeverkOptions:G,fptilbake:O}=M(),{data:L}=m(G(e==="success")),{data:_}=m(O.kodeverkOptions(e==="success"));return L&&_?c.jsx(f,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var T,N,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const ta=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,p as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,ta as __namedExportsOrder,na as default};
