import React from 'react';
import { expect } from 'chai';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { PeriodFieldArray } from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField } from '@fpsak-frontend/form';
import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-papirsoknad-fp';
import { RenderUtsettelsePeriodeFieldArray } from './RenderUtsettelsePeriodeFieldArray';

const utsettelseReasons = [{ navn: 'Grunn1', kode: 'Grunn1', kodeverk: '' }];
const utsettelseKvoter = [{ navn: 'Mødrekvote', kode: 'MODREKVOTE', kodeverk: '' }];

const fields = new MockFields('perioder', 1);

const getRemoveButton = () => <button id="avslutt" type="button" />;

describe('<RenderUtsettelsePeriodeFieldArray>', () => {
  it('skal vise 2 inputfelter for dato og 3 nedtrekkslister uten sletteknapp ved periodeliste med en eksisterende periode', () => {
    const wrapper = shallowWithIntl(<RenderUtsettelsePeriodeFieldArray
      fields={fields}
      meta={metaMock}
      utsettelseReasons={utsettelseReasons}
      utsettelseKvoter={utsettelseKvoter}
      intl={intlMock}
      readOnly={false}
    />);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).has.length(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);
    const innerWrapper = shallowWithIntl(comp);

    const dateFields = innerWrapper.find(DatepickerField);
    expect(dateFields).has.length(2);
    expect(dateFields.first().prop('name')).is.eql('fieldId1.periodeFom');
    expect(dateFields.first().prop('label')).is.eql({ id: 'Registrering.Permisjon.periodeFom' });
    expect(dateFields.last().prop('name')).is.eql('fieldId1.periodeTom');
    expect(dateFields.last().prop('label')).is.eql({ id: 'Registrering.Permisjon.periodeTom' });
    expect(innerWrapper.find('#avslutt')).has.length(1);

    expect(innerWrapper.find(SelectField)).has.length(3);
  });
});
