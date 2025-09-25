import{g as I,w as j,j as E,y as D,B as K}from"./iframe-BcF5WgZP.js";import{Q as S}from"./index.es-BFNJ8sl6.js";import{u as m,a as V,F as b,i as k,V as O,b as R,w as _,n as G,c as t,d as L}from"./fagsakApi-o_VXIJav.js";import{h as n,H as r,c as v}from"./index-Dgppw5sE.js";import{g as H}from"./withIntl-ulDVtPto.js";import{a as U}from"./alleKodeverk-DO07GSZv.js";import{a as w}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as h}from"./initFetchFptilbake-CspdHVpU.js";import{F as g}from"./FagsakData-EcIUMWsc.js";import{B as f}from"./BehandlingSupportIndex-D3u4_jhy.js";import{m as P}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-DTYPuBbn.js";import"./index-D7FMeoOj.js";import"./CheckmarkCircleFill-DlML8yMR.js";import"./ExclamationmarkTriangleFill-CEvKEdx2.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-rFiVS3zF.js";import"./paths-D1NE_CT-.js";import"./DokumentIndex-CzK2CoqS.js";import"./FaktaKort-Cmja-uoy.js";import"./eksterneLenker-CZTrovcW.js";import"./Link-DLR36E-i.js";import"./message-D5eaNvsm.js";import"./Table-C7aJZNBj.js";import"./Checkbox-C65Qc4nE.js";import"./StarFill-7cutE3ef.js";import"./SupportHeader-CCdnYuoK.js";import"./ErrorBoundary-xT8fC7Yz.js";import"./IngenBehandlingValgtPanel-Dt4srAOY.js";import"./errorType-Dr6ShkYB.js";import"./HistorikkIndex-C21CIQgc.js";import"./PersonHeadset-D3wp2fNu.js";import"./MeldingIndex-CEzXksqx.js";import"./index.es-Cn9xryLu.js";import"./index-Bfib5FnH.js";import"./Popover-BgO7YwnK.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-ciJcxIgS.js";import"./useKodeverk-D9eUSOJT.js";import"./SettPaVentReadOnlyModal-BFFixmDg.js";import"./TotrinnskontrollIndex-zfIBazh4.js";import"./Checkmark-B59P6qbe.js";import"./UtvidEllerMinskKnapp-BaXQLgAB.js";import"./DocPencil-C9ecchxi.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,y=H(P),s=a=>v(_(G(k.links.find(e=>e.rel===a)??k.sakLinks.find(e=>e.rel===a)??h.links.find(e=>e.rel===a)??h.sakLinks.find(e=>e.rel===a)).href)),u={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:O.OPPRETT},c={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:K.REVURDERING,status:D.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:u,opprettet:"",gjeldendeVedtak:!1,behandlingHenlagt:!1,språkkode:"-",toTrinnsBehandling:!1,behandlingÅrsaker:[],vilkår:[],links:[],brevmaler:[],totrinnskontrollÅrsaker:[]},p={saksnummer:"123",fagsakYtelseType:"FP",status:R.UNDER_BEHANDLING,behandlinger:[c],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}],relasjonsRolleType:"-",aktørId:"",dekningsgrad:0,bruker:{navn:"",fødselsnummer:"",kjønn:"-",fødselsdato:"",dodsdato:void 0,språkkode:"-"},brukerManglerAdresse:!1,fagsakMarkeringer:[],historikkinnslag:[],kontrollResultat:{kontrollresultat:"-"},harVergeIÅpenBehandling:!1},Le={title:"fagsak/BehandlingSupportIndex",decorators:[y,I,j],component:f,parameters:{msw:{handlers:[n.get(b.INIT_FETCH,()=>r.json(k)),n.get(b.INIT_FETCH_FPTILBAKE,()=>r.json(h)),n.get(s(t.KODEVERK),()=>r.json(U)),n.get(s(t.KODEVERK_FPTILBAKE),()=>r.json(w)),n.get(s(t.KAN_TILBAKEKREVING_OPPRETTES),()=>r.json(!1)),n.get(s(t.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>r.json(!1))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:a=>{const{status:e}=m(L()),{kodeverkOptions:B,fptilbake:A}=V(),{data:F}=m(B(e==="success")),{data:N}=m(A.kodeverkOptions(e==="success"));return F&&N?E.jsx(f,{...a}):E.jsx(S,{})}},i={args:{fagsakData:new g(p),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingFraBeslutter:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},l={args:{fagsakData:new g({...p,behandlinger:[{...c,behandlingTillatteOperasjoner:{...u,behandlingTilGodkjenning:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},d={args:{fagsakData:new g(p)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ve=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{i as NårBehandlingErValgt,d as NårBehandlingIkkeErValgt,o as SkalViseFraBeslutter,l as SkalViseFraGodkjenning,ve as __namedExportsOrder,Le as default};
