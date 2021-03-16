import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'nav-frontend-modal';

import AnkeBehandlingModal from './AnkeBehandlingModal';

describe('<KlageBehandlinAnkeBehandlingModalgModal>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<AnkeBehandlingModal
      lukkModal={() => {}}
      erFerdigbehandlet
      venterTrygderett
    />);

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.props().contentLabel).toEqual('Vedtaket er stadfestet. Du kommer nå til forsiden');
  });
});
