import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { BehandlingArsakType, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';

import { MenyNyBehandlingIndex } from './MenyNyBehandlingIndex';

const BEHANDLINGSTYPER = [
  {
    kode: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Førstegangssøknad',
  },
  {
    kode: BehandlingTypeEnum.REVURDERING,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Revurdering',
  },
  {
    kode: BehandlingTypeEnum.KLAGE,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Klage',
  },
  {
    kode: BehandlingTypeEnum.DOKUMENTINNSYN,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Dokumentinnsyn',
  },
  {
    kode: BehandlingTypeEnum.TILBAKEKREVING,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Tilbakekreving',
  },
  {
    kode: BehandlingTypeEnum.TILBAKEKREVING_REVURDERING,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Tilbakekreving revurdering',
  },
];

const BEHANDLING_OPPRETTING = [
  {
    behandlingType: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
    kanOppretteBehandling: true,
  },
  {
    behandlingType: BehandlingTypeEnum.REVURDERING,
    kanOppretteBehandling: true,
  },
  {
    behandlingType: BehandlingTypeEnum.KLAGE,
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
    behandlingstyper: BEHANDLINGSTYPER,
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
