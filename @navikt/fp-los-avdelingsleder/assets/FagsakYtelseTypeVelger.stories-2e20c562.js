import{j as t}from"./jsx-runtime-9c4ae004.js";import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{B as p,j as c,u,O as A,m as g}from"./nb_NO-8e3f1330.js";import{z as s}from"./index.es-657e045f.js";import{k}from"./index.es-590f2202.js";import{a as E,R as S,r as h}from"./fplosRestApi-d59e5073.js";import{F as n}from"./FagsakYtelseTypeVelger-3ae68fd3.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-5c2532e8.js";import"./useLosKodeverk-52bc8ef8.js";const f=p(g),Y={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:n,decorators:[f]},v=({verdier:i})=>{const d=[{key:E.KODEVERK_LOS.name,data:c,global:!0},{key:S.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],m=u({defaultValues:i});return t.jsx(k,{data:d,requestApi:h,children:t.jsx(A,{formMethods:m,children:t.jsx(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const j=["Default"];export{e as Default,j as __namedExportsOrder,Y as default};
//# sourceMappingURL=FagsakYtelseTypeVelger.stories-2e20c562.js.map
