import React from 'react';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { TextAreaField } from '@fpsak-frontend/form';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-papirsoknad-tilleggsopplysninger';
import { TilleggsopplysningerPanel } from './TilleggsopplysningerPanel';

describe('<TilleggsopplysningerPanel>', () => {
  it('skal vise komponent som default', () => {
    const wrapper = shallowWithIntl(<TilleggsopplysningerPanel intl={intlMock} readOnly={false} />);
    const additionalInfo = wrapper.find(TextAreaField);
    expect(additionalInfo).toHaveLength(1);
  });
});
