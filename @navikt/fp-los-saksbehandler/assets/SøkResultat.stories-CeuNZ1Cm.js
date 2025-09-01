import{w as t,B as o,j as n}from"./iframe-CEmqnPfo.js";import{Q as p}from"./index.es-CLQDx-mi.js";import{u as l}from"./useLosKodeverk-Baudd7nC.js";import{a as d,L as m,H as i,l as k}from"./fplosSaksbehandlerApi-Fx4pLV7i.js";import{S as s,F as u}from"./SøkResultat-Dgi8_8NJ.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as f}from"./withIntl-D8s6mJK8.js";import{a as S}from"./alleKodeverkLos-JR0SOFbV.js";import{K as E}from"./Kjonnkode-DjBoP8-t.js";import{m as v}from"./nb_NO-FOl0qZti.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-W4N4n3J_.js";import"./Table-CxoJC-IQ.js";import"./ArrowsUpDown-IsItxp4a.js";import"./composeEventHandlers-CJyonZHw.js";import"./ChevronRight-DHn95uwx.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,O=f(v),x={title:"søk/SøkResultat",component:s,decorators:[O,t],args:{åpneFagsak:a("onÅpneFagsak"),selectOppgaveCallback:a("onSelectOppgave")},parameters:{msw:{handlers:[d.get(m.KODEVERK_LOS,()=>i.json(S))]}},render:r=>l(k()).data?n.jsx(s,{...r}):n.jsx(p,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:"FP",status:u.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",dødsdato:null,fødselsnummer:"1010",kjønn:E.MANN,diskresjonskode:null,språkkode:"NB"},barnFødt:"2019-12-12",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:g.UNDER_ARBEID}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
      behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID
    }]
  }
}`,...e.parameters?.docs?.source}}};const G=["Default"];export{e as Default,G as __namedExportsOrder,x as default};
