import React, { ReactElement } from 'react';

import { PeriodFieldArray } from '@fpsak-frontend/shared-components';
import {
  CheckboxField, DatepickerField, DecimalField, InputField, SelectField,
} from '@fpsak-frontend/form';
import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../../i18n/nb_NO.json';
import { RenderGraderingPeriodeFieldArray } from './RenderGraderingPeriodeFieldArray';

const graderingKvoter = [{ navn: 'Mødrekvote', kode: 'MODREKVOTE', kodeverk: '' }];
const arbeidskategoriTyper = [{ navn: 'Arbeidstaker', kode: 'ARBEIDSTAKER', kodeverk: '' }];

const fields = new MockFields('perioder', 1);

const intlMock = getIntlMock(messages);

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
    />, messages);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton) as ReactElement;
    const innerWrapper = shallowWithIntl(comp, messages);

    expect(innerWrapper.find(DatepickerField)).toHaveLength(2);
    expect(innerWrapper.find(SelectField)).toHaveLength(2);
    expect(innerWrapper.find(InputField)).toHaveLength(1);
    expect(innerWrapper.find(DecimalField)).toHaveLength(1);
    expect(innerWrapper.find(CheckboxField)).toHaveLength(3);
    expect(innerWrapper.find('#avslutt')).toHaveLength(1);
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
    />, messages);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton) as ReactElement;
    const innerWrapper = shallowWithIntl(comp, messages);

    expect(innerWrapper.find(DatepickerField)).toHaveLength(2);
    expect(innerWrapper.find(SelectField)).toHaveLength(2);
    expect(innerWrapper.find(InputField)).toHaveLength(1);
    expect(innerWrapper.find(DecimalField)).toHaveLength(2);
    expect(innerWrapper.find(CheckboxField)).toHaveLength(3);
    expect(innerWrapper.find('#avslutt')).toHaveLength(1);
  });
});
