import React from 'react';

import { PeriodFieldArray } from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField } from '@fpsak-frontend/form';
import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import shallowWithIntl, { intlMock } from '../../../i18n/intl-enzyme-test-helper-papirsoknad-fp';
import RenderOppholdPeriodeFieldArray from './RenderOppholdPeriodeFieldArray';

const oppholdsReasons = [{ navn: 'Grunn1', kode: 'Grunn1', kodeverk: '' }];

const fields = new MockFields('perioder', 1);

const getRemoveButton = () => <button id="avslutt" type="button" />;

describe('<RenderOppholdPeriodeFieldArray>', () => {
  it('skal vise 2 inputfelter for dato og 1 nedtrekkslister uten sletteknapp ved periodeliste med en eksisterende periode', () => {
    const wrapper = shallowWithIntl(<RenderOppholdPeriodeFieldArray.WrappedComponent
      intl={intlMock}
      fields={fields}
      meta={metaMock}
      oppholdsReasons={oppholdsReasons}
      readOnly={false}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);
    const innerWrapper = shallowWithIntl(comp);

    const dateFields = innerWrapper.find(DatepickerField);
    expect(dateFields).toHaveLength(2);
    expect(dateFields.first().prop('name')).toEqual('fieldId1.periodeFom');
    expect(dateFields.first().prop('label')).toEqual({ id: 'Registrering.Permisjon.periodeFom' });
    expect(dateFields.last().prop('name')).toEqual('fieldId1.periodeTom');
    expect(dateFields.last().prop('label')).toEqual({ id: 'Registrering.Permisjon.periodeTom' });
    expect(innerWrapper.find('#avslutt')).toHaveLength(1);

    expect(innerWrapper.find(SelectField)).toHaveLength(1);
  });
});
