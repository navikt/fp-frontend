import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, FamilieHendelseSamling, Personoversikt, Ytelsefordeling,
} from '@fpsak-frontend/types';

import UttakFaktaIndex from './UttakFaktaIndex';
import UttakInfoPanel from './components/UttakInfoPanel';

describe('<UttakFaktaIndex>', () => {
  const behandling = {
    uuid: '1',
    versjon: 1,
    sprakkode: {
      kode: 'NO',
      kodeverk: '',
    },
    type: {
      kode: '1',
      kodeverk: '1',
    },
    status: {
      kode: '1',
      kodeverk: '1',
    },
    behandlingÅrsaker: [],
  };

  const aksjonspunkter = [{
    definisjon: {
      kode: aksjonspunktCodes.VURDER_FEILUTBETALING,
      kodeverk: '',
    },
    status: {
      kode: '1',
      kodeverk: '1',
    },
    kanLoses: true,
    erAktivt: true,
  }];

  const standardFaktaProps = {
    aksjonspunkter: [],
    submitCallback: sinon.spy(),
    readOnly: false,
    harApneAksjonspunkter: true,
    submittable: true,
    alleMerknaderFraBeslutter: {},
  };

  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<UttakFaktaIndex
      {...standardFaktaProps}
      behandling={behandling as Behandling}
      aksjonspunkter={aksjonspunkter as Aksjonspunkt[]}
      uttakKontrollerFaktaPerioder={{
        perioder: [],
      }}
      kanOverstyre={false}
      faktaArbeidsforhold={[]}
      personoversikt={{} as Personoversikt}
      familiehendelse={{} as FamilieHendelseSamling}
      alleKodeverk={{} as AlleKodeverk}
      ytelsefordeling={{} as Ytelsefordeling}
      arbeidsgiverOpplysningerPerId={{}}
      setFormData={() => undefined}
    />);
    expect(wrapper.find(UttakInfoPanel)).toHaveLength(1);
  });
});
