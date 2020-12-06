import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { MockFieldsWithContent } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import opptjeningAktivitetType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import { InputField, SelectField } from '@fpsak-frontend/form';
import { ArbeidsforholdFieldImpl } from './ArbeidsforholdField';

const agOpplysninger = {
  233647823: {
    navn: 'Sopra Steria AS',
    identifikator: '233647823',
    erPrivatPerson: false,
  },
};

const arbeidsforhold1 = {
  arbeidsgiverId: '233647823',
  startdato: '01.01.1967',
  opphoersdato: null,
  arbeidsforholdId: null,
  arbeidsforholdType: '',
  aktørIdString: null,
};

const andelField = {
  nyAndel: false,
  andel: 'Sopra Steria AS (233647823)',
  andelsnr: 1,
  fastsattBelop: '0',
  lagtTilAvSaksbehandler: false,
  inntektskategori: 'ARBEIDSTAKER',
  ...arbeidsforhold1,
};

const fields = new MockFieldsWithContent('fieldArrayName', [andelField]);

const alleKodeverk = {
  [kodeverkTyper.OPPTJENING_AKTIVITET_TYPE]: [{
    kode: opptjeningAktivitetType.ARBEID,
    navn: 'Arbeid',
    kodeverk: 'test',
  }, {
    kode: opptjeningAktivitetType.FRILANS,
    navn: 'Frilans',
    kodeverk: 'test',
  }, {
    kode: opptjeningAktivitetType.DAGPENGER,
    navn: 'Dagpenger',
    kodeverk: 'test',
  }, {
    kode: opptjeningAktivitetType.NARING,
    navn: 'Næring',
    kodeverk: 'test',
  }],
};

describe('<ArbeidsforholdField>', () => {
  it('skal render ArbeidsforholdField med input for eksisterende andel', () => {
    const wrapper = shallow(<ArbeidsforholdFieldImpl
      fields={fields}
      readOnly={false}
      name="andel"
      index={0}
      alleKodeverk={alleKodeverk}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
    />);
    expect(wrapper.find(InputField).length).to.eql(1);
  });

  it('skal render ArbeidsforholdField med selectField', () => {
    const copyAndel = { ...andelField, skalKunneEndreAktivitet: true };
    const fields2 = new MockFieldsWithContent('fieldArrayName', [copyAndel]);

    const wrapper = shallow(<ArbeidsforholdFieldImpl
      fields={fields2}
      readOnly={false}
      name="andel"
      index={0}
      alleKodeverk={alleKodeverk}
      arbeidsgiverOpplysningerPerId={agOpplysninger}
    />);
    const select = wrapper.find(SelectField);
    expect(select.length).to.eql(1);
    const { selectValues } = select.first().props();
    expect(selectValues.length).to.eql(1);
    expect(selectValues[0].key).to.eql('1');
    expect(selectValues[0].props.value).to.eql('1');
    expect(selectValues[0].props.children).to.eql('Sopra Steria AS (233647823)');
  });
});
