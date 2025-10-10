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
      søknad: {
        barn: [
          {
            fødselsdato: '2015-10-09',
            barnNummer: 1,
          },
        ],
        omsorgsovertakelseDato: '2025-11-09',
        antallBarn: 1,
        delvilkår: 'FP_VK_4',
        erEktefellesBarn: false,
        ankomstNorgeDato: '2025-11-09',
      },
      register: {
        barn: [],
      },
      kildeGjeldende: 'SØKNAD',
      gjeldende: {
        barn: [
          {
            fødselsdato: '2015-10-09',
            barnNummer: 1,
          },
        ],
        omsorgsovertakelseDato: '2025-11-09',
        antallBarn: 1,
        delvilkår: 'FP_VK_4',
        erEktefellesBarn: false,
        ankomstNorgeDato: '2025-11-09',
      },
      aktuelleDelvilkårAvslagsårsaker: {
        FP_VK_4: ['1005', '1006', '1032', '1004', '1034', '1033', '1011'],
        FP_VK_33: ['1016', '1018', '1017', '1032', '1004', '1034', '1033', '1011'],
        FP_VK_5: ['1010', '1009', '1012', '1008', '1032', '1004', '1034', '1033', '1011'],
        FP_VK_8: ['1014', '1015', '1032', '1004', '1034', '1033', '1011'],
      },
    },
  },
};
