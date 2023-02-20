import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import {
  Aksjonspunkt, AlleKodeverk, Behandling, FamilieHendelseSamling, Personoversikt, Ytelsefordeling,
} from '@navikt/fp-types';

import UttakFaktaIndex from './UttakFaktaIndex';
import UttakInfoPanel from './components/UttakInfoPanel';

describe('<UttakFaktaIndex>', () => {
  const behandling = {
    uuid: '1',
    versjon: 1,
    sprakkode: 'NO',
    type: '1',
    status: '1',
    behandlingÅrsaker: [],
  };

  const aksjonspunkter = [{
    definisjon: AksjonspunktCode.VURDER_FEILUTBETALING,
    status: '1',
    kanLoses: true,
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
