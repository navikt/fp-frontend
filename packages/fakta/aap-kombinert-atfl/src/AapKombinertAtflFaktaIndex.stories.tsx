import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { lagAksjonspunkt, type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';

import { AapKombinertAtflFaktaIndex } from './AapKombinertAtflFaktaIndex';

const meta = {
  title: 'fakta/fakta-aap-kombinert-atfl',
  component: AapKombinertAtflFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  render: args => <AapKombinertAtflFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof AapKombinertAtflFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkt: lagAksjonspunkt(AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL),
  },
};

export const LøstAksjonspunkt: Story = {
  args: {
    aksjonspunkt: lagAksjonspunkt(AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL, {
      status: 'UTFO',
      begrunnelse: 'Beregningen er gjennomgått og bekreftet korrekt.',
    }),
    isReadOnly: true,
  },
};
