import{j as a}from"./dayjs.min-DKYhEbg2.js";import{a as t}from"./chunk-454WOBUV-CM0pFb8Z.js";import{Y as m,b as d,z as u}from"./index.es-BkMxg3KK.js";import{a as v,b as g,r as R}from"./fplosSaksbehandlerRestApi-CWRPAkFP.js";import"./index-BBkUAzwr.js";import"./useRestApiRunner-DyfIg1tq.js";import{g as h,m as E}from"./nb_NO-DY6WQH50.js";import{O as o}from"./OpphevReservasjonModal-DNaw7Kf1.js";import"./v4-CQkTLCs1.js";import"./index-BfZ0jBbx.js";import"./index.es-BU-7Ku74.js";const k=h(E),G={title:"los/saksbehandler/behandlingskoer/OpphevReservasjonModal",component:o,decorators:[k]},O=({oppgave:p,opphevData:i,hentReserverteOppgaver:l})=>{const c=[{key:v.OPPHEV_OPPGAVERESERVASJON.name,data:i}];return a.jsx(g,{data:c,requestApi:R,children:a.jsx(o,{showModal:!0,oppgave:p,cancel:t("button-click"),hentReserverteOppgaver:l,toggleMenu:t("button-click")})})},e=O.bind({});e.args={opphevData:{},hentReserverteOppgaver:t("button-click"),oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:u.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,G as default};
