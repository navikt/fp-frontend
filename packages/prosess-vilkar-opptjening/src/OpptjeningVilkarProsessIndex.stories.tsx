import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktStatus, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { alleKodeverk, withFormData } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, Opptjening } from '@navikt/fp-types';

import opptjeningAktivitetKlassifisering from './kodeverk/opptjeningAktivitetKlassifisering';
import { OpptjeningVilkarProsessIndex } from './OpptjeningVilkarProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
  behandlingsresultat: {},
} as Behandling;

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

const meta = {
  title: 'prosess/prosess-vilkar-opptjening',
  component: OpptjeningVilkarProsessIndex,
  decorators: [withFormData],
  args: {
    submitCallback: action('button-click') as (data: any) => Promise<any>,
    behandling,
    alleKodeverk: alleKodeverk as any,
    isReadOnly: false,
    isAksjonspunktOpen: true,
    readOnlySubmitButton: false,
    status: VilkarUtfallType.IKKE_VURDERT,
    vilkar: [],
    alleMerknaderFraBeslutter: {},
    lovReferanse: '§§Dette er en lovreferanse',
    erSvpFagsak: false,
    fagsak: {} as Fagsak,
  },
} satisfies Meta<typeof OpptjeningVilkarProsessIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    opptjening: defaultOpptjening,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
      },
    ] as Aksjonspunkt[],
  },
};

export const ÅpentAksjonspunktSvangerskapspenger: Story = {
  args: {
    erSvpFagsak: true,
    opptjening: defaultOpptjening,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
      },
    ] as Aksjonspunkt[],
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
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
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
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.SVANGERSKAPSVILKARET,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
      },
    ] as Aksjonspunkt[],
  },
};

export const HarIkkeAksjonspunkt: Story = {
  args: {
    opptjening: defaultOpptjening,
    aksjonspunkter: [] as Aksjonspunkt[],
  },
};
