import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{u as d,$ as c}from"./index.es-CoJGJJtc.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as s}from"./fagsakYtelseType-DI8GXtVr.js";import{m as g}from"./nb_NO-Du4pagSL.js";import{g as u}from"./withIntl-B_2QVpuP.js";import{a as A}from"./alleKodeverkLos-BJud6Q-i.js";import{R as k}from"./RestApiMock-CMGSvSy2.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Dz_KBbnA.js";import{R as E,a as f,r as S}from"./fplosRestApi-DIvKj8Ld.js";import{F as l}from"./FagsakYtelseTypeVelger-zBceGTGY.js";import"./index.es-B3phUJaJ.js";import"./Modal-CrXtQo6t.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./VStack-BZrJM_W_.js";import"./v4-CQkTLCs1.js";import"./kodeverkTyper-CavWL6Ds.js";import"./useLosKodeverk-D3IvkdFj.js";const v=u(g),w={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:l,decorators:[v]},h=({verdier:m})=>{const n=[{key:E.KODEVERK_LOS.name,data:A,global:!0},{key:f.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],p=d({defaultValues:m});return t.jsx(k,{data:n,requestApi:S,children:t.jsx(c,{formMethods:p,children:t.jsx(l,{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=h.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,w as default};
