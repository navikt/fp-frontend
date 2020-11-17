import { RestApiConfigBuilder, createRequestApi } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';

// eslint-disable-next-line no-shadow
export enum SvpBehandlingApiKeys {
  BEHANDLING_SVP = 'BEHANDLING_SVP',
  UPDATE_ON_HOLD = 'UPDATE_ON_HOLD',
  SAVE_AKSJONSPUNKT = 'SAVE_AKSJONSPUNKT',
  SAVE_OVERSTYRT_AKSJONSPUNKT = 'SAVE_OVERSTYRT_AKSJONSPUNKT',
  PREVIEW_MESSAGE = 'PREVIEW_MESSAGE',
  PREVIEW_TILBAKEKREVING_MESSAGE = 'PREVIEW_TILBAKEKREVING_MESSAGE',
  AKSJONSPUNKTER = 'AKSJONSPUNKTER',
  VILKAR = 'VILKAR',
  PERSONOPPLYSNINGER = 'PERSONOPPLYSNINGER',
  SIMULERING_RESULTAT = 'SIMULERING_RESULTAT',
  TILBAKEKREVINGVALG = 'TILBAKEKREVINGVALG',
  BEREGNINGRESULTAT_FORELDREPENGER = 'BEREGNINGRESULTAT_FORELDREPENGER',
  BEREGNINGSGRUNNLAG = 'BEREGNINGSGRUNNLAG',
  FAMILIEHENDELSE = 'FAMILIEHENDELSE',
  SOKNAD = 'SOKNAD',
  BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING = 'BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING',
  MEDLEMSKAP = 'MEDLEMSKAP',
  UTTAK_PERIODE_GRENSE = 'UTTAK_PERIODE_GRENSE',
  INNTEKT_ARBEID_YTELSE = 'INNTEKT_ARBEID_YTELSE',
  VERGE = 'VERGE',
  YTELSEFORDELING = 'YTELSEFORDELING',
  OPPTJENING = 'OPPTJENING',
  SEND_VARSEL_OM_REVURDERING = 'SEND_VARSEL_OM_REVURDERING',
  SVANGERSKAPSPENGER_TILRETTELEGGING = 'SVANGERSKAPSPENGER_TILRETTELEGGING',
  BEHANDLING_NY_BEHANDLENDE_ENHET = 'BEHANDLING_NY_BEHANDLENDE_ENHET',
  HENLEGG_BEHANDLING = 'HENLEGG_BEHANDLING',
  RESUME_BEHANDLING = 'RESUME_BEHANDLING',
  BEHANDLING_ON_HOLD = 'BEHANDLING_ON_HOLD',
  OPEN_BEHANDLING_FOR_CHANGES = 'OPEN_BEHANDLING_FOR_CHANGES',
  VERGE_OPPRETT = 'VERGE_OPPRETT',
  VERGE_FJERN = 'VERGE_FJERN',
  UTLAND_DOK_STATUS = 'UTLAND_DOK_STATUS',
  ARBEIDSGIVERE_OVERSIKT = 'ARBEIDSGIVERE_OVERSIKT',
}

const endpoints = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', SvpBehandlingApiKeys.BEHANDLING_SVP)

  // behandlingsdata
  .withRel('aksjonspunkter', SvpBehandlingApiKeys.AKSJONSPUNKTER)
  .withRel('vilkar', SvpBehandlingApiKeys.VILKAR)
  .withRel('soeker-personopplysninger', SvpBehandlingApiKeys.PERSONOPPLYSNINGER)
  .withRel('simuleringResultat', SvpBehandlingApiKeys.SIMULERING_RESULTAT)
  .withRel('tilbakekrevingvalg', SvpBehandlingApiKeys.TILBAKEKREVINGVALG)
  .withRel('beregningsresultat-foreldrepenger', SvpBehandlingApiKeys.BEREGNINGRESULTAT_FORELDREPENGER)
  .withRel('beregningsgrunnlag', SvpBehandlingApiKeys.BEREGNINGSGRUNNLAG)
  .withRel('familiehendelse-v2', SvpBehandlingApiKeys.FAMILIEHENDELSE)
  .withRel('soknad', SvpBehandlingApiKeys.SOKNAD)
  .withRel('beregningsresultat-foreldrepenger-original-behandling', SvpBehandlingApiKeys.BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING)
  .withRel('soeker-medlemskap-v2', SvpBehandlingApiKeys.MEDLEMSKAP)
  .withRel('uttak-periode-grense', SvpBehandlingApiKeys.UTTAK_PERIODE_GRENSE)
  .withRel('inntekt-arbeid-ytelse', SvpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE)
  .withRel('soeker-verge', SvpBehandlingApiKeys.VERGE)
  .withRel('ytelsefordeling', SvpBehandlingApiKeys.YTELSEFORDELING)
  .withRel('opptjening', SvpBehandlingApiKeys.OPPTJENING)
  .withRel('sendt-varsel-om-revurdering', SvpBehandlingApiKeys.SEND_VARSEL_OM_REVURDERING)
  .withRel('svangerskapspenger-tilrettelegging', SvpBehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING)
  .withRel('utland-dok-status', SvpBehandlingApiKeys.UTLAND_DOK_STATUS)
  .withRel('arbeidsgivere-oversikt', SvpBehandlingApiKeys.ARBEIDSGIVERE_OVERSIKT)

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
