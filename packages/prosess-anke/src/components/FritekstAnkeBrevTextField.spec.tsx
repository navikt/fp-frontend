import React from 'react';
import { shallow } from 'enzyme';

import { TextAreaField } from '@fpsak-frontend/form';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../i18n/nb_NO.json';

import FritekstAnkeBrevTextField from './FritekstAnkeBrevTextField';

const intlMock = getIntlMock(messages);

describe('<FritekstAnkeBrevTextField>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<FritekstAnkeBrevTextField.WrappedComponent
      sprakkode={{
        kode: 'nb',
        kodeverk: '',
      }}
      readOnly={false}
      intl={intlMock}
    />);

    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });
});
