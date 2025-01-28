import{j as t}from"./jsx-runtime-CLpGMVip.js";import{H as N}from"./index.es-DDAjIIh8.js";import{a as s}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{u as T}from"./useQuery-BEbkmbNY.js";import{h as b,L as D,H as F,l as v}from"./fplosSaksbehandlerApi-DDGYBxmk.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as r}from"./behandlingStatus-CZkrUkra.js";import{B as p}from"./behandlingType-BdbjGMJD.js";import{F as y}from"./SøkResultat-DvWknPUe.js";import{F as a}from"./fagsakYtelseType-DI8GXtVr.js";import{g as O}from"./withIntl-CKSrT7jo.js";import{w as A,m as G}from"./nb_NO-DvASJDrz.js";import{a as B}from"./alleKodeverkLos-BJud6Q-i.js";import{K as I}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-DeFaANsy.js";import"./index-CYQpqK1Q.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index.es-eX2FMiyq.js";import"./dayjs.min-DPY8FYmS.js";import"./i18n.hooks-D12HNUFZ.js";import"./Loader-Bz0mICKL.js";import"./v4-CtRu48qb.js";import"./decorators-DIzpaN6C.js";import"./useLosKodeverk-vlvFHJmm.js";import"./Table-5tF81aKM.js";import"./ArrowsUpDown-CwcQ6Qot.js";import"./composeEventHandlers-BV8udL3-.js";import"./useControllableState-C0QDCBVy.js";import"./ChevronDown-BmjQAQWb.js";import"./ChevronRight-DOeGTDzT.js";import"./SøkForm-BxHTGcQq.js";import"./index.es-iZy3BtIV.js";import"./Tag-C96f474M.js";import"./index-4Uuc9FQs.js";import"./index-CjktTq3Q.js";import"./Theme-BESeNiwa.js";import"./Modal-8sBhBirn.js";import"./index.es-CyQY1kgk.js";import"./VStack-BHnO6CS5.js";import"./ExclamationmarkTriangleFill-CScmK_i9.js";import"./PersonInfo-CwTcwGwp.js";const K=O(G),Te={title:"søk/FagsakSøk",component:o,decorators:[K,A],parameters:{msw:{handlers:[b.get(D.KODEVERK_LOS,()=>F.json(B))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:s("button-click"),åpneFagsak:s("button-click"),selectOppgaveCallback:s("button-click"),resetSearch:s("button-click")},render:h=>T(v()).data?t.jsx(o,{...h}):t.jsx(N,{})},e={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:y.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:I.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,g,k;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(R=n.parameters)==null?void 0:R.docs)==null?void 0:c.source}}};const be=["Default","IngentingBleFunnet"];export{e as Default,n as IngentingBleFunnet,be as __namedExportsOrder,Te as default};
