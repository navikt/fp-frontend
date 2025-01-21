import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/fp-types';

import { BeregningsresultatProsessIndex } from './BeregningsresultatProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const beregningsresultat = {
  beregnetTilkjentYtelse: 92000,
  antallBarn: 1,
  satsVerdi: 92000,
};

const defaultAksjonspunkter = [
  {
    definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
    begrunnelse: 'test',
  },
] as Aksjonspunkt[];

const meta = {
  title: 'prosess/prosess-beregningsresultat',
  component: BeregningsresultatProsessIndex,
  args: {
    behandling,
    alleKodeverk: alleKodeverk as any,
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    isReadOnly: false,
    isAksjonspunktOpen: true,
    readOnlySubmitButton: false,
    status: '',
    vilkar: [],
    alleMerknaderFraBeslutter: {},
    setFormData: () => undefined,
    beregningresultatEngangsstonad: beregningsresultat,
    overrideReadOnly: false,
    toggleOverstyring: action('button-click'),
    fagsak: {} as Fagsak,
  },
} satisfies Meta<typeof BeregningsresultatProsessIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SaksbehandlerKanIkkeOverstyre: Story = {
  args: {
    aksjonspunkter: defaultAksjonspunkter,
    kanOverstyreAccess: { isEnabled: false },
  },
};

export const SaksbehandlerKanOverstyre: Story = {
  args: {
    aksjonspunkter: defaultAksjonspunkter,
    kanOverstyreAccess: { isEnabled: true },
  },
};

export const OverstyrtReadonlyPanel: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.OVERSTYR_BEREGNING,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ] as Aksjonspunkt[],
    kanOverstyreAccess: { isEnabled: true },
    isReadOnly: true,
  },
};
