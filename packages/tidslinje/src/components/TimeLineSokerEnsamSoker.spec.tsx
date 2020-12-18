import React from 'react';
import { Row } from 'nav-frontend-grid';

import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import Image from '@fpsak-frontend/shared-components/src/Image';

import TimeLineSokerEnsamSoker from './TimeLineSokerEnsamSoker';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const mockIntl = jest.requireActual('@fpsak-frontend/utils-test/src/intl-enzyme-test-helper');
  return {
    ...reactIntl,
    useIntl: () => mockIntl.intlMock,
  };
});

describe('<TimeLineSokerEnsamSoker>', () => {
  it('skal teste at TimeLineSoker viser korrekte bilder för korrekte soker', () => {
    const wrapper = shallowWithIntl(<TimeLineSokerEnsamSoker
      hovedsokerKjonnKode="K"
    />);
    const rows = wrapper.find(Row);
    expect(rows).toHaveLength(1);
    expect(rows.find(Image).at(0).props().tooltip).toEqual('Kvinne');
  });
});
