import{g as I,w as K,j as b}from"./iframe-qRHtqp7Q.js";import{Z as N}from"./index.es-NJUZ_7pt.js";import{u as m,a as D,F as f,i as k,w as O,n as V,b as t,c as S}from"./fagsakApi-BvQRcxi3.js";import{h as a,H as r,c as R}from"./index-3WEybj0W.js";import{g as _}from"./withIntl-xXrSgTwY.js";import{a as v}from"./alleKodeverk-C9CgZbBn.js";import{a as G}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{F as g,V as L}from"./FagsakData-B6kNW04I.js";import{i as h}from"./initFetchFptilbake-CspdHVpU.js";import{B as E}from"./BehandlingSupportIndex-BE_4i7zK.js";import{m as w}from"./nb_NO-DoSdDVe_.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-dHHPLtpX.js";import"./index-BAHM_T3E.js";import"./CheckmarkCircleFill-C2EU5DHE.js";import"./ExclamationmarkTriangleFill-B_ZjGDND.js";import"./useTrackRouteParam-BiOophm7.js";import"./paths-kQgp8oMi.js";import"./DokumentIndex-CilEcniH.js";import"./FaktaKort-BUoi61rv.js";import"./eksterneLenker-CZTrovcW.js";import"./Link-DxRWQEOg.js";import"./message-bFiyVeFK.js";import"./Table-DczlITYN.js";import"./Checkbox--AyUEXJk.js";import"./StarFill-4AjiUgAM.js";import"./SupportHeader-p_ETp3CZ.js";import"./ErrorBoundary-FC06hxCd.js";import"./IngenBehandlingValgtPanel-BGNq2La0.js";import"./HistorikkIndex-gpvnH232.js";import"./PersonHeadset-Bkj-r_Un.js";import"./MeldingIndex-B1yRf3iH.js";import"./index.es-ibjRWTgb.js";import"./index-CFTsWOab.js";import"./Popover-Cbf5LwRW.js";import"./UkjentAdresseMeldingIndex-C_it3gu_.js";import"./useKodeverk-DbQbrXP4.js";import"./SettPaVentReadOnlyModal-DAPU3Z1I.js";import"./TotrinnskontrollIndex-DZiG0_eo.js";import"./Checkmark-DfLqXfUp.js";import"./UtvidEllerMinskKnapp-BNkBxfc7.js";import"./DocPencil-CafILOg5.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,H=_(w),s=n=>R(O(V(k.links.find(e=>e.rel===n)??k.sakLinks.find(e=>e.rel===n)??h.links.find(e=>e.rel===n)??h.sakLinks.find(e=>e.rel===n)).href)),u={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:L.OPPRETT},c={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:"BT-004",status:"UTRED",behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:u,opprettet:"",gjeldendeVedtak:!1,behandlingHenlagt:!1,språkkode:"-",toTrinnsBehandling:!1,behandlingÅrsaker:[],vilkår:[],links:[],brevmaler:[],totrinnskontrollÅrsaker:[]},p={saksnummer:"123",fagsakYtelseType:"FP",status:"UBEH",behandlinger:[c],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}],relasjonsRolleType:"-",aktørId:"",dekningsgrad:0,bruker:{navn:"",fødselsnummer:"",kjønn:"-",fødselsdato:"",dodsdato:void 0,språkkode:"-"},brukerManglerAdresse:!1,fagsakMarkeringer:[],historikkinnslag:[],kontrollResultat:{kontrollresultat:"-"},harVergeIÅpenBehandling:!1},Ne={title:"fagsak/BehandlingSupportIndex",decorators:[H,I,K],component:E,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>r.json(k)),a.get(f.INIT_FETCH_FPTILBAKE,()=>r.json(h)),a.get(s(t.KODEVERK),()=>r.json(v)),a.get(s(t.KODEVERK_FPTILBAKE),()=>r.json(G)),a.get(s(t.KAN_TILBAKEKREVING_OPPRETTES),()=>r.json(!1)),a.get(s(t.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>r.json(!1))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:n=>{const{status:e}=m(S()),{kodeverkOptions:F,fptilbake:j}=D(),{data:A}=m(F(e==="success")),{data:B}=m(j.kodeverkOptions(e==="success"));return A&&B?b.jsx(E,{...n}):b.jsx(N,{})}},i={args:{fagsakData:new g(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingFraBeslutter:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingTilGodkjenning:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},d={args:{fagsakData:new g(p)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
