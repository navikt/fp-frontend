import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

import { RadioGroupField } from '@fpsak-frontend/form';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import { FerieOgArbeidsPeriode } from './FerieOgArbeidsPeriode';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-uttak';

const arbeidsgiver = {};
const behandlingStatusKode = '';

describe('<FerieOgArbeidsPeriode>', () => {
  it('skal vise ferie og arbeids periode', () => {
    const wrapper = shallowWithIntl(<FerieOgArbeidsPeriode
      fieldId="periode[0]"
      resultat={undefined}
      updatePeriode={sinon.spy()}
      cancelEditPeriode={sinon.spy()}
      id="2018-06-02|2018-06-25"
      fraDato="2018-06-02"
      tilDato="2018-06-25"
      uttakPeriodeType={{}}
      originalResultat={{}}
      updated
      bekreftet
      readOnly={false}
      behandlingStatusKode={behandlingStatusKode}
      arbeidsgiver={arbeidsgiver}
      skalViseResultat
      oppholdArsak={{}}
      inntektsmeldinger={[{
        arbeidsgiver: 'test',
        arbeidsgiverStartdato: '2000-01-01',
        utsettelsePerioder: [{
          fom: '2000-01-01',
          tom: '2000-01-10',
          utsettelseArsak: {
            kode: 'ARBEID',
            kodeverk: 'UTSETTELSE_AARSAK_TYPE',
            navn: 'Arbeid',
          },
        }],
      }]}
      getKodeverknavn={sinon.spy()}
      {...reduxFormPropsMock}
    />);

    const undertekst = wrapper.find('Undertekst');
    const radioGroupField = wrapper.find('RadioGroupField');
    const textAreaField = wrapper.find('TextAreaField');
    const inntektsmeldinginfo = wrapper.find('inntektsmeldinginfo');
    const radioGroupFieldComponent = wrapper.find(RadioGroupField).dive();
    expect(radioGroupFieldComponent.children()).to.have.length(3);
    expect(textAreaField).to.have.length(1);
    expect(undertekst).to.have.length(1);
    expect(radioGroupField).to.have.length(1);
    expect(inntektsmeldinginfo).to.have.length(0);
  });
});
