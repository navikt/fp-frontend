import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, UttakPeriodeType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { UttakFaktaEøsIndex } from './UttakFaktaEøsIndex';

const meta = {
  title: 'fakta/fakta-uttak-eøs',
  component: UttakFaktaEøsIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    kanOverstyre: false,
    submittable: true,
    aksjonspunkterForPanel: [
      {
        begrunnelse: null,
        status: AksjonspunktStatus.OPPRETTET,
        definisjon: AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART,
      } as Aksjonspunkt,
    ],
  },
  render: args => <UttakFaktaEøsIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof UttakFaktaEøsIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    annenForelderUttakEøs: [
      {
        fom: '2023-01-01',
        tom: '2023-01-31',
        trekkonto: UttakPeriodeType.MODREKVOTE,
        trekkdager: 10,
      },
    ],
  },
};

export const TomTabell: Story = {
  args: {
    annenForelderUttakEøs: undefined,
  },
};
