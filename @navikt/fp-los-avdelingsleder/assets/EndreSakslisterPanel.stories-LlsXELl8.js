import{R as t}from"./index-DVXBtNgz.js";import{a as n}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{Y as d,z as A}from"./index.es-Cl_yxThX.js";import{R}from"./RestApiMock-DpQNFfzU.js";import"./useRestApiRunner-r8nm61Jn.js";import{g as m,m as l}from"./nb_NO-D3Fg8-s9.js";import{a as p}from"./alleKodeverkLos-BJud6Q-i.js";import{E as o}from"./EndreSakslisterPanel-CofynGto.js";import{K as _}from"./KoSortering-BHrQm0Td.js";import{A as s}from"./andreKriterierType-DFB25pp4.js";import{R as L,a as e,r as I}from"./fplosRestApi-DXPSIiTb.js";import"./v4-CQkTLCs1.js";import"./index-Cbx7Fas8.js";import"./dayjs.min-Dkhc0ShP.js";import"./tslib.es6-CMwweBXX.js";import"./GjeldendeSakslisterTabell-odTmF6fz.js";import"./useLosKodeverk-BklsCf3V.js";import"./SletteSakslisteModal-DPGIfMGC.js";import"./Table-rjTaG-_E.js";import"./SaksbehandlereForSakslisteForm-Buxh8i5N.js";import"./Panel-Bo6ejZce.js";import"./UtvalgskriterierForSakslisteForm-DjKMulBS.js";import"./index.es-BoB8IYOI.js";import"./BehandlingstypeVelger-C1qX4i-R.js";import"./AndreKriterierVelger-CWydAvyd.js";import"./FagsakYtelseTypeVelger-CDqwXj86.js";import"./SorteringVelger-Fc7UqFgg.js";import"./useDebounce-CkIGjARt.js";const T=m(l),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:_.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[d.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:s.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:s.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],W={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:o,decorators:[T]},K=()=>{const E=[{key:L.KODEVERK_LOS.name,data:p,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return t.createElement(R,{data:E,requestApi:I},t.createElement(o,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:n("button-click"),resetValgtSakslisteId:n("button-click")}))},a=K.bind({});var r,i,S;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(S=(i=a.parameters)==null?void 0:i.docs)==null?void 0:S.source}}};const X=["Default"];export{a as Default,X as __namedExportsOrder,W as default};
