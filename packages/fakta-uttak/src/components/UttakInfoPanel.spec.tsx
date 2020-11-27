import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

import {
  FamilieHendelseSamling, Kodeverk, Personopplysninger, Ytelsefordeling,
} from '@fpsak-frontend/types';

import UttakFaktaForm from './UttakFaktaForm';
import UttakInfoPanel from './UttakInfoPanel';
import AnnenForelderHarRettForm from './AnnenForelderHarRettForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-uttak';

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
    const wrapper = shallowWithIntl(<UttakInfoPanel
      submitCallback={sinon.spy()}
      readOnly
      aksjonspunkter={[]}
      behandlingType={{} as Kodeverk}
      behandlingArsaker={[]}
      behandlingStatus={{} as Kodeverk}
      behandlingId={1}
      behandlingVersjon={1}
      ytelsefordeling={{} as Ytelsefordeling}
      uttakPerioder={[]}
      alleKodeverk={{}}
      kanOverstyre={false}
      faktaArbeidsforhold={[]}
      personopplysninger={{} as Personopplysninger}
      familiehendelse={{} as FamilieHendelseSamling}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const uttakFaktaForm = wrapper.find(UttakFaktaForm);
    expect(uttakFaktaForm).to.have.length(1);
  });

  it('skal vise Avklar annen forelder har rett ', () => {
    const wrapper = shallowWithIntl(<UttakInfoPanel
      submitCallback={sinon.spy()}
      readOnly
      aksjonspunkter={avklarAnnenforelderHarRettAp}
      behandlingType={{} as Kodeverk}
      behandlingArsaker={[]}
      behandlingStatus={{} as Kodeverk}
      behandlingId={1}
      behandlingVersjon={1}
      ytelsefordeling={{} as Ytelsefordeling}
      uttakPerioder={[]}
      alleKodeverk={{}}
      kanOverstyre={false}
      faktaArbeidsforhold={[]}
      personopplysninger={{} as Personopplysninger}
      familiehendelse={{} as FamilieHendelseSamling}
      arbeidsgiverOpplysningerPerId={{}}
    />);

    const annenForelderHarRettForm = wrapper.find(AnnenForelderHarRettForm);
    expect(annenForelderHarRettForm).to.have.length(1);
  });
});
