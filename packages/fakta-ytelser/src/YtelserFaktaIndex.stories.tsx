import type { Meta, StoryObj } from '@storybook/react';

import { YtelserFaktaIndex } from './YtelserFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const defaultInntektArbeidYtelse = {
  inntektsmeldinger: [
    {
      arbeidsgiverStartdato: '2019-02-02',
      arbeidsgiverReferanse: '123',
    },
    {
      arbeidsgiverStartdato: '2019-02-03',
      arbeidsgiverReferanse: '345',
    },
  ],
  relatertTilgrensendeYtelserForSoker: [
    {
      relatertYtelseNavn: 'Svangerskapspenger',
      tilgrensendeYtelserListe: [
        {
          periodeFraDato: '2019-02-03',
          periodeTilDato: '2019-02-04',
          statusNavn: 'Åpen',
          saksNummer: '12',
        },
      ],
    },
    {
      relatertYtelseNavn: 'Sykepenger',
      tilgrensendeYtelserListe: [
        {
          periodeFraDato: '2019-02-05',
          periodeTilDato: '2019-02-06',
          statusNavn: 'Løpende',
          saksNummer: '13',
        },
      ],
    },
  ],
  relatertTilgrensendeYtelserForAnnenForelder: [],
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: [],
  skalKunneLeggeTilNyeArbeidsforhold: true,
};

const meta = {
  title: 'fakta/fakta-ytelser',
  component: YtelserFaktaIndex,
} satisfies Meta<typeof YtelserFaktaIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const YtelserForHovedsøker: Story = {
  args: {
    inntektArbeidYtelse: defaultInntektArbeidYtelse,
  },
};

export const YtelserForHovedsøkerOgAnnenPart: Story = {
  args: {
    inntektArbeidYtelse: {
      ...defaultInntektArbeidYtelse,
      relatertTilgrensendeYtelserForAnnenForelder: [
        {
          relatertYtelseNavn: 'Dagpenger',
          tilgrensendeYtelserListe: [
            {
              periodeFraDato: '2020-02-03',
              periodeTilDato: '2020-02-04',
              statusNavn: 'Avsluttet',
              saksNummer: '123',
            },
          ],
        },
      ],
    },
  },
};

export const UtenTilgrensedeYtelser: Story = {
  args: {
    inntektArbeidYtelse: {
      relatertTilgrensendeYtelserForSoker: [
        {
          relatertYtelseNavn: 'Svangerskapspenger',
          tilgrensendeYtelserListe: [],
        },
      ],
      relatertTilgrensendeYtelserForAnnenForelder: [],
      innvilgetRelatertTilgrensendeYtelserForAnnenForelder: [],
    },
  },
};
