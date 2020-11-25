import React from 'react';
import { expect } from 'chai';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { SelectField, InputField } from '@fpsak-frontend/form';

import RegistrereVergeFaktaForm from './RegistrereVergeFaktaForm';
import VergeType from '../kodeverk/vergeType';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-verge';

const vergetyper = [{
  kode: VergeType.BARN,
  navn: 'Barn',
  kodeverk: '',
}, {
  kode: VergeType.ANNEN_F,
  navn: 'Annen foreldre',
  kodeverk: '',
}];

describe('<RegistrereVergeFaktaForm>', () => {
  it('skal vise kun dropdown for vergetype når dette ikke er satt', () => {
    const wrapper = shallowWithIntl(<RegistrereVergeFaktaForm
      intl={intlMock}
      readOnly={false}
      vergetyper={vergetyper}
      alleMerknaderFraBeslutter={{}}
    />);

    expect(wrapper.find(SelectField)).to.have.length(1);
    expect(wrapper.find(InputField)).to.have.length(0);
  });

  it('skal vise alle felter når dette vergetype er valgt', () => {
    const wrapper = shallowWithIntl(<RegistrereVergeFaktaForm
      intl={intlMock}
      readOnly={false}
      vergetyper={vergetyper}
      alleMerknaderFraBeslutter={{}}
      valgtVergeType={VergeType.BARN}
    />);

    expect(wrapper.find(SelectField)).to.have.length(1);
    expect(wrapper.find(InputField)).to.have.length(2);
  });

  it('skal sette opp initielle verdier fra behandling', () => {
    const verge = {
      navn: 'Tester',
      gyldigFom: '2017',
      gyldigTom: '2018',
      fnr: '1234',
      vergeType: { kode: VergeType.BARN, kodeverk: '' },
    };

    const initialValues = RegistrereVergeFaktaForm.buildInitialValues(verge);

    expect(initialValues).to.eql({
      navn: 'Tester',
      gyldigFom: '2017',
      gyldigTom: '2018',
      fnr: '1234',
      organisasjonsnummer: undefined,
      vergeType: VergeType.BARN,
    });
  });
});
