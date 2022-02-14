import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { AlleKodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import { lagAktiviteter, UttakActivity } from './UttakActivity';
import { PeriodeMedClassName } from './Uttak';
import { AktivitetFieldArray } from './RenderUttakTable';

import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<UttakActivity>', () => {
  const selectedItem = {
    id: 1,
    fom: '2018-01-01',
    tom: '2018-02-01',
    periodeResultatType: '',
    periodeResultatÅrsak: '-',
    flerbarnsdager: false,
    utsettelseType: '-',
    periodeType: '-',
    oppholdÅrsak: '-',
    aktiviteter: [{
      trekkdagerDesimaler: 28.5,
      utbetalingsgrad: 100,
      stønadskontoType: '',
    }] as AktivitetFieldArray[],
  } as PeriodeMedClassName;
  it('skal rendre uttakactivity med oppfylt periode', () => {
    const wrapper = shallow(<UttakActivity
      {...reduxFormPropsMock}
      intl={intlMock}
      erOppfylt
      selectedItemData={selectedItem}
      readOnly={false}
      periodeTyper={[]}
      oppholdArsakTyper={[]}
      cancelSelectedActivity={sinon.spy()}
      validate={sinon.spy()}
      warn={sinon.spy()}
      onSubmit={sinon.spy()}
      periodeAarsakKoder={[
        {
          kode: '4011', navn: 'mitt navn', kodeverk: 'MITT_KODEVERK', gyldigForLovendringer: [], utfallType: 'AVSLÅTT',
        }]}
      graderingAvslagAarsakKoder={[]}
      harSoktOmFlerbarnsdager={false}
      hasValidationError={false}
      alleKodeverk={{} as AlleKodeverk}
      updateActivity={() => undefined}
      kontoIkkeSatt={false}
      utsettelseAarsak={{} as KodeverkMedNavn[]}
      uttakFieldArray="test"
      currentlySelectedStønadskonto=""
      graderingInnvilget
      erSamtidigUttak={false}
      samtidigUttaksprosent="20"
      arbeidsgiverOpplysningerPerId={{}}
      kreverSammenhengendeUttak
    />);

    const fieldArray = wrapper.find('FieldArray');
    expect(fieldArray).toHaveLength(1);
    const radioGroup = wrapper.find('RadioGroupField');
    expect(radioGroup).toHaveLength(1);
    const selectAvslag = wrapper.find('SelectField');
    expect(selectAvslag).toHaveLength(1);
    const textArea = wrapper.find('TextAreaField');
    expect(textArea).toHaveLength(1);
    const updateKnapp = wrapper.find('Hovedknapp');
    expect(updateKnapp).toHaveLength(1);
    const cancelKnapp = wrapper.find('Knapp');
    expect(cancelKnapp).toHaveLength(1);
  });

  it('skal rendre rows and columns', () => {
    const wrapper = shallow(<UttakActivity
      {...reduxFormPropsMock}
      intl={intlMock}
      erOppfylt
      selectedItemData={selectedItem}
      readOnly={false}
      periodeTyper={[]}
      oppholdArsakTyper={[]}
      cancelSelectedActivity={sinon.spy()}
      validate={sinon.spy()}
      warn={sinon.spy()}
      onSubmit={sinon.spy()}
      periodeAarsakKoder={[
        {
          kode: '4011', navn: 'mitt navn', kodeverk: 'MITT_KODEVERK', gyldigForLovendringer: [], utfallType: 'AVSLÅTT',
        }]}
      graderingAvslagAarsakKoder={[]}
      harSoktOmFlerbarnsdager={false}
      hasValidationError={false}
      alleKodeverk={{} as AlleKodeverk}
      updateActivity={() => undefined}
      kontoIkkeSatt={false}
      utsettelseAarsak={{} as KodeverkMedNavn[]}
      uttakFieldArray="test"
      currentlySelectedStønadskonto=""
      graderingInnvilget
      erSamtidigUttak={false}
      samtidigUttaksprosent="20"
      arbeidsgiverOpplysningerPerId={{}}
      kreverSammenhengendeUttak
    />);

    const row = wrapper.find('Row');
    expect(row).toHaveLength(2);
    const column = wrapper.find('Column');
    expect(column).toHaveLength(1);
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(2);
  });

  it('skal rendre uttakactivity med ikke oppfylt', () => {
    const wrapper = shallow(<UttakActivity
      {...reduxFormPropsMock}
      intl={intlMock}
      erOppfylt={false}
      readOnly={false}
      selectedItemData={selectedItem}
      periodeTyper={[]}
      oppholdArsakTyper={[]}
      cancelSelectedActivity={sinon.spy()}
      validate={sinon.spy()}
      warn={sinon.spy()}
      onSubmit={sinon.spy()}
      periodeAarsakKoder={[
        {
          kode: '4011', navn: 'mitt navn', kodeverk: 'MITT_KODEVERK', gyldigForLovendringer: [], utfallType: 'AVSLÅTT',
        }]}
      graderingAvslagAarsakKoder={[]}
      harSoktOmFlerbarnsdager={false}
      hasValidationError={false}
      alleKodeverk={{} as AlleKodeverk}
      updateActivity={() => undefined}
      kontoIkkeSatt={false}
      utsettelseAarsak={{} as KodeverkMedNavn[]}
      uttakFieldArray="test"
      currentlySelectedStønadskonto=""
      graderingInnvilget
      erSamtidigUttak={false}
      samtidigUttaksprosent="20"
      arbeidsgiverOpplysningerPerId={{}}
      kreverSammenhengendeUttak
    />);

    const fieldArray = wrapper.find('FieldArray');
    expect(fieldArray).toHaveLength(1);
    const radioGroup = wrapper.find('RadioGroupField');
    expect(radioGroup).toHaveLength(1);
    const selectAvslag = wrapper.find('SelectField');
    expect(selectAvslag).toHaveLength(1);
    const textArea = wrapper.find('TextAreaField');
    expect(textArea).toHaveLength(1);
    const updateKnapp = wrapper.find('Hovedknapp');
    expect(updateKnapp).toHaveLength(1);
    const cancelKnapp = wrapper.find('Knapp');
    expect(cancelKnapp).toHaveLength(1);
  });

  it('skal rendre uttakactivity med aksjonspunkt', () => {
    const wrapper = shallow(<UttakActivity
      {...reduxFormPropsMock}
      intl={intlMock}
      erOppfylt
      readOnly={false}
      selectedItemData={selectedItem}
      periodeTyper={[]}
      oppholdArsakTyper={[]}
      cancelSelectedActivity={sinon.spy()}
      validate={sinon.spy()}
      warn={sinon.spy()}
      onSubmit={sinon.spy()}
      periodeAarsakKoder={[
        {
          kode: '4011', navn: 'mitt navn', kodeverk: 'MITT_KODEVERK', gyldigForLovendringer: [], utfallType: 'AVSLÅTT',
        }]}
      graderingAvslagAarsakKoder={[]}
      harSoktOmFlerbarnsdager={false}
      hasValidationError={false}
      alleKodeverk={{} as AlleKodeverk}
      updateActivity={() => undefined}
      kontoIkkeSatt={false}
      utsettelseAarsak={{} as KodeverkMedNavn[]}
      uttakFieldArray="test"
      currentlySelectedStønadskonto=""
      graderingInnvilget
      erSamtidigUttak={false}
      samtidigUttaksprosent="20"
      arbeidsgiverOpplysningerPerId={{}}
      kreverSammenhengendeUttak
    />);

    const fieldArray = wrapper.find('FieldArray');
    expect(fieldArray).toHaveLength(1);
    const radioGroup = wrapper.find('RadioGroupField');
    expect(radioGroup).toHaveLength(1);
    const selectAvslag = wrapper.find('SelectField');
    expect(selectAvslag).toHaveLength(1);
    const textArea = wrapper.find('TextAreaField');
    expect(textArea).toHaveLength(1);
    const updateKnapp = wrapper.find('Hovedknapp');
    expect(updateKnapp).toHaveLength(1);
    const cancelKnapp = wrapper.find('Knapp');
    expect(cancelKnapp).toHaveLength(1);
  });

  it('skal rendre uttakactivity readonly', () => {
    const wrapper = shallow(<UttakActivity
      {...reduxFormPropsMock}
      intl={intlMock}
      erOppfylt
      selectedItemData={selectedItem}
      readOnly
      periodeTyper={[]}
      oppholdArsakTyper={[]}
      cancelSelectedActivity={sinon.spy()}
      validate={sinon.spy()}
      warn={sinon.spy()}
      onSubmit={sinon.spy()}
      periodeAarsakKoder={[
        {
          kode: '4011', navn: 'mitt navn', kodeverk: 'MITT_KODEVERK', gyldigForLovendringer: [],
        }]}
      graderingAvslagAarsakKoder={[]}
      harSoktOmFlerbarnsdager={false}
      hasValidationError={false}
      alleKodeverk={{} as AlleKodeverk}
      updateActivity={() => undefined}
      kontoIkkeSatt={false}
      utsettelseAarsak={{} as KodeverkMedNavn[]}
      uttakFieldArray="test"
      currentlySelectedStønadskonto=""
      graderingInnvilget
      erSamtidigUttak={false}
      samtidigUttaksprosent="20"
      arbeidsgiverOpplysningerPerId={{}}
      kreverSammenhengendeUttak
    />);

    const fieldArray = wrapper.find('FieldArray');
    expect(fieldArray).toHaveLength(1);
    const radioGroup = wrapper.find('RadioGroupField');
    expect(radioGroup).toHaveLength(0);
    const selectAvslag = wrapper.find('SelectField');
    expect(selectAvslag).toHaveLength(0);
    const textArea = wrapper.find('TextAreaField');
    expect(textArea).toHaveLength(1);
    const updateKnapp = wrapper.find('Hovedknapp');
    expect(updateKnapp).toHaveLength(0);
    const cancelKnapp = wrapper.find('Knapp');
    expect(cancelKnapp).toHaveLength(0);
  });

  it('skal sette opp initial values for perioder', () => {
    const initialValues = lagAktiviteter(selectedItem, false);
    expect(initialValues).toEqual([{
      days: 3.5,
      fom: '2018-01-01',
      tom: '2018-02-01',
      stønadskontoType: '',
      trekkdagerDesimaler: 28.5,
      utbetalingsgrad: 100,
      weeks: 5,
    }]);
  });
});
