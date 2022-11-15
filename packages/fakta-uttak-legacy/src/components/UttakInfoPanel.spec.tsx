import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import {
  AlleKodeverk, FamilieHendelseSamling, Personoversikt, Ytelsefordeling,
} from '@fpsak-frontend/types';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';

import UttakFaktaForm from './UttakFaktaForm';
import UttakInfoPanel from './UttakInfoPanel';

describe('<UttakInfoPanel>', () => {
  it('skal vise UttakInfoPanel', () => {
    const wrapper = shallow(<UttakInfoPanel
      submitCallback={sinon.spy()}
      readOnly
      aksjonspunkter={[]}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      behandlingArsaker={[]}
      behandlingStatus={behandlingStatus.OPPRETTET}
      ytelsefordeling={{} as Ytelsefordeling}
      uttakPerioder={[]}
      alleKodeverk={{} as AlleKodeverk}
      kanOverstyre={false}
      faktaArbeidsforhold={[]}
      personoversikt={{} as Personoversikt}
      familiehendelse={{} as FamilieHendelseSamling}
      arbeidsgiverOpplysningerPerId={{}}
      submittable
    />);

    const uttakFaktaForm = wrapper.find(UttakFaktaForm);
    expect(uttakFaktaForm).toHaveLength(1);
  });
});
