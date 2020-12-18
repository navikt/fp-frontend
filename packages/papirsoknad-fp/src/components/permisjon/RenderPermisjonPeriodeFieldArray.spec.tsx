import React from 'react';
import moment from 'moment';

import { DatepickerField, SelectField } from '@fpsak-frontend/form';
import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { PeriodFieldArray } from '@fpsak-frontend/shared-components';
import { dateRangesOverlappingMessage, invalidDateMessage, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import uttakPeriodeType from '@fpsak-frontend/kodeverk/src/uttakPeriodeType';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-papirsoknad-fp';
import RenderPermisjonPeriodeFieldArray, { RenderPermisjonPeriodeFieldArray as RenderPermisjonPeriodeFieldArrayImpl } from './RenderPermisjonPeriodeFieldArray';

const periodeTyper = [{ navn: 'FELLESPERIODE', kode: uttakPeriodeType.FELLESPERIODE, kodeverk: '' },
  { navn: 'MODREKVOTE', kode: uttakPeriodeType.MODREKVOTE, kodeverk: '' },
  { navn: 'FEDREKVOTE', kode: uttakPeriodeType.FEDREKVOTE, kodeverk: '' },
  { navn: 'FORELDREPENGER_FOR_FODSEL', kode: uttakPeriodeType.FORELDREPENGER_FOR_FODSEL, kodeverk: '' }];

const fields = new MockFields('perioder', 1);
const readOnly = false;

describe('<RenderPermisjonPeriodeFieldArray>', () => {
  it('skal vise felter uten mors aktivitet med en eksisterende periode når søker er mor', () => {
    const wrapper = shallowWithIntl(<RenderPermisjonPeriodeFieldArrayImpl
      fields={fields}
      meta={metaMock}
      periodeTyper={periodeTyper}
      morsAktivitetTyper={[]}
      sokerErMor
      selectedPeriodeTyper={[]}
      readOnly={readOnly}
      namePrefix="test"
      periodePrefix="test"
      alleKodeverk={{}}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0);
    const innerWrapper = shallowWithIntl(comp);

    const dateFields = innerWrapper.find(DatepickerField);
    expect(dateFields).toHaveLength(2);
    expect(dateFields.first().prop('name')).toEqual('fieldId1.periodeFom');
    expect(dateFields.first().prop('label')).toEqual({ id: 'Registrering.Permisjon.periodeFom' });
    expect(dateFields.last().prop('name')).toEqual('fieldId1.periodeTom');
    expect(dateFields.last().prop('label')).toEqual({ id: 'Registrering.Permisjon.periodeTom' });

    expect(innerWrapper.find(SelectField)).toHaveLength(1);
  });

  it('skal vise felter med mors aktivitet med en eksisterende periode når søker er far', () => {
    const wrapper = shallowWithIntl(<RenderPermisjonPeriodeFieldArrayImpl
      fields={fields}
      meta={metaMock}
      periodeTyper={periodeTyper}
      morsAktivitetTyper={[]}
      sokerErMor={false}
      selectedPeriodeTyper={[]}
      readOnly={readOnly}
      namePrefix="test"
      periodePrefix="test"
      alleKodeverk={{}}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0);
    const innerWrapper = shallowWithIntl(comp);

    expect(innerWrapper.find(DatepickerField)).toHaveLength(2);

    expect(innerWrapper.find(SelectField)).toHaveLength(2);
  });

  it('skal vise felter med mors aktivitet disbaled søker er far og fedrekvote er valgt', () => {
    const wrapper = shallowWithIntl(<RenderPermisjonPeriodeFieldArrayImpl
      fields={fields}
      meta={metaMock}
      periodeTyper={periodeTyper}
      morsAktivitetTyper={[]}
      sokerErMor={false}
      selectedPeriodeTyper={[uttakPeriodeType.FEDREKVOTE]}
      readOnly={readOnly}
      namePrefix="test"
      periodePrefix="test"
      alleKodeverk={{}}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0);
    const innerWrapper = shallowWithIntl(comp);

    expect(innerWrapper.find(DatepickerField)).toHaveLength(2);

    const selectFields = innerWrapper.find(SelectField);
    expect(selectFields).toHaveLength(2);

    expect(selectFields.last().prop('disabled')).toBe(true);
  });

  it('skal vise felter med mors aktivitet disbaled søker er far og mødrekvote er valgt', () => {
    const wrapper = shallowWithIntl(<RenderPermisjonPeriodeFieldArrayImpl
      fields={fields}
      meta={metaMock}
      periodeTyper={periodeTyper}
      morsAktivitetTyper={[]}
      sokerErMor={false}
      selectedPeriodeTyper={[uttakPeriodeType.MODREKVOTE]}
      readOnly={readOnly}
      namePrefix="test"
      periodePrefix="test"
      alleKodeverk={{}}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0);
    const innerWrapper = shallowWithIntl(comp);

    expect(innerWrapper.find(DatepickerField)).toHaveLength(2);

    const selectFields = innerWrapper.find(SelectField);
    expect(selectFields).toHaveLength(2);

    expect(selectFields.last().prop('disabled')).toBe(true);
  });

  it('skal vise felter med mors aktivitet disbaled søker er far og ingen periode er valgt', () => {
    const wrapper = shallowWithIntl(<RenderPermisjonPeriodeFieldArrayImpl
      fields={fields}
      meta={metaMock}
      periodeTyper={periodeTyper}
      morsAktivitetTyper={[]}
      sokerErMor={false}
      selectedPeriodeTyper={[]}
      readOnly={readOnly}
      namePrefix="test"
      periodePrefix="test"
      alleKodeverk={{}}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0);
    const innerWrapper = shallowWithIntl(comp);

    expect(innerWrapper.find(DatepickerField)).toHaveLength(2);

    const selectFields = innerWrapper.find(SelectField);
    expect(selectFields).toHaveLength(2);

    expect(selectFields.last().prop('disabled')).toBe(true);
  });

  it('skal vise felter med mors aktivitet disbaled søker er far og foreldrepenger før fødsel er valgt', () => {
    const wrapper = shallowWithIntl(<RenderPermisjonPeriodeFieldArrayImpl
      fields={fields}
      meta={metaMock}
      periodeTyper={periodeTyper}
      morsAktivitetTyper={[]}
      sokerErMor={false}
      selectedPeriodeTyper={[uttakPeriodeType.FORELDREPENGER_FOR_FODSEL]}
      readOnly={readOnly}
      namePrefix="test"
      periodePrefix="test"
      alleKodeverk={{}}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0);
    const innerWrapper = shallowWithIntl(comp);

    expect(innerWrapper.find(DatepickerField)).toHaveLength(2);

    const selectFields = innerWrapper.find(SelectField);
    expect(selectFields).toHaveLength(2);

    expect(selectFields.last().prop('disabled')).toBe(true);
  });

  const getPeriodDaysFromToday = (periodeType: string, startDaysFromToday: number, endDaysFromToday: number) => ({
    periodeType,
    periodeFom: moment().add(startDaysFromToday, 'days').format(ISO_DATE_FORMAT),
    periodeTom: moment().add(endDaysFromToday, 'days').format(ISO_DATE_FORMAT),
  });

  const getPeriod = (periodeType: string, periodeFom: string, periodeTom: string) => ({ periodeType, periodeFom, periodeTom });

  it('skal validere at alle perioder har gyldige datoer', () => {
    const errorsWithInvalidDates = RenderPermisjonPeriodeFieldArray.validate([getPeriod('FELLESPERIODE', 'abc', 'xyz'),
      getPeriodDaysFromToday('FELLESPERIODE', -20, -15)]);
    const errorsWithValidDates = RenderPermisjonPeriodeFieldArray.validate([getPeriodDaysFromToday('FELLESPERIODE', -10, -5),
      getPeriodDaysFromToday('FELLESPERIODE', -20, -15)]);

    expect(errorsWithInvalidDates).toBeInstanceOf('array');
    expect(errorsWithInvalidDates[0].periodeFom).toEqual(invalidDateMessage());
    expect(errorsWithInvalidDates[0].periodeTom).toEqual(invalidDateMessage());
    expect(errorsWithInvalidDates[1]).toBeFalsy();

    expect(errorsWithValidDates).toBeFalsy();
  });

  it('skal validere at ingen perioder overlapper', () => {
    const errorsWithInvalidDates = RenderPermisjonPeriodeFieldArray.validate([getPeriodDaysFromToday('FELLESPERIODE', -20, -15),
      getPeriodDaysFromToday('FELLESPERIODE', -16, -11)]);
    const errorsWithValidDates = RenderPermisjonPeriodeFieldArray.validate([getPeriodDaysFromToday('FELLESPERIODE', -20, -15),
      getPeriodDaysFromToday('FELLESPERIODE', -14, -10)]);

    expect(errorsWithInvalidDates).toBeInstanceOf('object');
    // eslint-disable-next-line no-underscore-dangle
    expect(errorsWithInvalidDates._error).toEqual(dateRangesOverlappingMessage());

    expect(errorsWithValidDates).toBeFalsy();
  });
});
