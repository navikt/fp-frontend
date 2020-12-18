import React from 'react';
import { shallow } from 'enzyme';

import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import { Personopplysninger } from '@fpsak-frontend/types';

import BostedSokerFaktaIndex from './BostedSokerFaktaIndex';
import BostedSokerView from './components/BostedSokerView';

describe('<BostedSokerFaktaIndex>', () => {
  it('vise rendre komponent korrekt', () => {
    const wrapper = shallow(<BostedSokerFaktaIndex
      personopplysninger={{
        navn: 'Espen Utvikler',
        adresser: [{
          adresseType: {
            kode: opplysningAdresseType.BOSTEDSADRESSE,
            kodeverk: '',
          },
        }],
        personstatus: {
          kode: personstatusType.BOSATT,
          kodeverk: '',
        },
      } as Personopplysninger}
      alleKodeverk={{}}
    />);

    expect(wrapper.find(BostedSokerView)).toHaveLength(1);
  });
});
