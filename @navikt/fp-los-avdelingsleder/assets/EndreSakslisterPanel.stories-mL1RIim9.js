import{R as t}from"./index-DogsOklH.js";import{a as n}from"./chunk-MZXVCX43-RlXIxtK5.js";import{Y as o,z as A}from"./index.es-LzEcK_Mh.js";import{R}from"./RestApiMock-8FOaa7K1.js";import"./useRestApiRunner-t59neJBf.js";import{g as l,m}from"./nb_NO-H9rL7jWp.js";import{a as _}from"./alleKodeverkLos-Qz5F4oTQ.js";import{E}from"./EndreSakslisterPanel-s-IDy_cQ.js";import{K as L}from"./KoSortering--LJgVfwZ.js";import{A as s}from"./andreKriterierType-nr5UYWnD.js";import{R as I,a as e,r as p}from"./fplosRestApi-7cfjsQHL.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./GjeldendeSakslisterTabell-kIF43vru.js";import"./useLosKodeverk-EtPolOdW.js";import"./SletteSakslisteModal-_-HLTKyX.js";import"./SaksbehandlereForSakslisteForm-_oRk8_C_.js";import"./Panel--qvEpq93.js";import"./UtvalgskriterierForSakslisteForm-Hc-6glAE.js";import"./index.es-ngO7zYbJ.js";import"./BehandlingstypeVelger-pxGy0cTe.js";import"./AndreKriterierVelger-cCnZ8oDM.js";import"./FagsakYtelseTypeVelger-3Li3V2UQ.js";import"./SorteringVelger-5tkNwyZ_.js";const T=l(m),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:L.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[o.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:s.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:s.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],j={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:E,decorators:[T]},K=()=>{const d=[{key:I.KODEVERK_LOS.name,data:_,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return t.createElement(R,{data:d,requestApi:p},t.createElement(E,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:n("button-click"),resetValgtSakslisteId:n("button-click")}))},a=K.bind({});var r,i,S;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(S=(i=a.parameters)==null?void 0:i.docs)==null?void 0:S.source}}};const C=["Default"];export{a as Default,C as __namedExportsOrder,j as default};
