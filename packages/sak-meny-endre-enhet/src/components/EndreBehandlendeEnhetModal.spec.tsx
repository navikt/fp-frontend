import React from 'react';
import sinon from 'sinon';
import Modal from 'nav-frontend-modal';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { EndreBehandlendeEnhetModal } from './EndreBehandlendeEnhetModal';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<ChangeBehandlendeEnhetModal>', () => {
  const behandlendeEnheter = [{
    enhetId: '001',
    enhetNavn: 'NAV',
    status: 'Aktiv',
  }];

  it('skal rendre åpen modal', () => {
    const wrapper = shallowWithIntl(<EndreBehandlendeEnhetModal
      {...reduxFormPropsMock}
      handleSubmit={sinon.spy()}
      lukkModal={sinon.spy()}
      behandlendeEnheter={behandlendeEnheter}
      gjeldendeBehandlendeEnhetId="002"
      gjeldendeBehandlendeEnhetNavn="Oslo"
      nyEnhet="Test3"
      begrunnelse="Dette er en begrunnelse"
      intl={intlMock}
    />, messages);

    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('closeButton')).toBe(false);
    expect(modal.prop('contentLabel')).toEqual('Endre behandlende enhet');

    const button = wrapper.find('Hovedknapp');
    expect(button).toHaveLength(1);
    expect(button.prop('disabled')).toBe(false);
  });

  it('skal vise nedtrekksliste med behandlende enheter', () => {
    const wrapper = shallowWithIntl(<EndreBehandlendeEnhetModal
      {...reduxFormPropsMock}
      handleSubmit={sinon.spy()}
      lukkModal={sinon.spy()}
      behandlendeEnheter={behandlendeEnheter}
      gjeldendeBehandlendeEnhetId="002"
      gjeldendeBehandlendeEnhetNavn="Oslo"
      nyEnhet="Test"
      begrunnelse="Dette er en begrunnelse"
      intl={intlMock}
    />, messages);

    const selectField = wrapper.find('SelectField');
    expect(selectField).toHaveLength(1);
    expect(selectField.prop('placeholder')).toEqual('002 Oslo');
    const values = selectField.prop('selectValues') as { props: { value: string }}[];
    expect(values[0].props.value).toEqual('0');
  });

  it('skal disable knapp for lagring når ny behandlende enhet og begrunnnelse ikke er valgt', () => {
    const wrapper = shallowWithIntl(<EndreBehandlendeEnhetModal
      {...reduxFormPropsMock}
      handleSubmit={sinon.spy()}
      lukkModal={sinon.spy()}
      behandlendeEnheter={behandlendeEnheter}
      gjeldendeBehandlendeEnhetId="002"
      gjeldendeBehandlendeEnhetNavn="Oslo"
      intl={intlMock}
    />, messages);

    const button = wrapper.find('Hovedknapp');
    expect(button.prop('disabled')).toBe(true);
  });

  it('skal bruke submit-callback når en trykker ok', () => {
    const submitEventCallback = sinon.spy();
    const wrapper = shallowWithIntl(<EndreBehandlendeEnhetModal
      {...reduxFormPropsMock}
      handleSubmit={submitEventCallback}
      lukkModal={sinon.spy()}
      behandlendeEnheter={behandlendeEnheter}
      gjeldendeBehandlendeEnhetId="002"
      gjeldendeBehandlendeEnhetNavn="Oslo"
      nyEnhet="Test"
      begrunnelse="Dette er en begrunnelse"
      intl={intlMock}
    />, messages);

    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() { return undefined; } });
    expect(submitEventCallback.called).toBe(true);
  });

  it('skal avbryte redigering ved trykk på avbryt-knapp', () => {
    const cancelEventCallback = sinon.spy();
    const wrapper = shallowWithIntl(<EndreBehandlendeEnhetModal
      {...reduxFormPropsMock}
      handleSubmit={sinon.spy()}
      lukkModal={cancelEventCallback}
      behandlendeEnheter={behandlendeEnheter}
      gjeldendeBehandlendeEnhetId="002"
      gjeldendeBehandlendeEnhetNavn="Oslo"
      nyEnhet="Test"
      begrunnelse="Dette er en begrunnelse"
      intl={intlMock}
    />, messages);

    const avbrytKnapp = wrapper.find('Knapp');
    expect(avbrytKnapp).toHaveLength(1);
    expect(avbrytKnapp.prop('mini')).toBe(true);

    avbrytKnapp.simulate('click');
    expect(cancelEventCallback.called).toBe(true);
  });
});
