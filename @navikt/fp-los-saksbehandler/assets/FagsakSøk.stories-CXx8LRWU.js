import{w as u,F as a,B as r,j as t}from"./iframe-BzKhhaRQ.js";import{X as E}from"./index.es-C1qhk-q-.js";import{u as f}from"./useQuery-ExzDcJUp.js";import{a as c,L as S,H as R,l as v}from"./fplosSaksbehandlerApi-T92P3PN8.js";import{F as h}from"./SøkResultat-B-gC2YkY.js";import{g as O}from"./withIntl-Dd43I8Pt.js";import{a as F}from"./alleKodeverkLos-DeeW-5p1.js";import{K as T}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-Ab2n6SDD.js";import{m as b}from"./nb_NO-4-jUSXJR.js";import"./Loader-pSbfn0kj.js";import"./useLosKodeverk-CNIrScQg.js";import"./Table-BvBb2RPN.js";import"./ArrowsUpDown-CzQxmKP-.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-CMRSpiCZ.js";import"./message-CmnLKSIt.js";import"./ChevronRight-CoR_byY0.js";import"./SøkForm-BAKWnL4M.js";import"./index.es-mRH8feFV.js";import"./Modal-BbCYygSf.js";import"./index-qlk676pZ.js";import"./Tag-D-TPyznH.js";import"./VStack-BheS40Ry.js";import"./index.es-CE-_gDz4.js";import"./ExclamationmarkTriangleFill-DsuyOkwS.js";import"./PersonInfo-CBZr0ySN.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,N=O(b),se={title:"søk/FagsakSøk",component:o,decorators:[N,u],parameters:{msw:{handlers:[c.get(S.KODEVERK_LOS,()=>R.json(F))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:g=>f(v()).data?t.jsx(o,{...g}):t.jsx(E,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:h.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:T.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,reservasjonStatus:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};var p,i,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    }, {
      id: 2,
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
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,d,k;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(d=n.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};const ne=["Default","IngentingBleFunnet"];export{s as Default,n as IngentingBleFunnet,ne as __namedExportsOrder,se as default};
