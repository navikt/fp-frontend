import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { InntektArbeidYtelse } from '@navikt/fp-types';

import YtelserFaktaIndex from './YtelserFaktaIndex';

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

export default {
  title: 'fakta/fakta-ytelser',
  component: YtelserFaktaIndex,
};

const Template: StoryFn<{
  inntektArbeidYtelse: InntektArbeidYtelse;
}> = ({ inntektArbeidYtelse }) => (
  <YtelserFaktaIndex inntektArbeidYtelse={inntektArbeidYtelse} />
);

export const YtelserForHovedsøker = Template.bind({});
YtelserForHovedsøker.args = {
  inntektArbeidYtelse: defaultInntektArbeidYtelse,
};

export const YtelserForHovedsøkerOgAnnenPart = Template.bind({});
YtelserForHovedsøkerOgAnnenPart.args = {
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
};

export const UtenTilgrensedeYtelser = Template.bind({});
UtenTilgrensedeYtelser.args = {
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
};
