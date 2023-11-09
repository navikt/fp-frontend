import{j as i}from"./jsx-runtime-86dfebf6.js";import{a as r}from"./chunk-AY7I2SME-5eb1ab46.js";import{Y as e,z as s}from"./index.es-a3c6219c.js";import{R,c as b,a as K,r as I}from"./fplosSaksbehandlerRestApi-84411765.js";import{g as T,m as L}from"./nb_NO-31758bbb.js";import{a as v}from"./alleKodeverkLos-5ac5bd02.js";import{S as u,A as n,K as o}from"./SakslisteVelgerForm-8020de99.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-f709a7eb.js";import"./index-6fd5a17b.js";import"./kodeverkTyper-3907affc.js";import"./kodeverkUtils-fd60f151.js";const y=T(L),M={title:"los/saksbehandler/behandlingskoer/SakslisteVelgerForm",component:u,decorators:[y]},m=({saksbehandlere:g,sakslister:E})=>{const A=[{key:R.SAKSLISTE_SAKSBEHANDLERE.name,data:g},{key:b.KODEVERK_LOS.name,data:v,global:!0}];return i(K,{data:A,requestApi:I,children:i(u,{sakslister:E,setValgtSakslisteId:r("button-click"),fetchAntallOppgaver:r("button-click"),getValueFromLocalStorage:()=>"",setValueInLocalStorage:r("button-click"),removeValueFromLocalStorage:r("button-click")})})},a=m.bind({});a.args={saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler",avdelingsnavn:[]},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim",avdelingsnavn:[]}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[s.FORELDREPENGER],andreKriterier:[{andreKriterierType:n.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]};const t=m.bind({});t.args={saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler",avdelingsnavn:[]},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim",avdelingsnavn:[]}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[s.FORELDREPENGER],andreKriterier:[{andreKriterierType:n.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.KLAGE],fagsakYtelseTyper:[s.SVANGERSKAPSPENGER],andreKriterier:[{andreKriterierType:n.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]};var l,k,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(d=(k=a.parameters)==null?void 0:k.docs)==null?void 0:d.source}}};var c,S,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(p=(S=t.parameters)==null?void 0:S.docs)==null?void 0:p.source}}};const H=["Default","MedToSakslister"];export{a as Default,t as MedToSakslister,H as __namedExportsOrder,M as default};
//# sourceMappingURL=SakslisteVelgerForm.stories-b469d8f5.js.map
