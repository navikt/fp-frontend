import{w as l,F as a,B as r,j as t}from"./iframe-6sLc6nWL.js";import{Q as d}from"./index.es-BzBsaHxG.js";import{u as m}from"./useLosKodeverk-BRGadkE-.js";import{a as g,L as k,H as u,l as E}from"./fplosSaksbehandlerApi-D0kriSNO.js";import{F as R}from"./SøkResultat-FKYZc6kb.js";import{O as o}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as S}from"./withIntl-nMFV4D_u.js";import{a as f}from"./alleKodeverkLos-JR0SOFbV.js";import{K as c}from"./Kjonnkode-C-fkzSiP.js";import{F as p}from"./FagsakSøk-ak_Ix5Z_.js";import{m as v}from"./nb_NO-CTGRyfFc.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-Bsz5sjnH.js";import"./Table-CY8X8NS9.js";import"./ArrowsUpDown-DGKfLMsn.js";import"./composeEventHandlers-Ilc965z7.js";import"./ChevronRight-DcI2uZ4-.js";import"./SøkForm-C1VAu1x0.js";import"./index.es-I3DalEUC.js";import"./Modal-C9rYWZHM.js";import"./index-DmxU5NkJ.js";import"./Tag-BHN0w7_X.js";import"./VStack-_sYn5JF6.js";import"./ExclamationmarkTriangleFill-CpNk3nK_.js";import"./PersonInfo-CrjlxKRp.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,h=S(v),z={title:"søk/FagsakSøk",component:p,decorators:[h,l],parameters:{msw:{handlers:[g.get(k.KODEVERK_LOS,()=>u.json(f))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:i=>m(E()).data?t.jsx(p,{...i}):t.jsx(d,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:R.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:c.MANN,diskresjonskode:null,språkkode:"NB"},barnFødt:"2019-12-12",aktørId:"23",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:o.UNDER_ARBEID},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:o.UNDER_ARBEID}]}},s={args:{fagsaker:[],fagsakOppgaver:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      status: FagsakStatus.UNDER_BEHANDLING,
      person: {
        navn: 'Espen Utvikler',
        fødselsdato: '1980-10-10',
        dødsdato: null,
        fødselsnummer: '1010',
        aktørId: '23',
        kjønn: KjønnkodeEnum.MANN,
        diskresjonskode: null,
        språkkode: 'NB'
      },
      barnFødt: '2019-12-12',
      aktørId: '23',
      opprettet: '',
      relasjonsRolleType: '-'
    }],
    fagsakOppgaver: [{
      id: 1,
      reservasjonStatus: {
        erReservert: false
      },
      saksnummer: '12213234',
      personnummer: '1010',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }, {
      id: 2,
      reservasjonStatus: {
        erReservert: false
      },
      saksnummer: '12213234',
      personnummer: '1010',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }]
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...s.parameters?.docs?.source}}};const J=["Default","IngentingBleFunnet"];export{n as Default,s as IngentingBleFunnet,J as __namedExportsOrder,z as default};
