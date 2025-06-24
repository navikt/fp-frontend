import{w as l,F as s,B as d,j as a}from"./iframe-CyqUL1xL.js";import{X as i}from"./index.es-DY_HOSzp.js";import{u as k}from"./useQuery-DOZ13jsG.js";import{a as g,L as u,H as E,l as f}from"./fplosSaksbehandlerApi-BnFlpdOC.js";import{S as n,F as R}from"./SøkResultat-CAMR_3XF.js";import{g as O}from"./withIntl-DgwnJYo7.js";import{a as S}from"./alleKodeverkLos-DeeW-5p1.js";import{K as c}from"./Kjonnkode-C-fkzSiP.js";import{m as N}from"./nb_NO-BWhtdl_d.js";import"./Loader-DfXvgLPA.js";import"./useLosKodeverk-BwvWOAVA.js";import"./Table-AXbJQcKU.js";import"./ArrowsUpDown-buOrj6Zg.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BvMWLyRO.js";import"./message-DTuv7X55.js";import"./ChevronRight-CneVUhye.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,v=O(N),H={title:"søk/SøkResultat",component:n,decorators:[v,l],args:{åpneFagsak:t("onÅpneFagsak"),selectOppgaveCallback:t("onSelectOppgave")},parameters:{msw:{handlers:[g.get(u.KODEVERK_LOS,()=>E.json(S))]}},render:m=>k(f()).data?a.jsx(n,{...m}):a.jsx(i,{})},e={args:{fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:R.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",aktørId:"1234",dødsdato:null,fødselsnummer:"1010",kjønn:c.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:d.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}};var r,o,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
