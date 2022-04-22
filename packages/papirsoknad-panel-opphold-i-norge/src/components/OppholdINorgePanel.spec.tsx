import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import {
  dateNotAfterOrEqualMessage,
  dateNotBeforeOrEqualMessage,
  dateRangesOverlappingMessage,
  invalidDateMessage,
  ISO_DATE_FORMAT,
  DDMMYYYY_DATE_FORMAT,
  isRequiredMessage,
} from '@navikt/ft-utils';
import { AlleKodeverk } from '@fpsak-frontend/types';

import OppholdINorgePanel, { OppholdINorgePanelImpl } from './OppholdINorgePanel';

jest.mock('react-intl', () => {
  const reactIntl = jest.requireActual('react-intl');
  const intlTestHelper = jest.requireActual('@fpsak-frontend/utils-test/src/intl-enzyme-test-helper');
  const intlMessages = jest.requireActual('../../i18n/nb_NO.json');
  return {
    ...reactIntl,
    useIntl: () => intlTestHelper.getIntlMock(intlMessages),
  };
});

describe('<OppholdINorgePanel>', () => {
  const countryCodes = [{
    kode: 'NOR',
    navn: 'Norge',
    kodeverk: '',
  }, {
    kode: 'SWE',
    navn: 'Sverige',
    kodeverk: '',
  }];
  const alleKodeverk = {
    [kodeverkTyper.LANDKODER]: countryCodes,
  } as AlleKodeverk;

  describe('validate', () => {
    it('skal validere at opphold i Norge nå er besvart', () => {
      const errorsWithUndefinedOppholdINorge = OppholdINorgePanel.validate({});
      const errorsWithOppholdINorgeTrue = OppholdINorgePanel.validate({ oppholdINorge: true });
      const errorsWithOppholdINorgeFalse = OppholdINorgePanel.validate({ oppholdINorge: false });

      expect(errorsWithUndefinedOppholdINorge.oppholdINorge).toEqual(isRequiredMessage());
      expect(errorsWithOppholdINorgeTrue.oppholdINorge).toBeFalsy();
      expect(errorsWithOppholdINorgeFalse.oppholdINorge).toBeFalsy();
    });

    it('skal validere at tidligere opphold utenlands er besvart', () => {
      const errorsWithUndefinedHarTidligereOppholdUtenlands = OppholdINorgePanel.validate({});
      const errorsWithHarTidligereOppholdUtenlandsTrue = OppholdINorgePanel.validate({ harTidligereOppholdUtenlands: true });
      const errorsWithHarTidligereOppholdUtenlandsFalse = OppholdINorgePanel.validate({ harTidligereOppholdUtenlands: false });

      expect(errorsWithUndefinedHarTidligereOppholdUtenlands.harTidligereOppholdUtenlands).toEqual(isRequiredMessage());
      expect(errorsWithHarTidligereOppholdUtenlandsTrue.harTidligereOppholdUtenlands).toBeFalsy();
      expect(errorsWithHarTidligereOppholdUtenlandsFalse.harTidligereOppholdUtenlands).toBeFalsy();
    });

    it('skal validere at fremtidige opphold utenlands er besvart', () => {
      const errorsWithUndefinedHarFremtidigeOppholdUtenlands = OppholdINorgePanel.validate({});
      const errorsWithHarFremtidigeOppholdUtenlandsTrue = OppholdINorgePanel.validate({ harFremtidigeOppholdUtenlands: true });
      const errorsWithHarFremtidigeOppholdUtenlandsFalse = OppholdINorgePanel.validate({ harFremtidigeOppholdUtenlands: false });

      expect(errorsWithUndefinedHarFremtidigeOppholdUtenlands.harFremtidigeOppholdUtenlands).toEqual(isRequiredMessage());
      expect(errorsWithHarFremtidigeOppholdUtenlandsTrue.harFremtidigeOppholdUtenlands).toBeFalsy();
      expect(errorsWithHarFremtidigeOppholdUtenlandsFalse.harFremtidigeOppholdUtenlands).toBeFalsy();
    });

    const getPeriodDaysFromToday = (startDaysFromToday, endDaysFromToday) => ({
      land: countryCodes[1].kode,
      periodeFom: moment().add(startDaysFromToday, 'days').format(ISO_DATE_FORMAT),
      periodeTom: moment().add(endDaysFromToday, 'days').format(ISO_DATE_FORMAT),
    });
    const getPeriod = (periodeFom, periodeTom) => ({ land: countryCodes[1].kode, periodeFom, periodeTom });

    describe('hvis har tidligere utenlandsopphold', () => {
      it('skal validere at alle perioder har gyldige datoer', () => {
        const errorsWithInvalidDates = OppholdINorgePanel.validate({
          harTidligereOppholdUtenlands: true,
          tidligereOppholdUtenlands: [getPeriod('abc', 'xyz'), getPeriodDaysFromToday(-20, -15)],
        });
        const errorsWithValidDates = OppholdINorgePanel.validate({
          harTidligereOppholdUtenlands: true,
          tidligereOppholdUtenlands: [
            getPeriodDaysFromToday(-10, -5),
            getPeriodDaysFromToday(-20, -15),
          ],
        });

        expect(errorsWithInvalidDates.tidligereOppholdUtenlands);
        expect(errorsWithInvalidDates.tidligereOppholdUtenlands[0].periodeFom).toEqual(invalidDateMessage());
        expect(errorsWithInvalidDates.tidligereOppholdUtenlands[0].periodeTom).toEqual(invalidDateMessage());
        expect(errorsWithInvalidDates.tidligereOppholdUtenlands[1]).toBeFalsy();

        expect(errorsWithValidDates.tidligereOppholdUtenlands).toBeFalsy();
      });

      it('skal validere at alle datoer er før eller lik dagens dato', () => {
        const errorsWithInvalidDates = OppholdINorgePanel.validate({
          harTidligereOppholdUtenlands: true,
          tidligereOppholdUtenlands: [getPeriodDaysFromToday(-20, -15), getPeriodDaysFromToday(-1, +1)],
        });
        const errorsWithValidDates = OppholdINorgePanel.validate({
          harTidligereOppholdUtenlands: true,
          tidligereOppholdUtenlands: [
            getPeriodDaysFromToday(-10, -5),
            getPeriodDaysFromToday(-20, -15),
          ],
        });

        expect(errorsWithInvalidDates.tidligereOppholdUtenlands);
        expect(errorsWithInvalidDates.tidligereOppholdUtenlands[1].periodeFom).toBeFalsy();
        expect(errorsWithInvalidDates.tidligereOppholdUtenlands[1].periodeTom).toEqual(dateNotBeforeOrEqualMessage(moment().format(DDMMYYYY_DATE_FORMAT)));

        expect(errorsWithValidDates.tidligereOppholdUtenlands).toBeFalsy();
      });

      it('skal validere at ingen perioder overlapper', () => {
        const errorsWithInvalidDates = OppholdINorgePanel.validate({
          harTidligereOppholdUtenlands: true,
          tidligereOppholdUtenlands: [getPeriodDaysFromToday(-20, -15), getPeriodDaysFromToday(-16, -11)],
        });
        const errorsWithValidDates = OppholdINorgePanel.validate({
          harTidligereOppholdUtenlands: true,
          tidligereOppholdUtenlands: [getPeriodDaysFromToday(-20, -15), getPeriodDaysFromToday(-14, -10)],
        });

        expect(errorsWithInvalidDates.tidligereOppholdUtenlands).toEqual({
          _error: 'Perioder kan ikke overlappe i tid',
        });
        // eslint-disable-next-line no-underscore-dangle
        expect(errorsWithInvalidDates.tidligereOppholdUtenlands._error).toEqual(dateRangesOverlappingMessage());

        expect(errorsWithValidDates.tidligereOppholdUtenlands).toBeFalsy();
      });
    });

    describe('hvis har fremtidige utenlandsopphold', () => {
      it('skal validere at alle perioder har gyldige datoer', () => {
        const errorsWithInvalidDates = OppholdINorgePanel.validate({
          harFremtidigeOppholdUtenlands: true,
          fremtidigeOppholdUtenlands: [getPeriod('abc', 'xyz'), getPeriodDaysFromToday(15, 20)],
        });
        const errorsWithValidDates = OppholdINorgePanel.validate({
          harFremtidigeOppholdUtenlands: true,
          fremtidigeOppholdUtenlands: [
            getPeriodDaysFromToday(5, 10),
            getPeriodDaysFromToday(15, 20),
          ],
        });

        expect(errorsWithInvalidDates.fremtidigeOppholdUtenlands);
        expect(errorsWithInvalidDates.fremtidigeOppholdUtenlands[0].periodeFom).toEqual(invalidDateMessage());
        expect(errorsWithInvalidDates.fremtidigeOppholdUtenlands[0].periodeTom).toEqual(invalidDateMessage());
        expect(errorsWithInvalidDates.fremtidigeOppholdUtenlands[1]).toBeFalsy();

        expect(errorsWithValidDates.fremtidigeOppholdUtenlands).toBeFalsy();
      });

      it('skal validere at alle datoer er lik eller etter mottatt dato', () => {
        const periode = {
          land: countryCodes[1].kode,
          periodeFom: '2019-01-01',
          periodeTom: '2019-05-01',
        };
        const errorsWithInvalidDates = OppholdINorgePanel.validate({
          harFremtidigeOppholdUtenlands: true,
          fremtidigeOppholdUtenlands: [periode],
          mottattDato: '2019-02-01',
        });
        const errorsWithValidDates = OppholdINorgePanel.validate({
          harFremtidigeOppholdUtenlands: true,
          fremtidigeOppholdUtenlands: [periode],
          mottattDato: '2019-01-01',
        });

        expect(errorsWithInvalidDates.fremtidigeOppholdUtenlands);
        expect(errorsWithInvalidDates.fremtidigeOppholdUtenlands[0].periodeTom).toBeFalsy();
        expect(errorsWithInvalidDates.fremtidigeOppholdUtenlands[0].periodeFom).toEqual(dateNotAfterOrEqualMessage('01.02.2019'));

        expect(errorsWithValidDates.fremtidigeOppholdUtenlands).toBeFalsy();
      });

      it('skal validere at ingen perioder overlapper', () => {
        const errorsWithInvalidDates = OppholdINorgePanel.validate({
          harFremtidigeOppholdUtenlands: true,
          fremtidigeOppholdUtenlands: [getPeriodDaysFromToday(15, 20), getPeriodDaysFromToday(11, 16)],
        });
        const errorsWithValidDates = OppholdINorgePanel.validate({
          harFremtidigeOppholdUtenlands: true,
          fremtidigeOppholdUtenlands: [getPeriodDaysFromToday(15, 20), getPeriodDaysFromToday(10, 14)],
        });

        expect(errorsWithInvalidDates.tidligereOppholdUtenlands).toEqual(undefined);
        // eslint-disable-next-line no-underscore-dangle
        expect(errorsWithInvalidDates.fremtidigeOppholdUtenlands._error).toEqual(dateRangesOverlappingMessage());

        expect(errorsWithValidDates.fremtidigeOppholdUtenlands).toBeFalsy();
      });
    });
  });

  it('skal vise tidligere utenlandsopphold hvis harTidligereOppholdUtenlands er valgt', () => {
    const wrapper = shallow(<OppholdINorgePanelImpl
      alleKodeverk={alleKodeverk}
      form="test"
      soknadData={new SoknadData('TEST', 'TEST', 'TEST')}
      readOnly={false}
    />);

    let tidligreOppholdUtenlands = wrapper.find({ name: 'tidligereOppholdUtenlands' });
    expect(tidligreOppholdUtenlands).toHaveLength(0);

    wrapper.setProps({ harTidligereOppholdUtenlands: true });
    wrapper.update();

    tidligreOppholdUtenlands = wrapper.find({ name: 'tidligereOppholdUtenlands' });
    expect(tidligreOppholdUtenlands).toHaveLength(1);
  });

  it('skal vise land dropdown, datepicker og knappen hvis harFremtidigeOppholdUtenlands er valgt', () => {
    const wrapper = shallow(<OppholdINorgePanelImpl
      alleKodeverk={alleKodeverk}
      form="test"
      soknadData={new SoknadData('TEST', 'TEST', 'TEST')}
      readOnly={false}
    />);

    let fremtidigeOppholdUtenlands = wrapper.find({ name: 'fremtidigeOppholdUtenlands' });
    expect(fremtidigeOppholdUtenlands).toHaveLength(0);

    wrapper.setProps({ harFremtidigeOppholdUtenlands: true });
    wrapper.update();

    fremtidigeOppholdUtenlands = wrapper.find({ name: 'fremtidigeOppholdUtenlands' });
    expect(fremtidigeOppholdUtenlands).toHaveLength(1);
  });
});
