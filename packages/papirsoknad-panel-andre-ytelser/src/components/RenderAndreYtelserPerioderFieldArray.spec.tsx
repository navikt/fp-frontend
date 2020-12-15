import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import moment from 'moment';

import { invalidDateMessage, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import { DatepickerField } from '@fpsak-frontend/form';
import { PeriodFieldArray } from '@fpsak-frontend/shared-components';
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
    expect(fieldArray).has.length(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);
    // @ts-ignore Fiks
    const innerWrapper = shallow(comp);

    const dateFields = innerWrapper.find(DatepickerField);
    expect(dateFields).has.length(2);
    expect(dateFields.first().prop('name')).is.eql('fieldId1.periodeFom');
    expect(dateFields.first().prop('label')).is.eql({ id: 'Registrering.AndreYtelser.periodeFom' });
    expect(dateFields.last().prop('name')).is.eql('fieldId1.periodeTom');
    expect(dateFields.last().prop('label')).is.eql({ id: 'Registrering.AndreYtelser.periodeTom' });
    expect(innerWrapper.find('#avslutt')).has.length(1);
  });

  it('skal validere at alle perioder har gyldige datoer', () => {
    const errorsWithInvalidDates = RenderAndreYtelserPerioderFieldArray.validate([getPeriod('abc', 'xyz'),
      getPeriodDaysFromToday(-20, -15)]);
    const errorsWithValidDates = RenderAndreYtelserPerioderFieldArray.validate([getPeriodDaysFromToday(-10, -5),
      getPeriodDaysFromToday(-20, -15)]);

    expect(errorsWithInvalidDates[0].periodeFom).that.eql(invalidDateMessage());
    expect(errorsWithInvalidDates[0].periodeTom).that.eql(invalidDateMessage());
    expect(errorsWithInvalidDates[1]).to.not.exist;

    expect(errorsWithValidDates).to.not.exist;
  });

  it('transformValues skal returnerer ytelser på riktig format', () => {
    const values = [{ periodeFom: 'abc', periodeTom: 'ads' }, { periodeFom: 'c', periodeTom: 's' }];

    const ytelse = 'LONN_UTDANNING';

    const errorsWithInvalidDates = RenderAndreYtelserPerioderFieldArray.transformValues(values, ytelse);

    expect(errorsWithInvalidDates[0].ytelseType).to.be.equal('LONN_UTDANNING');
    expect(errorsWithInvalidDates[0].periodeFom).to.be.equal('abc');
    expect(errorsWithInvalidDates[0].periodeTom).to.be.equal('ads');

    expect(errorsWithInvalidDates[1].ytelseType).to.be.equal('LONN_UTDANNING');
    expect(errorsWithInvalidDates[1].periodeFom).to.be.equal('c');
    expect(errorsWithInvalidDates[1].periodeTom).to.be.equal('s');
  });
});
