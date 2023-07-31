import{j as e}from"./jsx-runtime-9c4ae004.js";import{a as s}from"./chunk-AY7I2SME-c7b6cf8a.js";import{z as t,v as k,Y as c,b as g}from"./index.es-a3c6219c.js";import{b as d,k as u,r as f}from"./fplosSaksbehandlerRestApi-df53e420.js";import{B as E,j as b,m as R}from"./nb_NO-b3de1938.js";import{A as O}from"./index.es-9080d8e0.js";import{F as p}from"./FagsakList-f8010840.js";import"./index-1b03fe98.js";import"./index.es-08872298.js";import"./index-6fd5a17b.js";import"./index.es-f5c23214.js";import"./useLosKodeverk-b7e51956.js";import"./ChevronRight-29efbb17.js";const A=E(R),I={title:"los/saksbehandler/fagsakSearch/FagsakList",component:p,decorators:[A]},v=({fagsaker:i,fagsakOppgaver:l})=>{const m=[{key:d.KODEVERK_LOS.name,data:b,global:!0}];return e.jsx(u,{data:m,requestApi:f,children:e.jsx(p,{fagsaker:i,åpneFagsak:s("button-click"),selectOppgaveCallback:s("button-click"),fagsakOppgaver:l})})},a=v.bind({});a.args={fagsaker:[{saksnummer:"12213234",aktørId:"",fagsakYtelseType:t.FORELDREPENGER,status:k.UNDER_BEHANDLING,person:{navn:"Espen Utvikler",fødselsdato:"1980-10-10",fødselsnummer:"1010",kjønn:O.MANN},barnFødt:"2019-12-12",opprettet:""}],fagsakOppgaver:[{id:1,status:{erReservert:!1},saksnummer:12213234,personnummer:"1010",navn:"Espen Utvikler",system:"SAK",behandlingstype:c.FORSTEGANGSSOKNAD,behandlingStatus:g.BEHANDLING_UTREDES,opprettetTidspunkt:"2020-01-01",behandlingsfrist:"2020-01-01",fagsakYtelseType:t.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"12344"}]};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
//# sourceMappingURL=FagsakList.stories-8eba252c.js.map
