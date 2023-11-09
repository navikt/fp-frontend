import{j as t}from"./jsx-runtime-86dfebf6.js";import{a as s}from"./chunk-AY7I2SME-5eb1ab46.js";import{Y as o,z as A}from"./index.es-657e045f.js";import{R}from"./intl-test-helper-4315b879.js";import{g as l,m}from"./nb_NO-7d7a9a16.js";import{a as _}from"./alleKodeverkLos-5ac5bd02.js";import{E as d}from"./EndreSakslisterPanel-a6ea6629.js";import{K as L}from"./KoSortering-3d894ebc.js";import{A as r}from"./andreKriterierType-3d6466df.js";import{a as I,R as e,r as p}from"./fplosRestApi-e273a6f1.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-20592075.js";import"./index-6fd5a17b.js";import"./GjeldendeSakslisterTabell-97060e51.js";import"./useLosKodeverk-ac1cee0a.js";import"./SletteSakslisteModal-151f31e8.js";import"./SaksbehandlereForSakslisteForm-c0332bfe.js";import"./Panel-ccb95562.js";import"./VStack-a54df971.js";import"./UtvalgskriterierForSakslisteForm-6db0d810.js";import"./index.es-6bc5cfcb.js";import"./BehandlingstypeVelger-75a8a07c.js";import"./AndreKriterierVelger-3608edc0.js";import"./FagsakYtelseTypeVelger-1dafc6bf.js";import"./SorteringVelger-6686e612.js";const T=l(m),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:L.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[o.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:r.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:r.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],C={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:d,decorators:[T]},K=()=>{const E=[{key:I.KODEVERK_LOS.name,data:_,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return t(R,{data:E,requestApi:p,children:t(d,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:s("button-click"),resetValgtSakslisteId:s("button-click")})})},a=K.bind({});var i,n,S;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(S=(n=a.parameters)==null?void 0:n.docs)==null?void 0:S.source}}};const J=["Default"];export{a as Default,J as __namedExportsOrder,C as default};
//# sourceMappingURL=EndreSakslisterPanel.stories-b8027289.js.map
