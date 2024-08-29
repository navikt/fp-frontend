import{j as t}from"./dayjs.min-ZUODdiE-.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import{g as p,u,Y as A,m as R}from"./nb_NO-DaKPuc26.js";import{R as g}from"./RestApiMock-47fXKIMv.js";import"./index-uubelm5h.js";import"./useRestApiRunner-DIVzIFJm.js";import{a as E}from"./alleKodeverkLos-BJud6Q-i.js";import{R as f,a as h,r as k}from"./fplosRestApi-CXjbKy4z.js";import{A as s}from"./andreKriterierType-DFB25pp4.js";import{A as n}from"./AndreKriterierVelger-BwixT9V-.js";import"./v4-CQkTLCs1.js";import"./index-BdzLX9oW.js";import"./useLosKodeverk-ilBKw7AH.js";const K=p(R),F={title:"los/avdelingsleder/behandlingskoer/AndreKriterierVelger",component:n,decorators:[K]},v=({defaultVerdier:d})=>{const m=[{key:f.KODEVERK_LOS.name,data:E,global:!0},{key:h.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:{}}],r=u({defaultValues:d}),c=r.watch();return t.jsx(g,{data:m,requestApi:k,children:t.jsx(A,{formMethods:r,children:t.jsx(n,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",values:c,hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=v.bind({});e.args={defaultVerdier:{[s.TIL_BESLUTTER]:!0,[`${s.TIL_BESLUTTER}_inkluder`]:!0}};var o,i,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
        <AndreKriterierVelger valgtSakslisteId={1} valgtAvdelingEnhet="NAV Viken" values={verdier} hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const G=["Default"];export{e as Default,G as __namedExportsOrder,F as default};
