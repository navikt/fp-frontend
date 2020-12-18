import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import { lagAktiviteter, UttakActivity } from './UttakActivity';
import { PeriodeMedClassName } from './Uttak';
import { AktivitetFieldArray } from './RenderUttakTable';

describe('<UttakActivity>', () => {
  const selectedItem = {
    id: 1,
    fom: '2018-01-01',
    tom: '2018-02-01',
    periodeResultatType: {
      kode: '',
      kodeverk: '',
    },
    periodeResultatÅrsak: {
      kode: '',
      kodeverk: '',
    },
    flerbarnsdager: false,
    utsettelseType: {
      kode: '-',
    },
    periodeType: {
      kode: '-',
    },
    oppholdÅrsak: {
      kode: '-',
    },
    aktiviteter: [{
      trekkdagerDesimaler: 28.5,
      utbetalingsgrad: 100,
      stønadskontoType: {
        kode: '',
        kodeverk: '',
      },
    }] as AktivitetFieldArray[],
  } as PeriodeMedClassName;
  it('skal rendre uttakactivity med oppfylt periode', () => {
    const wrapper = shallow(<UttakActivity
      {...reduxFormPropsMock}
      erOppfylt
      selectedItemData={selectedItem}
      readOnly={false}
      periodeTyper={[]}
      oppholdArsakTyper={[]}
      cancelSelectedActivity={sinon.spy()}
      validate={sinon.spy()}
      warn={sinon.spy()}
      onSubmit={sinon.spy()}
      avslagAarsakKoder={[{ kode: '4011', navn: 'mitt navn', kodeverk: 'MITT_KODEVERK' }]}
      innvilgelseAarsakKoder={[]}
      graderingAvslagAarsakKoder={[]}
      starttidspunktForeldrepenger=""
      harSoktOmFlerbarnsdager={false}
      hasValidationError={false}
      alleKodeverk={{}}
      updateActivity={() => undefined}
      behandlingId={1}
      behandlingVersjon={2}
      kontoIkkeSatt={false}
      utsettelseAarsak={{} as KodeverkMedNavn[]}
      uttakFieldArray="test"
      currentlySelectedStønadskonto={{} as Kodeverk}
      graderingInnvilget
      erSamtidigUttak={false}
      samtidigUttaksprosent="20"
      arbeidsgiverOpplysningerPerId={{}}
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
      erOppfylt
      selectedItemData={selectedItem}
      readOnly={false}
      periodeTyper={[]}
      oppholdArsakTyper={[]}
      cancelSelectedActivity={sinon.spy()}
      validate={sinon.spy()}
      warn={sinon.spy()}
      onSubmit={sinon.spy()}
      avslagAarsakKoder={[{ kode: '4011', navn: 'mitt navn', kodeverk: 'MITT_KODEVERK' }]}
      innvilgelseAarsakKoder={[]}
      graderingAvslagAarsakKoder={[]}
      starttidspunktForeldrepenger=""
      harSoktOmFlerbarnsdager={false}
      hasValidationError={false}
      alleKodeverk={{}}
      updateActivity={() => undefined}
      behandlingId={1}
      behandlingVersjon={2}
      kontoIkkeSatt={false}
      utsettelseAarsak={{} as KodeverkMedNavn[]}
      uttakFieldArray="test"
      currentlySelectedStønadskonto={{} as Kodeverk}
      graderingInnvilget
      erSamtidigUttak={false}
      samtidigUttaksprosent="20"
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const row = wrapper.find('Row');
    expect(row).toHaveLength(2);
    const column = wrapper.find('Column');
    expect(column).toHaveLength(1);
    const formattedMessage = wrapper.find('FormattedMessage');
    expect(formattedMessage).toHaveLength(2);
  });

  it('skal rendre uttakactivity med ikke oppfylt', () => {
    const wrapper = shallow(<UttakActivity
      {...reduxFormPropsMock}
      erOppfylt={false}
      readOnly={false}
      selectedItemData={selectedItem}
      periodeTyper={[]}
      oppholdArsakTyper={[]}
      cancelSelectedActivity={sinon.spy()}
      validate={sinon.spy()}
      warn={sinon.spy()}
      onSubmit={sinon.spy()}
      avslagAarsakKoder={[{ kode: '4011', navn: 'mitt navn', kodeverk: 'MITT_KODEVERK' }]}
      innvilgelseAarsakKoder={[]}
      graderingAvslagAarsakKoder={[]}
      starttidspunktForeldrepenger=""
      harSoktOmFlerbarnsdager={false}
      hasValidationError={false}
      alleKodeverk={{}}
      updateActivity={() => undefined}
      behandlingId={1}
      behandlingVersjon={2}
      kontoIkkeSatt={false}
      utsettelseAarsak={{} as KodeverkMedNavn[]}
      uttakFieldArray="test"
      currentlySelectedStønadskonto={{} as Kodeverk}
      graderingInnvilget
      erSamtidigUttak={false}
      samtidigUttaksprosent="20"
      arbeidsgiverOpplysningerPerId={{}}
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
      erOppfylt
      readOnly={false}
      selectedItemData={selectedItem}
      periodeTyper={[]}
      oppholdArsakTyper={[]}
      cancelSelectedActivity={sinon.spy()}
      validate={sinon.spy()}
      warn={sinon.spy()}
      onSubmit={sinon.spy()}
      avslagAarsakKoder={[]}
      innvilgelseAarsakKoder={[{ kode: '4011', navn: 'mitt navn', kodeverk: 'MITT_KODEVERK' }]}
      graderingAvslagAarsakKoder={[]}
      starttidspunktForeldrepenger=""
      harSoktOmFlerbarnsdager={false}
      hasValidationError={false}
      alleKodeverk={{}}
      updateActivity={() => undefined}
      behandlingId={1}
      behandlingVersjon={2}
      kontoIkkeSatt={false}
      utsettelseAarsak={{} as KodeverkMedNavn[]}
      uttakFieldArray="test"
      currentlySelectedStønadskonto={{} as Kodeverk}
      graderingInnvilget
      erSamtidigUttak={false}
      samtidigUttaksprosent="20"
      arbeidsgiverOpplysningerPerId={{}}
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
      erOppfylt
      selectedItemData={selectedItem}
      readOnly
      periodeTyper={[]}
      oppholdArsakTyper={[]}
      cancelSelectedActivity={sinon.spy()}
      validate={sinon.spy()}
      warn={sinon.spy()}
      onSubmit={sinon.spy()}
      avslagAarsakKoder={[{ kode: '4011', navn: 'mitt navn', kodeverk: 'MITT_KODEVERK' }]}
      innvilgelseAarsakKoder={[]}
      graderingAvslagAarsakKoder={[]}
      starttidspunktForeldrepenger=""
      harSoktOmFlerbarnsdager={false}
      hasValidationError={false}
      alleKodeverk={{}}
      updateActivity={() => undefined}
      behandlingId={1}
      behandlingVersjon={2}
      kontoIkkeSatt={false}
      utsettelseAarsak={{} as KodeverkMedNavn[]}
      uttakFieldArray="test"
      currentlySelectedStønadskonto={{} as Kodeverk}
      graderingInnvilget
      erSamtidigUttak={false}
      samtidigUttaksprosent="20"
      arbeidsgiverOpplysningerPerId={{}}
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
      stønadskontoType: {
        kode: '',
        kodeverk: '',
      },
      trekkdagerDesimaler: 28.5,
      utbetalingsgrad: 100,
      weeks: 5,
    }]);
  });
});
