import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{Q as A}from"./index.es-n0vZVEve.js";import{c as d,b as D,w as V,d as _,B as O,F as S}from"./withPanelData-uKl3GsGR.js";import{u as p,a as G,F as E,i as m,w as L,n as j,b as P,c as r}from"./fagsakApi-wAaVcobe.js";import{h as a,H as t}from"./index-CiTJJs0Y.js";import{F as v}from"./fagsakStatus-NXwGwLtb.js";import{g as w}from"./withIntl-C2ITiJjx.js";import{a as y}from"./alleKodeverk-Dm9joGL5.js";import{a as H}from"./alleKodeverkTilbakekreving-dIUSSyeF.js";import{F as K,V as x}from"./FagsakData-4_VgJz8T.js";import{i as l}from"./initFetchFptilbake-CspdHVpU.js";import{B as k}from"./BehandlingMenuIndex-QZtpqOvs.js";import{m as U}from"./nb_NO-BsDjQrpy.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-DYdilZYC.js";import"./ExclamationmarkTriangleFill-C4Vd7zRj.js";import"./message-BSePpvHj.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-B1iH7rW8.js";import"./iframe-AF2sq_Xy.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-BQggd8eJ.js";import"./Tag-81EUoXsI.js";import"./Popover-DcOqfPVD.js";import"./Checkbox-DYVaTQd4.js";import"./aksjonspunktCodes-BLM-Fgv6.js";import"./bind-oYjWB_aQ.js";import"./index.es-B7iJIGF7.js";import"./Link-Cdhxfmj8.js";import"./Tooltip-IUClvl4v.js";import"./Kjonnkode-C-fkzSiP.js";import"./Table-B7WopgUx.js";import"./behandlingResultatType-DHbqkXMl.js";import"./dokumentMalType-B-Xou3xH.js";import"./behandlingArsakType-CTXggz2Y.js";import"./SettPaVentModalIndex-DSvE0vPA.js";import"./venteArsakType-BJdSFL9e.js";import"./useBehandlingPollingOperasjoner-CSvRewt7.js";import"./behandlingApi-DVwnSWx7.js";import"./errorType-rskzfovb.js";import"./skjermlenkeCodes-1SvLTuBb.js";import"./RestApiErrorContext-D7YnyNzE.js";import"./useKodeverk-DulOeY5L.js";import"./useVisForhandsvisningAvMelding-DmIYSeU3.js";import"./paths-DnrC1Mf4.js";const M=w(U),s=n=>L(j(m.links.find(e=>e.rel===n)??m.sakLinks.find(e=>e.rel===n)??l.links.find(e=>e.rel===n)??l.sakLinks.find(e=>e.rel===n)).href),Q={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,vergeBehandlingsmeny:x.OPPRETT},C=[{versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,kanHenleggeBehandling:!0,type:O.REVURDERING,status:_.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:Q}],N={saksnummer:"123",fagsakYtelseType:S.FORELDREPENGER,status:v.UNDER_BEHANDLING,behandlinger:C,sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[]},Qe={title:"fagsak/BehandlingMenuIndex",decorators:[M,D,V],component:k,parameters:{msw:{handlers:[a.get(E.INIT_FETCH,()=>t.json(m)),a.get(E.INIT_FETCH_FPTILBAKE,()=>t.json(l)),a.get(s(r.KODEVERK),()=>t.json(y)),a.get(s(r.KODEVERK_FPTILBAKE),()=>t.json(H)),a.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>t.json(!1)),a.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>t.json(!1)),a.post(s(r.ENDRE_SAK_MARKERING),()=>new t(null,{status:200}))]}},args:{setBehandling:d("button-click"),hentOgSettBehandling:d("button-click")},render:n=>{const{status:e}=p(P()),{kodeverkOptions:T,fptilbake:I}=G(),{data:b}=p(T(e==="success")),{data:B}=p(I.kodeverkOptions(e==="success"));return b&&B?g.jsx(k,{...n}):g.jsx(A,{})}},o={args:{fagsakData:new K(N),behandlingUuid:"1"}},i={args:{fagsakData:new K(N)}};var h,c,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1'
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var f,F,R;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...(R=(F=i.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const Ce=["ValgNårBehandlingErValgt","ValgNårBehandlingIkkeErValgt"];export{o as ValgNårBehandlingErValgt,i as ValgNårBehandlingIkkeErValgt,Ce as __namedExportsOrder,Qe as default};
