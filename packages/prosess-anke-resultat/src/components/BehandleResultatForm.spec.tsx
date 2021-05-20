import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import { AnkeResultatForm } from './BehandleResultatForm';

import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<BehandleResultatForm>', () => {
  it('skal rendre komponent korrekt', () => {
    const wrapper = shallow(<AnkeResultatForm
      {...reduxFormPropsMock}
      intl={intlMock}
      previewCallback={sinon.spy()}
      aksjonspunktCode={AksjonspunktCode.FORESLA_VEDTAK_MANUELT}
      readOnly={false}
      alleKodeverk={{}}
      aksjonspunkter={[]}
      submitCallback={sinon.spy()}
      onSubmit={sinon.spy()}
    />);

    expect(wrapper.find('a')).toHaveLength(0);
    expect(wrapper.find('span')).toHaveLength(1);
  });
});
