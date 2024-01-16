import{j as s}from"./jsx-runtime-CUEGZZF9.js";import{a as d}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{g as T,u as v,O as K,m as N}from"./nb_NO-Lpx64cL7.js";import{Y as a}from"./index.es-LzEcK_Mh.js";import{R as _}from"./RestApiMock-9zoo3wS3.js";import{a as h}from"./alleKodeverkLos-Qz5F4oTQ.js";import{S as c}from"./SorteringVelger-mwJEP-2o.js";import{K as D}from"./KoSortering--LJgVfwZ.js";import{R as f,a as r,r as G}from"./fplosRestApi-rASv3eze.js";import"./index-DogsOklH.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./index-MroJ3egt.js";import"./useGlobalStateRestApiData-A2OyOdo-.js";import"./useLosKodeverk-Ic90c_M_.js";import"./index.es-54D7gkuX.js";const O=T(N),Q={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:c,decorators:[O]},o=({valgteBehandlingtyper:y,erDynamiskPeriode:I})=>{const u=[{key:f.KODEVERK_LOS.name,data:h,global:!0},{key:r.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:r.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0}],i={sortering:D.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:I},L=v({defaultValues:i});return s(_,{data:u,requestApi:G,children:s(K,{formMethods:L,children:s(c,{valgtSakslisteId:1,valgteBehandlingtyper:y,valgtAvdelingEnhet:"NAV Viken",erDynamiskPeriode:i.erDynamiskPeriode,hentAvdelingensSakslister:d("button-click"),hentAntallOppgaver:d("button-click")})})})},e=o.bind({});e.args={valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!1};const n=o.bind({});n.args={valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!0};const t=o.bind({});t.args={valgteBehandlingtyper:[a.TILBAKEKREVING],erDynamiskPeriode:!1};var l,S,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(k=(p=t.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const W=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{n as SorteringsvelgerNårDynamiskPeriodeErValgt,t as SorteringsvelgerNårKunTilbakekrevingErValgt,e as SorteringsvelgerNårMangeBehandlingstyperErValgt,W as __namedExportsOrder,Q as default};
