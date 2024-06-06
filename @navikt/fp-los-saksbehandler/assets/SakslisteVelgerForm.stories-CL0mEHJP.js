import{R as i}from"./index-BBkUAzwr.js";import{a as r}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{Y as e,z as s}from"./index.es-BkMxg3KK.js";import{a as R,R as b,b as K,r as I}from"./fplosSaksbehandlerRestApi-yC5FIIxZ.js";import"./useRestApiRunner-CnLmgk-1.js";import{g as T,m as L}from"./nb_NO-B_pArjwH.js";import{a as v}from"./alleKodeverkLos-BJud6Q-i.js";import{S as u,A as n,K as o}from"./SakslisteVelgerForm-5QNkplWn.js";import"./v4-CQkTLCs1.js";import"./index-PqR-_bA4.js";import"./kodeverkTyper-DJMuX7JX.js";import"./kodeverkUtils-RGNAgZhp.js";const y=T(L),M={title:"los/saksbehandler/behandlingskoer/SakslisteVelgerForm",component:u,decorators:[y]},m=({saksbehandlere:g,sakslister:E})=>{const A=[{key:R.SAKSLISTE_SAKSBEHANDLERE.name,data:g},{key:b.KODEVERK_LOS.name,data:v,global:!0}];return i.createElement(K,{data:A,requestApi:I},i.createElement(u,{sakslister:E,setValgtSakslisteId:r("button-click"),fetchAntallOppgaver:r("button-click"),getValueFromLocalStorage:()=>"",setValueInLocalStorage:r("button-click"),removeValueFromLocalStorage:r("button-click")}))},a=m.bind({});a.args={saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler",avdelingsnavn:[]},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim",avdelingsnavn:[]}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[s.FORELDREPENGER],andreKriterier:[{andreKriterierType:n.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]};const t=m.bind({});t.args={saksbehandlere:[{brukerIdent:{brukerIdent:"32434",verdi:"32434"},navn:"Espen Utvikler",avdelingsnavn:[]},{brukerIdent:{brukerIdent:"31111",verdi:"32111"},navn:"Auto Joakim",avdelingsnavn:[]}],sakslister:[{sakslisteId:1,navn:"Saksliste 1",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.REVURDERING],fagsakYtelseTyper:[s.FORELDREPENGER],andreKriterier:[{andreKriterierType:n.TIL_BESLUTTER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}},{sakslisteId:2,navn:"Saksliste 2",behandlingTyper:[e.FORSTEGANGSSOKNAD,e.KLAGE],fagsakYtelseTyper:[s.SVANGERSKAPSPENGER],andreKriterier:[{andreKriterierType:n.UTBETALING_TIL_BRUKER,inkluder:!0}],sortering:{sorteringType:o.BEHANDLINGSFRIST,fra:2,til:4,erDynamiskPeriode:!0}}]};var l,k,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(c=(k=a.parameters)==null?void 0:k.docs)==null?void 0:c.source}}};var d,S,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
