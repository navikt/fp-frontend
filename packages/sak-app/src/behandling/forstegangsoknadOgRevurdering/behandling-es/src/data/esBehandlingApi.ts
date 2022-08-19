import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerWrapper, Behandling, BeregningsresultatEs, FamilieHendelse,
  FamilieHendelseSamling, ForhåndsvisMeldingParams, InntektArbeidYtelse, Medlemskap, Personoversikt,
  SimuleringResultat, Soknad, TilbakekrevingValg, Verge, Vilkar,
} from '@fpsak-frontend/types';
import { NyBehandlendeEnhetParams, SettPaVentParams } from '@fpsak-frontend/behandling-felles';

export const EsBehandlingApiKeys = {
  BEHANDLING_ES: new RestKey<Behandling, { behandlingUuid: string }>('BEHANDLING_ES'),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
  SAVE_OVERSTYRT_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_OVERSTYRT_AKSJONSPUNKT'),
  PREVIEW_MESSAGE: new RestKey<any, ForhåndsvisMeldingParams>('PREVIEW_MESSAGE'),
  PREVIEW_TILBAKEKREVING_MESSAGE: new RestKey<Behandling, any>('PREVIEW_TILBAKEKREVING_MESSAGE'),
  AKSJONSPUNKTER: new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER'),
  VILKAR: new RestKey<Vilkar[], void>('VILKAR'),
  SIMULERING_RESULTAT: new RestKey<SimuleringResultat, void>('SIMULERING_RESULTAT'),
  TILBAKEKREVINGVALG: new RestKey<TilbakekrevingValg, void>('TILBAKEKREVINGVALG'),
  BEREGNINGRESULTAT_ENGANGSSTONAD: new RestKey<BeregningsresultatEs, void>('BEREGNINGRESULTAT_ENGANGSSTONAD'),
  FAMILIEHENDELSE: new RestKey<FamilieHendelseSamling, void>('FAMILIEHENDELSE'),
  SOKNAD: new RestKey<Soknad, void>('SOKNAD'),
  SOKNAD_ORIGINAL_BEHANDLING: new RestKey<Soknad, void>('SOKNAD_ORIGINAL_BEHANDLING'),
  FAMILIEHENDELSE_ORIGINAL_BEHANDLING: new RestKey<FamilieHendelse, void>('FAMILIEHENDELSE_ORIGINAL_BEHANDLING'),
  BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING: new RestKey<{'beregningsresultat-engangsstonad'?: BeregningsresultatEs; },
    void>('BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING'),
  MEDLEMSKAP: new RestKey<Medlemskap, void>('MEDLEMSKAP'),
  INNTEKT_ARBEID_YTELSE: new RestKey<InntektArbeidYtelse, void>('INNTEKT_ARBEID_YTELSE'),
  VERGE: new RestKey<Verge, void>('VERGE'),
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
};

const endpoints = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', EsBehandlingApiKeys.BEHANDLING_ES)

  // behandlingsdata
  .withRel('aksjonspunkter', EsBehandlingApiKeys.AKSJONSPUNKTER)
  .withRel('vilkar', EsBehandlingApiKeys.VILKAR)
  .withRel('simuleringResultat', EsBehandlingApiKeys.SIMULERING_RESULTAT)
  .withRel('tilbakekrevingvalg', EsBehandlingApiKeys.TILBAKEKREVINGVALG)
  .withRel('beregningsresultat-engangsstonad', EsBehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD)
  .withRel('familiehendelse-v2', EsBehandlingApiKeys.FAMILIEHENDELSE)
  .withRel('soknad', EsBehandlingApiKeys.SOKNAD)
  .withRel('soknad-original-behandling', EsBehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING)
  .withRel('familiehendelse-original-behandling', EsBehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING)
  .withRel('beregningsresultat-engangsstonad-original-behandling', EsBehandlingApiKeys.BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING)
  .withRel('soeker-medlemskap-v2', EsBehandlingApiKeys.MEDLEMSKAP)
  .withRel('inntekt-arbeid-ytelse', EsBehandlingApiKeys.INNTEKT_ARBEID_YTELSE)
  .withRel('soeker-verge', EsBehandlingApiKeys.VERGE)
  .withRel('utland-dok-status', EsBehandlingApiKeys.UTLAND_DOK_STATUS)
  .withRel('arbeidsgivere-oversikt', EsBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT)
  .withRel('behandling-personoversikt', EsBehandlingApiKeys.BEHANDLING_PERSONOVERSIKT)

  // operasjoner
  .withRel('bytt-behandlende-enhet', EsBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET)
  .withRel('henlegg-behandling', EsBehandlingApiKeys.HENLEGG_BEHANDLING)
  .withRel('gjenoppta-behandling', EsBehandlingApiKeys.RESUME_BEHANDLING)
  .withRel('sett-behandling-pa-vent', EsBehandlingApiKeys.BEHANDLING_ON_HOLD)
  .withRel('endre-pa-vent', EsBehandlingApiKeys.UPDATE_ON_HOLD)
  .withRel('opne-for-endringer', EsBehandlingApiKeys.OPEN_BEHANDLING_FOR_CHANGES)
  .withRel('lagre-aksjonspunkter', EsBehandlingApiKeys.SAVE_AKSJONSPUNKT)
  .withRel('lagre-overstyr-aksjonspunkter', EsBehandlingApiKeys.SAVE_OVERSTYRT_AKSJONSPUNKT)
  .withRel('opprett-verge', EsBehandlingApiKeys.VERGE_OPPRETT)
  .withRel('fjern-verge', EsBehandlingApiKeys.VERGE_FJERN)

  /* FPTILBAKE */
  .withPost('/fptilbake/api/dokument/forhandsvis-varselbrev', EsBehandlingApiKeys.PREVIEW_TILBAKEKREVING_MESSAGE, { isResponseBlob: true })

  /* FPFORMIDLING */
  .withPost('/fpformidling/api/brev/forhaandsvis', EsBehandlingApiKeys.PREVIEW_MESSAGE, { isResponseBlob: true })

  .build();

export const requestEsApi = createRequestApi(endpoints);

export const restApiEsHooks = RestApiHooks.initHooks(requestEsApi);
