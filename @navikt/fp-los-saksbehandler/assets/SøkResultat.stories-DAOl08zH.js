import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as l}from"./behandlingStatus-CZkrUkra.js";import{B as k}from"./behandlingType-BdbjGMJD.js";import{S as s,F as d}from"./SøkResultat-SnxnueTb.js";import{F as n}from"./fagsakYtelseType-DI8GXtVr.js";import{g}from"./withIntl-DXHUjld2.js";import{a as u}from"./alleKodeverkLos-BJud6Q-i.js";import{K as E}from"./Kjonnkode-C-fkzSiP.js";import{R as c,b as f,r as R}from"./fplosSaksbehandlerRestApi-ZC5gilpx.js";import"./index-uubelm5h.js";import"./useRestApiRunner-4HgzHe3f.js";import{m as S}from"./nb_NO-C4RkFlUy.js";import"./v4-CQkTLCs1.js";import"./index.es-Bk8hSli7.js";import"./index.es-UbZaQCW7.js";import"./dayjs.min-BsYQKNhR.js";import"./Loader-CXblLYfE.js";import"./kodeverkTyper-CavWL6Ds.js";import"./kodeverkUtils-RGNAgZhp.js";import"./useLosKodeverk-Dpxz3JUJ.js";import"./Table-DEmoWMX5.js";import"./ArrowsUpDown-BRS8HI32.js";import"./composeEventHandlers-DeH74NdU.js";import"./useControllableState-DfAzX_fN.js";import"./ChevronDown-C80NRibc.js";import"./ChevronRight-Dxl7riK3.js";const N=g(S),Q={title:"søk/SøkResultat",component:s,decorators:[N],render:i=>{const m=[{key:c.KODEVERK_LOS.name,data:u,global:!0}];return t.jsx(f,{data:m,requestApi:R,children:t.jsx(s,{...i})})}},e={args:{åpneFagsak:a("button-click"),selectOppgaveCallback:a("button-click"),fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:n.FORELDREPENGER,status:d.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:E.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:k.FORSTEGANGSSOKNAD,behandlingStatus:l.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:n.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]}};var r,o,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    åpneFagsak: action('button-click'),
    selectOppgaveCallback: action('button-click'),
    fagsaker: [{
      saksnummer: '12213234',
      aktørId: '',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      status: FagsakStatus.UNDER_BEHANDLING,
      person: {
        navn: 'Espen Utvikler',
        fødselsdato: '1980-10-10',
        fødselsnummer: '1010',
        kjønn: KjønnkodeEnum.MANN
      },
      barnFødt: '2019-12-12',
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
    }]
  }
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const W=["Default"];export{e as Default,W as __namedExportsOrder,Q as default};
