import{j as n}from"./jsx-runtime-9c4ae004.js";import{a as d}from"./chunk-AY7I2SME-c7b6cf8a.js";import{B as T,j as N,u as _,F as v,m as K}from"./nb_NO-349fe7a4.js";import{Y as r}from"./index.es-657e045f.js";import{k as h}from"./index.es-44dedc9f.js";import{S as c}from"./SorteringVelger-570b4bdf.js";import{K as D}from"./KoSortering-3d894ebc.js";import{a as f,R as s,r as G}from"./fplosRestApi-beda4f04.js";import"./index-1b03fe98.js";import"./index-6fd5a17b.js";import"./index.es-dcafba10.js";import"./useLosKodeverk-3c749e2b.js";import"./index.es-1fef6f08.js";import"./Detail-bb5c8bf1.js";const P=T(K),C={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:c,decorators:[P]},i=({valgteBehandlingtyper:y,erDynamiskPeriode:I})=>{const u=[{key:f.KODEVERK_LOS.name,data:N,global:!0},{key:s.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0}],o={sortering:D.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:I},L=_({defaultValues:o});return n.jsx(h,{data:u,requestApi:G,children:n.jsx(v,{formMethods:L,children:n.jsx(c,{valgtSakslisteId:1,valgteBehandlingtyper:y,valgtAvdelingEnhet:"NAV Viken",erDynamiskPeriode:o.erDynamiskPeriode,hentAvdelingensSakslister:d("button-click"),hentAntallOppgaver:d("button-click")})})})},e=i.bind({});e.args={valgteBehandlingtyper:[r.FORSTEGANGSSOKNAD,r.DOKUMENTINNSYN],erDynamiskPeriode:!1};const t=i.bind({});t.args={valgteBehandlingtyper:[r.FORSTEGANGSSOKNAD,r.DOKUMENTINNSYN],erDynamiskPeriode:!0};const a=i.bind({});a.args={valgteBehandlingtyper:[r.TILBAKEKREVING],erDynamiskPeriode:!1};var l,S,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
//# sourceMappingURL=SorteringVelger.stories-3d867b56.js.map
