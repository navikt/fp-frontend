import React from 'react';
import sinon from 'sinon';
import Modal from 'nav-frontend-modal';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import HenlagtBehandlingModal from './HenlagtBehandlingModal';
import messages from '../../i18n/nb_NO.json';

describe('<HenlagtBehandlingModal>', () => {
  it('skal rendre åpen modal', () => {
    const wrapper = shallowWithIntl(<HenlagtBehandlingModal.WrappedComponent
      showModal
      closeEvent={sinon.spy()}
      intl={getIntlMock(messages)}
    />, messages);

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('closeButton')).toBe(false);
    expect(modal.prop('contentLabel')).toEqual('Behandlingen er henlagt');

    const okKnapp = modal.find('Hovedknapp');
    expect(okKnapp).toHaveLength(1);
    expect(okKnapp.prop('mini')).toBe(true);
    expect(okKnapp.childAt(0).text()).toEqual('OK');
  });

  it('skal rendre lukket modal', () => {
    const wrapper = shallowWithIntl(<HenlagtBehandlingModal.WrappedComponent
      showModal={false}
      closeEvent={sinon.spy()}
      intl={getIntlMock(messages)}
    />, messages);

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(false);
  });
});
