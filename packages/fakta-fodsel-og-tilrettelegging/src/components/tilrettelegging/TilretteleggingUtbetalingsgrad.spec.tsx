import React from 'react';
import { Image } from '@navikt/ft-ui-komponenter';

import { DecimalField } from '@fpsak-frontend/form';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import TilretteleggingUtbetalingsgrad from './TilretteleggingUtbetalingsgrad';
import messages from '../../../i18n/nb_NO.json';

describe('<TilretteleggingUtbetalingsgrad>', () => {
  it('skal vise inputfelt som kan editeres når overstyrer velger å overstyre', () => {
    const wrapper = shallowWithIntl(<TilretteleggingUtbetalingsgrad.WrappedComponent
      tilretteleggingKode="TEST"
      readOnly={false}
      erOverstyrer
      fieldId="1"
      setOverstyrtUtbetalingsgrad={() => undefined}
      formSectionName=""
      overstyrtUtbetalingsgrad="0"
      formName="test"
    />, messages);

    expect(wrapper.find(DecimalField).prop('readOnly')).toBe(true);

    const image = wrapper.find(Image);
    image.prop('onClick')({} as React.MouseEvent);

    expect(wrapper.find(DecimalField).prop('readOnly')).toBe(false);
  });
});
