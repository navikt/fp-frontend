import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as c,Y as u,m as A}from"./nb_NO-BDUDBxCz.js";import{R}from"./RestApiMock-BqEzg2zk.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{g}from"./withIntl-Cpwx8HlB.js";import{a as f}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,a as h,r as k}from"./fplosRestApi-1yojVYCb.js";import{A as s}from"./andreKriterierType-DFB25pp4.js";import{A as n}from"./AndreKriterierVelger-DR26B_gx.js";import"./v4-CQkTLCs1.js";import"./index-CfOt2XX2.js";import"./dayjs.min-BsYQKNhR.js";import"./useLosKodeverk-Bf_J3o3R.js";const K=g(A),N={title:"los/avdelingsleder/behandlingskoer/AndreKriterierVelger",component:n,decorators:[K]},v=({defaultVerdier:d})=>{const m=[{key:E.KODEVERK_LOS.name,data:f,global:!0},{key:h.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:{}}],r=c({defaultValues:d}),p=r.watch();return t.jsx(R,{data:m,requestApi:k,children:t.jsx(u,{formMethods:r,children:t.jsx(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",values:p,hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={defaultVerdier:{[s.TIL_BESLUTTER]:!0,[`${s.TIL_BESLUTTER}_inkluder`]:!0}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,N as default};
