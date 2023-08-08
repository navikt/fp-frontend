import{j as t}from"./jsx-runtime-69eee039.js";import{a}from"./chunk-AY7I2SME-c7b6cf8a.js";import{B as m,j as p,u as c,F as u,m as g}from"./nb_NO-d9a4e020.js";import{Y as A}from"./index.es-657e045f.js";import{k as h}from"./index.es-0d3529a2.js";import{a as k,R as S,r as f}from"./fplosRestApi-06437043.js";import{B as n}from"./BehandlingstypeVelger-09fefebb.js";import"./index-7c191284.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";import"./index.es-6dfc8135.js";import"./useLosKodeverk-c784a1f9.js";const E=m(g),x={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:n,decorators:[E]},v=({verdier:i})=>{const l=[{key:k.KODEVERK_LOS.name,data:p,global:!0},{key:S.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],d=c({defaultValues:i});return t.jsx(h,{data:l,requestApi:f,children:t.jsx(u,{formMethods:d,children:t.jsx(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={verdier:{[A.FORSTEGANGSSOKNAD]:!0}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,x as default};
//# sourceMappingURL=BehandlingstypeVelger.stories-6f76f274.js.map
