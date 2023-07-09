import{j as t}from"./jsx-runtime-5926aa06.js";import{a}from"./chunk-OPEUWD42-a3b45fd8.js";import{B as p,j as u,u as A,F as E,m as R}from"./nb_NO-34c6c3ba.js";import{k as g}from"./index.es-f19dba30.js";import{R as h,a as k,r as f}from"./fplosRestApi-56e2d09a.js";import{A as s}from"./andreKriterierType-3d6466df.js";import{A as l}from"./AndreKriterierVelger-8c01a16d.js";import"./index-ebeaab24.js";import"./index-9c09ad76.js";import"./index.es-24d105fb.js";import"./useLosKodeverk-46a11add.js";const K=p(R),O={title:"los/avdelingsleder/behandlingskoer/AndreKriterierVelger",component:l,decorators:[K]},v=({defaultVerdier:d})=>{const m=[{key:h.KODEVERK_LOS.name,data:u,global:!0},{key:k.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:{}}],r=A({defaultValues:d}),c=r.watch();return t.jsx(g,{data:m,requestApi:f,children:t.jsx(E,{formMethods:r,children:t.jsx(l,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",values:c,hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={defaultVerdier:{[s.TIL_BESLUTTER]:!0,[`${s.TIL_BESLUTTER}_inkluder`]:!0}};var o,i,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,O as default};
//# sourceMappingURL=AndreKriterierVelger.stories-241652aa.js.map
