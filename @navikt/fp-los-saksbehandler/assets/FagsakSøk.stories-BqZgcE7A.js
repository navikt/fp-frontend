import{w as u,F as a,B as r,j as t}from"./iframe-D70Tnhx0.js";import{Q as E}from"./index.es-BVSFFaqq.js";import{u as f}from"./useQuery-D8cK-fqL.js";import{a as c,L as R,H as S,l as h}from"./fplosSaksbehandlerApi-B2AQAuw2.js";import{F as O}from"./SøkResultat-CmWk2tYQ.js";import{g as F}from"./withIntl-CDsxDtZ7.js";import{a as T}from"./alleKodeverkLos-DjowPRxp.js";import{K as v}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-BVmeWP5e.js";import{m as b}from"./nb_NO-Bc_rXWi2.js";import"./Loader-Dy4WN2O0.js";import"./useLosKodeverk-D73Wiyxo.js";import"./Table-DiImHk02.js";import"./ArrowsUpDown-Dr8XHWeS.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-D13T2JtO.js";import"./message-BuvWnYug.js";import"./ChevronRight-BDKEhxoV.js";import"./SøkForm-BNT2-60C.js";import"./index.es-BFTRVqwT.js";import"./Modal-CNbHlX5O.js";import"./index-CAFejsPJ.js";import"./Tag-C4X_taQ0.js";import"./VStack-CymHhqNl.js";import"./index.es-CHj6DLSC.js";import"./ExclamationmarkTriangleFill-CzeQVgKQ.js";import"./PersonInfo-iZMPbjtZ.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,N=F(b),se={title:"søk/FagsakSøk",component:o,decorators:[N,u],parameters:{msw:{handlers:[c.get(R.KODEVERK_LOS,()=>S.json(T))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:g=>f(h()).data?t.jsx(o,{...g}):t.jsx(E,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:O.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:v.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};var p,i,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
