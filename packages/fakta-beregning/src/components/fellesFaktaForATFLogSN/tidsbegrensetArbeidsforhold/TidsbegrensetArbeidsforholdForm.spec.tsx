import React from 'react';
import { expect } from 'chai';

import { TidsbegrensetArbeidsforholdForm } from './TidsbegrensetArbeidsforholdForm';
import shallowWithIntl from '../../../../i18n/intl-enzyme-test-helper-fakta-beregning';

const andeler = [
  {
    erTidsbegrensetArbeidsforhold: true,
    visningsnavn: 'arbeidsgiver 1',
    lagtTilAvSaksbehandler: false,
    arbeidsforhold: {
      arbeidsgiverNavn: 'arbeidsgiver 1',
      arbeidsgiverId: '123456789',
      arbeidsgiverIdVisning: '123456789',
      startdato: '2017-01-01',
      opphoersdato: '2017-02-02',
    },
  },
  {
    erTidsbegrensetArbeidsforhold: true,
    visningsnavn: 'arbeidsgiver 2',
    lagtTilAvSaksbehandler: false,
    arbeidsforhold: {
      arbeidsgiverNavn: 'arbeidsgiver 2',
      arbeidsgiverId: '987654321',
      arbeidsgiverIdVisning: '987654321',
      startdato: '2017-02-02',
      opphoersdato: '2017-03-03',
    },
  },
];

describe('<TidsbegrensetArbeidsforholdForm>', () => {
  it('skal teste at korrekt antall radioknapper vises', () => {
    const wrapper = shallowWithIntl(<TidsbegrensetArbeidsforholdForm
      readOnly={false}
      faktaOmBeregning={{ kortvarigeArbeidsforhold: andeler, andelerForFaktaOmBeregning: [] }}
      isAksjonspunktClosed={false}
      alleKodeverk={{}}
    />);
    const radios = wrapper.find('RadioOption');
    expect(radios).to.have.length(4);
  });
  it('skal teste at korrekte overskrifter vises', () => {
    const wrapper = shallowWithIntl(<TidsbegrensetArbeidsforholdForm
      readOnly={false}
      faktaOmBeregning={{ kortvarigeArbeidsforhold: andeler, andelerForFaktaOmBeregning: [] }}
      isAksjonspunktClosed={false}
      alleKodeverk={{}}
    />);
    const message = wrapper.find('FormattedMessage');
    expect(message).to.have.length(2);
    expect(message.first().prop('id')).to.equal('BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold');
    expect(message.first().prop('values')).is.eql({
      navn: 'arbeidsgiver 1 (123456789)',
      fom: '01.01.2017',
      tom: '02.02.2017',
    });
    expect(message.last().prop('id')).to.equal('BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold');
    expect(message.last().prop('values')).is.eql({
      navn: 'arbeidsgiver 2 (987654321)',
      fom: '02.02.2017',
      tom: '03.03.2017',
    });
  });
});
