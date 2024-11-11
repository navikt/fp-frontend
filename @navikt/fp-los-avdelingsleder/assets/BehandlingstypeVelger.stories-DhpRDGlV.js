import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as d,$ as p,m as c}from"./nb_NO-GxxtpCHT.js";import{Y as g}from"./index.es-Cl_yxThX.js";import{R as u}from"./RestApiMock-D_VedSKs.js";import"./index-uubelm5h.js";import"./useRestApiRunner-c-Q2a7zB.js";import{g as A}from"./withIntl-BB4xLkRc.js";import{a as h}from"./alleKodeverkLos-BJud6Q-i.js";import{R as f,a as k,r as S}from"./fplosRestApi-CVJaTUaS.js";import{B as i}from"./BehandlingstypeVelger-CFX3_Kh5.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./useLosKodeverk-DAQ82HSC.js";const v=A(c),P={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:i,decorators:[v]},E=({verdier:n})=>{const l=[{key:f.KODEVERK_LOS.name,data:h,global:!0},{key:k.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],m=d({defaultValues:n});return t.jsx(u,{data:l,requestApi:S,children:t.jsx(p,{formMethods:m,children:t.jsx(i,{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=E.bind({});e.args={verdier:{[g.FORSTEGANGSSOKNAD]:!0}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
