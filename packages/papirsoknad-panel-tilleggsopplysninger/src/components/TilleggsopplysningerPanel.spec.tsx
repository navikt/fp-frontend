import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { TextAreaField } from '@fpsak-frontend/form';

import messages from '../../i18n/nb_NO.json';
import { TilleggsopplysningerPanel } from './TilleggsopplysningerPanel';

describe('<TilleggsopplysningerPanel>', () => {
  it('skal vise komponent som default', () => {
    const wrapper = shallow(<TilleggsopplysningerPanel intl={getIntlMock(messages)} readOnly={false} />);
    const additionalInfo = wrapper.find(TextAreaField);
    expect(additionalInfo).toHaveLength(1);
  });
});
