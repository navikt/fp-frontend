import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{V as E}from"./index.es-BaV1zFyq.js";import{a as e,w as S,F as t,B as r,b as p,m as f}from"./nb_NO-DXuZpwvA.js";import{u as c}from"./useQuery-BzO1ituX.js";import{h as R,L as h,H as N,l as b}from"./fplosSaksbehandlerApi-C6FxBbOo.js";import{F as T}from"./SøkResultat-CjVRMTsy.js";import{g as F}from"./withIntl-PdHeGbO3.js";import{a as v}from"./alleKodeverkLos-BJud6Q-i.js";import{K as D}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-Khj9mlcV.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index.es-ClwW4EUb.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-BiNbCtWk.js";import"./v4-CtRu48qb.js";import"./entry-preview-BwwzheJK.js";import"./iframe-DiMt0KFx.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./useLosKodeverk-DDdvs0LQ.js";import"./Table-uyIxd-9g.js";import"./ArrowsUpDown-CHD3uyAZ.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-CvRLEy6H.js";import"./message-BP4r06K8.js";import"./ChevronRight-0TKZlqyZ.js";import"./SøkForm-QeMfVIzh.js";import"./index.es-CXK2YioG.js";import"./Modal-BPoqHm29.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Tag-BPto_FBI.js";import"./index.es-CvZShvJo.js";import"./VStack-a-3uwZHN.js";import"./ExclamationmarkTriangleFill-Bf8cc7j1.js";import"./PersonInfo-DZyljLJ4.js";const y=F(f),ue={title:"søk/FagsakSøk",component:o,decorators:[y,S],parameters:{msw:{handlers:[R.get(h.KODEVERK_LOS,()=>N.json(v))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:u=>c(b()).data?a.jsx(o,{...u}):a.jsx(E,{})},s={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:t.FORELDREPENGER,status:T.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:D.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};var i,m,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    fagsaker: [{
      saksnummer: '12213234',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      status: FagsakStatus.UNDER_BEHANDLING,
      person: {
        navn: 'Espen Utvikler',
        fødselsdato: '1980-10-10',
        fødselsnummer: '1010',
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
      saksnummer: 12213234,
      personnummer: '1010',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '12344'
    }, {
      id: 2,
      status: {
        erReservert: false
      },
      saksnummer: 12213234,
      personnummer: '1010',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '12344'
    }]
  }
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,g,k;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const Ee=["Default","IngentingBleFunnet"];export{s as Default,n as IngentingBleFunnet,Ee as __namedExportsOrder,ue as default};
