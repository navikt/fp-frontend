import React from 'react';
import sinon from 'sinon';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { AlleKodeverk, Medlemskap, Soknad } from '@fpsak-frontend/types';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import MedlemskapInfoPanel from './MedlemskapInfoPanel';
import StartdatoForForeldrepengerperiodenForm from './startdatoForPeriode/StartdatoForForeldrepengerperiodenForm';
import OppholdInntektOgPerioderForm from './oppholdInntektOgPerioder/OppholdInntektOgPerioderForm';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<MedlemskapInfoPanel>', () => {
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

    const wrapper = shallowWithIntl(<MedlemskapInfoPanel.WrappedComponent
      intl={intlMock}
      aksjonspunkter={[avklarStartdatoAksjonspunkt]}
      hasOpenAksjonspunkter={false}
      submittable
      readOnly
      submitCallback={sinon.spy()}
      alleMerknaderFraBeslutter={{}}
      behandlingType={{
        kode: 'TEst',
        kodeverk: '',
      }}
      behandlingStatus={{
        kode: behandlingStatus.BEHANDLING_UTREDES,
        kodeverk: '',
      }}
      soknad={{} as Soknad}
      alleKodeverk={{} as AlleKodeverk}
      medlemskap={{} as Medlemskap}
      readOnlyForStartdatoForForeldrepenger={false}
    />, messages);

    expect(wrapper.find(StartdatoForForeldrepengerperiodenForm)).toHaveLength(1);
    expect(wrapper.find(OppholdInntektOgPerioderForm)).toHaveLength(0);
  });

  it('skal vise begge medlemskapsformer når aksjonspunkt for overstyrt startdato for foreldrepengerperioden er avklart', () => {
    const avklarStartdatoAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO,
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

    const wrapper = shallowWithIntl(<MedlemskapInfoPanel.WrappedComponent
      intl={intlMock}
      aksjonspunkter={[avklarStartdatoAksjonspunkt]}
      hasOpenAksjonspunkter={false}
      submittable
      readOnly
      submitCallback={sinon.spy()}
      alleMerknaderFraBeslutter={{}}
      behandlingType={{
        kode: 'TEst',
        kodeverk: '',
      }}
      behandlingStatus={{
        kode: behandlingStatus.BEHANDLING_UTREDES,
        kodeverk: '',
      }}
      soknad={{} as Soknad}
      alleKodeverk={{} as AlleKodeverk}
      medlemskap={{} as Medlemskap}
      readOnlyForStartdatoForForeldrepenger={false}
    />, messages);

    expect(wrapper.find(StartdatoForForeldrepengerperiodenForm)).toHaveLength(1);
    expect(wrapper.find(OppholdInntektOgPerioderForm)).toHaveLength(1);
  });

  it('skal vise panel for avklaring av startdato for foreldrepengerperioden, for å tilate manuell korrigering selvom aksjonspunktet ikke finnes', () => {
    const wrapper = shallowWithIntl(<MedlemskapInfoPanel.WrappedComponent
      intl={intlMock}
      aksjonspunkter={[]}
      hasOpenAksjonspunkter={false}
      submittable
      readOnly
      submitCallback={sinon.spy()}
      alleMerknaderFraBeslutter={{}}
      behandlingType={{
        kode: 'TEst',
        kodeverk: '',
      }}
      behandlingStatus={{
        kode: behandlingStatus.BEHANDLING_UTREDES,
        kodeverk: '',
      }}
      soknad={{} as Soknad}
      alleKodeverk={{} as AlleKodeverk}
      medlemskap={{} as Medlemskap}
      readOnlyForStartdatoForForeldrepenger={false}
    />, messages);

    expect(wrapper.find(StartdatoForForeldrepengerperiodenForm)).toHaveLength(1);
    expect(wrapper.find(OppholdInntektOgPerioderForm)).toHaveLength(1);
  });
});
