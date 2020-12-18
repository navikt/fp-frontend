import React from 'react';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-papirsoknad-virksomhet';
import { EgenVirksomhetPanel } from './EgenVirksomhetPanel';

describe('<EgenVirksomhetPanel>', () => {
  it('skal rendre korrekt ved default props', () => {
    const wrapper = shallowWithIntl(<EgenVirksomhetPanel
      intl={intlMock}
      form="form"
      alleKodeverk={{}}
    />);

    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);

    const fieldarray = wrapper.find('FieldArray');
    expect(fieldarray).toHaveLength(0);
  });

  it('skal rendre korrekt når har arbeidet i egen virksomhet', () => {
    const wrapper = shallowWithIntl(<EgenVirksomhetPanel
      harArbeidetIEgenVirksomhet
      intl={intlMock}
      form="form"
      alleKodeverk={{}}
    />);

    const fieldarray = wrapper.find('FieldArray');
    expect(fieldarray).toHaveLength(1);
  });
});
