import{j as s}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as r}from"./behandlingStatus-CZkrUkra.js";import{B as i}from"./behandlingType-BdbjGMJD.js";import{F as E}from"./SøkResultat-SnxnueTb.js";import{F as t}from"./fagsakYtelseType-DI8GXtVr.js";import{g as S}from"./withIntl-DXHUjld2.js";import{a as f}from"./alleKodeverkLos-BJud6Q-i.js";import{K as R}from"./Kjonnkode-C-fkzSiP.js";import{R as b,b as h,r as N}from"./fplosSaksbehandlerRestApi-ZC5gilpx.js";import"./index-uubelm5h.js";import"./useRestApiRunner-4HgzHe3f.js";import{F as o}from"./FagsakSøk-Bnzh7arn.js";import{m as F}from"./nb_NO-C4RkFlUy.js";import"./v4-CQkTLCs1.js";import"./index.es-Bk8hSli7.js";import"./index.es-UbZaQCW7.js";import"./dayjs.min-BsYQKNhR.js";import"./Loader-CXblLYfE.js";import"./kodeverkTyper-CavWL6Ds.js";import"./kodeverkUtils-RGNAgZhp.js";import"./useLosKodeverk-Dpxz3JUJ.js";import"./Table-DEmoWMX5.js";import"./ArrowsUpDown-BRS8HI32.js";import"./composeEventHandlers-DeH74NdU.js";import"./useControllableState-DfAzX_fN.js";import"./ChevronDown-C80NRibc.js";import"./ChevronRight-Dxl7riK3.js";import"./SøkForm-CX7jP8uW.js";import"./index.es-DXmPf6Wl.js";import"./Tag-DyOxNX7P.js";import"./index-C5xsJX-I.js";import"./Modal-BG2sORRw.js";import"./Slot-CBut_XMV.js";import"./index.es-C0qDvsAq.js";import"./VStack-Cn_RGqfq.js";import"./ExclamationmarkTriangleFill-Bm-_Y4hE.js";import"./PersonInfo-DLCP_vjO.js";const T=S(F),me={title:"søk/FagsakSøk",component:o,decorators:[T],render:u=>{const c=[{key:b.KODEVERK_LOS.name,data:f,global:!0}];return s.jsx(h,{data:c,requestApi:N,children:s.jsx(o,{...u})})}},e={args:{searchFagsakCallback:a("button-click"),searchResultReceived:!0,åpneFagsak:a("button-click"),selectOppgaveCallback:a("button-click"),searchStarted:!1,resetSearch:a("button-click"),kanSaksbehandle:!0,fagsaker:[{saksnummer:"12213234",fagsakYtelseType:t.FORELDREPENGER,status:E.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:R.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},n={args:{...e.args,fagsaker:[],fagsakOppgaver:[]}};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    searchFagsakCallback: action('button-click'),
    searchResultReceived: true,
    åpneFagsak: action('button-click'),
    selectOppgaveCallback: action('button-click'),
    searchStarted: false,
    resetSearch: action('button-click'),
    kanSaksbehandle: true,
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
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,k,d;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(d=(k=n.parameters)==null?void 0:k.docs)==null?void 0:d.source}}};const ge=["Default","IngentingBleFunnet"];export{e as Default,n as IngentingBleFunnet,ge as __namedExportsOrder,me as default};
