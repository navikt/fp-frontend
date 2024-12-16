import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{u as c,$ as u}from"./index.es-CoJGJJtc.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{m as A}from"./nb_NO-Du4pagSL.js";import{g as f}from"./withIntl-B_2QVpuP.js";import{a as R}from"./alleKodeverkLos-BJud6Q-i.js";import{R as g}from"./RestApiMock-CMGSvSy2.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Dz_KBbnA.js";import{R as E,a as h,r as k}from"./fplosRestApi-DIvKj8Ld.js";import{A as s}from"./andreKriterierType-DFB25pp4.js";import{A as n}from"./AndreKriterierVelger-B-YrE4M0.js";import"./index.es-B3phUJaJ.js";import"./Modal-CrXtQo6t.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./VStack-BZrJM_W_.js";import"./v4-CQkTLCs1.js";import"./useLosKodeverk-D3IvkdFj.js";const v=f(A),$={title:"los/avdelingsleder/behandlingskoer/AndreKriterierVelger",component:n,decorators:[v]},K=({defaultVerdier:m})=>{const d=[{key:E.KODEVERK_LOS.name,data:R,global:!0},{key:h.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:{}}],r=c({defaultValues:m}),p=r.watch();return t.jsx(g,{data:d,requestApi:k,children:t.jsx(u,{formMethods:r,children:t.jsx(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen",values:p,hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=K.bind({});e.args={defaultVerdier:{[s.TIL_BESLUTTER]:!0,[`${s.TIL_BESLUTTER}_inkluder`]:!0}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,$ as default};
