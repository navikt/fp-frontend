import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as c,$ as u,m as A}from"./nb_NO-ZX6bBe0Z.js";import{R as f}from"./RestApiMock-DqJckcz7.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{g as R}from"./withIntl-2iPbc0WM.js";import{a as g}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,a as h,r as k}from"./fplosRestApi-CVJaTUaS.js";import{A as s}from"./andreKriterierType-DFB25pp4.js";import{A as n}from"./AndreKriterierVelger-BW2kHDfj.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./useLosKodeverk-DAQ82HSC.js";const v=R(A),N={title:"los/avdelingsleder/behandlingskoer/AndreKriterierVelger",component:n,decorators:[v]},K=({defaultVerdier:d})=>{const m=[{key:E.KODEVERK_LOS.name,data:g,global:!0},{key:h.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:{}}],r=c({defaultValues:d}),p=r.watch();return t.jsx(f,{data:m,requestApi:k,children:t.jsx(u,{formMethods:r,children:t.jsx(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen",values:p,hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=K.bind({});e.args={defaultVerdier:{[s.TIL_BESLUTTER]:!0,[`${s.TIL_BESLUTTER}_inkluder`]:!0}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
        <AndreKriterierVelger valgtSakslisteId={1} valgtAvdelingEnhet="Nav Vikafossen" values={verdier} hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,N as default};
