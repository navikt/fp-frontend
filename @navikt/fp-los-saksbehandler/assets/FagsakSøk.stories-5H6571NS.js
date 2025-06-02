import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{a as E}from"./index.es-CzbKf2Qa.js";import{a as e,w as f,F as t,B as r,b as i}from"./withThemeDecorator-C00hjHgE.js";import{u as S}from"./useQuery-DVT01LFH.js";import{h as c,L as R,H as h,l as N}from"./fplosSaksbehandlerApi-4oezgadX.js";import{F as b}from"./SøkResultat-COBM1Yex.js";import{g as T}from"./withIntl-BEOXn3mO.js";import{a as F}from"./alleKodeverkLos-DjowPRxp.js";import{K as v}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-CXi50Jud.js";import{m as D}from"./nb_NO-B34Cc-GC.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-CqN80R-V.js";import"./v4-CtRu48qb.js";import"./entry-preview-lJPmyAKS.js";import"./iframe-Cw8QVO8h.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./useLosKodeverk-qT2zupeR.js";import"./Table-C2MP6D7m.js";import"./ArrowsUpDown-IYVujxpE.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-Dc126KjE.js";import"./message-OO6pWzcv.js";import"./ChevronRight-DAoTYMlj.js";import"./SøkForm-DxUAtgyM.js";import"./index.es-DriBhvv_.js";import"./Modal-CaS8GVgW.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./Tag-V3joA8hG.js";import"./VStack-DZLO_5xl.js";import"./index.es-DWtm1JS-.js";import"./ExclamationmarkTriangleFill-BhqVnvHR.js";import"./PersonInfo-BHeVWUcK.js";const y=T(D),ke={title:"søk/FagsakSøk",component:o,decorators:[y,f],parameters:{msw:{handlers:[c.get(R.KODEVERK_LOS,()=>h.json(F))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:u=>S(N()).data?s.jsx(o,{...u}):s.jsx(E,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:t.FORELDREPENGER,status:b.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:v.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},a={args:{fagsaker:[],fagsakOppgaver:[]}};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,g,k;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(g=a.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const ue=["Default","IngentingBleFunnet"];export{n as Default,a as IngentingBleFunnet,ue as __namedExportsOrder,ke as default};
