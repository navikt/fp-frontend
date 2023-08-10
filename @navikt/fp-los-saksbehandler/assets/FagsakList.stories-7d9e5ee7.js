import{j as e}from"./jsx-runtime-69eee039.js";import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import{z as s,v as k,Y as c,b as g}from"./index.es-a3c6219c.js";import{b as d,k as u,r as f}from"./fplosSaksbehandlerRestApi-729f2e45.js";import{B as E,j as b,m as R}from"./nb_NO-8bb8d840.js";import{A as O}from"./index.es-9080d8e0.js";import{F as p}from"./FagsakList-c1f87748.js";import"./index-7c191284.js";import"./index.es-ba84c291.js";import"./floating-ui.react-dom.esm-0ed0f36f.js";import"./index-ecbee218.js";import"./index.es-f5c23214.js";import"./useLosKodeverk-738ae8fc.js";import"./ChevronRight-2e3eaa53.js";const A=E(R),B={title:"los/saksbehandler/fagsakSearch/FagsakList",component:p,decorators:[A]},v=({fagsaker:i,fagsakOppgaver:l})=>{const m=[{key:d.KODEVERK_LOS.name,data:b,global:!0}];return e.jsx(u,{data:m,requestApi:f,children:e.jsx(p,{fagsaker:i,åpneFagsak:t("button-click"),selectOppgaveCallback:t("button-click"),fagsakOppgaver:l})})},a=v.bind({});a.args={fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:s.FORELDREPENGER,status:k.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:O.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:c.FORSTEGANGSSOKNAD,behandlingStatus:g.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:s.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
  fagsaker,
  fagsakOppgaver
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }];
  return <RestApiMock data={data} requestApi={requestApi}>
      <FagsakList fagsaker={fagsaker} åpneFagsak={action('button-click')} selectOppgaveCallback={action('button-click')} fagsakOppgaver={fagsakOppgaver} />
    </RestApiMock>;
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const P=["Default"];export{a as Default,P as __namedExportsOrder,B as default};
//# sourceMappingURL=FagsakList.stories-7d9e5ee7.js.map
