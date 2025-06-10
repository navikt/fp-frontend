import{w as u,F as a,B as r,j as t}from"./iframe-C4ZmjsLZ.js";import{Q as E}from"./index.es-BtIi2dgM.js";import{u as f}from"./useQuery-Qp6f2Mwk.js";import{a as c,L as R,H as S,l as h}from"./fplosSaksbehandlerApi-jqX_MHfE.js";import{F as O}from"./SøkResultat-BvnZwcB2.js";import{g as F}from"./withIntl-BjFGfaqN.js";import{a as T}from"./alleKodeverkLos-DjowPRxp.js";import{K as v}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-BTUPhVG2.js";import{m as b}from"./nb_NO-DuVn59ai.js";import"./Loader-Cu_OC_3F.js";import"./useLosKodeverk-D2E27nCc.js";import"./Table-KKuszbWt.js";import"./ArrowsUpDown-CnxKPuFH.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-BMrhYSXv.js";import"./message-D5LjN3xl.js";import"./ChevronRight-BQ1gelrr.js";import"./SøkForm-epuJv4gZ.js";import"./index.es-BLv97-Ok.js";import"./Modal-Wkl7gRDH.js";import"./index-CkjCDsAm.js";import"./Tag-6x7xA00r.js";import"./VStack-CBWf-lgF.js";import"./index.es-Ci-PBKQh.js";import"./ExclamationmarkTriangleFill-BwDwR5uD.js";import"./PersonInfo-D0cGqeMS.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,N=F(b),se={title:"søk/FagsakSøk",component:o,decorators:[N,u],parameters:{msw:{handlers:[c.get(R.KODEVERK_LOS,()=>S.json(T))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:g=>f(h()).data?t.jsx(o,{...g}):t.jsx(E,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:O.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:v.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};var p,i,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
