import React from 'react';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { DatepickerField } from '@fpsak-frontend/form';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-papirsoknad-svp';
import TerminFodselSvpPanel from './TerminFodselSvpPanel';

describe('<TerminFodselSvpPanel>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallowWithIntl(<TerminFodselSvpPanel.WrappedComponent
      intl={intlMock}
      readOnly={false}
    />);

    expect(wrapper.find(DatepickerField)).toHaveLength(2);
  });
});
