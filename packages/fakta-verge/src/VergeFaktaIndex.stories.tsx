import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { alleKodeverk, PanelDataArgs, withFormData, withPanelData } from '@navikt/fp-storybook-utils';

import { VergeFaktaIndex } from './VergeFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const aksjonspunkterForPanel = [
  {
    definisjon: AksjonspunktKode.AVKLAR_VERGE,
    status: AksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
  },
];

const verge = {};

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-verge',
  component: VergeFaktaIndex,
  decorators: [withFormData, withPanelData],
  args: {
    submittable: true,
    verge,
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

export const Default: Story = {};
