import{j as t}from"./jsx-runtime-69eee039.js";import{a}from"./chunk-AY7I2SME-c7b6cf8a.js";import{B as p,j as u,u as A,F as E,m as R}from"./nb_NO-d9a4e020.js";import{k as g}from"./index.es-0d3529a2.js";import{a as h,R as k,r as f}from"./fplosRestApi-06437043.js";import{A as s}from"./andreKriterierType-3d6466df.js";import{A as l}from"./AndreKriterierVelger-54c5e0de.js";import"./index-7c191284.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";import"./index.es-6dfc8135.js";import"./useLosKodeverk-c784a1f9.js";const K=p(R),D={title:"los/avdelingsleder/behandlingskoer/AndreKriterierVelger",component:l,decorators:[K]},v=({defaultVerdier:d})=>{const m=[{key:h.KODEVERK_LOS.name,data:u,global:!0},{key:k.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:{}}],r=A({defaultValues:d}),c=r.watch();return t.jsx(g,{data:m,requestApi:f,children:t.jsx(E,{formMethods:r,children:t.jsx(l,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",values:c,hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={defaultVerdier:{[s.TIL_BESLUTTER]:!0,[`${s.TIL_BESLUTTER}_inkluder`]:!0}};var o,i,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
  defaultVerdier
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,
    data: {}
  }];
  const formMethods = useForm({
    defaultValues: defaultVerdier
  });
  const verdier = formMethods.watch();
  return <RestApiMock data={data} requestApi={requestApi}>
      <Form formMethods={formMethods}>
        <AndreKriterierVelger valgtSakslisteId={1} valgtAvdelingEnhet="NAV Viken" values={verdier} hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const F=["Default"];export{e as Default,F as __namedExportsOrder,D as default};
//# sourceMappingURL=AndreKriterierVelger.stories-be02a0e1.js.map
