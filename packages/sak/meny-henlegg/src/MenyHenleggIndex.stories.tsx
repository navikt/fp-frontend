import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk, alleKodeverkTilbakekreving, lagBehandling } from '@navikt/fp-storybook-utils';
import type { BehandlingFpTilbake } from '@navikt/fp-types';

import { MenyHenleggIndex } from './MenyHenleggIndex';

const DEFAULT_TILBAKE_BEHANDLING = {
  aksjonspunkt: [],
  behandlendeEnhetId: '4820',
  behandlendeEnhetNavn: 'NAV Familie- og pensjonsytelser Oslo 1',
  behandlingHenlagt: false,
  behandlingKøet: false,
  behandlingPåVent: false,
  behandlingÅrsaker: [],
  harVerge: false,
  links: [],
  opprettet: '2020-01-01',
  språkkode: 'NB',
  status: 'UTRED',
  toTrinnsBehandling: false,
  uuid: '23r2323',
  versjon: 2,
} satisfies Omit<BehandlingFpTilbake, 'type'>;

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
    valgtBehandling: lagBehandling({ uuid: '23r2323', versjon: 2 }),
    behandlingResultatTyper: alleKodeverk.BehandlingResultatType,
  },
};

export const ForKlage: Story = {
  args: {
    valgtBehandling: lagBehandling({ uuid: '23r2323', versjon: 2, type: 'BT-003' }),
    behandlingResultatTyper: alleKodeverk.BehandlingResultatType,
  },
};

export const ForInnsyn: Story = {
  args: {
    valgtBehandling: lagBehandling({ uuid: '23r2323', versjon: 2, type: 'BT-006' }),
    behandlingResultatTyper: alleKodeverk.BehandlingResultatType,
  },
};

export const ForTilbakekreving: Story = {
  args: {
    valgtBehandling: { ...DEFAULT_TILBAKE_BEHANDLING, type: 'BT-007' } satisfies BehandlingFpTilbake,
    behandlingResultatTyper: alleKodeverkTilbakekreving.BehandlingResultatType,
  },
};

export const ForTilbakekrevingRevurdering: Story = {
  args: {
    valgtBehandling: { ...DEFAULT_TILBAKE_BEHANDLING, type: 'BT-009' } satisfies BehandlingFpTilbake,
    behandlingResultatTyper: alleKodeverkTilbakekreving.BehandlingResultatType,
  },
};

export const ForRevurdering: Story = {
  args: {
    valgtBehandling: lagBehandling({ uuid: '23r2323', versjon: 2, type: 'BT-004' }),
    behandlingResultatTyper: alleKodeverk.BehandlingResultatType,
  },
};
