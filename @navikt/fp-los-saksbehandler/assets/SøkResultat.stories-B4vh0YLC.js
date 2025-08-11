import{w as o,F as s,B as p,j as a}from"./iframe-Cbsua4r2.js";import{X as m}from"./index.es-5An9wuhY.js";import{u as l}from"./useQuery-C-0M3yS5.js";import{a as d,L as i,H as k,l as g}from"./fplosSaksbehandlerApi-CYc5P8CX.js";import{S as n,F as u}from"./SøkResultat-B0j22oAc.js";import{g as E}from"./withIntl-D-TXM6Cf.js";import{a as f}from"./alleKodeverkLos-DeeW-5p1.js";import{K as R}from"./Kjonnkode-C-fkzSiP.js";import{m as S}from"./nb_NO-BblFEszt.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-pn-IcA3V.js";import"./useLosKodeverk-DT2WxwHb.js";import"./Table-COrDGJvu.js";import"./ArrowsUpDown-B9biLawy.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Ci8HeMsC.js";import"./ChevronRight-BJHN7PC2.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,O=E(S),x={title:"søk/SøkResultat",component:n,decorators:[O,o],args:{åpneFagsak:t("onÅpneFagsak"),selectOppgaveCallback:t("onSelectOppgave")},parameters:{msw:{handlers:[d.get(i.KODEVERK_LOS,()=>k.json(f))]}},render:r=>l(g()).data?a.jsx(n,{...r}):a.jsx(m,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:u.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",dødsdato:null,fødselsnummer:"1010",kjønn:R.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,x as default};
