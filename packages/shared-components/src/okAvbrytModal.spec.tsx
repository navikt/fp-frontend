import React from 'react';
import sinon from 'sinon';
import { Hovedknapp } from 'nav-frontend-knapper';
import Modal from 'nav-frontend-modal';

import shallowWithIntl from '../i18n/intl-enzyme-test-helper-shared-components';

import OkAvbrytModal from './OkAvbrytModal';

describe('<OkAvbrytModal>', () => {
  it('skal rendre modal', () => {
    const wrapper = shallowWithIntl(
      <OkAvbrytModal
        text="Åpen behandling"
        showModal
        cancel={sinon.spy()}
        submit={sinon.spy()}
      />,
    );

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('contentLabel')).toEqual('Åpen behandling');

    const knapp = wrapper.find(Hovedknapp);
    expect(knapp).toHaveLength(1);
    expect(knapp.childAt(0).text()).toEqual('OK');
  });
});
