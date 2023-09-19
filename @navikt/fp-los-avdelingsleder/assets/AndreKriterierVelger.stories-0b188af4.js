import{j as t}from"./jsx-runtime-9c4ae004.js";import{a}from"./chunk-AY7I2SME-c7b6cf8a.js";import{B as p,j as u,u as A,O as E,m as R}from"./nb_NO-1fdf6328.js";import{k as g}from"./index.es-a238dff4.js";import{a as h,R as k,r as f}from"./fplosRestApi-beda4f04.js";import{A as s}from"./andreKriterierType-3d6466df.js";import{A as l}from"./AndreKriterierVelger-855d8e32.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-dcafba10.js";import"./useLosKodeverk-3c749e2b.js";const K=p(R),M={title:"los/avdelingsleder/behandlingskoer/AndreKriterierVelger",component:l,decorators:[K]},v=({defaultVerdier:d})=>{const m=[{key:h.KODEVERK_LOS.name,data:u,global:!0},{key:k.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:{}}],r=A({defaultValues:d}),c=r.watch();return t.jsx(g,{data:m,requestApi:f,children:t.jsx(E,{formMethods:r,children:t.jsx(l,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",values:c,hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={defaultVerdier:{[s.TIL_BESLUTTER]:!0,[`${s.TIL_BESLUTTER}_inkluder`]:!0}};var o,i,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,M as default};
//# sourceMappingURL=AndreKriterierVelger.stories-0b188af4.js.map
