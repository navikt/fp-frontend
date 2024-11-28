import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{u as d,$ as c}from"./index.es-DSskcgoM.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as s}from"./fagsakYtelseType-DI8GXtVr.js";import{m as g}from"./nb_NO-Zqge3fS6.js";import{g as u}from"./withIntl-Bv-P8ZIY.js";import{a as A}from"./alleKodeverkLos-BJud6Q-i.js";import{R as k}from"./RestApiMock-DW0j1xpC.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Co55yBK5.js";import{R as E,a as f,r as S}from"./fplosRestApi--K68MEhy.js";import{F as l}from"./FagsakYtelseTypeVelger-DWiwgz9Z.js";import"./dayjs.min-BsYQKNhR.js";import"./Modal-nRd4VDWO.js";import"./index-C5xsJX-I.js";import"./VStack-C7XzQG3E.js";import"./v4-CQkTLCs1.js";import"./kodeverkTyper-CavWL6Ds.js";import"./useLosKodeverk-DsR1Iwhq.js";const v=u(g),$={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:l,decorators:[v]},h=({verdier:n})=>{const m=[{key:E.KODEVERK_LOS.name,data:A,global:!0},{key:f.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],p=d({defaultValues:n});return t.jsx(k,{data:m,requestApi:S,children:t.jsx(c,{formMethods:p,children:t.jsx(l,{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=h.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
        <FagsakYtelseTypeVelger valgtSakslisteId={1} valgtAvdelingEnhet="Nav Vikafossen" hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,$ as default};
