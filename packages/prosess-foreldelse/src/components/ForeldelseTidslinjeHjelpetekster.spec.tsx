import React from 'react';

import { LegendBox } from '@fpsak-frontend/tidslinje';
import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import ForeldelseTidslinjeHjelpetekster from './ForeldelseTidslinjeHjelpetekster';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<ForeldelseTidslinjeHjelpetekster>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallowWithIntl(
      <ForeldelseTidslinjeHjelpetekster.WrappedComponent
        intl={intlMock}
      />, messages,
    );

    const box = wrapper.find(LegendBox);
    expect(box.prop('legends')).toHaveLength(3);
  });
});
