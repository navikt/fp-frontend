import React from 'react';
import { Story } from '@storybook/react';

import relatertYtelseType from '@fpsak-frontend/kodeverk/src/relatertYtelseType';
import relatertYtelseTilstand from '@fpsak-frontend/kodeverk/src/relatertYtelseTilstand';
import YtelserFaktaIndex from '@fpsak-frontend/fakta-ytelser';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { InntektArbeidYtelse } from '@fpsak-frontend/types';

const defaultInntektArbeidYtelse = {
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
      periodeFraDato: '2019-02-03',
      periodeTilDato: '2019-02-04',
      status: relatertYtelseTilstand.APEN,
      saksNummer: '12',
    }],
  }, {
    relatertYtelseType: relatertYtelseType.SYKEPENGER,
    tilgrensendeYtelserListe: [{
      periodeFraDato: '2019-02-05',
      periodeTilDato: '2019-02-06',
      status: relatertYtelseTilstand.LOPENDE,
      saksNummer: '13',
    }],
  }],
  skalKunneLeggeTilNyeArbeidsforhold: true,
};

export default {
  title: 'fakta/fakta-ytelser',
  component: YtelserFaktaIndex,
};

const Template: Story<{
  inntektArbeidYtelse: InntektArbeidYtelse;
}> = ({
  inntektArbeidYtelse,
}) => (
  <YtelserFaktaIndex
    inntektArbeidYtelse={inntektArbeidYtelse}
    alleKodeverk={alleKodeverk as any}
  />
);

export const YtelserForHovedsøker = Template.bind({});
YtelserForHovedsøker.args = {
  inntektArbeidYtelse: defaultInntektArbeidYtelse,
};

export const YtelserForHovedsøkerOgAnnenPart = Template.bind({});
YtelserForHovedsøkerOgAnnenPart.args = {
  inntektArbeidYtelse: {
    ...defaultInntektArbeidYtelse,
    relatertTilgrensendeYtelserForAnnenForelder: [{
      relatertYtelseType: relatertYtelseType.DAGPENGER,
      tilgrensendeYtelserListe: [{
        periodeFraDato: '2020-02-03',
        periodeTilDato: '2020-02-04',
        status: relatertYtelseTilstand.AVSLUTTET,
        saksNummer: '123',
      }],
    }],
  },
};

export const UtenTilgrensedeYtelser = Template.bind({});
UtenTilgrensedeYtelser.args = {
  inntektArbeidYtelse: {
    inntektsmeldinger: [{
      arbeidsgiverStartdato: '2019-02-02',
      arbeidsgiverReferanse: '123',
    }],
    relatertTilgrensendeYtelserForSoker: [{
      relatertYtelseType: relatertYtelseType.SVANGERSKAPSPENGER,
      tilgrensendeYtelserListe: [],
    }],
    skalKunneLeggeTilNyeArbeidsforhold: true,
  },
};
