import{w as o,F as s,B as p,j as a}from"./iframe-CyPkD_ak.js";import{X as m}from"./index.es-naRtX646.js";import{u as l}from"./useQuery-C1ErPo1u.js";import{a as i,L as d,H as k,l as g}from"./fplosSaksbehandlerApi-VmWZgKW-.js";import{S as n,F as u}from"./SøkResultat-Dv6q1yVm.js";import{g as E}from"./withIntl-CIFsDVd0.js";import{a as f}from"./alleKodeverkLos-DeeW-5p1.js";import{K as R}from"./Kjonnkode-C-fkzSiP.js";import{m as S}from"./nb_NO-CRusyisS.js";import"./index.es-CVnPHYNh.js";import"./Loader-CY0_Js7v.js";import"./useLosKodeverk-BPWnj7bd.js";import"./Table-BiTrzpGD.js";import"./ArrowsUpDown-B0raxNy1.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CH8_dNCP.js";import"./message-D_e69ppz.js";import"./ChevronRight-GKQL61kp.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,O=E(S),B={title:"søk/SøkResultat",component:n,decorators:[O,o],args:{åpneFagsak:t("onÅpneFagsak"),selectOppgaveCallback:t("onSelectOppgave")},parameters:{msw:{handlers:[i.get(d.KODEVERK_LOS,()=>k.json(f))]}},render:r=>l(g()).data?a.jsx(n,{...r}):a.jsx(m,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:u.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",dødsdato:null,fødselsnummer:"1010",kjønn:R.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
      andreKriterier: []
    }]
  }
}`,...e.parameters?.docs?.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,B as default};
