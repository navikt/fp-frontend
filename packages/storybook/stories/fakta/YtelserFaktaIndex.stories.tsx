import React from 'react';

import relatertYtelseType from '@fpsak-frontend/kodeverk/src/relatertYtelseType';
import YtelserFaktaIndex from '@fpsak-frontend/fakta-ytelser';

import alleKodeverk from '../mocks/alleKodeverk.json';

const inntektArbeidYtelse = {
  inntektsmeldinger: [{
    arbeidsgiverStartdato: '2019-02-02',
    arbeidsgiverReferanse: '123',
  }, {
    arbeidsgiverStartdato: '2019-02-03',
    arbeidsgiverReferanse: '345',
  }],
  relatertTilgrensendeYtelserForSoker: [{
    relatertYtelseType: relatertYtelseType.SVANGERSKAPSPENGER,
    tilgrensendeYtelserListe: [{
      periodeTilDato: '2019-02-03',
      periodeFraDato: '2019-02-04',
      status: 'OPPR',
      saksNummer: '12',
    }],
  }, {
    relatertYtelseType: relatertYtelseType.SYKEPENGER,
    tilgrensendeYtelserListe: [{
      periodeTilDato: '2019-02-03',
      periodeFraDato: '2019-02-04',
      status: 'OPPR',
      saksNummer: '12',
    }],
  }],
  skalKunneLeggeTilNyeArbeidsforhold: true,
};

export default {
  title: 'fakta/fakta-ytelser',
  component: YtelserFaktaIndex,
};

export const visYtelserForHovedsøker = () => (
  <YtelserFaktaIndex
    inntektArbeidYtelse={inntektArbeidYtelse}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visYtelserForHovedsøkerOgAnnenPart = () => (
  <YtelserFaktaIndex
    inntektArbeidYtelse={{
      ...inntektArbeidYtelse,
      relatertTilgrensendeYtelserForAnnenForelder: [{
        relatertYtelseType: relatertYtelseType.SVANGERSKAPSPENGER,
        tilgrensendeYtelserListe: [{
          periodeTilDato: '2019-02-03',
          periodeFraDato: '2019-02-04',
          status: 'OPPR',
          saksNummer: '123',
        }],
      }],
    }}
    alleKodeverk={alleKodeverk as any}
  />
);
