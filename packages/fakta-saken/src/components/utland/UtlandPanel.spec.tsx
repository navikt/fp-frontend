import React from 'react';
import sinon from 'sinon';

import { reduxFormPropsMock } from '@fpsak-frontend/utils-test/src/redux-form-test-helper';
import { intlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import { RadioGroupField } from '@fpsak-frontend/form';
import { Image } from '@fpsak-frontend/shared-components';

import { UtlandPanelImpl as UtlandPanel } from './UtlandPanel';
import shallowWithIntl from '../../../i18n/intl-enzyme-test-helper-fakta-saken';

describe('<UtlandPanel>', () => {
  it('skal vise komponent både før og etter editeringsmodus', () => {
    const wrapper = shallowWithIntl(
      <UtlandPanel
        {...reduxFormPropsMock}
        intl={intlMock}
        behandlingId={1}
        behandlingVersjon={2}
        aksjonspunkter={[]}
        submitCallback={() => undefined}
        onSubmit={() => undefined}
        readOnly={false}
        dirty
        handleSubmit={sinon.spy()}
        reset={sinon.spy()}
      />,
    );

    expect(wrapper.find(Image)).toHaveLength(1);
    expect(wrapper.find(RadioGroupField)).toHaveLength(0);

    wrapper.find(Image).prop('onClick')({} as React.MouseEvent);

    expect(wrapper.find(Image)).toHaveLength(0);
    expect(wrapper.find(RadioGroupField)).toHaveLength(1);
  });
});
