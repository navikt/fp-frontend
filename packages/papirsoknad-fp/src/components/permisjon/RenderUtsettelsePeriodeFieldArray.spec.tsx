import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { PeriodFieldArray } from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField } from '@fpsak-frontend/form';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-papirsoknad-fp';
import { RenderUtsettelsePeriodeFieldArray } from './RenderUtsettelsePeriodeFieldArray';

const utsettelseReasons = [{ navn: 'Grunn1', kode: 'Grunn1' }];
const utsettelseKvoter = [{ navn: 'Mødrekvote', kode: 'MODREKVOTE' }];

const fields = new MockFields('perioder', 1);

const getRemoveButton = () => <button id="avslutt" type="button" />;

describe('<RenderUtsettelsePeriodeFieldArray>', () => {
  it('skal vise 2 inputfelter for dato og 3 nedtrekkslister uten sletteknapp ved periodeliste med en eksisterende periode', () => {
    const wrapper = shallowWithIntl(<RenderUtsettelsePeriodeFieldArray
      fields={fields}
      meta={metaMock}
      utsettelseReasons={utsettelseReasons}
      utsettelseKvoter={utsettelseKvoter}
      // @ts-expect-error ts-migrate(2322) FIXME: Property 'formatMessage' does not exist on type 'I... Remove this comment to see the full error message
      formatMessage={sinon.spy()}
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
