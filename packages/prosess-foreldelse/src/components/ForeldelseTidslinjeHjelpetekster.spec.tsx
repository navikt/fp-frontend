import React from 'react';
import { expect } from 'chai';

import { LegendBox } from '@fpsak-frontend/tidslinje';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import ForeldelseTidslinjeHjelpetekster from './ForeldelseTidslinjeHjelpetekster';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-foreldelse';

describe('<ForeldelseTidslinjeHjelpetekster>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallowWithIntl(
      <ForeldelseTidslinjeHjelpetekster.WrappedComponent
        intl={intlMock}
      />,
    );

    const box = wrapper.find(LegendBox);
    expect(box.prop('legends')).has.length(3);
  });
});
