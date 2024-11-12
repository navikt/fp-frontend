import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as L,$ as T}from"./index.es-Det53JvI.js";import{Y as r}from"./index.es-Cl_yxThX.js";import{R as K}from"./RestApiMock-B6qRNcBN.js";import"./index-uubelm5h.js";import"./useRestApiRunner-J7gTlJGx.js";import{m as N}from"./nb_NO-xOTxt9dL.js";import{g as _}from"./withIntl-YzfFZyng.js";import{a as h}from"./alleKodeverkLos-BJud6Q-i.js";import{S as c}from"./SorteringVelger-EbVT4E5d.js";import{K as D}from"./KoSortering-BHrQm0Td.js";import{R as f,a as s,r as G}from"./fplosRestApi-CXMGmySj.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-BsYQKNhR.js";import"./Modal-tRW4hqse.js";import"./index-C5xsJX-I.js";import"./VStack-yjYS5DzK.js";import"./useLosKodeverk-nhvMrtgl.js";import"./index.es-D4mUV_xz.js";import"./useDebounce-CYdw6kEm.js";const P=_(N),ee={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:c,decorators:[P]},i=({valgteBehandlingtyper:y,erDynamiskPeriode:I})=>{const v=[{key:f.KODEVERK_LOS.name,data:h,global:!0},{key:s.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0}],n={sortering:D.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:I},u=L({defaultValues:n});return o.jsx(K,{data:v,requestApi:G,children:o.jsx(T,{formMethods:u,children:o.jsx(c,{valgtSakslisteId:1,valgteBehandlingtyper:y,valgtAvdelingEnhet:"Nav Vikafossen",erDynamiskPeriode:n.erDynamiskPeriode,hentAvdelingensSakslister:d("button-click"),hentAntallOppgaver:d("button-click")})})})},e=i.bind({});e.args={valgteBehandlingtyper:[r.FORSTEGANGSSOKNAD,r.DOKUMENTINNSYN],erDynamiskPeriode:!1};const t=i.bind({});t.args={valgteBehandlingtyper:[r.FORSTEGANGSSOKNAD,r.DOKUMENTINNSYN],erDynamiskPeriode:!0};const a=i.bind({});a.args={valgteBehandlingtyper:[r.TILBAKEKREVING],erDynamiskPeriode:!1};var l,S,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
  valgteBehandlingtyper,
  erDynamiskPeriode
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }];
  const verdier = {
    sortering: koSortering.BEHANDLINGSFRIST,
    fra: 2,
    til: 3,
    fomDato: '2020-01-10',
    tomDato: '2020-10-01',
    erDynamiskPeriode
  };
  const formMethods = useForm({
    defaultValues: verdier
  });
  return <RestApiMock data={data} requestApi={requestApi}>
      <Form formMethods={formMethods}>
        <SorteringVelger valgtSakslisteId={1} valgteBehandlingtyper={valgteBehandlingtyper} valgtAvdelingEnhet="Nav Vikafossen" erDynamiskPeriode={verdier.erDynamiskPeriode} hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(m=(S=e.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};var g,A,R;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`({
  valgteBehandlingtyper,
  erDynamiskPeriode
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }];
  const verdier = {
    sortering: koSortering.BEHANDLINGSFRIST,
    fra: 2,
    til: 3,
    fomDato: '2020-01-10',
    tomDato: '2020-10-01',
    erDynamiskPeriode
  };
  const formMethods = useForm({
    defaultValues: verdier
  });
  return <RestApiMock data={data} requestApi={requestApi}>
      <Form formMethods={formMethods}>
        <SorteringVelger valgtSakslisteId={1} valgteBehandlingtyper={valgteBehandlingtyper} valgtAvdelingEnhet="Nav Vikafossen" erDynamiskPeriode={verdier.erDynamiskPeriode} hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(R=(A=t.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var E,p,k;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`({
  valgteBehandlingtyper,
  erDynamiskPeriode
}) => {
  const data = [{
    key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name,
    data: alleKodeverkLos,
    global: true
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,
    data: undefined
  }, {
    key: RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,
    data: undefined
  }];
  const verdier = {
    sortering: koSortering.BEHANDLINGSFRIST,
    fra: 2,
    til: 3,
    fomDato: '2020-01-10',
    tomDato: '2020-10-01',
    erDynamiskPeriode
  };
  const formMethods = useForm({
    defaultValues: verdier
  });
  return <RestApiMock data={data} requestApi={requestApi}>
      <Form formMethods={formMethods}>
        <SorteringVelger valgtSakslisteId={1} valgteBehandlingtyper={valgteBehandlingtyper} valgtAvdelingEnhet="Nav Vikafossen" erDynamiskPeriode={verdier.erDynamiskPeriode} hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(k=(p=a.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const te=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{t as SorteringsvelgerNårDynamiskPeriodeErValgt,a as SorteringsvelgerNårKunTilbakekrevingErValgt,e as SorteringsvelgerNårMangeBehandlingstyperErValgt,te as __namedExportsOrder,ee as default};
