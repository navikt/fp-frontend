import{j as t}from"./jsx-runtime-86dfebf6.js";import{a}from"./chunk-AY7I2SME-5eb1ab46.js";import{g as m,u as p,O as c,m as g}from"./nb_NO-efa96071.js";import{Y as u}from"./index.es-657e045f.js";import{R as A}from"./RestApiMock-e250a15a.js";import{a as h}from"./alleKodeverkLos-5ac5bd02.js";import{a as k,R as S,r as f}from"./fplosRestApi-86173006.js";import{B as n}from"./BehandlingstypeVelger-2f7d59aa.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./useGlobalStateRestApiData-20592075.js";import"./useLosKodeverk-d600ecab.js";const v=m(g),B={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:n,decorators:[v]},E=({verdier:i})=>{const l=[{key:k.KODEVERK_LOS.name,data:h,global:!0},{key:S.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],d=p({defaultValues:i});return t(A,{data:l,requestApi:f,children:t(c,{formMethods:d,children:t(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=E.bind({});e.args={verdier:{[u.FORSTEGANGSSOKNAD]:!0}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,B as default};
//# sourceMappingURL=BehandlingstypeVelger.stories-4c54071d.js.map
