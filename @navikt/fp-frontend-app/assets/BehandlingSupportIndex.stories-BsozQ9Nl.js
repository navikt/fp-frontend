import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{Q as w}from"./index.es-Bj5Z_MIh.js";import{c as H,b as P,w as v,d as y,B as U,F as x}from"./withPanelData-bUKQk4x6.js";import{u as m,a as Q,F as b,i as h,w as C,n as J,b as M,c as r}from"./initFetch-CSlNL83m.js";import{h as a,H as n}from"./index-CiTJJs0Y.js";import{F as Y}from"./fagsakStatus-NXwGwLtb.js";import{g as q}from"./withIntl-HY7zGkfz.js";import{a as z}from"./alleKodeverk-DQaoBXHm.js";import{a as W}from"./alleKodeverkTilbakekreving-dIUSSyeF.js";import{F as g,V as X}from"./FagsakData-4_VgJz8T.js";import{B as f}from"./BehandlingSupportIndex-2lEc6Q6d.js";import{i as k}from"./initFetchTilbake-BtBiXUqM.js";import{m as Z}from"./nb_NO-l8jqaU6D.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-CMCNY_zn.js";import"./ExclamationmarkTriangleFill-CNi9ypSB.js";import"./message-XqD9auHw.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-di_XCKwd.js";import"./iframe-B_cohwoE.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./paths-tbRFjhs8.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./useTrackRouteParam-CzYQr1dm.js";import"./DokumentIndex--81AsS2F.js";import"./eksterneLenker-DOKwbE_M.js";import"./Table-CdTPW0_B.js";import"./Checkbox-sp8VkL-w.js";import"./StarFill-ls6AV4DF.js";import"./Link-DygZr0Ln.js";import"./SupportHeader-skUJhgvJ.js";import"./ErrorBoundary-D3Bzk8as.js";import"./IngenBehandlingValgtPanel-BxtIzcH_.js";import"./RestApiErrorContext-D7YnyNzE.js";import"./HistorikkIndex-BaoplEnx.js";import"./kodeverkUtils-DLZgokMR.js";import"./MeldingIndex-Bhpl_pLQ.js";import"./index.es-DymjxCh_.js";import"./Tag-CydQlPYf.js";import"./Popover-D6lS7GIb.js";import"./dokumentMalType-uHvYWaNM.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-BMf6VWS6.js";import"./useKodeverk-CEzoLJul.js";import"./useVisForhandsvisningAvMelding-D1k7k7G8.js";import"./SettPaVentReadOnlyModal-DFdnJxtl.js";import"./TotrinnskontrollIndex-6vhAnlzR.js";import"./aksjonspunktCodes-BLM-Fgv6.js";import"./behandlingArsakType-CTXggz2Y.js";import"./moment-C5S46NFB.js";import"./behandlingResultatType-DHbqkXMl.js";const $=q(Z),s=t=>C(J(h.links.find(e=>e.rel===t)??h.sakLinks.find(e=>e.rel===t)??k.links.find(e=>e.rel===t)??k.sakLinks.find(e=>e.rel===t)).href),E={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:X.OPPRETT},u={versjon:2,uuid:"1",behandlingKoet:!1,behandlingPaaVent:!1,kanHenleggeBehandling:!0,type:U.REVURDERING,status:y.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:E},d={saksnummer:"123",fagsakYtelseType:x.FORELDREPENGER,status:Y.UNDER_BEHANDLING,behandlinger:[u],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}]},ra={title:"fagsak/BehandlingSupportIndex",decorators:[$,P,v],component:f,parameters:{msw:{handlers:[a.get(b.INIT_FETCH,()=>n.json(h)),a.get(b.INIT_FETCH_FPTILBAKE,()=>n.json(k)),a.get(s(r.KODEVERK),()=>n.json(z)),a.get(s(r.KODEVERK_FPTILBAKE),()=>n.json(W)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>n.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>n.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new n(null,{status:200}))]}},args:{hentOgSettBehandling:H("button-click")},render:t=>{const{status:e}=m(M()),{kodeverkOptions:G,fptilbake:O}=Q(),{data:L}=m(G(e==="success")),{data:_}=m(O.kodeverkOptions(e==="success"));return L&&_?c.jsx(f,{...t}):c.jsx(w,{})}},i={args:{fagsakData:new g(d),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingFraBeslutter:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...d,behandlinger:[{...u,behandlingTillatteOperasjoner:{...E,behandlingTilGodkjenning:!0}}]}),behandlingUuid:"1",behandlingVersjon:1}},p={args:{fagsakData:new g(d)}};var T,N,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const sa=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,p as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,sa as __namedExportsOrder,ra as default};
