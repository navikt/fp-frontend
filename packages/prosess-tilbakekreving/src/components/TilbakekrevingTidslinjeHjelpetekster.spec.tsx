import React from 'react';

import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { LegendBox } from '@fpsak-frontend/tidslinje';

import TilbakekrevingTidslinjeHjelpetekster from './TilbakekrevingTidslinjeHjelpetekster';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<TilbakekrevingTidslinjeHjelpetekster>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallowWithIntl(
      <TilbakekrevingTidslinjeHjelpetekster.WrappedComponent
        intl={intlMock}
      />, messages,
    );

    expect(wrapper.find(LegendBox)).toHaveLength(1);
  });
});
