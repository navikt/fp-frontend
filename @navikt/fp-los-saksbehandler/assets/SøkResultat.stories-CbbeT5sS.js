import{w as l,F as s,B as d,j as a}from"./iframe-D70Tnhx0.js";import{Q as i}from"./index.es-BVSFFaqq.js";import{u as k}from"./useQuery-D8cK-fqL.js";import{a as g,L as u,H as E,l as f}from"./fplosSaksbehandlerApi-B2AQAuw2.js";import{S as n,F as R}from"./SøkResultat-CmWk2tYQ.js";import{g as O}from"./withIntl-CDsxDtZ7.js";import{a as S}from"./alleKodeverkLos-DjowPRxp.js";import{K as c}from"./Kjonnkode-C-fkzSiP.js";import{m as N}from"./nb_NO-Bc_rXWi2.js";import"./Loader-Dy4WN2O0.js";import"./useLosKodeverk-D73Wiyxo.js";import"./Table-DiImHk02.js";import"./ArrowsUpDown-Dr8XHWeS.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-D13T2JtO.js";import"./message-BuvWnYug.js";import"./ChevronRight-BDKEhxoV.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,v=O(N),H={title:"søk/SøkResultat",component:n,decorators:[v,l],args:{åpneFagsak:t("onÅpneFagsak"),selectOppgaveCallback:t("onSelectOppgave")},parameters:{msw:{handlers:[g.get(u.KODEVERK_LOS,()=>E.json(S))]}},render:m=>k(f()).data?a.jsx(n,{...m}):a.jsx(i,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:R.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",dødsdato:null,fødselsnummer:"1010",kjønn:c.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}};var r,o,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
      status: {
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
