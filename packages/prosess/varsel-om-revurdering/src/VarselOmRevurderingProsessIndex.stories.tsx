import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak } from '@navikt/fp-types';

import { VarselOmRevurderingProsessIndex } from './VarselOmRevurderingProsessIndex';

const defaultBehandling = {
  aksjonspunkt: [],
  aktivPapirsøknad: false,
  behandlendeEnhetId: '4820',
  behandlendeEnhetNavn: 'NAV Familie- og pensjonsytelser Oslo 1',
  behandlingHenlagt: false,
  behandlingPåVent: false,
  behandlingÅrsaker: [],
  harSattEndringsdato: false,
  harSøknad: true,
  id: 1,
  links: [],
  opprettet: '2020-01-01',
  språkkode: 'NN',
  status: 'UTRED',
  type: 'BT-002',
  uuid: '1',
  versjon: 1,
  vilkår: [],
} satisfies BehandlingFpSak;

const meta = {
  component: VarselOmRevurderingProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.VARSEL_REVURDERING_MANUELL)],
    previewCallback: action('button-click'),
    isReadOnly: false,
  },
  render: args => <VarselOmRevurderingProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof VarselOmRevurderingProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ForFørstegangsbehandling: Story = {
  args: {
    behandling: defaultBehandling,
  },
};

export const ForRevurdering: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
    },
  },
};

export const Readonly: Story = {
  args: {
    behandling: defaultBehandling,
    isReadOnly: true,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.VARSEL_REVURDERING_MANUELL, { begrunnelse: 'Test begrunnelse' }),
    ],
  },
};
