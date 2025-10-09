import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';

import { OmsorgsovertakelseFaktaIndex } from './OmsorgsovertakelseFaktaIndex';

const meta = {
  component: OmsorgsovertakelseFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    isReadOnly: false,
  },
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OmsorgsovertakelseFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    omsorgsovertakelse: {
      aktuelleDelvilkår: ['FP_VK_4', 'FP_VK_8'],
      aktuelleDelvilkårAvslagsårsaker: { FP_VK_4: [], FP_VK_8: [] },
      kildeGjeldende: 'SØKNAD',
      gjeldende: {
        antallBarn: 1,
        barn: [{ fødselsdato: '2022-10-01' }],
        ankomstNorgeDato: '2023-01-04',
        omsorgsovertakelseDato: '2023-01-01',
        delvilkår: 'FP_VK_4',
        erEktefellesBarn: false,
      },
      register: { barn: [{ fødselsdato: '2022-10-01' }] },
      saksbehandlerVurdering: { avslagsårsak: undefined, vilkårUtfallType: 'IKKE_VURDERT' },
      søknad: {
        ankomstNorgeDato: '2023-01-04',
        omsorgsovertakelseDato: '2023-01-03',
        delvilkår: 'FP_VK_4',
        erEktefellesBarn: false,
        antallBarn: 1,
        barn: [{ fødselsdato: '2022-10-01' }],
      },
    },
  },
};
