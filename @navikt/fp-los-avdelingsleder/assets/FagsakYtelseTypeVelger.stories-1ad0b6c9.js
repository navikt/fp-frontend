import{j as t}from"./jsx-runtime-86dfebf6.js";import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{g as p,m as c,u as A,O as g}from"./nb_NO-7d7a9a16.js";import{z as s}from"./index.es-657e045f.js";import{R as u}from"./intl-test-helper-4315b879.js";import{a as k}from"./alleKodeverkLos-5ac5bd02.js";import{a as E,R as S,r as f}from"./fplosRestApi-e273a6f1.js";import{F as i}from"./FagsakYtelseTypeVelger-1dafc6bf.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./useGlobalStateRestApiData-20592075.js";import"./useLosKodeverk-ac1cee0a.js";const h=p(c),D={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:i,decorators:[h]},v=({verdier:n})=>{const d=[{key:E.KODEVERK_LOS.name,data:k,global:!0},{key:S.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],m=A({defaultValues:n});return t(u,{data:d,requestApi:f,children:t(g,{formMethods:m,children:t(i,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,D as default};
//# sourceMappingURL=FagsakYtelseTypeVelger.stories-1ad0b6c9.js.map
