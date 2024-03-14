import{R as t}from"./index-DogsOklH.js";import{a}from"./chunk-MZXVCX43-RlXIxtK5.js";import{g as d,u as p,O as c,m as g}from"./nb_NO-H9rL7jWp.js";import{Y as u}from"./index.es-LzEcK_Mh.js";import{R as A}from"./RestApiMock-8FOaa7K1.js";import"./useRestApiRunner-t59neJBf.js";import{a as h}from"./alleKodeverkLos-Qz5F4oTQ.js";import{R as k,a as S,r as E}from"./fplosRestApi-7cfjsQHL.js";import{B as o}from"./BehandlingstypeVelger-pxGy0cTe.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./useLosKodeverk-EtPolOdW.js";const f=d(g),B={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:o,decorators:[f]},v=({verdier:l})=>{const i=[{key:k.KODEVERK_LOS.name,data:h,global:!0},{key:S.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],m=p({defaultValues:l});return t.createElement(A,{data:i,requestApi:E},t.createElement(c,{formMethods:m},t.createElement(o,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})))},e=v.bind({});e.args={verdier:{[u.FORSTEGANGSSOKNAD]:!0}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,B as default};
