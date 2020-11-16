import React from 'react';
import { expect } from 'chai';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-papirsoknad-virksomhet';
import { VirksomhetIdentifikasjonPanel } from './VirksomhetIdentifikasjonPanel';

describe('<VirksomhetIdentifikasjonPanel>', () => {
  it('skal rendre korrekt ved default props', () => {
    const wrapper = shallowWithIntl(<VirksomhetIdentifikasjonPanel
      intl={intlMock}
      alleKodeverk={{
        [kodeverkTyper.LANDKODER]: [],
      }}
      form="test"
    />);

    const undertekst = wrapper.find('Undertekst');
    expect(undertekst).to.have.length(1);

    const inputs = wrapper.find('InputField');
    expect(inputs).to.have.length(1);
    expect(inputs.at(0).prop('name')).to.equal('navn');

    const select = wrapper.find('SelectField');
    expect(select).to.have.length(0);

    const radios = wrapper.find('RadioOption');
    expect(radios).to.have.length(2);

    const datepicker = wrapper.find('DatepickerField');
    expect(datepicker).to.have.length(0);
  });

  it('skal rendre korrekt når virksomhet er registrert i Norge', () => {
    const wrapper = shallowWithIntl(<VirksomhetIdentifikasjonPanel
      virksomhetRegistrertINorge
      alleKodeverk={{
        [kodeverkTyper.LANDKODER]: [],
      }}
      intl={intlMock}
      form="test"
    />);

    const inputs = wrapper.find('InputField');
    expect(inputs).to.have.length(2);
    expect(inputs.at(0).prop('name')).to.equal('navn');
    expect(inputs.at(1).prop('name')).to.equal('organisasjonsnummer');
  });

  it('skal rendre korrekt når virksomhet ikke er registrert i Norge', () => {
    const wrapper = shallowWithIntl(<VirksomhetIdentifikasjonPanel
      virksomhetRegistrertINorge={false}
      alleKodeverk={{
        [kodeverkTyper.LANDKODER]: [],
      }}
      intl={intlMock}
      form="test"
    />);

    const select = wrapper.find('SelectField');
    expect(select).to.have.length(1);

    const datepicker = wrapper.find('DatepickerField');
    expect(datepicker).to.have.length(2);
  });
});
