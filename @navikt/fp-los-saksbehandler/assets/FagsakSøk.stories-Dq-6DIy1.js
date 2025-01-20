import{j as t}from"./jsx-runtime-DjgmBYnU.js";import{H as N}from"./index.es-Bkc7HGaP.js";import{a as s}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{u as T}from"./useQuery-DH5Nnehw.js";import{h as b,L as D,H as F,l as v}from"./fplosSaksbehandlerApi-DDGYBxmk.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as r}from"./behandlingStatus-CZkrUkra.js";import{B as p}from"./behandlingType-BdbjGMJD.js";import{F as y}from"./SøkResultat-Nz7BD97E.js";import{F as a}from"./fagsakYtelseType-DI8GXtVr.js";import{g as O}from"./withIntl-C_qdw-fe.js";import{w as A,m as G}from"./nb_NO-BC55Mr_y.js";import{a as B}from"./alleKodeverkLos-BJud6Q-i.js";import{K as I}from"./Kjonnkode-C-fkzSiP.js";import{F as o}from"./FagsakSøk-Ckc6xikO.js";import"./index-DjXIRphR.js";import"./index-D7mKeUb6.js";import"./index.es-Dr0WfndB.js";import"./dayjs.min-Boho2IT3.js";import"./i18n.hooks-CJJTWvJ1.js";import"./Loader-3Qx-7J6D.js";import"./v4-CtRu48qb.js";import"./decorators-DIzpaN6C.js";import"./useLosKodeverk-DEoPbcJX.js";import"./Table-BTpdiPhf.js";import"./ArrowsUpDown-Bi9nuB2N.js";import"./composeEventHandlers-BV8udL3-.js";import"./useControllableState-Yq0ffON_.js";import"./ChevronDown-BupHQ-8S.js";import"./ChevronRight-z4ZfUbNx.js";import"./SøkForm-DJGknEEQ.js";import"./index.es-COMVmwHE.js";import"./Tag-Bxg2NxiU.js";import"./index-BdR6VAUc.js";import"./index-DCOq8Jev.js";import"./Theme-BfTL5VBB.js";import"./Modal-8rThvUW_.js";import"./index.es-DCyjXJOg.js";import"./VStack-DmKxM4QU.js";import"./ExclamationmarkTriangleFill-DUIdkP67.js";import"./PersonInfo-Crlmvj7S.js";const K=O(G),Te={title:"søk/FagsakSøk",component:o,decorators:[K,A],parameters:{msw:{handlers:[b.get(D.KODEVERK_LOS,()=>F.json(B))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:s("button-click"),åpneFagsak:s("button-click"),selectOppgaveCallback:s("button-click"),resetSearch:s("button-click")},render:h=>T(v()).data?t.jsx(o,{...h}):t.jsx(N,{})},e={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:y.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:I.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
