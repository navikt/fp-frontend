import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import EtikettBase from 'nav-frontend-etiketter';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { Tooltip } from '@fpsak-frontend/shared-components';
import sivilstandType from '@fpsak-frontend/kodeverk/src/sivilstandType';
import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import { PersonopplysningerBasis } from '@fpsak-frontend/types';

import { BostedSokerView } from './BostedSokerView';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-omsorg';

describe('<BostedsokerView>', () => {
  const soker = {
    navn: 'Espen Utvikler',
    aktoerId: '1',
    kjønn: {
      kode: '',
      kodeverk: '',
    },
    diskresjonskode: {
      kode: '',
      kodeverk: '',
    },
    sivilstand: {
      kode: sivilstandType.UGIFT,
      kodeverk: '',
    },
    adresser: [{
      adresselinje1: 'Vei 1',
      postNummer: '1000',
      poststed: 'Oslo',
      adresseType: {
        kode: opplysningAdresseType.POSTADRESSE,
        kodeverk: '',
      },
    }],
  } as PersonopplysningerBasis;

  const sivilstandTypes = [{
    kode: sivilstandType.UGIFT,
    navn: 'Ugift',
    kodeverk: '',
  }];

  it('vise navn', () => {
    const wrapper = shallowWithIntl(<BostedSokerView
      intl={intlMock}
      personopplysninger={soker}
      sivilstandTypes={sivilstandTypes}
      sokerTypeText="Søker"
    />);

    expect(wrapper.find('Element').childAt(0).text()).toEqual('Espen Utvikler');
  });

  it('skal vise  adresse informasjon', () => {
    const wrapper = shallowWithIntl(<BostedSokerView
      intl={intlMock}
      personopplysninger={soker}
      sivilstandTypes={sivilstandTypes}
      sokerTypeText="Søker"
    />);
    const adr = wrapper.find(Normaltekst);
    expect(adr).toHaveLength(2);
    expect(adr.first().childAt(0).text()).toEqual('Vei 1, 1000 Oslo');
    expect(adr.last().childAt(0).text()).toEqual('-');
  });

  it('skal vise etiketter', () => {
    const wrapper = shallowWithIntl(<BostedSokerView
      intl={intlMock}
      personopplysninger={soker}
      sivilstandTypes={sivilstandTypes}
      sokerTypeText="Søker"
    />);

    const tooltips = wrapper.find(Tooltip);
    expect(tooltips).toHaveLength(3);
    const etikettfokus = wrapper.find(EtikettBase);
    expect(etikettfokus).toHaveLength(3);
    expect(tooltips.at(0).prop('content')).toBe('Personstatus');
    expect(etikettfokus.at(0).childAt(0).text()).toBe('Bosatt');
    expect(tooltips.at(1).prop('content')).toBe('Sivilstand');
    expect(etikettfokus.at(1).childAt(0).text()).toBe('Ugift');
    expect(tooltips.at(2).prop('content')).toBe('Region');
    expect(etikettfokus.at(2).childAt(0).text()).toBe('Norden');
  });
});
