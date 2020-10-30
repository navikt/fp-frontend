import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { Hovedknapp } from 'nav-frontend-knapper';
import Modal from 'nav-frontend-modal';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import FatterVedtakApprovalModal from './FatterVedtakApprovalModal';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-sak-totrinnskontroll';

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
      fagsakYtelseType={{
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      }}
      erKlageWithKA
    />);

    const modal = wrapper.find(Modal);
    expect(modal).to.have.length(1);
    expect(modal.prop('isOpen')).is.true;
    expect(modal.prop('contentLabel')).is.eql('Returneres til saksbehandler for iverksettelse');

    const button = wrapper.find(Hovedknapp);
    expect(button).to.have.length(1);
  });

  it('skal rendre modal for iverksetter vedtak', () => {
    const wrapper = shallowWithIntl(<FatterVedtakApprovalModal.WrappedComponent
      intl={intlMock}
      closeEvent={closeEventCallback}
      allAksjonspunktApproved
      behandlingId={1}
      behandlingStatusKode={behandlingStatus.FATTER_VEDTAK}
      behandlingTypeKode={BehandlingType.FORSTEGANGSSOKNAD}
      fagsakYtelseType={{
        kode: fagsakYtelseType.ENGANGSSTONAD,
        kodeverk: '',
      }}
      erKlageWithKA
    />);

    const modal = wrapper.find(Modal);
    expect(modal).to.have.length(1);
    expect(modal.prop('isOpen')).is.true;
    expect(modal.prop('contentLabel')).is.eql('Engangsstønad er innvilget og vedtaket blir iverksatt. Du kommer nå til forsiden.');

    const button = wrapper.find(Hovedknapp);
    expect(button).to.have.length(1);
  });

  it('skal rendre modal for iverksetter vedtak foreldrepenger', () => {
    const wrapper = shallowWithIntl(<FatterVedtakApprovalModal.WrappedComponent
      intl={intlMock}
      closeEvent={closeEventCallback}
      allAksjonspunktApproved
      behandlingId={1}
      behandlingStatusKode={behandlingStatus.FATTER_VEDTAK}
      behandlingTypeKode={BehandlingType.FORSTEGANGSSOKNAD}
      fagsakYtelseType={{
        kode: fagsakYtelseType.FORELDREPENGER,
        kodeverk: '',
      }}
      erKlageWithKA
    />);

    const modal = wrapper.find(Modal);
    expect(modal).to.have.length(1);
    expect(modal.prop('isOpen')).is.true;
    expect(modal.prop('contentLabel')).is.eql('Foreldrepenger er innvilget og vedtaket blir iverksatt. Du kommer nå til forsiden.');

    const button = wrapper.find(Hovedknapp);
    expect(button).to.have.length(1);
  });
});
