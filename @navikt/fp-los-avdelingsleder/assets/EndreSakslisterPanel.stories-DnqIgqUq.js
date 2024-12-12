import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as E}from"./behandlingType-BdbjGMJD.js";import{F as A}from"./fagsakYtelseType-DI8GXtVr.js";import{m}from"./nb_NO-Zqge3fS6.js";import{g as R}from"./withIntl-Bv-P8ZIY.js";import{a as l}from"./alleKodeverkLos-BJud6Q-i.js";import{R as p}from"./RestApiMock-CCcMv-43.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Dz_KBbnA.js";import{R as _,a as e,r as L}from"./fplosRestApi-DIvKj8Ld.js";import{A as r}from"./andreKriterierType-DFB25pp4.js";import{K as I}from"./KoSortering-BHrQm0Td.js";import{E as S}from"./EndreSakslisterPanel-1pvI7Hqf.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./index.es-DGARnTEE.js";import"./Modal-nRd4VDWO.js";import"./dayjs.min-BsYQKNhR.js";import"./GjeldendeSakslisterTabell-Bq7oUn96.js";import"./kodeverkTyper-CavWL6Ds.js";import"./useLosKodeverk-BNdH8iUk.js";import"./SletteSakslisteModal-DRbtKmGe.js";import"./VStack-C7XzQG3E.js";import"./Table-Dp5M2zv1.js";import"./SaksbehandlereForSakslisteForm-CklggqNy.js";import"./index.es-C82Zs4UF.js";import"./Panel-Dwv4sAY7.js";import"./UtvalgskriterierForSakslisteForm-BetFedST.js";import"./index.es-BjtZFtlt.js";import"./AndreKriterierVelger-DO3OkPh9.js";import"./BehandlingstypeVelger-CeJWMhhc.js";import"./FagsakYtelseTypeVelger-BxNYDdNA.js";import"./SorteringVelger-DpALbfLN.js";import"./useDebounce-CwIbLCG-.js";const T=R(m),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:I.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[E.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:r.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:r.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],re={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:S,decorators:[T]},K=()=>{const d=[{key:_.KODEVERK_LOS.name,data:l,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return a.jsx(p,{data:d,requestApi:L,children:a.jsx(S,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:s("button-click"),resetValgtSakslisteId:s("button-click")})})},t=K.bind({});var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const ie=["Default"];export{t as Default,ie as __namedExportsOrder,re as default};
