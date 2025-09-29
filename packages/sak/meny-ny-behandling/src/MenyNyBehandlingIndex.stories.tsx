import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { BehandlingArsakTypeEnum } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { MenyNyBehandlingIndex } from './MenyNyBehandlingIndex';

const BEHANDLING_OPPRETTING = [
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

const REVURDERINGARSAKER = [
  {
    kode: BehandlingArsakTypeEnum.KLAGE_U_INNTK,
    kodeverk: 'BEHANDLING_ARSAK_TYPE',
    navn: 'Klage uten inntekt',
  },
  {
    kode: BehandlingArsakTypeEnum.FØDSEL,
    kodeverk: 'BEHANDLING_ARSAK_TYPE',
    navn: 'Fødsel',
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
    revurderingArsaker: REVURDERINGARSAKER,
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
        kode: BehandlingArsakTypeEnum.RE_KLAGE_KA,
        kodeverk: 'BEHANDLING_ARSAK_TYPE',
        navn: 'Klage KA',
      },
      {
        kode: BehandlingArsakTypeEnum.RE_KLAGE_NFP,
        kodeverk: 'BEHANDLING_ARSAK_TYPE',
        navn: 'Klage NFP',
      },
    ],
    kanTilbakekrevingOpprettes: {
      kanBehandlingOpprettes: true,
      kanRevurderingOpprettes: true,
    },
  },
};
