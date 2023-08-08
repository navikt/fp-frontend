import{j as t}from"./jsx-runtime-69eee039.js";import{a}from"./chunk-AY7I2SME-c7b6cf8a.js";import{B as p,j as c,u,F as A,m as g}from"./nb_NO-d9a4e020.js";import{z as s}from"./index.es-657e045f.js";import{k}from"./index.es-0d3529a2.js";import{a as E,R as S,r as h}from"./fplosRestApi-06437043.js";import{F as i}from"./FagsakYtelseTypeVelger-e1459b76.js";import"./index-7c191284.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";import"./index.es-6dfc8135.js";import"./useLosKodeverk-c784a1f9.js";const f=p(g),j={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:i,decorators:[f]},v=({verdier:n})=>{const m=[{key:E.KODEVERK_LOS.name,data:c,global:!0},{key:S.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],d=u({defaultValues:n});return t.jsx(k,{data:m,requestApi:h,children:t.jsx(A,{formMethods:d,children:t.jsx(i,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,j as default};
//# sourceMappingURL=FagsakYtelseTypeVelger.stories-1f0f67d9.js.map
