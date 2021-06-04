import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, Behandling, BeregningsresultatTilbakekreving, DetaljerteFeilutbetalingsperioder, FeilutbetalingAarsak,
  FeilutbetalingFakta, FeilutbetalingPerioderWrapper, Kodeverk, Vedtaksbrev, Verge, VilkarsVurdertePerioderWrapper, AlleKodeverkTilbakekreving,
} from '@fpsak-frontend/types';
import { SettPaVentParams } from '@fpsak-frontend/behandling-felles';

export const TilbakekrevingBehandlingApiKeys = {
  BEHANDLING_TILBAKE: new RestKey<Behandling, { behandlingUuid: string }>('BEHANDLING_TILBAKE'),
  AKSJONSPUNKTER: new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER'),
  VEDTAKSBREV: new RestKey<Vedtaksbrev, void>('VEDTAKSBREV'),
  BEREGNINGSRESULTAT: new RestKey<BeregningsresultatTilbakekreving, void>('BEREGNINGSRESULTAT'),
  FEILUTBETALING_FAKTA: new RestKey<FeilutbetalingFakta, void>('FEILUTBETALING_FAKTA'),
  FEILUTBETALING_AARSAK: new RestKey<FeilutbetalingAarsak[], void>('FEILUTBETALING_AARSAK'),
  PERIODER_FORELDELSE: new RestKey<FeilutbetalingPerioderWrapper, void>('PERIODER_FORELDELSE'),
  VILKARVURDERINGSPERIODER: new RestKey<DetaljerteFeilutbetalingsperioder, void>('VILKARVURDERINGSPERIODER'),
  VILKARVURDERING: new RestKey<VilkarsVurdertePerioderWrapper, void>('VILKARVURDERING'),
  BEHANDLING_NY_BEHANDLENDE_ENHET: new RestKey<void,
    { behandlingUuid: string, enhetNavn: string, enhetId: string, begrunnelse: string, behandlingVersjon: string }>('BEHANDLING_NY_BEHANDLENDE_ENHET'),
  HENLEGG_BEHANDLING: new RestKey<void, { behandlingUuid: string, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>('HENLEGG_BEHANDLING'),
  RESUME_BEHANDLING: new RestKey<Behandling, { behandlingUuid: string, behandlingVersjon: number }>('RESUME_BEHANDLING'),
  BEHANDLING_ON_HOLD: new RestKey<void, { behandlingUuid: string, behandlingVersjon: number, frist: string, ventearsak: Kodeverk }>('BEHANDLING_ON_HOLD'),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
  BEREGNE_BELØP: new RestKey<any, any>('BEREGNE_BELØP'),
  TILBAKE_KODEVERK: new RestKey<AlleKodeverkTilbakekreving, void>('TILBAKE_KODEVERK'),
  PREVIEW_VEDTAKSBREV: new RestKey<any, any>('PREVIEW_VEDTAKSBREV'),
  VERGE: new RestKey<Verge, void>('VERGE'),
  VERGE_OPPRETT: new RestKey<Behandling, any>('VERGE_OPPRETT'),
  VERGE_FJERN: new RestKey<Behandling, any>('VERGE_FJERN'),
};

const endpoints = new RestApiConfigBuilder()
  .withAsyncPost('/fptilbake/api/behandlinger', TilbakekrevingBehandlingApiKeys.BEHANDLING_TILBAKE)
  .withGet('/fptilbake/api/kodeverk', TilbakekrevingBehandlingApiKeys.TILBAKE_KODEVERK)

  // behandlingsdata
  .withRel('aksjonspunkter', TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER)
  .withRel('vedtaksbrev', TilbakekrevingBehandlingApiKeys.VEDTAKSBREV)
  .withRel('beregningsresultat', TilbakekrevingBehandlingApiKeys.BEREGNINGSRESULTAT)
  .withRel('feilutbetalingFakta', TilbakekrevingBehandlingApiKeys.FEILUTBETALING_FAKTA)
  .withRel('feilutbetalingAarsak', TilbakekrevingBehandlingApiKeys.FEILUTBETALING_AARSAK)
  .withRel('perioderForeldelse', TilbakekrevingBehandlingApiKeys.PERIODER_FORELDELSE)
  .withRel('vilkarvurderingsperioder', TilbakekrevingBehandlingApiKeys.VILKARVURDERINGSPERIODER)
  .withRel('vilkarvurdering', TilbakekrevingBehandlingApiKeys.VILKARVURDERING)
  .withRel('soeker-verge', TilbakekrevingBehandlingApiKeys.VERGE)

  // operasjoner
  .withRel('beregne-feilutbetalt-belop', TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP)
  .withRel('bytt-behandlende-enhet', TilbakekrevingBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET)
  .withRel('henlegg-behandling', TilbakekrevingBehandlingApiKeys.HENLEGG_BEHANDLING)
  .withRel('gjenoppta-behandling', TilbakekrevingBehandlingApiKeys.RESUME_BEHANDLING)
  .withRel('sett-behandling-pa-vent', TilbakekrevingBehandlingApiKeys.BEHANDLING_ON_HOLD)
  .withRel('endre-pa-vent', TilbakekrevingBehandlingApiKeys.UPDATE_ON_HOLD)
  .withRel('lagre-aksjonspunkter', TilbakekrevingBehandlingApiKeys.SAVE_AKSJONSPUNKT)
  .withRel('opprett-verge', TilbakekrevingBehandlingApiKeys.VERGE_OPPRETT)
  .withRel('fjern-verge', TilbakekrevingBehandlingApiKeys.VERGE_FJERN)

  /* FPFORMIDLING */
  .withPost('/fptilbake/api/dokument/forhandsvis-vedtaksbrev', TilbakekrevingBehandlingApiKeys.PREVIEW_VEDTAKSBREV, { isResponseBlob: true })

  .build();

export const requestTilbakekrevingApi = createRequestApi(endpoints);

export const restApiTilbakekrevingHooks = RestApiHooks.initHooks(requestTilbakekrevingApi);
