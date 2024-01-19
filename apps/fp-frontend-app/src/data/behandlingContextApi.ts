import { FormkravMellomlagretDataType } from '@navikt/fp-prosess-formkrav';
import { RestApiConfigBuilder, createRequestApi } from '@navikt/fp-rest-api';
import {
  RestApiOptions,
  getUseGlobalStateRestApi,
  getUseMultipleRestApi,
  getUseRestApi,
  getUseRestApiRunner,
  useGlobalStateRestApiData,
} from '@navikt/fp-rest-api-hooks';
import {
  ArbeidOgInntektsmelding,
  Behandling,
  ArbeidsgiverOpplysningerWrapper,
  Beregningsgrunnlag,
  BeregningsresultatDagytelse,
  Feriepengegrunnlag,
  ForhåndsvisMeldingParams,
  InntektArbeidYtelse,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
  Medlemskap,
  Opptjening,
  Personoversikt,
  SimuleringResultat,
  Soknad,
  TilbakekrevingValg,
  Verge,
  Ytelsefordeling,
  Innsyn,
  Dokument,
  FamilieHendelse,
  FamilieHendelseSamling,
  KlageVurdering,
  AnkeVurdering,
  FodselOgTilrettelegging,
  PeriodeSoker,
  FaktaArbeidsforhold,
  UttaksresultatPeriode,
  UttakStonadskontoer,
  KontrollerFaktaPeriode,
  UttakKontrollerAktivitetskrav,
  DokumentasjonVurderingBehov,
  BeregningsresultatEs,
  BeregningsresultatTilbakekreving,
} from '@navikt/fp-types';

import {
  DetaljerteFeilutbetalingsperioder,
  FeilutbetalingAarsak,
  FeilutbetalingFakta,
  FeilutbetalingPerioderWrapper,
  Vedtaksbrev,
  VilkarsVurdertePerioderWrapper,
} from '@navikt/ft-types';

export type SettPaVentParams = {
  ventearsak?: string;
  frist?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
};

type NyBehandlendeEnhet = {
  behandlingUuid: string;
  enhetNavn: string;
  enhetId: string;
  begrunnelse: string;
  behandlingVersjon: number;
};

type StonadskontoGittUttaksPerioderParams = {
  behandlingUuid: string;
  perioder: PeriodeSoker[];
};

export enum BehandlingApiKeys {
  BEHANDLING = 'BEHANDLING',
  BEHANDLING_TILBAKE = 'BEHANDLING_TILBAKE',
  VERGE = 'VERGE',
  BEREGNINGSGRUNNLAG = 'BEREGNINGSGRUNNLAG',
  FERIEPENGEGRUNNLAG = 'FERIEPENGEGRUNNLAG',
  FAMILIEHENDELSE = 'FAMILIEHENDELSE',
  SOKNAD = 'SOKNAD',
  SOKNAD_ORIGINAL_BEHANDLING = 'SOKNAD_ORIGINAL_BEHANDLING',
  YTELSEFORDELING = 'YTELSEFORDELING',
  OPPTJENING = 'OPPTJENING',
  BEREGNINGRESULTAT_DAGYTELSE = 'BEREGNINGRESULTAT_DAGYTELSE',
  BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING = 'BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING',
  FAMILIEHENDELSE_ORIGINAL_BEHANDLING = 'FAMILIEHENDELSE_ORIGINAL_BEHANDLING',
  MEDLEMSKAP = 'MEDLEMSKAP',
  INNTEKT_ARBEID_YTELSE = 'INNTEKT_ARBEID_YTELSE',
  SIMULERING_RESULTAT = 'SIMULERING_RESULTAT',
  TILBAKEKREVINGVALG = 'TILBAKEKREVINGVALG',
  BEHANDLING_NY_BEHANDLENDE_ENHET = 'BEHANDLING_NY_BEHANDLENDE_ENHET',
  HENLEGG_BEHANDLING = 'HENLEGG_BEHANDLING',
  RESUME_BEHANDLING = 'RESUME_BEHANDLING',
  BEHANDLING_ON_HOLD = 'BEHANDLING_ON_HOLD',
  OPEN_BEHANDLING_FOR_CHANGES = 'OPEN_BEHANDLING_FOR_CHANGES',
  UPDATE_ON_HOLD = 'UPDATE_ON_HOLD',
  SAVE_AKSJONSPUNKT = 'SAVE_AKSJONSPUNKT',
  SAVE_OVERSTYRT_AKSJONSPUNKT = 'SAVE_OVERSTYRT_AKSJONSPUNKT',
  PREVIEW_MESSAGE = 'PREVIEW_MESSAGE',
  PREVIEW_TILBAKEKREVING_MESSAGE = 'PREVIEW_TILBAKEKREVING_MESSAGE',
  VERGE_OPPRETT = 'VERGE_OPPRETT',
  VERGE_FJERN = 'VERGE_FJERN',
  UTLAND_DOK_STATUS = 'UTLAND_DOK_STATUS',
  ARBEIDSGIVERE_OVERSIKT = 'ARBEIDSGIVERE_OVERSIKT',
  BEHANDLING_PERSONOVERSIKT = 'BEHANDLING_PERSONOVERSIKT',
  ARBEID_OG_INNTEKT = 'ARBEID_OG_INNTEKT',
  ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD = 'ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD',
  ARBEID_OG_INNTEKT_LAGRE_VURDERING = 'ARBEID_OG_INNTEKT_LAGRE_VURDERING',
  ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING = 'ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING',
  INNSYN = 'INNSYN',
  INNSYN_DOKUMENTER = 'INNSYN_DOKUMENTER',
  KLAGE_VURDERING = 'KLAGE_VURDERING',
  SAVE_KLAGE_VURDERING = 'SAVE_KLAGE_VURDERING',
  SAVE_FORMKRAV_VURDERING = 'SAVE_FORMKRAV_VURDERING',
  ANKE_VURDERING = 'ANKE_VURDERING',
  SVANGERSKAPSPENGER_TILRETTELEGGING = 'SVANGERSKAPSPENGER_TILRETTELEGGING',
  STONADSKONTOER_GITT_UTTAKSPERIODER = 'STONADSKONTOER_GITT_UTTAKSPERIODER',
  FAKTA_ARBEIDSFORHOLD = 'FAKTA_ARBEIDSFORHOLD',
  UTTAKSRESULTAT_PERIODER = 'UTTAKSRESULTAT_PERIODER',
  UTTAK_STONADSKONTOER = 'UTTAK_STONADSKONTOER',
  UTTAK_KONTROLLER_FAKTA_PERIODER_V2 = 'UTTAK_KONTROLLER_FAKTA_PERIODER_V2',
  BEREGNINGSGRUNNLAG_BESTEBEREGNING = 'BEREGNINGSGRUNNLAG_BESTEBEREGNING',
  DOKUMENTASJON_VURDERING_BEHOV = 'DOKUMENTASJON_VURDERING_BEHOV',
  BEREGNINGRESULTAT_ENGANGSSTONAD = 'BEREGNINGRESULTAT_ENGANGSSTONAD',
  BEREGNINGSRESULTAT_ENGANGSSTONAD_ORIGINAL_BEHANDLING = 'BEREGNINGSRESULTAT_ENGANGSSTONAD_ORIGINAL_BEHANDLING',
  VEDTAKSBREV = 'VEDTAKSBREV',
  BEREGNINGSRESULTAT = 'BEREGNINGSRESULTAT',
  FEILUTBETALING_FAKTA = 'FEILUTBETALING_FAKTA',
  FEILUTBETALING_AARSAK = 'FEILUTBETALING_AARSAK',
  PERIODER_FORELDELSE = 'PERIODER_FORELDELSE',
  VILKARVURDERINGSPERIODER = 'VILKARVURDERINGSPERIODER',
  VILKARVURDERING = 'VILKARVURDERING',
  BEREGNE_BELØP = 'BEREGNE_BELØP',
  PREVIEW_VEDTAKSBREV = 'PREVIEW_VEDTAKSBREV',
}

type ApiParamsAndResponse = {
  [BehandlingApiKeys.BEHANDLING]: [{ behandlingUuid: string }, Behandling];
  [BehandlingApiKeys.BEHANDLING_TILBAKE]: [{ behandlingUuid: string }, Behandling];
  [BehandlingApiKeys.VERGE]: [void, Verge];
  [BehandlingApiKeys.BEREGNINGSGRUNNLAG]: [void, Beregningsgrunnlag];
  [BehandlingApiKeys.FERIEPENGEGRUNNLAG]: [void, Feriepengegrunnlag];
  [BehandlingApiKeys.FAMILIEHENDELSE]: [void, FamilieHendelseSamling];
  [BehandlingApiKeys.SOKNAD]: [void, Soknad];
  [BehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING]: [void, Soknad];
  [BehandlingApiKeys.YTELSEFORDELING]: [void, Ytelsefordeling];
  [BehandlingApiKeys.OPPTJENING]: [void, Opptjening];
  [BehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING]: [void, FamilieHendelse];
  [BehandlingApiKeys.BEREGNINGRESULTAT_DAGYTELSE]: [
    void,
    { 'beregningsresultat-dagytelse'?: BeregningsresultatDagytelse },
  ];
  [BehandlingApiKeys.BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING]: [
    void,
    { 'beregningsresultat-dagytelse-original-behandling'?: BeregningsresultatDagytelse },
  ];
  [BehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING]: [void, FamilieHendelse];
  [BehandlingApiKeys.MEDLEMSKAP]: [void, Medlemskap];
  [BehandlingApiKeys.INNTEKT_ARBEID_YTELSE]: [void, InntektArbeidYtelse];
  [BehandlingApiKeys.SIMULERING_RESULTAT]: [void, SimuleringResultat];
  [BehandlingApiKeys.TILBAKEKREVINGVALG]: [void, TilbakekrevingValg];
  [BehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET]: [NyBehandlendeEnhet, void];
  [BehandlingApiKeys.HENLEGG_BEHANDLING]: [
    { behandlingUuid: string; årsakKode: string; begrunnelse: string; behandlingVersjon: number },
    void,
  ];
  [BehandlingApiKeys.RESUME_BEHANDLING]: [{ behandlingUuid: string; behandlingVersjon: number }, Behandling];
  [BehandlingApiKeys.BEHANDLING_ON_HOLD]: [
    { behandlingUuid: string; behandlingVersjon: number; frist: string; ventearsak: string },
    void,
  ];
  [BehandlingApiKeys.OPEN_BEHANDLING_FOR_CHANGES]: [{ behandlingUuid: string; behandlingVersjon: number }, Behandling];
  [BehandlingApiKeys.UPDATE_ON_HOLD]: [SettPaVentParams, any];
  [BehandlingApiKeys.SAVE_AKSJONSPUNKT]: [any, Behandling];
  [BehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT]: [any, Behandling];
  [BehandlingApiKeys.PREVIEW_MESSAGE]: [ForhåndsvisMeldingParams, any];
  [BehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE]: [any, Behandling];
  [BehandlingApiKeys.VERGE_OPPRETT]: [any, Behandling];
  [BehandlingApiKeys.VERGE_FJERN]: [any, Behandling];
  [BehandlingApiKeys.UTLAND_DOK_STATUS]: [void, { dokStatus?: string }];
  [BehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT]: [void, ArbeidsgiverOpplysningerWrapper];
  [BehandlingApiKeys.BEHANDLING_PERSONOVERSIKT]: [void, Personoversikt];
  [BehandlingApiKeys.ARBEID_OG_INNTEKT]: [void, ArbeidOgInntektsmelding];
  [BehandlingApiKeys.ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD]: [void, ManueltArbeidsforhold];
  [BehandlingApiKeys.ARBEID_OG_INNTEKT_LAGRE_VURDERING]: [void, ManglendeInntektsmeldingVurdering];
  [BehandlingApiKeys.ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING]: [
    { behandlingUuid: string; behandlingVersjon: number },
    void,
  ];
  [BehandlingApiKeys.INNSYN]: [void, Innsyn];
  [BehandlingApiKeys.INNSYN_DOKUMENTER]: [void, Dokument[]];
  [BehandlingApiKeys.KLAGE_VURDERING]: [void, KlageVurdering[]];
  [BehandlingApiKeys.SAVE_KLAGE_VURDERING]: [any, any];
  [BehandlingApiKeys.SAVE_FORMKRAV_VURDERING]: [FormkravMellomlagretDataType, void];
  [BehandlingApiKeys.ANKE_VURDERING]: [void, AnkeVurdering];
  [BehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING]: [void, FodselOgTilrettelegging];
  [BehandlingApiKeys.STONADSKONTOER_GITT_UTTAKSPERIODER]: [StonadskontoGittUttaksPerioderParams, void];
  [BehandlingApiKeys.FAKTA_ARBEIDSFORHOLD]: [void, FaktaArbeidsforhold[]];
  [BehandlingApiKeys.UTTAKSRESULTAT_PERIODER]: [void, UttaksresultatPeriode];
  [BehandlingApiKeys.UTTAK_STONADSKONTOER]: [void, UttakStonadskontoer];
  [BehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER_V2]: [void, KontrollerFaktaPeriode[]];
  [BehandlingApiKeys.BEREGNINGSGRUNNLAG_BESTEBEREGNING]: [void, UttakKontrollerAktivitetskrav[]];
  [BehandlingApiKeys.DOKUMENTASJON_VURDERING_BEHOV]: [void, DokumentasjonVurderingBehov[]];
  [BehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD]: [void, BeregningsresultatEs];
  [BehandlingApiKeys.BEREGNINGSRESULTAT_ENGANGSSTONAD_ORIGINAL_BEHANDLING]: [
    void,
    { 'beregningsresultat-engangsstonad'?: BeregningsresultatEs },
  ];
  [BehandlingApiKeys.VEDTAKSBREV]: [void, Vedtaksbrev];
  [BehandlingApiKeys.BEREGNINGSRESULTAT]: [void, BeregningsresultatTilbakekreving];
  [BehandlingApiKeys.FEILUTBETALING_FAKTA]: [void, FeilutbetalingFakta];
  [BehandlingApiKeys.FEILUTBETALING_AARSAK]: [void, FeilutbetalingAarsak[]];
  [BehandlingApiKeys.PERIODER_FORELDELSE]: [void, FeilutbetalingPerioderWrapper];
  [BehandlingApiKeys.VILKARVURDERINGSPERIODER]: [void, DetaljerteFeilutbetalingsperioder];
  [BehandlingApiKeys.VILKARVURDERING]: [void, VilkarsVurdertePerioderWrapper];
  [BehandlingApiKeys.BEREGNE_BELØP]: [any, any];
  [BehandlingApiKeys.PREVIEW_VEDTAKSBREV]: [any, any];
};

export const behandlingEndepunkter = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', BehandlingApiKeys.BEHANDLING)
  .withAsyncPost('/fptilbake/api/behandlinger', BehandlingApiKeys.BEHANDLING_TILBAKE)

  // behandlingsdata
  .withRel('soeker-verge', BehandlingApiKeys.VERGE)
  .withRel('simulering-resultat', BehandlingApiKeys.SIMULERING_RESULTAT)
  .withRel('tilbakekrevingvalg', BehandlingApiKeys.TILBAKEKREVINGVALG)
  .withRel('familiehendelse-v2', BehandlingApiKeys.FAMILIEHENDELSE)
  .withRel('beregningsgrunnlag', BehandlingApiKeys.BEREGNINGSGRUNNLAG)
  .withRel('feriepengegrunnlag', BehandlingApiKeys.FERIEPENGEGRUNNLAG)
  .withRel('beregningsresultat-dagytelse', BehandlingApiKeys.BEREGNINGRESULTAT_DAGYTELSE)
  .withRel(
    'beregningsresultat-dagytelse-original-behandling',
    BehandlingApiKeys.BEREGNINGSRESULTAT_DAGYTELSE_ORIGINAL_BEHANDLING,
  )
  .withRel('soknad', BehandlingApiKeys.SOKNAD)
  .withRel('soknad-original-behandling', BehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING)
  .withRel('familiehendelse-original-behandling', BehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING)
  .withRel('soeker-medlemskap-v2', BehandlingApiKeys.MEDLEMSKAP)
  .withRel('inntekt-arbeid-ytelse', BehandlingApiKeys.INNTEKT_ARBEID_YTELSE)
  .withRel('soeker-verge', BehandlingApiKeys.VERGE)
  .withRel('ytelsefordeling', BehandlingApiKeys.YTELSEFORDELING)
  .withRel('opptjening', BehandlingApiKeys.OPPTJENING)
  .withRel('utland-dok-status', BehandlingApiKeys.UTLAND_DOK_STATUS)
  .withRel('arbeidsgivere-oversikt', BehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT)
  .withRel('behandling-personoversikt', BehandlingApiKeys.BEHANDLING_PERSONOVERSIKT)
  .withRel('arbeidsforhold-inntektsmelding', BehandlingApiKeys.ARBEID_OG_INNTEKT)

  // INNSYN
  .withRel('innsyn', BehandlingApiKeys.INNSYN)
  .withRel('dokumenter', BehandlingApiKeys.INNSYN_DOKUMENTER)

  // KLAGE
  .withRel('klage-vurdering', BehandlingApiKeys.KLAGE_VURDERING)

  // ANKE
  .withRel('anke-vurdering', BehandlingApiKeys.ANKE_VURDERING)

  // SVP
  .withRel('svangerskapspenger-tilrettelegging', BehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING)

  // FP
  .withRel('fakta-arbeidsforhold', BehandlingApiKeys.FAKTA_ARBEIDSFORHOLD)
  .withRel('uttaksresultat-perioder', BehandlingApiKeys.UTTAKSRESULTAT_PERIODER)
  .withRel('uttak-stonadskontoer', BehandlingApiKeys.UTTAK_STONADSKONTOER)
  .withRel('uttak-kontroller-fakta-perioder-v2', BehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER_V2)
  .withRel('beregningsgrunnlagharbesteberegning', BehandlingApiKeys.BEREGNINGSGRUNNLAG_BESTEBEREGNING)
  .withRel('uttak-vurder-dokumentasjon', BehandlingApiKeys.DOKUMENTASJON_VURDERING_BEHOV)

  // ES
  .withRel('beregningsresultat-engangsstonad', BehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD)
  .withRel(
    'beregningsresultat-engangsstonad-original-behandling',
    BehandlingApiKeys.BEREGNINGSRESULTAT_ENGANGSSTONAD_ORIGINAL_BEHANDLING,
  )

  // FP-TILBAKE
  .withRel('vedtaksbrev', BehandlingApiKeys.VEDTAKSBREV)
  .withRel('beregningsresultat', BehandlingApiKeys.BEREGNINGSRESULTAT)
  .withRel('feilutbetalingFakta', BehandlingApiKeys.FEILUTBETALING_FAKTA)
  .withRel('feilutbetalingAarsak', BehandlingApiKeys.FEILUTBETALING_AARSAK)
  .withRel('perioderForeldelse', BehandlingApiKeys.PERIODER_FORELDELSE)
  .withRel('vilkarvurderingsperioder', BehandlingApiKeys.VILKARVURDERINGSPERIODER)
  .withRel('vilkarvurdering', BehandlingApiKeys.VILKARVURDERING)

  // operasjoner
  .withRel('bytt-behandlende-enhet', BehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET)
  .withRel('henlegg-behandling', BehandlingApiKeys.HENLEGG_BEHANDLING)
  .withRel('gjenoppta-behandling', BehandlingApiKeys.RESUME_BEHANDLING)
  .withRel('sett-behandling-pa-vent', BehandlingApiKeys.BEHANDLING_ON_HOLD)
  .withRel('endre-pa-vent', BehandlingApiKeys.UPDATE_ON_HOLD)
  .withRel('opne-for-endringer', BehandlingApiKeys.OPEN_BEHANDLING_FOR_CHANGES)
  .withRel('lagre-aksjonspunkter', BehandlingApiKeys.SAVE_AKSJONSPUNKT)
  .withRel('lagre-overstyr-aksjonspunkter', BehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT)
  .withRel('opprett-verge', BehandlingApiKeys.VERGE_OPPRETT)
  .withRel('fjern-verge', BehandlingApiKeys.VERGE_FJERN)
  .withRel('arbeidsforhold-inntektsmelding-registrer', BehandlingApiKeys.ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD)
  .withRel('arbeidsforhold-inntektsmelding-vurder', BehandlingApiKeys.ARBEID_OG_INNTEKT_LAGRE_VURDERING)
  .withRel(
    'arbeidsforhold-inntektsmelding-apne-for-ny-vurdering',
    BehandlingApiKeys.ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING,
  )

  // KLAGE
  .withRel('mellomlagre-klage', BehandlingApiKeys.SAVE_KLAGE_VURDERING)
  .withRel('mellomlagre-formkrav-klage', BehandlingApiKeys.SAVE_FORMKRAV_VURDERING)

  // FP
  .withRel('lagre-stonadskontoer-gitt-uttaksperioder', BehandlingApiKeys.STONADSKONTOER_GITT_UTTAKSPERIODER)

  /* FPTILBAKE */
  .withRel('beregne-feilutbetalt-belop', BehandlingApiKeys.BEREGNE_BELØP)
  .withPost('/fptilbake/api/dokument/forhandsvis-varselbrev', BehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE, {
    isResponseBlob: true,
  })
  .withPost('/fptilbake/api/dokument/forhandsvis-vedtaksbrev', BehandlingApiKeys.PREVIEW_VEDTAKSBREV, {
    isResponseBlob: true,
  })

  /* FPFORMIDLING */
  .withPost('/fpformidling/api/brev/forhaandsvis', BehandlingApiKeys.PREVIEW_MESSAGE, { isResponseBlob: true })

  .build();

export const requestBehandlingApi = createRequestApi(behandlingEndepunkter);
const useRestApi = getUseRestApi(requestBehandlingApi);
const useRestApiRunner = getUseRestApiRunner(requestBehandlingApi);
const useGlobalStateRestApi = getUseGlobalStateRestApi(requestBehandlingApi);
const useMultipleRestApi = getUseMultipleRestApi(requestBehandlingApi);

export const useBehandlingRestApi = <TYPE extends BehandlingApiKeys>(
  key: TYPE,
  params?: ApiParamsAndResponse[TYPE][0],
  options?: RestApiOptions,
) => useRestApi<ApiParamsAndResponse[TYPE][1], ApiParamsAndResponse[TYPE][0]>(key, params, options);

export const useBehandlingRestApiRunner = <TYPE extends BehandlingApiKeys>(key: TYPE) =>
  useRestApiRunner<ApiParamsAndResponse[TYPE][1], ApiParamsAndResponse[TYPE][0]>(key);

export const useBehandlingGlobalStateRestApi = <TYPE extends BehandlingApiKeys>(
  key: TYPE,
  params?: ApiParamsAndResponse[TYPE][0],
  options?: RestApiOptions,
) => useGlobalStateRestApi<ApiParamsAndResponse[TYPE][1], ApiParamsAndResponse[TYPE][0]>(key, params, options);

export const useBehandlingGlobalStateRestApiData = <TYPE extends BehandlingApiKeys>(key: TYPE) =>
  useGlobalStateRestApiData<ApiParamsAndResponse[TYPE][1]>(key);

type Camelize<T extends string> = T extends `${infer A}_${infer B}` ? `${A}${Camelize<Capitalize<B>>}` : T;

type CamelizeKeys<T extends object> = {
  [key in keyof T as key extends string ? Camelize<Lowercase<key>> : key]: T[key];
};

type CreateMutable<Type extends BehandlingApiKeys> = {
  [Property in keyof Type as Capitalize<Property & string>]: ApiParamsAndResponse[Type][1];
};

export const useBehandlingMultipleRestApi = <TYPE extends BehandlingApiKeys>(
  endpointData: {
    keyString: TYPE;
    params?: ApiParamsAndResponse[TYPE][0];
  }[],
  options?: RestApiOptions,
) => {
  // Må utleda typane basert på TYPE og string til TYPE {
  //    arbeidsgivereOversikt: ArbeidsgiverOpplysningerWrapper;
  //    behandlingPersonoversikt: Personoversikt;
  //  }

  type Jau = CreateMutable<(typeof endpointData)[number]['keyString']>;

  type TE = (typeof endpointData)[number]['keyString'];
  type InputType = Record<TE, ApiParamsAndResponse[TE][1]>;

  return useMultipleRestApi<Jau, ApiParamsAndResponse[TYPE][0]>(endpointData, options);
};

export const useTest = <TYPE extends BehandlingApiKeys>(
  keyString: TYPE,
  params?: ApiParamsAndResponse[TYPE][0],
  options?: RestApiOptions,
) => {
  // Må utleda typane basert på TYPE og string til TYPE {
  //    arbeidsgivereOversikt: ArbeidsgiverOpplysningerWrapper;
  //    behandlingPersonoversikt: Personoversikt;
  //  }
  type InputType = Record<typeof keyString, ApiParamsAndResponse[TYPE][1]>;
  type B = CamelizeKeys<InputType>;

  return useMultipleRestApi<B, ApiParamsAndResponse[TYPE][0]>(endpointData, options);
};

const endepunkterSomSkalHentesEnGang = [
  { key: BehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT },
  { key: BehandlingApiKeys.BEHANDLING_PERSONOVERSIKT },
];
const test = () => {
  type jau = Camelize<Lowercase<'TEST_ARBEIDSGIVERE_OVERSIKT'>>;
  const t = useBehandlingMultipleRestApi(endepunkterSomSkalHentesEnGang);

  type A = { TEST_ARBEIDSGIVERE_OVERSIKT: boolean };
  type B = CamelizeKeys<A>; // type A = { "im_a_snake": boolean }

  const adfs = useTest(BehandlingApiKeys.ARBEID_OG_INNTEKT);
  adfs.data?.arbeidOgInntekt;

  const tsdfs = useBehandlingMultipleRestApi([
    { keyString: BehandlingApiKeys.VERGE },
    { keyString: BehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT },
  ]);
  tsdfs.data;
  console.log(t);
};

type TestingMapped<Type> = {
  [Property in keyof Type]: Type;
};

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

type CreateMutableTest<Type extends BehandlingApiKeys> = {
  [Property in keyof Type as Capitalize<Property & string>]: ApiParamsAndResponse[Type][1];
};

const testadsadf = <T>(): T => null as T;

const testsd = () => {
  const arrayOfO = [{ keyString: BehandlingApiKeys.VERGE }, { keyString: BehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT }];
  const arrayOfOReformat = arrayOfO.map(f => f.keyString);

  type TE = (typeof arrayOfO)[number]['keyString'];

  type JAUSE = BehandlingApiKeys.VERGE | BehandlingApiKeys.ANKE_VURDERING;

  type InputType = Record<JAUSE, ApiParamsAndResponse[JAUSE][1]>;

  type Jau = CreateMutableTest<JAUSE>;
  const t = testadsadf<InputType>();
};
