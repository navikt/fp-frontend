import React from 'react';
import { shallow } from 'enzyme';
import { MockFieldsWithContent } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import opptjeningAktivitetType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import { InputField, SelectField } from '@fpsak-frontend/form';
import { ArbeidsforholdFieldImpl } from './ArbeidsforholdField';

const arbeidsforhold1 = {
  arbeidsgiverNavn: 'Sopra Steria AS',
  arbeidsgiverId: '233647823',
  arbeidsgiverIdVisning: '233647823',
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
    />);
    expect(wrapper.find(InputField).length).toEqual(1);
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
    />);
    const select = wrapper.find(SelectField);
    expect(select.length).toEqual(1);
    const { selectValues } = select.first().props();
    expect(selectValues.length).toEqual(1);
    expect(selectValues[0].key).toEqual('1');
    expect(selectValues[0].props.value).toEqual('1');
    expect(selectValues[0].props.children).toEqual('Sopra Steria AS (233647823)');
  });
});
