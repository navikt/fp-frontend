import{j as t}from"./jsx-runtime-CUEGZZF9.js";import{a}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{g as m,u as p,O as c,m as g}from"./nb_NO-5k3fAeDd.js";import{Y as u}from"./index.es-LzEcK_Mh.js";import{R as A}from"./RestApiMock-QvAtZdc1.js";import{a as h}from"./alleKodeverkLos-Qz5F4oTQ.js";import{R as k,a as S,r as f}from"./fplosRestApi-rASv3eze.js";import{B as n}from"./BehandlingstypeVelger-w6hp4Bcx.js";import"./index-DogsOklH.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./index-MroJ3egt.js";import"./useGlobalStateRestApiData-A2OyOdo-.js";import"./useLosKodeverk-Ic90c_M_.js";const v=m(g),P={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:n,decorators:[v]},E=({verdier:i})=>{const l=[{key:k.KODEVERK_LOS.name,data:h,global:!0},{key:S.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],d=p({defaultValues:i});return t(A,{data:l,requestApi:f,children:t(c,{formMethods:d,children:t(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=E.bind({});e.args={verdier:{[u.FORSTEGANGSSOKNAD]:!0}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,P as default};
