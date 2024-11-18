import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as d,$ as c}from"./index.es-BEcJ7ulV.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as s}from"./fagsakYtelseType-DI8GXtVr.js";import{R as g}from"./RestApiMock-jOjxntRb.js";import"./index-uubelm5h.js";import"./useRestApiRunner-puvCxW7G.js";import{m as u}from"./nb_NO-COD-RJQh.js";import{g as A}from"./withIntl-Dj43w9ql.js";import{a as k}from"./alleKodeverkLos-BJud6Q-i.js";import{R as E,a as f,r as S}from"./fplosRestApi-CA_rjeFW.js";import{F as l}from"./FagsakYtelseTypeVelger-Bkbck-H7.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./Modal-AsiqG6ll.js";import"./index-C5xsJX-I.js";import"./VStack-CoISPiHd.js";import"./kodeverkTyper-CavWL6Ds.js";import"./useLosKodeverk-43wcDHc1.js";const v=A(u),$={title:"los/avdelingsleder/behandlingskoer/FagsakYtelseTypeVelger",component:l,decorators:[v]},h=({verdier:n})=>{const m=[{key:E.KODEVERK_LOS.name,data:k,global:!0},{key:f.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE.name,data:void 0}],p=d({defaultValues:n});return t.jsx(g,{data:m,requestApi:S,children:t.jsx(c,{formMethods:p,children:t.jsx(l,{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=h.bind({});e.args={verdier:{[s.FORELDREPENGER]:!0,[s.ENGANGSSTONAD]:!0}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
