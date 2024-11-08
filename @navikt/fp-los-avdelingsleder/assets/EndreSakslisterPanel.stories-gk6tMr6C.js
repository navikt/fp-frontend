import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{Y as d,z as A}from"./index.es-Cl_yxThX.js";import{R}from"./RestApiMock-C5ot3P9D.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{m}from"./nb_NO-C3qr7Zu2.js";import{g as l}from"./withIntl-hgZvmSKC.js";import{a as p}from"./alleKodeverkLos-BJud6Q-i.js";import{E as S}from"./EndreSakslisterPanel-Dnyv0wqd.js";import{K as _}from"./KoSortering-BHrQm0Td.js";import{A as r}from"./andreKriterierType-DFB25pp4.js";import{R as L,a as e,r as I}from"./fplosRestApi-1yojVYCb.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./GjeldendeSakslisterTabell-L2LQlCYU.js";import"./useLosKodeverk-Bf_J3o3R.js";import"./SletteSakslisteModal-YqGSdyjt.js";import"./Table-B813JqKx.js";import"./SaksbehandlereForSakslisteForm-DAOVBGdL.js";import"./Panel-BC7pbztL.js";import"./UtvalgskriterierForSakslisteForm-CrWrO7XL.js";import"./index.es-B356lO2T.js";import"./BehandlingstypeVelger-DIRvjvER.js";import"./AndreKriterierVelger-DScYRe-C.js";import"./FagsakYtelseTypeVelger-mjZwT-3X.js";import"./SorteringVelger-yjz8fWHU.js";import"./useDebounce-sDbwM9lX.js";const T=l(m),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:_.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[d.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:r.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:r.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],X={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:S,decorators:[T]},K=()=>{const E=[{key:L.KODEVERK_LOS.name,data:p,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return a.jsx(R,{data:E,requestApi:I,children:a.jsx(S,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:s("button-click"),resetValgtSakslisteId:s("button-click")})})},t=K.bind({});var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const Z=["Default"];export{t as Default,Z as __namedExportsOrder,X as default};
