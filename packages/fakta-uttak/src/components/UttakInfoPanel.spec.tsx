import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import {
  FamilieHendelseSamling, Kodeverk, Personoversikt, Ytelsefordeling,
} from '@fpsak-frontend/types';

import UttakFaktaForm from './UttakFaktaForm';
import UttakInfoPanel from './UttakInfoPanel';
import AnnenForelderHarRettForm from './AnnenForelderHarRettForm';

const avklarAnnenforelderHarRettAp = [{
  aksjonspunktType: {
    kode: 'MANU',
    kodeverk: 'AKSJONSPUNKT_TYPE',
  },
  kode: 'MANU',
  kodeverk: 'AKSJONSPUNKT_TYPE',
  navn: 'Manuell',
  begrunnelse: 'test2',
  besluttersBegrunnelse: null,
  definisjon: {
    kode: '5086',
    kodeverk: '',
  },
  erAktivt: true,
  kanLoses: true,
  status: {
    kode: 'UTFO',
    kodeverk: 'AKSJONSPUNKT_STATUS',
  },
  toTrinnsBehandling: true,
  toTrinnsBehandlingGodkjent: null,
  vilkarType: null,
  vurderPaNyttArsaker: null,
}];

describe('<UttakInfoPanel>', () => {
  it('skal vise UttakInfoPanel', () => {
    const wrapper = shallow(<UttakInfoPanel
      submitCallback={sinon.spy()}
      readOnly
      aksjonspunkter={[]}
      behandlingType={{} as Kodeverk}
      behandlingArsaker={[]}
      behandlingStatus={{} as Kodeverk}
      ytelsefordeling={{} as Ytelsefordeling}
      uttakPerioder={[]}
      alleKodeverk={{}}
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

  it('skal vise Avklar annen forelder har rett', () => {
    const wrapper = shallow(<UttakInfoPanel
      submitCallback={sinon.spy()}
      readOnly
      aksjonspunkter={avklarAnnenforelderHarRettAp}
      behandlingType={{} as Kodeverk}
      behandlingArsaker={[]}
      behandlingStatus={{} as Kodeverk}
      ytelsefordeling={{} as Ytelsefordeling}
      uttakPerioder={[]}
      alleKodeverk={{}}
      kanOverstyre={false}
      faktaArbeidsforhold={[]}
      personoversikt={{} as Personoversikt}
      familiehendelse={{} as FamilieHendelseSamling}
      arbeidsgiverOpplysningerPerId={{}}
      submittable
    />);

    const annenForelderHarRettForm = wrapper.find(AnnenForelderHarRettForm);
    expect(annenForelderHarRettForm).toHaveLength(1);
  });
});
