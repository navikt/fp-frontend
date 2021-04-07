import React from 'react';
import { FormattedMessage } from 'react-intl';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { metaMock, MockFields } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { PeriodFieldArray } from '@fpsak-frontend/shared-components';
import { DatepickerField, SelectField } from '@fpsak-frontend/form';

import { TilretteleggingFieldArray, finnUtbetalingsgradForTilrettelegging } from './TilretteleggingFieldArray';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-fodsel-og-tilrettelegging';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const getRemoveButton = () => <button id="avslutt" type="button" />;

describe('<TilretteleggingFieldArray>', () => {
  it('skal vise tilrettelegging fields med tittel for index 0', () => {
    const wrapper = shallowWithIntl(<TilretteleggingFieldArray
      intl={intlMock}
      fields={new MockFields()}
      meta={metaMock}
      readOnly={false}
      formSectionName="FORM_SECTION_NAME"
      erOverstyrer
      changeField={() => undefined}
      tilretteleggingDatoer={[]}
      stillingsprosentArbeidsforhold={50}
      setOverstyrtUtbetalingsgrad={() => undefined}
      velferdspermisjonprosent={0}
      behandlingId={1}
      behandlingVersjon={1}
      formName="FORM_NAME"
      velferdspermisjoner={[]}
    />);
    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 0, getRemoveButton);
    const innerWrapper = shallowWithIntl(comp);

    const selectField = innerWrapper.find(SelectField);
    expect(selectField).toHaveLength(1);
    expect(selectField.props().placeholder).toEqual('- Velg tilretteleggingsbehov -');
    expect(selectField.props().selectValues).toHaveLength(3);
    expect(selectField.props().selectValues[0].key).toEqual('HEL_TILRETTELEGGING');
    expect(selectField.props().selectValues[1].key).toEqual('DELVIS_TILRETTELEGGING');
    expect(selectField.props().selectValues[2].key).toEqual('INGEN_TILRETTELEGGING');

    const datepickerField = innerWrapper.find(DatepickerField);
    expect(datepickerField).toHaveLength(1);

    expect(innerWrapper.find('#avslutt')).toHaveLength(1);
  });

  it('skal vise tilrettelegging fields uten tittel for index 1', () => {
    const wrapper = shallowWithIntl(<TilretteleggingFieldArray
      intl={intlMock}
      fields={new MockFields()}
      meta={metaMock}
      readOnly={false}
      formSectionName="FORM_SECTION_NAME"
      erOverstyrer
      changeField={() => undefined}
      tilretteleggingDatoer={[]}
      stillingsprosentArbeidsforhold={50}
      setOverstyrtUtbetalingsgrad={() => undefined}
      velferdspermisjonprosent={0}
      behandlingId={1}
      behandlingVersjon={1}
      formName="FORM_NAME"
      velferdspermisjoner={[]}
    />);
    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 1, getRemoveButton);
    const innerWrapper = shallowWithIntl(comp);

    const selectField = innerWrapper.find(SelectField);
    expect(selectField).toHaveLength(1);
    expect(selectField.props().placeholder).toEqual('- Velg tilretteleggingsbehov -');
    expect(selectField.props().selectValues).toHaveLength(3);
    expect(selectField.props().selectValues[0].key).toEqual('HEL_TILRETTELEGGING');
    expect(selectField.props().selectValues[1].key).toEqual('DELVIS_TILRETTELEGGING');
    expect(selectField.props().selectValues[2].key).toEqual('INGEN_TILRETTELEGGING');

    const datepickerField = innerWrapper.find(DatepickerField);
    expect(datepickerField).toHaveLength(1);

    const formattedMessages = innerWrapper.find(FormattedMessage);
    expect(formattedMessages).toHaveLength(0);

    expect(innerWrapper.find('#avslutt')).toHaveLength(1);
  });

  it('skal ikke vise getRemoveButtno i readOnly modus', () => {
    const wrapper = shallowWithIntl(<TilretteleggingFieldArray
      intl={intlMock}
      fields={new MockFields()}
      meta={metaMock}
      readOnly
      formSectionName="FORM_SECTION_NAME"
      erOverstyrer
      changeField={() => undefined}
      tilretteleggingDatoer={[]}
      stillingsprosentArbeidsforhold={50}
      setOverstyrtUtbetalingsgrad={() => undefined}
      velferdspermisjonprosent={0}
      behandlingId={1}
      behandlingVersjon={1}
      formName="FORM_NAME"
      velferdspermisjoner={[]}
    />);
    const fieldArray = wrapper.find(PeriodFieldArray);
    expect(fieldArray).toHaveLength(1);

    const fn = fieldArray.prop('children');
    const comp = fn('fieldId1', 1, getRemoveButton);
    const innerWrapper = shallowWithIntl(comp);

    const selectField = innerWrapper.find(SelectField);
    expect(selectField).toHaveLength(1);
    expect(selectField.props().placeholder).toEqual('- Velg tilretteleggingsbehov -');
    expect(selectField.props().selectValues).toHaveLength(3);
    expect(selectField.props().selectValues[0].key).toEqual('HEL_TILRETTELEGGING');
    expect(selectField.props().selectValues[1].key).toEqual('DELVIS_TILRETTELEGGING');
    expect(selectField.props().selectValues[2].key).toEqual('INGEN_TILRETTELEGGING');

    const datepickerField = innerWrapper.find(DatepickerField);
    expect(datepickerField).toHaveLength(1);

    const formattedMessages = innerWrapper.find(FormattedMessage);
    expect(formattedMessages).toHaveLength(0);

    expect(innerWrapper.find('#avslutt')).toHaveLength(0);
  });

  it('skal finnne utbetalingsgrad for delvis tilrettelegging - eks. 1', () => {
    const stillingsprosent = 70;
    const stillingsprosentArbeidsgiver = 70;

    const utbetalingsgrad = finnUtbetalingsgradForTilrettelegging(stillingsprosentArbeidsgiver, stillingsprosent);

    expect(utbetalingsgrad).toEqual('0');
  });

  it('skal finnne utbetalingsgrad for delvis tilrettelegging - eks. 2', () => {
    const stillingsprosent = 70;
    const stillingsprosentArbeidsgiver = 30;

    const utbetalingsgrad = finnUtbetalingsgradForTilrettelegging(stillingsprosentArbeidsgiver, stillingsprosent);

    expect(utbetalingsgrad).toEqual('0');
  });
});
