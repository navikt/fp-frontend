import React from 'react';
import { Row } from 'nav-frontend-grid';
import { Image } from '@navikt/ft-ui-komponenter';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import TimeLineSokerEnsamSoker from './TimeLineSokerEnsamSoker';
import messages from '../../i18n/nb_NO.json';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const intlTestHelper = jest.requireActual('@fpsak-frontend/utils-test/src/intl-enzyme-test-helper');
  const intlMessages = jest.requireActual('../../i18n/nb_NO.json');
  return {
    ...reactIntl,
    useIntl: () => intlTestHelper.getIntlMock(intlMessages),
  };
});

describe('<TimeLineSokerEnsamSoker>', () => {
  it('skal teste at TimeLineSoker viser korrekte bilder för korrekte soker', () => {
    const wrapper = shallowWithIntl(<TimeLineSokerEnsamSoker
      hovedsokerKjonnKode="K"
    />, messages);
    const rows = wrapper.find(Row);
    expect(rows).toHaveLength(1);
    expect(rows.find(Image).at(0).props().tooltip).toEqual('Kvinne');
  });
});
