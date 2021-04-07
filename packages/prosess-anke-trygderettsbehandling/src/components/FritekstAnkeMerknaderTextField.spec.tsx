import React from 'react';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { TextAreaField } from '@fpsak-frontend/form';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-anke-trygderettsbehandling';
import messages from '../../i18n/nb_NO.json';
import FritekstAnkeMerknaderTextField from './FritekstAnkeMerknaderTextField';

describe('<TrygderettsbehandlingForm>', () => {
  const sprakkode = {
    kode: 'NB',
    kodeverk: '',
  };

  it('skal rendre komponent korrekt', () => {
    const wrapper = shallowWithIntl(
      <FritekstAnkeMerknaderTextField.WrappedComponent
        intl={getIntlMock(messages)}
        sprakkode={sprakkode}
        readOnly={false}
      />,
    );

    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });
});
