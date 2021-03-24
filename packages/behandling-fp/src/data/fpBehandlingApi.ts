import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerWrapper, Behandling, Beregningsgrunnlag, BeregningsresultatFp, FaktaArbeidsforhold,
  FamilieHendelse, FamilieHendelseSamling, Feriepengegrunnlag, InntektArbeidYtelse, Kodeverk, Medlemskap, Opptjening, Personoversikt,
  SimuleringResultat, Soknad, TilbakekrevingValg, UttakKontrollerAktivitetskrav, UttakKontrollerFaktaPerioderWrapper, UttakPeriodeGrense,
  UttaksresultatPeriode, UttakStonadskontoer, Verge, Vilkar, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { NyBehandlendeEnhetParams, SettPaVentParams } from '@fpsak-frontend/behandling-felles';

type StonadskontoGittUttaksPerioderParams = {
  behandlingId: {
    saksnummer: string;
    behandlingId: number;
  };
  perioder: any;
}

export const FpBehandlingApiKeys = {
  BEHANDLING_FP: new RestKey<Behandling, { behandlingId: number }>('BEHANDLING_FP'),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
  SAVE_OVERSTYRT_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_OVERSTYRT_AKSJONSPUNKT'),
  PREVIEW_MESSAGE: new RestKey<any, any>('PREVIEW_MESSAGE'),
  PREVIEW_TILBAKEKREVING_MESSAGE: new RestKey<Behandling, any>('PREVIEW_TILBAKEKREVING_MESSAGE'),
  STONADSKONTOER_GITT_UTTAKSPERIODER: new RestKey<void, StonadskontoGittUttaksPerioderParams>('STONADSKONTOER_GITT_UTTAKSPERIODER'),
  AKSJONSPUNKTER: new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER'),
  VILKAR: new RestKey<Vilkar[], void>('VILKAR'),
  SIMULERING_RESULTAT: new RestKey<SimuleringResultat, void>('SIMULERING_RESULTAT'),
  TILBAKEKREVINGVALG: new RestKey<TilbakekrevingValg, void>('TILBAKEKREVINGVALG'),
  BEREGNINGRESULTAT_FORELDREPENGER: new RestKey<{ 'beregningsresultat-foreldrepenger'?: BeregningsresultatFp; }, void>('BEREGNINGRESULTAT_FORELDREPENGER'),
  BEREGNINGSGRUNNLAG: new RestKey<Beregningsgrunnlag, void>('BEREGNINGSGRUNNLAG'),
  FERIEPENGEGRUNNLAG: new RestKey<Feriepengegrunnlag, void>('FERIEPENGEGRUNNLAG'),
  FAMILIEHENDELSE: new RestKey<FamilieHendelseSamling, void>('FAMILIEHENDELSE'),
  SOKNAD: new RestKey<Soknad, void>('SOKNAD'),
  SOKNAD_ORIGINAL_BEHANDLING: new RestKey<Soknad, void>('SOKNAD_ORIGINAL_BEHANDLING'),
  FAMILIEHENDELSE_ORIGINAL_BEHANDLING: new RestKey<FamilieHendelse, void>('FAMILIEHENDELSE_ORIGINAL_BEHANDLING'),
  BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING: new RestKey<{ 'beregningsresultat-foreldrepenger'?: BeregningsresultatFp; },
    void>('BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING'),
  MEDLEMSKAP: new RestKey<Medlemskap, void>('MEDLEMSKAP'),
  UTTAK_PERIODE_GRENSE: new RestKey<UttakPeriodeGrense, void>('UTTAK_PERIODE_GRENSE'),
  INNTEKT_ARBEID_YTELSE: new RestKey<InntektArbeidYtelse, void>('INNTEKT_ARBEID_YTELSE'),
  VERGE: new RestKey<Verge, void>('VERGE'),
  YTELSEFORDELING: new RestKey<Ytelsefordeling, void>('YTELSEFORDELING'),
  OPPTJENING: new RestKey<Opptjening, void>('OPPTJENING'),
  FAKTA_ARBEIDSFORHOLD: new RestKey<FaktaArbeidsforhold[], void>('FAKTA_ARBEIDSFORHOLD'),
  UTTAKSRESULTAT_PERIODER: new RestKey<UttaksresultatPeriode, void>('UTTAKSRESULTAT_PERIODER'),
  UTTAK_STONADSKONTOER: new RestKey<UttakStonadskontoer, void>('UTTAK_STONADSKONTOER'),
  UTTAK_KONTROLLER_FAKTA_PERIODER: new RestKey<UttakKontrollerFaktaPerioderWrapper, void>('UTTAK_KONTROLLER_FAKTA_PERIODER'),
  BEHANDLING_NY_BEHANDLENDE_ENHET: new RestKey<void, NyBehandlendeEnhetParams>('BEHANDLING_NY_BEHANDLENDE_ENHET'),
  HENLEGG_BEHANDLING: new RestKey<void, { behandlingId: number, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>('HENLEGG_BEHANDLING'),
  RESUME_BEHANDLING: new RestKey<Behandling, { behandlingId: number, behandlingVersjon: number }>('RESUME_BEHANDLING'),
  BEHANDLING_ON_HOLD: new RestKey<void, { behandlingId: number, behandlingVersjon: number, frist: string, ventearsak: Kodeverk }>('BEHANDLING_ON_HOLD'),
  OPEN_BEHANDLING_FOR_CHANGES: new RestKey<Behandling, { behandlingId: number, behandlingVersjon: number }>('OPEN_BEHANDLING_FOR_CHANGES'),
  VERGE_OPPRETT: new RestKey<Behandling, any>('VERGE_OPPRETT'),
  VERGE_FJERN: new RestKey<Behandling, any>('VERGE_FJERN'),
  UTLAND_DOK_STATUS: new RestKey<{ dokStatus: string }, void>('UTLAND_DOK_STATUS'),
  ARBEIDSGIVERE_OVERSIKT: new RestKey<ArbeidsgiverOpplysningerWrapper, void>('ARBEIDSGIVERE_OVERSIKT'),
  UTTAK_KONTROLLER_AKTIVITETSKRAV: new RestKey<UttakKontrollerAktivitetskrav[], void>('UTTAK_KONTROLLER_AKTIVITETSKRAV'),
  BEHANDLING_PERSONOVERSIKT: new RestKey<Personoversikt, void>('BEHANDLING_PERSONOVERSIKT'),
};

const endpoints = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', FpBehandlingApiKeys.BEHANDLING_FP)

  // behandlingsdata
  .withRel('aksjonspunkter', FpBehandlingApiKeys.AKSJONSPUNKTER)
  .withRel('vilkar', FpBehandlingApiKeys.VILKAR)
  .withRel('simuleringResultat', FpBehandlingApiKeys.SIMULERING_RESULTAT)
  .withRel('tilbakekrevingvalg', FpBehandlingApiKeys.TILBAKEKREVINGVALG)
  .withRel('beregningsresultat-foreldrepenger', FpBehandlingApiKeys.BEREGNINGRESULTAT_FORELDREPENGER)
  .withRel('beregningsgrunnlag', FpBehandlingApiKeys.BEREGNINGSGRUNNLAG)
  .withRel('feriepengegrunnlag', FpBehandlingApiKeys.FERIEPENGEGRUNNLAG)
  .withRel('familiehendelse-v2', FpBehandlingApiKeys.FAMILIEHENDELSE)
  .withRel('soknad', FpBehandlingApiKeys.SOKNAD)
  .withRel('soknad-original-behandling', FpBehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING)
  .withRel('familiehendelse-original-behandling', FpBehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING)
  .withRel('beregningsresultat-foreldrepenger-original-behandling', FpBehandlingApiKeys.BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING)
  .withRel('soeker-medlemskap-v2', FpBehandlingApiKeys.MEDLEMSKAP)
  .withRel('uttak-periode-grense', FpBehandlingApiKeys.UTTAK_PERIODE_GRENSE)
  .withRel('inntekt-arbeid-ytelse', FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE)
  .withRel('soeker-verge', FpBehandlingApiKeys.VERGE)
  .withRel('ytelsefordeling', FpBehandlingApiKeys.YTELSEFORDELING)
  .withRel('opptjening', FpBehandlingApiKeys.OPPTJENING)
  .withRel('fakta-arbeidsforhold', FpBehandlingApiKeys.FAKTA_ARBEIDSFORHOLD)
  .withRel('uttaksresultat-perioder', FpBehandlingApiKeys.UTTAKSRESULTAT_PERIODER)
  .withRel('uttak-stonadskontoer', FpBehandlingApiKeys.UTTAK_STONADSKONTOER)
  .withRel('uttak-kontroller-fakta-perioder', FpBehandlingApiKeys.UTTAK_KONTROLLER_FAKTA_PERIODER)
  .withRel('utland-dok-status', FpBehandlingApiKeys.UTLAND_DOK_STATUS)
  .withRel('arbeidsgivere-oversikt', FpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT)
  .withRel('uttak-kontroller-aktivitetskrav', FpBehandlingApiKeys.UTTAK_KONTROLLER_AKTIVITETSKRAV)
  .withRel('behandling-personoversikt', FpBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT)

  // operasjoner
  .withRel('lagre-stonadskontoer-gitt-uttaksperioder', FpBehandlingApiKeys.STONADSKONTOER_GITT_UTTAKSPERIODER)
  .withRel('bytt-behandlende-enhet', FpBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET)
  .withRel('henlegg-behandling', FpBehandlingApiKeys.HENLEGG_BEHANDLING)
  .withRel('gjenoppta-behandling', FpBehandlingApiKeys.RESUME_BEHANDLING)
  .withRel('sett-behandling-pa-vent', FpBehandlingApiKeys.BEHANDLING_ON_HOLD)
  .withRel('endre-pa-vent', FpBehandlingApiKeys.UPDATE_ON_HOLD)
  .withRel('opne-for-endringer', FpBehandlingApiKeys.OPEN_BEHANDLING_FOR_CHANGES)
  .withRel('lagre-aksjonspunkter', FpBehandlingApiKeys.SAVE_AKSJONSPUNKT)
  .withRel('lagre-overstyr-aksjonspunkter', FpBehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT)
  .withRel('opprett-verge', FpBehandlingApiKeys.VERGE_OPPRETT)
  .withRel('fjern-verge', FpBehandlingApiKeys.VERGE_FJERN)

  /* FPTILBAKE */
  .withPost('/fptilbake/api/dokument/forhandsvis-varselbrev', FpBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE, { isResponseBlob: true })

  /* FPFORMIDLING */
  .withPost('/fpformidling/api/brev/forhaandsvis', FpBehandlingApiKeys.PREVIEW_MESSAGE, { isResponseBlob: true })

  .build();

export const requestFpApi = createRequestApi(endpoints);

export const restApiFpHooks = RestApiHooks.initHooks(requestFpApi);
