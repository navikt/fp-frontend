import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk, alleKodeverkTilbakekreving } from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak, BehandlingFpTilbake } from '@navikt/fp-types';

import { MenyHenleggIndex } from './MenyHenleggIndex';

const meta = {
  title: 'sak/sak-meny-henlegg',
  component: MenyHenleggIndex,
  args: {
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
    } as BehandlingFpSak,
    behandlingResultatTyper: alleKodeverk.BehandlingResultatType,
  },
};

export const ForKlage: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: 'BT-003',
    } as BehandlingFpSak,
    behandlingResultatTyper: alleKodeverk.BehandlingResultatType,
  },
};

export const ForInnsyn: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: 'BT-006',
    } as BehandlingFpSak,
    behandlingResultatTyper: alleKodeverk.BehandlingResultatType,
  },
};

export const ForTilbakekreving: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: 'BT-007',
    } as BehandlingFpTilbake,
    behandlingResultatTyper: alleKodeverkTilbakekreving.BehandlingResultatType,
  },
};

export const ForTilbakekrevingRevurdering: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: 'BT-009',
    } as BehandlingFpTilbake,
    behandlingResultatTyper: alleKodeverkTilbakekreving.BehandlingResultatType,
  },
};

export const ForRevurdering: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: 'BT-004',
    } as BehandlingFpSak,
    behandlingResultatTyper: alleKodeverk.BehandlingResultatType,
  },
};
