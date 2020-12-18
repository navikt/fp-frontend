import React from 'react';
import sinon from 'sinon';
import Modal from 'nav-frontend-modal';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-papirsoknad-virksomhet';
import { RegistrerVirksomhetModalForm } from './RegistrerVirksomhetModalForm';

describe('<RegistrerVirksomhetModalForm>', () => {
  it('skal rendre form for å registrere virksomhet i modalvisning', () => {
    const wrapper = shallowWithIntl(<RegistrerVirksomhetModalForm
      {...reduxFormPropsMock}
      intl={intlMock}
      handleSubmit={sinon.spy()}
      closeEvent={sinon.spy()}
      showModal
      alleKodeverk={{}}
    />);

    const modal = wrapper.find(Modal);
    expect(modal.prop('isOpen')).toBe(true);

    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('Connect(VirksomhetIdentifikasjonPanel)')).toHaveLength(1);
    expect(wrapper.find('Connect(VirksomhetIdentifikasjonPanel)')).toHaveLength(1);
    expect(wrapper.find('Connect(VirksomhetTypeNaringPanel)')).toHaveLength(1);
    expect(wrapper.find('Connect(VirksomhetStartetEndretPanel)')).toHaveLength(1);
    expect(wrapper.find('VirksomhetRelasjonPanel')).toHaveLength(1);

    const hovedknapp = wrapper.find('Hovedknapp');
    expect(hovedknapp).toHaveLength(1);

    const knapp = wrapper.find('Knapp');
    expect(knapp).toHaveLength(1);
  });

  it('skal rendre lukket modal', () => {
    const wrapper = shallowWithIntl(<RegistrerVirksomhetModalForm
      {...reduxFormPropsMock}
      intl={intlMock}
      handleSubmit={sinon.spy()}
      closeEvent={sinon.spy()}
      showModal={false}
      alleKodeverk={{}}
    />);

    const modal = wrapper.find(Modal);
    expect(modal.prop('isOpen')).toBe(false);
  });

  it('skal kalle submit ved trykk på hovedknapp', () => {
    const handleSubmit = sinon.spy();
    const wrapper = shallowWithIntl(<RegistrerVirksomhetModalForm
      {...reduxFormPropsMock}
      intl={intlMock}
      handleSubmit={handleSubmit}
      closeEvent={sinon.spy()}
      showModal={false}
      alleKodeverk={{}}
    />);

    const hovedknapp = wrapper.find('Hovedknapp');
    hovedknapp.simulate('click');
    expect(handleSubmit.called).toBe(true);
  });

  it('skal kalle close ved trykk på knapp', () => {
    const closeEvent = sinon.spy();
    const wrapper = shallowWithIntl(<RegistrerVirksomhetModalForm
      {...reduxFormPropsMock}
      intl={intlMock}
      handleSubmit={sinon.spy()}
      closeEvent={closeEvent}
      showModal={false}
      alleKodeverk={{}}
    />);

    const knapp = wrapper.find('Knapp');
    knapp.simulate('click');
    expect(closeEvent.called).toBe(true);
  });
});
