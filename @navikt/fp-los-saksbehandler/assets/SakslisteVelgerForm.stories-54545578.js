import{j as i}from"./jsx-runtime-5926aa06.js";import{a as r}from"./chunk-OPEUWD42-a3b45fd8.js";import{Y as e,z as s}from"./index.es-3e46b5c8.js";import{R,a as b,k as K,r as T}from"./fplosSaksbehandlerRestApi-325d6556.js";import{B as I,j as L,m as v}from"./nb_NO-80ad4d83.js";import{S as p,A as n,K as o}from"./SakslisteVelgerForm-2f8df57b.js";import"./index-ebeaab24.js";import"./index.es-d4f46e89.js";import"./index-9c09ad76.js";import"./index.es-4cd68a77.js";const y=I(v),B={title:"los/saksbehandler/behandlingskoer/SakslisteVelgerForm",component:p,decorators:[y]},m=({saksbehandlere:E,sakslister:g})=>{const A=[{key:R.SAKSLISTE_SAKSBEHANDLERE.name,data:E},{key:b.KODEVERK_LOS.name,data:L,global:!0}];return i.jsx(K,{data:A,requestApi:T,children:i.jsx(p,{sakslister:g,setValgtSakslisteId:r("button-click"),fetchAntallOppgaver:r("button-click"),getValueFromLocalStorage:()=>"",setValueInLocalStorage:r("button-click"),removeValueFromLocalStorage:r("button-click")})})},a=m.bind({});a.args={saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler",avdelingsnavn:[]},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim",avdelingsnavn:[]}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[s.FORELDREPENGER],andreKriterier:[{andreKriterierType:n.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]};const t=m.bind({});t.args={saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler",avdelingsnavn:[]},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim",avdelingsnavn:[]}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[s.FORELDREPENGER],andreKriterier:[{andreKriterierType:n.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.KLAGE],fagsakYtelseTyper:[s.SVANGERSKAPSPENGER],andreKriterier:[{andreKriterierType:n.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]};var l,k,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(d=(k=a.parameters)==null?void 0:k.docs)==null?void 0:d.source}}};var c,S,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(u=(S=t.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};const U=["Default","MedToSakslister"];export{a as Default,t as MedToSakslister,U as __namedExportsOrder,B as default};
//# sourceMappingURL=SakslisteVelgerForm.stories-54545578.js.map
