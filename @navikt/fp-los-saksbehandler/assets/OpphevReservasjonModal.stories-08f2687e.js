import{j as a}from"./jsx-runtime-5926aa06.js";import{a as t}from"./chunk-OPEUWD42-a3b45fd8.js";import{Y as c,m as d,z as u}from"./index.es-3e46b5c8.js";import{R as v,k as R,r as h}from"./fplosSaksbehandlerRestApi-325d6556.js";import{B as g,m as k}from"./nb_NO-80ad4d83.js";import{O as o}from"./OpphevReservasjonModal-12424e2a.js";import"./index-ebeaab24.js";import"./index.es-d4f46e89.js";import"./index-9c09ad76.js";import"./index.es-90bbcc0d.js";import"./Provider-e02157b4.js";import"./index-f50b85d6.js";import"./Heading-5fc0994e.js";const E=g(k),V={title:"los/saksbehandler/behandlingskoer/OpphevReservasjonModal",component:o,decorators:[E]},O=({oppgave:p,opphevData:i,hentReserverteOppgaver:l})=>{const m=[{key:v.OPPHEV_OPPGAVERESERVASJON.name,data:i}];return a.jsx(R,{data:m,requestApi:h,children:a.jsx(o,{showModal:!0,oppgave:p,cancel:t("button-click"),hentReserverteOppgaver:l,toggleMenu:t("button-click")})})},e=O.bind({});e.args={opphevData:{},hentReserverteOppgaver:t("button-click"),oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:c.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:u.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
//# sourceMappingURL=OpphevReservasjonModal.stories-08f2687e.js.map
