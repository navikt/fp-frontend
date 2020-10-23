import React from 'react';
import { expect } from 'chai';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { intlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { ArrowBox } from '@fpsak-frontend/shared-components';

import { FrilansOppdragForFamiliePanelImpl } from './FrilansOppdragForFamiliePanel';

describe('<FrilansOppdragForFamiliePanelImpl>', () => {
  it('Skal rendre uten perioder når checkbox ikke er valgt', () => {
    const wrapper = shallowWithIntl(<FrilansOppdragForFamiliePanelImpl intl={intlMock} readOnly={false} />);
    expect(wrapper.find(ArrowBox)).has.length(0);
  });

  it('Skal rendre perioder når checkbox er valgt', () => {
    const wrapper = shallowWithIntl(<FrilansOppdragForFamiliePanelImpl intl={intlMock} readOnly={false} harHattOppdragForFamilie />);
    expect(wrapper.find(ArrowBox)).has.length(1);
  });
});
