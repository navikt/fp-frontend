import{j as t}from"./dayjs.min-ZUODdiE-.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import{g as m,u as p,Y as c,m as g}from"./nb_NO-DaKPuc26.js";import{Y as u}from"./index.es-Cl_yxThX.js";import{R as A}from"./RestApiMock-47fXKIMv.js";import"./index-uubelm5h.js";import"./useRestApiRunner-DIVzIFJm.js";import{a as h}from"./alleKodeverkLos-BJud6Q-i.js";import{R as k,a as S,r as f}from"./fplosRestApi-CXjbKy4z.js";import{B as n}from"./BehandlingstypeVelger-uF3rLJPS.js";import"./v4-CQkTLCs1.js";import"./index-BdzLX9oW.js";import"./useLosKodeverk-ilBKw7AH.js";const v=m(g),B={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:n,decorators:[v]},E=({verdier:i})=>{const l=[{key:k.KODEVERK_LOS.name,data:h,global:!0},{key:S.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],d=p({defaultValues:i});return t.jsx(A,{data:l,requestApi:f,children:t.jsx(c,{formMethods:d,children:t.jsx(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=E.bind({});e.args={verdier:{[u.FORSTEGANGSSOKNAD]:!0}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,B as default};
