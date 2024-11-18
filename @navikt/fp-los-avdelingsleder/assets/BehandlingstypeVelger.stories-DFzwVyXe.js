import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as p,$ as d}from"./index.es-BEcJ7ulV.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as c}from"./behandlingType-BdbjGMJD.js";import{R as g}from"./RestApiMock-jOjxntRb.js";import"./index-uubelm5h.js";import"./useRestApiRunner-puvCxW7G.js";import{m as u}from"./nb_NO-COD-RJQh.js";import{g as A}from"./withIntl-Dj43w9ql.js";import{a as h}from"./alleKodeverkLos-BJud6Q-i.js";import{R as f,a as k,r as S}from"./fplosRestApi-CA_rjeFW.js";import{B as i}from"./BehandlingstypeVelger-CixepuSN.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./Modal-AsiqG6ll.js";import"./index-C5xsJX-I.js";import"./VStack-CoISPiHd.js";import"./kodeverkTyper-CavWL6Ds.js";import"./useLosKodeverk-43wcDHc1.js";const v=A(u),H={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:i,decorators:[v]},E=({verdier:n})=>{const l=[{key:f.KODEVERK_LOS.name,data:h,global:!0},{key:k.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],m=p({defaultValues:n});return t.jsx(g,{data:l,requestApi:S,children:t.jsx(d,{formMethods:m,children:t.jsx(i,{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=E.bind({});e.args={verdier:{[c.FORSTEGANGSSOKNAD]:!0}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const Y=["Default"];export{e as Default,Y as __namedExportsOrder,H as default};
