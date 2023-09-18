import{j as t}from"./jsx-runtime-9c4ae004.js";import{a as s}from"./chunk-AY7I2SME-c7b6cf8a.js";import{Y as o,z as A}from"./index.es-657e045f.js";import{k as R}from"./index.es-02a6c24a.js";import{B as m,j as l,m as _}from"./nb_NO-14bcf780.js";import{E}from"./EndreSakslisterPanel-eabba6a4.js";import{K as p}from"./KoSortering-3d894ebc.js";import{A as r}from"./andreKriterierType-3d6466df.js";import{a as L,R as e,r as I}from"./fplosRestApi-beda4f04.js";import"./index-1b03fe98.js";import"./index.es-dcafba10.js";import"./index-6fd5a17b.js";import"./GjeldendeSakslisterTabell-0b841c1b.js";import"./useLosKodeverk-3c749e2b.js";import"./SletteSakslisteModal-e23dd2bc.js";import"./Provider-74b80cf1.js";import"./Detail-19d51d7c.js";import"./Heading-54254f6d.js";import"./SaksbehandlereForSakslisteForm-82921a0a.js";import"./Panel-fa0d0def.js";import"./UtvalgskriterierForSakslisteForm-b5a12786.js";import"./index.es-e059776d.js";import"./BehandlingstypeVelger-ffe0e8c2.js";import"./AndreKriterierVelger-b5ebee40.js";import"./FagsakYtelseTypeVelger-f104d2f7.js";import"./SorteringVelger-3a6ce02c.js";const T=m(_),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[o.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:r.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:r.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],J={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:E,decorators:[T]},K=()=>{const d=[{key:L.KODEVERK_LOS.name,data:l,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return t.jsx(R,{data:d,requestApi:I,children:t.jsx(E,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:s("button-click"),resetValgtSakslisteId:s("button-click")})})},a=K.bind({});var i,n,S;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=EndreSakslisterPanel.stories-532e4c91.js.map
