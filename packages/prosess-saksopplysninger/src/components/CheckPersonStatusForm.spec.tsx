import React from 'react';

import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { ProsessStegBegrunnelseTextField, ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import personstatusType from '@fpsak-frontend/kodeverk/src/personstatusType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { Aksjonspunkt, Personopplysninger } from '@fpsak-frontend/types';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { RadioOption } from '@fpsak-frontend/form';

import { buildInitialValues, CheckPersonStatusForm as UnwrappedForm } from './CheckPersonStatusForm';
import shallowWithIntl from '../../i18n/intl-enzyme-test-helper-prosess-saksopplysninger';

describe('<CheckPersonStatusForm>', () => {
  const alleKodeverk = {
    [kodeverkTyper.PERSONSTATUS_TYPE]: [{
      kode: 'UKJENT',
      kodeverk: 'PERSONSTATUS_TYPE',
      navn: 'Ukjent',
    }, {
      kode: 'BOSATT',
      kodeverk: 'PERSONSTATUS_TYPE',
      navn: 'Bosatt',
    }],
  };

  it('skal vise hjelpetekst med original personstatus og begrunnelse/submit', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton
      fortsettBehandling={false}
      originalPersonstatusName="Ukjent"
      personStatuser={[]}
      gjeldeneFom="2018-10-10"
      behandlingId={1}
      behandlingVersjon={1}
      behandlingHenlagt={false}
      personopplysninger={{} as Personopplysninger}
      alleKodeverk={{}}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
    />);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    expect(helpText.childAt(0).text()).toEqual(
      'Søker har personstatus: Ukjent. Vurder om behandlingen skal henlegges eller kan fortsette med endret personstatus',
    );

    const submit = wrapper.find(ProsessStegBegrunnelseTextField);
    expect(submit).toHaveLength(1);
  });

  it('skal vise radioknapper for å velge om behandlingen skal fortsette eller henlegges', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton
      fortsettBehandling={false}
      originalPersonstatusName="Ukjent"
      personStatuser={[]}
      gjeldeneFom="2018-10-10"
      behandlingId={1}
      behandlingVersjon={1}
      behandlingHenlagt={false}
      personopplysninger={{} as Personopplysninger}
      alleKodeverk={{}}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
    />);

    const radios = wrapper.find(RadioOption);
    expect(radios).toHaveLength(2);
    // @ts-ignore
    expect(radios.first().prop('label').id).toEqual('CheckPersonStatusForm.HaltBehandling');
    // @ts-ignore
    expect(radios.last().prop('label').id).toEqual('CheckPersonStatusForm.ContinueBehandling');
  });

  it('skal vise en radioknapp for alle personstatuser', () => {
    const personstatuser = [{
      kode: 'BOSATT',
      navn: 'Bosatt',
      kodeverk: '',
    }, {
      kode: 'ANNEN',
      navn: 'Annen',
      kodeverk: '',
    }];
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      readOnlySubmitButton
      fortsettBehandling
      originalPersonstatusName="Ukjent"
      personStatuser={personstatuser}
      gjeldeneFom="2018-10-10"
      behandlingId={1}
      behandlingVersjon={1}
      behandlingHenlagt={false}
      personopplysninger={{} as Personopplysninger}
      alleKodeverk={{}}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
    />);

    const radios = wrapper.find(RadioOption);
    expect(radios).toHaveLength(4);
    expect(radios.at(2).prop('value')).toEqual('BOSATT');
    expect(radios.at(2).prop('label')).toEqual('Bosatt');
    expect(radios.at(3).prop('value')).toEqual('ANNEN');
    expect(radios.at(3).prop('label')).toEqual('Annen');
  });

  it('skal vise readonly-form når status er readonly', () => {
    const initialValues = {
      fortsettBehandling: 'false',
      begrunnelse: 'Dette er en begrunnelse',
    };
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly
      readOnlySubmitButton
      fortsettBehandling={false}
      originalPersonstatusName="Ukjent"
      initialValues={initialValues}
      personStatuser={[]}
      gjeldeneFom="2018-10-10"
      behandlingId={1}
      behandlingVersjon={1}
      behandlingHenlagt={false}
      personopplysninger={{} as Personopplysninger}
      alleKodeverk={{}}
      aksjonspunkter={[]}
      submitCallback={() => undefined}
    />);

    const radioGroupField = wrapper.find('RadioGroupField');
    expect(radioGroupField).toHaveLength(1);
    expect(radioGroupField.prop('readOnly')).toBe(true);

    const info = wrapper.find(ProsessStegBegrunnelseTextField);
    expect(info).toHaveLength(1);
    expect(info.prop('readOnly')).toBe(true);
    const button = wrapper.find(ProsessStegSubmitButton);
    expect(button).toHaveLength(1);
    expect(button.prop('isReadOnly')).toBe(true);
  });

  it('skal sette opp initielle verdier gitt behandling og behandlingspunkt', () => {
    const behandlingHenlagt = true;
    const personopplysning = {
      personstatus: {
        kode: 'UKJENT',
        kodeverk: 'PERSONSTATUS_TYPE',
      },
      avklartPersonstatus: {
        orginalPersonstatus: {
          kode: 'UKJENT',
          kodeverk: 'PERSONSTATUS_TYPE',
        },
        overstyrtPersonstatus: {
          kode: personstatusType.BOSATT,
          kodeverk: 'PERSONSTATUS_TYPE',
        },
      },
    } as Personopplysninger;
    const aksjonspunkter = [{
      definisjon: {
        kode: 'test',
      },
      status: {
        kode: aksjonspunktStatus.AVBRUTT,
      },
      begrunnelse: 'Dette er en begrunnelse',
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(behandlingHenlagt, aksjonspunkter, personopplysning, alleKodeverk);

    expect(initialValues).toEqual({
      originalPersonstatusName: 'Ukjent',
      fortsettBehandling: false,
      personstatus: personstatusType.BOSATT,
      begrunnelse: aksjonspunkter[0].begrunnelse,
    });
  });

  it('skal fortsette behandlingen når aksjonspunkt er lukket og behandlingsstatus er ulik avsluttet', () => {
    const behandlingHenlagt = false;
    const personopplysning = {
      personstatus: {
        kode: 'UKJENT',
        kodeverk: 'PERSONSTATUS_TYPE',
      },
      avklartPersonstatus: {
        orginalPersonstatus: {
          kode: 'UKJENT',
          kodeverk: 'PERSONSTATUS_TYPE',
        },
        overstyrtPersonstatus: {
          kode: personstatusType.BOSATT,
          kodeverk: 'PERSONSTATUS_TYPE',
        },
      },
    } as Personopplysninger;
    const aksjonspunkter = [{
      definisjon: {
        kode: 'test',
      },
      status: {
        kode: aksjonspunktStatus.AVBRUTT,
      },
      begrunnelse: 'Dette er en begrunnelse',
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(behandlingHenlagt, aksjonspunkter, personopplysning, alleKodeverk);

    expect(initialValues).toEqual({
      originalPersonstatusName: 'Ukjent',
      fortsettBehandling: true,
      personstatus: personstatusType.BOSATT,
      begrunnelse: aksjonspunkter[0].begrunnelse,
    });
  });

  it('skal ikke ha satt verdi for om behandlingen skal fortsette om aksjonspunktet er åpent', () => {
    const behandlingHenlagt = false;
    const personopplysning = {
      personstatus: {
        kode: 'UKJENT',
        kodeverk: 'PERSONSTATUS_TYPE',
      },
    } as Personopplysninger;
    const aksjonspunkter = [{
      definisjon: {
        kode: 'test',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
      },
      begrunnelse: 'Dette er en begrunnelse',
    }] as Aksjonspunkt[];

    const initialValues = buildInitialValues.resultFunc(behandlingHenlagt, aksjonspunkter, personopplysning, alleKodeverk);

    expect(initialValues).toEqual({
      originalPersonstatusName: 'Ukjent',
      fortsettBehandling: undefined,
      personstatus: undefined,
      begrunnelse: aksjonspunkter[0].begrunnelse,
    });
  });
});
