import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagVilkår,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { Fagsak, FastsattOpptjening } from '@navikt/fp-types';

import { OpptjeningVilkarProsessIndex } from './OpptjeningVilkarProsessIndex';

const defaultFastsattOpptjening: FastsattOpptjening = {
  opptjeningperiode: {
    måneder: 2,
    dager: 3,
  },
  fastsattOpptjeningAktivitetList: [
    {
      fom: '2018-01-01',
      tom: '2018-04-04',
      klasse: 'BEKREFTET_GODKJENT',
    },
    {
      fom: '2018-04-05',
      tom: '2018-04-10',
      klasse: 'BEKREFTET_AVVIST',
    },
  ],
  opptjeningFom: '2018-01-01',
  opptjeningTom: '2018-10-01',
};

const defaultAksjonspunkt = lagAksjonspunkt(AksjonspunktKode.VURDER_OPPTJENINGSVILKÅRET);

const meta = {
  title: 'prosess/prosess-vilkar-opptjening',
  component: OpptjeningVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    isReadOnly: false,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    vilkårForPanel: [lagVilkår('FP_VK_21')],
  },
  render: args => <OpptjeningVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OpptjeningVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    fastsattOpptjening: defaultFastsattOpptjening,
    aksjonspunkterForPanel: [defaultAksjonspunkt],
  },
};

export const ÅpentAksjonspunktSvangerskapspenger: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: 'SVP',
    } as Fagsak,
    fastsattOpptjening: defaultFastsattOpptjening,
    aksjonspunkterForPanel: [defaultAksjonspunkt],
  },
};

export const ÅpentAksjonspunktMedOppholdsperiode: Story = {
  args: {
    fastsattOpptjening: {
      opptjeningperiode: {
        måneder: 2,
        dager: 3,
      },
      fastsattOpptjeningAktivitetList: [
        {
          fom: '2018-01-01',
          tom: '2018-04-04',
          klasse: 'BEKREFTET_GODKJENT',
        },
        {
          fom: '2018-04-05',
          tom: '2018-04-10',
          klasse: 'MELLOMLIGGENDE_PERIODE',
        },
        {
          fom: '2018-04-11',
          tom: '2018-06-04',
          klasse: 'BEKREFTET_GODKJENT',
        },
      ],
      opptjeningFom: '2018-01-01',
      opptjeningTom: '2018-06-04',
    },
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET)],
  },
};

export const ÅpentAksjonspunktMenUtenAktiviteter: Story = {
  args: {
    fastsattOpptjening: {
      ...defaultFastsattOpptjening,
      opptjeningperiode: {
        dager: 0,
        måneder: 0,
      },
      fastsattOpptjeningAktivitetList: [],
    },
    aksjonspunkterForPanel: [defaultAksjonspunkt],
  },
};

export const HarIkkeAksjonspunkt: Story = {
  args: {
    fastsattOpptjening: defaultFastsattOpptjening,
    aksjonspunkterForPanel: [],
  },
};
