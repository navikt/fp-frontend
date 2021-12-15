import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerWrapper, Behandling, Beregningsgrunnlag, BeregningsresultatFp, FamilieHendelseSamling,
  Feriepengegrunnlag, FodselOgTilrettelegging, ForhåndsvisMeldingParams, InntektArbeidYtelse, Medlemskap, Opptjening, Personoversikt,
  SimuleringResultat, Soknad, TilbakekrevingValg, UttakPeriodeGrense, Verge, Vilkar, Ytelsefordeling, ArbeidOgInntektsmelding,
} from '@fpsak-frontend/types';
import { NyBehandlendeEnhetParams, SettPaVentParams } from '@fpsak-frontend/behandling-felles';

export const SvpBehandlingApiKeys = {
  BEHANDLING_SVP: new RestKey<Behandling, { behandlingUuid: string }>('BEHANDLING_SVP'),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
  SAVE_OVERSTYRT_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_OVERSTYRT_AKSJONSPUNKT'),
  PREVIEW_MESSAGE: new RestKey<any, ForhåndsvisMeldingParams>('PREVIEW_MESSAGE'),
  PREVIEW_TILBAKEKREVING_MESSAGE: new RestKey<Behandling, any>('PREVIEW_TILBAKEKREVING_MESSAGE'),
  AKSJONSPUNKTER: new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER'),
  VILKAR: new RestKey<Vilkar[], void>('VILKAR'),
  SIMULERING_RESULTAT: new RestKey<SimuleringResultat, void>('SIMULERING_RESULTAT'),
  TILBAKEKREVINGVALG: new RestKey<TilbakekrevingValg, void>('TILBAKEKREVINGVALG'),
  BEREGNINGRESULTAT_FORELDREPENGER: new RestKey<{ 'beregningsresultat-foreldrepenger'?: BeregningsresultatFp; }, void>('BEREGNINGRESULTAT_FORELDREPENGER'),
  BEREGNINGSGRUNNLAG: new RestKey<Beregningsgrunnlag, void>('BEREGNINGSGRUNNLAG'),
  FERIEPENGEGRUNNLAG: new RestKey<Feriepengegrunnlag, void>('FERIEPENGEGRUNNLAG'),
  FAMILIEHENDELSE: new RestKey<FamilieHendelseSamling, void>('FAMILIEHENDELSE'),
  SOKNAD: new RestKey<Soknad, void>('SOKNAD'),
  BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING: new RestKey<{'beregningsresultat-foreldrepenger'?: BeregningsresultatFp; },
    void>('BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING'),
  MEDLEMSKAP: new RestKey<Medlemskap, void>('MEDLEMSKAP'),
  UTTAK_PERIODE_GRENSE: new RestKey<UttakPeriodeGrense, void>('UTTAK_PERIODE_GRENSE'),
  INNTEKT_ARBEID_YTELSE: new RestKey<InntektArbeidYtelse, void>('INNTEKT_ARBEID_YTELSE'),
  VERGE: new RestKey<Verge, void>('VERGE'),
  YTELSEFORDELING: new RestKey<Ytelsefordeling, void>('YTELSEFORDELING'),
  OPPTJENING: new RestKey<Opptjening, void>('OPPTJENING'),
  SVANGERSKAPSPENGER_TILRETTELEGGING: new RestKey<FodselOgTilrettelegging, void>('SVANGERSKAPSPENGER_TILRETTELEGGING'),
  BEHANDLING_NY_BEHANDLENDE_ENHET: new RestKey<void, NyBehandlendeEnhetParams>('BEHANDLING_NY_BEHANDLENDE_ENHET'),
  HENLEGG_BEHANDLING: new RestKey<void, { behandlingUuid: string, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>('HENLEGG_BEHANDLING'),
  RESUME_BEHANDLING: new RestKey<Behandling, { behandlingUuid: string, behandlingVersjon: number }>('RESUME_BEHANDLING'),
  BEHANDLING_ON_HOLD: new RestKey<void, { behandlingUuid: string, behandlingVersjon: number, frist: string, ventearsak: string }>('BEHANDLING_ON_HOLD'),
  OPEN_BEHANDLING_FOR_CHANGES: new RestKey<Behandling, { behandlingUuid: string, behandlingVersjon: number }>('OPEN_BEHANDLING_FOR_CHANGES'),
  VERGE_OPPRETT: new RestKey<Behandling, any>('VERGE_OPPRETT'),
  VERGE_FJERN: new RestKey<Behandling, any>('VERGE_FJERN'),
  UTLAND_DOK_STATUS: new RestKey<{ dokStatus: string }, void>('UTLAND_DOK_STATUS'),
  ARBEIDSGIVERE_OVERSIKT: new RestKey<ArbeidsgiverOpplysningerWrapper, void>('ARBEIDSGIVERE_OVERSIKT'),
  BEHANDLING_PERSONOVERSIKT: new RestKey<Personoversikt, void>('BEHANDLING_PERSONOVERSIKT'),
  ARBEID_OG_INNTEKT: new RestKey<ArbeidOgInntektsmelding, void>('ARBEID_OG_INNTEKT'),
};

const endpoints = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', SvpBehandlingApiKeys.BEHANDLING_SVP)

  // behandlingsdata
  .withRel('aksjonspunkter', SvpBehandlingApiKeys.AKSJONSPUNKTER)
  .withRel('vilkar', SvpBehandlingApiKeys.VILKAR)
  .withRel('simuleringResultat', SvpBehandlingApiKeys.SIMULERING_RESULTAT)
  .withRel('tilbakekrevingvalg', SvpBehandlingApiKeys.TILBAKEKREVINGVALG)
  .withRel('beregningsresultat-foreldrepenger', SvpBehandlingApiKeys.BEREGNINGRESULTAT_FORELDREPENGER)
  .withRel('beregningsgrunnlag', SvpBehandlingApiKeys.BEREGNINGSGRUNNLAG)
  .withRel('feriepengegrunnlag', SvpBehandlingApiKeys.FERIEPENGEGRUNNLAG)
  .withRel('familiehendelse-v2', SvpBehandlingApiKeys.FAMILIEHENDELSE)
  .withRel('soknad', SvpBehandlingApiKeys.SOKNAD)
  .withRel('beregningsresultat-foreldrepenger-original-behandling', SvpBehandlingApiKeys.BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING)
  .withRel('soeker-medlemskap-v2', SvpBehandlingApiKeys.MEDLEMSKAP)
  .withRel('uttak-periode-grense', SvpBehandlingApiKeys.UTTAK_PERIODE_GRENSE)
  .withRel('inntekt-arbeid-ytelse', SvpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE)
  .withRel('soeker-verge', SvpBehandlingApiKeys.VERGE)
  .withRel('ytelsefordeling', SvpBehandlingApiKeys.YTELSEFORDELING)
  .withRel('opptjening', SvpBehandlingApiKeys.OPPTJENING)
  .withRel('svangerskapspenger-tilrettelegging', SvpBehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING)
  .withRel('utland-dok-status', SvpBehandlingApiKeys.UTLAND_DOK_STATUS)
  .withRel('arbeidsgivere-oversikt', SvpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT)
  .withRel('behandling-personoversikt', SvpBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT)
  .withRel('arbeidsforhold-inntektsmelding', SvpBehandlingApiKeys.ARBEID_OG_INNTEKT)

  // operasjoner
  .withRel('bytt-behandlende-enhet', SvpBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET)
  .withRel('henlegg-behandling', SvpBehandlingApiKeys.HENLEGG_BEHANDLING)
  .withRel('gjenoppta-behandling', SvpBehandlingApiKeys.RESUME_BEHANDLING)
  .withRel('sett-behandling-pa-vent', SvpBehandlingApiKeys.BEHANDLING_ON_HOLD)
  .withRel('endre-pa-vent', SvpBehandlingApiKeys.UPDATE_ON_HOLD)
  .withRel('opne-for-endringer', SvpBehandlingApiKeys.OPEN_BEHANDLING_FOR_CHANGES)
  .withRel('lagre-aksjonspunkter', SvpBehandlingApiKeys.SAVE_AKSJONSPUNKT)
  .withRel('lagre-overstyr-aksjonspunkter', SvpBehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT)
  .withRel('opprett-verge', SvpBehandlingApiKeys.VERGE_OPPRETT)
  .withRel('fjern-verge', SvpBehandlingApiKeys.VERGE_FJERN)

  /* FPTILBAKE */
  .withPost('/fptilbake/api/dokument/forhandsvis-varselbrev', SvpBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE, { isResponseBlob: true })

  /* FPFORMIDLING */
  .withPost('/fpformidling/api/brev/forhaandsvis', SvpBehandlingApiKeys.PREVIEW_MESSAGE, { isResponseBlob: true })

  .build();

export const requestSvpApi = createRequestApi(endpoints);

export const restApiSvpHooks = RestApiHooks.initHooks(requestSvpApi);
