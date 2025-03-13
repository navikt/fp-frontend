import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{V as E}from"./index.es-DGIvTq5Z.js";import{a as e,w as S,F as t,B as r,b as p,m as f}from"./nb_NO-5WXHZZLd.js";import{u as c}from"./useQuery-BvoE76hc.js";import{h as R,L as h,H as N,l as b}from"./fplosSaksbehandlerApi-C6FxBbOo.js";import{F as T}from"./SøkResultat-BmETo1hl.js";import{g as F}from"./withIntl-BNnJ2CJ5.js";import{a as v}from"./alleKodeverkLos-BJud6Q-i.js";import{K as D}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-jCv7F7UX.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index.es-D8ZcPUnJ.js";import"./dayjs.min-DkLNzaWO.js";import"./Loader-DFef0l7x.js";import"./v4-CtRu48qb.js";import"./entry-preview-CWabpbXV.js";import"./iframe-DLHaFeqC.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BwSyabb1.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./useLosKodeverk-CydzMS-d.js";import"./Table-CiwPePV9.js";import"./ArrowsUpDown-C6GAQUdJ.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-D7ydJPGM.js";import"./message-DHux8oBJ.js";import"./ChevronRight-C1w9dNLs.js";import"./SøkForm-DHqrf-p5.js";import"./index.es-B9CJAs82.js";import"./Modal-DHEcoxAk.js";import"./index-BsrZSYsV.js";import"./index-CQwh6Daz.js";import"./Tag-CwfoPSJL.js";import"./index.es-CZGE5L3T.js";import"./VStack-B9yelkig.js";import"./ExclamationmarkTriangleFill-QS1jCIWV.js";import"./PersonInfo-Cpgt0o8s.js";const y=F(f),ue={title:"søk/FagsakSøk",component:o,decorators:[y,S],parameters:{msw:{handlers:[R.get(h.KODEVERK_LOS,()=>N.json(v))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:u=>c(b()).data?a.jsx(o,{...u}):a.jsx(E,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:t.FORELDREPENGER,status:T.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:D.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},s={args:{fagsaker:[],fagsakOppgaver:[]}};var i,m,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,g,k;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const Ee=["Default","IngentingBleFunnet"];export{n as Default,s as IngentingBleFunnet,Ee as __namedExportsOrder,ue as default};
