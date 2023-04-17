import { RestApiConfigBuilder, createRequestApi, RestKey } from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import { AlleKodeverkTilbakekreving, Behandling } from '@navikt/fp-types';
import {
  BeregningsresultatTilbakekreving,
  DetaljerteFeilutbetalingsperioder,
  FeilutbetalingAarsak,
  FeilutbetalingFakta,
  FeilutbetalingPerioderWrapper,
  Vedtaksbrev,
  VilkarsVurdertePerioderWrapper,
} from '@navikt/ft-types';

import { behandlingFellesEndepunkter } from '../../felles/data/behandlingFellesApi';

export const TilbakekrevingBehandlingApiKeys = {
  BEHANDLING_TILBAKE: new RestKey<Behandling, { behandlingUuid: string }>('BEHANDLING_TILBAKE'),
  VEDTAKSBREV: new RestKey<Vedtaksbrev, void>('VEDTAKSBREV'),
  BEREGNINGSRESULTAT: new RestKey<BeregningsresultatTilbakekreving, void>('BEREGNINGSRESULTAT'),
  FEILUTBETALING_FAKTA: new RestKey<FeilutbetalingFakta, void>('FEILUTBETALING_FAKTA'),
  FEILUTBETALING_AARSAK: new RestKey<FeilutbetalingAarsak[], void>('FEILUTBETALING_AARSAK'),
  PERIODER_FORELDELSE: new RestKey<FeilutbetalingPerioderWrapper, void>('PERIODER_FORELDELSE'),
  VILKARVURDERINGSPERIODER: new RestKey<DetaljerteFeilutbetalingsperioder, void>('VILKARVURDERINGSPERIODER'),
  VILKARVURDERING: new RestKey<VilkarsVurdertePerioderWrapper, void>('VILKARVURDERING'),
  BEREGNE_BELØP: new RestKey<any, any>('BEREGNE_BELØP'),
  TILBAKE_KODEVERK: new RestKey<AlleKodeverkTilbakekreving, void>('TILBAKE_KODEVERK'),
  PREVIEW_VEDTAKSBREV: new RestKey<any, any>('PREVIEW_VEDTAKSBREV'),
};

const endepunkter = new RestApiConfigBuilder()
  .withAsyncPost('/fptilbake/api/behandlinger', TilbakekrevingBehandlingApiKeys.BEHANDLING_TILBAKE)
  .withGet('/fptilbake/api/kodeverk', TilbakekrevingBehandlingApiKeys.TILBAKE_KODEVERK)

  // behandlingsdata
  .withRel('vedtaksbrev', TilbakekrevingBehandlingApiKeys.VEDTAKSBREV)
  .withRel('beregningsresultat', TilbakekrevingBehandlingApiKeys.BEREGNINGSRESULTAT)
  .withRel('feilutbetalingFakta', TilbakekrevingBehandlingApiKeys.FEILUTBETALING_FAKTA)
  .withRel('feilutbetalingAarsak', TilbakekrevingBehandlingApiKeys.FEILUTBETALING_AARSAK)
  .withRel('perioderForeldelse', TilbakekrevingBehandlingApiKeys.PERIODER_FORELDELSE)
  .withRel('vilkarvurderingsperioder', TilbakekrevingBehandlingApiKeys.VILKARVURDERINGSPERIODER)
  .withRel('vilkarvurdering', TilbakekrevingBehandlingApiKeys.VILKARVURDERING)

  // operasjoner
  .withRel('beregne-feilutbetalt-belop', TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP)

  .withPost('/fptilbake/api/dokument/forhandsvis-vedtaksbrev', TilbakekrevingBehandlingApiKeys.PREVIEW_VEDTAKSBREV, {
    isResponseBlob: true,
  })

  .build();

const alleEndepunkter = endepunkter.concat(behandlingFellesEndepunkter);

export const requestTilbakekrevingApi = createRequestApi(alleEndepunkter);

export const restApiTilbakekrevingHooks = RestApiHooks.initHooks(requestTilbakekrevingApi);
