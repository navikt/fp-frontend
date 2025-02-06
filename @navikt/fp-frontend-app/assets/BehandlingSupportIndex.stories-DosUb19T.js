import{j as c}from"./jsx-runtime-CLpGMVip.js";import{H}from"./index.es-BJ5ePes3.js";import{d as w,B as P,F as v,b as y,w as U,c as x}from"./withPanelData-BD6kgoz0.js";import{F as b,i as h,u as m,a as C,w as J,n as M,b as r,c as Q}from"./initFetch-CULiu9VR.js";import{h as a,H as n}from"./index-DqeTBbD1.js";import{F as Y}from"./fagsakStatus-NXwGwLtb.js";import{g as q}from"./withIntl-DurOY7zv.js";import{a as z}from"./alleKodeverk-Ck9zwXaq.js";import{a as W}from"./alleKodeverkTilbakekreving-dIUSSyeF.js";import{V as X,F as p}from"./FagsakData-4_VgJz8T.js";import{B as f}from"./BehandlingSupportIndex-BMIILECC.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import{m as Z}from"./nb_NO-FM-zO8Y1.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-CJilavqB.js";import"./ExclamationmarkTriangleFill-BaHUn2cM.js";import"./CheckmarkCircleFill-DKFIcv_a.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./v4-CtRu48qb.js";import"./decorators-DIzpaN6C.js";import"./paths-BG-6LyE8.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-CFfsK9bW.js";import"./DokumentIndex-BciWGje6.js";import"./eksterneLenker-DcE6CUbm.js";import"./Table-B2UwEoki.js";import"./Checkbox-BiRUn7i8.js";import"./useFormField-DxSG1hRL.js";import"./StarFill-COm6CnjL.js";import"./Link-BgL3YgA-.js";import"./SupportHeader-C02vJB7a.js";import"./ErrorBoundary-B7am3jx0.js";import"./IngenBehandlingValgtPanel-BjRN6abd.js";import"./RestApiErrorContext-CYa6iUCd.js";import"./HistorikkIndex-DeSEG3dv.js";import"./kodeverkUtils-DLZgokMR.js";import"./Popover-DcNCAbik.js";import"./Box-ixyZ_ErH.js";import"./MeldingIndex-AvQCKqS-.js";import"./index.es-D807ybPP.js";import"./Tag-CzS4vEx9.js";import"./dokumentMalType-uHvYWaNM.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-C7yzkdVu.js";import"./useKodeverk-my-TNnbV.js";import"./useVisForhandsvisningAvMelding-D831nD0h.js";import"./SettPaVentReadOnlyModal-BBSLW0f3.js";import"./TotrinnskontrollIndex-CbyoILJr.js";import"./aksjonspunktCodes-BuBbCIxs.js";import"./behandlingArsakType-CTXggz2Y.js";import"./moment-C5S46NFB.js";import"./behandlingResultatType-DHbqkXMl.js";const $=q(Z),s=t=>J(M(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:X.OPPRETT},u={versjon:2,uuid:"1",behandlingKoet:!1,behandlingPaaVent:!1,kanHenleggeBehandling:!0,type:w.REVURDERING,status:P.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:v.FORELDREPENGER,status:Y.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ea={title:"fagsak/BehandlingSupportIndex",decorators:[$,y,U],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(z)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(W)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:x("button-click")},render:t=>{const{status:e}=m(Q()),{kodeverkOptions:G,fptilbake:O}=C(),{data:L}=m(G(e==="success")),{data:_}=m(O.kodeverkOptions(e==="success"));return L&&_?c.jsx(f,{...t}):c.jsx(H,{})}},i={args:{fagsakData:new p(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new p({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new p({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},g={args:{fagsakData:new p(d)}};var T,N,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(K=(R=l.parameters)==null?void 0:R.docs)==null?void 0:K.source}}};var j,S,V;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...(V=(S=g.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const aa=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,g as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,aa as __namedExportsOrder,ea as default};
