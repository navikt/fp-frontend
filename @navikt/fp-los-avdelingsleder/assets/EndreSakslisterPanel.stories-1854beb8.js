import{j as t}from"./jsx-runtime-9c4ae004.js";import{a as s}from"./chunk-AY7I2SME-5eb1ab46.js";import{Y as o,z as A}from"./index.es-657e045f.js";import{k as R}from"./index.es-3a17af17.js";import{B as m,j as l,m as _}from"./nb_NO-05becbd9.js";import{E}from"./EndreSakslisterPanel-ffa8dff6.js";import{K as p}from"./KoSortering-3d894ebc.js";import{A as r}from"./andreKriterierType-3d6466df.js";import{a as L,R as e,r as I}from"./fplosRestApi-812c551e.js";import"./index-1b03fe98.js";import"./index.es-5c2532e8.js";import"./index-6fd5a17b.js";import"./GjeldendeSakslisterTabell-42ca4e55.js";import"./useLosKodeverk-a2b371c1.js";import"./SletteSakslisteModal-deb13d78.js";import"./Provider-29253648.js";import"./Heading-d0e6bb7b.js";import"./SaksbehandlereForSakslisteForm-def6e636.js";import"./VStack-e154cc78.js";import"./Panel-76c4732c.js";import"./UtvalgskriterierForSakslisteForm-66eea698.js";import"./index.es-5900b098.js";import"./BehandlingstypeVelger-bd14d16f.js";import"./AndreKriterierVelger-3ec0b886.js";import"./FagsakYtelseTypeVelger-3db725d5.js";import"./SorteringVelger-56da3380.js";const T=m(_),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[o.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:r.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:r.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],J={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:E,decorators:[T]},K=()=>{const d=[{key:L.KODEVERK_LOS.name,data:l,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return t.jsx(R,{data:d,requestApi:I,children:t.jsx(E,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:s("button-click"),resetValgtSakslisteId:s("button-click")})})},a=K.bind({});var i,n,S;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.OPPGAVE_ANTALL.name,
    data: 1
  }, {
    key: RestApiPathsKeys.SAKSLISTER_FOR_AVDELING.name,
    data: sakslister
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
      <EndreSakslisterPanel valgtSakslisteId={1} valgtAvdelingEnhet="" avdelingensSaksbehandlere={[]} setValgtSakslisteId={action('button-click')} resetValgtSakslisteId={action('button-click')} />
    </RestApiMock>;
}`,...(S=(n=a.parameters)==null?void 0:n.docs)==null?void 0:S.source}}};const Q=["Default"];export{a as Default,Q as __namedExportsOrder,J as default};
//# sourceMappingURL=EndreSakslisterPanel.stories-1854beb8.js.map
