import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt } from '@navikt/fp-types';

import { OmsorgsovertakelseFaktaIndex } from './OmsorgsovertakelseFaktaIndex';

const lagAksjonspunkt = (definisjon: AksjonspunktKode, status: 'OPPR' | 'UTFO'): Aksjonspunkt => ({
  ...aksjonspunktDefault,
  definisjon,
  status,
  kanLoses: status === 'OPPR',
  begrunnelse: status === 'UTFO' ? 'Dette er en begrunnelse' : undefined,
});

const meta = {
  component: OmsorgsovertakelseFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    isReadOnly: false,
    omsorgsovertakelse: {
      søknad: {
        barn: [
          {
            fødselsdato: '2015-10-09',
            barnNummer: 1,
          },
          {
            fødselsdato: '2005-10-09',
            barnNummer: 2,
          },
        ],
        omsorgsovertakelseDato: '2025-11-09',
        antallBarn: 2,
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
          {
            fødselsdato: '2005-10-09',
            barnNummer: 2,
          },
        ],
        omsorgsovertakelseDato: '2025-11-09',
        antallBarn: 2,
        delvilkår: 'FP_VK_4',
        erEktefellesBarn: false,
        ankomstNorgeDato: '2025-11-09',
      },
      aktuelleDelvilkårAvslagsårsaker: {
        FP_VK_4: ['1005', '1006', '1032', '1004', '1034', '1033', '1031'],
        FP_VK_33: ['1016', '1018', '1017', '1032', '1004', '1034', '1033', '1031'],
        FP_VK_5: ['1010', '1009', '1012', '1008', '1032', '1004', '1034', '1033', '1031'],
        FP_VK_8: ['1014', '1015', '1032', '1004', '1034', '1033', '1031'],
      },
    },
  },
  render: args => <OmsorgsovertakelseFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OmsorgsovertakelseFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

const aksjonspunktDefault = {
  definisjon: AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET,
  status: 'OPPR',
  kanLoses: true,
  toTrinnsBehandling: false,
  aksjonspunktType: 'AUTO',
  vilkarType: 'FP_VK_5',
  erAktivt: true,
} satisfies Aksjonspunkt;

export const EngangsstønadUtenAp: Story = {};

export const EngangsstønadMedAp: Story = {
  args: {
    aksjonspunkterForPanel: [aksjonspunktDefault],
  },
};

export const LegacyAP: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_VILKÅR_FOR_FORELDREANSVAR, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_ADOPSJONSDOKUMENTAJON, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKÅRET, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP, 'UTFO'),
    ],
  },
};
