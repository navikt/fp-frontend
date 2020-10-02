import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import {
  FagsakPerson, InntektArbeidYtelse, Medlemskap, Soknad,
} from '@fpsak-frontend/types';

import MedlemskapInfoPanel from './MedlemskapInfoPanel';
import StartdatoForForeldrepengerperiodenForm from './startdatoForPeriode/StartdatoForForeldrepengerperiodenForm';
import OppholdInntektOgPerioderForm from './oppholdInntektOgPerioder/OppholdInntektOgPerioderForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-fakta-medlemskap';

describe('<MedlemskapInfoPanel>', () => {
  it('skal vise form for startdato for foreldrepengerperioden når en har aksjonspunktet for dette', () => {
    const avklarStartdatoAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    };

    const wrapper = shallowWithIntl(<MedlemskapInfoPanel
      aksjonspunkter={[avklarStartdatoAksjonspunkt]}
      hasOpenAksjonspunkter={false}
      submittable
      readOnly
      submitCallback={sinon.spy()}
      alleMerknaderFraBeslutter={{}}
      behandlingId={1}
      behandlingVersjon={1}
      behandlingType={{
        kode: 'TEst',
        kodeverk: '',
      }}
      behandlingStatus={{
        kode: behandlingStatus.BEHANDLING_UTREDES,
        kodeverk: '',
      }}
      soknad={{} as Soknad}
      inntektArbeidYtelse={{} as InntektArbeidYtelse}
      alleKodeverk={{}}
      medlemskap={{} as Medlemskap}
      fagsakPerson={{} as FagsakPerson}
      behandlingPaaVent={false}
      readOnlyForStartdatoForForeldrepenger={false}
    />);

    expect(wrapper.find(StartdatoForForeldrepengerperiodenForm)).has.length(1);
    expect(wrapper.find(OppholdInntektOgPerioderForm)).has.length(0);
  });

  it('skal vise form for startdato for foreldrepengerperioden når en har overstyr-aksjonspunktet for dette', () => {
    const avklarStartdatoAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    };

    const wrapper = shallowWithIntl(<MedlemskapInfoPanel
      aksjonspunkter={[avklarStartdatoAksjonspunkt]}
      hasOpenAksjonspunkter={false}
      submittable
      readOnly
      submitCallback={sinon.spy()}
      alleMerknaderFraBeslutter={{}}
      behandlingId={1}
      behandlingVersjon={1}
      behandlingType={{
        kode: 'TEst',
        kodeverk: '',
      }}
      behandlingStatus={{
        kode: behandlingStatus.BEHANDLING_UTREDES,
        kodeverk: '',
      }}
      soknad={{} as Soknad}
      inntektArbeidYtelse={{} as InntektArbeidYtelse}
      alleKodeverk={{}}
      medlemskap={{} as Medlemskap}
      fagsakPerson={{} as FagsakPerson}
      behandlingPaaVent={false}
      readOnlyForStartdatoForForeldrepenger={false}
    />);

    expect(wrapper.find(StartdatoForForeldrepengerperiodenForm)).has.length(1);
    expect(wrapper.find(OppholdInntektOgPerioderForm)).has.length(0);
  });

  it('skal vise begge medlemskapsformer når aksjonspunkt for startdato for foreldrepengerperioden er avklart', () => {
    const avklarStartdatoAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_STARTDATO_FOR_FORELDREPENGERPERIODEN,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: false,
      erAktivt: true,
    };

    const wrapper = shallowWithIntl(<MedlemskapInfoPanel
      aksjonspunkter={[avklarStartdatoAksjonspunkt]}
      hasOpenAksjonspunkter={false}
      submittable
      readOnly
      submitCallback={sinon.spy()}
      alleMerknaderFraBeslutter={{}}
      behandlingId={1}
      behandlingVersjon={1}
      behandlingType={{
        kode: 'TEst',
        kodeverk: '',
      }}
      behandlingStatus={{
        kode: behandlingStatus.BEHANDLING_UTREDES,
        kodeverk: '',
      }}
      soknad={{} as Soknad}
      inntektArbeidYtelse={{} as InntektArbeidYtelse}
      alleKodeverk={{}}
      medlemskap={{} as Medlemskap}
      fagsakPerson={{} as FagsakPerson}
      behandlingPaaVent={false}
      readOnlyForStartdatoForForeldrepenger={false}
    />);

    expect(wrapper.find(StartdatoForForeldrepengerperiodenForm)).has.length(1);
    expect(wrapper.find(OppholdInntektOgPerioderForm)).has.length(1);
  });

  it('skal vise panel for avklaring av startdato for foreldrepengerperioden, for å tilate manuell korrigering selvom aksjonspunktet ikke finnes', () => {
    const wrapper = shallowWithIntl(<MedlemskapInfoPanel
      aksjonspunkter={[]}
      hasOpenAksjonspunkter={false}
      submittable
      readOnly
      submitCallback={sinon.spy()}
      alleMerknaderFraBeslutter={{}}
      behandlingId={1}
      behandlingVersjon={1}
      behandlingType={{
        kode: 'TEst',
        kodeverk: '',
      }}
      behandlingStatus={{
        kode: behandlingStatus.BEHANDLING_UTREDES,
        kodeverk: '',
      }}
      soknad={{} as Soknad}
      inntektArbeidYtelse={{} as InntektArbeidYtelse}
      alleKodeverk={{}}
      medlemskap={{} as Medlemskap}
      fagsakPerson={{} as FagsakPerson}
      behandlingPaaVent={false}
      readOnlyForStartdatoForForeldrepenger={false}
    />);

    expect(wrapper.find(StartdatoForForeldrepengerperiodenForm)).has.length(1);
    expect(wrapper.find(OppholdInntektOgPerioderForm)).has.length(1);
  });
});
