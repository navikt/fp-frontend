import{w as t,j as s}from"./iframe-DYQXSugv.js";import{Q as o}from"./index.es-C8XlgDNo.js";import{u as p}from"./useQuery-Ba6nhKfY.js";import{h as m,L as l,H as i,l as d}from"./fplosSaksbehandlerApi-BfsdCpZQ.js";import{O as k}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g}from"./withIntl-Bp8rqF47.js";import{a as u}from"./alleKodeverkLos-JR0SOFbV.js";import{K as f}from"./Kjonnkode-DjBoP8-t.js";import{S as n}from"./SøkResultat-DgosvXdX.js";import{m as v}from"./nb_NO-BkdgpR3F.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-Bxok6rQJ.js";import"./useLosKodeverk-CqoPwSmx.js";import"./Table-BZkjQVPB.js";import"./composeEventHandlers-D5zYzSMn.js";import"./ChevronDown-Cia31y9C.js";import"./ChevronRight-BoXsa9sa.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,c=g(v),x={title:"søk/SøkResultat",component:n,decorators:[c,t],args:{åpneFagsak:r("onÅpneFagsak"),selectOppgaveCallback:r("onSelectOppgave")},parameters:{msw:{handlers:[m.get(l.KODEVERK_LOS,()=>i.json(u))]}},render:a=>p(d()).data?s.jsx(n,{...a}):s.jsx(o,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:"FP",status:"UBEH",person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",fødselsnummer:"1010",kjønn:f.MANN,språkkode:"NB"},barnFødt:"2019-12-12",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:k.UNDER_ARBEID}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      aktørId: '',
      fagsakYtelseType: 'FP',
      status: 'UBEH',
      person: {
        navn: 'Espen Utvikler',
        fødselsdato: '1980-10-10',
        aktørId: '1234',
        fødselsnummer: '1010',
        kjønn: KjønnkodeEnum.MANN,
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
      behandlingstype: 'BT-002',
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }]
  }
}`,...e.parameters?.docs?.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,x as default};
