import React from 'react';
import { expect } from 'chai';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-papirsoknad-fp';
import { BekreftelsePanel } from './BekreftelsePanel';

describe('<BekreftelsePanel>', () => {
  describe('Foreldrepenger-søknad', () => {
    it('skal vise radioknapper for om annen foreldre er kjent med perioder det er søkt om', () => {
      const wrapper = shallowWithIntl(<BekreftelsePanel
        intl={intlMock}
        readOnly={false}
        annenForelderInformertRequired
      />);
      expect(wrapper.find({ name: 'annenForelderInformert' })).to.have.length(1);
    });
  });
});
