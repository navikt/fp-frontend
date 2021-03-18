import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Hovedknapp } from 'nav-frontend-knapper';
import Modal from 'nav-frontend-modal';

import FatterVedtakStatusModal from './FatterVedtakStatusModal';

describe('<FatterVedtakStatusModal>', () => {
  const closeEventCallback = sinon.spy();

  it('skal rendre modal for fatter vedtak', () => {
    const wrapper = shallow(<FatterVedtakStatusModal
      visModal
      tekst="Klagen er ferdigbehandlet"
      lukkModal={closeEventCallback}
    />);

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('contentLabel')).toEqual('Klagen er ferdigbehandlet');

    const button = wrapper.find(Hovedknapp);
    expect(button).toHaveLength(1);
  });
});
