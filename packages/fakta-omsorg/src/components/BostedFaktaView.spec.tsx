import React from 'react';
import { shallow } from 'enzyme';

import { AlleKodeverk, PersonopplysningerBasis, Personoversikt } from '@fpsak-frontend/types';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../i18n/nb_NO.json';
import BostedFaktaView from './BostedFaktaView';
import BostedSokerView from './BostedSokerView';

const intlMock = getIntlMock(messages);

describe('<BostedFaktaView>', () => {
  const barn = {
    navn: 'Barn Utvikler',
    aktoerId: '1',
    kjønn: {
      kode: '',
      kodeverk: '',
    },
    sivilstand: {
      kode: 'UGIF',
      kodeverk: '',
    },
    adresser: [],
  } as PersonopplysningerBasis;

  const soker = {
    bruker: {
      navn: 'Kari Utvikler',
      aktoerId: '1',
      kjønn: {
        kode: '',
        kodeverk: '',
      },
      sivilstand: {
        kode: 'UGIF',
        kodeverk: 'Ugift',
      },
      adresser: [],
    },
    barn: [
      barn,
      barn,
    ],
  } as Personoversikt;

  it('vise bostedBarn for hvert barn', () => {
    const wrapper = shallow(<BostedFaktaView.WrappedComponent
      intl={intlMock}
      personoversikt={soker}
      alleKodeverk={{} as AlleKodeverk}
    />);
    const bostedBarnView = wrapper.find('BostedBarnView');
    expect(bostedBarnView).toHaveLength(2);
    expect(bostedBarnView.first().prop('barn')).toEqual(barn);
    expect(bostedBarnView.first().prop('barnNr')).toEqual(1);
    expect(bostedBarnView.last().prop('barnNr')).toEqual(2);
  });

  it('vise bostedSoker for søker', () => {
    const wrapper = shallow(<BostedFaktaView.WrappedComponent
      intl={intlMock}
      personoversikt={soker}
      alleKodeverk={{} as AlleKodeverk}
    />);
    const bostedSokerView = wrapper.find(BostedSokerView);
    expect(bostedSokerView).toHaveLength(1);
    expect(bostedSokerView.first().prop('personopplysninger')).toEqual(soker.bruker);
  });

  it('vise bostedSoker for søker og annenpart/ektefelle?', () => {
    const ektefelle = {
      navn: 'Ola Utvikler',
      aktoerId: '1',
      kjønn: {
        kode: '',
        kodeverk: '',
      },
      sivilstand: {
        kode: 'UGIF',
        kodeverk: '',
      },
      adresser: [],
    } as PersonopplysningerBasis;
    const wrapper = shallow(<BostedFaktaView.WrappedComponent
      intl={intlMock}
      personoversikt={{
        ...soker,
        annenPart: ektefelle,
      }}
      alleKodeverk={{} as AlleKodeverk}
    />);
    const bostedSokerView = wrapper.find(BostedSokerView);
    expect(bostedSokerView).toHaveLength(2);
    expect(bostedSokerView.first().prop('personopplysninger')).toEqual(soker.bruker);
    expect(bostedSokerView.last().prop('personopplysninger')).toEqual(ektefelle);
  });
});
