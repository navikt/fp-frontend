import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{a as w}from"./index.es-1HjGJ6EL.js";import{c as b,b as H,w as P,d as U,B as y,F as x}from"./withThemeDecorator-zwF_VyQA.js";import{u as m,a as C,F as f,i as h,V as J,b as M,w as Q,n as Y,c as q,d as r}from"./fagsakApi-GpheZX3v.js";import{h as a,H as n,c as z}from"./index-BVlhR-8X.js";import{g as W}from"./withIntl-BzBEqcKh.js";import{a as X}from"./alleKodeverk-DO07GSZv.js";import{a as Z}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as k}from"./initFetchFptilbake-B5Zqz4Xk.js";import{F as p}from"./FagsakData-P3KHKIxm.js";import{B as T}from"./BehandlingSupportIndex-CDIwDBQW.js";import{m as $}from"./nb_NO-D39UuuyA.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VStack-BYX9WX4q.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./CheckmarkCircleFill-DoSxwlpN.js";import"./ExclamationmarkTriangleFill-DcC5p28j.js";import"./v4-CtRu48qb.js";import"./entry-preview-BGoTbtgt.js";import"./iframe-Dh4S4pYG.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./behandlingResultatType-CKS0Ckn9.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./decorators-Bnaor6Ku.js";import"./useTrackRouteParam-fkIH4jYG.js";import"./paths-NmmZRYgu.js";import"./DokumentIndex-BVdjv3fZ.js";import"./DokumentLink-1dgdaFJr.js";import"./eksterneLenker-DOKwbE_M.js";import"./Link-CexXASIp.js";import"./message-qvfAPF2U.js";import"./Table-ByToo0Jy.js";import"./ChevronDown-C9bFGsD-.js";import"./Checkbox-B84pd2sJ.js";import"./StarFill-B2lw1rLp.js";import"./SupportHeader-D3VxPyFW.js";import"./ErrorBoundary-D0AD3zfH.js";import"./IngenBehandlingValgtPanel-BMCp3InH.js";import"./errorType-BhwnIaVu.js";import"./HistorikkIndex-L5ZjYs8s.js";import"./MeldingIndex-Ud7iw88V.js";import"./index.es-cagrzevs.js";import"./Tag-CcTYVtw3.js";import"./Popover-CMSwuF1h.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-CWrlZMgF.js";import"./useKodeverk-DOOb0zoO.js";import"./SettPaVentReadOnlyModal-pjFVwnr4.js";import"./TotrinnskontrollIndex-CdYC3L-f.js";import"./Checkmark-B5kO2-Tj.js";import"./UtvidEllerMinskKnapp-BSKiH91A.js";const ee=W($),s=t=>z(Q(Y(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href)),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:J.OPPRETT},u={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:y.REVURDERING,status:U.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:x.FORELDREPENGER,status:M.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ta={title:"fagsak/BehandlingSupportIndex",decorators:[ee,H,P],component:T,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>n.json(h)),a.get(f.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(X)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(Z)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:b("button-click"),toggleVisUtvidetBehandlingDetaljer:b("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:e}=m(q()),{kodeverkOptions:O,fptilbake:L}=C(),{data:_}=m(O(e==="success")),{data:v}=m(L.kodeverkOptions(e==="success"));return _&&v?c.jsx(T,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new p(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new p({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new p({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},g={args:{fagsakData:new p(d)}};var F,N,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(K=(j=l.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var S,V,G;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...(G=(V=g.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const ra=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,g as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,ra as __namedExportsOrder,ta as default};
