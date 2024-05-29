import{R as t}from"./index-DogsOklH.js";import{a as n}from"./chunk-MZXVCX43-RlXIxtK5.js";import{Y as d,z as A}from"./index.es-LzEcK_Mh.js";import{R}from"./RestApiMock-PoHaMzn1.js";import"./useRestApiRunner-t59neJBf.js";import{g as l,m}from"./nb_NO-8vkv4Fjx.js";import{a as _}from"./alleKodeverkLos-3oPC0WGq.js";import{E}from"./EndreSakslisterPanel-tTkQJfmQ.js";import{K as L}from"./KoSortering--LJgVfwZ.js";import{A as s}from"./andreKriterierType-nr5UYWnD.js";import{R as p,a as e,r as I}from"./fplosRestApi-hxLEfccG.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./GjeldendeSakslisterTabell-hzgZLJ0h.js";import"./useLosKodeverk-_R72ADyC.js";import"./SletteSakslisteModal-VyMguG4i.js";import"./Table-jpuw6DY0.js";import"./SaksbehandlereForSakslisteForm-kUv4ZxCx.js";import"./Panel-roRo1son.js";import"./UtvalgskriterierForSakslisteForm-t19dRByE.js";import"./index.es-lhDBPqjE.js";import"./BehandlingstypeVelger-TL3_f7Zc.js";import"./AndreKriterierVelger-JspV6YJ_.js";import"./FagsakYtelseTypeVelger-mbWBKI14.js";import"./SorteringVelger-OALy274U.js";import"./useDebounce-7npZRRYW.js";const T=l(m),k=[{sakslisteId:1,navn:"test",sistEndret:"2020-10-10",saksbehandlerIdenter:[],antallBehandlinger:1,sortering:{sorteringType:L.BEHANDLINGSFRIST,fra:1,til:4,erDynamiskPeriode:!0},behandlingTyper:[d.FORSTEGANGSSOKNAD],fagsakYtelseTyper:[A.FORELDREPENGER],andreKriterier:[{andreKriterierType:s.TIL_BESLUTTER,inkluder:!0},{andreKriterierType:s.REGISTRER_PAPIRSOKNAD,inkluder:!1}]}],J={title:"los/avdelingsleder/behandlingskoer/EndreSakslisterPanel",component:E,decorators:[T]},K=()=>{const o=[{key:p.KODEVERK_LOS.name,data:_,global:!0},{key:e.OPPGAVE_ANTALL.name,data:1},{key:e.SAKSLISTER_FOR_AVDELING.name,data:k},{key:e.LAGRE_SAKSLISTE_NAVN.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0},{key:e.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0},{key:e.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:void 0}];return t.createElement(R,{data:o,requestApi:I},t.createElement(E,{valgtSakslisteId:1,valgtAvdelingEnhet:"",avdelingensSaksbehandlere:[],setValgtSakslisteId:n("button-click"),resetValgtSakslisteId:n("button-click")}))},a=K.bind({});var r,i,S;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(S=(i=a.parameters)==null?void 0:i.docs)==null?void 0:S.source}}};const Q=["Default"];export{a as Default,Q as __namedExportsOrder,J as default};
