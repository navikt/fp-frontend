import{j as t}from"./jsx-runtime-CUEGZZF9.js";import{a}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{g as p,u as c,O as A,m as g}from"./nb_NO-Lpx64cL7.js";import{z as s}from"./index.es-LzEcK_Mh.js";import{R as u}from"./RestApiMock-9zoo3wS3.js";import{a as k}from"./alleKodeverkLos-Qz5F4oTQ.js";import{R as E,a as S,r as f}from"./fplosRestApi-rASv3eze.js";import{F as l}from"./FagsakYtelseTypeVelger-cTbZiuAJ.js";import"./index-DogsOklH.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./index-MroJ3egt.js";import"./useGlobalStateRestApiData-A2OyOdo-.js";import"./useLosKodeverk-Ic90c_M_.js";const h=p(g),P={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:l,decorators:[h]},v=({verdier:i})=>{const m=[{key:E.KODEVERK_LOS.name,data:k,global:!0},{key:S.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],d=c({defaultValues:i});return t(u,{data:m,requestApi:f,children:t(A,{formMethods:d,children:t(l,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,P as default};
