import React from 'react';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { AlleKodeverk } from '@fpsak-frontend/types';

import messages from '../../i18n/nb_NO.json';
import { VirksomhetIdentifikasjonPanel } from './VirksomhetIdentifikasjonPanel';

const intlMock = getIntlMock(messages);

describe('<VirksomhetIdentifikasjonPanel>', () => {
  const alleKodeverk = {
    [kodeverkTyper.LANDKODER]: [{}],
  } as AlleKodeverk;

  it('skal rendre korrekt ved default props', () => {
    const wrapper = shallowWithIntl(<VirksomhetIdentifikasjonPanel
      intl={intlMock}
      alleKodeverk={alleKodeverk}
      form="test"
    />, messages);

    const undertekst = wrapper.find('Undertekst');
    expect(undertekst).toHaveLength(1);

    const inputs = wrapper.find('InputField');
    expect(inputs).toHaveLength(1);
    expect(inputs.at(0).prop('name')).toBe('navn');

    const select = wrapper.find('SelectField');
    expect(select).toHaveLength(0);

    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);

    const datepicker = wrapper.find('DatepickerField');
    expect(datepicker).toHaveLength(0);
  });

  it('skal rendre korrekt når virksomhet er registrert i Norge', () => {
    const wrapper = shallowWithIntl(<VirksomhetIdentifikasjonPanel
      virksomhetRegistrertINorge
      alleKodeverk={alleKodeverk}
      intl={intlMock}
      form="test"
    />, messages);

    const inputs = wrapper.find('InputField');
    expect(inputs).toHaveLength(2);
    expect(inputs.at(0).prop('name')).toBe('navn');
    expect(inputs.at(1).prop('name')).toBe('organisasjonsnummer');
  });

  it('skal rendre korrekt når virksomhet ikke er registrert i Norge', () => {
    const wrapper = shallowWithIntl(<VirksomhetIdentifikasjonPanel
      virksomhetRegistrertINorge={false}
      alleKodeverk={alleKodeverk}
      intl={intlMock}
      form="test"
    />, messages);

    const select = wrapper.find('SelectField');
    expect(select).toHaveLength(1);

    const datepicker = wrapper.find('DatepickerField');
    expect(datepicker).toHaveLength(2);
  });
});
