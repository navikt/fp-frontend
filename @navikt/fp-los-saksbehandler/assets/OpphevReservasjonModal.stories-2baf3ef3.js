import{j as a}from"./jsx-runtime-86dfebf6.js";import{a as t}from"./chunk-AY7I2SME-5eb1ab46.js";import{Y as m,b as d,z as v}from"./index.es-a3c6219c.js";import{R as u,a as g,r as R}from"./fplosSaksbehandlerRestApi-c8d31a2a.js";import{g as h,m as k}from"./nb_NO-bdcde2eb.js";import{O as o}from"./OpphevReservasjonModal-07d47ab5.js";import"./index-1b03fe98.js";import"./useGlobalStateRestApiData-f709a7eb.js";import"./index-6fd5a17b.js";import"./index.es-9abdc4ea.js";import"./Modal-3d35e8b3.js";import"./Heading-bf5304e2.js";const E=h(k),V={title:"los/saksbehandler/behandlingskoer/OpphevReservasjonModal",component:o,decorators:[E]},O=({oppgave:p,opphevData:i,hentReserverteOppgaver:l})=>{const c=[{key:u.OPPHEV_OPPGAVERESERVASJON.name,data:i}];return a(g,{data:c,requestApi:R,children:a(o,{showModal:!0,oppgave:p,cancel:t("button-click"),hentReserverteOppgaver:l,toggleMenu:t("button-click")})})},e=O.bind({});e.args={opphevData:{},hentReserverteOppgaver:t("button-click"),oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:v.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=OpphevReservasjonModal.stories-2baf3ef3.js.map
