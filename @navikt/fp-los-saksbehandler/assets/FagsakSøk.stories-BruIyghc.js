import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{a as u}from"./index.es-CkC-ADA8.js";import{a as e,w as E,F as n,B as t}from"./withThemeDecorator-z4QW1Ff7.js";import{u as f}from"./useQuery-D_Pw0jkN.js";import{h as c,L as R,H as S,l as h}from"./fplosSaksbehandlerApi-4oezgadX.js";import{F}from"./SøkResultat-rtlirBWZ.js";import{g as v}from"./withIntl-lOi1k64a.js";import{a as b}from"./alleKodeverkLos-DjowPRxp.js";import{K as T}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-DMIhcn4G.js";import{m as N}from"./nb_NO-C3_hJm02.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-BIv60t02.js";import"./v4-CtRu48qb.js";import"./entry-preview-ZfnTd0Yb.js";import"./iframe-B7o3CpvX.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./useLosKodeverk-BxoCJ-MK.js";import"./Table-BUYqCHT5.js";import"./ArrowsUpDown-BZjYTx7A.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-hzrWzE7n.js";import"./message-BKRiN860.js";import"./ChevronRight-Dy6Pbg1E.js";import"./SøkForm-0rLMDUiz.js";import"./index.es-I3dd9qWc.js";import"./Modal-D30nVMJM.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./Tag-jMNzjvJL.js";import"./VStack-CMLmUAd_.js";import"./index.es-D0cdVRCV.js";import"./ExclamationmarkTriangleFill-CiBUM89n.js";import"./PersonInfo-dJKAD3uL.js";const y=v(N),ke={title:"søk/FagsakSøk",component:o,decorators:[y,E],parameters:{msw:{handlers:[c.get(R.KODEVERK_LOS,()=>S.json(b))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:g=>f(h()).data?a.jsx(o,{...g}):a.jsx(u,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:n.FORELDREPENGER,status:F.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:T.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:t.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:n.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:t.FORSTEGANGSSOKNAD,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:n.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},r={args:{fagsaker:[],fagsakOppgaver:[]}};var p,i,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,d,k;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(d=r.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};const ge=["Default","IngentingBleFunnet"];export{s as Default,r as IngentingBleFunnet,ge as __namedExportsOrder,ke as default};
