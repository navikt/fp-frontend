import{j as t}from"./jsx-runtime-CLpGMVip.js";import{H as N}from"./index.es-DCWrkMSr.js";import{w as T,b as s,F as a,B as r,a as p,m as b}from"./nb_NO-CxP7EwQm.js";import{u as D}from"./useQuery-BJcpa7i7.js";import{h as F,L as v,H as y,l as O}from"./fplosSaksbehandlerApi-DDGYBxmk.js";import{F as A}from"./SøkResultat-Dq-MpJYZ.js";import{g as G}from"./withIntl-oNJKa0yI.js";import{a as B}from"./alleKodeverkLos-BJud6Q-i.js";import{K as I}from"./Kjonnkode-C-fkzSiP.js";import{F as i}from"./FagsakSøk-CKvDuBXW.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index.es-Bx_n0-fv.js";import"./dayjs.min-DPY8FYmS.js";import"./Loader-CrO5IKvX.js";import"./v4-CtRu48qb.js";import"./react-D4cvJZVa.js";import"./iframe-BHQ0JioY.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./decorators-DIzpaN6C.js";import"./useLosKodeverk-DYxgvrx1.js";import"./Table-CigjyyYe.js";import"./ArrowsUpDown-CHw8SnNN.js";import"./composeEventHandlers-BV8udL3-.js";import"./useControllableState-egymLBAT.js";import"./ChevronDown-PpTSLCC6.js";import"./ChevronRight-1SlyKEJs.js";import"./SøkForm-BR9Nk6l7.js";import"./index.es-9PGgW2GS.js";import"./Tag-BZyJ1BAQ.js";import"./index-4Uuc9FQs.js";import"./index-CjktTq3Q.js";import"./Theme-CCszSGSx.js";import"./Modal-CHchegbv.js";import"./index.es-DHZdoE99.js";import"./VStack-DHfjmigL.js";import"./ExclamationmarkTriangleFill-CbuefxDd.js";import"./PersonInfo-C9U5cLJr.js";const K=G(b),ce={title:"søk/FagsakSøk",component:i,decorators:[K,T],parameters:{msw:{handlers:[F.get(v.KODEVERK_LOS,()=>y.json(B))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:s("button-click"),åpneFagsak:s("button-click"),selectOppgaveCallback:s("button-click"),resetSearch:s("button-click")},render:h=>D(O()).data?t.jsx(i,{...h}):t.jsx(N,{})},e={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:A.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:I.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:p.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:p.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};var o,l,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,g,k;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var u,E,S;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(S=(E=e.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var f,R,c;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(c=(R=n.parameters)==null?void 0:R.docs)==null?void 0:c.source}}};const he=["Default","IngentingBleFunnet"];export{e as Default,n as IngentingBleFunnet,he as __namedExportsOrder,ce as default};
