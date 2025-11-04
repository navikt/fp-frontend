import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { OmsorgsovertakelseDto } from '@navikt/fp-types';

import { OmsorgsovertakelseFaktaIndex } from './OmsorgsovertakelseFaktaIndex';

const omsorgsovertakelseDefault: OmsorgsovertakelseDto = {
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
  andreSakerSammeFamiliehendelse: [],
};

const meta = {
  component: OmsorgsovertakelseFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    isReadOnly: false,
    omsorgsovertakelse: omsorgsovertakelseDefault,
  },
  render: args => <OmsorgsovertakelseFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OmsorgsovertakelseFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

const defaultAksjonspunkt = lagAksjonspunkt(AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET);

export const EngangsstønadUtenAp: Story = {};

export const EngangsstønadMedAp: Story = {
  args: {
    aksjonspunkterForPanel: [defaultAksjonspunkt],
  },
};

export const EngangsstønadMedApOgSaksnummereForTidligereSaker: Story = {
  args: {
    aksjonspunkterForPanel: [defaultAksjonspunkt],
    omsorgsovertakelse: {
      ...omsorgsovertakelseDefault,
      andreSakerSammeFamiliehendelse: [{ saksnummer: '123456789' }, { saksnummer: '908766253' }],
    },
  },
};

export const LegacyAP: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5008, { status: 'UTFO' }),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5054, { status: 'UTFO' }),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5006, { status: 'UTFO' }),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5004, { status: 'UTFO' }),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5005, { status: 'UTFO' }),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5013, { status: 'UTFO' }),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5014, { status: 'UTFO' }),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5011, { status: 'UTFO' }),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_6004, { status: 'UTFO' }),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_6010, { status: 'UTFO' }),
    ],
  },
};
