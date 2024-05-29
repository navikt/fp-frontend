import{R as s}from"./index-DogsOklH.js";import{a as d}from"./chunk-MZXVCX43-RlXIxtK5.js";import{g as T,u as v,O as K,m as N}from"./nb_NO-8vkv4Fjx.js";import{Y as a}from"./index.es-LzEcK_Mh.js";import{R as _}from"./RestApiMock-PoHaMzn1.js";import"./useRestApiRunner-t59neJBf.js";import{a as D}from"./alleKodeverkLos-3oPC0WGq.js";import{S as c}from"./SorteringVelger-OALy274U.js";import{K as h}from"./KoSortering--LJgVfwZ.js";import{R as f,a as r,r as G}from"./fplosRestApi-hxLEfccG.js";import"./v4-yQnnJER4.js";import"./index-MroJ3egt.js";import"./useLosKodeverk-_R72ADyC.js";import"./index.es-lhDBPqjE.js";import"./useDebounce-7npZRRYW.js";const O=T(N),J={title:"los/avdelingsleder/behandlingskoer/SorteringVelger",component:c,decorators:[O]},o=({valgteBehandlingtyper:y,erDynamiskPeriode:I})=>{const u=[{key:f.KODEVERK_LOS.name,data:D,global:!0},{key:r.LAGRE_SAKSLISTE_SORTERING.name,data:void 0},{key:r.LAGRE_SAKSLISTE_SORTERING_INTERVALL.name,data:void 0},{key:r.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE.name,data:void 0},{key:r.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO.name,data:void 0}],i={sortering:h.BEHANDLINGSFRIST,fra:2,til:3,fomDato:"2020-01-10",tomDato:"2020-10-01",erDynamiskPeriode:I},L=v({defaultValues:i});return s.createElement(_,{data:u,requestApi:G},s.createElement(K,{formMethods:L},s.createElement(c,{valgtSakslisteId:1,valgteBehandlingtyper:y,valgtAvdelingEnhet:"NAV Viken",erDynamiskPeriode:i.erDynamiskPeriode,hentAvdelingensSakslister:d("button-click"),hentAntallOppgaver:d("button-click")})))},e=o.bind({});e.args={valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!1};const n=o.bind({});n.args={valgteBehandlingtyper:[a.FORSTEGANGSSOKNAD,a.DOKUMENTINNSYN],erDynamiskPeriode:!0};const t=o.bind({});t.args={valgteBehandlingtyper:[a.TILBAKEKREVING],erDynamiskPeriode:!1};var l,S,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(k=(p=t.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const Q=["SorteringsvelgerNårMangeBehandlingstyperErValgt","SorteringsvelgerNårDynamiskPeriodeErValgt","SorteringsvelgerNårKunTilbakekrevingErValgt"];export{n as SorteringsvelgerNårDynamiskPeriodeErValgt,t as SorteringsvelgerNårKunTilbakekrevingErValgt,e as SorteringsvelgerNårMangeBehandlingstyperErValgt,Q as __namedExportsOrder,J as default};
