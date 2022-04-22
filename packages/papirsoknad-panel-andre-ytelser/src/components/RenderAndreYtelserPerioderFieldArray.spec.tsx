import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { invalidDateMessage, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { PeriodFieldArray, DatepickerField } from '@fpsak-frontend/form';
import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import RenderAndreYtelserPerioderFieldArray from './RenderAndreYtelserPerioderFieldArray';

const fields = new MockFields('perioder', 1);

const getRemoveButton = () => <button id="avslutt" type="button" />;

const getPeriodDaysFromToday = (startDaysFromToday: number, endDaysFromToday: number) => ({
  periodeFom: moment().add(startDaysFromToday, 'days').format(ISO_DATE_FORMAT),
  periodeTom: moment().add(endDaysFromToday, 'days').format(ISO_DATE_FORMAT),
});

const getPeriod = (periodeFom: string, periodeTom: string) => ({ periodeFom, periodeTom });

describe('<RenderAndreYtelserPerioderFieldArray>', () => {
  it('Skal rendre FrilansPerioderFieldArray', () => {
    const wrapper = shallow(<RenderAndreYtelserPerioderFieldArray
      fields={fields}
      meta={metaMock}
      readOnly={false}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);
    // @ts-ignore Fiks
    const innerWrapper = shallow(comp);

    const dateFields = innerWrapper.find(DatepickerField);
    expect(dateFields).toHaveLength(2);
    expect(dateFields.first().prop('name')).toEqual('fieldId1.periodeFom');
    expect(dateFields.first().prop('label')).toEqual({ id: 'Registrering.AndreYtelser.periodeFom' });
    expect(dateFields.last().prop('name')).toEqual('fieldId1.periodeTom');
    expect(dateFields.last().prop('label')).toEqual({ id: 'Registrering.AndreYtelser.periodeTom' });
    expect(innerWrapper.find('#avslutt')).toHaveLength(1);
  });

  it('skal validere at alle perioder har gyldige datoer', () => {
    const errorsWithInvalidDates = RenderAndreYtelserPerioderFieldArray.validate([getPeriod('abc', 'xyz'),
      getPeriodDaysFromToday(-20, -15)]);
    const errorsWithValidDates = RenderAndreYtelserPerioderFieldArray.validate([getPeriodDaysFromToday(-10, -5),
      getPeriodDaysFromToday(-20, -15)]);

    expect(errorsWithInvalidDates[0].periodeFom).toEqual(invalidDateMessage());
    expect(errorsWithInvalidDates[0].periodeTom).toEqual(invalidDateMessage());
    expect(errorsWithInvalidDates[1]).toBeFalsy();

    expect(errorsWithValidDates).toBeFalsy();
  });

  it('transformValues skal returnerer ytelser på riktig format', () => {
    const values = [{ periodeFom: 'abc', periodeTom: 'ads' }, { periodeFom: 'c', periodeTom: 's' }];

    const ytelse = 'LONN_UTDANNING';

    const errorsWithInvalidDates = RenderAndreYtelserPerioderFieldArray.transformValues(values, ytelse);

    expect(errorsWithInvalidDates[0].ytelseType).toBe('LONN_UTDANNING');
    expect(errorsWithInvalidDates[0].periodeFom).toBe('abc');
    expect(errorsWithInvalidDates[0].periodeTom).toBe('ads');

    expect(errorsWithInvalidDates[1].ytelseType).toBe('LONN_UTDANNING');
    expect(errorsWithInvalidDates[1].periodeFom).toBe('c');
    expect(errorsWithInvalidDates[1].periodeTom).toBe('s');
  });
});
