import{k as I,w as K,j as b}from"./iframe-CMzPoObE.js";import{Q as N}from"./index.es-Hi99Ep8F.js";import{u as k,a as D,F as f,i as m,w as O,n as V,b as t,c as S}from"./fagsakApi-B8itA9jL.js";import{h as a,H as r,c as R}from"./index-Dqf7-n6v.js";import{g as _}from"./withIntl-CtFcsSJ_.js";import{a as v}from"./alleKodeverk-DO07GSZv.js";import{a as G}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{F as g,V as L}from"./FagsakData-B6kNW04I.js";import{i as h}from"./initFetchFptilbake-CspdHVpU.js";import{B as E}from"./BehandlingSupportIndex-tzlm8Epe.js";import{m as w}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-BOeSKnhy.js";import"./index-pHM88w22.js";import"./CheckmarkCircleFill-Byg1NzzB.js";import"./ExclamationmarkTriangleFill-entbZvgt.js";import"./useTrackRouteParam-D0EHoWYL.js";import"./paths-cz6MvGb8.js";import"./DokumentIndex-DogTwUHn.js";import"./ErrorBoundary-JUprwu5C.js";import"./eksterneLenker-CZTrovcW.js";import"./Link-DJjJD9fR.js";import"./IngenBehandlingValgtPanel-BCAEQu3k.js";import"./message-D0JXGJu6.js";import"./errorType-CR8mmZf7.js";import"./Table-bPXPP8to.js";import"./Checkbox-Cwu09RGI.js";import"./StarFill-ijDhGEIK.js";import"./SupportHeader-BP9_6LRr.js";import"./HistorikkIndex-CYIuepbZ.js";import"./PersonHeadset-5KINYK7_.js";import"./MeldingIndex-D_6px4ff.js";import"./index.es-BRT9NTm4.js";import"./index-B5_m-D7B.js";import"./Popover-BhwOJ0tH.js";import"./UkjentAdresseMeldingIndex-9Ju-peNH.js";import"./useKodeverk-zBOIC8q-.js";import"./SettPaVentReadOnlyModal-CnVJxJg2.js";import"./TotrinnskontrollIndex-BXpjhuDc.js";import"./Checkmark-Cg3QIjVb.js";import"./UtvidEllerMinskKnapp-CfyvyW1V.js";import"./DocPencil-C2m3KCem.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,H=_(w),s=n=>R(O(V(m.links.find(e=>e.rel===n)??m.sakLinks.find(e=>e.rel===n)??h.links.find(e=>e.rel===n)??h.sakLinks.find(e=>e.rel===n)).href)),u={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:L.OPPRETT},c={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:"BT-004",status:"UTRED",behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:u,opprettet:"",gjeldendeVedtak:!1,behandlingHenlagt:!1,språkkode:"-",toTrinnsBehandling:!1,behandlingÅrsaker:[],vilkår:[],links:[],brevmaler:[],totrinnskontrollÅrsaker:[]},p={saksnummer:"123",fagsakYtelseType:"FP",status:"UBEH",behandlinger:[c],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}],relasjonsRolleType:"-",aktørId:"",dekningsgrad:0,bruker:{navn:"",fødselsnummer:"",kjønn:"-",fødselsdato:"",dodsdato:void 0,språkkode:"-"},brukerManglerAdresse:!1,fagsakMarkeringer:[],historikkinnslag:[],kontrollResultat:{kontrollresultat:"-"},harVergeIÅpenBehandling:!1},Ne={title:"fagsak/BehandlingSupportIndex",decorators:[H,I,K],component:E,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>r.json(m)),a.get(f.INIT_FETCH_FPTILBAKE,()=>r.json(h)),a.get(s(t.KODEVERK),()=>r.json(v)),a.get(s(t.KODEVERK_FPTILBAKE),()=>r.json(G)),a.get(s(t.KAN_TILBAKEKREVING_OPPRETTES),()=>r.json(!1)),a.get(s(t.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>r.json(!1))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:n=>{const{status:e}=k(S()),{kodeverkOptions:F,fptilbake:j}=D(),{data:A}=k(F(e==="success")),{data:B}=k(j.kodeverkOptions(e==="success"));return A&&B?b.jsx(E,{...n}):b.jsx(N,{})}},i={args:{fagsakData:new g(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingFraBeslutter:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingTilGodkjenning:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},d={args:{fagsakData:new g(p)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
