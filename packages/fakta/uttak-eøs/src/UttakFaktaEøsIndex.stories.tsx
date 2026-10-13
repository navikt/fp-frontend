import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagFagsak,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';

import { UttakFaktaEøsIndex } from './UttakFaktaEøsIndex';

const meta = {
  title: 'fakta/fakta-uttak-eøs',
  component: UttakFaktaEøsIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    fagsak: lagFagsak({ relasjonsRolleType: 'FARA' }),
    harSattEndringsdato: false,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART)],
  },
  render: args => <UttakFaktaEøsIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof UttakFaktaEøsIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunktMedPerioder: Story = {
  args: {
    annenForelderUttakEøs: [
      {
        fom: '2023-02-01',
        tom: '2023-02-15',
        trekkonto: 'MØDREKVOTE',
        trekkdager: 10,
      },
      {
        fom: '2023-01-01',
        tom: '2023-01-31',
        trekkonto: 'MØDREKVOTE',
        trekkdager: 10,
      },
      {
        fom: '2021-01-01',
        tom: '2021-01-31',
        trekkonto: 'MØDREKVOTE',
        trekkdager: 10,
      },
    ],
  },
};

export const ÅpentAksjonspunktMedPerioderSomDelerSammeFom: Story = {
  args: {
    annenForelderUttakEøs: [
      {
        fom: '2023-01-01',
        tom: '2023-01-31',
        trekkonto: 'MØDREKVOTE',
        trekkdager: 10,
      },
      {
        fom: '2023-01-01',
        tom: '2023-02-15',
        trekkonto: 'FELLESPERIODE',
        trekkdager: 15,
      },
    ],
  },
};

export const AksjonspunktOpprettetUtenTidligereVurderingSkalIkkeHaDefaultValg: Story = {
  args: {
    annenForelderUttakEøs: [],
  },
};

export const AksjonspunktErUtførtHvorIngenPerioderErRegistrert: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART, {
        status: 'UTFO',
      }),
    ],
    annenForelderUttakEøs: [],
  },
};

export const OverstyringSkalIkkeVæreTilgjengligHvisDetForeliggerAksjonspunktSomKanLøsesEllerEndres: Story = {
  args: {
    harSattEndringsdato: true,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART, { status: 'UTFO' })],
    annenForelderUttakEøs: [
      {
        fom: '2023-02-01',
        tom: '2023-02-15',
        trekkonto: 'MØDREKVOTE',
        trekkdager: 10,
      },
    ],
  },
};

export const OverstyringSkalVæreMuligHvisDetForeliggerEnTidligereVurderingMedRegistrertePerioder: Story = {
  args: {
    harSattEndringsdato: true,
    aksjonspunkterForPanel: [],
    annenForelderUttakEøs: [
      {
        fom: '2023-02-01',
        tom: '2023-02-15',
        trekkonto: 'MØDREKVOTE',
        trekkdager: 10,
      },
    ],
  },
};

export const OverstyringSkalVæreMuligHvisDetForeliggerEnTidligereVurderingMedIngenPerioder: Story = {
  args: {
    harSattEndringsdato: true,
    aksjonspunkterForPanel: [],
    annenForelderUttakEøs: [],
  },
};
