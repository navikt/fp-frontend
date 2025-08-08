import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, RelasjonsRolleType, UttakPeriodeType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Fagsak } from '@navikt/fp-types';

import { UttakFaktaEøsIndex } from './UttakFaktaEøsIndex';

const meta = {
  title: 'fakta/fakta-uttak-eøs',
  component: UttakFaktaEøsIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    fagsak: {
      relasjonsRolleType: RelasjonsRolleType.FAR,
    } as Fagsak,
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

export const ÅpentAksjonspunktMedPerioder: Story = {
  args: {
    annenForelderUttakEøs: [
      {
        fom: '2023-02-01',
        tom: '2023-02-15',
        trekkonto: UttakPeriodeType.MODREKVOTE,
        trekkdager: 10,
      },
      {
        fom: '2023-01-01',
        tom: '2023-01-31',
        trekkonto: UttakPeriodeType.MODREKVOTE,
        trekkdager: 10,
      },
      {
        fom: '2021-01-01',
        tom: '2021-01-31',
        trekkonto: UttakPeriodeType.MODREKVOTE,
        trekkdager: 10,
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
      {
        begrunnelse: 'Dette er en begrunnelse',
        status: AksjonspunktStatus.UTFORT,
        definisjon: AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART,
      } as Aksjonspunkt,
    ],
    annenForelderUttakEøs: [],
  },
};

export const OverstyringSkalIkkeVæreTilgjengligHvisDetForeliggerAksjonspunktSomKanLøsesEllerEndres: Story = {
  args: {
    kanOverstyre: true,
    aksjonspunkterForPanel: [
      {
        begrunnelse: null,
        status: AksjonspunktStatus.UTFORT,
        definisjon: AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART,
      } as Aksjonspunkt,
    ],
    annenForelderUttakEøs: [
      {
        fom: '2023-02-01',
        tom: '2023-02-15',
        trekkonto: UttakPeriodeType.MODREKVOTE,
        trekkdager: 10,
      },
    ],
  },
};

export const OverstyringSkalVæreMuligHvisDetForeliggerEnTidligereVurderingMedRegistrertePerioder: Story = {
  args: {
    kanOverstyre: true,
    aksjonspunkterForPanel: [],
    annenForelderUttakEøs: [
      {
        fom: '2023-02-01',
        tom: '2023-02-15',
        trekkonto: UttakPeriodeType.MODREKVOTE,
        trekkdager: 10,
      },
    ],
  },
};

export const OverstyringSkalVæreMuligHvisDetForeliggerEnTidligereVurderingMedIngenPerioder: Story = {
  args: {
    kanOverstyre: true,
    aksjonspunkterForPanel: [],
    annenForelderUttakEøs: [],
  },
};
