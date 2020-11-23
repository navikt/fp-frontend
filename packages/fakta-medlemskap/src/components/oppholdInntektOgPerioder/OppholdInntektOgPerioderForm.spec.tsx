import React from 'react';
import { expect } from 'chai';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { Hovedknapp } from 'nav-frontend-knapper';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { FagsakPerson, Medlemskap, Soknad } from '@fpsak-frontend/types';

import { FormValues as OppholdFormValues } from './OppholdInntektOgPeriodeForm';
import { OppholdInntektOgPerioderForm, transformValues, FormValues } from './OppholdInntektOgPerioderForm';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-medlemskap';

const perioder: any = [];

describe('<OppholdInntektOgPerioderForm>', () => {
  const arbeidsgiverOpplysningerPerId = {
    973861778: {
      erPrivatPerson: false,
      identifikator: '973861778',
      navn: 'MYGG ROBUST',
    },
  };

  it('skal vise informasjon uten editeringsmuligheter når det ikke finnes aksjonspunkter', () => {
    const wrapper = shallowWithIntl(<OppholdInntektOgPerioderForm
      {...reduxFormPropsMock}
      initialValues={{} as FormValues}
      intl={intlMock}
      aksjonspunkter={[]}
      hasOpenAksjonspunkter={false}
      submittable
      perioder={perioder}
      readOnly
      alleMerknaderFraBeslutter={{}}
      behandlingId={2}
      behandlingVersjon={1}
      alleKodeverk={{}}
      behandlingFormPrefix=""
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      fagsakPerson={{} as FagsakPerson}
      medlemskap={{} as Medlemskap}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).has.length(1);
    expect(wrapper.find(Hovedknapp).prop('disabled')).is.true;
  });

  it('skal avklare bosatt data når en har dette aksjonspunktet', () => {
    const bosattAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
        kodeverk: '',
      },
      status: {
        kode: 's1',
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    };

    const wrapper = shallowWithIntl(<OppholdInntektOgPerioderForm
      {...reduxFormPropsMock}
      initialValues={{} as FormValues}
      intl={intlMock}
      aksjonspunkter={[bosattAksjonspunkt]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      alleMerknaderFraBeslutter={{}}
      behandlingId={2}
      behandlingVersjon={1}
      alleKodeverk={{}}
      behandlingFormPrefix=""
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      fagsakPerson={{} as FagsakPerson}
      medlemskap={{} as Medlemskap}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).has.length(1);
    expect(helpText.children()).has.length(1);
    expect(helpText.childAt(0).prop('id')).is.eql('MedlemskapInfoPanel.ErSokerBosattINorge');

    expect(wrapper.find(Hovedknapp)).has.length(1);
  });

  it('skal avklare perioder når en har dette aksjonspunktet', () => {
    const periodeAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
        kodeverk: '',
      },
      status: {
        kode: 's1',
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    };

    const wrapper = shallowWithIntl(<OppholdInntektOgPerioderForm
      {...reduxFormPropsMock}
      initialValues={{} as FormValues}
      intl={intlMock}
      aksjonspunkter={[periodeAksjonspunkt]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      alleMerknaderFraBeslutter={{}}
      behandlingId={2}
      behandlingVersjon={1}
      alleKodeverk={{}}
      behandlingFormPrefix=""
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      fagsakPerson={{} as FagsakPerson}
      medlemskap={{} as Medlemskap}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    expect(wrapper.find(AksjonspunktHelpTextTemp).childAt(0).prop('id')).is.eql('MedlemskapInfoPanel.GyldigMedlemFolketrygden');

    expect(wrapper.find(Hovedknapp)).has.length(1);
  });

  it('skal avklare oppholdsrett når en har dette aksjonspunktet', () => {
    const oppholdsrettAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
        kodeverk: '',
      },
      status: {
        kode: 's1',
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    };

    const wrapper = shallowWithIntl(<OppholdInntektOgPerioderForm
      {...reduxFormPropsMock}
      initialValues={{} as FormValues}
      intl={intlMock}
      aksjonspunkter={[oppholdsrettAksjonspunkt]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      alleMerknaderFraBeslutter={{}}
      behandlingId={2}
      behandlingVersjon={1}
      alleKodeverk={{}}
      behandlingFormPrefix=""
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      fagsakPerson={{} as FagsakPerson}
      medlemskap={{} as Medlemskap}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    expect(wrapper.find(AksjonspunktHelpTextTemp).childAt(0).prop('id')).is.eql('MedlemskapInfoPanel.EOSBorgerMedOppholdsrett');

    expect(wrapper.find(Hovedknapp)).has.length(1);
  });

  it('skal avklare lovlig opphold når en har dette aksjonspunktet', () => {
    const lovligOppholdAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
        kodeverk: '',
      },
      status: {
        kode: 's1',
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    };

    const wrapper = shallowWithIntl(<OppholdInntektOgPerioderForm
      {...reduxFormPropsMock}
      initialValues={{} as FormValues}
      intl={intlMock}
      aksjonspunkter={[lovligOppholdAksjonspunkt]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      alleMerknaderFraBeslutter={{}}
      behandlingId={2}
      behandlingVersjon={1}
      alleKodeverk={{}}
      behandlingFormPrefix=""
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      fagsakPerson={{} as FagsakPerson}
      medlemskap={{} as Medlemskap}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    expect(wrapper.find(AksjonspunktHelpTextTemp).childAt(0).prop('id')).is.eql('MedlemskapInfoPanel.IkkeEOSBorgerMedLovligOpphold');

    expect(wrapper.find(Hovedknapp)).has.length(1);
  });

  it('skal avklare fortsatt medlemskap når en har dette aksjonspunktet', () => {
    const fortsattMedlemskapAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
        kodeverk: '',
      },
      status: {
        kode: 's1',
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    };

    const wrapper = shallowWithIntl(<OppholdInntektOgPerioderForm
      {...reduxFormPropsMock}
      initialValues={{} as FormValues}
      intl={intlMock}
      aksjonspunkter={[fortsattMedlemskapAksjonspunkt]}
      hasOpenAksjonspunkter
      submittable
      readOnly={false}
      alleMerknaderFraBeslutter={{}}
      behandlingId={2}
      behandlingVersjon={1}
      alleKodeverk={{}}
      behandlingFormPrefix=""
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      fagsakPerson={{} as FagsakPerson}
      medlemskap={{} as Medlemskap}
      behandlingType={{
        kode: behandlingType.FORSTEGANGSSOKNAD,
        kodeverk: '',
      }}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
    />);

    expect(wrapper.find(AksjonspunktHelpTextTemp).childAt(0).prop('id')).is.eql('MedlemskapInfoPanel.HarFortsattMedlemskap');

    expect(wrapper.find(Hovedknapp)).has.length(1);
  });

  it('skal kun avklare aksjonspunkt som er aktive', () => {
    const lovligOppholdAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
        kodeverk: '',
      },
      status: {
        kode: 's1',
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: false,
      erAktivt: false,
    };

    const fortsattMedlemskapAksjonspunkt = {
      id: 1,
      definisjon: {
        kode: aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
        kodeverk: '',
      },
      status: {
        kode: 's1',
        kodeverk: '',
      },
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    };

    const perioder2 = [{
      begrunnelse: 'dawdawdawdawdawda',
      bosattVurdering: null,
      erEosBorger: false,
      lovligOppholdVurdering: true,
      medlemskapManuellVurderingType: null,
      oppholdsrettVurdering: null,
    }] as OppholdFormValues[];

    const transformed = transformValues(perioder2, [lovligOppholdAksjonspunkt, fortsattMedlemskapAksjonspunkt]);

    expect(transformed).has.length(1);
    expect(transformed[0].kode).is.eql(aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP);
  });
});
