import React from 'react';
import { shallow } from 'enzyme';
import Modal from 'nav-frontend-modal';

import KlageBehandlingModal from './KlageBehandlingModal';

describe('<KlageBehandlingModal>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<KlageBehandlingModal
      lukkModal={() => {}}
    />);

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.props().contentLabel).toEqual('Vedtaket er stadfestet. Du kommer nå til forsiden');
  });
});
