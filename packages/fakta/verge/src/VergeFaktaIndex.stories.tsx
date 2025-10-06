import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { VergeFaktaIndex } from './VergeFaktaIndex';

const aksjonspunkterForPanel: Aksjonspunkt[] = [
  {
    definisjon: '5030',
    status: 'OPPR',
    kanLoses: true,
    toTrinnsBehandling: false,
    aksjonspunktType: 'AUTO',
    vilkarType: 'FP_VK_5',
    erAktivt: true,
  },
];

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-verge',
  component: VergeFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    aksjonspunkterForPanel,
    alleKodeverk: { ...alleKodeverk, ...alleKodeverkTilbakekreving },
    alleMerknaderFraBeslutter: {
      ['5030']: merknaderFraBeslutter,
    },
  },
  render: args => <VergeFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof VergeFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    verge: undefined,
    isReadOnly: false,
  },
};

export const ReadOnly: Story = {
  args: {
    verge: {
      vergeType: 'ADVOKAT',
      navn: 'Ola Nordmann',
      organisasjonsnummer: '123456789',
      gyldigFom: '2025-01-01',
      gyldigTom: '2025-12-31',
    },
    isReadOnly: true,
  },
};
