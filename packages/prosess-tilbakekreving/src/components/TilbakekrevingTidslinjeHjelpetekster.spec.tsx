import React from 'react';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { LegendBox } from '@fpsak-frontend/tidslinje';

import TilbakekrevingTidslinjeHjelpetekster from './TilbakekrevingTidslinjeHjelpetekster';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-tilbakekreving';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<TilbakekrevingTidslinjeHjelpetekster>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallowWithIntl(
      <TilbakekrevingTidslinjeHjelpetekster.WrappedComponent
        intl={intlMock}
      />,
    );

    expect(wrapper.find(LegendBox)).toHaveLength(1);
  });
});
