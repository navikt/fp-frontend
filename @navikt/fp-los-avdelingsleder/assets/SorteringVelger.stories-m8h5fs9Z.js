import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{u as L,$ as T}from"./index.es-CoJGJJtc.js";import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as r}from"./behandlingType-BdbjGMJD.js";import{m as K}from"./nb_NO-Du4pagSL.js";import{g as N}from"./withIntl-B_2QVpuP.js";import{a as _}from"./alleKodeverkLos-BJud6Q-i.js";import{R as h}from"./RestApiMock-CMGSvSy2.js";import"./index-uubelm5h.js";import"./useRestApiRunner-Dz_KBbnA.js";import{R as D,a as s,r as f}from"./fplosRestApi-DIvKj8Ld.js";import{K as G}from"./KoSortering-BHrQm0Td.js";import{S as c}from"./SorteringVelger-BQFCE6_9.js";import"./index.es-B3phUJaJ.js";import"./Modal-CrXtQo6t.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./VStack-BZrJM_W_.js";import"./v4-CQkTLCs1.js";import"./useLosKodeverk-D3IvkdFj.js";import"./index.es-B65aQnJ7.js";import"./useDebounce-4yBUfkw3.js";const P=N(K),ae={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:c,decorators:[P]},i=({valgteBehandlingtyper:y,erDynamiskPeriode:I})=>{const v=[{key:D.KODEVERK_LOS.name,data:_,global:!0},{key:s.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:s.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0}],n={sortering:G.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:I},u=L({defaultValues:n});return o.jsx(h,{data:v,requestApi:f,children:o.jsx(T,{formMethods:u,children:o.jsx(c,{valgtSakslisteId:1,valgteBehandlingtyper:y,valgtAvdelingEnhet:"Nav Vikafossen",erDynamiskPeriode:n.erDynamiskPeriode,hentAvdelingensSakslister:d("button-click"),hentAntallOppgaver:d("button-click")})})})},e=i.bind({});e.args={valgteBehandlingtyper:[r.FORSTEGANGSSOKNAD,r.DOKUMENTINNSYN],erDynamiskPeriode:!1};const t=i.bind({});t.args={valgteBehandlingtyper:[r.FORSTEGANGSSOKNAD,r.DOKUMENTINNSYN],erDynamiskPeriode:!0};const a=i.bind({});a.args={valgteBehandlingtyper:[r.TILBAKEKREVING],erDynamiskPeriode:!1};var l,S,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(R=(A=t.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var p,E,k;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(k=(E=a.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const re=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{t as SorteringsvelgerNårDynamiskPeriodeErValgt,a as SorteringsvelgerNårKunTilbakekrevingErValgt,e as SorteringsvelgerNårMangeBehandlingstyperErValgt,re as __namedExportsOrder,ae as default};
