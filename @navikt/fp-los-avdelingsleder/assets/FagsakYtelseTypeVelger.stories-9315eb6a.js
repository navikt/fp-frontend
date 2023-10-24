import{j as t}from"./jsx-runtime-86dfebf6.js";import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{g as p,u as c,O as A,m as g}from"./nb_NO-632fc4c8.js";import{z as s}from"./index.es-657e045f.js";import{R as u}from"./RestApiMock-492f57af.js";import{a as k}from"./alleKodeverkLos-5ac5bd02.js";import{a as E,R as S,r as f}from"./fplosRestApi-fe4a3ae6.js";import{F as i}from"./FagsakYtelseTypeVelger-63a94605.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./useGlobalStateRestApiData-20592075.js";import"./useLosKodeverk-c901f2b0.js";const h=p(g),D={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:i,decorators:[h]},v=({verdier:n})=>{const d=[{key:E.KODEVERK_LOS.name,data:k,global:!0},{key:S.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],m=c({defaultValues:n});return t(u,{data:d,requestApi:f,children:t(A,{formMethods:m,children:t(i,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
//# sourceMappingURL=FagsakYtelseTypeVelger.stories-9315eb6a.js.map
