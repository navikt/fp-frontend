import{w as t,B as o,j as n}from"./iframe-DAr4z3wg.js";import{Q as p}from"./index.es-mi9KTwSZ.js";import{u as m}from"./useQuery-z-BGmxSt.js";import{h as l,L as i,H as d,l as k}from"./fplosSaksbehandlerApi-Bsh7Sork.js";import{S as s,F as g}from"./SøkResultat-BzdKAA90.js";import{O as u}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as f}from"./withIntl-DLS80wvo.js";import{a as S}from"./alleKodeverkLos-JR0SOFbV.js";import{K as E}from"./Kjonnkode-DjBoP8-t.js";import{m as v}from"./nb_NO-IxsdePfK.js";import"./preload-helper-PPVm8Dsz.js";import"./Loader-DrsJTGRF.js";import"./useLosKodeverk-DjTLm-1S.js";import"./Table-BYJXTRbd.js";import"./composeEventHandlers-C5MnnDIG.js";import"./ChevronDown-BXeIQ5uf.js";import"./ChevronRight-jsca69A7.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,O=f(v),G={title:"søk/SøkResultat",component:s,decorators:[O,t],args:{åpneFagsak:a("onÅpneFagsak"),selectOppgaveCallback:a("onSelectOppgave")},parameters:{msw:{handlers:[l.get(i.KODEVERK_LOS,()=>d.json(S))]}},render:r=>m(k()).data?n.jsx(s,{...r}):n.jsx(p,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:"FP",status:g.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",fødselsnummer:"1010",kjønn:E.MANN,språkkode:"NB"},barnFødt:"2019-12-12",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:u.UNDER_ARBEID}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Y=["Default"];export{e as Default,Y as __namedExportsOrder,G as default};
