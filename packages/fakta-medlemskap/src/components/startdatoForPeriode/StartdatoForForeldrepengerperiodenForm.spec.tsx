import React from 'react';
import { expect } from 'chai';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import {
  Aksjonspunkt, InntektArbeidYtelse, Soknad,
} from '@fpsak-frontend/types';

import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-medlemskap';
import { StartdatoForForeldrepengerperiodenForm } from './StartdatoForForeldrepengerperiodenForm';

describe('<StartdatoForForeldrepengerperiodenForm>', () => {
  const arbeidsgiverOpplysningerPerId = {
    973861778: {
      erPrivatPerson: false,
      identifikator: '973861778',
      navn: 'MYGG ROBUST',
    },
  };

  it('skal vise form for avklaring av startdato', () => {
    const wrapper = shallowWithIntl(<StartdatoForForeldrepengerperiodenForm
      {...reduxFormPropsMock}
      intl={intlMock}
      hasAksjonspunkt
      hasOpenAksjonspunkt
      hasOpenMedlemskapAksjonspunkter
      submittable
      overstyringDisabled={false}
      alleMerknaderFraBeslutter={{}}
      behandlingId={1}
      behandlingVersjon={1}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      aksjonspunkter={[]}
      aksjonspunkt={{} as Aksjonspunkt}
      soknad={{} as Soknad}
      inntektArbeidYtelse={{} as InntektArbeidYtelse}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      readOnlyForStartdatoForForeldrepenger={false}
      behandlingStatus={{
        kode: behandlingStatus.BEHANDLING_UTREDES,
        kodeverk: '',
      }}
    />);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).has.length(1);
    expect(helpText.prop('isAksjonspunktOpen')).is.true;

    const button = wrapper.find(FaktaSubmitButton);
    expect(button).has.length(1);
    expect(button.prop('isReadOnly')).is.false;
    expect(button.prop('formName')).is.eql('mockForm');
    expect(button.prop('isSubmittable')).is.true;
  });
});
