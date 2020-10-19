import React from 'react';
import { expect } from 'chai';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-papirsoknad-fp';
import { DekningsgradPanel } from './DekningsgradPanel';

describe('<DekningsgradPanel>', () => {
  it('skal vise dekningsgradpanel', () => {
    const wrapper = shallowWithIntl(<DekningsgradPanel
      intl={intlMock}
      readOnly={false}
    />);

    const radios = wrapper.find('RadioOption');
    expect(radios).to.have.length(2);
  });
});
