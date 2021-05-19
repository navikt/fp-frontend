import React from 'react';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { ProsessStegBegrunnelseTextField } from '@fpsak-frontend/prosess-felles';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import { SvangerskapVilkarFormImpl as UnwrappedForm } from './SvangerskapVilkarForm';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<SvangerskapVilkarForm>', () => {
  it('skal vise readonly-form med utgråete knapper når readonly og vilkåret ikke er vurdert', () => {
    const wrapper = shallowWithIntl(<UnwrappedForm
      {...reduxFormPropsMock}
      intl={intlMock}
      avslagsarsaker={[{
        kode: 'TEST_KODE',
        navn: 'testnavn',
        kodeverk: '',
      }]}
      readOnly
      readOnlySubmitButton
      erVilkarOk={undefined}
      status={vilkarUtfallType.OPPFYLT}
      isApOpen
      aksjonspunkter={[]}
      vilkar={[]}
      submitCallback={() => Promise.resolve()}
      onSubmit={() => undefined}
      alleKodeverk={{}}
      originalErVilkarOk
      initialValues={{
        erVilkarOk: true,
      }}
      erIkkeGodkjentAvBeslutter={false}
    />, messages);

    const readonlyForm = wrapper.find(ProsessStegBegrunnelseTextField);
    expect(readonlyForm).toHaveLength(0);
  });
});
