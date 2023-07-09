import{j as e}from"./jsx-runtime-5926aa06.js";import{a as s}from"./chunk-OPEUWD42-a3b45fd8.js";import{z as t,v as k,Y as c,m as g}from"./index.es-3e46b5c8.js";import{a as d,k as u,r as f}from"./fplosSaksbehandlerRestApi-325d6556.js";import{B as E,j as b,m as R}from"./nb_NO-80ad4d83.js";import{A as O}from"./index.es-9080d8e0.js";import{F as p}from"./FagsakList-bf8e2b92.js";import"./index-ebeaab24.js";import"./index.es-d4f46e89.js";import"./index-9c09ad76.js";import"./index.es-4cd68a77.js";import"./useLosKodeverk-38939188.js";import"./ChevronRight-93858554.js";const A=E(R),I={title:"los/saksbehandler/fagsakSearch/FagsakList",component:p,decorators:[A]},v=({fagsaker:i,fagsakOppgaver:l})=>{const m=[{key:d.KODEVERK_LOS.name,data:b,global:!0}];return e.jsx(u,{data:m,requestApi:f,children:e.jsx(p,{fagsaker:i,åpneFagsak:s("button-click"),selectOppgaveCallback:s("button-click"),fagsakOppgaver:l})})},a=v.bind({});a.args={fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:t.FORELDREPENGER,status:k.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:O.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:c.FORSTEGANGSSOKNAD,behandlingStatus:g.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,I as default};
//# sourceMappingURL=FagsakList.stories-f341fcb5.js.map
