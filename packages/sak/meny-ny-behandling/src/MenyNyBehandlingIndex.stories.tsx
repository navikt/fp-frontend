import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import type { BehandlingOppretting } from '@navikt/fp-types';

import { MenyNyBehandlingIndex } from './MenyNyBehandlingIndex';

const BEHANDLING_OPPRETTING: BehandlingOppretting[] = [
  {
    behandlingType: 'BT-002',
    kanOppretteBehandling: true,
  },
  {
    behandlingType: 'BT-004',
    kanOppretteBehandling: true,
  },
  {
    behandlingType: 'BT-003',
    kanOppretteBehandling: true,
  },
];

const meta = {
  title: 'sak/sak-meny-ny-behandling',
  component: MenyNyBehandlingIndex,
  args: {
    lagNyBehandling: action('button-click'),
    lukkModal: action('button-click'),
    ytelseType: 'FP',
    saksnummer: '123',
    behandlingUuid: '1',
    behandlingstyper: alleKodeverk.BehandlingType,
    behandlingOppretting: BEHANDLING_OPPRETTING,
    revurderingArsaker: alleKodeverk.BehandlingÅrsakType,
  },
} satisfies Meta<typeof MenyNyBehandlingIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tilbakekrevingRevurderingArsaker: [],
    kanTilbakekrevingOpprettes: {
      kanBehandlingOpprettes: false,
      kanRevurderingOpprettes: false,
    },
  },
};

export const ForTilbakekreving: Story = {
  args: {
    tilbakekrevingRevurderingArsaker: [
      {
        kode: 'RE_KLAGE_KA',
        navn: 'Klage KA',
      },
      {
        kode: 'RE_KLAGE_NFP',
        navn: 'Klage NFP',
      },
    ],
    kanTilbakekrevingOpprettes: {
      kanBehandlingOpprettes: true,
      kanRevurderingOpprettes: true,
    },
  },
};
