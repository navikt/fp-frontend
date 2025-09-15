import{w as t,B as o,j as n}from"./iframe-D-7Qumb2.js";import{Q as p}from"./index.es-BWKXY8Zm.js";import{u as l}from"./useQuery-BhV4ZsAf.js";import{h as m,L as d,H as i,l as k}from"./fplosSaksbehandlerApi-BZvbsPDs.js";import{S as s,F as u}from"./SøkResultat-0b8RCjBj.js";import{O as g}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as f}from"./withIntl-CAr1wgSh.js";import{a as S}from"./alleKodeverkLos-JR0SOFbV.js";import{K as E}from"./Kjonnkode-DjBoP8-t.js";import{m as v}from"./nb_NO-DWFKg_VO.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-21QoRLSO.js";import"./useLosKodeverk-I2SQCJ7D.js";import"./Table-hG1JoSDz.js";import"./composeEventHandlers-DJI96O9p.js";import"./ChevronDown-B19QdtsS.js";import"./ChevronRight-CzyT0-nz.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,O=f(v),G={title:"søk/SøkResultat",component:s,decorators:[O,t],args:{åpneFagsak:a("onÅpneFagsak"),selectOppgaveCallback:a("onSelectOppgave")},parameters:{msw:{handlers:[m.get(d.KODEVERK_LOS,()=>i.json(S))]}},render:r=>l(k()).data?n.jsx(s,{...r}):n.jsx(p,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:"FP",status:u.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",dødsdato:null,fødselsnummer:"1010",kjønn:E.MANN,diskresjonskode:null,språkkode:"NB"},barnFødt:"2019-12-12",opprettet:"",relasjonsRolleType:"-"}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:o.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:"FP",erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:g.UNDER_ARBEID}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const Y=["Default"];export{e as Default,Y as __namedExportsOrder,G as default};
