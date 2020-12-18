import React from 'react';

import { DecimalField } from '@fpsak-frontend/form';
import { Image } from '@fpsak-frontend/shared-components';

import TilretteleggingUtbetalingsgrad from './TilretteleggingUtbetalingsgrad';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-fodsel-og-tilrettelegging';

describe('<TilretteleggingUtbetalingsgrad>', () => {
  it('skal vise inputfelt som kan editeres når overstyrer velger å overstyre', () => {
    const wrapper = shallowWithIntl(<TilretteleggingUtbetalingsgrad.WrappedComponent
      tilretteleggingKode="TEST"
      readOnly={false}
      erOverstyrer
      fieldId="1"
      setOverstyrtUtbetalingsgrad={() => undefined}
      utbetalingsgrad="0"
      formSectionName=""
      changeField={() => undefined}
      index={0}
      overstyrtUtbetalingsgrad="0"
      behandlingId={1}
      behandlingVersjon={2}
      formName="test"
    />);

    expect(wrapper.find(DecimalField).prop('readOnly')).toBe(true);

    const image = wrapper.find(Image);
    image.prop('onClick')({} as React.MouseEvent);

    expect(wrapper.find(DecimalField).prop('readOnly')).toBe(false);
  });
});
