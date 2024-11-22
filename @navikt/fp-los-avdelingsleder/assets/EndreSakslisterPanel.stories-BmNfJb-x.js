import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as E}from"./behandlingType-BdbjGMJD.js";import{F as A}from"./fagsakYtelseType-DI8GXtVr.js";import{R}from"./RestApiMock-D1S-6bWT.js";import"./index-uubelm5h.js";import"./useRestApiRunner-OGnsYqIB.js";import{m}from"./nb_NO-COD-RJQh.js";import{g as l}from"./withIntl-Dj43w9ql.js";import{a as p}from"./alleKodeverkLos-BJud6Q-i.js";import{E as S}from"./EndreSakslisterPanel-DKAUvAoD.js";import{K as _}from"./KoSortering-BHrQm0Td.js";import{A as r}from"./andreKriterierType-DFB25pp4.js";import{R as L,a as e,r as I}from"./fplosRestApi-BTvDMX_p.js";import"./v4-CQkTLCs1.js";import"./Modal-D_J0aA2i.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./GjeldendeSakslisterTabell-Dl8eY3bT.js";import"./kodeverkTyper-CavWL6Ds.js";import"./useLosKodeverk-wto_KGrb.js";import"./SletteSakslisteModal-Bp0tz0_L.js";import"./VStack-X3WkY7jl.js";import"./Table-D5oOqV5R.js";import"./SaksbehandlereForSakslisteForm-DRiSO6Tt.js";import"./index.es-C4n-jDxS.js";import"./Panel-kMoRCghZ.js";import"./UtvalgskriterierForSakslisteForm-pqiy9azU.js";import"./index.es-CclR0BpJ.js";import"./BehandlingstypeVelger-EC0x36cJ.js";import"./AndreKriterierVelger-CojpWfFv.js";import"./FagsakYtelseTypeVelger-Os1G77sS.js";import"./SorteringVelger-Cg-3HrdM.js";import"./useDebounce-CoL4uJdr.js";const T=l(m),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:_.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[E.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:r.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:r.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],se={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:S,decorators:[T]},K=()=>{const d=[{key:L.KODEVERK_LOS.name,data:p,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return a.jsx(R,{data:d,requestApi:I,children:a.jsx(S,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:s("button-click"),resetValgtSakslisteId:s("button-click")})})},t=K.bind({});var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const re=["Default"];export{t as Default,re as __namedExportsOrder,se as default};
