import{j as a}from"./jsx-runtime-CUEGZZF9.js";import{a as t}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{Y as m,b as d,z as v}from"./index.es-V78UKnai.js";import{a as u,b as g,r as h}from"./fplosSaksbehandlerRestApi-R1O2aTN7.js";import{g as R,m as k}from"./nb_NO-ey_aYqDl.js";import{O as o}from"./OpphevReservasjonModal-nQvtMyXH.js";import"./index-DogsOklH.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./useGlobalStateRestApiData-n3nAw5-C.js";import"./index-MroJ3egt.js";import"./index.es-BTwhFyBf.js";const E=R(k),V={title:"los/saksbehandler/behandlingskoer/OpphevReservasjonModal",component:o,decorators:[E]},O=({oppgave:p,opphevData:i,hentReserverteOppgaver:l})=>{const c=[{key:u.OPPHEV_OPPGAVERESERVASJON.name,data:i}];return a(g,{data:c,requestApi:h,children:a(o,{showModal:!0,oppgave:p,cancel:t("button-click"),hentReserverteOppgaver:l,toggleMenu:t("button-click")})})},e=O.bind({});e.args={opphevData:{},hentReserverteOppgaver:t("button-click"),oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:v.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  oppgave,
  opphevData,
  hentReserverteOppgaver
}) => {
  const data = [{
    key: RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON.name,
    data: opphevData
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <OpphevReservasjonModal showModal oppgave={oppgave} cancel={action('button-click')} hentReserverteOppgaver={hentReserverteOppgaver} toggleMenu={action('button-click')} />
    </RestApiMock>;
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,V as default};
