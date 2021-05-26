import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { AlleKodeverk } from '@fpsak-frontend/types';

import messages from '../../i18n/nb_NO.json';
import { EgenVirksomhetPanel } from './EgenVirksomhetPanel';

const intlMock = getIntlMock(messages);

describe('<EgenVirksomhetPanel>', () => {
  it('skal rendre korrekt ved default props', () => {
    const wrapper = shallow(<EgenVirksomhetPanel
      intl={intlMock}
      form="form"
      alleKodeverk={{} as AlleKodeverk}
    />);

    const radios = wrapper.find('RadioOption');
    expect(radios).toHaveLength(2);

    const fieldarray = wrapper.find('FieldArray');
    expect(fieldarray).toHaveLength(0);
  });

  it('skal rendre korrekt når har arbeidet i egen virksomhet', () => {
    const wrapper = shallow(<EgenVirksomhetPanel
      harArbeidetIEgenVirksomhet
      intl={intlMock}
      form="form"
      alleKodeverk={{} as AlleKodeverk}
    />);

    const fieldarray = wrapper.find('FieldArray');
    expect(fieldarray).toHaveLength(1);
  });
});
