import React from 'react';
import sinon from 'sinon';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { TextAreaField } from '@fpsak-frontend/form';
import Modal from 'nav-frontend-modal';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { UttakSlettPeriodeModalImpl } from './UttakSlettPeriodeModal';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-uttak';
import messages from '../../i18n/nb_NO.json';
import CustomUttakKontrollerFaktaPerioder from '../CustomUttakKontrollerFaktaPerioderTsType';

const intlMock = getIntlMock(messages);

const periode = {
  bekreftet: true,
  fom: '2018-03-01',
  id: '2018-03-01|2018-04-28',
  openForm: false,
  tom: '2018-04-28',
  updated: false,
  utsettelseÅrsak: {
    kode: '-',
    kodeverk: 'AARSAK_TYPE',
  },
  uttakPeriodeType: {
    kode: 'FORELDREPENGER',
    kodeverk: 'UTTAK_PERIODE_TYPE',
  },
  isFromSøknad: true,
};

const closeEvent = sinon.spy();
const cancelEvent = sinon.spy();

const getKodeverknavn = () => undefined;

describe('<UttakSlettPeriodeModal>', () => {
  it('skal vise åpen modal', () => {
    const wrapper = shallowWithIntl(<UttakSlettPeriodeModalImpl
      {...reduxFormPropsMock}
      showModal
      intl={intlMock}
      closeEvent={closeEvent}
      cancelEvent={cancelEvent}
      periode={periode as CustomUttakKontrollerFaktaPerioder}
      getKodeverknavn={getKodeverknavn}
    />);
    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(true);
    expect(modal.prop('closeButton')).toBe(false);
    expect(modal.prop('contentLabel')).toEqual('Perioden slettes');

    const textField = wrapper.find(TextAreaField);
    expect(textField).toHaveLength(1);

    const okKnapp = wrapper.find(Hovedknapp);
    expect(okKnapp).toHaveLength(1);
    expect(okKnapp.prop('mini')).toBe(true);
    expect(okKnapp.childAt(0).text()).toEqual('OK');

    const avbrytKnapp = wrapper.find(Knapp);
    expect(avbrytKnapp).toHaveLength(1);
    expect(avbrytKnapp.prop('mini')).toBe(true);
    expect(avbrytKnapp.childAt(0).text()).toEqual('Avbryt');
  });
  it('skal rendre lukket modal', () => {
    const wrapper = shallowWithIntl(<UttakSlettPeriodeModalImpl
      {...reduxFormPropsMock}
      showModal={false}
      intl={intlMock}
      closeEvent={closeEvent}
      cancelEvent={cancelEvent}
      periode={periode as CustomUttakKontrollerFaktaPerioder}
      getKodeverknavn={getKodeverknavn}
    />);
    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('isOpen')).toBe(false);
  });
});
