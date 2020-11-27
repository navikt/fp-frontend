import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { PeriodeSokerAktivitet } from '@fpsak-frontend/types';

import { UttakInfo } from './UttakInfo';
import { PeriodeMedClassName } from './Uttak';

describe('<UttakInfo>', () => {
  const selectedItem = {
    id: 1,
    fom: '2018-01-01',
    tom: '2018-02-01',
    periodeResultatType: {
      kode: '',
      kodeverk: '',
    },
    periodeResultatÅrsak: {
      kode: '',
      kodeverk: '',
    },
    flerbarnsdager: false,
    utsettelseType: {
      kode: '-',
    },
    periodeType: {
      kode: '-',
    },
    oppholdÅrsak: {
      kode: '-',
    },
    aktiviteter: [{
      utbetalingsgrad: 100,
      stønadskontoType: {
        kode: '',
        kodeverk: '',
      },
    }] as PeriodeSokerAktivitet[],
  } as PeriodeMedClassName;

  it('skal rendre uttakinfo med to checkboxes, når flerbarnsdager', () => {
    const wrapper = shallow(<UttakInfo
      selectedItemData={selectedItem}
      readOnly={false}
      harSoktOmFlerbarnsdager
      oppholdArsakTyper={[]}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const checkboxField = wrapper.find('CheckboxField');
    expect(checkboxField).to.have.length(2);
    const formattedMessage = wrapper.find('FormattedMessage');
    expect(formattedMessage).to.have.length(3);
  });

  it('skal rendre uttakinfo med to checkboxes disabled vid read only', () => {
    const wrapper = shallow(<UttakInfo
      selectedItemData={selectedItem}
      readOnly
      oppholdArsakTyper={[]}
      harSoktOmFlerbarnsdager
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const checkboxField = wrapper.find('CheckboxField');
    expect(checkboxField).to.have.length(2);
    expect(wrapper.contains(
      <input type="checkbox" disabled />,
    ));
    const formattedMessage = wrapper.find('FormattedMessage');
    expect(formattedMessage).to.have.length(4);
  });

  it('skal rendre uttakinfo uten flerbarns checkbox når ett barn', () => {
    const wrapper = shallow(<UttakInfo
      selectedItemData={selectedItem}
      readOnly={false}
      harSoktOmFlerbarnsdager={false}
      oppholdArsakTyper={[]}
      alleKodeverk={{}}
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const checkboxField = wrapper.find('CheckboxField');
    expect(checkboxField).to.have.length(1);
    expect(checkboxField.at(0).prop('name')).to.eql('samtidigUttak');
  });
});
