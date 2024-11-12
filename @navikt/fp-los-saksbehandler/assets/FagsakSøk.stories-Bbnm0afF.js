import{j as s}from"./jsx-runtime-QvZ8i92b.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{z as a,v as E,Y as r,b as i}from"./index.es-BkMxg3KK.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{R as f,b as R,r as b}from"./fplosSaksbehandlerRestApi-Ka1JV5Ye.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{g as h}from"./withIntl-B1vQUx0m.js";import{a as N}from"./alleKodeverkLos-BJud6Q-i.js";import{F as o}from"./FagsakSøk-D73vBJ_Q.js";import{m as D}from"./nb_NO-YKX2BiU8.js";import"./v4-CQkTLCs1.js";import"./index.es-CpK69d07.js";import"./index.es-B67PpFt1.js";import"./dayjs.min-BsYQKNhR.js";import"./Loader-jHrtJ_3u.js";import"./PersonInfo-DxRqpdDL.js";import"./Tag-A8GJ_bEw.js";import"./VStack-BGxRFqgw.js";import"./Slot-CBut_XMV.js";import"./SøkForm-BAcAe5SF.js";import"./index.es-BOVNU-pM.js";import"./ChevronDown-BKn0q_zR.js";import"./index-C5xsJX-I.js";import"./Modal-BhT7G_bu.js";import"./composeEventHandlers-DeH74NdU.js";import"./index.es-CQiD8l-s.js";import"./ExclamationmarkTriangleFill-D8-WOHQX.js";import"./SøkResultat-TmzBMD83.js";import"./kodeverkUtils-RGNAgZhp.js";import"./useLosKodeverk-BJkxs5zU.js";import"./Table-C2b4Mp6l.js";import"./ArrowsUpDown-DNE7XvpO.js";import"./useControllableState-B2VAyEaW.js";import"./ChevronRight-vz_y1TjH.js";const T=h(D),ie={title:"søk/FagsakSøk",component:o,decorators:[T],render:u=>{const c=[{key:f.KODEVERK_LOS.name,data:N,global:!0}];return s.jsx(R,{data:c,requestApi:b,children:s.jsx(o,{...u})})}},e={args:{searchFagsakCallback:n("button-click"),searchResultReceived:!0,åpneFagsak:n("button-click"),selectOppgaveCallback:n("button-click"),searchStarted:!1,resetSearch:n("button-click"),kanSaksbehandle:!0,fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:E.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},t={args:{...e.args,fagsaker:[],fagsakOppgaver:[]}};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var k,g,d;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(d=(g=t.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const oe=["Default","IngentingBleFunnet"];export{e as Default,t as IngentingBleFunnet,oe as __namedExportsOrder,ie as default};
