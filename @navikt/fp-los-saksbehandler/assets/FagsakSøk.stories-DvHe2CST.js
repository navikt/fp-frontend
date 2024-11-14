import{j as s}from"./jsx-runtime-QvZ8i92b.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{z as a,v as E,Y as r,b as i}from"./index.es-BkMxg3KK.js";import{K as S}from"./Kjonnkode-C-fkzSiP.js";import{R as f,b as R,r as b}from"./fplosSaksbehandlerRestApi-BZCxhk6H.js";import"./index-uubelm5h.js";import"./useRestApiRunner-PStp57wB.js";import{g as h}from"./withIntl-CXCN2UdN.js";import{a as N}from"./alleKodeverkLos-BJud6Q-i.js";import{F as o}from"./FagsakSøk-D5veTxRm.js";import{m as D}from"./nb_NO-B-ueAdrN.js";import"./v4-CQkTLCs1.js";import"./index.es-Cy3ARoh3.js";import"./index.es-eNWzkFa8.js";import"./dayjs.min-BsYQKNhR.js";import"./Loader-CZ5ROITq.js";import"./PersonInfo-DUvczT9y.js";import"./Tag-Q6veKrcb.js";import"./VStack-5SNtFvVE.js";import"./Slot-CBut_XMV.js";import"./SøkForm-475v7Gee.js";import"./index.es-BA1rT94D.js";import"./ChevronDown-hRS6jTPP.js";import"./index-C5xsJX-I.js";import"./Modal-DD2nizkS.js";import"./composeEventHandlers-DeH74NdU.js";import"./index.es-Bw7S5icu.js";import"./ExclamationmarkTriangleFill-Bk2GY4H9.js";import"./SøkResultat-SluF_YNy.js";import"./kodeverkUtils-RGNAgZhp.js";import"./useLosKodeverk-DXlDis-J.js";import"./Table-uYBCoo0F.js";import"./ArrowsUpDown-MzKzmnUF.js";import"./useControllableState-dRQCPc2o.js";import"./ChevronRight-B8EN7GmS.js";const T=h(D),ie={title:"søk/FagsakSøk",component:o,decorators:[T],render:u=>{const c=[{key:f.KODEVERK_LOS.name,data:N,global:!0}];return s.jsx(R,{data:c,requestApi:b,children:s.jsx(o,{...u})})}},e={args:{searchFagsakCallback:n("button-click"),searchResultReceived:!0,åpneFagsak:n("button-click"),selectOppgaveCallback:n("button-click"),searchStarted:!1,resetSearch:n("button-click"),kanSaksbehandle:!0,fagsaker:[{saksnummer:"12213234",fagsakYtelseType:a.FORELDREPENGER,status:E.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:S.MANN},barnFødt:"2019-12-12",aktørId:"23",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"},{id:2,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:r.FORSTEGANGSSOKNAD,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:a.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}},t={args:{...e.args,fagsaker:[],fagsakOppgaver:[]}};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
