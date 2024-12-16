import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{u as p,$ as d}from"./index.es-CoJGJJtc.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as c}from"./behandlingType-BdbjGMJD.js";import{m as g}from"./nb_NO-Du4pagSL.js";import{g as u}from"./withIntl-B_2QVpuP.js";import{a as A}from"./alleKodeverkLos-BJud6Q-i.js";import{R as h}from"./RestApiMock-CMGSvSy2.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Dz_KBbnA.js";import{R as f,a as k,r as S}from"./fplosRestApi-DIvKj8Ld.js";import{B as i}from"./BehandlingstypeVelger-CkYT4OGP.js";import"./index.es-B3phUJaJ.js";import"./Modal-CrXtQo6t.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./VStack-BZrJM_W_.js";import"./v4-CQkTLCs1.js";import"./kodeverkTyper-CavWL6Ds.js";import"./useLosKodeverk-D3IvkdFj.js";const v=u(g),Y={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:i,decorators:[v]},E=({verdier:n})=>{const l=[{key:f.KODEVERK_LOS.name,data:A,global:!0},{key:k.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],m=p({defaultValues:n});return t.jsx(h,{data:l,requestApi:S,children:t.jsx(d,{formMethods:m,children:t.jsx(i,{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=E.bind({});e.args={verdier:{[c.FORSTEGANGSSOKNAD]:!0}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
        <BehandlingstypeVelger valgtSakslisteId={1} valgtAvdelingEnhet="Nav Vikafossen" hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,Y as default};
