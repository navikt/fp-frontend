import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { lagAksjonspunkt, type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import type {
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatDagytelse,
  FamilieHendelse,
  Personoversikt,
  Soknad,
  StønadskontoType,
} from '@navikt/fp-types';

import { TilkjentYtelseProsessIndex } from './TilkjentYtelseProsessIndex';

const defaultFamiliehendelse = {
  fødselTermin: {
    fødselsdato: '2019-01-01',
    termindato: '2019-01-01',
  },
} as FamilieHendelse;

const personoversikt = {
  bruker: {
    kjønn: 'K',
  },
} as Personoversikt;

const beregningresultat: BeregningsresultatDagytelse = {
  perioder: [
    {
      andeler: [
        {
          uttak: {
            stonadskontoType: 'FELLESPERIODE' satisfies StønadskontoType,
            gradering: false,
          },
          aktivitetStatus: 'AT',
          arbeidsforholdType: 'ARBEID',
          arbeidsgiverReferanse: '',
          refusjon: 0,
          tilSoker: 0,
          utbetalingsgrad: 0,
          sisteUtbetalingsdato: '',
          eksternArbeidsforholdId: '',
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
            stonadskontoType: 'FORELDREPENGER' satisfies StønadskontoType,
            gradering: false,
          },
          aktivitetStatus: 'AT',
          arbeidsforholdType: 'ARBEID',
          arbeidsgiverReferanse: '',
          refusjon: 0,
          tilSoker: 0,
          utbetalingsgrad: 0,
          sisteUtbetalingsdato: '',
          eksternArbeidsforholdId: '',
        },
      ],
      fom: '2019-02-01',
      tom: '2019-06-10',
      dagsats: 100,
    },
  ],
};

const søknad = {
  mottattDato: '2019-01-10',
  manglendeVedlegg: [],
  søknadsfrist: {
    dagerOversittetFrist: 0,
  },
} satisfies Soknad;

const arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId = {
  1: {
    erPrivatPerson: false,
    identifikator: '973861778',
    referanse: '973861778',
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
    søknad,
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
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5090, {
        status: 'UTFO',
        begrunnelse: 'Dette er en begrunnelse saksbehandler tidligere har gjort.',
      }),
    ],
  },
};

export const MedFeriepengegrunnlag: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.UTGÅTT_5090)],
    feriepengegrunnlag: {
      andeler: [
        {
          aktivitetStatus: 'AT',
          opptjeningsår: 2,
          årsbeløp: 500000,
          erBrukerMottaker: true,
          arbeidsgiverId: '',
          arbeidsforholdId: '',
        },
      ],
    },
  },
};

export const MedBarnFodtLengeForForstePeriode: Story = {
  args: {
    aksjonspunkterForPanel: [],
    familiehendelse: {
      fødselTermin: {
        fødselsdato: '2017-01-01',
      },
    } as FamilieHendelse,
  },
};
