import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { BehandlingArsakType, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';

import { MenyNyBehandlingIndex } from './MenyNyBehandlingIndex';

const BEHANDLINGSTYPER = [
  {
    kode: BehandlingType.FORSTEGANGSSOKNAD,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Førstegangssøknad',
  },
  {
    kode: BehandlingType.REVURDERING,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Revurdering',
  },
  {
    kode: BehandlingType.KLAGE,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Klage',
  },
  {
    kode: BehandlingType.DOKUMENTINNSYN,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Dokumentinnsyn',
  },
  {
    kode: BehandlingType.TILBAKEKREVING,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Tilbakekreving',
  },
  {
    kode: BehandlingType.TILBAKEKREVING_REVURDERING,
    kodeverk: 'BEHANDLING_TYPE',
    navn: 'Tilbakekreving revurdering',
  },
];

const BEHANDLING_OPPRETTING = [
  {
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    kanOppretteBehandling: true,
  },
  {
    behandlingType: BehandlingType.REVURDERING,
    kanOppretteBehandling: true,
  },
  {
    behandlingType: BehandlingType.KLAGE,
    kanOppretteBehandling: true,
  },
];

const REVURDERINGARSAKER = [
  {
    kode: BehandlingArsakType.KLAGE_U_INNTK,
    kodeverk: 'BEHANDLING_ARSAK_TYPE',
    navn: 'Klage uten inntekt',
  },
  {
    kode: BehandlingArsakType.FØDSEL,
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
    ytelseType: FagsakYtelseType.FORELDREPENGER,
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
        kode: BehandlingArsakType.RE_KLAGE_KA,
        kodeverk: 'BEHANDLING_ARSAK_TYPE',
        navn: 'Klage KA',
      },
      {
        kode: BehandlingArsakType.RE_KLAGE_NFP,
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
