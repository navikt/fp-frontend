import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../../i18n/nb_NO.json';
import { BekreftelsePanel } from './BekreftelsePanel';

describe('<BekreftelsePanel>', () => {
  describe('Foreldrepenger-søknad', () => {
    it('skal vise radioknapper for om annen foreldre er kjent med perioder det er søkt om', () => {
      const wrapper = shallow(<BekreftelsePanel
        intl={getIntlMock(messages)}
        readOnly={false}
        annenForelderInformertRequired
      />);
      expect(wrapper.find({ name: 'annenForelderInformert' })).toHaveLength(1);
    });
  });
});
