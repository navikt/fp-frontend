import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import BostedSokerFaktaIndex from '@fpsak-frontend/fakta-bosted-soker';
import { Personopplysninger } from '@fpsak-frontend/types';

import BostedFaktaView from './BostedFaktaView';

describe('<BostedFaktaView>', () => {
  const barn = {
    navn: 'Barn Utvikler',
    aktoerId: '1',
    personstatus: {
      kode: 'BOSA',
      kodeverk: '',
    },
    navBrukerKjonn: {
      kode: '',
      kodeverk: '',
    },
    statsborgerskap: {
      kode: '',
      kodeverk: '',
    },
    diskresjonskode: {
      kode: '',
      kodeverk: '',
    },
    sivilstand: {
      kode: 'UGIF',
      kodeverk: '',
    },
    region: {
      kode: '',
      kodeverk: '',
    },
    adresser: [],
  };

  const soker = {
    navn: 'Kari Utvikler',
    aktoerId: '1',
    barn: [
      barn,
      barn,
    ],
    personstatus: {
      kode: 'BOSA',
      kodeverk: 'Bosatt',
    },
    navBrukerKjonn: {
      kode: '',
      kodeverk: '',
    },
    statsborgerskap: {
      kode: '',
      kodeverk: '',
    },
    diskresjonskode: {
      kode: '',
      kodeverk: '',
    },
    sivilstand: {
      kode: 'UGIF',
      kodeverk: 'Ugift',
    },
    region: {
      kode: '',
      kodeverk: '',
    },
    adresser: [],
  };

  it('vise bostedBarn for hvert barn', () => {
    const wrapper = shallow(<BostedFaktaView
      personopplysning={soker as Personopplysninger}
      alleKodeverk={{}}
    />);
    const bostedBarnView = wrapper.find('BostedBarnView');
    expect(bostedBarnView).to.have.length(2);
    expect(bostedBarnView.first().prop('barn')).to.eql(barn);
    expect(bostedBarnView.first().prop('barnNr')).to.eql(1);
    expect(bostedBarnView.last().prop('barnNr')).to.eql(2);
  });

  it('vise bostedSoker for søker', () => {
    const wrapper = shallow(<BostedFaktaView
      personopplysning={soker as Personopplysninger}
      alleKodeverk={{}}
    />);
    const bostedSokerView = wrapper.find(BostedSokerFaktaIndex);
    expect(bostedSokerView).to.have.length(1);
    expect(bostedSokerView.first().prop('personopplysninger')).to.eql(soker);
  });

  it('vise bostedSoker for søker og annenpart/ektefelle?', () => {
    const ektefelle = {
      navn: 'Ola Utvikler',
      aktoerId: '1',
      personstatus: {
        kode: 'BOSA',
        kodeverk: '',
      },
      navBrukerKjonn: {
        kode: '',
        kodeverk: '',
      },
      statsborgerskap: {
        kode: '',
        kodeverk: '',
      },
      diskresjonskode: {
        kode: '',
        kodeverk: '',
      },
      sivilstand: {
        kode: 'UGIF',
        kodeverk: '',
      },
      region: {
        kode: '',
        kodeverk: '',
      },
      adresser: [],
    };
    const wrapper = shallow(<BostedFaktaView
      personopplysning={soker as Personopplysninger}
      ektefellePersonopplysning={ektefelle as Personopplysninger}
      alleKodeverk={{}}
    />);
    const bostedSokerView = wrapper.find(BostedSokerFaktaIndex);
    expect(bostedSokerView).to.have.length(2);
    expect(bostedSokerView.first().prop('personopplysninger')).to.eql(soker);
    expect(bostedSokerView.last().prop('personopplysninger')).to.eql(ektefelle);
  });
});
