import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, OmsorgsovertakelseDto } from '@navikt/fp-types';

import { OmsorgsovertakelseFaktaIndex } from './OmsorgsovertakelseFaktaIndex';

const lagAksjonspunkt = (definisjon: AksjonspunktKode, status: 'OPPR' | 'UTFO'): Aksjonspunkt => ({
  ...aksjonspunktDefault,
  definisjon,
  status,
  kanLoses: status === 'OPPR',
  begrunnelse: status === 'UTFO' ? 'Dette er en begrunnelse' : undefined,
});
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

const aksjonspunktDefault = {
  definisjon: AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET,
  status: 'OPPR',
  kanLoses: true,
  toTrinnsBehandling: false,
  aksjonspunktType: 'AUTO',
  vilkarType: 'FP_VK_6',
  erAktivt: true,
} satisfies Aksjonspunkt;

export const EngangsstønadUtenAp: Story = {};

export const EngangsstønadMedAp: Story = {
  args: {
    aksjonspunkterForPanel: [aksjonspunktDefault],
  },
};

export const EngangsstønadMedApOgSaksnummereForTidligereSaker: Story = {
  args: {
    aksjonspunkterForPanel: [aksjonspunktDefault],
    omsorgsovertakelse: {
      ...omsorgsovertakelseDefault,
      andreSakerSammeFamiliehendelse: [{ saksnummer: '123456789' }, { saksnummer: '908766253' }],
    },
  },
};

export const LegacyAP: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5008, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5054, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5006, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5004, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5005, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5013, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5014, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5011, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_6004, 'UTFO'),
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_6010, 'UTFO'),
    ],
  },
};
