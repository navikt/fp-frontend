import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as m}from"./behandlingType-BdbjGMJD.js";import{F as k}from"./fagsakYtelseType-DI8GXtVr.js";import{m as L}from"./nb_NO-Zqge3fS6.js";import{g as _}from"./withIntl-Bv-P8ZIY.js";import{a as K}from"./alleKodeverkLos-BJud6Q-i.js";import{R as I}from"./RestApiMock-CCcMv-43.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Dz_KBbnA.js";import{R as y,a as e,r as N}from"./fplosRestApi-DIvKj8Ld.js";import{A as i}from"./andreKriterierType-DFB25pp4.js";import{K as G}from"./KoSortering-BHrQm0Td.js";import{U as R}from"./UtvalgskriterierForSakslisteForm-BetFedST.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./index.es-DGARnTEE.js";import"./Modal-nRd4VDWO.js";import"./dayjs.min-BsYQKNhR.js";import"./index.es-C82Zs4UF.js";import"./VStack-C7XzQG3E.js";import"./index.es-BjtZFtlt.js";import"./AndreKriterierVelger-DO3OkPh9.js";import"./useLosKodeverk-BNdH8iUk.js";import"./BehandlingstypeVelger-CeJWMhhc.js";import"./kodeverkTyper-CavWL6Ds.js";import"./FagsakYtelseTypeVelger-BxNYDdNA.js";import"./SorteringVelger-DpALbfLN.js";import"./useDebounce-CwIbLCG-.js";import"./Panel-Dwv4sAY7.js";const g=_(L),re={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:R,decorators:[g]},l=({sakslisteNavn:p})=>{const T=[{key:y.KODEVERK_LOS.name,data:K,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return r.jsx(I,{data:T,requestApi:N,children:r.jsx(R,{valgtSaksliste:{sakslisteId:1,navn:p,sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:G.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[m.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[k.FORELDREPENGER],andreKriterier:[{andreKriterierType:i.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:i.REGISTRER_PAPIRSOKNAD,inkluder:!1}]},valgtAvdelingEnhet:"",hentAvdelingensSakslister:s("button-click"),hentOppgaverForAvdelingAntall:s("button-click")})})},a=l.bind({});a.args={sakslisteNavn:"liste"};const t=l.bind({});t.args={sakslisteNavn:void 0};var n,d,A;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`({
  sakslisteNavn
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,
    data: undefined
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <UtvalgskriterierForSakslisteForm valgtSaksliste={{
      sakslisteId: 1,
      navn: sakslisteNavn,
      sistEndret: '2020-10-10',
      saksbehandlerIdenter: [],
      antallBehandlinger: 1,
      sortering: {
        sorteringType: koSortering.BEHANDLINGSFRIST,
        fra: 1,
        til: 4,
        erDynamiskPeriode: true
      },
      behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD],
      fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
      andreKriterier: [{
        andreKriterierType: andreKriterierType.TIL_BESLUTTER,
        inkluder: true
      }, {
        andreKriterierType: andreKriterierType.REGISTRER_PAPIRSOKNAD,
        inkluder: false
      }]
    }} valgtAvdelingEnhet="" hentAvdelingensSakslister={action('button-click')} hentOppgaverForAvdelingAntall={action('button-click')} />
    </RestApiMock>;
}`,...(A=(d=a.parameters)==null?void 0:d.docs)==null?void 0:A.source}}};var S,o,E;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`({
  sakslisteNavn
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,
    data: undefined
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <UtvalgskriterierForSakslisteForm valgtSaksliste={{
      sakslisteId: 1,
      navn: sakslisteNavn,
      sistEndret: '2020-10-10',
      saksbehandlerIdenter: [],
      antallBehandlinger: 1,
      sortering: {
        sorteringType: koSortering.BEHANDLINGSFRIST,
        fra: 1,
        til: 4,
        erDynamiskPeriode: true
      },
      behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD],
      fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
      andreKriterier: [{
        andreKriterierType: andreKriterierType.TIL_BESLUTTER,
        inkluder: true
      }, {
        andreKriterierType: andreKriterierType.REGISTRER_PAPIRSOKNAD,
        inkluder: false
      }]
    }} valgtAvdelingEnhet="" hentAvdelingensSakslister={action('button-click')} hentOppgaverForAvdelingAntall={action('button-click')} />
    </RestApiMock>;
}`,...(E=(o=t.parameters)==null?void 0:o.docs)==null?void 0:E.source}}};const se=["MedGittNavn","MedDefaultNavn"];export{t as MedDefaultNavn,a as MedGittNavn,se as __namedExportsOrder,re as default};
