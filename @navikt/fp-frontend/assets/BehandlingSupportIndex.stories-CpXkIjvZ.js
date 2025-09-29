import{k as j,w as I,j as E,B as D}from"./iframe-CsBD3T2M.js";import{Q as K}from"./index.es-DhJcGz6z.js";import{u as m,a as S,F as b,i as k,V as O,b as V,w as R,n as _,c as t,d as G}from"./fagsakApi-BJMA_Cxc.js";import{h as n,H as r,c as L}from"./index-BuAb35cs.js";import{g as v}from"./withIntl-xBvBB-WC.js";import{a as H}from"./alleKodeverk-DO07GSZv.js";import{a as w}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as h}from"./initFetchFptilbake-CspdHVpU.js";import{F as g}from"./FagsakData-EcIUMWsc.js";import{B as f}from"./BehandlingSupportIndex-ClGmCR-X.js";import{m as P}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-D90Uj1HC.js";import"./index-CmpEquNz.js";import"./CheckmarkCircleFill-CpyCiQqF.js";import"./ExclamationmarkTriangleFill-BcKqijKy.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-C9XODlHB.js";import"./paths-6hRtqE8e.js";import"./DokumentIndex-Dzrdw_jR.js";import"./ErrorBoundary-CfZNV5Jn.js";import"./eksterneLenker-CZTrovcW.js";import"./Link-Bwcjo2Gm.js";import"./IngenBehandlingValgtPanel-iah4s_Ou.js";import"./message-DllOlMsz.js";import"./errorType-CR8mmZf7.js";import"./Table-CrLUmXyP.js";import"./Checkbox-CollbgTs.js";import"./StarFill-D172kjIn.js";import"./SupportHeader-BNvYTP-p.js";import"./HistorikkIndex-BX0hQhlV.js";import"./PersonHeadset-CVZpdTVO.js";import"./MeldingIndex-Bz_c4APr.js";import"./index.es-DDM2ueLX.js";import"./index-ytCJHYfH.js";import"./Popover-CmKg7-AU.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-C5o7DuSm.js";import"./useKodeverk-CnL87gFS.js";import"./SettPaVentReadOnlyModal-DlQ80Gqx.js";import"./TotrinnskontrollIndex-0gHP11TO.js";import"./Checkmark-iAS4qzNf.js";import"./UtvidEllerMinskKnapp-EG4oIqKk.js";import"./DocPencil-C1VLt96C.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,U=v(P),s=a=>L(R(_(k.links.find(e=>e.rel===a)??k.sakLinks.find(e=>e.rel===a)??h.links.find(e=>e.rel===a)??h.sakLinks.find(e=>e.rel===a)).href)),u={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:O.OPPRETT},c={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:"BT-004",status:D.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:u,opprettet:"",gjeldendeVedtak:!1,behandlingHenlagt:!1,språkkode:"-",toTrinnsBehandling:!1,behandlingÅrsaker:[],vilkår:[],links:[],brevmaler:[],totrinnskontrollÅrsaker:[]},p={saksnummer:"123",fagsakYtelseType:"FP",status:V.UNDER_BEHANDLING,behandlinger:[c],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}],relasjonsRolleType:"-",aktørId:"",dekningsgrad:0,bruker:{navn:"",fødselsnummer:"",kjønn:"-",fødselsdato:"",dodsdato:void 0,språkkode:"-"},brukerManglerAdresse:!1,fagsakMarkeringer:[],historikkinnslag:[],kontrollResultat:{kontrollresultat:"-"},harVergeIÅpenBehandling:!1},_e={title:"fagsak/BehandlingSupportIndex",decorators:[U,j,I],component:f,parameters:{msw:{handlers:[n.get(b.INIT_FETCH,()=>r.json(k)),n.get(b.INIT_FETCH_FPTILBAKE,()=>r.json(h)),n.get(s(t.KODEVERK),()=>r.json(H)),n.get(s(t.KODEVERK_FPTILBAKE),()=>r.json(w)),n.get(s(t.KAN_TILBAKEKREVING_OPPRETTES),()=>r.json(!1)),n.get(s(t.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>r.json(!1))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:a=>{const{status:e}=m(G()),{kodeverkOptions:B,fptilbake:A}=S(),{data:F}=m(B(e==="success")),{data:N}=m(A.kodeverkOptions(e==="success"));return F&&N?E.jsx(f,{...a}):E.jsx(K,{})}},i={args:{fagsakData:new g(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingFraBeslutter:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingTilGodkjenning:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},d={args:{fagsakData:new g(p)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Ge=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,d as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,Ge as __namedExportsOrder,_e as default};
