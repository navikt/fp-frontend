import{j as c}from"./jsx-runtime-CLpGMVip.js";import{$ as w}from"./index.es-ylySzHC6.js";import{d as H,B as P,F as v,b as y,w as U,c as x}from"./withPanelData-B0zkdg-8.js";import{F as b,i as h,u as m,a as C,w as J,n as M,b as r,c as Q}from"./initFetch-D5usnyLB.js";import{h as a,H as n}from"./index-DqeTBbD1.js";import{F as Y}from"./fagsakStatus-NXwGwLtb.js";import{g as $}from"./withIntl-CY7Gantx.js";import{a as q}from"./alleKodeverk-BFmIlMu4.js";import{a as z}from"./alleKodeverkTilbakekreving-dIUSSyeF.js";import{V as W,F as g}from"./FagsakData-4_VgJz8T.js";import{B as f}from"./BehandlingSupportIndex-D-aRNOGZ.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import{m as X}from"./nb_NO-FM-zO8Y1.js";import"./index-B8jnc8p3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-CJilavqB.js";import"./ExclamationmarkTriangleFill-D_leAKaU.js";import"./CheckmarkCircleFill-Bn_EgKw2.js";import"./index-Dmw-q_WW.js";import"./index-Dv0WEcwZ.js";import"./v4-CtRu48qb.js";import"./react-BtE7MjBI.js";import"./iframe-D060KNsZ.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./decorators-DIzpaN6C.js";import"./paths-CEGYO3h7.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-C_kxzK8r.js";import"./DokumentIndex-gbVwHk6-.js";import"./eksterneLenker-DcE6CUbm.js";import"./Table-vchRXySs.js";import"./Checkbox-DHHmJwCX.js";import"./useFormField-BScuxMwd.js";import"./StarFill-DYwyZfXO.js";import"./Link-CTZril0t.js";import"./SupportHeader-BWYh47K3.js";import"./ErrorBoundary-ux0MYjFD.js";import"./IngenBehandlingValgtPanel-paf2uh67.js";import"./RestApiErrorContext-D3DzVTT-.js";import"./HistorikkIndex-DjAGXDO1.js";import"./kodeverkUtils-DLZgokMR.js";import"./Popover-j5Posq5M.js";import"./Box-CF-Ry_--.js";import"./MeldingIndex-C5xWGbCY.js";import"./index.es-BQQElYKk.js";import"./Tag-B0trkwuC.js";import"./dokumentMalType-uHvYWaNM.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-D4KUzv7t.js";import"./useKodeverk-BZipmmsT.js";import"./useVisForhandsvisningAvMelding-C8t4mlLs.js";import"./SettPaVentReadOnlyModal-dgyza198.js";import"./TotrinnskontrollIndex-BKNk8aP9.js";import"./aksjonspunktCodes-BuBbCIxs.js";import"./behandlingArsakType-CTXggz2Y.js";import"./moment-C5S46NFB.js";import"./behandlingResultatType-DHbqkXMl.js";const Z=$(X),s=t=>J(M(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:W.OPPRETT},u={versjon:2,uuid:"1",behandlingKoet:!1,behandlingPaaVent:!1,kanHenleggeBehandling:!0,type:H.REVURDERING,status:P.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:v.FORELDREPENGER,status:Y.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ta={title:"fagsak/BehandlingSupportIndex",decorators:[Z,y,U],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(q)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(z)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:x("button-click")},render:t=>{const{status:e}=m(Q()),{kodeverkOptions:G,fptilbake:O}=C(),{data:L}=m(G(e==="success")),{data:_}=m(O.kodeverkOptions(e==="success"));return L&&_?c.jsx(f,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var T,N,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
