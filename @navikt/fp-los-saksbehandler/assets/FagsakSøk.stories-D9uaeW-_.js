import{w as u,F as a,B as r,j as t}from"./iframe-CyqUL1xL.js";import{X as E}from"./index.es-DY_HOSzp.js";import{u as f}from"./useQuery-DOZ13jsG.js";import{a as c,L as R,H as S,l as h}from"./fplosSaksbehandlerApi-BnFlpdOC.js";import{F as O}from"./SøkResultat-CAMR_3XF.js";import{g as F}from"./withIntl-DgwnJYo7.js";import{a as T}from"./alleKodeverkLos-DeeW-5p1.js";import{K as v}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-B5NE6gjk.js";import{m as b}from"./nb_NO-BWhtdl_d.js";import"./Loader-DfXvgLPA.js";import"./useLosKodeverk-BwvWOAVA.js";import"./Table-AXbJQcKU.js";import"./ArrowsUpDown-buOrj6Zg.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BvMWLyRO.js";import"./message-DTuv7X55.js";import"./ChevronRight-CneVUhye.js";import"./SøkForm-qedQ67e_.js";import"./index.es-Di6zB4B1.js";import"./Modal-Bd22a6-H.js";import"./index-Biw2VKib.js";import"./Tag-BwZ3nBrE.js";import"./VStack-hC6jG55H.js";import"./index.es-CQIKN6GW.js";import"./ExclamationmarkTriangleFill-CoFhRD1G.js";import"./PersonInfo-DpIpeGYr.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,N=F(b),se={title:"søk/FagsakSøk",component:o,decorators:[N,u],parameters:{msw:{handlers:[c.get(R.KODEVERK_LOS,()=>S.json(T))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:g=>f(h()).data?t.jsx(o,{...g}):t.jsx(E,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:O.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:v.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};var p,i,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      status: FagsakStatus.UNDER_BEHANDLING,
      person: {
        navn: 'Espen Utvikler',
        fødselsdato: '1980-10-10',
        dødsdato: null,
        fødselsnummer: '1010',
        aktørId: '23',
        kjønn: KjønnkodeEnum.MANN
      },
      barnFødt: '2019-12-12',
      aktørId: '23',
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
    }, {
      id: 2,
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
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,d,k;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(d=n.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};const ne=["Default","IngentingBleFunnet"];export{s as Default,n as IngentingBleFunnet,ne as __namedExportsOrder,se as default};
