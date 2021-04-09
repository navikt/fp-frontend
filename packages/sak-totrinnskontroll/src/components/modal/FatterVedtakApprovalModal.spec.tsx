import React from 'react';
import sinon from 'sinon';
import { Hovedknapp } from 'nav-frontend-knapper';
import Modal from 'nav-frontend-modal';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import FatterVedtakApprovalModal from './FatterVedtakApprovalModal';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<FatterVedtakApprovalModal>', () => {
  const closeEventCallback = sinon.spy();
  it('skal rendre modal for fatter vedtak', () => {
    const wrapper = shallowWithIntl(<FatterVedtakApprovalModal.WrappedComponent
      intl={intlMock}
      closeEvent={closeEventCallback}
      allAksjonspunktApproved
      behandlingId={1}
      behandlingStatusKode={behandlingStatus.FATTER_VEDTAK}
      behandlingTypeKode={BehandlingType.KLAGE}
      erKlageWithKA
    />, messages);

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('contentLabel')).toEqual('Returneres til saksbehandler for iverksettelse');

    const button = wrapper.find(Hovedknapp);
    expect(button).toHaveLength(1);
  });

  it('skal rendre modal for iverksetter vedtak', () => {
    const wrapper = shallowWithIntl(<FatterVedtakApprovalModal.WrappedComponent
      intl={intlMock}
      closeEvent={closeEventCallback}
      allAksjonspunktApproved
      behandlingId={1}
      behandlingStatusKode={behandlingStatus.FATTER_VEDTAK}
      behandlingTypeKode={BehandlingType.FORSTEGANGSSOKNAD}
      erKlageWithKA
    />, messages);

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('contentLabel')).toEqual(
      'Vedtaket er innvilget og vedtaket blir iverksatt. Du kommer nå til forsiden.',
    );

    const button = wrapper.find(Hovedknapp);
    expect(button).toHaveLength(1);
  });

  it('skal rendre modal for iverksetter vedtak foreldrepenger', () => {
    const wrapper = shallowWithIntl(<FatterVedtakApprovalModal.WrappedComponent
      intl={intlMock}
      closeEvent={closeEventCallback}
      allAksjonspunktApproved
      behandlingId={1}
      behandlingStatusKode={behandlingStatus.FATTER_VEDTAK}
      behandlingTypeKode={BehandlingType.FORSTEGANGSSOKNAD}
      erKlageWithKA
    />, messages);

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('contentLabel')).toEqual(
      'Vedtaket er innvilget og vedtaket blir iverksatt. Du kommer nå til forsiden.',
    );

    const button = wrapper.find(Hovedknapp);
    expect(button).toHaveLength(1);
  });
});
