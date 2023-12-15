import{j as t}from"./jsx-runtime-CUEGZZF9.js";import{a}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{g as p,u,O as A,m as g}from"./nb_NO-NyfkuXl2.js";import{R}from"./RestApiMock-5-bLJsHZ.js";import{a as f}from"./alleKodeverkLos-Qz5F4oTQ.js";import{R as h,a as k,r as E}from"./fplosRestApi-9Y9Hxjgv.js";import{A as s}from"./andreKriterierType-nr5UYWnD.js";import{A as l}from"./AndreKriterierVelger-prGZIday.js";import"./index-DogsOklH.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./index-MroJ3egt.js";import"./useGlobalStateRestApiData-A2OyOdo-.js";import"./useLosKodeverk-9ArpyM85.js";const K=p(g),P={title:"los/avdelingsleder/behandlingskoer/AndreKriterierVelger",component:l,decorators:[K]},v=({defaultVerdier:d})=>{const m=[{key:h.KODEVERK_LOS.name,data:f,global:!0},{key:k.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:{}}],r=u({defaultValues:d}),c=r.watch();return t(R,{data:m,requestApi:E,children:t(A,{formMethods:r,children:t(l,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",values:c,hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={defaultVerdier:{[s.TIL_BESLUTTER]:!0,[`${s.TIL_BESLUTTER}_inkluder`]:!0}};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,P as default};
