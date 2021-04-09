import React, { ReactElement } from 'react';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { PeriodFieldArray } from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField } from '@fpsak-frontend/form';
import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import messages from '../../../i18n/nb_NO.json';
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
      intl={getIntlMock(messages)}
      readOnly={false}
    />, messages);

    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton) as ReactElement;
    const innerWrapper = shallowWithIntl(comp, messages);

    const dateFields = innerWrapper.find(DatepickerField);
    expect(dateFields).toHaveLength(2);
    expect(dateFields.first().prop('name')).toEqual('fieldId1.periodeFom');
    expect(dateFields.first().prop('label')).toEqual({ id: 'Registrering.Permisjon.periodeFom' });
    expect(dateFields.last().prop('name')).toEqual('fieldId1.periodeTom');
    expect(dateFields.last().prop('label')).toEqual({ id: 'Registrering.Permisjon.periodeTom' });
    expect(innerWrapper.find('#avslutt')).toHaveLength(1);

    expect(innerWrapper.find(SelectField)).toHaveLength(3);
  });
});
