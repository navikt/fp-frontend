import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';

import { AapFaktaIndex } from './AapFaktaIndex';

const meta = {
  title: 'fakta/fakta-aap',
  component: AapFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  render: args => <AapFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof AapFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkt: lagAksjonspunkt(AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL_KODE),
  },
};

export const LøstAksjonspunkt: Story = {
  args: {
    aksjonspunkt: lagAksjonspunkt(AksjonspunktKode.MANUELL_KONTROLL_AAP_KOMBINERT_ATFL_KODE, {
      status: 'UTFO',
      begrunnelse: 'Beregningen er gjennomgått og bekreftet korrekt.',
    }),
    isReadOnly: true,
  },
};
