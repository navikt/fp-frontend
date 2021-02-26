import { RestApiConfigBuilder, createRequestApi } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';

export enum EsBehandlingApiKeys {
  BEHANDLING_ES = 'BEHANDLING_ES',
  UPDATE_ON_HOLD = 'UPDATE_ON_HOLD',
  SAVE_AKSJONSPUNKT = 'SAVE_AKSJONSPUNKT',
  SAVE_OVERSTYRT_AKSJONSPUNKT = 'SAVE_OVERSTYRT_AKSJONSPUNKT',
  PREVIEW_MESSAGE = 'PREVIEW_MESSAGE',
  PREVIEW_TILBAKEKREVING_MESSAGE = 'PREVIEW_TILBAKEKREVING_MESSAGE',
  AKSJONSPUNKTER = 'AKSJONSPUNKTER',
  VILKAR = 'VILKAR',
  SIMULERING_RESULTAT = 'SIMULERING_RESULTAT',
  TILBAKEKREVINGVALG = 'TILBAKEKREVINGVALG',
  BEREGNINGRESULTAT_ENGANGSSTONAD = 'BEREGNINGRESULTAT_ENGANGSSTONAD',
  FAMILIEHENDELSE = 'FAMILIEHENDELSE',
  SOKNAD = 'SOKNAD',
  SOKNAD_ORIGINAL_BEHANDLING = 'SOKNAD_ORIGINAL_BEHANDLING',
  FAMILIEHENDELSE_ORIGINAL_BEHANDLING = 'FAMILIEHENDELSE_ORIGINAL_BEHANDLING',
  BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING = 'BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING',
  MEDLEMSKAP = 'MEDLEMSKAP',
  INNTEKT_ARBEID_YTELSE = 'INNTEKT_ARBEID_YTELSE',
  VERGE = 'VERGE',
  SEND_VARSEL_OM_REVURDERING = 'SEND_VARSEL_OM_REVURDERING',
  BEHANDLING_NY_BEHANDLENDE_ENHET = 'BEHANDLING_NY_BEHANDLENDE_ENHET',
  HENLEGG_BEHANDLING = 'HENLEGG_BEHANDLING',
  RESUME_BEHANDLING = 'RESUME_BEHANDLING',
  BEHANDLING_ON_HOLD = 'BEHANDLING_ON_HOLD',
  OPEN_BEHANDLING_FOR_CHANGES = 'OPEN_BEHANDLING_FOR_CHANGES',
  VERGE_OPPRETT = 'VERGE_OPPRETT',
  VERGE_FJERN = 'VERGE_FJERN',
  UTLAND_DOK_STATUS = 'UTLAND_DOK_STATUS',
  ARBEIDSGIVERE_OVERSIKT = 'ARBEIDSGIVERE_OVERSIKT',
  BEHANDLING_PERSONOVERSIKT = 'BEHANDLING_PERSONOVERSIKT',
}

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
  .withRel('sendt-varsel-om-revurdering', EsBehandlingApiKeys.SEND_VARSEL_OM_REVURDERING)
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
