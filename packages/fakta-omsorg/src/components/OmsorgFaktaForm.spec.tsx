import React from 'react';
import { expect } from 'chai';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Ytelsefordeling } from '@fpsak-frontend/types';

import OmsorgFaktaForm from './OmsorgFaktaForm';

describe('<OmsorgFaktaForm>', () => {
  const aleneomsorgAp = {
    id: 1,
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
      kodeverk: '',
    },
    status: {
      kode: 'OPPRETTET',
      kodeverk: '',
    },
    toTrinnsBehandling: false,
    toTrinnsBehandlingGodkjent: false,
    kanLoses: true,
    erAktivt: false,
  };
  const omsorgAp = {
    id: 2,
    definisjon: {
      kode: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
      kodeverk: '',
    },
    status: {
      kode: 'OPPRETTET',
      kodeverk: '',
    },
    toTrinnsBehandling: false,
    toTrinnsBehandlingGodkjent: false,
    kanLoses: true,
    erAktivt: false,
  };

  it('skal vise tekst for aleneomsorg', () => {
    const wrapper = shallow(<OmsorgFaktaForm.WrappedComponent
      readOnly={false}
      omsorg={false}
      className="defaultAleneOmsorgFakta"
      aksjonspunkter={[aleneomsorgAp]}
      oppgittOmsorgSoknad={false}
      oppgittAleneomsorgSoknad
      alleMerknaderFraBeslutter={{}}
    />);

    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).to.have.length(1);
    expect(formattedMessage.first().prop('id')).to.eql('OmsorgFaktaForm.OppgittAleneomsorg');
  });

  it('skal vise tekst for omsorg', () => {
    const wrapper = shallow(<OmsorgFaktaForm.WrappedComponent
      readOnly={false}
      omsorg={false}
      className="defaultAleneOmsorgFakta"
      aksjonspunkter={[omsorgAp]}
      oppgittOmsorgSoknad={false}
      oppgittAleneomsorgSoknad
      alleMerknaderFraBeslutter={{}}
    />);

    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).to.have.length(1);
    expect(formattedMessage.first().prop('id')).to.eql('OmsorgFaktaForm.OppgittIkkeOmsorg');
  });

  it('skal vise form - med <IkkeOmsorgPeriodeField>', () => {
    const wrapper = shallow(<OmsorgFaktaForm.WrappedComponent
      readOnly={false}
      omsorg={false}
      className="defaultAleneOmsorgFakta"
      aksjonspunkter={[aleneomsorgAp, omsorgAp]}
      oppgittOmsorgSoknad={false}
      oppgittAleneomsorgSoknad
      alleMerknaderFraBeslutter={{}}
    />);

    const radioGroup = wrapper.find('RadioGroupField');
    expect(radioGroup).to.have.length(2);
    expect(radioGroup.first().prop('name')).is.eql('aleneomsorg');
    expect(radioGroup.last().prop('name')).is.eql('omsorg');

    const radioFieldsGroup1 = radioGroup.first().find('RadioOption');
    expect(radioFieldsGroup1).to.have.length(2);
    expect(radioFieldsGroup1.first().prop('value')).to.eql(true);
    // @ts-ignore Fiks
    expect(radioFieldsGroup1.first().prop('label').id).to.eql('OmsorgFaktaForm.HarAleneomsorg');
    expect(radioFieldsGroup1.last().prop('value')).to.eql(false);
    // @ts-ignore Fiks
    expect(radioFieldsGroup1.last().prop('label').props.id).to.eql('OmsorgFaktaForm.HarIkkeAleneomsorg');

    const radioFieldsGroup2 = radioGroup.last().find('RadioOption');
    expect(radioFieldsGroup2).to.have.length(2);
    expect(radioFieldsGroup2.first().prop('value')).to.eql(true);
    // @ts-ignore Fiks
    expect(radioFieldsGroup2.first().prop('label').id).to.eql('OmsorgFaktaForm.HarOmsorg');
    expect(radioFieldsGroup2.last().prop('value')).to.eql(false);
    // @ts-ignore Fiks
    expect(radioFieldsGroup2.last().prop('label').props.id).to.eql('OmsorgFaktaForm.HarIkkeOmsorg');
    expect(wrapper.find('FieldArray')).to.have.length(1);
  });

  it('skal vise form - uten <IkkeOmsorgPeriodeField>', () => {
    const wrapper = shallow(<OmsorgFaktaForm.WrappedComponent
      readOnly={false}
      omsorg
      aksjonspunkter={[aleneomsorgAp, omsorgAp]}
      className="defaultAleneOmsorgFakta"
      oppgittOmsorgSoknad
      oppgittAleneomsorgSoknad
      alleMerknaderFraBeslutter={{}}
    />);
    expect(wrapper.find('RadioGroupField')).to.have.length(2);
    expect(wrapper.find('FieldArray')).to.have.length(0);
  });

  it('skal sette opp initielle verdier fra behandling', () => {
    const ytelseFordeling = {
      aleneOmsorgPerioder: null,
      ikkeOmsorgPerioder: null,
    } as Ytelsefordeling;

    const aksjonspunkter = [
      aleneomsorgAp,
    ];
    const initialValues = OmsorgFaktaForm.buildInitialValues(ytelseFordeling, aksjonspunkter);

    expect(initialValues).to.eql({
      aleneomsorg: null,
      omsorg: null,
      ikkeOmsorgPerioder: [],
    });
  });
});
