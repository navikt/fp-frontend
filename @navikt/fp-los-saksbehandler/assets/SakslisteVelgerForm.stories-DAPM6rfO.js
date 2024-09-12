import{j as i}from"./dayjs.min-ZUODdiE-.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import{Y as e,z as s}from"./index.es-BkMxg3KK.js";import{a as R,R as b,b as K,r as I}from"./fplosSaksbehandlerRestApi-BmCgkfCR.js";import"./index-uubelm5h.js";import"./useRestApiRunner-CYj01yVu.js";import{g as T,m as L}from"./nb_NO-AMOPF0IO.js";import{a as y}from"./alleKodeverkLos-BJud6Q-i.js";import{S as u,A as n,K as o}from"./SakslisteVelgerForm-BZfHa2JV.js";import"./v4-CQkTLCs1.js";import"./index-BdzLX9oW.js";import"./kodeverkTyper-bpjtq0Dy.js";import"./kodeverkUtils-RGNAgZhp.js";const V=T(L),x={title:"los/saksbehandler/behandlingskoer/SakslisteVelgerForm",component:u,decorators:[V]},m=({saksbehandlere:E,sakslister:g})=>{const A=[{key:R.SAKSLISTE_SAKSBEHANDLERE.name,data:E},{key:b.KODEVERK_LOS.name,data:y,global:!0}];return i.jsx(K,{data:A,requestApi:I,children:i.jsx(u,{sakslister:g,setValgtSakslisteId:a("button-click"),fetchAntallOppgaver:a("button-click"),getValueFromLocalStorage:()=>"",setValueInLocalStorage:a("button-click"),removeValueFromLocalStorage:a("button-click")})})},t=m.bind({});t.args={saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[s.FORELDREPENGER],andreKriterier:[{andreKriterierType:n.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]};const r=m.bind({});r.args={saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler"},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim"}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[s.FORELDREPENGER],andreKriterier:[{andreKriterierType:n.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.KLAGE],fagsakYtelseTyper:[s.SVANGERSKAPSPENGER],andreKriterier:[{andreKriterierType:n.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]};var l,k,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(p=(S=r.parameters)==null?void 0:S.docs)==null?void 0:p.source}}};const H=["Default","MedToSakslister"];export{t as Default,r as MedToSakslister,H as __namedExportsOrder,x as default};
