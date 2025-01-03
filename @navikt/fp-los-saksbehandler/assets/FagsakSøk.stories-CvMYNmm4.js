import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{F as N}from"./index.es-BMKmmqW7.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as T}from"./useQuery-BuvdPTRt.js";import{h as b,L as F,H as D,l as v}from"./fplosSaksbehandlerApi-C-ZAlGIP.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as r}from"./behandlingStatus-CZkrUkra.js";import{B as p}from"./behandlingType-BdbjGMJD.js";import{F as y}from"./SøkResultat-BZeiQR4g.js";import{F as a}from"./fagsakYtelseType-DI8GXtVr.js";import{g as O}from"./withIntl-TDXuo7XK.js";import{a as A}from"./alleKodeverkLos-BJud6Q-i.js";import{K as G}from"./Kjonnkode-C-fkzSiP.js";import{w as B}from"./withQueryClientProvider-Ba2jjNy6.js";import{F as o}from"./FagsakSøk-DLupgOm5.js";import{m as I}from"./nb_NO-h-VtBlNV.js";import"./index-DRjF_FHU.js";import"./index.es-Lgd3YuFG.js";import"./dayjs.min-CnNqAF5I.js";import"./i18n.context-CjWL2J0U.js";import"./Loader-DLTcRhss.js";import"./v4-CQkTLCs1.js";import"./decorators-86JrGkCj.js";import"./useLosKodeverk-CykW4RSf.js";import"./Table-C1oQSmBK.js";import"./ArrowsUpDown-BSGwT_9Z.js";import"./composeEventHandlers-DeH74NdU.js";import"./useControllableState-DbN6x-w2.js";import"./ChevronDown-Be_h0DWZ.js";import"./ChevronRight-B2wlWiP2.js";import"./SøkForm-CQsNx3fw.js";import"./index.es-BwZtVe_T.js";import"./Tag-DUIhHkjv.js";import"./index-rX-Bn4lm.js";import"./Modal-oq0phPGp.js";import"./AkselTheme-kZpHv4Hy.js";import"./index.es-CdQNvclA.js";import"./VStack-Br3SWiEm.js";import"./ExclamationmarkTriangleFill-nmvmBUsk.js";import"./PersonInfo-BxH6V8rn.js";const K=O(I),Ne={title:"søk/FagsakSøk",component:o,decorators:[K,B],parameters:{msw:{handlers:[b.get(F.KODEVERK_LOS,()=>D.json(A))]}},args:{kanSaksbehandle:!0,searchResultReceived:!0,searchStarted:!1,searchFagsakCallback:s("button-click"),åpneFagsak:s("button-click"),selectOppgaveCallback:s("button-click"),resetSearch:s("button-click")},render:h=>T(v()).data?t.jsx(o,{...h}):t.jsx(N,{})},e={args:{fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:y.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:G.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:p.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},n={args:{fagsaker:[],fagsakOppgaver:[]}};var i,m,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(R=n.parameters)==null?void 0:R.docs)==null?void 0:c.source}}};const Te=["Default","IngentingBleFunnet"];export{e as Default,n as IngentingBleFunnet,Te as __namedExportsOrder,Ne as default};
