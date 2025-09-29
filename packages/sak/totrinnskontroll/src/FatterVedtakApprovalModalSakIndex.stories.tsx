import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { BehandlingResultatType, BehandlingStatusEnum } from '@navikt/fp-kodeverk';
import type { BehandlingAppKontekst } from '@navikt/fp-types';

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
      status: BehandlingStatusEnum.FATTER_VEDTAK,
      type: 'BT-002',
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: true,
  },
};

export const EtterGodkjenning: Story = {
  args: {
    behandling: {
      uuid: '1',
      status: BehandlingStatusEnum.FATTER_VEDTAK,
      type: 'BT-002',
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
      status: BehandlingStatusEnum.FATTER_VEDTAK,
      type: 'BT-003',
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
      status: BehandlingStatusEnum.FATTER_VEDTAK,
      type: 'BT-002',
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR,
      },
    } as BehandlingAppKontekst,
    allAksjonspunktApproved: false,
  },
};
