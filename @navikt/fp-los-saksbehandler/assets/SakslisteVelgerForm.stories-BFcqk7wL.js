import{j as i}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{Y as e,z as s}from"./index.es-BkMxg3KK.js";import{a as R,R as b,b as K,r as I}from"./fplosSaksbehandlerRestApi-sDkjdQv6.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{m as T}from"./nb_NO-Cdvj1v88.js";import{g as L}from"./withIntl-C5OiI5A6.js";import{a as y}from"./alleKodeverkLos-BJud6Q-i.js";import{S as m,A as n,K as o}from"./SakslisteVelgerForm-PwrXkHX_.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./index-CfOt2XX2.js";import"./kodeverkTyper-bpjtq0Dy.js";import"./kodeverkUtils-RGNAgZhp.js";const V=L(T),q={title:"los/saksbehandler/behandlingskoer/SakslisteVelgerForm",component:m,decorators:[V]},u=({saksbehandlere:E,sakslister:g})=>{const A=[{key:R.SAKSLISTE_SAKSBEHANDLERE.name,data:E},{key:b.KODEVERK_LOS.name,data:y,global:!0}];return i.jsx(K,{data:A,requestApi:I,children:i.jsx(m,{sakslister:g,setValgtSakslisteId:a("button-click"),fetchAntallOppgaver:a("button-click"),getValueFromLocalStorage:()=>"",setValueInLocalStorage:a("button-click"),removeValueFromLocalStorage:a("button-click")})})},t=u.bind({});t.args={saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[s.FORELDREPENGER],andreKriterier:[{andreKriterierType:n.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]};const r=u.bind({});r.args={saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[s.FORELDREPENGER],andreKriterier:[{andreKriterierType:n.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.KLAGE],fagsakYtelseTyper:[s.SVANGERSKAPSPENGER],andreKriterier:[{andreKriterierType:n.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]};var l,k,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`({
  saksbehandlere,
  sakslister
}) => {
  const data = [{
    key: RestApiPathsKeys.SAKSLISTE_SAKSBEHANDLERE.name,
    data: saksbehandlere
  }, {
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SakslisteVelgerForm sakslister={sakslister} setValgtSakslisteId={action('button-click')} fetchAntallOppgaver={action('button-click')} getValueFromLocalStorage={() => ''} setValueInLocalStorage={action('button-click')} removeValueFromLocalStorage={action('button-click')} />
    </RestApiMock>;
}`,...(c=(k=t.parameters)==null?void 0:k.docs)==null?void 0:c.source}}};var d,S,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`({
  saksbehandlere,
  sakslister
}) => {
  const data = [{
    key: RestApiPathsKeys.SAKSLISTE_SAKSBEHANDLERE.name,
    data: saksbehandlere
  }, {
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <SakslisteVelgerForm sakslister={sakslister} setValgtSakslisteId={action('button-click')} fetchAntallOppgaver={action('button-click')} getValueFromLocalStorage={() => ''} setValueInLocalStorage={action('button-click')} removeValueFromLocalStorage={action('button-click')} />
    </RestApiMock>;
}`,...(p=(S=r.parameters)==null?void 0:S.docs)==null?void 0:p.source}}};const j=["Default","MedToSakslister"];export{t as Default,r as MedToSakslister,j as __namedExportsOrder,q as default};
