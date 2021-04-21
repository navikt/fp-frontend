import React from 'react';
import sinon from 'sinon';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { shallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { RadioGroupField } from '@fpsak-frontend/form';
import { Image } from '@fpsak-frontend/shared-components';

import { UtlandPanelImpl as UtlandPanel } from './UtlandPanel';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<UtlandPanel>', () => {
  it('skal vise komponent både før og etter editeringsmodus', () => {
    const wrapper = shallowWithIntl(
      <UtlandPanel
        {...reduxFormPropsMock}
        intl={intlMock}
        aksjonspunkter={[]}
        submitCallback={() => undefined}
        onSubmit={() => undefined}
        readOnly={false}
        dirty
        handleSubmit={sinon.spy()}
        reset={sinon.spy()}
      />, messages,
    );

    expect(wrapper.find(Image)).toHaveLength(1);
    expect(wrapper.find(RadioGroupField)).toHaveLength(0);

    wrapper.find(Image).prop('onClick')({} as React.MouseEvent);

    expect(wrapper.find(Image)).toHaveLength(0);
    expect(wrapper.find(RadioGroupField)).toHaveLength(1);
  });
});
