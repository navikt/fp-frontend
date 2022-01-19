import React from 'react';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  AlleKodeverk, FamilieHendelseSamling, Personoversikt, UttakKontrollerFaktaPerioder, Ytelsefordeling,
} from '@fpsak-frontend/types';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';

import { transformValues, UttakFaktaForm } from './UttakFaktaForm';
import messages from '../../i18n/nb_NO.json';

const ap5070 = {
  aksjonspunktType: 'MANU',
  kode: 'MANU',
  kodeverk: 'AKSJONSPUNKT_TYPE',
  navn: 'Manuell',
  begrunnelse: 'test2',
  besluttersBegrunnelse: null,
  definisjon: '5070',
  erAktivt: true,
  kanLoses: true,
  status: 'UTFO',
  toTrinnsBehandling: true,
  toTrinnsBehandlingGodkjent: null,
  vilkarType: null,
  vurderPaNyttArsaker: null,
};

const ap6070 = {
  aksjonspunktType: 'MANU',
  kode: 'MANU',
  kodeverk: 'AKSJONSPUNKT_TYPE',
  navn: 'Manuell',
  begrunnelse: 'test2',
  besluttersBegrunnelse: null,
  definisjon: '6070',
  erAktivt: true,
  kanLoses: true,
  status: 'UTFO',
  toTrinnsBehandling: true,
  toTrinnsBehandlingGodkjent: null,
  vilkarType: null,
  vurderPaNyttArsaker: null,
};

const ap6013 = {
  aksjonspunktType: 'MANU',
  kode: 'MANU',
  kodeverk: 'AKSJONSPUNKT_TYPE',
  navn: 'Manuell',
  begrunnelse: 'test2',
  besluttersBegrunnelse: null,
  definisjon: '6013',
  erAktivt: true,
  kanLoses: true,
  status: 'OPPR',
  toTrinnsBehandling: true,
  toTrinnsBehandlingGodkjent: null,
  vilkarType: null,
  vurderPaNyttArsaker: null,
};

describe('<UttakFaktaForm>', () => {
  it('skal vise error melding hvis det er noe error', () => {
    const formProps = {
      error: 'Perioder overlapper',
    };
    const wrapper = shallowWithIntl(
      <UttakFaktaForm
        {...reduxFormPropsMock}
        readOnly={false}
        hasOpenAksjonspunkter
        submitting={false}
        initialValues={{}}
        aksjonspunkter={[]}
        hasRevurderingOvertyringAp={false}
        alleKodeverk={{} as AlleKodeverk}
        kanOverstyre={false}
        faktaArbeidsforhold={[]}
        personoversikt={{} as Personoversikt}
        behandlingStatus={behandlingStatus.OPPRETTET}
        familiehendelse={{} as FamilieHendelseSamling}
        vilkarForSykdomExists
        uttakPerioder={{} as UttakKontrollerFaktaPerioder[]}
        ytelsefordeling={{} as Ytelsefordeling}
        submitCallback={() => undefined}
        validate={() => undefined}
        warn={() => undefined}
        onSubmit={() => undefined}
        arbeidsgiverOpplysningerPerId={{}}
        submittable
        {...formProps}
      />, messages,
    );

    const span = wrapper.find('span');
    expect(span).toHaveLength(1);
    expect(span.text()).toBe('Perioder overlapper');
  });

  it('skal kun sende 5070 når man har både 5070 og 6070', () => {
    const values = {
      perioder: [],
    };

    const transformedValues = transformValues(values, {}, [ap6070, ap5070]);
    expect(transformedValues.filter((ap) => ap.kode === aksjonspunktCodes.AVKLAR_UTTAK)).toHaveLength(1);
  });

  it('skal sende 6013 hvis ingen andre aksjonspunkter og manuelloverstyrt', () => {
    const values = {
      perioder: [],
      faktaUttakManuellOverstyring: true,
    };

    const transformedValues = transformValues(values, {}, []);
    expect(transformedValues.filter((ap) => ap.kode === aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK)).toHaveLength(1);
  });

  it('skal sende 6013 hvis 6013 er OPPR og ikke 5070', () => {
    const values = {
      perioder: [],
      faktaUttakManuellOverstyring: false,
    };

    const transformedValues = transformValues(values, {}, [ap6013]);
    expect(transformedValues.filter((ap) => ap.kode === aksjonspunktCodes.OVERSTYR_AVKLAR_FAKTA_UTTAK)).toHaveLength(1);
  });
});
