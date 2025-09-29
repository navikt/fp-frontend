import{w as t,j as s}from"./iframe-CF8fhdT_.js";import{Q as o}from"./index.es-WP0U6Vwi.js";import{u as p}from"./useQuery-swBBePYk.js";import{h as m,L as l,H as i,l as d}from"./fplosSaksbehandlerApi-5-Mp6zjg.js";import{S as n,F as k}from"./SøkResultat-CvpEtpyn.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as u}from"./withIntl-CT0Bxjve.js";import{a as f}from"./alleKodeverkLos-JR0SOFbV.js";import{K as v}from"./Kjonnkode-DjBoP8-t.js";import{m as E}from"./nb_NO-B0MwT9px.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-De7v7hMf.js";import"./useLosKodeverk-Bi5cHP5c.js";import"./Table-BhFkQhxm.js";import"./composeEventHandlers-Bl9pufit.js";import"./ChevronDown-DCCkzgwb.js";import"./ChevronRight-2dAXi6FE.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,S=u(E),x={title:"søk/SøkResultat",component:n,decorators:[S,t],args:{åpneFagsak:a("onÅpneFagsak"),selectOppgaveCallback:a("onSelectOppgave")},parameters:{msw:{handlers:[m.get(l.KODEVERK_LOS,()=>i.json(f))]}},render:r=>p(d()).data?s.jsx(n,{...r}):s.jsx(o,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:"FP",status:k.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",fødselsnummer:"1010",kjønn:v.MANN,språkkode:"NB"},barnFødt:"2019-12-12",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:g.UNDER_ARBEID}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      aktørId: '',
      fagsakYtelseType: 'FP',
      status: FagsakStatusEnum.UNDER_BEHANDLING,
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
}`,...e.parameters?.docs?.source}}};const Y=["Default"];export{e as Default,Y as __namedExportsOrder,x as default};
