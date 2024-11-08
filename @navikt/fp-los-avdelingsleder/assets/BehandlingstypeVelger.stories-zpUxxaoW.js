import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as d,$ as p,m as c}from"./nb_NO-C3qr7Zu2.js";import{Y as g}from"./index.es-Cl_yxThX.js";import{R as u}from"./RestApiMock-C5ot3P9D.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{g as A}from"./withIntl-hgZvmSKC.js";import{a as h}from"./alleKodeverkLos-BJud6Q-i.js";import{R as f,a as k,r as S}from"./fplosRestApi-1yojVYCb.js";import{B as i}from"./BehandlingstypeVelger-DIRvjvER.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./useLosKodeverk-Bf_J3o3R.js";const v=A(c),P={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:i,decorators:[v]},E=({verdier:n})=>{const l=[{key:f.KODEVERK_LOS.name,data:h,global:!0},{key:k.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],m=d({defaultValues:n});return t.jsx(u,{data:l,requestApi:S,children:t.jsx(p,{formMethods:m,children:t.jsx(i,{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=E.bind({});e.args={verdier:{[g.FORSTEGANGSSOKNAD]:!0}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
        <BehandlingstypeVelger valgtSakslisteId={1} valgtAvdelingEnhet="Nav Vikafossen" hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,P as default};
