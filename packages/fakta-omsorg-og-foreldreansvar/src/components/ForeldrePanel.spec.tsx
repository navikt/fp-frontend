import React from 'react';
import { shallow } from 'enzyme';
import { Undertittel } from 'nav-frontend-typografi';

import { KjønnkodeEnum } from '@fpsak-frontend/types';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import ForeldrePanel from './ForeldrePanel';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<ForeldrePanel>', () => {
  it('skal vise søker', () => {
    const personoversikt = {
      bruker: {
        fnr: '',
        navn: 'Olga Utvikler',
        aktoerId: '1',
        diskresjonskode: {
          kode: '',
          kodeverk: '',
        },
        kjønn: {
          kode: KjønnkodeEnum.KVINNE,
          kodeverk: '',
        },
        sivilstand: {
          kode: '',
          kodeverk: '',
        },
        fødselsdato: '1989-01-01',
        adresser: [],
      },
      barn: [],
    };

    const wrapper = shallow(<ForeldrePanel
      intl={intlMock}
      alleMerknaderFraBeslutter={{}}
      personoversikt={personoversikt}
    />);

    const undertittel = wrapper.find(Undertittel);
    expect(undertittel).toHaveLength(1);
  });

  it('skal vise søker og annen part', () => {
    const personoversikt = {
      bruker: {
        fnr: '',
        navn: 'Olga Utvikler',
        aktoerId: '1',
        diskresjonskode: {
          kode: '',
          kodeverk: '',
        },
        kjønn: {
          kode: KjønnkodeEnum.KVINNE,
          kodeverk: '',
        },
        sivilstand: {
          kode: '',
          kodeverk: '',
        },
        fødselsdato: '1989-01-01',
        adresser: [],
      },
      annenPart: {
        fnr: '',
        navn: 'Espen Utvikler',
        aktoerId: '1',
        diskresjonskode: {
          kode: '',
          kodeverk: '',
        },
        kjønn: {
          kode: KjønnkodeEnum.MANN,
          kodeverk: '',
        },
        sivilstand: {
          kode: '',
          kodeverk: '',
        },
        fødselsdato: '1979-01-01',
        adresser: [],
      },
      barn: [],
    };

    const wrapper = shallow(<ForeldrePanel
      intl={intlMock}
      alleMerknaderFraBeslutter={{}}
      personoversikt={personoversikt}
    />);

    const undertittel = wrapper.find(Undertittel);
    expect(undertittel).toHaveLength(2);
  });
});
