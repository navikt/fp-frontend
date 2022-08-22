import {
  FamilieHendelse, FamilieHendelseSamling, Aksjonspunkt, Behandling,
} from '@navikt/ft-types';

import { RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';
import {
  ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerWrapper, Beregningsgrunnlag, BeregningsresultatFp, Feriepengegrunnlag,
  ForhåndsvisMeldingParams, InntektArbeidYtelse, ManglendeInntektsmeldingVurdering, ManueltArbeidsforhold,
  Medlemskap, Opptjening, Personoversikt, SimuleringResultat, Soknad, TilbakekrevingValg, Verge, Vilkar, Ytelsefordeling,
} from '@fpsak-frontend/types';

import { SettPaVentParams } from '../components/modaler/paVent/BehandlingPaVent';

type NyBehandlendeEnhet = {
  behandlingUuid: string,
  enhetNavn: string,
  enhetId: string,
  begrunnelse: string,
  behandlingVersjon: string,
}

export const BehandlingFellesApiKeys = {
  BEHANDLING: new RestKey<Behandling, { behandlingUuid: string }>('BEHANDLING'),
  AKSJONSPUNKTER: new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER'),
  VILKAR: new RestKey<Vilkar[], void>('VILKAR'),
  VERGE: new RestKey<Verge, void>('VERGE'),
  BEREGNINGSGRUNNLAG: new RestKey<Beregningsgrunnlag, void>('BEREGNINGSGRUNNLAG'),
  FERIEPENGEGRUNNLAG: new RestKey<Feriepengegrunnlag, void>('FERIEPENGEGRUNNLAG'),
  FAMILIEHENDELSE: new RestKey<FamilieHendelseSamling, void>('FAMILIEHENDELSE'),
  SOKNAD: new RestKey<Soknad, void>('SOKNAD'),
  SOKNAD_ORIGINAL_BEHANDLING: new RestKey<Soknad, void>('SOKNAD_ORIGINAL_BEHANDLING'),
  YTELSEFORDELING: new RestKey<Ytelsefordeling, void>('YTELSEFORDELING'),
  OPPTJENING: new RestKey<Opptjening, void>('OPPTJENING'),
  BEREGNINGRESULTAT_FORELDREPENGER: new RestKey<{ 'beregningsresultat-foreldrepenger'?: BeregningsresultatFp; }, void>('BEREGNINGRESULTAT_FORELDREPENGER'),
  BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING: new RestKey<{ 'beregningsresultat-foreldrepenger'?: BeregningsresultatFp; },
    void>('BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING'),
  FAMILIEHENDELSE_ORIGINAL_BEHANDLING: new RestKey<FamilieHendelse, void>('FAMILIEHENDELSE_ORIGINAL_BEHANDLING'),
  MEDLEMSKAP: new RestKey<Medlemskap, void>('MEDLEMSKAP'),
  INNTEKT_ARBEID_YTELSE: new RestKey<InntektArbeidYtelse, void>('INNTEKT_ARBEID_YTELSE'),
  SIMULERING_RESULTAT: new RestKey<SimuleringResultat, void>('SIMULERING_RESULTAT'),
  TILBAKEKREVINGVALG: new RestKey<TilbakekrevingValg, void>('TILBAKEKREVINGVALG'),
  BEHANDLING_NY_BEHANDLENDE_ENHET: new RestKey<void, NyBehandlendeEnhet>('BEHANDLING_NY_BEHANDLENDE_ENHET'),
  HENLEGG_BEHANDLING: new RestKey<void, { behandlingUuid: string, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>('HENLEGG_BEHANDLING'),
  RESUME_BEHANDLING: new RestKey<Behandling, { behandlingUuid: string, behandlingVersjon: number }>('RESUME_BEHANDLING'),
  BEHANDLING_ON_HOLD: new RestKey<void, { behandlingUuid: string, behandlingVersjon: number, frist: string, ventearsak: string }>('BEHANDLING_ON_HOLD'),
  OPEN_BEHANDLING_FOR_CHANGES: new RestKey<Behandling, { behandlingUuid: string, behandlingVersjon: number }>('OPEN_BEHANDLING_FOR_CHANGES'),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
  SAVE_OVERSTYRT_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_OVERSTYRT_AKSJONSPUNKT'),
  PREVIEW_MESSAGE: new RestKey<any, ForhåndsvisMeldingParams>('PREVIEW_MESSAGE'),
  PREVIEW_TILBAKEKREVING_MESSAGE: new RestKey<Behandling, any>('PREVIEW_TILBAKEKREVING_MESSAGE'),
  VERGE_OPPRETT: new RestKey<Behandling, any>('VERGE_OPPRETT'),
  VERGE_FJERN: new RestKey<Behandling, any>('VERGE_FJERN'),
  UTLAND_DOK_STATUS: new RestKey<{ dokStatus: string }, void>('UTLAND_DOK_STATUS'),
  ARBEIDSGIVERE_OVERSIKT: new RestKey<ArbeidsgiverOpplysningerWrapper, void>('ARBEIDSGIVERE_OVERSIKT'),
  BEHANDLING_PERSONOVERSIKT: new RestKey<Personoversikt, void>('BEHANDLING_PERSONOVERSIKT'),
  ARBEID_OG_INNTEKT: new RestKey<ArbeidOgInntektsmelding, void>('ARBEID_OG_INNTEKT'),
  ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD: new RestKey<void, ManueltArbeidsforhold>('ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD'),
  ARBEID_OG_INNTEKT_LAGRE_VURDERING: new RestKey<void, ManglendeInntektsmeldingVurdering>('ARBEID_OG_INNTEKT_LAGRE_VURDERING'),
  ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING: new RestKey<void, { behandlingUuid: string, behandlingVersjon: number }>('ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING'),
};

export const behandlingFellesEndepunkter = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', BehandlingFellesApiKeys.BEHANDLING)

  // behandlingsdata
  .withRel('aksjonspunkter', BehandlingFellesApiKeys.AKSJONSPUNKTER)
  .withRel('vilkar', BehandlingFellesApiKeys.VILKAR)
  .withRel('soeker-verge', BehandlingFellesApiKeys.VERGE)
  .withRel('simuleringResultat', BehandlingFellesApiKeys.SIMULERING_RESULTAT)
  .withRel('tilbakekrevingvalg', BehandlingFellesApiKeys.TILBAKEKREVINGVALG)
  .withRel('familiehendelse-v2', BehandlingFellesApiKeys.FAMILIEHENDELSE)
  .withRel('beregningsgrunnlag', BehandlingFellesApiKeys.BEREGNINGSGRUNNLAG)
  .withRel('feriepengegrunnlag', BehandlingFellesApiKeys.FERIEPENGEGRUNNLAG)
  .withRel('beregningsresultat-foreldrepenger', BehandlingFellesApiKeys.BEREGNINGRESULTAT_FORELDREPENGER)
  .withRel('beregningsresultat-foreldrepenger-original-behandling', BehandlingFellesApiKeys.BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING)
  .withRel('soknad', BehandlingFellesApiKeys.SOKNAD)
  .withRel('soknad-original-behandling', BehandlingFellesApiKeys.SOKNAD_ORIGINAL_BEHANDLING)
  .withRel('familiehendelse-original-behandling', BehandlingFellesApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING)
  .withRel('soeker-medlemskap-v2', BehandlingFellesApiKeys.MEDLEMSKAP)
  .withRel('inntekt-arbeid-ytelse', BehandlingFellesApiKeys.INNTEKT_ARBEID_YTELSE)
  .withRel('soeker-verge', BehandlingFellesApiKeys.VERGE)
  .withRel('ytelsefordeling', BehandlingFellesApiKeys.YTELSEFORDELING)
  .withRel('opptjening', BehandlingFellesApiKeys.OPPTJENING)
  .withRel('utland-dok-status', BehandlingFellesApiKeys.UTLAND_DOK_STATUS)
  .withRel('arbeidsgivere-oversikt', BehandlingFellesApiKeys.ARBEIDSGIVERE_OVERSIKT)
  .withRel('behandling-personoversikt', BehandlingFellesApiKeys.BEHANDLING_PERSONOVERSIKT)
  .withRel('arbeidsforhold-inntektsmelding', BehandlingFellesApiKeys.ARBEID_OG_INNTEKT)

  // operasjoner
  .withRel('bytt-behandlende-enhet', BehandlingFellesApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET)
  .withRel('henlegg-behandling', BehandlingFellesApiKeys.HENLEGG_BEHANDLING)
  .withRel('gjenoppta-behandling', BehandlingFellesApiKeys.RESUME_BEHANDLING)
  .withRel('sett-behandling-pa-vent', BehandlingFellesApiKeys.BEHANDLING_ON_HOLD)
  .withRel('endre-pa-vent', BehandlingFellesApiKeys.UPDATE_ON_HOLD)
  .withRel('opne-for-endringer', BehandlingFellesApiKeys.OPEN_BEHANDLING_FOR_CHANGES)
  .withRel('lagre-aksjonspunkter', BehandlingFellesApiKeys.SAVE_AKSJONSPUNKT)
  .withRel('opprett-verge', BehandlingFellesApiKeys.VERGE_OPPRETT)
  .withRel('fjern-verge', BehandlingFellesApiKeys.VERGE_FJERN)
  .withRel('arbeidsforhold-inntektsmelding-registrer', BehandlingFellesApiKeys.ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD)
  .withRel('arbeidsforhold-inntektsmelding-vurder', BehandlingFellesApiKeys.ARBEID_OG_INNTEKT_LAGRE_VURDERING)
  .withRel('arbeidsforhold-inntektsmelding-apne-for-ny-vurdering', BehandlingFellesApiKeys.ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING)

  /* FPTILBAKE */
  .withPost('/fptilbake/api/dokument/forhandsvis-varselbrev', BehandlingFellesApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE, { isResponseBlob: true })

  /* FPFORMIDLING */
  .withPost('/fpformidling/api/brev/forhaandsvis', BehandlingFellesApiKeys.PREVIEW_MESSAGE, { isResponseBlob: true })

  /* FPFORMIDLING */
  .withPost('/fpformidling/api/brev/forhaandsvis', BehandlingFellesApiKeys.PREVIEW_MESSAGE, { isResponseBlob: true })

  .build();
