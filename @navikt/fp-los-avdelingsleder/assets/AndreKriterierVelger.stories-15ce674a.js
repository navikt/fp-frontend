import{j as t}from"./jsx-runtime-86dfebf6.js";import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{g as p,m as u,u as A,O as g}from"./nb_NO-7d7a9a16.js";import{R}from"./intl-test-helper-4315b879.js";import{a as f}from"./alleKodeverkLos-5ac5bd02.js";import{a as h,R as k,r as E}from"./fplosRestApi-e273a6f1.js";import{A as s}from"./andreKriterierType-3d6466df.js";import{A as n}from"./AndreKriterierVelger-3608edc0.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./useGlobalStateRestApiData-20592075.js";import"./useLosKodeverk-ac1cee0a.js";const K=p(u),G={title:"los/avdelingsleder/behandlingskoer/AndreKriterierVelger",component:n,decorators:[K]},v=({defaultVerdier:d})=>{const m=[{key:h.KODEVERK_LOS.name,data:f,global:!0},{key:k.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:{}}],r=A({defaultValues:d}),c=r.watch();return t(R,{data:m,requestApi:E,children:t(g,{formMethods:r,children:t(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",values:c,hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={defaultVerdier:{[s.TIL_BESLUTTER]:!0,[`${s.TIL_BESLUTTER}_inkluder`]:!0}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,G as default};
//# sourceMappingURL=AndreKriterierVelger.stories-15ce674a.js.map
