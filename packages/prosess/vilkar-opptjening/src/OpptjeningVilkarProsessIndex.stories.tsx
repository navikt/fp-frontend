import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { lagVilkår, type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Opptjening } from '@navikt/fp-types';

import { opptjeningAktivitetKlassifisering } from './kodeverk/opptjeningAktivitetKlassifisering';
import { OpptjeningVilkarProsessIndex } from './OpptjeningVilkarProsessIndex';

const defaultOpptjening = {
  fastsattOpptjening: {
    opptjeningperiode: {
      måneder: 2,
      dager: 3,
    },
    fastsattOpptjeningAktivitetList: [
      {
        fom: '2018-01-01',
        tom: '2018-04-04',
        klasse: opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT,
      },
      {
        fom: '2018-04-05',
        tom: '2018-04-10',
        klasse: opptjeningAktivitetKlassifisering.ANTATT_AVVIST,
      },
    ],
    opptjeningFom: '2018-01-01',
    opptjeningTom: '2018-10-01',
  },
} as Opptjening;

const aksjonspunktDefault = {
  definisjon: AksjonspunktKode.VURDER_OPPTJENINGSVILKÅRET,
  status: 'OPPR',

  kanLoses: true,
  toTrinnsBehandling: true,

  aksjonspunktType: 'MANU',
  vilkarType: 'FP_VK_23',
  erAktivt: true,
} satisfies Aksjonspunkt;

const meta = {
  title: 'prosess/prosess-vilkar-opptjening',
  component: OpptjeningVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    status: 'IKKE_VURDERT',
    erSvpFagsak: false,
    vilkårForPanel: [lagVilkår('FP_VK_21')],
  },
  render: args => <OpptjeningVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OpptjeningVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    opptjening: defaultOpptjening,
    aksjonspunkterForPanel: [aksjonspunktDefault],
  },
};

export const ÅpentAksjonspunktSvangerskapspenger: Story = {
  args: {
    erSvpFagsak: true,
    opptjening: defaultOpptjening,
    aksjonspunkterForPanel: [aksjonspunktDefault],
  },
};

export const ÅpentAksjonspunktMedOppholdsperiode: Story = {
  args: {
    opptjening: {
      fastsattOpptjening: {
        opptjeningperiode: {
          måneder: 2,
          dager: 3,
        },
        fastsattOpptjeningAktivitetList: [
          {
            fom: '2018-01-01',
            tom: '2018-04-04',
            klasse: opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT,
          },
          {
            fom: '2018-04-05',
            tom: '2018-04-10',
          },
          {
            fom: '2018-04-11',
            tom: '2018-06-04',
            klasse: opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT,
          },
        ],
        opptjeningFom: '2018-01-01',
        opptjeningTom: '2018-06-04',
      },
    } as Opptjening,
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET,
        status: 'OPPR',
      },
    ] as Aksjonspunkt[],
  },
};

export const ÅpentAksjonspunktMenUtenAktiviteter: Story = {
  args: {
    opptjening: {
      ...defaultOpptjening,
      fastsattOpptjening: {
        ...defaultOpptjening.fastsattOpptjening,
        fastsattOpptjeningAktivitetList: [],
      },
    },
    aksjonspunkterForPanel: [aksjonspunktDefault],
  },
};

export const HarIkkeAksjonspunkt: Story = {
  args: {
    opptjening: defaultOpptjening,
    aksjonspunkterForPanel: [] as Aksjonspunkt[],
  },
};
