import{g as N,w as j,j as c,y as V,B as D}from"./iframe-Db-koUBY.js";import{Q as K}from"./index.es-C_1RIUjT.js";import{u,a as R,F as b,i as k,V as S,b as O,w as _,n as v,c as r,d as G}from"./fagsakApi-Bm7PkTLJ.js";import{h as e,H as a,c as L}from"./index-XWILrhG8.js";import{g as P}from"./withIntl-OOX2w8w8.js";import{a as w}from"./alleKodeverk-DO07GSZv.js";import{a as H}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as m}from"./initFetchFptilbake-CspdHVpU.js";import{F as g}from"./FagsakData-EcIUMWsc.js";import{B as f}from"./BehandlingSupportIndex-W2cQMv79.js";import{m as U}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-D0ox09hP.js";import"./index-wo4Kxyn3.js";import"./CheckmarkCircleFill-Dn9wVH4y.js";import"./ExclamationmarkTriangleFill-BCrRjMiZ.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-CwwQNRCI.js";import"./paths-BtIViHFM.js";import"./DokumentIndex-CjpDPKsk.js";import"./FaktaKort-KoyN2Fyc.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-kuh8xvpf.js";import"./message-w90zQyUq.js";import"./Table-Oi7xCUV-.js";import"./Checkbox-BOPPmgEi.js";import"./StarFill-UEca6Ipq.js";import"./SupportHeader-Djv9pmDZ.js";import"./ErrorBoundary-CTYjO0aZ.js";import"./IngenBehandlingValgtPanel-CKgclleC.js";import"./errorType-Bo1nOQfn.js";import"./HistorikkIndex-C38XMIXD.js";import"./PersonHeadset-FRZg4FJV.js";import"./MeldingIndex-DPpEUdMa.js";import"./index.es-sVEX3Xqs.js";import"./index-DaQ3xigM.js";import"./Popover-BKy8-ucm.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-D387s4_e.js";import"./useKodeverk-C0JtH04S.js";import"./SettPaVentReadOnlyModal-0wSSIUil.js";import"./TotrinnskontrollIndex-xTBnbm8s.js";import"./Checkmark-CzfZpyMA.js";import"./UtvidEllerMinskKnapp-CsAXKwaz.js";import"./DocPencil-Dvyjfy2W.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,y=P(U),s=t=>L(_(v(k.links.find(n=>n.rel===t)??k.sakLinks.find(n=>n.rel===t)??m.links.find(n=>n.rel===t)??m.sakLinks.find(n=>n.rel===t)).href)),h={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:S.OPPRETT,uuid:null},E={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:D.REVURDERING,status:V.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:h,id:null,fagsakId:null,opprettet:"",avsluttet:null,endret:null,endretAvBrukernavn:null,førsteÅrsak:null,behandlingsfristTid:null,gjeldendeVedtak:!1,erPaaVent:null,originalVedtaksDato:null,behandlingHenlagt:!1,behandlingPaaVent:null,fristBehandlingPåVent:null,fristBehandlingPaaVent:null,venteArsakKode:null,venteÅrsakKode:null,sprakkode:null,språkkode:"-",ansvarligSaksbehandler:null,toTrinnsBehandling:!1,behandlingsresultat:null,behandlingÅrsaker:[],vilkår:[],links:[],brevmaler:[],totrinnskontrollÅrsaker:[],totrinnskontrollReadonly:null,risikoAksjonspunkt:null,kontrollResultat:null,ugunstAksjonspunkt:null,behandlingKoet:null},p={saksnummer:"123",fagsakYtelseType:"FP",status:O.UNDER_BEHANDLING,behandlinger:[E],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}],relasjonsRolleType:"-",aktørId:"",dekningsgrad:0,bruker:{aktørId:null,navn:"",fødselsnummer:"",kjønn:"-",diskresjonskode:null,fødselsdato:"",dødsdato:null,dodsdato:void 0,språkkode:"-"},brukerManglerAdresse:!1,annenPart:null,annenpartBehandling:null,familiehendelse:null,fagsakMarkeringer:[],historikkinnslag:[],kontrollResultat:{kontrollresultat:"-",iayFaresignaler:null,medlFaresignaler:null,faresignalVurdering:null},harVergeIÅpenBehandling:!1},Ln={title:"fagsak/BehandlingSupportIndex",decorators:[y,N,j],component:f,parameters:{msw:{handlers:[e.get(b.INIT_FETCH,()=>a.json(k)),e.get(b.INIT_FETCH_FPTILBAKE,()=>a.json(m)),e.get(s(r.KODEVERK),()=>a.json(w)),e.get(s(r.KODEVERK_FPTILBAKE),()=>a.json(H)),e.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>a.json(!1)),e.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>a.json(!1)),e.post(s(r.ENDRE_SAK_MARKERING),()=>new a(null,{status:200}))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:n}=u(G()),{kodeverkOptions:A,fptilbake:B}=R(),{data:F}=u(A(n==="success")),{data:I}=u(B.kodeverkOptions(n==="success"));return F&&I?c.jsx(f,{...t}):c.jsx(K,{})}},l={args:{fagsakData:new g(p),behandlingUuid:"1",behandlingVersjon:1}},i={args:{fagsakData:new g({...p,behandlinger:[{...E,behandlingTillatteOperasjoner:{...h,behandlingFraBeslutter:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...p,behandlinger:[{...E,behandlingTillatteOperasjoner:{...h,behandlingTilGodkjenning:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},d={args:{fagsakData:new g(p)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1',
    behandlingVersjon: 1
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fagsakData: new FagsakData(FAGSAK)
  }
}`,...d.parameters?.docs?.source}}};const Pn=["NårBehandlingErValgt","SkalViseFraBeslutter","SkalViseFraGodkjenning","NårBehandlingIkkeErValgt"];export{l as NårBehandlingErValgt,d as NårBehandlingIkkeErValgt,i as SkalViseFraBeslutter,o as SkalViseFraGodkjenning,Pn as __namedExportsOrder,Ln as default};
