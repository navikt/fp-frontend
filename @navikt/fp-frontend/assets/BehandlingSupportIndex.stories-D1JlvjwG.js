import{g as I,w as K,j as b}from"./iframe-BYsWLr_s.js";import{Z as N}from"./index.es-BgFhHOOl.js";import{u as m,a as D,F as f,i as k,w as O,n as V,b as t,c as S}from"./fagsakApi-C5o_ZRoX.js";import{h as a,H as r,c as R}from"./index-CtYb45BY.js";import{g as _}from"./withIntl-odnbnT0f.js";import{a as v}from"./alleKodeverk-C9CgZbBn.js";import{a as G}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{F as g,V as L}from"./FagsakData-B6kNW04I.js";import{i as h}from"./initFetchFptilbake-CspdHVpU.js";import{B as E}from"./BehandlingSupportIndex-OyJoPXX4.js";import{m as w}from"./nb_NO-DoSdDVe_.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-B-FdCJw0.js";import"./index-Bg9AqU8i.js";import"./CheckmarkCircleFill-B22qy0Xe.js";import"./ExclamationmarkTriangleFill-CN6hSfM_.js";import"./useTrackRouteParam-Co2MpW3Y.js";import"./paths-Dw1rAub6.js";import"./DokumentIndex-Cbep2rBz.js";import"./FaktaKort-DNMwRIKg.js";import"./eksterneLenker-CZTrovcW.js";import"./Link-B4tqC_jR.js";import"./message-CrGzTfFJ.js";import"./Table-ChQyY5PX.js";import"./Checkbox-C-ye5o_B.js";import"./StarFill-wq36ThLt.js";import"./SupportHeader-eD51Ki-K.js";import"./ErrorBoundary-F8H3LCID.js";import"./IngenBehandlingValgtPanel-CGLWb0s1.js";import"./HistorikkIndex-ZsE5Pzjj.js";import"./PersonHeadset-CoAlhR3u.js";import"./MeldingIndex-C1CeVZmY.js";import"./index.es-CAjsXMp1.js";import"./index-DHBcBcK-.js";import"./Popover-BUT48Zmj.js";import"./UkjentAdresseMeldingIndex-COENAlkx.js";import"./useKodeverk-CMcTmkY4.js";import"./SettPaVentReadOnlyModal-D5KzT-4Y.js";import"./TotrinnskontrollIndex-8sdlgcM7.js";import"./Checkmark-DNXit2pJ.js";import"./UtvidEllerMinskKnapp-CEQRh6oe.js";import"./DocPencil-CgEwvPWd.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,H=_(w),s=n=>R(O(V(k.links.find(e=>e.rel===n)??k.sakLinks.find(e=>e.rel===n)??h.links.find(e=>e.rel===n)??h.sakLinks.find(e=>e.rel===n)).href)),u={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:L.OPPRETT},c={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:"BT-004",status:"UTRED",behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:u,opprettet:"",gjeldendeVedtak:!1,behandlingHenlagt:!1,språkkode:"-",toTrinnsBehandling:!1,behandlingÅrsaker:[],vilkår:[],links:[],brevmaler:[],totrinnskontrollÅrsaker:[]},p={saksnummer:"123",fagsakYtelseType:"FP",status:"UBEH",behandlinger:[c],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}],relasjonsRolleType:"-",aktørId:"",dekningsgrad:0,bruker:{navn:"",fødselsnummer:"",kjønn:"-",fødselsdato:"",dodsdato:void 0,språkkode:"-"},brukerManglerAdresse:!1,fagsakMarkeringer:[],historikkinnslag:[],kontrollResultat:{kontrollresultat:"-"},harVergeIÅpenBehandling:!1},Ne={title:"fagsak/BehandlingSupportIndex",decorators:[H,I,K],component:E,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>r.json(k)),a.get(f.INIT_FETCH_FPTILBAKE,()=>r.json(h)),a.get(s(t.KODEVERK),()=>r.json(v)),a.get(s(t.KODEVERK_FPTILBAKE),()=>r.json(G)),a.get(s(t.KAN_TILBAKEKREVING_OPPRETTES),()=>r.json(!1)),a.get(s(t.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>r.json(!1))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:n=>{const{status:e}=m(S()),{kodeverkOptions:F,fptilbake:j}=D(),{data:A}=m(F(e==="success")),{data:B}=m(j.kodeverkOptions(e==="success"));return A&&B?b.jsx(E,{...n}):b.jsx(N,{})}},i={args:{fagsakData:new g(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingFraBeslutter:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingTilGodkjenning:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},d={args:{fagsakData:new g(p)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData({
      ...FAGSAK,
      behandlinger: [{
        ...BEHANDLING,
        behandlingTillatteOperasjoner: {
          ...BEHANDLING_TILLATTE_OPERASJONER,
          behandlingFraBeslutter: true,
          uuid: ''
        }
      }]
    }),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData({
      ...FAGSAK,
      behandlinger: [{
        ...BEHANDLING,
        behandlingTillatteOperasjoner: {
          ...BEHANDLING_TILLATTE_OPERASJONER,
          behandlingTilGodkjenning: true,
          uuid: ''
        }
      }]
    }),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...d.parameters?.docs?.source}}};const De=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,d as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,De as __namedExportsOrder,Ne as default};
