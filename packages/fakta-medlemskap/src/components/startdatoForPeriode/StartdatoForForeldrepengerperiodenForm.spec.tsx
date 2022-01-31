import React from 'react';
import { shallow } from 'enzyme';

import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { Aksjonspunkt, Soknad } from '@fpsak-frontend/types';

import messages from '../../../i18n/nb_NO.json';
import { StartdatoForForeldrepengerperiodenForm } from './StartdatoForForeldrepengerperiodenForm';

const intlMock = getIntlMock(messages);

describe('<StartdatoForForeldrepengerperiodenForm>', () => {
  it('skal vise form for avklaring av startdato', () => {
    const wrapper = shallow(<StartdatoForForeldrepengerperiodenForm
      {...reduxFormPropsMock}
      intl={intlMock}
      hasAksjonspunkt={false}
      hasOpenAksjonspunkt={false}
      hasOpenMedlemskapAksjonspunkter
      submittable
      overstyringDisabled={false}
      alleMerknaderFraBeslutter={{}}
      aksjonspunkter={[]}
      aksjonspunkt={{} as Aksjonspunkt}
      soknad={{} as Soknad}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      validate={() => undefined}
      readOnlyForStartdatoForForeldrepenger={false}
      behandlingStatus={behandlingStatus.BEHANDLING_UTREDES}
    />);

    const button = wrapper.find(FaktaSubmitButton);
    expect(button).toHaveLength(1);
    expect(button.prop('isReadOnly')).toBe(false);
    expect(button.prop('formName')).toEqual('mockForm');
    expect(button.prop('isSubmittable')).toBe(true);
  });
});
