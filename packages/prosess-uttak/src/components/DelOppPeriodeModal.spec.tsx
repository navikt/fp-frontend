import React from 'react';
import sinon from 'sinon';
import Modal from 'nav-frontend-modal';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { DelOppPeriodeModal } from './DelOppPeriodeModal';
import messages from '../../i18n/nb_NO.json';
import { PeriodeMedClassName } from './Uttak';

const intlMock = getIntlMock(messages);

describe('<DelOppPeriodeModal>', () => {
  const periodeData = {
    fom: '2018-01-01',
    tom: '2018-03-01',
  } as PeriodeMedClassName;
  const cancelEvent = sinon.spy();

  it('skal rendre modal for del opp periode', () => {
    const wrapper = shallowWithIntl(<DelOppPeriodeModal
      {...reduxFormPropsMock}
      periodeData={periodeData}
      showModal
      intl={intlMock}
      cancelEvent={cancelEvent}
      behandlingId={1}
      behandlingVersjon={2}
      splitPeriod={sinon.spy()}
      validate={sinon.spy()}
      onSubmit={sinon.spy()}
    />, messages);
    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('closeButton')).toBe(false);
    expect(modal.prop('onRequestClose')).toEqual(cancelEvent);
    const datepicker = wrapper.find('DatepickerField');
    expect(datepicker).toHaveLength(1);
  });

  it('skal rendre lukket modal', () => {
    const wrapper = shallowWithIntl(<DelOppPeriodeModal
      {...reduxFormPropsMock}
      periodeData={periodeData}
      showModal={false}
      intl={intlMock}
      cancelEvent={cancelEvent}
      behandlingId={1}
      behandlingVersjon={2}
      splitPeriod={sinon.spy()}
      validate={sinon.spy()}
      onSubmit={sinon.spy()}
    />, messages);
    const modal = wrapper.find(Modal);
    expect(modal.prop('isOpen')).toBe(false);
  });

  it('skal lukke modal ved klikk på avbryt-knapp', () => {
    const wrapper = shallowWithIntl(<DelOppPeriodeModal
      {...reduxFormPropsMock}
      periodeData={periodeData}
      showModal
      intl={intlMock}
      cancelEvent={cancelEvent}
      behandlingId={1}
      behandlingVersjon={2}
      splitPeriod={sinon.spy()}
      validate={sinon.spy()}
      onSubmit={sinon.spy()}
    />, messages);
    wrapper.find('Knapp').simulate('click');
    expect(cancelEvent).toHaveProperty('callCount', 1);
  });
});
