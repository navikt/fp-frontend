import{j as t}from"./jsx-runtime-5926aa06.js";import{a}from"./chunk-OPEUWD42-a3b45fd8.js";import{B as m,j as p,u as c,F as u,m as g}from"./nb_NO-34c6c3ba.js";import{Y as A}from"./index.es-657e045f.js";import{k as h}from"./index.es-f19dba30.js";import{R as k,a as S,r as f}from"./fplosRestApi-56e2d09a.js";import{B as n}from"./BehandlingstypeVelger-c0fed183.js";import"./index-ebeaab24.js";import"./index-9c09ad76.js";import"./index.es-24d105fb.js";import"./useLosKodeverk-46a11add.js";const E=m(g),j={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:n,decorators:[E]},v=({verdier:i})=>{const l=[{key:k.KODEVERK_LOS.name,data:p,global:!0},{key:S.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],d=c({defaultValues:i});return t.jsx(h,{data:l,requestApi:f,children:t.jsx(u,{formMethods:d,children:t.jsx(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={verdier:{[A.FORSTEGANGSSOKNAD]:!0}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,j as default};
//# sourceMappingURL=BehandlingstypeVelger.stories-8275ac23.js.map
