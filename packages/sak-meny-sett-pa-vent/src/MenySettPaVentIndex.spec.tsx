import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';

import MenySettPaVentIndex from './MenySettPaVentIndex';

describe('<MenySettPaVentIndex>', () => {
  it('skal vise modal og velge å åpne ta behandling av vent', () => {
    const setBehandlingOnHoldCallback = sinon.spy();
    const lukkModalCallback = sinon.spy();

    const wrapper = shallow(<MenySettPaVentIndex
      behandlingVersjon={1}
      settBehandlingPaVent={setBehandlingOnHoldCallback}
      ventearsaker={[]}
      lukkModal={lukkModalCallback}
      erTilbakekreving={false}
    />);

    const modal = wrapper.find(SettPaVentModalIndex);
    expect(modal).toHaveLength(1);

    modal.prop('submitCallback')({
      frist: '20-12-2020',
      ventearsak: 'test',
    });

    const kall = setBehandlingOnHoldCallback.getCalls();
    expect(kall).toHaveLength(1);
    expect(kall[0].args).toHaveLength(1);
    expect(kall[0].args[0]).toEqual({
      frist: '20-12-2020',
      ventearsak: 'test',
    });
  });
});
