import React from 'react';
import sinon from 'sinon';
import { getIntlMock, shallowWithIntl, reduxFormPropsMock } from '@navikt/fp-utils-test';
import { Modal, Button } from '@navikt/ds-react';
import { UttakSlettPeriodeModalImpl } from './UttakSlettPeriodeModal';

import TextAreaField from '../form/TextAreaField';
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
  utsettelseÅrsak: '-',
  uttakPeriodeType: 'FORELDREPENGER',
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
    />, messages);
    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('open')).toBe(true);
    expect(modal.prop('closeButton')).toBe(false);
    expect(modal.prop('aria-label')).toEqual('Perioden slettes');

    const textField = wrapper.find(TextAreaField);
    expect(textField).toHaveLength(1);

    const knapper = wrapper.find(Button);
    expect(knapper).toHaveLength(2);
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
    />, messages);
    const modal = wrapper.find(Modal);
    expect(modal).toHaveLength(1);
    expect(modal.prop('open')).toBe(false);
  });
});
