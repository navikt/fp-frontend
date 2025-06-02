import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./index.es-DgE6OmkC.js";import{a as e,w as f,F as a,B as r,b as i}from"./withThemeDecorator-CqS9VlII.js";import{u as S}from"./useQuery-CePrbdpe.js";import{h as c,L as R,H as h,l as N}from"./fplosSaksbehandlerApi-4oezgadX.js";import{F as b}from"./SøkResultat-CXiPUwPd.js";import{g as T}from"./withIntl-BOr52Iju.js";import{a as F}from"./alleKodeverkLos-DjowPRxp.js";import{K as v}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-DQN497J3.js";import{m as D}from"./nb_NO-DeRyi5eh.js";import"./index-C4XKfyRp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-BF9QQrpn.js";import"./v4-CtRu48qb.js";import"./entry-preview-DXcfvIvu.js";import"./iframe-BLfgU8V1.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./useLosKodeverk-q-yDazm4.js";import"./Table-Cp76KVzX.js";import"./ArrowsUpDown-nc9qzkHk.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-B_9qa3vZ.js";import"./message-CKqu3ctF.js";import"./ChevronRight-DIVLrVuI.js";import"./SøkForm-C0n7JraE.js";import"./index.es-DrTQwIjS.js";import"./Modal-DeTNuyfk.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./Tag-BRkmuYHH.js";import"./VStack-aGt2RIjI.js";import"./index.es-N1KsZMOk.js";import"./ExclamationmarkTriangleFill-CKjqkZ-A.js";import"./PersonInfo-DA4R5n8H.js";const y=T(D),ke={title:"søk/FagsakSøk",component:o,decorators:[y,f],parameters:{msw:{handlers:[c.get(R.KODEVERK_LOS,()=>h.json(F))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:e("button-click"),åpneFagsak:e("button-click"),selectOppgaveCallback:e("button-click"),resetSearch:e("button-click")},render:u=>S(N()).data?s.jsx(o,{...u}):s.jsx(E,{})},n={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:b.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",dødsdato:null,fødselsnummer:"1010",aktørId:"23",kjønn:v.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]},{id:2,status:{erReservert:!1},saksnummer:"12213234",personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344",andreKriterier:[]}]}},t={args:{fagsaker:[],fagsakOppgaver:[]}};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
