import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as d,$ as c,m as u}from"./nb_NO-DfdIw2AA.js";import{z as s}from"./index.es-Cl_yxThX.js";import{R as A}from"./RestApiMock-diGW-Wut.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{g}from"./withIntl-BBed-5Ab.js";import{a as k}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,a as S,r as f}from"./fplosRestApi-1yojVYCb.js";import{F as l}from"./FagsakYtelseTypeVelger-XfpUzLFF.js";import"./v4-CQkTLCs1.js";import"./index-C4_kIme7.js";import"./dayjs.min-BsYQKNhR.js";import"./useLosKodeverk-Bf_J3o3R.js";const h=g(u),P={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:l,decorators:[h]},v=({verdier:n})=>{const m=[{key:E.KODEVERK_LOS.name,data:k,global:!0},{key:S.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],p=d({defaultValues:n});return t.jsx(A,{data:m,requestApi:f,children:t.jsx(c,{formMethods:p,children:t.jsx(l,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,P as default};
