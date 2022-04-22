import React from 'react';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { TextAreaField } from '@fpsak-frontend/form';

import messages from '../../i18n/nb_NO.json';
import FritekstAnkeMerknaderTextField from './FritekstAnkeMerknaderTextField';

describe('<TrygderettsbehandlingForm>', () => {
  const sprakkode = 'NB';

  it('skal rendre komponent korrekt', () => {
    const wrapper = shallowWithIntl(
      /* @ts-ignore Fiks cannot be used as a JSX component */
      <FritekstAnkeMerknaderTextField.WrappedComponent
        intl={getIntlMock(messages)}
        sprakkode={sprakkode}
        readOnly={false}
      />, messages,
    );

    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });
});
