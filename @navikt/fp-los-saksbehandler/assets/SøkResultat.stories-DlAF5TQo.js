import{w as o,F as s,B as p,j as a}from"./iframe-Clb27KdX.js";import{X as l}from"./index.es-YB7mErq6.js";import{u as m}from"./useLosKodeverk-DEhLWE0f.js";import{a as d,L as i,H as g,l as k}from"./fplosSaksbehandlerApi-eMHBsBGQ.js";import{S as n,F as u}from"./SøkResultat-CYt6Cu6r.js";import{O as E}from"./oppgaveBehandlingStatus-GzK3dLyM.js";import{g as f}from"./withIntl-BLSqA8yB.js";import{a as R}from"./alleKodeverkLos-JR0SOFbV.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{m as v}from"./nb_NO--W7a-9g9.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-Ch4zzPxw.js";import"./Table-B7Hl0vW8.js";import"./ArrowsUpDown-BlcRSSzS.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CAv2P8YR.js";import"./ChevronRight-C0P-fFIQ.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,O=f(v),x={title:"søk/SøkResultat",component:n,decorators:[O,o],args:{åpneFagsak:t("onÅpneFagsak"),selectOppgaveCallback:t("onSelectOppgave")},parameters:{msw:{handlers:[d.get(i.KODEVERK_LOS,()=>g.json(R))]}},render:r=>m(k()).data?a.jsx(n,{...r}):a.jsx(l,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:u.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",dødsdato:null,fødselsnummer:"1010",kjønn:S.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[],oppgaveBehandlingStatus:E.UNDER_ARBEID}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
        kjønn: KjønnkodeEnum.MANN
      },
      barnFødt: '2019-12-12',
      opprettet: ''
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
}`,...e.parameters?.docs?.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,x as default};
