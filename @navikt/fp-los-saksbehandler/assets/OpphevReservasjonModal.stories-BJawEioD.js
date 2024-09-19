import{j as a}from"./jsx-runtime-QvZ8i92b.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{Y as m,b as d,z as u}from"./index.es-BkMxg3KK.js";import{a as v,b as g,r as R}from"./fplosSaksbehandlerRestApi-B2_NijuJ.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{m as h}from"./nb_NO-CRYAQhiY.js";import{g as E}from"./withIntl-cmAdHa59.js";import{O as n}from"./OpphevReservasjonModal-CXecHEg5.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./index-CfOt2XX2.js";import"./index.es-DZZl_GfV.js";const k=E(h),V={title:"los/saksbehandler/behandlingskoer/OpphevReservasjonModal",component:n,decorators:[k]},O=({oppgave:p,opphevData:i,hentReserverteOppgaver:l})=>{const c=[{key:v.OPPHEV_OPPGAVERESERVASJON.name,data:i}];return a.jsx(g,{data:c,requestApi:R,children:a.jsx(n,{showModal:!0,oppgave:p,cancel:t("button-click"),hentReserverteOppgaver:l,toggleMenu:t("button-click")})})},e=O.bind({});e.args={opphevData:{},hentReserverteOppgaver:t("button-click"),oppgave:{id:1,status:{erReservert:!1,flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Flyttet"}},saksnummer:1234,personnummer:"1212",navn:"Espen Utvikler",system:"SAK",behandlingstype:m.FORSTEGANGSSOKNAD,behandlingStatus:d.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:u.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"1"}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,V as default};
