import React from 'react';

import { TidsbegrensetArbeidsforholdForm } from './TidsbegrensetArbeidsforholdForm';
import shallowWithIntl from '../../../../i18n/intl-enzyme-test-helper-fakta-beregning';

const andeler = [
  {
    erTidsbegrensetArbeidsforhold: true,
    lagtTilAvSaksbehandler: false,
    arbeidsforhold: {
      arbeidsgiverIdent: '123456789',
      arbeidsgiverIdVisning: '123456789',
      startdato: '2017-01-01',
      opphoersdato: '2017-02-02',
    },
  },
  {
    erTidsbegrensetArbeidsforhold: true,
    lagtTilAvSaksbehandler: false,
    arbeidsforhold: {
      arbeidsgiverIdent: '987654321',
      arbeidsgiverIdVisning: '987654321',
      startdato: '2017-02-02',
      opphoersdato: '2017-03-03',
    },
  },
];

const agOpplysning = {
  987654321: {
    navn: 'arbeidsgiver 2',
    identifikator: '987654321',
    erPrivatPerson: false,
  },
  123456789: {
    navn: 'arbeidsgiver 1',
    identifikator: '123456789',
    erPrivatPerson: false,
  },
};

describe('<TidsbegrensetArbeidsforholdForm>', () => {
  it('skal teste at korrekt antall radioknapper vises', () => {
    const wrapper = shallowWithIntl(<TidsbegrensetArbeidsforholdForm
      readOnly={false}
      faktaOmBeregning={{ kortvarigeArbeidsforhold: andeler, andelerForFaktaOmBeregning: [] }}
      isAksjonspunktClosed={false}
      arbeidsgiverOpplysningerPerId={agOpplysning}
    />);
    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(4);
  });
  it('skal teste at korrekte overskrifter vises', () => {
    const wrapper = shallowWithIntl(<TidsbegrensetArbeidsforholdForm
      readOnly={false}
      faktaOmBeregning={{ kortvarigeArbeidsforhold: andeler, andelerForFaktaOmBeregning: [] }}
      isAksjonspunktClosed={false}
      arbeidsgiverOpplysningerPerId={agOpplysning}
    />);
    const message = wrapper.find('FormattedMessage');
    expect(message).toHaveLength(2);
    expect(message.first().prop('id')).toBe('BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold');
    expect(message.first().prop('values')).toEqual({
      navn: 'arbeidsgiver 1 (123456789)',
      fom: '01.01.2017',
      tom: '02.02.2017',
    });
    expect(message.last().prop('id')).toBe('BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold');
    expect(message.last().prop('values')).toEqual({
      navn: 'arbeidsgiver 2 (987654321)',
      fom: '02.02.2017',
      tom: '03.03.2017',
    });
  });
});
