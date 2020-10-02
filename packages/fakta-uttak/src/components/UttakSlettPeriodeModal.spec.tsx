import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { TextAreaField } from '@fpsak-frontend/form';
import Modal from 'nav-frontend-modal';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { UttakSlettPeriodeModalImpl } from './UttakSlettPeriodeModal';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-uttak';
import CustomUttakKontrollerFaktaPerioder from '../CustomUttakKontrollerFaktaPerioderTsType';

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
    expect(modal).to.have.length(1);
    expect(modal.prop('isOpen')).is.true;
    expect(modal.prop('closeButton')).is.false;
    expect(modal.prop('contentLabel')).to.eql('Perioden slettes');

    const textField = wrapper.find(TextAreaField);
    expect(textField).to.have.length(1);

    const okKnapp = wrapper.find(Hovedknapp);
    expect(okKnapp).to.have.length(1);
    expect(okKnapp.prop('mini')).is.true;
    expect(okKnapp.childAt(0).text()).is.eql('OK');

    const avbrytKnapp = wrapper.find(Knapp);
    expect(avbrytKnapp).to.have.length(1);
    expect(avbrytKnapp.prop('mini')).is.true;
    expect(avbrytKnapp.childAt(0).text()).is.eql('Avbryt');
  });
  it('skal rendre lukket modal', () => {
    const wrapper = shallowWithIntl(<UttakSlettPeriodeModalImpl
      {...reduxFormPropsMock}
      showModal={false}
      intl={intlMock}
      closeEvent={closeEvent}
      cancelEvent={cancelEvent}
      periode={periode}
      getKodeverknavn={getKodeverknavn}
    />);
    const modal = wrapper.find(Modal);
    expect(modal).to.have.length(1);
    expect(modal.prop('isOpen')).is.false;
  });
});
