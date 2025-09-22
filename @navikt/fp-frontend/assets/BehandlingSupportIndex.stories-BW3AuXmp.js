import{g as N,w as j,j as c,y as V,B as D}from"./iframe-ofscmWXT.js";import{Q as K}from"./index.es-C3OhgBh9.js";import{u,a as R,F as b,i as k,V as S,b as O,w as _,n as v,c as r,d as G}from"./fagsakApi-CxGlOGYP.js";import{h as e,H as a,c as L}from"./index-DPTMaR0S.js";import{g as P}from"./withIntl-DRZ5a3cA.js";import{a as w}from"./alleKodeverk-DO07GSZv.js";import{a as H}from"./alleKodeverkTilbakekreving-Be1AQMGs.js";import{i as m}from"./initFetchFptilbake-CspdHVpU.js";import{F as g}from"./FagsakData-EcIUMWsc.js";import{B as f}from"./BehandlingSupportIndex-DusABmst.js";import{m as U}from"./nb_NO-Bq9izkJc.js";import"./preload-helper-PPVm8Dsz.js";import"./VStack-BCm7KbjJ.js";import"./index-jfpbAGOn.js";import"./CheckmarkCircleFill-CNHYGEca.js";import"./ExclamationmarkTriangleFill-DCoI8FoY.js";import"./behandlingResultatType-CVAxOrek.js";import"./vilkarUtfallType-vN0hVpa7.js";import"./useTrackRouteParam-CTmYeSJL.js";import"./paths-BSracH8s.js";import"./DokumentIndex-B0cGRJdj.js";import"./FaktaKort-Ch9II2Zb.js";import"./eksterneLenker-DcE6CUbm.js";import"./Link-CsCwicKX.js";import"./message-DOgC_PYu.js";import"./Table-BI-tRTv4.js";import"./Checkbox-DNtqh5gZ.js";import"./StarFill-DMUEeB3_.js";import"./SupportHeader-wQ7uryWK.js";import"./ErrorBoundary-D-TRfwTq.js";import"./IngenBehandlingValgtPanel-BzZTr4Sy.js";import"./errorType-MMxNUCce.js";import"./HistorikkIndex-DkJTVUJ3.js";import"./PersonHeadset-bWj45RVy.js";import"./MeldingIndex-Bxnt1g50.js";import"./index.es-DpAFdiQO.js";import"./index-DYumeMYr.js";import"./Popover-BWEByriw.js";import"./dokumentMalType-B-Xou3xH.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-DQYPeQ4g.js";import"./useKodeverk-CN8Fw91G.js";import"./SettPaVentReadOnlyModal-CbFoKGx1.js";import"./TotrinnskontrollIndex-DvAxeULm.js";import"./Checkmark-B3lnOeJ6.js";import"./UtvidEllerMinskKnapp-BaY1TQ7f.js";import"./DocPencil-Cd707G8E.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,y=P(U),s=t=>L(_(v(k.links.find(n=>n.rel===t)??k.sakLinks.find(n=>n.rel===t)??m.links.find(n=>n.rel===t)??m.sakLinks.find(n=>n.rel===t)).href)),h={behandlingFraBeslutter:!1,behandlingKanSendeMelding:!0,behandlingTilGodkjenning:!1,behandlingKanBytteEnhet:!0,behandlingKanHenlegges:!0,behandlingKanGjenopptas:!1,behandlingKanOpnesForEndringer:!0,behandlingKanSettesPaVent:!0,behandlingKanMerkesHaster:!1,vergeBehandlingsmeny:S.OPPRETT,uuid:null},E={versjon:2,uuid:"1",behandlingKøet:!1,behandlingPåVent:!1,type:D.REVURDERING,status:V.BEHANDLING_UTREDES,behandlendeEnhetId:"2323",behandlendeEnhetNavn:"Nav Vikafossen",erAktivPapirsoknad:!1,behandlingTillatteOperasjoner:h,id:null,fagsakId:null,opprettet:"",avsluttet:null,endret:null,endretAvBrukernavn:null,førsteÅrsak:null,behandlingsfristTid:null,gjeldendeVedtak:!1,erPaaVent:null,originalVedtaksDato:null,behandlingHenlagt:!1,behandlingPaaVent:null,fristBehandlingPåVent:null,fristBehandlingPaaVent:null,venteArsakKode:null,venteÅrsakKode:null,sprakkode:null,språkkode:"-",ansvarligSaksbehandler:null,toTrinnsBehandling:!1,behandlingsresultat:null,behandlingÅrsaker:[],vilkår:[],links:[],brevmaler:[],totrinnskontrollÅrsaker:[],totrinnskontrollReadonly:null,risikoAksjonspunkt:null,kontrollResultat:null,ugunstAksjonspunkt:null,behandlingKoet:null},p={saksnummer:"123",fagsakYtelseType:"FP",status:O.UNDER_BEHANDLING,behandlinger:[E],sakSkalTilInfotrygd:!1,behandlingTypeKanOpprettes:[],notater:[{notat:"Dette er et notat",opprettetAv:"Espen",opprettetTidspunkt:"2024-10-10"}],relasjonsRolleType:"-",aktørId:"",dekningsgrad:0,bruker:{aktørId:null,navn:"",fødselsnummer:"",kjønn:"-",diskresjonskode:null,fødselsdato:"",dødsdato:null,dodsdato:void 0,språkkode:"-"},brukerManglerAdresse:!1,annenPart:null,annenpartBehandling:null,familiehendelse:null,fagsakMarkeringer:[],historikkinnslag:[],kontrollResultat:{kontrollresultat:"-",iayFaresignaler:null,medlFaresignaler:null,faresignalVurdering:null},harVergeIÅpenBehandling:!1},Ln={title:"fagsak/BehandlingSupportIndex",decorators:[y,N,j],component:f,parameters:{msw:{handlers:[e.get(b.INIT_FETCH,()=>a.json(k)),e.get(b.INIT_FETCH_FPTILBAKE,()=>a.json(m)),e.get(s(r.KODEVERK),()=>a.json(w)),e.get(s(r.KODEVERK_FPTILBAKE),()=>a.json(H)),e.get(s(r.KAN_TILBAKEKREVING_OPPRETTES),()=>a.json(!1)),e.get(s(r.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES),()=>a.json(!1)),e.post(s(r.ENDRE_SAK_MARKERING),()=>new a(null,{status:200}))]}},args:{hentOgSettBehandling:T("button-click"),toggleVisUtvidetBehandlingDetaljer:T("button-click"),visUtvidetBehandlingDetaljer:!1},render:t=>{const{status:n}=u(G()),{kodeverkOptions:A,fptilbake:B}=R(),{data:F}=u(A(n==="success")),{data:I}=u(B.kodeverkOptions(n==="success"));return F&&I?c.jsx(f,{...t}):c.jsx(K,{})}},l={args:{fagsakData:new g(p),behandlingUuid:"1",behandlingVersjon:1}},i={args:{fagsakData:new g({...p,behandlinger:[{...E,behandlingTillatteOperasjoner:{...h,behandlingFraBeslutter:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},o={args:{fagsakData:new g({...p,behandlinger:[{...E,behandlingTillatteOperasjoner:{...h,behandlingTilGodkjenning:!0,uuid:""}}]}),behandlingUuid:"1",behandlingVersjon:1}},d={args:{fagsakData:new g(p)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
