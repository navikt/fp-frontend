import{j as t}from"./jsx-runtime-86dfebf6.js";import{a as s}from"./chunk-AY7I2SME-5eb1ab46.js";import{Y as E,z as A}from"./index.es-657e045f.js";import{R}from"./RestApiMock-492f57af.js";import{g as l,m}from"./nb_NO-632fc4c8.js";import{a as _}from"./alleKodeverkLos-5ac5bd02.js";import{E as o}from"./EndreSakslisterPanel-095698ee.js";import{K as p}from"./KoSortering-3d894ebc.js";import{A as r}from"./andreKriterierType-3d6466df.js";import{a as L,R as e,r as I}from"./fplosRestApi-fe4a3ae6.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-20592075.js";import"./index-6fd5a17b.js";import"./GjeldendeSakslisterTabell-93c5bd9d.js";import"./useLosKodeverk-c901f2b0.js";import"./SletteSakslisteModal-68f923d2.js";import"./Modal-f8c23473.js";import"./Heading-c434b717.js";import"./SaksbehandlereForSakslisteForm-b559e9b9.js";import"./Panel-384158e1.js";import"./VStack-ef9060f0.js";import"./UtvalgskriterierForSakslisteForm-2e7f79a4.js";import"./index.es-47c36ed4.js";import"./BehandlingstypeVelger-c1781486.js";import"./AndreKriterierVelger-7b0500e2.js";import"./FagsakYtelseTypeVelger-63a94605.js";import"./SorteringVelger-c4abb005.js";const T=l(m),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[E.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:r.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:r.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],Q={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:o,decorators:[T]},K=()=>{const d=[{key:L.KODEVERK_LOS.name,data:_,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return t(R,{data:d,requestApi:I,children:t(o,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:s("button-click"),resetValgtSakslisteId:s("button-click")})})},a=K.bind({});var i,n,S;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(S=(n=a.parameters)==null?void 0:n.docs)==null?void 0:S.source}}};const W=["Default"];export{a as Default,W as __namedExportsOrder,Q as default};
//# sourceMappingURL=EndreSakslisterPanel.stories-092f5160.js.map
