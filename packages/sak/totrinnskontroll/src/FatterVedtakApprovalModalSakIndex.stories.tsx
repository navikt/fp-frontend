import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { lagFagsakBehandling } from '@navikt/fp-storybook-utils';
import type { FagsakBehandlingDtoFpSak } from '@navikt/fp-types';

import { FatterVedtakTotrinnskontrollModalSakIndex } from './FatterVedtakTotrinnskontrollModalSakIndex';

const DEFAULT_BEHANDLING = lagFagsakBehandling({ status: 'FVED' });

const BEHANDLINGSRESULTAT_OPPHØR = {
  type: 'OPPHØR',
  harRedigertVedtaksbrev: false,
  id: 1,
  vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
} satisfies FagsakBehandlingDtoFpSak['behandlingsresultat'];

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
    behandling: DEFAULT_BEHANDLING,
    allAksjonspunktApproved: true,
  },
};

export const EtterGodkjenning: Story = {
  args: {
    behandling: { ...DEFAULT_BEHANDLING, behandlingsresultat: BEHANDLINGSRESULTAT_OPPHØR },
    allAksjonspunktApproved: true,
  },
};

export const EtterGodkjenningAvKlage: Story = {
  args: {
    behandling: { ...DEFAULT_BEHANDLING, type: 'BT-003', behandlingsresultat: BEHANDLINGSRESULTAT_OPPHØR },
    allAksjonspunktApproved: true,
  },
};

export const EtterTilbakesendingTilSaksbehandler: Story = {
  args: {
    behandling: { ...DEFAULT_BEHANDLING, behandlingsresultat: BEHANDLINGSRESULTAT_OPPHØR },
    allAksjonspunktApproved: false,
  },
};
