import React from 'react';
import { mountWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import Image from '@fpsak-frontend/shared-components/src/Image';
// eslint-disable-next-line import/extensions
import TimeLineSoker from './TimeLineSoker';
import messages from '../../i18n/nb_NO.json';

describe('<TimeLineSoker>', () => {
  it('skal teste at TimeLineSoker viser korrekte bilder för korrekte soker', () => {
    const wrapper = mountWithIntl(<TimeLineSoker
      soker1KjonnKode="K"
      soker2KjonnKode="M"
    />, messages);
    const rows = wrapper.find('Row');
    expect(rows).toHaveLength(2);
    expect(rows.find(Image).at(0).props().tooltip).toEqual('Kvinne');
    expect(rows.find(Image).at(1).props().tooltip).toEqual('Mann');
  });
});
