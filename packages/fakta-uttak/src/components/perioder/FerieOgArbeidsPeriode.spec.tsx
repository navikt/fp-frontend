import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

import { RadioGroupField } from '@fpsak-frontend/form';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import { FerieOgArbeidsPeriode } from './FerieOgArbeidsPeriode';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-uttak';

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
      uttakPeriodeType={{
        kode: '',
        kodeverk: '',
      }}
      originalResultat={{
        kode: '',
        kodeverk: '',
      }}
      updated
      bekreftet
      readOnly={false}
      behandlingStatusKode={behandlingStatusKode}
      skalViseResultat
      behandlingId={1}
      behandlingVersjon={2}
      arbeidstidprosent={10}
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
