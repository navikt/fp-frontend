import{R as a}from"./index-BBkUAzwr.js";import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{Y as m,b as d,z as v}from"./index.es-BkMxg3KK.js";import{a as u,b as R,r as g}from"./fplosSaksbehandlerRestApi-yC5FIIxZ.js";import"./useRestApiRunner-CnLmgk-1.js";import{g as h,m as E}from"./nb_NO-B_pArjwH.js";import{O as o}from"./OpphevReservasjonModal-Bjlyw_x-.js";import"./v4-CQkTLCs1.js";import"./index-PqR-_bA4.js";import"./index.es-CfFtEmZa.js";const k=h(E),T={title:"los/saksbehandler/behandlingskoer/OpphevReservasjonModal",component:o,decorators:[k]},O=({oppgave:p,opphevData:i,hentReserverteOppgaver:l})=>{const c=[{key:u.OPPHEV_OPPGAVERESERVASJON.name,data:i}];return a.createElement(R,{data:c,requestApi:g},a.createElement(o,{showModal:!0,oppgave:p,cancel:t("button-click"),hentReserverteOppgaver:l,toggleMenu:t("button-click")}))},e=O.bind({});e.args={opphevData:{},hentReserverteOppgaver:t("button-click"),oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:v.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const V=["Default"];export{e as Default,V as __namedExportsOrder,T as default};
