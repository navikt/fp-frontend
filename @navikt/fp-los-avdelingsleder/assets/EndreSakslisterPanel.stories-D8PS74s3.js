import{R as t}from"./index-DVXBtNgz.js";import{a as n}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{Y as d,z as A}from"./index.es-Cl_yxThX.js";import{R}from"./RestApiMock-D7GvAGON.js";import"./useRestApiRunner-r8nm61Jn.js";import{g as l,m}from"./nb_NO-Cx50JONv.js";import{a as _}from"./alleKodeverkLos-BJud6Q-i.js";import{E}from"./EndreSakslisterPanel-Di-69o4p.js";import{K as p}from"./KoSortering-BHrQm0Td.js";import{A as s}from"./andreKriterierType-DFB25pp4.js";import{R as L,a as e,r as I}from"./fplosRestApi-DXPSIiTb.js";import"./v4-CQkTLCs1.js";import"./index-Cbx7Fas8.js";import"./tslib.es6-CMwweBXX.js";import"./GjeldendeSakslisterTabell-s_7yWMu8.js";import"./useLosKodeverk-BklsCf3V.js";import"./SletteSakslisteModal-DH3lfb4z.js";import"./Table-fM8G9n-f.js";import"./SaksbehandlereForSakslisteForm-CRB53Wvn.js";import"./Panel-CrVd1bPV.js";import"./UtvalgskriterierForSakslisteForm-BhpA8M9_.js";import"./index.es-BbgVYiA4.js";import"./BehandlingstypeVelger-BT-HuSbj.js";import"./AndreKriterierVelger-DIgbG45W.js";import"./FagsakYtelseTypeVelger-wcjNUYaD.js";import"./SorteringVelger-B5Ijpzdh.js";import"./useDebounce-Cv72iHWE.js";const T=l(m),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[d.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:s.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:s.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],Q={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:E,decorators:[T]},K=()=>{const o=[{key:L.KODEVERK_LOS.name,data:_,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return t.createElement(R,{data:o,requestApi:I},t.createElement(E,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:n("button-click"),resetValgtSakslisteId:n("button-click")}))},a=K.bind({});var r,i,S;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(S=(i=a.parameters)==null?void 0:i.docs)==null?void 0:S.source}}};const W=["Default"];export{a as Default,W as __namedExportsOrder,Q as default};
