import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { OkAvbrytModal } from '@fpsak-frontend/shared-components';

import MenyTaAvVentIndex from './MenyTaAvVentIndex';

describe('<MenyTaAvVentIndex>', () => {
  it('skal vise modal og velge å åpne ta behandling av vent', () => {
    const resumeBehandlingCallback = sinon.spy();
    const lukkModalCallback = sinon.spy();

    const wrapper = shallow(<MenyTaAvVentIndex
      behandlingVersjon={1}
      taBehandlingAvVent={resumeBehandlingCallback}
      lukkModal={lukkModalCallback}
    />);

    const modal = wrapper.find(OkAvbrytModal);
    expect(modal).toHaveLength(1);

    modal.prop('submit')();

    const kall = resumeBehandlingCallback.getCalls();
    expect(kall).toHaveLength(1);
  });
});
