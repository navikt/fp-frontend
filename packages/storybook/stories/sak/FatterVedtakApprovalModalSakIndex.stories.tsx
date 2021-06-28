import React from 'react';
import { action } from '@storybook/addon-actions';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { FatterVedtakTotrinnskontrollModalSakIndex } from '@fpsak-frontend/sak-totrinnskontroll';
import { Behandling } from '@fpsak-frontend/types';

export default {
  title: 'sak/sak-totrinnskontroll-fatter-vedtak-modal',
  component: FatterVedtakTotrinnskontrollModalSakIndex,
};

export const visModalEtterGodkjenning = () => (
  <FatterVedtakTotrinnskontrollModalSakIndex
    behandling={{
      uuid: '1',
      status: {
        kode: behandlingStatus.FATTER_VEDTAK,
        kodeverk: '',
      },
      type: {
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.OPPHOR,
        },
      },
    } as Behandling}
    closeEvent={action('button-click')}
    allAksjonspunktApproved
    erKlageWithKA={false}
    harSammeResultatSomOriginalBehandling={false}
  />
);

export const visModalEtterGodkjenningAvKlage = () => (
  <FatterVedtakTotrinnskontrollModalSakIndex
    behandling={{
      uuid: '1',
      status: {
        kode: behandlingStatus.FATTER_VEDTAK,
        kodeverk: '',
      },
      type: {
        kode: behandlingType.KLAGE,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.OPPHOR,
        },
      },
    } as Behandling}
    closeEvent={action('button-click')}
    allAksjonspunktApproved
    erKlageWithKA={false}
    harSammeResultatSomOriginalBehandling={false}
  />
);

export const visModalEtterTilbakesendingTilSaksbehandler = () => (
  <FatterVedtakTotrinnskontrollModalSakIndex
    behandling={{
      uuid: '1',
      status: {
        kode: behandlingStatus.FATTER_VEDTAK,
        kodeverk: '',
      },
      type: {
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.OPPHOR,
        },
      },
    } as Behandling}
    closeEvent={action('button-click')}
    allAksjonspunktApproved={false}
    erKlageWithKA={false}
    harSammeResultatSomOriginalBehandling={false}
  />
);
