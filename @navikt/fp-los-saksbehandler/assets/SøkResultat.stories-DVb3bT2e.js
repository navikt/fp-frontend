import{w as o,F as s,B as p,j as a}from"./iframe-BVcRJGzc.js";import{Q as l}from"./index.es-DFzNGyCV.js";import{u as d}from"./useLosKodeverk-rEeTqbzN.js";import{a as m,L as i,H as k,l as g}from"./fplosSaksbehandlerApi-DrPTghV4.js";import{S as n,F as u}from"./SøkResultat-BR0Me-Qk.js";import{O as E}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as R}from"./withIntl-B-rDPHaC.js";import{a as f}from"./alleKodeverkLos-JR0SOFbV.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{m as v}from"./nb_NO-Cya3_SoH.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-LcxfTbh8.js";import"./Table-DhotFuBY.js";import"./ArrowsUpDown-DhwCN_Xo.js";import"./composeEventHandlers-qMugrl-b.js";import"./ChevronRight-T4X1eBRU.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,O=R(v),Y={title:"søk/SøkResultat",component:n,decorators:[O,o],args:{åpneFagsak:t("onÅpneFagsak"),selectOppgaveCallback:t("onSelectOppgave")},parameters:{msw:{handlers:[m.get(i.KODEVERK_LOS,()=>k.json(f))]}},render:r=>d(g()).data?a.jsx(n,{...r}):a.jsx(l,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:u.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",dødsdato:null,fødselsnummer:"1010",kjønn:S.MANN,diskresjonskode:null,språkkode:"NB"},barnFødt:"2019-12-12",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:E.UNDER_ARBEID}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      aktørId: '',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      status: FagsakStatus.UNDER_BEHANDLING,
      person: {
        navn: 'Espen Utvikler',
        fødselsdato: '1980-10-10',
        aktørId: '1234',
        dødsdato: null,
        fødselsnummer: '1010',
        kjønn: KjønnkodeEnum.MANN,
        diskresjonskode: null,
        språkkode: 'NB'
      },
      barnFødt: '2019-12-12',
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
    }]
  }
}`,...e.parameters?.docs?.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,Y as default};
