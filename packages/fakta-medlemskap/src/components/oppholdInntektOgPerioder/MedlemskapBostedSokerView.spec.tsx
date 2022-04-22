import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import EtikettBase from 'nav-frontend-etiketter';
import { Tooltip } from '@navikt/ft-ui-komponenter';

import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import opplysningAdresseType from '@fpsak-frontend/kodeverk/src/opplysningAdresseType';
import { PersonopplysningMedlem } from '@fpsak-frontend/types';

import { MedlemskapBostedSokerView } from './MedlemskapBostedSokerView';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<MedlemskapBostedSokerView>', () => {
  const soker = {
    navn: 'Espen Utvikler',
    personstatus: 'BOSA',
    region: 'NORDEN',
    adresser: [{
      adresselinje1: 'Vei 1',
      postNummer: '1000',
      poststed: 'Oslo',
      adresseType: opplysningAdresseType.POSTADRESSE,
    }],
  } as PersonopplysningMedlem;

  const regionTypes = [{
    kode: 'NORDEN',
    navn: 'Norden',
    kodeverk: '',
  }];
  const personstatusTypes = [{
    kode: personstatusType.BOSATT,
    navn: 'Bosatt',
    kodeverk: '',
  }, {
    kode: personstatusType.DOD,
    navn: 'Bosatt',
    kodeverk: '',
  }];

  it('vise navn', () => {
    const wrapper = shallowWithIntl(<MedlemskapBostedSokerView
      intl={intlMock}
      personopplysninger={soker}
      regionTypes={regionTypes}
      personstatusTypes={personstatusTypes}
      sokerTypeText="Søker"
    />, messages);

    expect(wrapper.find('Element').childAt(0).text()).toEqual('Espen Utvikler');
  });

  it('skal vise  adresse informasjon', () => {
    const wrapper = shallowWithIntl(<MedlemskapBostedSokerView
      intl={intlMock}
      personopplysninger={soker}
      regionTypes={regionTypes}
      personstatusTypes={personstatusTypes}
      sokerTypeText="Søker"
    />, messages);
    const adr = wrapper.find(Normaltekst);
    expect(adr).toHaveLength(2);
    expect(adr.first().childAt(0).text()).toEqual('Vei 1, 1000 Oslo');
    expect(adr.last().childAt(0).text()).toEqual('-');
  });

  it('skal vise etiketter', () => {
    const wrapper = shallowWithIntl(<MedlemskapBostedSokerView
      intl={intlMock}
      personopplysninger={soker}
      regionTypes={regionTypes}
      personstatusTypes={personstatusTypes}
      sokerTypeText="Søker"
    />, messages);

    const tooltips = wrapper.find(Tooltip);
    expect(tooltips).toHaveLength(2);
    const etikettfokus = wrapper.find(EtikettBase);
    expect(etikettfokus).toHaveLength(2);
    expect(tooltips.at(0).prop('content')).toBe('Personstatus');
    expect(etikettfokus.at(0).childAt(0).text()).toBe('Bosatt');
    expect(tooltips.at(1).prop('content')).toBe('Region');
    expect(etikettfokus.at(1).childAt(0).text()).toBe('Norden');
  });

  it('skal vise ukjent når personstatus ukjent', () => {
    const wrapper = shallowWithIntl(<MedlemskapBostedSokerView
      intl={intlMock}
      personopplysninger={{
        ...soker,
        personstatus: '-',
      }}
      regionTypes={regionTypes}
      personstatusTypes={personstatusTypes}
      sokerTypeText="Søker"
    />, messages);

    const tooltips = wrapper.find(Tooltip);
    expect(tooltips).toHaveLength(2);
    const etikettfokus = wrapper.find(EtikettBase);
    expect(etikettfokus).toHaveLength(2);
    expect(tooltips.at(0).prop('content')).toBe('Personstatus');
    expect(etikettfokus.at(0).childAt(0).text()).toBe('Ukjent');
    expect(tooltips.at(1).prop('content')).toBe('Region');
    expect(etikettfokus.at(1).childAt(0).text()).toBe('Norden');
  });
});
