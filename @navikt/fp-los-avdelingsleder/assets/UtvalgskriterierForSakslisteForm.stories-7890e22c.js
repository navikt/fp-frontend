import{j as r}from"./jsx-runtime-5926aa06.js";import{a as s}from"./chunk-OPEUWD42-a3b45fd8.js";import{Y as k,z as L}from"./index.es-657e045f.js";import{k as _}from"./index.es-f19dba30.js";import{B as K,j as m,m as I}from"./nb_NO-34c6c3ba.js";import{U as o}from"./UtvalgskriterierForSakslisteForm-751df427.js";import{K as y}from"./KoSortering-3d894ebc.js";import{A as i}from"./andreKriterierType-3d6466df.js";import{R as N,a as e,r as G}from"./fplosRestApi-56e2d09a.js";import"./index-ebeaab24.js";import"./index.es-24d105fb.js";import"./index-9c09ad76.js";import"./index.es-7d65aa9f.js";import"./BehandlingstypeVelger-c0fed183.js";import"./useLosKodeverk-46a11add.js";import"./AndreKriterierVelger-8c01a16d.js";import"./FagsakYtelseTypeVelger-79034d73.js";import"./SorteringVelger-10690037.js";import"./Detail-86c2a14d.js";import"./Panel-e2c29623.js";import"./Heading-8a34415b.js";const g=K(I),C={title:"los/avdelingsleder/behandlingskoer/UtvalgskriterierForSakslisteForm",component:o,decorators:[g]},l=({sakslisteNavn:T})=>{const p=[{key:N.KODEVERK_LOS.name,data:m,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return r.jsx(_,{data:p,requestApi:G,children:r.jsx(o,{valgtSaksliste:{sakslisteId:1,navn:T,sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:y.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[k.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[L.FORELDREPENGER],andreKriterier:[{andreKriterierType:i.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:i.REGISTRER_PAPIRSOKNAD,inkluder:!1}]},valgtAvdelingEnhet:"",hentAvdelingensSakslister:s("button-click"),hentOppgaverForAvdelingAntall:s("button-click")})})},a=l.bind({});a.args={sakslisteNavn:"liste"};const t=l.bind({});t.args={sakslisteNavn:void 0};var n,d,S;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`({
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
}`,...(S=(d=a.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};var A,E,R;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
//# sourceMappingURL=UtvalgskriterierForSakslisteForm.stories-7890e22c.js.map
