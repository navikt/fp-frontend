import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { DatepickerField, DecimalField, InputField } from '@fpsak-frontend/form';
import OAType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';

import CustomOpptjeningAktivitet from '../../CustomOpptjeningAktivitet';
import ActivityDataSubPanel from './ActivityDataSubPanel';

describe('<ActivityDataSubPanel>', () => {
  const activity1 = {
    arbeidsgiverReferanse: '1',
  } as CustomOpptjeningAktivitet;
  const activity2 = {
    arbeidsgiverReferanse: '2',
  } as CustomOpptjeningAktivitet;

  const arbeidsgiverOpplysningerPerId = {
    1: {
      erPrivatPerson: false,
      identifikator: '123456789',
      navn: 'Svensen Eksos',
    },
    2: {
      erPrivatPerson: true,
      identifikator: '232',
      navn: 'Tom Hansen',
      fødselsdato: '1992-11-10',
    },
  };

  it('skal vise arbeidsgiver, org-nr og stillingsandel for type Arbeid', () => {
    const wrapper = shallow(<ActivityDataSubPanel
      initialValues={activity1}
      readOnly={false}
      isManuallyAdded={false}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    const arbeidsgiverLabel = wrapper.find(FormattedMessage);
    expect(arbeidsgiverLabel).toHaveLength(1);
    expect(arbeidsgiverLabel.prop('id')).toEqual('ActivityPanel.Arbeidsgiver');

    const arbeidsgiverText = wrapper.find(Normaltekst);
    expect(arbeidsgiverText).toHaveLength(1);
    expect(arbeidsgiverText.childAt(0).text()).toEqual('Svensen Eksos (123456789)');

    const stillingsandelInput = wrapper.find(DecimalField);
    expect(stillingsandelInput).toHaveLength(1);
    expect(stillingsandelInput.prop('name')).toEqual('stillingsandel');
    expect(stillingsandelInput.prop('readOnly')).toBe(true);

    expect(wrapper.find(DatepickerField)).toHaveLength(0);
  });

  it('skal vise "-" når arbeidsgiver ikke er oppgitt', () => {
    const wrapper = shallow(<ActivityDataSubPanel
      initialValues={{} as CustomOpptjeningAktivitet}
      readOnly={false}
      isManuallyAdded={false}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    const arbeidsgiverLabel = wrapper.find(FormattedMessage);
    expect(arbeidsgiverLabel).toHaveLength(1);
    expect(arbeidsgiverLabel.prop('id')).toEqual('ActivityPanel.Arbeidsgiver');

    const arbeidsgiverText = wrapper.find(Normaltekst);
    expect(arbeidsgiverText).toHaveLength(1);
    expect(arbeidsgiverText.childAt(0).text()).toEqual('-');

    const stillingsandelInput = wrapper.find(DecimalField);
    expect(stillingsandelInput).toHaveLength(1);
    expect(stillingsandelInput.prop('name')).toEqual('stillingsandel');
    expect(stillingsandelInput.prop('readOnly')).toBe(true);

    expect(wrapper.find(DatepickerField)).toHaveLength(0);
  });

  it('skal ikke vise label Oppdragsgiver for type Frilans', () => {
    const wrapper = shallow(<ActivityDataSubPanel
      initialValues={activity1}
      readOnly={false}
      isManuallyAdded={false}
      selectedActivityType={{ kode: OAType.FRILANS, kodeverk: '' }}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    const arbeidsgiverLabel = wrapper.find(FormattedMessage);
    expect(arbeidsgiverLabel).toHaveLength(0);

    expect(wrapper.find(InputField)).toHaveLength(0);
    expect(wrapper.find(DatepickerField)).toHaveLength(0);
  });

  it('skal vise ikke vise stillingsandel for type Næring', () => {
    const wrapper = shallow(<ActivityDataSubPanel
      initialValues={activity1}
      readOnly={false}
      isManuallyAdded={false}
      selectedActivityType={{ kode: OAType.NARING, kodeverk: '' }}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    const arbeidsgiverLabel = wrapper.find(FormattedMessage);
    expect(arbeidsgiverLabel).toHaveLength(1);
    expect(arbeidsgiverLabel.prop('id')).toEqual('ActivityPanel.Arbeidsgiver');

    expect(wrapper.find(InputField)).toHaveLength(0);
    expect(wrapper.find(DatepickerField)).toHaveLength(1);
  });

  it('skal ikke vise noen felter for type Vartpenger', () => {
    const wrapper = shallow(<ActivityDataSubPanel
      initialValues={activity1}
      readOnly={false}
      isManuallyAdded={false}
      selectedActivityType={{ kode: OAType.VARTPENGER, kodeverk: '' }}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    expect(wrapper.find(FormattedMessage)).toHaveLength(0);
    expect(wrapper.find(InputField)).toHaveLength(0);
    expect(wrapper.find(DatepickerField)).toHaveLength(0);
  });

  it('skal vise inputfelt for organisasjonsnr når saksbehandler manuelt har lagt til aktivitet Arbeid', () => {
    const wrapper = shallow(<ActivityDataSubPanel
      initialValues={activity1}
      readOnly={false}
      isManuallyAdded
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    expect(wrapper.find(FormattedMessage)).toHaveLength(0);
    const inputFields = wrapper.find(InputField);
    expect(inputFields).toHaveLength(1);
    expect(inputFields.prop('name')).toEqual('oppdragsgiverOrg');
    expect(inputFields.prop('readOnly')).toBe(false);
    const decimalField = wrapper.find(DecimalField);
    expect(decimalField).toHaveLength(1);
    expect(decimalField.prop('name')).toEqual('stillingsandel');
    expect(decimalField.prop('readOnly')).toBe(false);
  });

  it('skal vise inputfelt som readOnly', () => {
    const wrapper = shallow(<ActivityDataSubPanel
      initialValues={activity1}
      readOnly
      isManuallyAdded
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    expect(wrapper.find(FormattedMessage)).toHaveLength(0);
    const inputFields = wrapper.find(InputField);
    expect(inputFields).toHaveLength(1);
    expect(inputFields.prop('readOnly')).toBe(true);
    const decimalField = wrapper.find(DecimalField);
    expect(decimalField).toHaveLength(1);
    expect(decimalField.prop('name')).toEqual('stillingsandel');
    expect(decimalField.prop('readOnly')).toBe(true);
  });
  it('skal vise arbeidsgiver som privatperson', () => {
    const wrapper = shallow(<ActivityDataSubPanel
      initialValues={activity2}
      readOnly={false}
      isManuallyAdded={false}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const tekst = wrapper.find(Normaltekst);
    expect(tekst).toHaveLength(1);
    expect(tekst.props().children).toBe('Tom Hansen (10.11.1992)');
  });
  it('skal vise org når ikke privatperson', () => {
    const wrapper = shallow(<ActivityDataSubPanel
      initialValues={activity1}
      readOnly={false}
      isManuallyAdded={false}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const tekst = wrapper.find(Normaltekst);
    expect(tekst).toHaveLength(1);
    expect(tekst.props().children).toBe('Svensen Eksos (123456789)');
  });
  it('skal vise - som arbeidsgiver når ikke arbeidsgiver eller privatperson', () => {
    const wrapper = shallow(<ActivityDataSubPanel
      initialValues={{} as CustomOpptjeningAktivitet}
      readOnly={false}
      isManuallyAdded={false}
      selectedActivityType={{ kode: OAType.ARBEID, kodeverk: '' }}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const tekst = wrapper.find(Normaltekst);
    expect(tekst).toHaveLength(1);
    expect(tekst.props().children).toBe('-');
  });
});
