import{j as s}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as r}from"./behandlingStatus-CZkrUkra.js";import{B as i}from"./behandlingType-BdbjGMJD.js";import{F as E}from"./SøkResultat-Z73FT7s8.js";import{F as t}from"./fagsakYtelseType-DI8GXtVr.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{R as f,b as R,r as b}from"./fplosSaksbehandlerRestApi-D8GFX0av.js";import"./index-uubelm5h.js";import"./useRestApiRunner-PStp57wB.js";import{g as h}from"./withIntl-DXHUjld2.js";import{a as N}from"./alleKodeverkLos-BJud6Q-i.js";import{F as o}from"./FagsakSøk-DNUqBgar.js";import{m as F}from"./nb_NO-C4RkFlUy.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-UbZaQCW7.js";import"./index.es-Bk8hSli7.js";import"./Loader-CXblLYfE.js";import"./kodeverkTyper-CavWL6Ds.js";import"./kodeverkUtils-RGNAgZhp.js";import"./useLosKodeverk-COPZEPf1.js";import"./Table-DEmoWMX5.js";import"./ArrowsUpDown-BRS8HI32.js";import"./composeEventHandlers-DeH74NdU.js";import"./useControllableState-DfAzX_fN.js";import"./ChevronDown-C80NRibc.js";import"./ChevronRight-Dxl7riK3.js";import"./PersonInfo-Dc_F7FWi.js";import"./Tag-DyOxNX7P.js";import"./VStack-Cn_RGqfq.js";import"./Slot-CBut_XMV.js";import"./SøkForm-C3fwuugr.js";import"./index.es-DXmPf6Wl.js";import"./index-C5xsJX-I.js";import"./Modal-BG2sORRw.js";import"./index.es-C0qDvsAq.js";import"./ExclamationmarkTriangleFill-Bm-_Y4hE.js";const T=h(F),me={title:"søk/FagsakSøk",component:o,decorators:[T],render:u=>{const c=[{key:f.KODEVERK_LOS.name,data:N,global:!0}];return s.jsx(R,{data:c,requestApi:b,children:s.jsx(o,{...u})})}},e={args:{searchFagsakCallback:a("button-click"),searchResultReceived:!0,åpneFagsak:a("button-click"),selectOppgaveCallback:a("button-click"),searchStarted:!1,resetSearch:a("button-click"),kanSaksbehandle:!0,fagsaker:[{saksnummer:"12213234",fagsakYtelseType:t.FORELDREPENGER,status:E.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:i.FORSTEGANGSSOKNAD,behandlingStatus:r.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},n={args:{...e.args,fagsaker:[],fagsakOppgaver:[]}};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
