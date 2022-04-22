import React from 'react';

import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { getIntlMock, shallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { Hovedknapp } from 'nav-frontend-knapper';
import { AksjonspunktHelpTextTemp } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk, Medlemskap, Soknad } from '@fpsak-frontend/types';

import { FormValues as OppholdFormValues } from './OppholdInntektOgPeriodeForm';
import { OppholdInntektOgPerioderForm, transformValues, FormValues } from './OppholdInntektOgPerioderForm';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const perioder: any = [];

describe('<OppholdInntektOgPerioderForm>', () => {
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
      alleKodeverk={{} as AlleKodeverk}
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      medlemskap={{} as Medlemskap}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />, messages);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    expect(wrapper.find(Hovedknapp).prop('disabled')).toBe(true);
  });

  it('skal avklare bosatt data når en har dette aksjonspunktet', () => {
    const bosattAksjonspunkt = {
      id: 1,
      definisjon: aksjonspunktCodes.AVKLAR_OM_BRUKER_ER_BOSATT,
      status: 's1',
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
      alleKodeverk={{} as AlleKodeverk}
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      medlemskap={{} as Medlemskap}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />, messages);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    expect(helpText.children()).toHaveLength(1);
    expect(helpText.childAt(0).prop('id')).toEqual('MedlemskapInfoPanel.ErSokerBosattINorge');

    expect(wrapper.find(Hovedknapp)).toHaveLength(1);
  });

  it('skal avklare perioder når en har dette aksjonspunktet', () => {
    const periodeAksjonspunkt = {
      id: 1,
      definisjon: aksjonspunktCodes.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE,
      status: 's1',
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
      alleKodeverk={{} as AlleKodeverk}
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      medlemskap={{} as Medlemskap}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />, messages);

    expect(wrapper.find(AksjonspunktHelpTextTemp).childAt(0).prop('id')).toEqual('MedlemskapInfoPanel.GyldigMedlemFolketrygden');

    expect(wrapper.find(Hovedknapp)).toHaveLength(1);
  });

  it('skal avklare oppholdsrett når en har dette aksjonspunktet', () => {
    const oppholdsrettAksjonspunkt = {
      id: 1,
      definisjon: aksjonspunktCodes.AVKLAR_OPPHOLDSRETT,
      status: 's1',
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
      alleKodeverk={{} as AlleKodeverk}
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      medlemskap={{} as Medlemskap}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />, messages);

    expect(wrapper.find(AksjonspunktHelpTextTemp).childAt(0).prop('id')).toEqual('MedlemskapInfoPanel.EOSBorgerMedOppholdsrett');

    expect(wrapper.find(Hovedknapp)).toHaveLength(1);
  });

  it('skal avklare lovlig opphold når en har dette aksjonspunktet', () => {
    const lovligOppholdAksjonspunkt = {
      id: 1,
      definisjon: aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
      status: 's1',
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
      alleKodeverk={{} as AlleKodeverk}
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      medlemskap={{} as Medlemskap}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />, messages);

    expect(wrapper.find(AksjonspunktHelpTextTemp).childAt(0).prop('id')).toEqual('MedlemskapInfoPanel.IkkeEOSBorgerMedLovligOpphold');

    expect(wrapper.find(Hovedknapp)).toHaveLength(1);
  });

  it('skal avklare fortsatt medlemskap når en har dette aksjonspunktet', () => {
    const fortsattMedlemskapAksjonspunkt = {
      id: 1,
      definisjon: aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
      status: 's1',
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
      alleKodeverk={{} as AlleKodeverk}
      reduxFormReset={() => undefined}
      reduxFormChange={() => undefined}
      soknad={{} as Soknad}
      medlemskap={{} as Medlemskap}
      behandlingType={behandlingType.FORSTEGANGSSOKNAD}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
    />, messages);

    expect(wrapper.find(AksjonspunktHelpTextTemp).childAt(0).prop('id')).toEqual('MedlemskapInfoPanel.HarFortsattMedlemskap');

    expect(wrapper.find(Hovedknapp)).toHaveLength(1);
  });

  it('skal kun avklare aksjonspunkt som er aktive', () => {
    const lovligOppholdAksjonspunkt = {
      id: 1,
      definisjon: aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD,
      status: 's1',
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: false,
      erAktivt: false,
    };

    const fortsattMedlemskapAksjonspunkt = {
      id: 1,
      definisjon: aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP,
      status: 's1',
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false,
      kanLoses: true,
      erAktivt: true,
    };

    const perioder2 = [{
      aksjonspunkter: [aksjonspunktCodes.AVKLAR_LOVLIG_OPPHOLD],
      begrunnelse: 'dawdawdawdawdawda',
      bosattVurdering: null,
      erEosBorger: false,
      lovligOppholdVurdering: true,
      medlemskapManuellVurderingType: null,
      oppholdsrettVurdering: null,
      vurderingsdato: '2019-10-06',
      årsaker: ['STATSBORGERSKAP'],
    }] as OppholdFormValues[];

    const transformed = transformValues(perioder2, [lovligOppholdAksjonspunkt, fortsattMedlemskapAksjonspunkt]);

    expect(transformed).toHaveLength(1);
    expect(transformed[0].kode).toEqual(aksjonspunktCodes.AVKLAR_FORTSATT_MEDLEMSKAP);
  });
});
