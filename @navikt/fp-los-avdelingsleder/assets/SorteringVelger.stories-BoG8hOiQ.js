import{R as s}from"./index-DVXBtNgz.js";import{a as d}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{g as T,u as v,O as K,m as N}from"./nb_NO-DypaWN8k.js";import{Y as a}from"./index.es-Cl_yxThX.js";import{R as _}from"./RestApiMock-CMcnG-4N.js";import"./useRestApiRunner-r8nm61Jn.js";import{a as D}from"./alleKodeverkLos-BJud6Q-i.js";import{S as c}from"./SorteringVelger-IehH8NNW.js";import{K as h}from"./KoSortering-BHrQm0Td.js";import{R as f,a as r,r as G}from"./fplosRestApi-DXPSIiTb.js";import"./v4-CQkTLCs1.js";import"./index-Cbx7Fas8.js";import"./dayjs.min-Dkhc0ShP.js";import"./tslib.es6-CMwweBXX.js";import"./useLosKodeverk-BklsCf3V.js";import"./index.es-CZr2up0C.js";import"./useDebounce-3_Oo3BO5.js";const O=T(N),W={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:c,decorators:[O]},o=({valgteBehandlingtyper:y,erDynamiskPeriode:I})=>{const u=[{key:f.KODEVERK_LOS.name,data:D,global:!0},{key:r.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:r.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0}],i={sortering:h.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:I},L=v({defaultValues:i});return s.createElement(_,{data:u,requestApi:G},s.createElement(K,{formMethods:L},s.createElement(c,{valgtSakslisteId:1,valgteBehandlingtyper:y,valgtAvdelingEnhet:"NAV Viken",erDynamiskPeriode:i.erDynamiskPeriode,hentAvdelingensSakslister:d("button-click"),hentAntallOppgaver:d("button-click")})))},e=o.bind({});e.args={valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!1};const n=o.bind({});n.args={valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!0};const t=o.bind({});t.args={valgteBehandlingtyper:[a.TILBAKEKREVING],erDynamiskPeriode:!1};var l,S,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(m=(S=e.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};var A,g,R;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(R=(g=n.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var E,p,k;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`({
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
}`,...(k=(p=t.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const X=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{n as SorteringsvelgerNårDynamiskPeriodeErValgt,t as SorteringsvelgerNårKunTilbakekrevingErValgt,e as SorteringsvelgerNårMangeBehandlingstyperErValgt,X as __namedExportsOrder,W as default};
