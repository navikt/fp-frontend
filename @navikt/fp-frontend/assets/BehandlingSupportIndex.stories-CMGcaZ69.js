import{k as I,w as K,j as b}from"./iframe-B0rs5mSc.js";import{Q as N}from"./index.es-CnwXS7-r.js";import{u as m,a as D,F as f,i as k,V as O,w as V,n as S,b as t,c as R}from"./fagsakApi-DNzcm8DU.js";import{h as a,H as r,c as _}from"./index-DMdEqgU2.js";import{g as v}from"./withIntl-a0IaCs2X.js";import{a as G}from"./alleKodeverk-DO07GSZv.js";import{a as L}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as h}from"./initFetchFptilbake-CspdHVpU.js";import{F as g}from"./FagsakData-EcIUMWsc.js";import{B as E}from"./BehandlingSupportIndex-eO4JxE3x.js";import{m as w}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-D6SAjkvB.js";import"./index-ClufUYiT.js";import"./CheckmarkCircleFill-DsMcI9Pz.js";import"./ExclamationmarkTriangleFill-DYlP65Al.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-CUlP9iNG.js";import"./paths-BymUWMa5.js";import"./DokumentIndex-axsnkECG.js";import"./ErrorBoundary-DpSBWk3o.js";import"./eksterneLenker-CZTrovcW.js";import"./Link-B-V9fx3y.js";import"./IngenBehandlingValgtPanel-CbnuVFFb.js";import"./message-53Aw4P6w.js";import"./errorType-CR8mmZf7.js";import"./Table-Cxu1QUr3.js";import"./Checkbox-CW3ugs7G.js";import"./StarFill-P6EdTcBc.js";import"./SupportHeader-CN8Z-A9p.js";import"./HistorikkIndex-CYHZrVpM.js";import"./PersonHeadset-CBAUv-Ep.js";import"./MeldingIndex-CvJZhxMk.js";import"./index.es-Cp6gVENV.js";import"./index-B9wlCCrQ.js";import"./Popover-CRDyh1xr.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-MeHlfZXF.js";import"./useKodeverk-DUqnEMjI.js";import"./SettPaVentReadOnlyModal-wT12tFyi.js";import"./TotrinnskontrollIndex-DysgHY2B.js";import"./Checkmark-Cj0bvwk8.js";import"./UtvidEllerMinskKnapp-md7ab7rV.js";import"./DocPencil-Cs6MMa2a.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,H=v(w),s=n=>_(V(S(k.links.find(e=>e.rel===n)??k.sakLinks.find(e=>e.rel===n)??h.links.find(e=>e.rel===n)??h.sakLinks.find(e=>e.rel===n)).href)),u={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:O.OPPRETT},c={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:"BT-004",status:"UTRED",behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:u,opprettet:"",gjeldendeVedtak:!1,behandlingHenlagt:!1,språkkode:"-",toTrinnsBehandling:!1,behandlingÅrsaker:[],vilkår:[],links:[],brevmaler:[],totrinnskontrollÅrsaker:[]},p={saksnummer:"123",fagsakYtelseType:"FP",status:"UBEH",behandlinger:[c],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}],relasjonsRolleType:"-",aktørId:"",dekningsgrad:0,bruker:{navn:"",fødselsnummer:"",kjønn:"-",fødselsdato:"",dodsdato:void 0,språkkode:"-"},brukerManglerAdresse:!1,fagsakMarkeringer:[],historikkinnslag:[],kontrollResultat:{kontrollresultat:"-"},harVergeIÅpenBehandling:!1},Se={title:"fagsak/BehandlingSupportIndex",decorators:[H,I,K],component:E,parameters:{msw:{handlers:[a.get(f.INIT_FETCH,()=>r.json(k)),a.get(f.INIT_FETCH_FPTILBAKE,()=>r.json(h)),a.get(s(t.KODEVERK),()=>r.json(G)),a.get(s(t.KODEVERK_FPTILBAKE),()=>r.json(L)),a.get(s(t.KAN_TILBAKEKREVING_OPPRETTES),()=>r.json(!1)),a.get(s(t.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>r.json(!1))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:n=>{const{status:e}=m(R()),{kodeverkOptions:F,fptilbake:j}=D(),{data:A}=m(F(e==="success")),{data:B}=m(j.kodeverkOptions(e==="success"));return A&&B?b.jsx(E,{...n}):b.jsx(N,{})}},i={args:{fagsakData:new g(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingFraBeslutter:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingTilGodkjenning:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},d={args:{fagsakData:new g(p)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Re=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,d as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,Re as __namedExportsOrder,Se as default};
