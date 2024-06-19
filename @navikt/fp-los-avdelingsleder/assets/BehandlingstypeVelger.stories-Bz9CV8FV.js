import{R as t}from"./index-DVXBtNgz.js";import{a}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{g as d,u as p,O as c,m as g}from"./nb_NO-Cx50JONv.js";import{Y as u}from"./index.es-Cl_yxThX.js";import{R as A}from"./RestApiMock-D7GvAGON.js";import"./useRestApiRunner-r8nm61Jn.js";import{a as h}from"./alleKodeverkLos-BJud6Q-i.js";import{R as k,a as S,r as E}from"./fplosRestApi-DXPSIiTb.js";import{B as o}from"./BehandlingstypeVelger-BT-HuSbj.js";import"./v4-CQkTLCs1.js";import"./index-Cbx7Fas8.js";import"./tslib.es6-CMwweBXX.js";import"./useLosKodeverk-BklsCf3V.js";const f=d(g),M={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:o,decorators:[f]},v=({verdier:l})=>{const i=[{key:k.KODEVERK_LOS.name,data:h,global:!0},{key:S.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],m=p({defaultValues:l});return t.createElement(A,{data:i,requestApi:E},t.createElement(c,{formMethods:m},t.createElement(o,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})))},e=v.bind({});e.args={verdier:{[u.FORSTEGANGSSOKNAD]:!0}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,M as default};
