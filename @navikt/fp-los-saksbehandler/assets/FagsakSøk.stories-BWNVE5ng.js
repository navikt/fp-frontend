import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./index.es-0pw154gs.js";import{a as e,w as S,F as a,B as r,b as i,m as f}from"./nb_NO-Bq-cqQdA.js";import{u as c}from"./useQuery-CFBRO-gP.js";import{h as R,L as h,H as N,l as b}from"./fplosSaksbehandlerApi-4oezgadX.js";import{F as T}from"./SøkResultat-baEnq9Cd.js";import{g as F}from"./withIntl-CZdWB3DY.js";import{a as v}from"./alleKodeverkLos-DjowPRxp.js";import{K as D}from"./Kjonnkode-C-fkzSiP.js";import{F as p}from"./FagsakSøk-CJOCj-eU.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-9Y3kA6U8.js";import"./v4-CtRu48qb.js";import"./entry-preview-B10uUASF.js";import"./iframe-BGN740Lg.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./dayjs.min-DkLNzaWO.js";import"./decorators-Bnaor6Ku.js";import"./useLosKodeverk-nfR2XL0C.js";import"./Table-Bb4hpPxP.js";import"./ArrowsUpDown-C5Hv_6VW.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-DmJuooVd.js";import"./message-Ds_Wgjgk.js";import"./ChevronRight-CCzUZ_BN.js";import"./SøkForm-8Lkgruti.js";import"./index.es-BNOS6gPu.js";import"./Modal-_NqW-YzC.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./Tag-DE8Mn4AN.js";import"./VStack-B5Y3r442.js";import"./index.es-D_SvV4zg.js";import"./ExclamationmarkTriangleFill-Cf2vtmp-.js";import"./PersonInfo-BX8sRKCc.js";const y=F(f),ke={title:"søk/FagsakSøk",component:p,decorators:[y,S],parameters:{msw:{handlers:[R.get(h.KODEVERK_LOS,()=>N.json(v))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:u=>c(b()).data?s.jsx(p,{...u}):s.jsx(E,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:T.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:D.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},t={args:{fagsaker:[],fagsakOppgaver:[]}};var o,m,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
      behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
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
      behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
      opprettetTidspunkt: '2020-01-01',
      behandlingsfrist: '2020-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '12344',
      andreKriterier: []
    }]
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,g,k;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(g=t.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const ue=["Default","IngentingBleFunnet"];export{n as Default,t as IngentingBleFunnet,ue as __namedExportsOrder,ke as default};
