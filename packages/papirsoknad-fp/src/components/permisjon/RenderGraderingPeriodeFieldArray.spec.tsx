import React from 'react';
import { expect } from 'chai';

import { PeriodFieldArray } from '@fpsak-frontend/shared-components';
import {
  CheckboxField, DatepickerField, DecimalField, InputField, SelectField,
} from '@fpsak-frontend/form';
import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import shallowWithIntl, { intlMock } from '../../../i18n/intl-enzyme-test-helper-papirsoknad-fp';
import { RenderGraderingPeriodeFieldArray } from './RenderGraderingPeriodeFieldArray';

const graderingKvoter = [{ navn: 'Mødrekvote', kode: 'MODREKVOTE', kodeverk: '' }];
const arbeidskategoriTyper = [{ navn: 'Arbeidstaker', kode: 'ARBEIDSTAKER', kodeverk: '' }];

const fields = new MockFields('perioder', 1);

const getRemoveButton = () => <button id="avslutt" type="button" />;

describe('<RenderGraderingPeriodeFieldArray>', () => {
  it('skal vise felter for gradering, samtidig uttak ikke valgt', () => {
    const wrapper = shallowWithIntl(<RenderGraderingPeriodeFieldArray
      intl={intlMock}
      fields={fields}
      meta={metaMock}
      graderingKvoter={graderingKvoter}
      arbeidskategoriTyper={arbeidskategoriTyper}
      readOnly={false}
      graderingValues={[{
        harSamtidigUttak: false,
      }]}
      namePrefix="test"
      graderingPrefix="test"
      form="test"
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).has.length(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);
    const innerWrapper = shallowWithIntl(comp);

    expect(innerWrapper.find(DatepickerField)).has.length(2);
    expect(innerWrapper.find(SelectField)).has.length(2);
    expect(innerWrapper.find(InputField)).has.length(1);
    expect(innerWrapper.find(DecimalField)).has.length(1);
    expect(innerWrapper.find(CheckboxField)).has.length(3);
    expect(innerWrapper.find('#avslutt')).has.length(1);
  });

  it('skal vise felter for gradering, samtidig uttak valgt', () => {
    const wrapper = shallowWithIntl(<RenderGraderingPeriodeFieldArray
      intl={intlMock}
      fields={fields}
      meta={metaMock}
      graderingKvoter={graderingKvoter}
      arbeidskategoriTyper={arbeidskategoriTyper}
      readOnly={false}
      graderingValues={[{
        harSamtidigUttak: true,
      }]}
      namePrefix="test"
      graderingPrefix="test"
      form="test"
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).has.length(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);
    const innerWrapper = shallowWithIntl(comp);

    expect(innerWrapper.find(DatepickerField)).has.length(2);
    expect(innerWrapper.find(SelectField)).has.length(2);
    expect(innerWrapper.find(InputField)).has.length(1);
    expect(innerWrapper.find(DecimalField)).has.length(2);
    expect(innerWrapper.find(CheckboxField)).has.length(3);
    expect(innerWrapper.find('#avslutt')).has.length(1);
  });
});
