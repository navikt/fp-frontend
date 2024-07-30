import{R as t}from"./index-BBkUAzwr.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import{g as p,u as c,D as A,m as g}from"./nb_NO-ammWO68Y.js";import{z as s}from"./index.es-Cl_yxThX.js";import{R as u}from"./RestApiMock--FIjvRYs.js";import"./useRestApiRunner-BbKnLk0z.js";import{a as E}from"./alleKodeverkLos-BJud6Q-i.js";import{R as k,a as S,r as f}from"./fplosRestApi-CKDBHRen.js";import{F as i}from"./FagsakYtelseTypeVelger-zDaH2hUU.js";import"./v4-CQkTLCs1.js";import"./index-BfZ0jBbx.js";import"./dayjs.min-DXWWvErk.js";import"./useLosKodeverk-YkaAS8Rx.js";const R=p(g),M={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:i,decorators:[R]},v=({verdier:n})=>{const m=[{key:k.KODEVERK_LOS.name,data:E,global:!0},{key:S.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],d=c({defaultValues:n});return t.createElement(u,{data:m,requestApi:f},t.createElement(A,{formMethods:d},t.createElement(i,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})))},e=v.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,M as default};
