import{j as c}from"./jsx-runtime-CLpGMVip.js";import{r as w}from"./index.es-MxAMIJPu.js";import{a as H}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{h as a,F as b,H as n,i as h,u as m,a as P,w as v,n as y,b as r,c as U}from"./initFetch-DK4cSTvy.js";import"./aktivitetStatus-02fOJoqz.js";import{V as x,B as C,F as p}from"./FagsakData-CGqXEUml.js";import{B as J,F as M,a as Q}from"./fagsakYtelseType-CyKFp0BE.js";import{b as Y,w as q}from"./withQueryClient-DTem1OUy.js";import{g as z}from"./withIntl-a1SDBnTF.js";import{a as W}from"./alleKodeverk-Ck9zwXaq.js";import{a as X}from"./alleKodeverkTilbakekreving-dIUSSyeF.js";import{B as f}from"./BehandlingSupportIndex-D-lZ2V9Q.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import{m as Z}from"./nb_NO-uNUtk1bC.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-CJilavqB.js";import"./v4-CtRu48qb.js";import"./decorators-DIzpaN6C.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./paths-BHckLD26.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-Bh9psqeZ.js";import"./DokumentIndex-WhPHokyB.js";import"./eksterneLenker-DcE6CUbm.js";import"./Table-RfktipKk.js";import"./Checkbox-Dd-5zRqC.js";import"./useFormField-r8KZLR-A.js";import"./StarFill-DXI4dcSy.js";import"./Link-C9M13KeJ.js";import"./SupportHeader-iAZRHVc6.js";import"./useRestApiRunner-PSWluHZJ.js";import"./useRestApiErrorDispatcher-Du6ohLLd.js";import"./ErrorBoundary-DovJ2PZA.js";import"./IngenBehandlingValgtPanel-Dnr5nc8M.js";import"./HistorikkIndex-B5LJAxRA.js";import"./kodeverkUtils-DLZgokMR.js";import"./Popover-BOGWOK3_.js";import"./Box-CkfZpuRW.js";import"./MeldingIndex-Bd0_cEnR.js";import"./useMutation-BTY4BAX6.js";import"./venteArsakType-LWklXP3j.js";import"./index.es-jVWbk6xM.js";import"./Tag-Yzdm1MSp.js";import"./UkjentAdresseMeldingIndex-D5CGVu9W.js";import"./useKodeverk-DQG-UHsp.js";import"./useVisForhandsvisningAvMelding-pMH3XiJA.js";import"./SettPaVentReadOnlyModal-c3_jdNf4.js";import"./TotrinnskontrollIndex-BSB5vbEG.js";import"./aksjonspunktCodes-BuBbCIxs.js";import"./behandlingArsakType-CTXggz2Y.js";import"./moment-C5S46NFB.js";import"./behandlingResultatType-DHbqkXMl.js";const $=z(Z),s=t=>v(y(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:x.OPPRETT},u={versjon:2,uuid:"1",behandlingKoet:!1,behandlingPaaVent:!1,kanHenleggeBehandling:!0,type:J.REVURDERING,status:C.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:M.FORELDREPENGER,status:Q.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ea={title:"fagsak/BehandlingSupportIndex",decorators:[$,Y,q],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(W)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(X)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:H("button-click")},render:t=>{const{status:e}=m(U()),{kodeverkOptions:G,fptilbake:O}=P(),{data:L}=m(G(e==="success")),{data:_}=m(O.kodeverkOptions(e==="success"));return L&&_?c.jsx(f,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new p(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new p({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new p({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},g={args:{fagsakData:new p(d)}};var T,N,A;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var F,B,D;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
