import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as d,$ as p}from"./index.es-Det53JvI.js";import{Y as c}from"./index.es-Cl_yxThX.js";import{R as g}from"./RestApiMock-B6qRNcBN.js";import"./index-uubelm5h.js";import"./useRestApiRunner-J7gTlJGx.js";import{m as u}from"./nb_NO-xOTxt9dL.js";import{g as A}from"./withIntl-YzfFZyng.js";import{a as f}from"./alleKodeverkLos-BJud6Q-i.js";import{R as h,a as k,r as S}from"./fplosRestApi-CXMGmySj.js";import{B as i}from"./BehandlingstypeVelger-IKBgbrHx.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./Modal-tRW4hqse.js";import"./index-C5xsJX-I.js";import"./VStack-yjYS5DzK.js";import"./useLosKodeverk-nhvMrtgl.js";const v=A(u),F={title:"los/avdelingsleder/behandlingskoer/BehandlingstypeVelger",component:i,decorators:[v]},E=({verdier:n})=>{const l=[{key:h.KODEVERK_LOS.name,data:f,global:!0},{key:k.LAGRE_SAKSLISTE_BEHANDLINGSTYPE.name,data:void 0}],m=d({defaultValues:n});return t.jsx(g,{data:l,requestApi:S,children:t.jsx(p,{formMethods:m,children:t.jsx(i,{valgtSakslisteId:1,valgtAvdelingEnhet:"Nav Vikafossen",hentAvdelingensSakslister:a("button-click"),hentAntallOppgaver:a("button-click")})})})},e=E.bind({});e.args={verdier:{[c.FORSTEGANGSSOKNAD]:!0}};var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,F as default};
