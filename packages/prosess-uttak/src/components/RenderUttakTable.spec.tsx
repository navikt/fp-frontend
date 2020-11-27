import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { MockFieldsWithContent } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import RenderUttakTable from './RenderUttakTable';

const uttakFields1 = [
  {
    prosentArbeid: 100,
    stillingsprosent: 100,
    arbeidsgiverReferanse: '987',
    arbeidsforholdId: 907,
    uttakArbeidType: '',
    utbetalingsgrad: 0,
    days: 23,
  },
];

const uttakFields2 = [
  {
    prosentArbeid: 100,
    stillingsprosent: 100,
    arbeidsgiverReferanse: '987',
    arbeidsforholdId: 907,
    uttakArbeidType: '',
    utbetalingsgrad: 0,
    days: 23,
  },
  ...uttakFields1,
];

const arbeidsgiverOpplysningerPerId = {
  987: {
    erPrivatPerson: false,
    identifikator: '987',
    navn: 'Statoil',
  },
};

describe('<RenderUttakTable>', () => {
  it('render uttakstable 1 rad', () => {
    const fields = new MockFieldsWithContent('UttakFieldArray', uttakFields1);
    const wrapper = shallow(<RenderUttakTable
      readOnly={false}
      fields={fields}
      periodeTyper={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const tableRow = wrapper.find('TableRow');
    expect(tableRow).to.have.length(1);
    const tableColumn = wrapper.find('TableColumn');
    expect(tableColumn).to.have.length(5);
    const selectField = wrapper.find('SelectField');
    expect(selectField).to.have.length(1);
    const inputField = wrapper.find('InputField');
    expect(inputField).to.have.length(1);
    const decimalField = wrapper.find('DecimalField');
    expect(decimalField).to.have.length(2);
  });
  it('render uttakstable 2 rader', () => {
    const fields = new MockFieldsWithContent('UttakFieldArray', uttakFields2);
    const wrapper = shallow(<RenderUttakTable
      readOnly={false}
      fields={fields}
      periodeTyper={[]}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);
    const tableRow = wrapper.find('TableRow');
    expect(tableRow).to.have.length(2);
    const tableColumn = wrapper.find('TableColumn');
    expect(tableColumn).to.have.length(10);
    const selectField = wrapper.find('SelectField');
    expect(selectField).to.have.length(2);
    const inputField = wrapper.find('InputField');
    expect(inputField).to.have.length(2);
    const decimalField = wrapper.find('DecimalField');
    expect(decimalField).to.have.length(4);
  });
});
