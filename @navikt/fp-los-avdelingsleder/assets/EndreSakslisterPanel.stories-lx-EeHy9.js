import{j as t}from"./jsx-runtime-CUEGZZF9.js";import{a as s}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{Y as E,z as A}from"./index.es-LzEcK_Mh.js";import{R}from"./RestApiMock-o5Vp9nUx.js";import{g as l,m}from"./nb_NO-OML_0A-C.js";import{a as _}from"./alleKodeverkLos-Qz5F4oTQ.js";import{E as o}from"./EndreSakslisterPanel-Zf_aqel3.js";import{K as p}from"./KoSortering--LJgVfwZ.js";import{A as r}from"./andreKriterierType-nr5UYWnD.js";import{R as L,a as e,r as I}from"./fplosRestApi-9Y9Hxjgv.js";import"./index-DogsOklH.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./useGlobalStateRestApiData-A2OyOdo-.js";import"./index-MroJ3egt.js";import"./GjeldendeSakslisterTabell-Q54LyKfl.js";import"./useLosKodeverk-9ArpyM85.js";import"./SletteSakslisteModal-GrJ350fU.js";import"./SaksbehandlereForSakslisteForm-J5_vN3H3.js";import"./Panel-s9BLv3bV.js";import"./VStack-nlwXwoir.js";import"./UtvalgskriterierForSakslisteForm-h01zwQu8.js";import"./index.es-xpop3FF6.js";import"./BehandlingstypeVelger-D_xEWw5Y.js";import"./AndreKriterierVelger-9db5GJc1.js";import"./FagsakYtelseTypeVelger-PdD5pmDD.js";import"./SorteringVelger-Xr8uTut4.js";const T=l(m),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:p.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[E.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:r.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:r.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],Q={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:o,decorators:[T]},K=()=>{const d=[{key:L.KODEVERK_LOS.name,data:_,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return t(R,{data:d,requestApi:I,children:t(o,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:s("button-click"),resetValgtSakslisteId:s("button-click")})})},a=K.bind({});var i,n,S;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
