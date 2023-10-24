import{j as o}from"./jsx-runtime-86dfebf6.js";import{a as d}from"./chunk-AY7I2SME-5eb1ab46.js";import{g as T,u as v,O as K,m as N}from"./nb_NO-632fc4c8.js";import{Y as r}from"./index.es-657e045f.js";import{R as _}from"./RestApiMock-492f57af.js";import{a as h}from"./alleKodeverkLos-5ac5bd02.js";import{S as c}from"./SorteringVelger-c4abb005.js";import{K as D}from"./KoSortering-3d894ebc.js";import{a as f,R as s,r as G}from"./fplosRestApi-fe4a3ae6.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./useGlobalStateRestApiData-20592075.js";import"./useLosKodeverk-c901f2b0.js";import"./index.es-47c36ed4.js";const O=T(N),C={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:c,decorators:[O]},n=({valgteBehandlingtyper:y,erDynamiskPeriode:I})=>{const u=[{key:f.KODEVERK_LOS.name,data:h,global:!0},{key:s.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0}],i={sortering:D.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:I},L=v({defaultValues:i});return o(_,{data:u,requestApi:G,children:o(K,{formMethods:L,children:o(c,{valgtSakslisteId:1,valgteBehandlingtyper:y,valgtAvdelingEnhet:"NAV Viken",erDynamiskPeriode:i.erDynamiskPeriode,hentAvdelingensSakslister:d("button-click"),hentAntallOppgaver:d("button-click")})})})},e=n.bind({});e.args={valgteBehandlingtyper:[r.FORSTEGANGSSOKNAD,r.DOKUMENTINNSYN],erDynamiskPeriode:!1};const t=n.bind({});t.args={valgteBehandlingtyper:[r.FORSTEGANGSSOKNAD,r.DOKUMENTINNSYN],erDynamiskPeriode:!0};const a=n.bind({});a.args={valgteBehandlingtyper:[r.TILBAKEKREVING],erDynamiskPeriode:!1};var l,S,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
        <SorteringVelger valgtSakslisteId={1} valgteBehandlingtyper={valgteBehandlingtyper} valgtAvdelingEnhet="NAV Viken" erDynamiskPeriode={verdier.erDynamiskPeriode} hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(m=(S=e.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};var A,g,R;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
        <SorteringVelger valgtSakslisteId={1} valgteBehandlingtyper={valgteBehandlingtyper} valgtAvdelingEnhet="NAV Viken" erDynamiskPeriode={verdier.erDynamiskPeriode} hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(R=(g=t.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var E,p,k;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`({
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
        <SorteringVelger valgtSakslisteId={1} valgteBehandlingtyper={valgteBehandlingtyper} valgtAvdelingEnhet="NAV Viken" erDynamiskPeriode={verdier.erDynamiskPeriode} hentAvdelingensSakslister={action('button-click')} hentAntallOppgaver={action('button-click')} />
      </Form>
    </RestApiMock>;
}`,...(k=(p=a.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const J=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{t as SorteringsvelgerNårDynamiskPeriodeErValgt,a as SorteringsvelgerNårKunTilbakekrevingErValgt,e as SorteringsvelgerNårMangeBehandlingstyperErValgt,J as __namedExportsOrder,C as default};
//# sourceMappingURL=SorteringVelger.stories-ac1a3400.js.map
