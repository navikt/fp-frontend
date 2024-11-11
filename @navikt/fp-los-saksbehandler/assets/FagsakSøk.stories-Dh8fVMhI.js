import{j as s}from"./jsx-runtime-QvZ8i92b.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{z as t,v as E,Y as r,b as i}from"./index.es-BkMxg3KK.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{R as f,b as R,r as b}from"./fplosSaksbehandlerRestApi-DzOe4zkL.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{m as h}from"./nb_NO-3Rkd6eZ_.js";import{g as N}from"./withIntl-BuEyDIEb.js";import{a as D}from"./alleKodeverkLos-BJud6Q-i.js";import{F as o}from"./FagsakSøk-jvw0nwJV.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./index-C5xsJX-I.js";import"./PersonInfo-BfanAOnv.js";import"./VStack-XUoC8Lli.js";import"./SøkForm-D49JBUB5.js";import"./index.es-BNbbWCfQ.js";import"./ExclamationmarkTriangleFill-B63PjGaY.js";import"./SøkResultat-BjW5utWs.js";import"./kodeverkUtils-RGNAgZhp.js";import"./useLosKodeverk-CyolKziq.js";import"./Table-BVBR0qW5.js";import"./ArrowsUpDown-5NlzdTbS.js";import"./useControllableState-DTAvaL6c.js";import"./ChevronRight-BGSoxRgL.js";const T=N(h),X={title:"søk/FagsakSøk",component:o,decorators:[T],render:u=>{const c=[{key:f.KODEVERK_LOS.name,data:D,global:!0}];return s.jsx(R,{data:c,requestApi:b,children:s.jsx(o,{...u})})}},e={args:{searchFagsakCallback:n("button-click"),searchResultReceived:!0,åpneFagsak:n("button-click"),selectOppgaveCallback:n("button-click"),searchStarted:!1,resetSearch:n("button-click"),kanSaksbehandle:!0,fagsaker:[{saksnummer:"12213234",fagsakYtelseType:t.FORELDREPENGER,status:E.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},a={args:{...e.args,fagsaker:[],fagsakOppgaver:[]}};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var k,g,d;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    fagsaker: [],
    fagsakOppgaver: []
  }
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const Z=["Default","IngentingBleFunnet"];export{e as Default,a as IngentingBleFunnet,Z as __namedExportsOrder,X as default};
