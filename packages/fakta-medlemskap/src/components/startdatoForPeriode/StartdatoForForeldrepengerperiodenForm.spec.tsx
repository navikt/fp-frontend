import React from 'react';
import { shallow } from 'enzyme';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { AksjonspunktHelpTextTemp } from '@fpsak-frontend/shared-components';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import {
  Aksjonspunkt, InntektArbeidYtelse, Soknad,
} from '@fpsak-frontend/types';

import messages from '../../../i18n/nb_NO.json';
import { StartdatoForForeldrepengerperiodenForm } from './StartdatoForForeldrepengerperiodenForm';

const intlMock = getIntlMock(messages);

describe('<StartdatoForForeldrepengerperiodenForm>', () => {
  const arbeidsgiverOpplysningerPerId = {
    973861778: {
      erPrivatPerson: false,
      identifikator: '973861778',
      navn: 'MYGG ROBUST',
    },
  };

  it('skal vise form for avklaring av startdato', () => {
    const wrapper = shallow(<StartdatoForForeldrepengerperiodenForm
      {...reduxFormPropsMock}
      intl={intlMock}
      hasAksjonspunkt
      hasOpenAksjonspunkt
      hasOpenMedlemskapAksjonspunkter
      submittable
      overstyringDisabled={false}
      alleMerknaderFraBeslutter={{}}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      aksjonspunkter={[]}
      aksjonspunkt={{} as Aksjonspunkt}
      soknad={{} as Soknad}
      inntektArbeidYtelse={{} as InntektArbeidYtelse}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      readOnlyForStartdatoForForeldrepenger={false}
      behandlingStatus={{
        kode: behandlingStatus.BEHANDLING_UTREDES,
        kodeverk: '',
      }}
    />);

    const helpText = wrapper.find(AksjonspunktHelpTextTemp);
    expect(helpText).toHaveLength(1);
    expect(helpText.prop('isAksjonspunktOpen')).toBe(true);

    const button = wrapper.find(FaktaSubmitButton);
    expect(button).toHaveLength(1);
    expect(button.prop('isReadOnly')).toBe(false);
    expect(button.prop('formName')).toEqual('mockForm');
    expect(button.prop('isSubmittable')).toBe(true);
  });
});
