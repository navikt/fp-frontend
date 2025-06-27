import{w as l,F as s,B as d,j as a}from"./iframe-Cb_ISg--.js";import{X as i}from"./index.es-0GbpNu_8.js";import{u as k}from"./useQuery-CCzjY9t4.js";import{a as g,L as u,H as E,l as f}from"./fplosSaksbehandlerApi-D2WcQp54.js";import{S as n,F as R}from"./SøkResultat-DyAvNCtB.js";import{g as S}from"./withIntl-DginZqZZ.js";import{a as O}from"./alleKodeverkLos-DeeW-5p1.js";import{K as v}from"./Kjonnkode-C-fkzSiP.js";import{m as c}from"./nb_NO-Cz-DehRK.js";import"./Loader-BPbWQrE7.js";import"./useLosKodeverk-DSfbOajx.js";import"./Table-CgpiyalU.js";import"./ArrowsUpDown-CAsvqp8t.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-QHs8JhIS.js";import"./message-DxCmWH9K.js";import"./ChevronRight-DfuiG5nP.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,N=S(c),H={title:"søk/SøkResultat",component:n,decorators:[N,l],args:{åpneFagsak:t("onÅpneFagsak"),selectOppgaveCallback:t("onSelectOppgave")},parameters:{msw:{handlers:[g.get(u.KODEVERK_LOS,()=>E.json(O))]}},render:m=>k(f()).data?a.jsx(n,{...m}):a.jsx(i,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:R.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",dødsdato:null,fødselsnummer:"1010",kjønn:v.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}};var r,o,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,H as default};
