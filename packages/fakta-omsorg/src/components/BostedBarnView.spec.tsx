import React from 'react';
import { shallow } from 'enzyme';

import { PersonopplysningerBasis } from '@fpsak-frontend/types';
import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';

import BostedBarnView from './BostedBarnView';

describe('<BostedBarnView>', () => {
  const barn = {
    navn: 'Espen Barn',
    aktoerId: '1',
    fødselsdato: '2016-02-03',
    kjønn: {
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
    adresser: [{
      adresselinje1: 'Ringeriksveien 182',
      postNummer: '1339',
      poststed: 'Vøyenenga',
      adresseType: {
        kode: opplysningAdresseType.POSTADRESSE,
        kodeverk: '',
      },
    }],
  } as PersonopplysningerBasis;

  it('skal vise barn nr', () => {
    const wrapper = shallow(<BostedBarnView
      barn={barn}
      barnNr={3}
    />);
    const undertekst = wrapper.find('Undertekst');
    const barnNr = undertekst.first();
    expect(barnNr.find('FormattedMessage').prop('id')).toBe('BostedBarnView.Barn');
    // @ts-ignore Fiks
    expect(barnNr.find('FormattedMessage').prop('values').barnNr).toBe(3);
  });

  it('skal vise navn', () => {
    const wrapper = shallow(<BostedBarnView
      barn={barn}
      barnNr={3}
    />);
    expect(wrapper.find('Element').childAt(0).text()).toEqual('Espen Barn');
  });

  it('skal vise fodselsdato', () => {
    const wrapper = shallow(<BostedBarnView
      barn={barn}
      barnNr={3}
    />);
    const normalTekst = wrapper.find('Normaltekst');
    expect(normalTekst).toHaveLength(2);
    const fodselsWrapper = normalTekst.first();
    expect(fodselsWrapper.find('FormattedMessage').prop('id')).toEqual('BostedBarnView.Age');
    // @ts-ignore Fiks
    expect(fodselsWrapper.find('FormattedMessage').prop('values').fodselsdato).toEqual('03.02.2016');
  });

  it('skal vise adresse', () => {
    const wrapper = shallow(<BostedBarnView
      barn={barn}
      barnNr={3}
    />);
    const normalTekst = wrapper.find('Normaltekst');
    const adresseWrapper = normalTekst.last();
    expect(adresseWrapper.childAt(0).text()).toEqual('Ringeriksveien 182, 1339 Vøyenenga');
  });
});
