import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { BehandlingResultatType, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { Behandling } from '@navikt/fp-types';

import { MenyHenleggIndex } from './MenyHenleggIndex';

const BEHANDLINGRESULTAT_TYPER = [
  {
    kode: BehandlingResultatType.HENLAGT_KLAGE_TRUKKET,
    kodeverk: 'BEHANDLING_RESULT_TYPE',
    navn: 'Henlagt klage',
  },
  {
    kode: BehandlingResultatType.HENLAGT_SOKNAD_TRUKKET,
    kodeverk: 'RESULTAT_TYPE',
    navn: 'Henlagt soknad trukket',
  },
  {
    kode: BehandlingResultatType.HENLAGT_FEILOPPRETTET_UTEN_BREV,
    kodeverk: 'BEHANDLING_RESULT_TYPE',
    navn: 'Henlagt feilopprettet uten brev',
  },
  {
    kode: BehandlingResultatType.HENLAGT_FEILOPPRETTET_MED_BREV,
    kodeverk: 'BEHANDLING_RESULT_TYPE',
    navn: 'Henlagt feilopprettet med brev',
  },
  {
    kode: BehandlingResultatType.HENLAGT_INNSYN_TRUKKET,
    kodeverk: 'BEHANDLING_RESULT_TYPE',
    navn: 'Henlagt innsyn',
  },
  {
    kode: BehandlingResultatType.HENLAGT_FEILOPPRETTET,
    kodeverk: 'RESULTAT_TYPE',
    navn: 'Henlagt feilopprettet',
  },
  {
    kode: BehandlingResultatType.HENLAGT_SOKNAD_MANGLER,
    kodeverk: 'RESULTAT_TYPE',
    navn: 'Henlagt soknad mangler',
  },
];

interface HenleggParams {
  årsakKode: string;
  begrunnelse: string;
  fritekst?: string;
}

const meta = {
  title: 'sak/sak-meny-henlegg',
  component: MenyHenleggIndex,
  args: {
    behandlingResultatTyper: BEHANDLINGRESULTAT_TYPER,
    ytelseType: FagsakYtelseType.FORELDREPENGER,
    gaaTilSokeside: action('button-click'),
    henleggBehandling: () => {
      action('button-click') as (params: HenleggParams) => Promise<any>;
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
      type: BehandlingType.FORSTEGANGSSOKNAD,
    } as Behandling,
  },
};

export const ForKlage: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: BehandlingType.KLAGE,
    } as Behandling,
  },
};

export const ForInnsyn: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: BehandlingType.DOKUMENTINNSYN,
    } as Behandling,
  },
};

export const ForTilbakekreving: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: BehandlingType.TILBAKEKREVING,
    } as Behandling,
  },
};

export const ForTilbakekrevingRevurdering: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: BehandlingType.TILBAKEKREVING_REVURDERING,
    } as Behandling,
  },
};

export const ForRevurdering: Story = {
  args: {
    valgtBehandling: {
      versjon: 2,
      uuid: '23r2323',
      type: BehandlingType.REVURDERING,
    } as Behandling,
  },
};
