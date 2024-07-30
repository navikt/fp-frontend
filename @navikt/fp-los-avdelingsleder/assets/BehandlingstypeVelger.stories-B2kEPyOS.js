import{R as t}from"./index-BBkUAzwr.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import{g as d,u as p,D as c,m as g}from"./nb_NO-ammWO68Y.js";import{Y as u}from"./index.es-Cl_yxThX.js";import{R as A}from"./RestApiMock--FIjvRYs.js";import"./useRestApiRunner-BbKnLk0z.js";import{a as h}from"./alleKodeverkLos-BJud6Q-i.js";import{R as k,a as S,r as E}from"./fplosRestApi-CKDBHRen.js";import{B as n}from"./BehandlingstypeVelger-wV9dPPlv.js";import"./v4-CQkTLCs1.js";import"./index-BfZ0jBbx.js";import"./dayjs.min-DXWWvErk.js";import"./useLosKodeverk-YkaAS8Rx.js";const f=d(g),M={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:n,decorators:[f]},v=({verdier:l})=>{const i=[{key:k.KODEVERK_LOS.name,data:h,global:!0},{key:S.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],m=p({defaultValues:l});return t.createElement(A,{data:i,requestApi:E},t.createElement(c,{formMethods:m},t.createElement(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})))},e=v.bind({});e.args={verdier:{[u.FORSTEGANGSSOKNAD]:!0}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
  verdier
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,
    data: undefined
  }];
  const formMethods = useForm({
    defaultValues: verdier
  });
  return <RestApiMock data={data} requestApi={requestApi}>
      <Form formMethods={formMethods}>
        <BehandlingstypeVelger valgtSakslisteId={1} valgtAvdelingEnhet="NAV Viken" hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,M as default};
