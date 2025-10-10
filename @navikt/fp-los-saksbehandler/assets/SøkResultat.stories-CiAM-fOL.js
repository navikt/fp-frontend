import{w as t,j as s}from"./iframe-Cxiu9moG.js";import{Q as o}from"./index.es-DLn_AXM2.js";import{u as p}from"./useQuery-gJxwkrnl.js";import{h as m,L as l,H as i,l as d}from"./fplosSaksbehandlerApi-D1Zxrxmc.js";import{g as k}from"./withIntl-BXv-mgj5.js";import{a as g}from"./alleKodeverkLos-JR0SOFbV.js";import{K as u}from"./Kjonnkode-DjBoP8-t.js";import{S as n}from"./SøkResultat-Dw2yPpR0.js";import{m as f}from"./nb_NO-GnRbBCJl.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DiixKYlL.js";import"./useLosKodeverk-zVqvuNx5.js";import"./Table-Dp_wWKaU.js";import"./composeEventHandlers-CL7ondXh.js";import"./ChevronDown-C2V79gwj.js";import"./ChevronRight-cZjkh9ZF.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,v=k(f),F={title:"søk/SøkResultat",component:n,decorators:[v,t],args:{åpneFagsak:r("onÅpneFagsak"),selectOppgaveCallback:r("onSelectOppgave")},parameters:{msw:{handlers:[m.get(l.KODEVERK_LOS,()=>i.json(g))]}},render:a=>p(d()).data?s.jsx(n,{...a}):s.jsx(o,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:"FP",status:"UBEH",person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",fødselsnummer:"1010",kjønn:u.MANN,språkkode:"NB"},barnFødt:"2019-12-12",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:"BT-002",opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:"UNDER_ARBEID"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
      oppgaveBehandlingStatus: 'UNDER_ARBEID'
    }]
  }
}`,...e.parameters?.docs?.source}}};const A=["Default"];export{e as Default,A as __namedExportsOrder,F as default};
