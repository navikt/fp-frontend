import{R as t}from"./index-DVXBtNgz.js";import{a}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{g as p,u,O as A,m as R}from"./nb_NO-D3Fg8-s9.js";import{R as E}from"./RestApiMock-DpQNFfzU.js";import"./useRestApiRunner-r8nm61Jn.js";import{a as g}from"./alleKodeverkLos-BJud6Q-i.js";import{R as f,a as k,r as h}from"./fplosRestApi-DXPSIiTb.js";import{A as s}from"./andreKriterierType-DFB25pp4.js";import{A as l}from"./AndreKriterierVelger-CWydAvyd.js";import"./v4-CQkTLCs1.js";import"./index-Cbx7Fas8.js";import"./dayjs.min-Dkhc0ShP.js";import"./tslib.es6-CMwweBXX.js";import"./useLosKodeverk-BklsCf3V.js";const K=p(R),P={title:"los/avdelingsleder/behandlingskoer/AndreKriterierVelger",component:l,decorators:[K]},v=({defaultVerdier:d})=>{const m=[{key:f.KODEVERK_LOS.name,data:g,global:!0},{key:k.LAGRE_SAKSLISTE_ANDRE_KRITERIER.name,data:{}}],r=u({defaultValues:d}),c=r.watch();return t.createElement(E,{data:m,requestApi:h},t.createElement(A,{formMethods:r},t.createElement(l,{valgtSakslisteId:1,valgtAvdelingEnhet:"NAV Viken",values:c,hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})))},e=v.bind({});e.args={defaultVerdier:{[s.TIL_BESLUTTER]:!0,[`${s.TIL_BESLUTTER}_inkluder`]:!0}};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`({
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,P as default};
