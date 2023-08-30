import{j as a}from"./jsx-runtime-9c4ae004.js";import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import{Y as m,b as d,z as u}from"./index.es-a3c6219c.js";import{R as v,k as R,r as h}from"./fplosSaksbehandlerRestApi-b0e8d207.js";import{B as g,m as k}from"./nb_NO-f3f50ba4.js";import{O as o}from"./OpphevReservasjonModal-c49785f5.js";import"./index-1b03fe98.js";import"./index.es-76bb323d.js";import"./index-6fd5a17b.js";import"./index.es-b5f29a80.js";import"./Provider-983842f2.js";import"./Heading-73495d18.js";const E=g(k),T={title:"los/saksbehandler/behandlingskoer/OpphevReservasjonModal",component:o,decorators:[E]},O=({oppgave:p,opphevData:i,hentReserverteOppgaver:l})=>{const c=[{key:v.OPPHEV_OPPGAVERESERVASJON.name,data:i}];return a.jsx(R,{data:c,requestApi:h,children:a.jsx(o,{showModal:!0,oppgave:p,cancel:t("button-click"),hentReserverteOppgaver:l,toggleMenu:t("button-click")})})},e=O.bind({});e.args={opphevData:{},hentReserverteOppgaver:t("button-click"),oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:u.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=OpphevReservasjonModal.stories-308c54c5.js.map
