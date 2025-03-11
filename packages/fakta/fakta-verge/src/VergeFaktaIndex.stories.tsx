import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { alleKodeverk, type PanelDataArgs, withFormData, withPanelData } from '@navikt/fp-storybook-utils';

import { VergeFaktaIndex } from './VergeFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const aksjonspunkterForPanel: PanelDataArgs['aksjonspunkterForPanel'] = [
  {
    definisjon: AksjonspunktKode.AVKLAR_VERGE,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  },
];

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-verge',
  component: VergeFaktaIndex,
  decorators: [withFormData, withPanelData],
  args: {
    submittable: true,
    aksjonspunkterForPanel,
    alleKodeverk: alleKodeverk as any,
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AVKLAR_VERGE]: merknaderFraBeslutter,
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
