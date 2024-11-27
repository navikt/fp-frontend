import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { BehandlingResultatType,BehandlingStatus, BehandlingType } from '@navikt/fp-kodeverk';
import { BehandlingAppKontekst } from '@navikt/fp-types';

import { FatterVedtakTotrinnskontrollModalSakIndex } from './FatterVedtakTotrinnskontrollModalSakIndex';

const meta = {
  title: 'sak/sak-totrinnskontroll-fatter-vedtak-modal',
  component: FatterVedtakTotrinnskontrollModalSakIndex,
  args: {
    closeEvent: action('button-click'),
  },
} satisfies Meta<typeof FatterVedtakTotrinnskontrollModalSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const EtterFatterVedtakOgGodkjent: Story = {
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD,
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true,
  },
};

export const EtterGodkjenning: Story = {
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR,
      },
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true,
  },
};

export const EtterGodkjenningAvKlage: Story = {
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.KLAGE,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR,
      },
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true,
  },
};

export const EtterTilbakesendingTilSaksbehandler: Story = {
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatus.FATTER_VEDTAK,
      type: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR,
      },
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: false,
  },
};
