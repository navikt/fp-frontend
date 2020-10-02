import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Personopplysninger } from '@fpsak-frontend/types';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';

import BostedBarnView from './BostedBarnView';

describe('<BostedBarnView>', () => {
  const barn = {
    navn: 'Espen Barn',
    aktoerId: '1',
    fodselsdato: '2016-02-03',
    personstatus: {
      kode: 'BOSA',
      kodeverk: '',
    },
    avklartPersonstatus: {
      overstyrtPersonstatus: {
        kode: personstatusType.BOSATT,
        kodeverk: '',
      },
      orginalPersonstatus: {
        kode: personstatusType.DOD,
        kodeverk: '',
      },
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
    adresser: [{
      adresselinje1: 'Ringeriksveien 182',
      postNummer: '1339',
      poststed: 'Vøyenenga',
      adresseType: {
        kode: opplysningAdresseType.POSTADRESSE,
        kodeverk: '',
      },
    }],
  };

  it('skal vise barn nr', () => {
    const wrapper = shallow(<BostedBarnView
      barn={barn}
      barnNr={3}
    />);
    const undertekst = wrapper.find('Undertekst');
    const barnNr = undertekst.first();
    expect(barnNr.find('FormattedMessage').prop('id')).to.equal('BostedBarnView.Barn');
    // @ts-ignore Fiks
    expect(barnNr.find('FormattedMessage').prop('values').barnNr).to.equal(3);
  });

  it('skal vise navn', () => {
    const wrapper = shallow(<BostedBarnView
      barn={barn as Personopplysninger}
      barnNr={3}
    />);
    expect(wrapper.find('Element').childAt(0).text()).to.eql('Espen Barn');
  });

  it('skal vise fodselsdato', () => {
    const wrapper = shallow(<BostedBarnView
      barn={barn as Personopplysninger}
      barnNr={3}
    />);
    const normalTekst = wrapper.find('Normaltekst');
    expect(normalTekst).to.have.length(2);
    const fodselsWrapper = normalTekst.first();
    expect(fodselsWrapper.find('FormattedMessage').prop('id')).to.eql('BostedBarnView.Age');
    // @ts-ignore Fiks
    expect(fodselsWrapper.find('FormattedMessage').prop('values').fodselsdato).to.eql('03.02.2016');
  });

  it('skal vise adresse', () => {
    const wrapper = shallow(<BostedBarnView
      barn={barn as Personopplysninger}
      barnNr={3}
    />);
    const normalTekst = wrapper.find('Normaltekst');
    const adresseWrapper = normalTekst.last();
    expect(adresseWrapper.childAt(0).text()).to.eql('Ringeriksveien 182, 1339 Vøyenenga');
  });
});
