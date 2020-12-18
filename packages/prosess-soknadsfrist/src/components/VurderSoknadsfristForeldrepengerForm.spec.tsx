import React from 'react';
import { shallow } from 'enzyme';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';

import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { VurderSoknadsfristForeldrepengerFormImpl as UnwrappedForm } from './VurderSoknadsfristForeldrepengerForm';

describe('<VurderSoknadsfristForeldrepengerForm>', () => {
  it('skal rendre form og vise søknadsfristdato som er lik mottatt dato minus antallDagerSoknadLevertForSent', () => {
    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      readOnly={false}
      readOnlySubmitButton={false}
      mottattDato="2017-10-15"
      antallDagerSoknadLevertForSent={9}
      soknadsperiodeStart="2017-06-05"
      soknadsperiodeSlutt="2017-11-01"
      soknadsfristdato="2017-09-30"
      isApOpen
      behandlingId={1}
      behandlingVersjon={1}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      hasAksjonspunkt={false}
      onSubmit={() => undefined}
    />);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText.childAt(0).prop('id')).toEqual('VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText');
    expect(helpText.childAt(0).prop('values')).toEqual({ numberOfDays: 9, soknadsfristdato: '30.09.2017' });
  });

  it('skal rendre form og vise mottatt dato, periode og begrunnelse', () => {
    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      readOnly={false}
      readOnlySubmitButton={false}
      mottattDato="2017-10-15"
      antallDagerSoknadLevertForSent={9}
      soknadsperiodeStart="2017-06-05"
      soknadsperiodeSlutt="2017-11-01"
      soknadsfristdato="2017-09-30"
      isApOpen
      behandlingId={1}
      behandlingVersjon={1}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      hasAksjonspunkt={false}
      onSubmit={() => undefined}
    />);
    const normalTekst = wrapper.find('Normaltekst');
    expect(normalTekst).toHaveLength(2);
    // Mottattdato
    expect(normalTekst.first().childAt(0).text()).toEqual('15.10.2017');

    // Periode
    expect(normalTekst.at(1).childAt(0).text()).toEqual('05.06.2017 - 01.11.2017');
  });

  it('skal rendre radiobuttons', () => {
    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      readOnly={false}
      readOnlySubmitButton={false}
      gyldigSenFremsetting={false}
      mottattDato="2017-10-15"
      antallDagerSoknadLevertForSent={15}
      soknadsperiodeStart="2017-06-05"
      soknadsperiodeSlutt="2017-11-01"
      soknadsfristdato="2017-09-30"
      isApOpen
      behandlingId={1}
      behandlingVersjon={1}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      hasAksjonspunkt={false}
      onSubmit={() => undefined}
    />);
    const radioGroup = wrapper.find('RadioGroupField');
    expect(radioGroup).toHaveLength(1);
    expect(radioGroup.first().prop('name')).toEqual('gyldigSenFremsetting');
    const radioFieldsGroup = radioGroup.first().find('RadioOption');
    expect(radioFieldsGroup).toHaveLength(2);
  });

  it('skal ikke vise datepicker når gyldigSenFremsetting er false', () => {
    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      readOnly={false}
      readOnlySubmitButton={false}
      gyldigSenFremsetting={false}
      mottattDato="2017-10-15"
      antallDagerSoknadLevertForSent={15}
      soknadsperiodeStart="2017-06-05"
      soknadsperiodeSlutt="2017-11-01"
      soknadsfristdato="2017-09-30"
      isApOpen
      behandlingId={1}
      behandlingVersjon={1}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      hasAksjonspunkt={false}
      onSubmit={() => undefined}
    />);
    const datepicker = wrapper.find('DatepickerField');
    expect(datepicker).toHaveLength(0);
  });

  it('skal vise datepicker når gyldigSenFremsetting er true', () => {
    const wrapper = shallow(<UnwrappedForm
      {...reduxFormPropsMock}
      gyldigSenFremsetting
      readOnly={false}
      readOnlySubmitButton={false}
      mottattDato="2017-10-15"
      antallDagerSoknadLevertForSent={15}
      soknadsperiodeStart="2017-06-05"
      soknadsperiodeSlutt="2017-11-01"
      soknadsfristdato="2017-09-30"
      isApOpen
      behandlingId={1}
      behandlingVersjon={1}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
      hasAksjonspunkt={false}
      onSubmit={() => undefined}
    />);
    const datepicker = wrapper.find('DatepickerField');
    expect(datepicker).toHaveLength(1);
    expect(datepicker.prop('name')).toEqual('ansesMottatt');
  });
});
