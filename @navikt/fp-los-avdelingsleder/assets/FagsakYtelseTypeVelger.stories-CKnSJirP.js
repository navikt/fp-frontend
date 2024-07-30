import{j as t}from"./dayjs.min-ZUODdiE-.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import{g as p,u as c,D as u,m as A}from"./nb_NO-B1VfbVDP.js";import{z as s}from"./index.es-Cl_yxThX.js";import{R as g}from"./RestApiMock-DbGm39u8.js";import"./index-uubelm5h.js";import"./useRestApiRunner-DIVzIFJm.js";import{a as k}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,a as S,r as f}from"./fplosRestApi-BJC_OYKQ.js";import{F as i}from"./FagsakYtelseTypeVelger-DB3eCV_V.js";import"./v4-CQkTLCs1.js";import"./index-BdzLX9oW.js";import"./useLosKodeverk-xh6nOoB3.js";const h=p(A),x={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:i,decorators:[h]},v=({verdier:n})=>{const m=[{key:E.KODEVERK_LOS.name,data:k,global:!0},{key:S.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],d=c({defaultValues:n});return t.jsx(g,{data:m,requestApi:f,children:t.jsx(u,{formMethods:d,children:t.jsx(i,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const M=["Default"];export{e as Default,M as __namedExportsOrder,x as default};
