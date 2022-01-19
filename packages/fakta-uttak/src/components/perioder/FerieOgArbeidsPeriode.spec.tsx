import React from 'react';
import sinon from 'sinon';

import { RadioGroupField } from '@fpsak-frontend/form';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { FerieOgArbeidsPeriode } from './FerieOgArbeidsPeriode';
import messages from '../../../i18n/nb_NO.json';

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
      uttakPeriodeType=""
      originalResultat=""
      updated
      bekreftet
      readOnly={false}
      behandlingStatusKode={behandlingStatusKode}
      skalViseResultat
      arbeidstidprosent={10}
      onSubmit={sinon.spy()}
      {...reduxFormPropsMock}
    />, messages);

    const undertekst = wrapper.find('Undertekst');
    const radioGroupField = wrapper.find('RadioGroupField');
    const textAreaField = wrapper.find('TextAreaField');
    const inntektsmeldinginfo = wrapper.find('inntektsmeldinginfo');
    const radioGroupFieldComponent = wrapper.find(RadioGroupField).dive();
    expect(radioGroupFieldComponent.children()).toHaveLength(3);
    expect(textAreaField).toHaveLength(1);
    expect(undertekst).toHaveLength(1);
    expect(radioGroupField).toHaveLength(1);
    expect(inntektsmeldinginfo).toHaveLength(0);
  });
});
