import React from 'react';
import sinon from 'sinon';

import { OkAvbrytModal } from '@fpsak-frontend/shared-components';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import MenyApneForEndringerIndex from './MenyApneForEndringerIndex';
import messages from '../i18n/nb_NO.json';

describe('<MenyApneForEndringerIndex>', () => {
  it('skal vise modal og velge å åpne behandling for endringer', () => {
    const apneForEndringerCallback = sinon.spy();
    const lukkModalCallback = sinon.spy();

    const wrapper = shallowWithIntl(<MenyApneForEndringerIndex
      apneBehandlingForEndringer={apneForEndringerCallback}
      lukkModal={lukkModalCallback}
    />, messages);

    const modal = wrapper.find(OkAvbrytModal);
    expect(modal).toHaveLength(1);

    modal.prop('submit')();

    const kall = apneForEndringerCallback.getCalls();
    expect(kall).toHaveLength(1);
  });
});
