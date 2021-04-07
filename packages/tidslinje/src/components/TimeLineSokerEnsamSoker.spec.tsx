import React from 'react';
import { Row } from 'nav-frontend-grid';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import Image from '@fpsak-frontend/shared-components/src/Image';

import TimeLineSokerEnsamSoker from './TimeLineSokerEnsamSoker';
import messages from '../../i18n/nb_NO.json';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  return {
    ...reactIntl,
    useIntl: () => getIntlMock(messages),
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
