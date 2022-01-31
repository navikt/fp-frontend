import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import familieHendelseType from '@fpsak-frontend/kodeverk/src/familieHendelseType';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';
import { AlleKodeverk } from '@fpsak-frontend/types';

import { SoknadTypePickerForm } from './SoknadTypePickerForm';

describe('<SoknadTypePickerForm>', () => {
  it('skal rendre komponent og vise kodeverk i radioknapper', () => {
    const familieHendelseTyper = [{ kode: familieHendelseType.ADOPSJON, navn: 'Adopsjon', kodeverk: '' }];
    const fagsakYtelseTyper = [{ kode: fagsakYtelseType.FORELDREPENGER, navn: 'Foreldrepenger', kodeverk: '' }];
    const foreldreTyper = [{ kode: foreldreType.MOR, navn: 'Mor', kodeverk: '' }];
    const ytelseErSatt = false;

    const wrapper = shallow(<SoknadTypePickerForm
      {...reduxFormPropsMock}
      familieHendelseTyper={familieHendelseTyper}
      fagsakYtelseTyper={fagsakYtelseTyper}
      foreldreTyper={foreldreTyper}
      ytelseErSatt={ytelseErSatt}
      setSoknadData={sinon.spy()}
      fagsakYtelseType={fagsakYtelseTyper[0].kode}
      alleKodeverk={{} as AlleKodeverk}
      onSubmit={sinon.spy()}
    />);

    const radioGroupFields = wrapper.find(RadioGroupField);
    expect(radioGroupFields).toHaveLength(3);

    const radioOptionsField1 = radioGroupFields.first().find(RadioOption);
    expect(radioOptionsField1).toHaveLength(1);
    expect(radioOptionsField1.prop('label')).toBe('Foreldrepenger');

    const radioOptionsField2 = radioGroupFields.at(1).find(RadioOption);
    expect(radioOptionsField2).toHaveLength(1);
    expect(radioOptionsField2.prop('label')).toBe('Adopsjon');

    const radioOptionsField3 = radioGroupFields.last().find(RadioOption);
    expect(radioOptionsField3).toHaveLength(1);
    expect(radioOptionsField3.prop('label')).toBe('Mor');
  });

  it('radioknapper for ytelsetype skal vere disabled om ytelsetype er satt i fagsaken', () => {
    const familieHendelseTyper = [{ kode: familieHendelseType.ADOPSJON, navn: 'Adopsjon', kodeverk: '' }];
    const fagsakYtelseTyper = [{ kode: fagsakYtelseType.FORELDREPENGER, navn: 'Endring foreldrepenger', kodeverk: '' }];
    const foreldreTyper = [{ kode: foreldreType.MOR, navn: 'Mor', kodeverk: '' }];
    const selectedFagsakYtelseType = fagsakYtelseType.FORELDREPENGER;

    const wrapper = shallow(<SoknadTypePickerForm
      {...reduxFormPropsMock}
      familieHendelseTyper={familieHendelseTyper}
      fagsakYtelseTyper={fagsakYtelseTyper}
      foreldreTyper={foreldreTyper}
      selectedFagsakYtelseType={selectedFagsakYtelseType}
      ytelseErSatt
      setSoknadData={sinon.spy()}
      fagsakYtelseType={fagsakYtelseTyper[0].kode}
      alleKodeverk={{} as AlleKodeverk}
      onSubmit={sinon.spy()}
    />);

    const radioGroupFields = wrapper.find(RadioGroupField);

    const radioOptionTema = radioGroupFields.at(0).find(RadioOption);
    expect(radioOptionTema.prop('disabled')).toBe(true);
  });

  it('radioknapper for familieHendelseType skal vere disabled og validering slått av når ytelsetype er svangerskapspenger', () => {
    const familieHendelseTyper = [{ kode: familieHendelseType.ADOPSJON, navn: 'Adopsjon', kodeverk: '' }];
    const fagsakYtelseTyper = [{ kode: fagsakYtelseType.SVANGERSKAPSPENGER, navn: 'Endring foreldrepenger', kodeverk: '' }];
    const foreldreTyper = [{ kode: foreldreType.MOR, navn: 'Mor', kodeverk: '' }];
    const selectedFagsakYtelseType = fagsakYtelseType.SVANGERSKAPSPENGER;

    const wrapper = shallow(<SoknadTypePickerForm
      {...reduxFormPropsMock}
      familieHendelseTyper={familieHendelseTyper}
      fagsakYtelseTyper={fagsakYtelseTyper}
      foreldreTyper={foreldreTyper}
      selectedFagsakYtelseType={selectedFagsakYtelseType}
      ytelseErSatt
      setSoknadData={sinon.spy()}
      fagsakYtelseType={fagsakYtelseTyper[0].kode}
      alleKodeverk={{} as AlleKodeverk}
      onSubmit={sinon.spy()}
    />);

    const familieHendelseRadioGroup = wrapper.find('[name="familieHendelseType"]');
    expect(familieHendelseRadioGroup.prop('validate')).toEqual([]);

    const familieHendelseRadioButton = familieHendelseRadioGroup.at(0).find(RadioOption);
    expect(familieHendelseRadioButton.prop('disabled')).toBe(true);
  });

  it('skal kalle submitevent', () => {
    const familieHendelseTyper = [{ kode: familieHendelseType.ADOPSJON, navn: 'Adopsjon', kodeverk: '' }];
    const fagsakYtelseTyper = [{ kode: fagsakYtelseType.FORELDREPENGER, navn: 'Endring foreldrepenger', kodeverk: '' }];
    const foreldreTyper = [{ kode: foreldreType.MOR, navn: 'Mor', kodeverk: '' }];
    const selectedFagsakYtelseType = fagsakYtelseType.FORELDREPENGER;

    const submitEvent = sinon.spy();

    const wrapper = shallow(<SoknadTypePickerForm
      {...reduxFormPropsMock}
      handleSubmit={submitEvent}
      familieHendelseTyper={familieHendelseTyper}
      fagsakYtelseTyper={fagsakYtelseTyper}
      foreldreTyper={foreldreTyper}
      selectedFagsakYtelseType={selectedFagsakYtelseType}
      ytelseErSatt={false}
      setSoknadData={sinon.spy()}
      fagsakYtelseType={fagsakYtelseTyper[0].kode}
      alleKodeverk={{} as AlleKodeverk}
      onSubmit={sinon.spy()}
    />);

    const radioGroupFields = wrapper.find(RadioGroupField);
    expect(radioGroupFields).toHaveLength(3);

    const radioOptionType = radioGroupFields.at(0).find(RadioOption);
    radioOptionType.simulate('click');

    const radioOptionTema = radioGroupFields.at(1).find(RadioOption);
    expect(radioOptionTema).toHaveLength(1);
    expect(radioOptionTema.prop('disabled')).toBe(false);

    const radioOptionForeldretype = radioGroupFields.at(2).find(RadioOption);
    expect(radioOptionForeldretype).toHaveLength(1);
    expect(radioOptionForeldretype.prop('disabled')).toBe(false);

    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() { return undefined; } });

    expect(submitEvent).toHaveProperty('callCount', 1);
  });
});
