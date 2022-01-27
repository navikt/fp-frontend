import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import { AlleKodeverk, PeriodeSokerAktivitet } from '@fpsak-frontend/types';

import { UttakInfo } from './UttakInfo';
import { PeriodeMedClassName } from './Uttak';

describe('<UttakInfo>', () => {
  const selectedItem = {
    id: 1,
    fom: '2018-01-01',
    tom: '2018-02-01',
    periodeResultatType: '',
    periodeResultatÅrsak: {
      kode: '',
      kodeverk: '',
    },
    flerbarnsdager: false,
    utsettelseType: '-',
    periodeType: '-',
    oppholdÅrsak: '-',
    aktiviteter: [{
      utbetalingsgrad: 100,
      stønadskontoType: '',
    }] as PeriodeSokerAktivitet[],
  } as PeriodeMedClassName;

  it('skal rendre uttakinfo med to checkboxes, når flerbarnsdager', () => {
    const wrapper = shallow(<UttakInfo
      selectedItemData={selectedItem}
      readOnly={false}
      harSoktOmFlerbarnsdager
      oppholdArsakTyper={[]}
      alleKodeverk={{} as AlleKodeverk}
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const checkboxField = wrapper.find('CheckboxField');
    expect(checkboxField).toHaveLength(2);
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(3);
  });

  it('skal rendre uttakinfo med to checkboxes disabled vid read only', () => {
    const wrapper = shallow(<UttakInfo
      selectedItemData={selectedItem}
      readOnly
      oppholdArsakTyper={[]}
      harSoktOmFlerbarnsdager
      alleKodeverk={{} as AlleKodeverk}
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const checkboxField = wrapper.find('CheckboxField');
    expect(checkboxField).toHaveLength(2);
    expect(wrapper.contains(
      <input type="checkbox" disabled />,
    ));
    const formattedMessage = wrapper.find(FormattedMessage);
    expect(formattedMessage).toHaveLength(4);
  });

  it('skal rendre uttakinfo uten flerbarns checkbox når ett barn', () => {
    const wrapper = shallow(<UttakInfo
      selectedItemData={selectedItem}
      readOnly={false}
      harSoktOmFlerbarnsdager={false}
      oppholdArsakTyper={[]}
      alleKodeverk={{} as AlleKodeverk}
      arbeidsgiverOpplysningerPerId={{}}
    />);
    const checkboxField = wrapper.find('CheckboxField');
    expect(checkboxField).toHaveLength(1);
    expect(checkboxField.at(0).prop('name')).toEqual('samtidigUttak');
  });
});
