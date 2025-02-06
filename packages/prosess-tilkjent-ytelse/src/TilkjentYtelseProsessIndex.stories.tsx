import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  AktivitetStatus,
  ArbeidsforholdHandlingType,
  NavBrukerKjonn,
  SoknadType,
  StonadskontoType,
} from '@navikt/fp-kodeverk';
import { PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import {
  Aksjonspunkt,
  BeregningsresultatDagytelse,
  FamilieHendelse,
  FamilieHendelseSamling,
  Personoversikt,
  Soknad,
} from '@navikt/fp-types';

import { TilkjentYtelseProsessIndex } from './TilkjentYtelseProsessIndex';

const defaultFamiliehendelse = {
  gjeldende: {
    avklartBarn: [
      {
        fodselsdato: '2019-01-01',
      },
    ],
    omsorgsovertakelseDato: '2019-01-01',
    soknadType: SoknadType.FODSEL,
  } as FamilieHendelse,
} as FamilieHendelseSamling;

const personoversikt = {
  bruker: {
    kjønn: NavBrukerKjonn.KVINNE,
  },
} as Personoversikt;

const beregningresultat = {
  perioder: [
    {
      andeler: [
        {
          uttak: {
            stonadskontoType: StonadskontoType.FELLESPERIODE,
          },
          aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
          arbeidsforholdType: ArbeidsforholdHandlingType.NYTT_ARBEIDSFORHOLD,
        },
      ],
      fom: '2018-01-01',
      tom: '2019-01-10',
      dagsats: 1000,
    },
    {
      andeler: [
        {
          uttak: {
            stonadskontoType: StonadskontoType.FORELDREPENGER,
          },
          aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
          arbeidsforholdType: ArbeidsforholdHandlingType.NYTT_ARBEIDSFORHOLD,
        },
      ],
      fom: '2019-02-01',
      tom: '2019-06-10',
      dagsats: 100,
    },
  ],
} as BeregningsresultatDagytelse;

const søknad = {
  mottattDato: '2019-01-10',
  soknadType: SoknadType.FODSEL,
  omsorgsovertakelseDato: '2019-01-10',
  fodselsdatoer: {
    1: '2019-01-01',
  } as { [key: number]: string },
  adopsjonFodelsedatoer: {
    1: '2019-01-01',
  } as { [key: number]: string },
  termindato: '2019-02-01',
} as Soknad;

const arbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    navn: 'EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET',
  },
};

const meta = {
  title: 'prosess/prosess-tilkjent-ytelse',
  component: TilkjentYtelseProsessIndex,
  decorators: [withPanelData],
  args: {
    beregningresultat,
    familiehendelse: defaultFamiliehendelse,
    personoversikt,
    soknad: søknad,
    arbeidsgiverOpplysningerPerId,
  },
  render: args => <TilkjentYtelseProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof TilkjentYtelseProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const UtenAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [],
  },
};

export const UtførtAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        begrunnelse: 'Dette er en begrunnelse saksbehandler tidligere har gjort.',
        definisjon: AksjonspunktKode.VURDER_TILBAKETREKK,
        status: AksjonspunktStatus.UTFORT,
      },
    ] as Aksjonspunkt[],
  },
};

export const MedFeriepengegrunnlag: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.VURDER_TILBAKETREKK,
        status: AksjonspunktStatus.OPPRETTET,
      },
    ] as Aksjonspunkt[],
    feriepengegrunnlag: {
      andeler: [
        {
          aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
          opptjeningsår: 2,
          årsbeløp: 500000,
          erBrukerMottaker: true,
        },
      ],
    },
  },
};

export const MedBarnFodtLengeForForstePeriode: Story = {
  args: {
    aksjonspunkterForPanel: [],
    familiehendelse: {
      ...defaultFamiliehendelse,
      gjeldende: {
        avklartBarn: [
          {
            fodselsdato: '2017-01-01',
          },
        ],
        soknadType: SoknadType.FODSEL,
      } as FamilieHendelse,
    },
  },
};
