import React from 'react';
import { shallow } from 'enzyme';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { Aksjonspunkt } from '@fpsak-frontend/types';

import { RegistrereVergeInfoPanelImpl } from './RegistrereVergeInfoPanel';
import RegistrereVergeFaktaForm from './RegistrereVergeFaktaForm';
import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<RegistrereVergeInfoPanel>', () => {
  it('skal vise faktapanel og form for registrere verge', () => {
    const wrapper = shallow(<RegistrereVergeInfoPanelImpl
      {...reduxFormPropsMock}
      intl={intlMock}
      hasOpenAksjonspunkter
      readOnly={false}
      vergetyper={[]}
      alleMerknaderFraBeslutter={{}}
      submitCallback={() => undefined}
      onSubmit={() => undefined}
      aksjonspunkter={[{
        id: 100001,
        definisjon: { kode: '5030', kodeverk: '' },
        status: { kode: 'OPPR', kodeverk: 'AKSJONSPUNKT_STATUS' },
        kanLoses: true,
        erAktivt: true,
      } as Aksjonspunkt]}
      alleKodeverk={{}}
      verge={{}}
    />);

    const panel = wrapper.find(RegistrereVergeFaktaForm);
    expect(panel).toHaveLength(1);
  });
});
