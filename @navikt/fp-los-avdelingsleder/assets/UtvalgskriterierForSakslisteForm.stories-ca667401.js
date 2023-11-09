import{j as r}from"./jsx-runtime-86dfebf6.js";import{a as s}from"./chunk-AY7I2SME-5eb1ab46.js";import{Y as L,z as k}from"./index.es-657e045f.js";import{R as _}from"./intl-test-helper-4315b879.js";import{g as K,m as I}from"./nb_NO-7d7a9a16.js";import{a as m}from"./alleKodeverkLos-5ac5bd02.js";import{U as o}from"./UtvalgskriterierForSakslisteForm-6db0d810.js";import{K as y}from"./KoSortering-3d894ebc.js";import{A as i}from"./andreKriterierType-3d6466df.js";import{a as N,R as e,r as G}from"./fplosRestApi-e273a6f1.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-20592075.js";import"./index-6fd5a17b.js";import"./index.es-6bc5cfcb.js";import"./BehandlingstypeVelger-75a8a07c.js";import"./useLosKodeverk-ac1cee0a.js";import"./AndreKriterierVelger-3608edc0.js";import"./FagsakYtelseTypeVelger-1dafc6bf.js";import"./SorteringVelger-6686e612.js";import"./Panel-ccb95562.js";import"./VStack-a54df971.js";const g=K(I),C={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:o,decorators:[g]},l=({sakslisteNavn:T})=>{const p=[{key:N.KODEVERK_LOS.name,data:m,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return r(_,{data:p,requestApi:G,children:r(o,{valgtSaksliste:{sakslisteId:1,navn:T,sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:y.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[L.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[k.FORELDREPENGER],andreKriterier:[{andreKriterierType:i.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:i.REGISTRER_PAPIRSOKNAD,inkluder:!1}]},valgtAvdelingEnhet:"",hentAvdelingensSakslister:s("button-click"),hentOppgaverForAvdelingAntall:s("button-click")})})},a=l.bind({});a.args={sakslisteNavn:"liste"};const t=l.bind({});t.args={sakslisteNavn:void 0};var n,d,A;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(A=(d=a.parameters)==null?void 0:d.docs)==null?void 0:A.source}}};var S,E,R;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(R=(E=t.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const J=["MedGittNavn","MedDefaultNavn"];export{t as MedDefaultNavn,a as MedGittNavn,J as __namedExportsOrder,C as default};
//# sourceMappingURL=UtvalgskriterierForSakslisteForm.stories-ca667401.js.map
