import { Aksjonspunkt, Behandling, Vilkar } from '@navikt/ft-types';

import { RestApiConfigBuilder, RestKey } from '@fpsak-frontend/rest-api';
import { ForhåndsvisMeldingParams, Verge } from '@fpsak-frontend/types';

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
  BEHANDLING_NY_BEHANDLENDE_ENHET: new RestKey<void, NyBehandlendeEnhet>('BEHANDLING_NY_BEHANDLENDE_ENHET'),
  HENLEGG_BEHANDLING: new RestKey<void, { behandlingUuid: string, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>('HENLEGG_BEHANDLING'),
  RESUME_BEHANDLING: new RestKey<Behandling, { behandlingUuid: string, behandlingVersjon: number }>('RESUME_BEHANDLING'),
  BEHANDLING_ON_HOLD: new RestKey<void, { behandlingUuid: string, behandlingVersjon: number, frist: string, ventearsak: string }>('BEHANDLING_ON_HOLD'),
  OPEN_BEHANDLING_FOR_CHANGES: new RestKey<Behandling, { behandlingUuid: string, behandlingVersjon: number }>('OPEN_BEHANDLING_FOR_CHANGES'),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
  PREVIEW_MESSAGE: new RestKey<any, ForhåndsvisMeldingParams>('PREVIEW_MESSAGE'),
  VERGE_OPPRETT: new RestKey<Behandling, any>('VERGE_OPPRETT'),
  VERGE_FJERN: new RestKey<Behandling, any>('VERGE_FJERN'),
};

export const behandlingFellesEndepunkter = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', BehandlingFellesApiKeys.BEHANDLING)

  // behandlingsdata
  .withRel('aksjonspunkter', BehandlingFellesApiKeys.AKSJONSPUNKTER)
  .withRel('vilkar', BehandlingFellesApiKeys.VILKAR)
  .withRel('soeker-verge', BehandlingFellesApiKeys.VERGE)

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

  /* FPFORMIDLING */
  .withPost('/fpformidling/api/brev/forhaandsvis', BehandlingFellesApiKeys.PREVIEW_MESSAGE, { isResponseBlob: true })

  .build();
