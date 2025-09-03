import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  AktivitetStatus,
  NavBrukerKjonn,
  OpptjeningAktivitetType,
  SoknadType,
  StonadskontoType,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withPanelData } from '@navikt/fp-storybook-utils';
import type {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
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

const beregningresultat: BeregningsresultatDagytelse = {
  perioder: [
    {
      andeler: [
        {
          uttak: {
            stonadskontoType: StonadskontoType.FELLESPERIODE,
            gradering: false,
          },
          aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
          arbeidsforholdType: OpptjeningAktivitetType.ARBEID,
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
            stonadskontoType: StonadskontoType.FORELDREPENGER,
            gradering: false,
          },
          aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
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
  soknadType: SoknadType.FODSEL,
  fodselsdatoer: {
    1: '2019-01-01',
  },
  termindato: '2019-02-01',
  begrunnelseForSenInnsending: null,
  antallBarn: 0,
  oppgittTilknytning: {
    oppholdNorgeNa: false,
    oppholdSistePeriode: false,
    oppholdNestePeriode: false,
    utlandsoppholdFor: [],
    utlandsoppholdEtter: [],
  },
  manglendeVedlegg: [],
  oppgittFordeling: {
    startDatoForPermisjon: null,
    dekningsgrader: {
      avklartDekningsgrad: null,
      søker: {
        søknadsdato: '',
        dekningsgrad: 0,
      },
      annenPart: null,
    },
  },
  søknadsfrist: {
    mottattDato: null,
    utledetSøknadsfrist: null,
    søknadsperiodeStart: null,
    søknadsperiodeSlutt: null,
    dagerOversittetFrist: null,
  },
  farSokerType: null,
  utstedtdato: null,
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
