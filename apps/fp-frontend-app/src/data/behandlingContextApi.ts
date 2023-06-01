import { RestApiConfigBuilder, RestKey, createRequestApi } from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import {
  ArbeidOgInntektsmelding,
  Behandling,
  ArbeidsgiverOpplysningerWrapper,
  Beregningsgrunnlag,
  BeregningsresultatFp,
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

export const BehandlingApiKeys = {
  BEHANDLING: new RestKey<Behandling, { behandlingUuid: string }>('BEHANDLING'),
  BEHANDLING_TILBAKE: new RestKey<Behandling, { behandlingUuid: string }>('BEHANDLING_TILBAKE'),
  VERGE: new RestKey<Verge, void>('VERGE'),
  BEREGNINGSGRUNNLAG: new RestKey<Beregningsgrunnlag, void>('BEREGNINGSGRUNNLAG'),
  FERIEPENGEGRUNNLAG: new RestKey<Feriepengegrunnlag, void>('FERIEPENGEGRUNNLAG'),
  FAMILIEHENDELSE: new RestKey<FamilieHendelseSamling, void>('FAMILIEHENDELSE'),
  SOKNAD: new RestKey<Soknad, void>('SOKNAD'),
  SOKNAD_ORIGINAL_BEHANDLING: new RestKey<Soknad, void>('SOKNAD_ORIGINAL_BEHANDLING'),
  YTELSEFORDELING: new RestKey<Ytelsefordeling, void>('YTELSEFORDELING'),
  OPPTJENING: new RestKey<Opptjening, void>('OPPTJENING'),
  BEREGNINGRESULTAT_FORELDREPENGER: new RestKey<{ 'beregningsresultat-foreldrepenger'?: BeregningsresultatFp }, void>(
    'BEREGNINGRESULTAT_FORELDREPENGER',
  ),
  BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING: new RestKey<
    { 'beregningsresultat-foreldrepenger'?: BeregningsresultatFp },
    void
  >('BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING'),
  FAMILIEHENDELSE_ORIGINAL_BEHANDLING: new RestKey<FamilieHendelse, void>('FAMILIEHENDELSE_ORIGINAL_BEHANDLING'),
  MEDLEMSKAP: new RestKey<Medlemskap, void>('MEDLEMSKAP'),
  INNTEKT_ARBEID_YTELSE: new RestKey<InntektArbeidYtelse, void>('INNTEKT_ARBEID_YTELSE'),
  SIMULERING_RESULTAT: new RestKey<SimuleringResultat, void>('SIMULERING_RESULTAT'),
  TILBAKEKREVINGVALG: new RestKey<TilbakekrevingValg, void>('TILBAKEKREVINGVALG'),
  BEHANDLING_NY_BEHANDLENDE_ENHET: new RestKey<void, NyBehandlendeEnhet>('BEHANDLING_NY_BEHANDLENDE_ENHET'),
  HENLEGG_BEHANDLING: new RestKey<
    void,
    { behandlingUuid: string; årsakKode: string; begrunnelse: string; behandlingVersjon: number }
  >('HENLEGG_BEHANDLING'),
  RESUME_BEHANDLING: new RestKey<Behandling, { behandlingUuid: string; behandlingVersjon: number }>(
    'RESUME_BEHANDLING',
  ),
  BEHANDLING_ON_HOLD: new RestKey<
    void,
    { behandlingUuid: string; behandlingVersjon: number; frist: string; ventearsak: string }
  >('BEHANDLING_ON_HOLD'),
  OPEN_BEHANDLING_FOR_CHANGES: new RestKey<Behandling, { behandlingUuid: string; behandlingVersjon: number }>(
    'OPEN_BEHANDLING_FOR_CHANGES',
  ),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
  SAVE_OVERSTYRT_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_OVERSTYRT_AKSJONSPUNKT'),
  PREVIEW_MESSAGE: new RestKey<any, ForhåndsvisMeldingParams>('PREVIEW_MESSAGE'),
  PREVIEW_TILBAKEKREVING_MESSAGE: new RestKey<Behandling, any>('PREVIEW_TILBAKEKREVING_MESSAGE'),
  VERGE_OPPRETT: new RestKey<Behandling, any>('VERGE_OPPRETT'),
  VERGE_FJERN: new RestKey<Behandling, any>('VERGE_FJERN'),
  UTLAND_DOK_STATUS: new RestKey<{ dokStatus?: string }, void>('UTLAND_DOK_STATUS'),
  ARBEIDSGIVERE_OVERSIKT: new RestKey<ArbeidsgiverOpplysningerWrapper, void>('ARBEIDSGIVERE_OVERSIKT'),
  BEHANDLING_PERSONOVERSIKT: new RestKey<Personoversikt, void>('BEHANDLING_PERSONOVERSIKT'),
  ARBEID_OG_INNTEKT: new RestKey<ArbeidOgInntektsmelding, void>('ARBEID_OG_INNTEKT'),
  ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD: new RestKey<void, ManueltArbeidsforhold>(
    'ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD',
  ),
  ARBEID_OG_INNTEKT_LAGRE_VURDERING: new RestKey<void, ManglendeInntektsmeldingVurdering>(
    'ARBEID_OG_INNTEKT_LAGRE_VURDERING',
  ),
  ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING: new RestKey<void, { behandlingUuid: string; behandlingVersjon: number }>(
    'ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING',
  ),
  INNSYN: new RestKey<Innsyn, void>('INNSYN'),
  INNSYN_DOKUMENTER: new RestKey<Dokument[], void>('INNSYN_DOKUMENTER'),
  KLAGE_VURDERING: new RestKey<KlageVurdering[], void>('KLAGE_VURDERING'),
  SAVE_KLAGE_VURDERING: new RestKey<any, any>('SAVE_KLAGE_VURDERING'),
  ANKE_VURDERING: new RestKey<AnkeVurdering, void>('ANKE_VURDERING'),
  SVANGERSKAPSPENGER_TILRETTELEGGING: new RestKey<FodselOgTilrettelegging, void>('SVANGERSKAPSPENGER_TILRETTELEGGING'),
  STONADSKONTOER_GITT_UTTAKSPERIODER: new RestKey<void, StonadskontoGittUttaksPerioderParams>(
    'STONADSKONTOER_GITT_UTTAKSPERIODER',
  ),
  FAKTA_ARBEIDSFORHOLD: new RestKey<FaktaArbeidsforhold[], void>('FAKTA_ARBEIDSFORHOLD'),
  UTTAKSRESULTAT_PERIODER: new RestKey<UttaksresultatPeriode, void>('UTTAKSRESULTAT_PERIODER'),
  UTTAK_STONADSKONTOER: new RestKey<UttakStonadskontoer, void>('UTTAK_STONADSKONTOER'),
  UTTAK_KONTROLLER_FAKTA_PERIODER_V2: new RestKey<KontrollerFaktaPeriode[], void>('UTTAK_KONTROLLER_FAKTA_PERIODER_V2'),
  BEREGNINGSGRUNNLAG_BESTEBEREGNING: new RestKey<UttakKontrollerAktivitetskrav[], void>(
    'BEREGNINGSGRUNNLAG_BESTEBEREGNING',
  ),
  DOKUMENTASJON_VURDERING_BEHOV: new RestKey<DokumentasjonVurderingBehov[], void>('DOKUMENTASJON_VURDERING_BEHOV'),
  BEREGNINGRESULTAT_ENGANGSSTONAD: new RestKey<BeregningsresultatEs, void>('BEREGNINGRESULTAT_ENGANGSSTONAD'),
  BEREGNINGSRESULTAT_ENGANGSSTONAD_ORIGINAL_BEHANDLING: new RestKey<
    { 'beregningsresultat-engangsstonad'?: BeregningsresultatEs },
    void
  >('BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING'),
  VEDTAKSBREV: new RestKey<Vedtaksbrev, void>('VEDTAKSBREV'),
  BEREGNINGSRESULTAT: new RestKey<BeregningsresultatTilbakekreving, void>('BEREGNINGSRESULTAT'),
  FEILUTBETALING_FAKTA: new RestKey<FeilutbetalingFakta, void>('FEILUTBETALING_FAKTA'),
  FEILUTBETALING_AARSAK: new RestKey<FeilutbetalingAarsak[], void>('FEILUTBETALING_AARSAK'),
  PERIODER_FORELDELSE: new RestKey<FeilutbetalingPerioderWrapper, void>('PERIODER_FORELDELSE'),
  VILKARVURDERINGSPERIODER: new RestKey<DetaljerteFeilutbetalingsperioder, void>('VILKARVURDERINGSPERIODER'),
  VILKARVURDERING: new RestKey<VilkarsVurdertePerioderWrapper, void>('VILKARVURDERING'),
  BEREGNE_BELØP: new RestKey<any, any>('BEREGNE_BELØP'),
  PREVIEW_VEDTAKSBREV: new RestKey<any, any>('PREVIEW_VEDTAKSBREV'),
};

export const behandlingEndepunkter = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', BehandlingApiKeys.BEHANDLING)
  .withAsyncPost('/fptilbake/api/behandlinger', BehandlingApiKeys.BEHANDLING_TILBAKE)

  // behandlingsdata
  .withRel('soeker-verge', BehandlingApiKeys.VERGE)
  .withRel('simuleringResultat', BehandlingApiKeys.SIMULERING_RESULTAT)
  .withRel('tilbakekrevingvalg', BehandlingApiKeys.TILBAKEKREVINGVALG)
  .withRel('familiehendelse-v2', BehandlingApiKeys.FAMILIEHENDELSE)
  .withRel('beregningsgrunnlag', BehandlingApiKeys.BEREGNINGSGRUNNLAG)
  .withRel('feriepengegrunnlag', BehandlingApiKeys.FERIEPENGEGRUNNLAG)
  .withRel('beregningsresultat-foreldrepenger', BehandlingApiKeys.BEREGNINGRESULTAT_FORELDREPENGER)
  .withRel(
    'beregningsresultat-foreldrepenger-original-behandling',
    BehandlingApiKeys.BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING,
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

export const restBehandlingApiHooks = RestApiHooks.initHooks(requestBehandlingApi);
