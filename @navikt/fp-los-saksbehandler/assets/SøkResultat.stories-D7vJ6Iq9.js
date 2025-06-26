import{w as l,F as s,B as d,j as a}from"./iframe-D5gt21PO.js";import{X as i}from"./index.es-CoA4ZD_x.js";import{u as k}from"./useQuery-CPdGRmrW.js";import{a as g,L as u,H as E,l as f}from"./fplosSaksbehandlerApi-CVJT04HZ.js";import{S as n,F as R}from"./SøkResultat-BmmgRFbp.js";import{g as S}from"./withIntl-DUGshOIu.js";import{a as O}from"./alleKodeverkLos-DeeW-5p1.js";import{K as v}from"./Kjonnkode-C-fkzSiP.js";import{m as c}from"./nb_NO-Cn9UTMYo.js";import"./Loader-Cl2mnQon.js";import"./useLosKodeverk-BmFhK4EY.js";import"./Table-XorNTw9V.js";import"./ArrowsUpDown-7XuR4Frf.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-XhgFDZ8a.js";import"./message-BycedRya.js";import"./ChevronRight-WVSEFdZ5.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,N=S(c),H={title:"søk/SøkResultat",component:n,decorators:[N,l],args:{åpneFagsak:t("onÅpneFagsak"),selectOppgaveCallback:t("onSelectOppgave")},parameters:{msw:{handlers:[g.get(u.KODEVERK_LOS,()=>E.json(O))]}},render:m=>k(f()).data?a.jsx(n,{...m}):a.jsx(i,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:R.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",dødsdato:null,fødselsnummer:"1010",kjønn:v.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}};var r,o,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
