import React from 'react';
import { shallow } from 'enzyme';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { TextAreaField } from '@fpsak-frontend/form';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../i18n/nb_NO.json';
import { SykdomPanel } from './SykdomPanel';

const intlMock = getIntlMock(messages);

describe('<SykdomPanel>', () => {
  it('skal rendre Sykdomspanel', () => {
    const wrapper = shallow(<SykdomPanel
      {...reduxFormPropsMock}
      intl={intlMock}
      readOnly={false}
      alleMerknaderFraBeslutter={{
        [aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT]: {},
      }}
      aksjonspunkt={{} as Aksjonspunkt}
      morForSykVedFodsel={false}
      submitHandler={() => undefined}
      onSubmit={() => undefined}
    />);

    expect(wrapper.find(TextAreaField)).toHaveLength(1);
  });
});
