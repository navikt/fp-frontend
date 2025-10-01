import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import type { Behandling } from '@navikt/fp-types';

import { MenyHenleggIndex } from './MenyHenleggIndex';

const meta = {
  title: 'sak/sak-meny-henlegg',
  component: MenyHenleggIndex,
  args: {
    behandlingResultatTyper: alleKodeverk.BehandlingResultatType,
    ytelseType: 'FP',
    gaaTilSokeside: action('button-click'),
    henleggBehandling: () => {
      action('button-click');
      return Promise.resolve();
    },
    lukkModal: action('button-click'),
    forhandsvisHenleggBehandling: action('button-click'),
  },
} satisfies Meta<typeof MenyHenleggIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ForFørstegangssøknad: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: 'BT-002',
    } as Behandling,
  },
};

export const ForKlage: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: 'BT-003',
    } as Behandling,
  },
};

export const ForInnsyn: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: 'BT-006',
    } as Behandling,
  },
};

export const ForTilbakekreving: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: 'BT-007',
    } as Behandling,
  },
};

export const ForTilbakekrevingRevurdering: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: 'BT-009',
    } as Behandling,
  },
};

export const ForRevurdering: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: 'BT-004',
    } as Behandling,
  },
};
