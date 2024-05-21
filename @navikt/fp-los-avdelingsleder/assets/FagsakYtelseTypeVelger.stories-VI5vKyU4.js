import{R as t}from"./index-DogsOklH.js";import{a}from"./chunk-MZXVCX43-RlXIxtK5.js";import{g as p,u as c,O as A,m as g}from"./nb_NO-H9rL7jWp.js";import{z as s}from"./index.es-LzEcK_Mh.js";import{R as u}from"./RestApiMock-8FOaa7K1.js";import"./useRestApiRunner-t59neJBf.js";import{a as E}from"./alleKodeverkLos-3oPC0WGq.js";import{R as k,a as S,r as f}from"./fplosRestApi-7cfjsQHL.js";import{F as l}from"./FagsakYtelseTypeVelger-3Li3V2UQ.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./useLosKodeverk-EtPolOdW.js";const R=p(g),D={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:l,decorators:[R]},v=({verdier:i})=>{const m=[{key:k.KODEVERK_LOS.name,data:E,global:!0},{key:S.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],d=c({defaultValues:i});return t.createElement(u,{data:m,requestApi:f},t.createElement(A,{formMethods:d},t.createElement(l,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})))},e=v.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  verdier
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,
    data: undefined
  }];
  const formMethods = useForm({
    defaultValues: verdier
  });
  return <RestApiMock data={data} requestApi={requestApi}>
      <Form formMethods={formMethods}>
        <FagsakYtelseTypeVelger valgtSakslisteId={1} valgtAvdelingEnhet="NAV Viken" hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,D as default};
